import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Award, Users, ChevronRight } from "lucide-react";
import { RxMove } from "react-icons/rx";

// Animation variants for unified transitions
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased overflow-x-hidden">
      {/* 1. HERO SECTION (Fade-in & Slide-up) */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative py-20 lg:py-32 bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 text-white px-6 text-center"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
            <button className="group p-2 rounded-lg">
              <RxMove className="h-8 w-8 text-purple-500 transition-transform duration-3000 ease-in-out group-hover:rotate-360" />
            </button>
            Who We Are...!!!
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-blue-50 text-shadow-lg/90">
            We build the digital tools that power tomorrow.
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Founded with a vision to streamline enterprise workflows, we deliver
            innovative solutions that help global companies scale effortlessly.
          </p>
        </div>

        {/* Decorative Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      </motion.section>

      {/* 2. OUR STORY & IMAGE (Scroll Trigger Simulation via Framer Motion) */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Visual Side */}
          <motion.div variants={fadeIn} className="relative group">
            <div className="absolute -inset-2 bg-linear-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition duration-500" />
            <img
              src="https://images.unsplash.com/photo-1782392429107-fd725ad8d10a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Team Collaborating"
              className="relative rounded-2xl shadow-xl w-full object-cover h-112.5px"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-shadow-lg/30">
              Driven by innovation, backed by expertise.
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              What started as a three-person operation in a garage has evolved
              into a global ecosystem. We believe that technology should break
              barriers, not create them.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Every system we engineer and strategy we design passes through
              rigorous quality checks to deliver seamless, consumer-grade
              excellence at an enterprise scale.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <p className="text-3xl font-extrabold text-indigo-600">10M+</p>
                <p className="text-xs uppercase text-slate-500 font-medium mt-1">
                  Users
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-indigo-600">99.9%</p>
                <p className="text-xs uppercase text-slate-500 font-medium mt-1">
                  Uptime
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-indigo-600">24/7</p>
                <p className="text-xs uppercase text-slate-500 font-medium mt-1">
                  Support
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. CORE VALUES SECTION (Staggered Card Slide-Up) */}
      <section className="bg-slate-100 py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-5xl md:text-4xl font-bold text-slate-900 text-shadow-lg/30 ">
              The values that anchor us
            </h2>
            <p className="text-slate-600 text-sm ">
              We align our internal culture with our external outputs to ensure
              integrity across all operations.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Value Card 1 */}
            <motion.div
              variants={fadeIn}
              className="bg-white p-8 hover:bg-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-1200 border border-blue-300/60 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Absolute Trust
                </h3>
                <p className="text-red-700 text-sm leading-relaxed font-semibold">
                  We protect client data and operations like our own, with zero
                  compromises.
                </p>
              </div>
            </motion.div>

            {/* Value Card 2 */}
            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-2xl hover:bg-blue-100 shadow-sm hover:shadow-md transition-shadow duration-1200 border border-blue-300/60 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Laser Focus
                </h3>
                <p className="text-red-700 text-sm leading-relaxed font-semibold">
                  We optimize for concrete commercial results, entirely ignoring
                  vanity metrics.
                </p>
              </div>
            </motion.div>

            {/* Value Card 3 */}
            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-2xl shadow-sm hover:bg-blue-100 hover:shadow-md transition-shadow duration-1200 border border-blue-300/60 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Pure Craft
                </h3>
                <p className="text-red-700 text-sm leading-relaxed font-semibold">
                  We believe software is a craft, requiring pristine design and
                  execution.
                </p>
              </div>
            </motion.div>

            {/* Value Card 4 */}
            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md hover:bg-blue-100 transition-shadow duration-1200 border border-blue-300/60 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Radical Unity
                </h3>
                <p className="text-red-700 text-sm leading-relaxed font-semibold">
                  We build diverse, cross-border teams operating with full
                  transparency.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. CALL TO ACTION SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-5xl mx-auto my-20 lg:my-28 px-6 text-center"
      >
        <div className="bg-linear-to-r from-indigo-600 to-indigo-800 text-white rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-50 text-shadow-lg/30">
              Ready to see what we can do together?
            </h2>
            <p className="text-indigo-100 font-light text-base md:text-lg">
              Join thousands of industry-leading companies optimizing their
              workflows today.
            </p>
            <div className="pt-4">
              <button className="bg-white text-indigo-700 hover:bg-slate-100 font-bold px-8 py-4 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2 group cursor-pointer">
                Get Started Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Subtle Background Graphics */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500 rounded-full blur-2xl opacity-50" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-2xl opacity-50" />
        </div>
      </motion.section>
    </div>
  );
}
