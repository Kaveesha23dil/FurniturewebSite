import React, { useState } from 'react';

const products = [
    { id: 1, name: 'Cozy Sofa', price: 120.00, category: 'Sofa', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Modern Chair', price: 80.00, category: 'Chair', image: 'https://images.unsplash.com/photo-1567538096630-e99482672606?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Wooden Lamp', price: 45.00, category: 'Lamp', image: 'https://images.unsplash.com/photo-1507473885765-e6ed058f7959?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 4, name: 'Elegant Sofa', price: 250.00, category: 'Sofa', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 5, name: 'Office Chair', price: 110.00, category: 'Chair', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 6, name: 'Side Table', price: 95.00, category: 'Table', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
];

const categories = ['All', 'Sofa', 'Chair', 'Table', 'Lamp'];

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <section className="py-16 md:py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Best Quality Products</h2>

                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                        ? 'bg-black text-white shadow-lg scale-105'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:border-black hover:text-black'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                            <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 mb-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <button className="absolute bottom-4 right-4 bg-black text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                </button>
                            </div>
                            <div className="flex justify-between items-center px-2">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                                    <p className="text-sm text-gray-500">{product.category}</p>
                                </div>
                                <div className="font-bold text-gray-900">
                                    ${product.price.toFixed(2)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
