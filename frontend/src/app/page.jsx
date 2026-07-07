import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { IMAGES } from "../../constants/images";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-[var(--background)]">
      <section className="grid grid-cols-12 h-full">

        {/* ================= LEFT PANEL ================= */}
        <section className="relative col-span-12 lg:col-span-7 h-full overflow-hidden px-6 lg:px-12 py-6 text-white flex flex-col justify-between">

          {/* ================= BACKGROUND IMAGE ================= */}
          <Image
            src={IMAGES.BACKGROUND}
            alt="GM University Campus"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-fill object-center" 
          />

          {/* ================= OVERLAY ================= */}
          <div className="absolute inset-0 bg-[#4a171e]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

          {/* ================= CONTENT ================= */}
          <div className="relative z-10 flex flex-col h-full justify-between">

            {/* ================= LOGO ================= */}
            <div className="flex items-center gap-4 mt-1">
              <Image
                src={IMAGES.LOGO}
                alt="GM University Logo"
                width={56}
                height={56}
                priority
                className="rounded-full border border-white/20 shadow-lg"
              />

              <div>
               
                <h1 className="text-xl font-semibold tracking-wide font-inter">
                  GM University
                </h1>
                <p className="text-xs text-white/70 font-inter">
                  Lead Management ERP Portal
                </p>
              </div>
            </div>

            {/* ================= FOOTER TEXT ================= */}
            <div className="flex-1 min-h-0 flex flex-col justify-end pb-12 space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold)] font-inter">
                Official ERP Portal
              </p>

             
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight font-lora">
                Empowering Administration,
                <br className="hidden sm:block" />
                Shaping Futures.
              </h2>

             
              <p className="max-w-md text-sm text-white/70 leading-relaxed font-inter">
                Official Lead Management Platform built for admissions, telecalling,
                and administrative workflows.
              </p>
            </div>

          </div>
        </section>

        {/* ================= RIGHT PANEL ================= */}
        <div className="col-span-12 lg:col-span-5 h-full flex items-center justify-center bg-[#fcfcfc] p-6 lg:p-12">

          {/* LOGIN CARD */}
          <div className="w-full max-w-[520px] rounded-[28px] border border-gray-100 
            bg-white p-6 sm:p-8 lg:p-10 
            shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]">

            {/* APPLIED INTER (Regular) TO SMALL LABEL */}
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--primary)] font-inter">
              Welcome
            </p>

            {/* APPLIED LORA (Bold) TO CARD MAIN TITLE */}
            <h1 className="text-3xl font-bold text-[var(--text)] mt-2 font-lora">
              GM University ERP
            </h1>

            {/* APPLIED INTER (Semi-Bold) TO CARD SUB-HEADER */}
            <h2 className="text-base font-semibold text-gray-600 mt-1 font-inter">
              Lead Management Portal
            </h2>

            {/* APPLIED INTER (Regular) TO CARD BODY */}
            <p className="mt-4 text-sm text-gray-500 leading-relaxed font-inter">
              Manage admissions, assign telecallers, track lead progress,
              and streamline administrative workflows.
            </p>

            {/* CTA */}
            <div className="mt-6">
              <Link
                href="/auth/signin"
                className="group flex w-full items-center justify-center gap-2 
                  rounded-xl bg-gradient-to-r from-[var(--gold)] to-[#E8BF67] 
                  px-6 py-3 font-semibold text-sm text-[var(--primary)] 
                  shadow-md transition-all duration-200 
                  hover:-translate-y-0.5 hover:shadow-lg
                  font-inter" // APPLIED INTER (Semi-Bold) TO BUTTON
              >
                <span>Proceed to Secure Sign-In</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* SECURITY */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <Lock size={14} className="text-green-600" />
                </div>

                <div>
                  {/* APPLIED INTER TO FOOTER LABELS */}
                  <p className="text-xs font-semibold text-[var(--text)] font-inter">
                    Secure Role-Based Access
                  </p>
                  <p className="text-[10px] text-gray-500 font-inter">
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