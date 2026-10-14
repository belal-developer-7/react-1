import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  
    <div className="min-h-screen bg-[#F8F9FACC] text-slate-800">
      
      <header className="relative z-10 bg-[#F8F9FACC] shadow-sm">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-12">
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-[12PX] bg-[#FF6B35] text-lg font-bold text-white">
             <img src="/src/assets/SVG.png" 
             alt="Gourmet Bistro Logo" />
            </span>
            <span className="text-lg font-extrabold tracking-tight">
              Gourmet Bistro
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#home" className="transition hover:text-[#FF6B35]">
              Home
            </a>
            <a href="#menu" className="transition hover:text-[#FF6B35]">
              Menu
            </a>
            <a href="#story" className="transition hover:text-[#FF6B35]">
              Our story
            </a>
            <a href="#gallery" className="transition hover:text-[#FF6B35]">
              Gallery
            </a>
          </div>

          <a
            href="#booking"
            className="rounded-full bg-[#FF6B35] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#FF6B35]/90"
          >
            Book a Table
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="relative flex min-h-[570px] items-center overflow-hidden bg-slate-950 bg-cover bg-center lg:min-h-[620px]"
        style={{
          backgroundImage:
            "url('/src/assets/5ec29b65c724a1407e21a05e3078dc639190a252 (1).png')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-12">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#FF6B35]">
              Taste the extraordinary
            </p>

            <h1 className="text-4xl font-extrabold leading-[1.2] text-white sm:text-5xl lg:text-6xl">
              Elevated culinary
              <br />
              <span className="text-[#FF6B35]">experiences</span> for
              <br />
              every palate.
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
              Discover a symphony of flavors crafted with locally sourced
              ingredients and exceptional passion.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="rounded-xl bg-[#FF6B35] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#FF6B35]/90"
              >
                ☷ View Menu
              </a>

              <a
                id="booking"
                href="mailto:reservations@example.com"
                className="rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                ▢ Book a Table
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs text-slate-200">
              <div className="flex -space-x-2">
                <img
                  src="https://i.pravatar.cc/80?img=12"
                  alt="Guest"
                  className="h-8 w-8 rounded-full border-2 border-slate-900"
                />
                <img
                  src="https://i.pravatar.cc/80?img=47"
                  alt="Guest"
                  className="h-8 w-8 rounded-full border-2 border-slate-900"
                />
                <img
                  src="https://i.pravatar.cc/80?img=33"
                  alt="Guest"
                  className="h-8 w-8 rounded-full border-2 border-slate-900"
                />
              </div>
              <span>
                <strong className="text-white">4.9 / 5</strong> from over
                <strong className="text-white"> 2,000+</strong> happy diners
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#FF6B35] via-[#FF6B35] to-transparent" />
      </section>

      {/* Our Story Section */}
      <section id="story" className="bg-[#f8f6f0] px-6 py-16 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Chef Image */}
          <div className="relative mx-auto w-full max-w-md">
            <img
              src="/src/assets/33790f3c861fa0994c4ae2f204d8b9f6c24d557c.png"
              alt="Chef preparing a gourmet dish"
              className="h-[380px] w-full rounded-2xl object-cover shadow-xl sm:h-[460px]"
            />

            <div className="absolute -bottom-5 right-0 rounded-2xl bg-[#293957] px-6 py-5 text-white shadow-xl sm:-right-5">
              <p className="text-3xl font-extrabold">15+</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                Years of excellence
              </p>
            </div>
          </div>

          <div className="pt-4 md:pt-0">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B35]">
              Our story
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-800 sm:text-4xl">
              Crafting stories on
              <br className="hidden lg:block" /> every plate since{" "}
              <span className="text-[#FF6B35]">2008.</span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-500">
              Gourmet Bistro was born from a simple vision: to create a space
              where culinary excellence meets genuine hospitality. Our journey
              began in a small kitchen with a big dream, focusing on the purity
              of ingredients and the joy of shared meals.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Today, we continue that legacy, blending traditional techniques
              with modern innovation to bring you a menu that celebrates the
              best of the season.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6B35] text-xl text-[#FF6B35]">
                  ♧
                </span>
                <div>
                  <h3 className="text-sm font-bold">Fresh Harvest</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Daily sourced organic ingredients
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6B35] text-xl text-[#FF6B35]">
                  ♙
                </span>
                <div>
                  <h3 className="text-sm font-bold">Expert Chefs</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Passionate culinary professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );

