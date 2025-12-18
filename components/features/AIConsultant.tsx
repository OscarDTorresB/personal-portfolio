"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Loader2, Sparkles, Zap } from 'lucide-react';
import { callGemini } from '@/lib/gemini';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';

export const AIConsultant = () => {
    const [response, setResponse] = useState("");

    const formik = useFormik({
        initialValues: {
            prompt: ''
        },
        validationSchema: Yup.object({
            prompt: Yup.string()
                .min(10, 'Please provide more details (at least 10 characters).')
                .required('Please enter your question.')
        }),
        onSubmit: async (values, { setSubmitting }) => {
            setResponse("");
            try {
                const res = await callGemini(values.prompt);
                if (res) {
                    setResponse(res);
                } else {
                    toast.error("No response received from the AI.");
                }
            } catch (err: any) {
                toast.error(err.message || "Could not connect to the digital twin. Please try again later.");
                console.error(err);
            } finally {
                setSubmitting(false);
            }
        }
    });

    return (
        <section id="ai-consultant" className="mb-32">
            <div className="relative p-1 rounded-[2.5rem] bg-linear-to-br from-indigo-500 via-purple-500 to-sky-500 animate-gradient-xy">
                <div className="bg-card rounded-[2.4rem] p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="md:w-1/3">
                            <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-500">
                                <Bot size={32} />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">✨ AI Advisor</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Describe your technical challenge or consulting need. My AI-based digital twin will give you an initial recommendation based on my years of experience as a Tech Lead.
                            </p>
                        </div>

                        <div className="md:w-2/3 w-full space-y-6">
                            <form onSubmit={formik.handleSubmit} className="relative">
                                <textarea
                                    id="prompt"
                                    name="prompt"
                                    value={formik.values.prompt}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Ex: I need to scale a massive data visualization system for mobile..."
                                    className={`w-full h-32 bg-muted border rounded-2xl p-4 pr-16 focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-all placeholder:text-muted-foreground/80 ${formik.touched.prompt && formik.errors.prompt ? 'border-red-500 focus:ring-red-500' : ''
                                        }`}
                                    onKeyDown={(e) => {
                                        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                                            if (!formik.isSubmitting && formik.isValid && formik.dirty) {
                                                formik.submitForm();
                                            }
                                        }
                                    }}
                                />
                                {formik.touched.prompt && formik.errors.prompt ? (
                                    <div className="absolute top-full mt-2 text-white bg-red-500 rounded px-2 py-1 text-sm font-medium">
                                        {formik.errors.prompt}
                                    </div>
                                ) : null}

                                <button
                                    type="submit"
                                    disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
                                    className="absolute bottom-4 right-4 p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition-all flex items-center gap-2"
                                >
                                    {formik.isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
                                    <span className="hidden md:inline font-bold">Consult ✨</span>
                                </button>
                            </form>

                            <AnimatePresence mode="wait">
                                {response && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="p-6 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl"
                                    >
                                        <div className="flex items-center gap-2 mb-3 text-indigo-500">
                                            <Zap size={18} />
                                            <span className="font-bold text-sm uppercase tracking-tighter">Oscar's Recommendation</span>
                                        </div>
                                        <div className="prose dark:prose-invert prose-indigo max-w-none">
                                            <ReactMarkdown
                                                components={{
                                                    p: ({ node, ...props }) => <p {...props} className="mb-2" />,
                                                    a: ({ node, ...props }) => <a {...props} className="text-indigo-500 hover:underline" />,
                                                    code: ({ node, ...props }) => <code {...props} className="bg-indigo-500/10 border border-indigo-500/20 rounded px-2 py-1" />,
                                                    pre: ({ node, ...props }) => <pre {...props} className="bg-indigo-500/10 border border-indigo-500/20 rounded p-4" />,
                                                    blockquote: ({ node, ...props }) => <blockquote {...props} className="bg-indigo-500/10 border border-indigo-500/20 rounded p-4" />,
                                                    h1: ({ node, ...props }) => <h1 {...props} className="text-3xl font-bold mb-4 mt-6" />,
                                                    h2: ({ node, ...props }) => <h2 {...props} className="text-2xl font-bold mb-4 mt-6" />,
                                                    h3: ({ node, ...props }) => <h3 {...props} className="text-xl font-bold mb-4 mt-6" />,
                                                    h4: ({ node, ...props }) => <h4 {...props} className="text-lg font-bold mb-4 mt-6" />,
                                                    h5: ({ node, ...props }) => <h5 {...props} className="text-md font-bold mb-4 mt-6" />,
                                                    h6: ({ node, ...props }) => <h6 {...props} className="text-sm font-bold mb-4 mt-6" />,
                                                    ul: ({ node, ...props }) => <ul {...props} className="list-disc list-inside" />,
                                                    ol: ({ node, ...props }) => <ol {...props} className="list-decimal list-inside" />,
                                                    li: ({ node, ...props }) => <li {...props} className="mb-4" />,
                                                }}
                                            >{response}</ReactMarkdown>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
