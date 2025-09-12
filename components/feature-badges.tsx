import { Mic, Users, Music, MessageSquare, Copy, Zap, Headphones } from "lucide-react"

const features = [
  { icon: Mic, label: "TEXT TO SPEECH" },
  { icon: Users, label: "AGENTS" },
  { icon: Music, label: "MUSIC" },
  { icon: MessageSquare, label: "SPEECH TO TEXT" },
  { icon: Copy, label: "DUBBING" },
  { icon: Zap, label: "VOICE CLONING" },
  { icon: Headphones, label: "ELEVENREADER" },
]

export function FeatureBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 text-sm text-gray-600"
        >
          <feature.icon className="w-4 h-4" />
          <span className="font-medium">{feature.label}</span>
        </div>
      ))}
    </div>
  )
}
