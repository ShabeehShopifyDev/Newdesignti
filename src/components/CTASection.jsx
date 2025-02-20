import React from "react";
import Button from "./Button";

const CTASection = () => {
    return (
        <section className="cta-section is__section text__center">
            <div className="cta-content container has__flex has__gap justify__between">
                <div className="content">
                    <h2 className="has__margin is__heading">Ready to Elevate Your Online Presence?</h2>
                    <p>
                        Let's work together to create a cutting-edge website that stands out in the digital
                        landscape.
                    </p>
                </div>
                <div className="btn_wrapper has__flex items__center">
                    <Button label="Get in Touch" href="/contact" style="button" />
                </div>
            </div>
        </section>
    );
};

export default CTASection;