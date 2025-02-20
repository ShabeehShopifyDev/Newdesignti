"use client";
import React, { useState } from "react";
import Image from "next/image";

const ServicesTabs = () => {
    const [activeTab, setActiveTab] = useState("shopify");

    const services = [
        {
            id: "shopify",
            title: "Shopify Development",
            description: "We offer expert Shopify development services to help you create a successful online store.",
            image: "/image.png",
        },
        {
            id: "mobile",
            title: "Mobile App Development",
            description: "We design and develop custom mobile applications tailored to your specific needs and requirements.",
            image: "/image.png",
        },
        {
            id: "seo",
            title: "SEO Strategies",
            description: "Our team specializes in creating effective SEO strategies to boost your online presence and visibility.",
            image: "/image.png",
        },
    ];

    const activeService = services.find((service) => service.id === activeTab);

    return (
        <div className="services-tabs-section is__section container has__flex has__gap">
            <div className="tabs has__flex flex__column justify__center">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`tab ${activeTab === service.id ? "active" : ""}`}
                        onClick={() => setActiveTab(service.id)}
                    >
                        <div className="text-content">
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="content">
                <div className="image-wrapper">
                    <Image
                        src={activeService.image}
                        alt={activeService.title}
                        width={500}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

export default ServicesTabs;