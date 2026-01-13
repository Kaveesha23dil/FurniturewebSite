import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
    return (
        <section className="py-16 px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto relative rounded-[2.5rem] overflow-hidden"
            >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                        alt="Newsletter BG"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 py-16 md:py-24 px-6 text-center max-w-3xl mx-auto space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-3xl md:text-5xl font-bold text-white tracking-tight"
                    >
                        Subscribe To Our Newsletter & <br className="hidden md:block" /> Grab 30% OFF
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-gray-200 text-lg"
                    >
                        Join our mailing list to receive the latest news and updates from our team.
                    </motion.p>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 bg-white p-2 rounded-full shadow-2xl"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-3 rounded-full outline-none text-gray-900 placeholder:text-gray-400 bg-transparent"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
                        >
                            Subscribe
                        </button>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
};

export default Newsletter;
