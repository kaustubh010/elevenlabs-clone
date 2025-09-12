import { Button } from "@/components/ui/button"
import { ChevronDown, Zap } from "lucide-react"

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="text-xl font-bold text-black">ElevenLabs</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-200 hover:scale-105 px-2 py-1 rounded-md hover:bg-blue-50">
              <span className="font-medium">Creative Platform</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-200 hover:scale-105 px-2 py-1 rounded-md hover:bg-blue-50">
              <span className="font-medium">Agents Platform</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-200 hover:scale-105 px-2 py-1 rounded-md hover:bg-blue-50">
              <span className="font-medium">Developers</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-200 hover:scale-105 px-2 py-1 rounded-md hover:bg-blue-50">
              <span className="font-medium">Resources</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-all duration-200 hover:scale-105 px-2 py-1 rounded-md hover:bg-blue-50">
              Enterprise
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-all duration-200 hover:scale-105 px-2 py-1 rounded-md hover:bg-blue-50">
              Pricing
            </a>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 cursor-pointer font-medium transition-all duration-200 hover:scale-105 px-4 py-2 rounded-full"
            >
              Log in
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
