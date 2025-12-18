import { callGemini } from "@/lib/gemini";
import { useFormik } from "formik";
import { AnimatePresence, motion } from "framer-motion"
import { Bot } from "lucide-react"
import { Send, Loader2, Sparkles, Zap } from "lucide-react"
import { useState } from "react";
import toast from "react-hot-toast";
import * as Yup from 'yup';

export const BigAIConsultant = () => {
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
        validateOnBlur: false,
        validateOnChange: true,
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
        <section id="advisor" className="mb-32">
            <div className="bg-sky-600 rounded-[3.5rem] p-12 md:p-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10"><Bot size={300} /></div>
                <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-tight">Consult My<br />Digital Twin</h2>
                        <p className="text-sky-100 text-xl mb-10 leading-relaxed max-w-md">
                            Have a technical challenge? Ask my AI Advisor how I would approach scaling, performance, or team leadership based on my real experience.
                        </p>
                        <form onSubmit={formik.handleSubmit} className="relative">
                            <input
                                {...formik.getFieldProps('prompt')}
                                placeholder="E.g. How do you handle 1M+ nodes in a dashboard?"
                                className="w-full bg-white/10 border-2 border-white/20 rounded-2xl p-5 pr-16 text-white placeholder:text-white/40 focus:border-white outline-none transition-all backdrop-blur-md"
                            />
                            <button type="submit" className="absolute right-3 top-3 p-3 bg-white text-sky-600 rounded-xl hover:scale-105 transition-transform">
                                {formik.isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                            </button>
                            <AnimatePresence>
                                {formik.touched.prompt && formik.errors.prompt && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="text-white bg-red-500/90 backdrop-blur-sm rounded-xl px-3 py-2 text-xs font-bold mt-2 shadow-lg flex items-center gap-2"
                                    >
                                        <Zap size={12} className="fill-current" />
                                        {formik.errors.prompt}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                    <div className="min-h-[300px] flex flex-col justify-center bg-black/20 rounded-[2.5rem] p-10 border border-white/10 backdrop-blur-xl">
                        {response ? (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                                <div className="flex items-center gap-2 text-sky-300 font-bold text-xs uppercase tracking-widest">
                                    <Zap size={14} /> Recommended Architecture
                                </div>
                                <p className="text-sm leading-relaxed text-sky-50/90 whitespace-pre-wrap">{response}</p>
                            </motion.div>
                        ) : (
                            <div className="text-center opacity-40">
                                <Sparkles className="mx-auto mb-4" size={48} />
                                <p className="text-sm italic uppercase font-black tracking-widest">Waiting for technical input...</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}