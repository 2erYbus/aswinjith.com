"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
        >
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 max-w-2xl"
            >
                <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300 mb-4">
                    Available for new opportunities
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 pb-2">
                    Hi, I&apos;m Aswinjith P
                </h1>

                <p className="text-xl md:text-2xl text-neutral-400 font-light">
                    Backend Developer specializing in <span className="text-blue-400">Fintech</span>, <span className="text-blue-400">Laravel</span>, and <span className="text-blue-400">Scalable Systems</span>.
                </p>

                <p className="text-neutral-500 max-w-lg mx-auto leading-relaxed">
                    I build high-availability platforms, secure payment gateways, and efficient microservices.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
                >
                    <a
                        href="#projects"
                        className="group inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors"
                    >
                        View Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="/resume.pdf" // Placeholder for resume
                        className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                        Download Resume
                        <Download className="w-4 h-4" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
