import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "../../constants/images";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] overflow-x-hidden">
      <section className="flex flex-col lg:grid lg:grid-cols-12 min-h-screen">

        {/* ================= LEFT PANEL ================= */}
        <section className="relative col-span-12 lg:col-span-7 overflow-hidden 
          bg-[radial-gradient(circle_at_top_left,#7d2833_0%,#5a1823_45%,#320b11_100%)] 
          px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16 text-white
          flex flex-col justify-between min-h-[600px] lg:min-h-screen">

          {/* Decorative Background - Optimized for all screens */}
          <div className="absolute -top-20 -left-20 sm:-top-28 sm:-left-28 h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] rounded-full bg-white/5 blur-[100px] sm:blur-[130px]" />
          <div className="absolute -bottom-20 -right-20 sm:-bottom-28 sm:-right-28 h-[250px] w-[250px] sm:h-[320px] sm:w-[320px] rounded-full bg-[#FFD66B]/10 blur-[110px] sm:blur-[140px]" />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] sm:h-[550px] sm:w-[550px] lg:h-[650px] lg:w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD66B]/15 blur-[130px] sm:blur-[170px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20" />

          <div className="relative z-10 flex flex-col h-full justify-between gap-6 sm:gap-8 lg:gap-10">

            {/* ================= LOGO ================= */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
              <div className="flex-shrink-0">
                <Image
                  src={IMAGES.LOGO}
                  alt="GM University Logo"
                  width={80}
                  height={80}
                  priority
                  className="rounded-full border border-white/20 shadow-xl w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold tracking-wide">
                  GM University
                </h2>
                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm lg:text-base text-white/70">
                  Lead Management ERP Portal
                </p>
              </div>
            </div>

            {/* ================= HERO ILLUSTRATION ================= */}
            <div className="relative flex flex-1 items-center justify-center overflow-visible py-2 sm:py-4">
              <div className="absolute h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] lg:h-[500px] lg:w-[500px] rounded-full bg-[#FFD66B]/20 blur-[100px] sm:blur-[140px]" />
              <div className="absolute top-8 sm:top-12 h-[120px] w-[120px] sm:h-[200px] sm:w-[200px] lg:h-[250px] lg:w-[250px] rounded-full bg-white/10 blur-[80px] sm:blur-[120px]" />
              <div className="absolute bottom-0 h-16 sm:h-20 lg:h-32 w-full bg-gradient-to-t from-[#2E0A11] to-transparent" />

              <Image
                src={IMAGES.HERO}
                alt="GM University ERP Portal Illustration"
                width={600}
                height={600}
                priority
                className="relative z-10 w-[65%] sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] h-auto 
                  object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.40)] 
                  lg:drop-shadow-[0_50px_80px_rgba(0,0,0,0.45)]"
              />
            </div>

            {/* ================= FOOTER TEXT ================= */}
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-center sm:text-left">
              <p className="text-[8px] sm:text-[10px] lg:text-xs font-semibold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[var(--gold)]">
                Official ERP Portal
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                Empowering Administration,
                <br className="hidden sm:block" />
                Shaping Futures.
              </h3>
              <p className="max-w-xl mx-auto sm:mx-0 text-xs sm:text-sm lg:text-base leading-6 sm:leading-7 lg:leading-8 text-white/70">
                Official Lead Management Platform built for efficient admissions,
                telecalling, and administrative workflows.
              </p>
            </div>
          </div>
        </section>

        {/* ================= RIGHT PANEL ================= */}
        <div className="col-span-12 lg:col-span-5 flex items-center justify-center 
          bg-gradient-to-br from-white via-[#fafafa] to-[#f3f4f6] p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20
          min-h-[500px] lg:min-h-screen">

          {/* Login Card */}
          <div className="w-full max-w-[520px] rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] 
            border border-gray-200 bg-white/90 p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 
            shadow-[0_20px_40px_rgba(0,0,0,0.10)] sm:shadow-[0_30px_60px_rgba(0,0,0,0.15)] 
            backdrop-blur-xl">

            <p className="mb-1.5 sm:mb-2 text-[8px] sm:text-[10px] lg:text-xs font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[var(--primary)] text-center sm:text-left">
              Welcome
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-[var(--text)] text-center sm:text-left">
              GM University ERP
            </h1>

            <h2 className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-600 text-center sm:text-left">
              Lead Management Portal
            </h2>

            <p className="mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm lg:text-base leading-6 sm:leading-7 lg:leading-8 text-gray-500 text-center sm:text-left">
              Manage admissions, assign telecallers, track lead progress,
              and streamline administrative workflows through the official
              GM University ERP platform.
            </p>

            {/* CTA */}
            <div className="mt-5 sm:mt-6 md:mt-8">
              <Link
                href="/auth/signin"
                className="group inline-flex w-full items-center justify-center gap-2 sm:gap-3 
                  rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[var(--gold)] to-[#E8BF67] 
                  px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 lg:py-5 
                  font-semibold text-xs sm:text-sm lg:text-base text-[var(--primary)] 
                  shadow-[0_8px_20px_rgba(0,0,0,0.12)] sm:shadow-[0_12px_30px_rgba(0,0,0,0.18)] 
                  transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]
                  active:scale-[0.98]"
              >
                <span className="whitespace-nowrap">Proceed to Secure Sign-In</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                />
              </Link>
            </div>

            {/* Security */}
            <div className="mt-6 sm:mt-8 md:mt-10 border-t border-gray-200 pt-4 sm:pt-5 md:pt-6">
              <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center 
                  rounded-full bg-green-100 text-base sm:text-lg md:text-xl shadow-sm flex-shrink-0">
                  🔒
                </div>
                <div>
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-[var(--text)]">
                    Secure Role-Based Access
                  </p>
                  <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-500">
                    Authorized Admin & Telecaller Login Only
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}