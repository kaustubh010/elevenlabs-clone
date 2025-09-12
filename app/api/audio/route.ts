import { type NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"

// Audio data interface
interface AudioData {
  _id?: string
  language: string
  audioUrl: string
  title?: string
  description?: string
  createdAt: Date
}

// Initialize database with sample data
async function initializeAudioData() {
  try {
    const db = await getDatabase()
    const collection = db.collection<AudioData>('audio_files')
    
    // Check if data already exists
    const existingCount = await collection.countDocuments()
    
    if (existingCount === 0) {
      // Insert sample audio data
      const sampleData: AudioData[] = [
        {
          language: 'en',
          audioUrl: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
          title: 'English Audio Sample',
          description: 'Sample English text-to-speech audio',
          createdAt: new Date()
        },
        {
          language: 'ar',
          audioUrl: 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav',
          title: 'Arabic Audio Sample',
          description: 'Sample Arabic text-to-speech audio',
          createdAt: new Date()
        }
      ]
      
      await collection.insertMany(sampleData)
      console.log('Sample audio data initialized in MongoDB')
    }
  } catch (error) {
    console.error('Error initializing audio data:', error)
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const lang = searchParams.get("lang") || "en"

    // Initialize database if needed
    await initializeAudioData()

    // Connect to MongoDB and fetch audio data
    const db = await getDatabase()
    const collection = db.collection<AudioData>('audio_files')
    
    // Query for audio URL based on language
    const audioData = await collection.findOne({ language: lang })
    
    if (!audioData) {
      // Fallback to English if language not found
      const fallbackData = await collection.findOne({ language: 'en' })
      
      return NextResponse.json({ 
        audioUrl: fallbackData?.audioUrl || '',
        title: fallbackData?.title || 'Audio not found',
        language: 'en'
      })
    }

    return NextResponse.json({ 
      audioUrl: audioData.audioUrl,
      title: audioData.title || 'Audio Sample',
      language: audioData.language
    })
  } catch (error) {
    console.error('Error fetching audio data:', error)
    
    // Fallback to hardcoded URLs in case of database error
    const fallbackUrls = {
      en: "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav",
      ar: "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav"
    }
    
    const lang = new URL(request.url).searchParams.get("lang") || "en"
    const audioUrl = fallbackUrls[lang as keyof typeof fallbackUrls] || fallbackUrls.en
    
    return NextResponse.json({ 
      audioUrl,
      title: 'Fallback Audio',
      language: lang,
      error: 'Database connection failed, using fallback'
    })
  }
}
