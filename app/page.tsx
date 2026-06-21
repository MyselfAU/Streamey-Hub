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
  category: "Movies" | "Music" | "Gaming" | "Video" | "Anime" | "Live TV";
  icon: React.ElementType;
  color: string;
};

const platforms: Platform[] = [
  { name: "NTV", url: "https://ntv.cx/", category: "Live TV", icon: Tv, color: "from-red-600 to-red-900" },
  { name: "Movielinkbd", url: "https://47wxj3.movielinkbd.li/", category: "Live TV", icon: Tv, color: "from-blue-500 to-cyan-600" },
  { name: "Movielinkbd 2", url: "https://b7nz75.movielinkbd.pw/", category: "Live TV", icon: Tv, color: "from-blue-700 to-indigo-900" },
  { name: "Sportzfy", url: "https://sportzfytvlive.xyz/", category: "Live TV", icon: Tv, color: "from-green-500 to-emerald-700" },
  { name: "A1 TV", url: "https://firebrick-lyrebird-706557.hostingersite.com/", category: "Live TV", icon: Tv, color: "from-purple-600 to-indigo-800" },
  { name: "IPTV", url: "http://172.19.178.180/", category: "Live TV", icon: Tv, color: "from-zinc-700 to-zinc-900" },
  { name: "IPTV 2", url: "http://moviemazic.xyz/live-tv.html", category: "Live TV", icon: Tv, color: "from-yellow-400 to-orange-500" },
  { name: "IPTV 3", url: "http://172.19.17.28/", category: "Live TV", icon: Tv, color: "from-blue-600 to-blue-800" },
  { name: "StreamFree", url: "https://streamfree.app/", category: "Live TV", icon: Tv, color: "from-blue-500 to-cyan-600" },
  { name: "StreamFree", url: "https://streamfree.top/", category: "Live TV", icon: Tv, color: "from-blue-700 to-indigo-900" },
  { name: "Moviemazic", url: "http://moviemazic.xyz/movies.html", category: "Movies", icon: Clapperboard, color: "from-blue-700 to-indigo-900" },
  { name: "WoW Movie", url: "http://172.27.27.84/", category: "Movies", icon: Clapperboard, color: "from-blue-700 to-indigo-900" },
  { name: "BasPlay", url: "http://10.20.30.40/", category: "Movies", icon: Clapperboard, color: "from-blue-700 to-indigo-900" },
  { name: "ICC FTP", url: "http://10.16.100.244/dashboard.php?session=5fed778674d507ce2b8c7d40561ec575eec59b7c149ad584a8dfa7271ca8fcc7", category: "Movies", icon: Clapperboard, color: "from-blue-700 to-indigo-900" },
  { name: "DiscoveryFTP", url: "https://discoveryftp.net/", category: "Movies", icon: Clapperboard, color: "from-blue-700 to-indigo-900" },
  { name: "DFLIX FTP", url: "https://movies.discoveryftp.net/m", category: "Movies", icon: Clapperboard, color: "from-blue-700 to-indigo-900" },
  { name: "Cloud Media", url: "http://172.19.178.179/index.php", category: "Movies", icon: Clapperboard, color: "from-blue-700 to-indigo-900" },
   
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
          © {new Date().getFullYear()} AHSAN ULLAH
        </footer>
      </main>
    </div>
  );
}
