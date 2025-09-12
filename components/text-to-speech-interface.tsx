"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Play, Download, ChevronDown, Pause, Volume2, Loader2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const tabs = [
  { id: "text-to-speech", label: "TEXT TO SPEECH", active: true },
  { id: "agents", label: "AGENTS" },
  { id: "music", label: "MUSIC" },
  { id: "speech-to-text", label: "SPEECH TO TEXT" },
  { id: "dubbing", label: "DUBBING" },
  { id: "voice-cloning", label: "VOICE CLONING" },
  { id: "elevenreader", label: "ELEVENREADER" },
]

const languages = [
  { code: "en", label: "ENGLISH", flag: "🇺🇸" },
  { code: "ar", label: "ARABIC", flag: "🇸🇦" },
]

export function TextToSpeechInterface() {
  const [activeTab, setActiveTab] = useState("text-to-speech")
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState(
    'In the ancient land of Eldoria, where skies shimmered and forests, whispered secrets to the wind, lived a dragon named Zephyros. Not the "burn it all down" kind... but he was gentle, wise, with eyes like old stars. Even the birds fell silent when he passed.',
  )
  const audioRef = useRef<HTMLAudioElement>(null)

  const handlePlay = async () => {
    if (isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
      return
    }

    setIsLoading(true)
    try {
      // Fetch audio URL from API based on selected language
      const response = await fetch(`/api/audio?lang=${selectedLanguage.code}`)
      const data = await response.json()

      if (data.audioUrl && audioRef.current) {
        audioRef.current.src = data.audioUrl
        audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.error("Error playing audio:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleAudioEnd = () => {
    setIsPlaying(false)
  }

  const handleDownload = async () => {
    try {
      const response = await fetch(`/api/audio?lang=${selectedLanguage.code}`)
      const data = await response.json()

      if (data.audioUrl) {
        const link = document.createElement("a")
        link.href = data.audioUrl
        link.download = `audio_${selectedLanguage.code}.mp3`
        link.click()
      }
    } catch (error) {
      console.error("Error downloading audio:", error)
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-md ${
              tab.active || activeTab === tab.id 
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "text-to-speech" ? (
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-8 shadow-xl backdrop-blur-sm">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
              <Volume2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">AI Voice Generator</h2>
            <p className="text-gray-600">Transform your text into lifelike speech with advanced AI technology</p>
          </div>

          {/* Text Editor */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Enter your text</label>
            <div className="relative">
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter the text you want to convert to speech..."
                className="min-h-[140px] w-full text-gray-800 leading-relaxed resize-none border-2 border-gray-200 focus:border-blue-500 rounded-xl p-4 text-base transition-all duration-300 focus:shadow-lg"
              />
              <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                {text.length} characters
              </div>
            </div>
          </div>

          {/* Controls Section */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-4">
              {/* Language Selector */}
              <div className="flex items-center space-x-4">
                <label className="text-sm font-semibold text-gray-700">Language:</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="flex items-center space-x-3 px-4 py-2 border-2 border-gray-200 hover:border-blue-500 rounded-full transition-all duration-300 hover:shadow-md cursor-pointer"
                    >
                      <span className="text-2xl">{selectedLanguage.flag}</span>
                      <span className="text-sm font-semibold text-gray-700">{selectedLanguage.label}</span>
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 border-2 border-gray-100 rounded-xl shadow-xl">
                    {languages.map((language) => (
                      <DropdownMenuItem
                        key={language.code}
                        onClick={() => setSelectedLanguage(language)}
                        className="flex items-center space-x-3 p-3 hover:bg-blue-50 cursor-pointer transition-colors duration-200"
                      >
                        <span className="text-2xl">{language.flag}</span>
                        <span className="font-medium">{language.label}</span>
                        {selectedLanguage.code === language.code && (
                          <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                        )}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Action Controls */}
              <div className="flex items-center space-x-3">
                <Button
                  onClick={handlePlay}
                  disabled={isLoading || !text.trim()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-3 flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                  <span className="font-semibold">
                    {isLoading ? "LOADING" : isPlaying ? "PAUSE" : "PLAY"}
                  </span>
                </Button>
                
                <Button 
                  onClick={handleDownload} 
                  variant="outline" 
                  size="sm" 
                  className="p-3 border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 rounded-full transition-all duration-300 hover:shadow-md cursor-pointer"
                  title="Download Audio"
                >
                  <Download className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                </Button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 pt-6 border-t border-gray-100">
            <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
              <Volume2 className="w-4 h-4" />
              <span>Powered by ElevenLabs v3 (Alpha) • Premium AI Voice Technology</span>
            </div>
          </div>

          {/* Hidden audio element */}
          <audio ref={audioRef} onEnded={handleAudioEnd} className="hidden" />
        </div>
      ) : (
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-16 shadow-xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
            <Volume2 className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {tabs.find((t) => t.id === activeTab)?.label}
          </h3>
          <p className="text-gray-500">This feature is coming soon. Stay tuned for updates!</p>
        </div>
      )}
    </div>
  )
}
