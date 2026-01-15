"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import Section from "./Section";

export default function Contact() {
    return (
        <Section id="contact" className="mb-0 pb-10">
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/5 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let&apos;s Work Together</h2>

                <p className="text-neutral-400 max-w-xl mx-auto mb-8">
                    I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                <div className="flex justify-center gap-6">
                    <a
                        href="mailto:aswinjithp7@gmail.com"
                        className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                        <span>Email Me</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/aswinjith-p"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                    </a>
                    {/* Assuming Github exists via username pattern, or just placeholder */}
                    <a
                        href="#"
                        className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                    >
                        <Github className="w-5 h-5" />
                        <span>GitHub</span>
                    </a>
                </div>

                <div className="mt-16 text-neutral-600 text-sm">
                    © {new Date().getFullYear()} Aswinjith P. All rights reserved.
                </div>
            </div>
        </Section>
    );
}
