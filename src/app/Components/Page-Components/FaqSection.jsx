"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    { q: "Is this course good for beginners?", a: "Yes! Even if you have zero experience, we teach from basics to advanced in a simple and friendly way." },
    { q: "Will I really learn practical skills?", a: "Definitely. You will learn 100% practical skills, real projects, assignments, and hands-on sessions — exactly what companies want." },
    { q: "How will this course help my career?", a: "This course is designed to make you job-ready, build real skills, and help you create a stable, successful future." },
    { q: "Do you provide placement support?", a: "Yes. We help with resume making, interview preparation, mock interviews, and job opportunities through our network." },
    { q: "Who are the teachers?", a: "You will learn from experienced and reliable trainers who explain everything clearly and support you throughout the journey." },
    { q: "What makes your teaching style unique?", a: "We use a smart, modern, student-friendly teaching method with easy examples, practical demos, and step-by-step explanation." },
    { q: "Is the course affordable for students?", a: "Yes. We provide high-quality training at student-friendly fees, with the best value in the market." },
    { q: "How do you help in interviews?", a: `We train you with:\n• Mock interviews\n• Confidence-building sessions\n• Communication tips\n• Company-level interview questions` },
    { q: "What do current students like the most?", a: `Students love our:\n• Trendy, modern learning environment\n• Friendly teachers\n• Practical approach\n• Real project experience\n• Motivating atmosphere\n• Personal attention\n• Easy explanations\n• Lifetime guidance\n• Strong career focus` },
    { q: "How can I join the course?", a: "Simple! Just contact us → Attend a quick counseling session → Choose batch → Start learning." }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section
            className="py-28 px-6 relative overflow-hidden"
            style={{ backgroundColor: "#DDD6FF" }}
        >
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-300/40 blur-[150px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-200/50 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-4xl mx-auto relative z-10">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-bold text-[#6346FA] text-center"
                >
                    Frequently Asked Questions
                </motion.h2>

                <p className="text-center text-black text-xl mt-3">
                    Clear answers — so you feel confident before joining.
                </p>

                {/* Grid with 2 Independent Columns */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* LEFT COLUMN */}
                    <div className="space-y-6">
                        {faqs
                            .filter((_, i) => i % 2 === 0)
                            .map((faq, i) => {
                                const actualIndex = i * 2;
                                const isOpen = openIndex === actualIndex;

                                return (
                                    <motion.div
                                        key={actualIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        viewport={{ once: true }}
                                        className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-purple-200/60"
                                    >
                                        {/* Question Box */}
                                        <button
                                            onClick={() =>
                                                setOpenIndex(isOpen ? null : actualIndex)
                                            }
                                            className="w-full flex justify-between items-center p-6 text-left"
                                        >
                                            <span className="text-xl text-black">{faq.q}</span>

                                            <motion.span
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-black text-2xl"
                                            >
                                                {isOpen ? "−" : "+"}
                                            </motion.span>
                                        </button>

                                        {/* Smooth Answer */}
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.35 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 text-black leading-relaxed">
                                                        {faq.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="space-y-6">
                        {faqs
                            .filter((_, i) => i % 2 !== 0)
                            .map((faq, i) => {
                                const actualIndex = i * 2 + 1;
                                const isOpen = openIndex === actualIndex;

                                return (
                                    <motion.div
                                        key={actualIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        viewport={{ once: true }}
                                        className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-purple-200/60"
                                    >
                                        {/* Question Box */}
                                        <button
                                            onClick={() =>
                                                setOpenIndex(isOpen ? null : actualIndex)
                                            }
                                            className="w-full flex justify-between items-center p-6 text-left"
                                        >
                                            <span className="text-xl text-black">{faq.q}</span>

                                            <motion.span
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-black text-2xl"
                                            >
                                                {isOpen ? "−" : "+"}
                                            </motion.span>
                                        </button>

                                        {/* Answer */}
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.35 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 text-black leading-relaxed">
                                                        {faq.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                    </div>

                </div>

            </div>
        </section>

    );
}
