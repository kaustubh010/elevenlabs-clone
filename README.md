# ElevenLabs Clone - AI Voice Generator

A modern, professional text-to-speech interface built with Next.js, MongoDB, and Tailwind CSS. Features a sleek UI with hover animations and full MongoDB integration for managing audio files.

## 🚀 Features

- **Professional UI Design**: Modern, responsive interface with smooth hover animations
- **MongoDB Integration**: Full database integration for storing and retrieving audio files
- **Multi-language Support**: English and Arabic language support with flag indicators
- **Real-time Audio Playback**: Seamless audio streaming and playback functionality
- **Download Functionality**: Direct audio file downloads
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Loading States**: Professional loading indicators and error handling
- **Modern Animations**: Smooth transitions and hover effects throughout the interface

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Database**: MongoDB
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Audio**: HTML5 Audio API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd elevenlabs-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up MongoDB**
   
   **Option A: Local MongoDB**
   - Install MongoDB locally
   - Create a database named `elevenlabs_clone`
   
   **Option B: MongoDB Atlas (Recommended)**
   - Create a MongoDB Atlas account
   - Create a new cluster
   - Get your connection string

4. **Configure environment variables**
   - Copy `.env.local` and update with your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb://localhost:27017/elevenlabs_clone
   # OR for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/elevenlabs_clone
   ```

5. **Seed the database**
   ```bash
   npm run seed-db
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Usage

### Basic Text-to-Speech

1. **Enter Text**: Type or paste your text into the text area
2. **Select Language**: Choose between English and Arabic from the dropdown
3. **Generate Speech**: Click the "PLAY" button to generate and play audio
4. **Download Audio**: Use the download button to save the audio file

### API Endpoints

#### GET /api/audio
Fetch audio URL based on language parameter.

**Parameters:**
- `lang` (string): Language code ('en' or 'ar')

**Response:**
```json
{
  "audioUrl": "https://example.com/audio.wav",
  "title": "Audio Sample",
  "language": "en"
}
```

### Database Schema

The MongoDB collection `audio_files` stores audio data with the following structure:

```javascript
{
  _id: ObjectId,
  language: "en" | "ar",
  audioUrl: "https://example.com/audio.wav",
  title: "Audio Title",
  description: "Audio description",
  voiceType: "male" | "female",
  duration: 60, // in seconds
  createdAt: Date,
  metadata: {
    sampleRate: 44100,
    bitRate: 320,
    format: "wav"
  }
}
```

## 🎨 UI Features

### Hover Effects
- **Buttons**: Scale and shadow effects on hover
- **Navigation**: Color transitions and background changes
- **Cards**: Smooth elevation and border animations
- **Tabs**: Gradient backgrounds and scaling effects

### Animations
- **Fade-in**: Content appears with smooth fade-in effects
- **Loading**: Professional spinner animations
- **Transitions**: Smooth color and size transitions
- **Background**: Animated gradient backgrounds with floating elements

### Responsive Design
- **Mobile-first**: Optimized for mobile devices
- **Tablet**: Adjusted layouts for medium screens
- **Desktop**: Full-featured desktop experience

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed on any platform supporting Next.js:
- Netlify
- Railway
- AWS
- Google Cloud
- Azure

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run seed-db` - Seed MongoDB with sample data

### Project Structure
```
├── app/
│   ├── api/audio/          # Audio API endpoint
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── header.tsx          # Navigation header
│   └── text-to-speech-interface.tsx  # Main TTS component
├── lib/
│   └── mongodb.ts          # Database connection
├── scripts/
│   └── seed-database.js    # Database seeding script
└── .env.local              # Environment variables
```

## 🎯 Key Components

### TextToSpeechInterface
The main component featuring:
- Professional gradient design
- Tab-based navigation
- Language selection dropdown
- Audio controls with loading states
- Character counter
- Responsive layout

### Header
Modern navigation with:
- Logo with icon
- Animated navigation items
- Gradient CTA buttons
- Hover effects throughout

### Audio API
RESTful API with:
- MongoDB integration
- Automatic database initialization
- Error handling with fallbacks
- Language-based audio retrieval

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙋‍♂️ Support

If you have any questions or need help setting up the project, please:

1. Check the existing documentation
2. Search through GitHub issues
3. Create a new issue with detailed information

## 🔮 Roadmap

- [ ] Additional language support
- [ ] Voice selection options
- [ ] Real-time text-to-speech generation
- [ ] User authentication and profiles
- [ ] Audio history and favorites
- [ ] Advanced audio controls (speed, pitch)
- [ ] API rate limiting
- [ ] Audio quality options
- [ ] Batch processing capabilities

---

Built with ❤️ using Next.js and modern web technologies.
