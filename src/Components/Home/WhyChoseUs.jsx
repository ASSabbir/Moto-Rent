import { Link } from "react-router-dom";

const WhyChoseUs = () => {
    const features = [
        {
            title: "Wide Variety of Cars",
            description: "Experience a vast array of cars tailored to suit every need and budget luxurious rides.",
            icon: "/obi-pixel9propics-JIcR3-O8ko8-unsplash.jpg",
        },
        {
            title: "Affordable Prices",
            description: "Enjoy daily rental rates that are affordable and transparent, with no hidden fees.",
            icon: "/hareez-hussaini-7anmWNqGiaA-unsplash.jpg",
        },
        {
            title: "Easy Booking Process",
            description: "Reserve your dream car in just a few clicks with our user-friendly booking platform.",
            icon: "/priscilla-du-preez-BjhUu6BpUZA-unsplash.jpg",
        },
        {
            title: "24/7 Customer Support",
            description: "Receive 24/7 support from our dedicated team, ready to assist with any  issues.",
            icon: "/seo-galaxy-GQ6bUqDNjZY-unsplash.jpg",
        },
    ];

    return (
        <section className="py-28 ">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-5xl font-bold text-center text-primary-600 mb-12">
                    Why Choose Us?
                </h2>
                <div className="grid grid-cols-2  lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="   "
                        >
                            <img src={feature.icon} alt={feature.title} className=" h-56 w-full object-cover" />
                            <div className="flex border-primary flex-col md:h-36 pt-5  border-b-[1px]  items-center">
                                <h3 className="text-2xl font-funnel flex-wrap font-bold mb-2">{feature.title}</h3>
                                <p className=" text-gray-300 text-center">{feature.description}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoseUs;
