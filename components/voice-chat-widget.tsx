import { MessageCircle } from "lucide-react"

export function VoiceChatWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-black text-white rounded-full px-4 py-2 flex items-center space-x-2 shadow-lg cursor-pointer hover:bg-gray-800 transition-colors">
        <MessageCircle className="w-5 h-5" />
        <span className="font-medium">VOICE CHAT</span>
        <img src="/us-flag-waving.png" alt="US Flag" className="w-5 h-3" />
      </div>
      <div className="text-xs text-gray-500 mt-1 text-right">Powered by ElevenLabs Agents</div>
    </div>
  )
}
