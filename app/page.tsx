import { Header } from "@/components/header"
import { TextToSpeechInterface } from "@/components/text-to-speech-interface"
import { VoiceChatWidget } from "@/components/voice-chat-widget"
import { Button } from "@/components/ui/button"
import { Sparkles, Mic, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <Header />

      <main className="relative z-10">
        {/* Hero section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            {/* Hero badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-200">
              <Sparkles className="w-4 h-4" />
              <span>Introducing ElevenLabs v3 Alpha</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance leading-tight">
              The most <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">realistic voice AI</span> platform
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto text-pretty leading-relaxed">
              AI voice models and products powering millions of developers, creators, and enterprises. From low-latency
              conversational agents to the leading AI voice generator for voiceovers and audiobooks.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <Mic className="w-4 h-4 mr-2" />
                START FOR FREE
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 rounded-full px-8 py-3 text-sm font-semibold bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md cursor-pointer"
              >
                <Zap className="w-4 h-4 mr-2" />
                CONTACT SALES
              </Button>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">10M+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <TextToSpeechInterface />
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px] opacity-20"></div>
          
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your voice experience?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join millions of creators, developers, and businesses using ElevenLabs to create exceptional voice experiences.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <Mic className="w-4 h-4 mr-2" />
              GET STARTED FREE
            </Button>
          </div>
        </section>
      </main>

      <VoiceChatWidget />
    </div>
  )
}
