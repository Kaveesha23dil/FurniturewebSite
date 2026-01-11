import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#111] text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">

                    <div className="col-span-2 md:col-span-1 space-y-4">
                        <span className="text-2xl font-bold tracking-tight text-white mb-4 block">Urban Nest</span>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Crafting furniture that blends style, comfort, and sustainability for the modern home.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Credit Card</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">Support</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Live Chat</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">Connect</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        © 2026 Urban Nest. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-xs text-gray-500 hover:text-white">Privacy Policy</a>
                        <a href="#" className="text-xs text-gray-500 hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
