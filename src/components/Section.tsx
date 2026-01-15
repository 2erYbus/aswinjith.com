"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface SectionProps {
    id: string;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export default function Section({ id, title, children, className }: SectionProps) {
    return (
        <section
            id={id}
            className={clsx("py-20 md:py-32 px-4 max-w-5xl mx-auto", className)}
        >
            {title && (
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    {title}
                </motion.h2>
            )}
            {children}
        </section>
    );
}
