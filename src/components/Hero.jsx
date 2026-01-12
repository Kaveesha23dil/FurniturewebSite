import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Text */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 drop-shadow-sm leading-tight"
                    >
                        Transform Your Space with <br className="hidden md:block" /> Perfect Furniture
                    </motion.h1>
                </div>

                {/* Main Grid Layout */}
                <div className="grid lg:grid-cols-4 gap-6 items-start">

                    {/* Large Main Image Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-3 relative rounded-[2.5rem] overflow-hidden shadow-2xl group"
                    >
                        {/* Background Blob - Adjusted to be behind if needed, but here inside for simplicity */}
                        <div className="absolute inset-0 bg-[#E5D3B8] -z-10"></div>

                        <img
                            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                            alt="Modern Sofa"
                            className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px]"
                        />

                        {/* Top Left: Happy Customers Overlay */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-2 rounded-full flex items-center shadow-lg gap-3 pr-6"
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <img key={i} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                                ))}
                            </div>
                            <div>
                                <p className="font-bold text-xs text-gray-900">18K+ Happy</p>
                                <p className="text-[10px] text-gray-500">Customers</p>
                            </div>
                        </motion.div>

                        {/* Bottom Right: Shop Now Button Overlay */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="absolute bottom-6 right-6 bg-black text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-xl"
                        >
                            <span>Shop Now</span>
                            <div className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </div>
                        </motion.button>
                    </motion.div>

                    {/* Right Column: Small Products */}
                    <div className="lg:col-span-1 space-y-6 flex flex-col justify-center h-full">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white rounded-3xl p-4 shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
                        >
                            <div className="rounded-2xl overflow-hidden mb-3 aspect-square">
                                <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Chair" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <h4 className="font-bold text-gray-900">Fluffy Chair</h4>
                                    <div className="flex text-yellow-400 text-xs">★★★★★</div>
                                </div>
                                <span className="font-bold text-gray-900">$120.00</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="bg-white rounded-3xl p-4 shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
                        >
                            <div className="rounded-2xl overflow-hidden mb-3 aspect-square">
                                <img src="https://images.unsplash.com/photo-1567538096630-e99482672606?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Chair" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <h4 className="font-bold text-gray-900">Blue Velvet</h4>
                                    <div className="flex text-yellow-400 text-xs">★★★★☆</div>
                                </div>
                                <span className="font-bold text-gray-900">$150.00</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
