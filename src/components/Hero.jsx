import React from 'react';

const Hero = () => {
    return (
        <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 drop-shadow-sm">
                        Transform Your Space with <br className="hidden md:block" /> Perfect Furniture
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover pieces that blend style, comfort, and functionality to create your dream home.
                    </p>
                </div>

                <div className="relative mt-10">
                    {/* Abstract Background Shape */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-50/50 rounded-full blur-3xl -z-10"></div>

                    <div className="bg-[#E5D3B8] rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-xl">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1 relative z-10">
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                    <img
                                        src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                        alt="Modern Sofa"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="order-1 md:order-2 space-y-6 md:pl-10">
                                {/* Side cards or additional images could go here to match the complex layout if needed, 
                       but for now keeping it clean or adding the smaller images as absolute positioned elements 
                       if I had them. The design has a main sofa and some side items. 
                       I will simulate the layout with a main CTA area overlaid or next to it.
                   */}

                                <div className="flex flex-col space-y-4">
                                    <div className="bg-white p-4 rounded-xl shadow-lg flex items-center space-x-4 max-w-xs transform translate-x-4 md:-translate-x-8 hover:-translate-y-1 transition-transform">
                                        <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Chair" className="w-16 h-16 rounded-lg object-cover" />
                                        <div>
                                            <p className="font-bold text-gray-900">Comfy Chair</p>
                                            <p className="text-sm text-yellow-500">★★★★★</p>
                                            <p className="text-xs font-semibold">$120.00</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-xl shadow-lg flex items-center space-x-4 max-w-xs ml-auto transform -translate-x-4 md:translate-x-0 hover:-translate-y-1 transition-transform delay-75">
                                        <img src="https://images.unsplash.com/photo-1567538096630-e99482672606?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Chair" className="w-16 h-16 rounded-lg object-cover" />
                                        <div>
                                            <p className="font-bold text-gray-900">Accent Chair</p>
                                            <p className="text-sm text-yellow-500">★★★★☆</p>
                                            <p className="text-xs font-semibold">$150.00</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2 group">
                                        <span>Shop Now</span>
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
