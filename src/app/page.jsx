import CTASection from "@/components/CTASection";
import Steps from "@/components/Developmentsteps";
import ImageSlider from "@/components/ImageSlider";
import PricingTable from "@/components/PriceTable";
import ServicesTabs from "@/components/ServicesTabs";
import TestimonialSlider from "@/components/TestimonialsSection";
import WebDevelopmentSection from "@/components/Webdevelpment";

export default function Home() {

  const clientsData = [
    {
      name: "Imran Khan",
      role: "Software Engineer",
      image: "/users/user2.jpg",
      rating: 5,
      review:
        "Without any doubt, I recommend Alcaline Solutions as one of the best web design and digital marketing agencies.",
    },
    {
      name: "Romeena De Silva",
      role: "M.Usman",
      image: "/users/user3.jpg",
      rating: 5,
      review:
        "One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.",
    },
    {
      name: "Romeena De Silva",
      role: "Janet Cosmetics",
      image: "/users/user1.jpg",
      rating: 5,
      review:
        "One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.",
    },
  ];

  let tables = [
    {
        name: "Basic",
        subheading: "For small businesses",
        price: 300,
        serviceOverview: "Up to 10 products store",
        serviceDetails: [
            "Theme customizations",
            "Home Page with High Conversion Rate",
            "User-Friendly Collection and Product Pages",
            "3 Static pages",
            "3rd Party Apps Integrations (Up to 2)",
            "Responsive Design",
            "Quality Assurance",
            "Payments & Shipping configurations"
        ],
        color: "#636387"
    },
    {
        name: "Mid-level",
        subheading: "For mid-level business",
        price: 550,
        serviceOverview: "Up to 40 products store",
        serviceDetails: [
            "All Basic plans +",
            "A custom sections",
            "Highly modern product page",
            "Metafields - Metaobjects data",
            "3rd Party Apps Integrations (Upto 5)",
            "Custom Templates",
            "Quality Assurance",
            "Payments & Shipping configurations"
        ],
        color: "#50668D"
    },
    {
        name: "Advanced",
        subheading: "For Larger stores",
        price: 900,
        serviceOverview: "Up to 100 products store",
        serviceDetails: [
            "All Mid-level +",
            "Custom Theme development",
            "Custom Product Templates",
            "Subscriptions Products",
            "Advanced level product forms",
            "Upsell features",
            "Quality Assurance",
            "Payments & Shipping configurations"
        ],
        color: "#B65F5F"
    }
  ];
  

  return (
    <>
      <WebDevelopmentSection />
      <ImageSlider />
      <Steps/>
      <ServicesTabs />
      <CTASection />
      <PricingTable heading="Ready to Launch Your New Store?" tables={tables} />
      <TestimonialSlider testimonials={clientsData} />
    </>
  )
}
