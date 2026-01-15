"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const experiences = [
    {
        company: "Synctric Technology Pvt Ltd",
        role: "Laravel Developer",
        period: "Nov 2023 – Present",
        description: "Architected and maintained scalable fintech backend systems supporting Pay-In, Payout, AutoPay, and QR payments.",
        achievements: [
            "Designed secure REST APIs with token-based authentication and RBAC.",
            "Implemented UPI AutoPay recurring payment flows.",
            "Optimized database queries for improved transaction reliability.",
        ],
    },
    {
        company: "Reubro International",
        role: "Laravel Developer",
        period: "Dec 2022 – Jul 2023",
        description: "Built payout automation platforms enabling fast and reliable IMPS, RTGS, and NEFT transactions.",
        achievements: [
            "Developed employee management and tracking systems.",
            "Created reusable backend modules for payments and admin dashboards.",
        ],
    },
];

export default function Experience() {
    return (
        <Section id="experience" title="Professional Experience">
            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="border-l-2 border-white/10 pl-8 relative"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-black" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                            <span className="text-sm text-neutral-500 font-mono">{exp.period}</span>
                        </div>

                        <p className="text-lg text-blue-400 mb-4">{exp.company}</p>

                        <p className="text-neutral-400 mb-4">{exp.description}</p>

                        <ul className="list-disc list-inside space-y-1 text-neutral-500 text-sm">
                            {exp.achievements.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
