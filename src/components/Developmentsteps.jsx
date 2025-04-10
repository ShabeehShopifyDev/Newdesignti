import React from "react";
import Button from "./button";

const Steps = () => {

    let steps = [
        { title: "Consultation", description: "Schedule a consultation with our team to discuss your web development needs and goals." },
        { title: "Development", description: "Our expert developers will work on creating a customized solution for your Shopify, SEO, or mobile app project." },
        { title: "Testing & Optimization", description: "Thorough testing and optimization processes will be conducted to ensure the functionality and performance of your project." },
        { title: "Launch & Support", description: "Once everything is set, we will launch your project and provide ongoing support to ensure its success." },
    ]

    return (
        <section className="steps-section is__section">
            <div className="steps-content has__flex container">
                <div className="steps-header">
                    <h2 className="steps-heading is__heading has__margin">Discover the Power of Our Products</h2>
                    <p className="steps-description has__margin">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                    <Button label="Get Started" href="/" style="button" />
                </div>
                <div className="steps-cards">
                    {steps.map((step, index) => (
                        <div key={index} className={`steps-card steps-card-${index + 1}`}>
                            <h3 className="steps-card-title has__flex justify__between is__heading"> <span className="text">{step.title}</span>                            <span className="steps-card-number">{String(index + 1).padStart(2, "0")}</span>
                            </h3>
                            <p className="steps-card-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;
