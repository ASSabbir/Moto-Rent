import { motion } from "framer-motion";

const Extra = () => {
    return (
        <section className="bg-zinc-800 text-gray-300 py-16">
            <div className="max-w-screen-2xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
                
                <div className="flex flex-row gap-5 w-full lg:w-1/2">
                    <motion.img
                        src="/boris-m-_CiyeM2kvqs-unsplash.jpg" 
                        alt="Businesswoman"
                        className="shadow-lg h-64 md:h-96 object-cover"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                    <motion.img
                        src="/zoe-holling-PScacPyJE5U-unsplash.jpg" 
                        alt="Car Logo"
                        className="shadow-lg h-64 md:h-96 object-cover"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }} 
                    />
                </div>

               
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <motion.h2
                        className="text-4xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Premium Cars Rental
                    </motion.h2>
                    <motion.p
                        className="text-primary-500 uppercase text-sm tracking-widest mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Only the best
                    </motion.p>
                    <motion.p
                        className="text-gray-400 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Experience the ultimate driving pleasure with our Premium Car Rental service. Whether you're looking for luxury, speed, or elegance, our high-end collection includes top brands like Mercedes-Benz, BMW, Audi, and Tesla. Perfect for business trips, special occasions, or simply indulging in a superior ride.
                    </motion.p>

                    
                    <div className="flex justify-center lg:justify-start gap-12 mt-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <h3 className="text-5xl font-bold text-white">
                                12<span className="text-primary-500">+</span>
                            </h3>
                            <p className="text-gray-400 text-sm mt-2">Years of experience</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <h3 className="text-5xl font-bold text-white">
                                157<span className="text-primary-500">k</span>
                            </h3>
                            <p className="text-gray-400 text-sm mt-2">Satisfied clients</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Extra;
