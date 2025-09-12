const { MongoClient } = require('mongodb');

// Connection URL - replace with your MongoDB connection string
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/elevenlabs_clone';

async function seedDatabase() {
  let client;
  
  try {
    console.log('Connecting to MongoDB...');
    client = new MongoClient(uri);
    await client.connect();
    
    const db = client.db('elevenlabs_clone');
    const collection = db.collection('audio_files');
    
    // Clear existing data
    await collection.deleteMany({});
    console.log('Cleared existing audio data');
    
    // Sample audio data
    const audioData = [
      {
        language: 'en',
        audioUrl: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
        title: 'English Audio Sample',
        description: 'High-quality English text-to-speech sample demonstrating natural voice synthesis',
        voiceType: 'female',
        duration: 60,
        createdAt: new Date(),
        metadata: {
          sampleRate: 44100,
          bitRate: 320,
          format: 'wav'
        }
      },
      {
        language: 'ar',
        audioUrl: 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav',
        title: 'Arabic Audio Sample',
        description: 'Premium Arabic text-to-speech sample with natural pronunciation and intonation',
        voiceType: 'male',
        duration: 45,
        createdAt: new Date(),
        metadata: {
          sampleRate: 44100,
          bitRate: 320,
          format: 'wav'
        }
      },
      {
        language: 'en',
        audioUrl: 'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars3.wav',
        title: 'English Audio Sample 2',
        description: 'Alternative English voice sample with different tone and style',
        voiceType: 'male',
        duration: 30,
        createdAt: new Date(),
        metadata: {
          sampleRate: 44100,
          bitRate: 320,
          format: 'wav'
        }
      }
    ];
    
    // Insert sample data
    const result = await collection.insertMany(audioData);
    console.log(`Successfully inserted ${result.insertedCount} audio samples`);
    
    // Create indexes for better performance
    await collection.createIndex({ language: 1 });
    await collection.createIndex({ createdAt: -1 });
    console.log('Created database indexes');
    
    // Display inserted data
    const insertedData = await collection.find({}).toArray();
    console.log('\\nInserted audio samples:');
    insertedData.forEach((sample, index) => {
      console.log(`${index + 1}. Language: ${sample.language}, Title: ${sample.title}`);
    });
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    if (client) {
      await client.close();
      console.log('\\nDatabase connection closed');
    }
  }
}

// Run the seeding function
if (require.main === module) {
  seedDatabase();
}

module.exports = { seedDatabase };
