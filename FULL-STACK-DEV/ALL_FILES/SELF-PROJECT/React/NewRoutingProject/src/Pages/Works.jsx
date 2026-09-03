import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  Layers,
  Layout,
  Globe,
  Briefcase,
} from "lucide-react";

// Project Portfolio Data
const projects = [
  {
    id: 1,
    title: "Apex FinTech Platform",
    category: "Web App",
    image: "",
    description:
      "A secure digital banking ecosystem handling multi-currency institutional transactions.",
    icon: Layers,
  },
  {
    id: 2,
    title: "Velo Logistics Dashboard",
    category: "UI/UX Design",
    image: "",
    description:
      "Real-time supply chain tracking platform built for international enterprise fleets.",
    icon: Layout,
  },
  {
    id: 3,
    title: "E-Commerce Cloud Engine",
    category: "Web App",
    image: "",
    description:
      "High-performance headless checkout infrastructure processing thousands of orders per minute.",
    icon: Globe,
  },
  {
    id: 4,
    title: "Aura Brand Strategy",
    category: "Branding",
    image: "",
    description:
      "Complete identity redesign, design system, and global market positioning strategy.",
    icon: Briefcase,
  },
];

const categories = ["All", "Web App", "UI/UX Design", "Branding"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased overflow-x-hidden">
      {/* 1. HERO HEADER */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto pt-24 pb-12 px-6 text-center space-y-6"
      >
        <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
          Our Portfolio
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Proven work. Real business impact.
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
          We combine robust technical engineering with human-centric design to
          solve critical enterprise workflows.
        </p>
      </motion.section>

      {/* 2. FILTER TABS */}
      <div className="flex justify-center px-6 mb-16">
        <div className="flex flex-wrap items-center gap-2 bg-slate-800/60 p-2 rounded-2xl border border-slate-700/50 backdrop-blur-md">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === category
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {activeFilter === category && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. DYNAMIC PROJECT GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <motion.div layout className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="group bg-slate-800/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700/80 transition-colors duration-300 flex flex-col justify-between"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-16/10 bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/40 flex items-center gap-2">
                      <IconComponent className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-8 space-y-4 grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest flex items-center gap-1.5 group-hover:text-indigo-300 transition-colors">
                        View Case Study{" "}
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-slate-700 transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
