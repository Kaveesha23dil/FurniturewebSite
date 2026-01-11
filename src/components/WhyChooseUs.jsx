import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Image Side */}
                    <div className="relative">
                        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-orange-50 rounded-full blur-3xl -z-10 translate-x-12 -translate-y-12"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Interior Design"
                                className="w-full h-full object-cover"
                            />

                            {/* Floating Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="bg-white/30 backdrop-blur-sm p-4 rounded-full hover:scale-110 transition-transform duration-300 group ring-4 ring-white/20">
                                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-6 h-6 ml-1 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We create furniture that isn't just about utility, but about elevating your lifestyle. Quality, comfort, and design are at the heart of everything we make.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: "Premium Quality Materials", desc: "We use only the finest sustainably sourced woods and fabrics." },
                                { title: "Modern & Functional Design", desc: "Pieces designed to fit perfectly into contemporary living spaces." },
                                { title: "Long-lasting Durability", desc: "Built to withstand the test of time and daily use." },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <a href="#" className="text-black font-semibold hover:underline inline-flex items-center gap-2">
                                Learn More
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
