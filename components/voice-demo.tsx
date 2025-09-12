import { Button } from "@/components/ui/button"
import { Play, Download, ChevronDown } from "lucide-react"

const speakers = [
  { name: "Samara", description: "Narrate a story", color: "bg-blue-100" },
  { name: "2 speakers", description: "Create a dialogue", color: "bg-pink-100" },
  { name: "Announcer", description: "Voiceover a game", color: "bg-green-100" },
  { name: "Sergeant", description: "Play a drill sergeant", color: "bg-purple-100" },
  { name: "Spade", description: "Recount an old story", color: "bg-blue-100" },
  { name: "Jessica", description: "Provide customer support", color: "bg-pink-100" },
]

export function VoiceDemo() {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Demo text box */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8 shadow-sm">
        <div className="text-gray-800 leading-relaxed">
          In the ancient land of Eldoria, where skies shimmered and forests, whispered secrets to the wind, lived a
          dragon named Zephyros. <span className="text-purple-500 font-medium">[sarcastically]</span> Not the "burn it
          all down" kind... <span className="text-purple-500 font-medium">[giggles]</span> but he was gentle, wise, with
          eyes like old stars.
          <span className="text-purple-500 font-medium"> [whispers]</span> Even the birds fell silent when he passed.
        </div>
      </div>

      {/* Speaker options */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {speakers.map((speaker, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <div className={`w-3 h-3 rounded-full ${speaker.color}`} />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900">{speaker.name}</div>
              <div className="text-xs text-gray-500 truncate">{speaker.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/us-flag-waving.png" alt="US Flag" className="w-6 h-4" />
          <span className="text-sm font-medium text-gray-700">ENGLISH</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>

        <div className="flex items-center space-x-3">
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 flex items-center space-x-2">
            <Play className="w-4 h-4 fill-current" />
            <span className="font-medium">PLAY</span>
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="text-center mt-4">
        <span className="text-xs text-gray-500">Powered by Eleven v3 (alpha)</span>
      </div>
    </div>
  )
}
