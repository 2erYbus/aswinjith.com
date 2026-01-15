"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const skillCategories = [
    {
        title: "Languages",
        skills: ["PHP", "JavaScript", "TypeScript", "SQL"],
    },
    {
        title: "Frameworks & Libs",
        skills: ["Laravel", "React", "Next.js", "Express.js", "Node.js"],
    },
    {
        title: "Databases",
        skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
        title: "Backend & Fintech",
        skills: ["REST APIs", "Microservices", "Payment Gateways", "UPI/QR Payments", "Webhooks"],
    },
    {
        title: "Tools",
        skills: ["Git", "TanStack Query", "Docker", "Postman"],
    },
];

export default function Skills() {
    return (
        <Section id="skills" title="Technical Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors"
                    >
                        <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-neutral-300 hover:bg-white/10 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
