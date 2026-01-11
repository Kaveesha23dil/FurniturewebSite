import React from 'react';

const Stats = () => {
    const stats = [
        { label: "Happy Customers", value: "18K+", subtext: "4.8/5 Average Rating" },
        { label: "Premium Products", value: "700+", subtext: "High Quality Furniture" },
        { label: "Return Rate", value: "95%", subtext: "Satisfaction Guaranteed" },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    {stats.map((stat, index) => (
                        <div key={index} className="px-4 py-4 md:py-0">
                            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                            <p className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</p>
                            <p className="text-sm text-gray-500">{stat.subtext}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
