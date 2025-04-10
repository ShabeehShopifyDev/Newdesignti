import { CircleCheck } from 'lucide-react';
import React from 'react';
import Button from './button';

function PricingTable({ tables, heading }) {

    return (
        <section className="pricing-table is__section">
            <h2 className="section_heading text__center has__margin">{heading}</h2>
            <div className="tables_wrapper has__flex has__gap container">
                {tables.map((table) => (
                    <div className="table" key={table.name}>
                        <div className="main">
                            <h3 className="card__heading text__center has__margin text__thin">{table.name} Plan</h3>
                            <div className="price_service has__flex flex__column items__center">
                                <h2 className="price has__margin"> <span>$</span> {table.price}</h2>
                                <p className="service_overview">
                                    {table.serviceOverview}
                                </p>
                            </div>
                            <div className="list has__margin">
                                <ul>
                                    {table.serviceDetails.map((detail, i) => (
                                        <div className="item_wrapper has__flex items__center has__gap">
                                            <CircleCheck />
                                            <div className="item">
                                                <li key={i}>{detail}</li>
                                            </div>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                            <div className="btn_wrapper has__flex justify__center">
                                <Button label="Contact us on WhatsApp" href="https://wa.link/morbt7" style="button" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PricingTable;
