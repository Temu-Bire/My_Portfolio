import Hero from '@/components/Hero'; //  Correct Next.js path alias
export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Background radial gradient glow */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>
    </main>
  );
}