"use client";

import { motion } from "motion/react";
import { 
  Tv, Film, Music, Gamepad2, PlaySquare, 
  MonitorPlay, Radio, Video, PlayCircle,
  Headphones, Clapperboard, Youtube,
  Twitch,
  ArrowUpRight
} from "lucide-react";

type Platform = {
  name: string;
  url: string;
  category: "Movies & TV" | "Music" | "Gaming" | "Video" | "Anime" | "Live TV";
  icon: React.ElementType;
  color: string;
};

const platforms: Platform[] = [
  { name: "NTV", url: "https://ntv.cx/", category: "Movies & TV", icon: Film, color: "from-red-600 to-red-900" },
  { name: "Prime Video", url: "https://primevideo.com", category: "Movies & TV", icon: PlaySquare, color: "from-blue-500 to-cyan-600" },
  { name: "Disney+", url: "https://disneyplus.com", category: "Movies & TV", icon: Tv, color: "from-blue-700 to-indigo-900" },
  { name: "Hulu", url: "https://hulu.com", category: "Movies & TV", icon: Clapperboard, color: "from-green-500 to-emerald-700" },
  { name: "Max", url: "https://max.com", category: "Movies & TV", icon: MonitorPlay, color: "from-purple-600 to-indigo-800" },
  { name: "Apple TV+", url: "https://tv.apple.com", category: "Movies & TV", icon: Tv, color: "from-zinc-700 to-zinc-900" },
  { name: "Peacock", url: "https://peacocktv.com", category: "Movies & TV", icon: PlayCircle, color: "from-yellow-400 to-orange-500" },
  { name: "Paramount+", url: "https://paramountplus.com", category: "Movies & TV", icon: Film, color: "from-blue-600 to-blue-800" },
  { name: "Crunchyroll", url: "https://crunchyroll.com", category: "Anime", icon: PlayCircle, color: "from-orange-500 to-red-600" },
  { name: "Funimation", url: "https://funimation.com", category: "Anime", icon: Tv, color: "from-purple-500 to-fuchsia-700" },
  { name: "YouTube", url: "https://youtube.com", category: "Video", icon: Youtube, color: "from-red-500 to-red-700" },
  { name: "Twitch", url: "https://twitch.tv", category: "Gaming", icon: Twitch, color: "from-purple-500 to-purple-800" },
  { name: "Spotify", url: "https://spotify.com", category: "Music", icon: Music, color: "from-green-500 to-emerald-700" },
  { name: "Apple Music", url: "https://music.apple.com", category: "Music", icon: Headphones, color: "from-pink-500 to-rose-700" },
  { name: "SoundCloud", url: "https://soundcloud.com", category: "Music", icon: Radio, color: "from-orange-500 to-orange-700" },
  { name: "Pandora", url: "https://pandora.com", category: "Music", icon: Music, color: "from-blue-500 to-indigo-600" },
  { name: "Tidal", url: "https://tidal.com", category: "Music", icon: Headphones, color: "from-zinc-800 to-black" },
  { name: "ESPN+", url: "https://plus.espn.com", category: "Live TV", icon: Tv, color: "from-red-600 to-red-800" },
  { name: "DAZN", url: "https://dazn.com", category: "Live TV", icon: PlaySquare, color: "from-yellow-400 to-yellow-600" },
  { name: "FuboTV", url: "https://fubo.tv", category: "Live TV", icon: Tv, color: "from-orange-500 to-orange-700" },
  { name: "Sling TV", url: "https://sling.com", category: "Live TV", icon: MonitorPlay, color: "from-blue-500 to-cyan-500" },
  { name: "DIRECTV Stream", url: "https://stream.directv.com", category: "Live TV", icon: Tv, color: "from-blue-600 to-blue-900" },
  { name: "YouTube TV", url: "https://tv.youtube.com", category: "Live TV", icon: Youtube, color: "from-red-500 to-red-700" },
  { name: "Vudu", url: "https://vudu.com", category: "Movies & TV", icon: Film, color: "from-blue-500 to-blue-700" },
  { name: "Tubi", url: "https://tubitv.com", category: "Movies & TV", icon: PlayCircle, color: "from-orange-500 to-red-500" },
  { name: "Pluto TV", url: "https://pluto.tv", category: "Live TV", icon: Tv, color: "from-yellow-400 to-green-500" },
  { name: "Plex", url: "https://plex.tv", category: "Movies & TV", icon: Video, color: "from-yellow-500 to-orange-600" },
  { name: "Roku Channel", url: "https://therokuchannel.roku.com", category: "Movies & TV", icon: MonitorPlay, color: "from-purple-600 to-purple-900" },
  { name: "Vimeo", url: "https://vimeo.com", category: "Video", icon: Video, color: "from-blue-400 to-blue-600" },
  { name: "Dailymotion", url: "https://dailymotion.com", category: "Video", icon: PlaySquare, color: "from-blue-600 to-blue-800" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 overflow-hidden relative font-sans flex flex-col">
      {/* Background mesh glow */}
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_20%_20%,#1e1b4b_0%,transparent_40%),radial-gradient(circle_at_80%_80%,#312e81_0%,transparent_50%),radial-gradient(circle_at_50%_50%,#0f172a_0%,transparent_100%)] pointer-events-none" />

      {/* Preserve Header elements conceptually as page intro, styled to match theme */}
      <main className="flex-1 flex flex-col items-center w-full max-w-7xl mx-auto px-6 py-12 lg:px-10 lg:py-16">
        <header className="w-full flex flex-col md:flex-row items-center justify-between border-b border-white/5 pb-8 mb-8 space-y-4 md:space-y-0">
          <motion.div 
            className="flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-[-0.5px] bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent uppercase">
              Streamey Hub
            </h1>
            <p className="text-sm text-white/70 mt-2 font-medium">
              Your premium gateway to endless entertainment
            </p>
          </motion.div>
        </header>

        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-4 w-full content-center flex-1"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.03 }
            }
          }}
        >
          {platforms.map((platform) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center text-center h-[88px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl transition-all duration-300 hover:bg-white/[0.12] hover:border-white/25 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] cursor-pointer overflow-hidden"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
              }}
            >
              {/* Optional Subtle glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${platform.color} transition-opacity duration-300`} />
              
              <div className="relative z-10 w-8 h-8 mb-2 rounded-lg flex items-center justify-center bg-gradient-to-br from-white/20 to-white/5 font-bold text-xs shadow-sm">
                <platform.icon className="w-[18px] h-[18px] text-white/90 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-[11px] font-medium tracking-[0.02em] text-white/85 group-hover:text-white truncate px-2 w-[120px]">
                  {platform.name}
                </h3>
                {/* Kept original category data but understated */}
                <span className="text-[8px] uppercase tracking-wider text-white/40 mt-0.5 group-hover:text-white/60">
                  {platform.category}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
        
        <footer className="w-full flex items-center justify-center h-[60px] text-[12px] opacity-40 tracking-[1px] uppercase mt-8 border-t border-white/5 pt-8 text-center">
          © {new Date().getFullYear()} Streamey Hub — Premium Matrix Protocol
        </footer>
      </main>
    </div>
  );
}
