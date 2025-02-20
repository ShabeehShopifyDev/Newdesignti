import React from "react";
import Image from "next/image";

const WebDevelopmentSection = () => {
    return (
        <section className="web-development-section is__section">
            <div className="content-wrapper text__center">
                <h1 className="has__margin heading" >Web <strong className="highlight" >Development</strong></h1>
                <p className="has__margin" >We help build and manage a team of world-class <br/> developers to bring your vision to life.</p>
                <div className="shopify-logo">
                    <Image
                        src="/shopifymarket.png"
                        alt="Shopify Logo"
                        width={1500}
                        height={1024}
                    />
                </div>
            </div>
        </section>
    );
};

export default WebDevelopmentSection;