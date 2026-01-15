"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";

const projects = [
    {
        title: "Fintech Payment Suite",
        description: "End-to-end payment platform with Pay-In, Payout, AutoPay, KYC, invoicing, and QR payments.",
        tags: ["Laravel", "React", "PostgreSQL", "Redis"],
        link: "#",
    },
    {
        title: "Payout Automation Platform",
        description: "High-reliability payout system supporting multiple banking rails (IMPS/RTGS/NEFT).",
        tags: ["PHP", "Microservices", "API Integration"],
        link: "#",
    },
    {
        title: "AutoPay System",
        description: "Recurring UPI payment solution for merchants using intent and API-based flows.",
        tags: ["Laravel", "UPI 2.0", "Webhooks"],
        link: "#",
    },
    {
        title: "Freelance Service Platform",
        description: "Marketplace with bidding, profiles, project management, and secure transactions.",
        tags: ["Next.js", "Node.js", "MongoDB"],
        link: "#",
    },
];

export default function Projects() {
    return (
        <Section id="projects" title="Featured Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white/5 border border-white/5 rounded-xl p-8 hover:bg-white/10 transition-colors"
                    >
                        <div className="absolute top-8 right-8 text-neutral-500 group-hover:text-white transition-colors">
                            <ArrowUpRight className="w-6 h-6" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                        <p className="text-neutral-400 mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-medium px-2 py-1 rounded bg-blue-500/10 text-blue-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
