import React from "react";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";

const PricingPage = () => {
  const priceCategories = [
    {
      category: "Piñatas",
      items: [
        { name: "Small Piñata (12-18 inches)", price: "$45 - $65" },
        { name: "Medium Piñata (20-24 inches)", price: "$75 - $95" },
        { name: "Large Piñata (28-36 inches)", price: "$110 - $150" },
        { name: "Custom Character Piñata", price: "Starting at $120" },
      ]
    },
    {
      category: "Center Pieces",
      items: [
        { name: "Basic Centerpiece (set of 3)", price: "$45" },
        { name: "Premium Centerpiece (set of 3)", price: "$75" },
        { name: "Custom Themed Centerpiece", price: "$30 each" },
        { name: "Balloon Centerpiece", price: "$25 - $40" },
      ]
    },
    {
      category: "Party Decorations",
      items: [
        { name: "Backdrop with Stand", price: "$80 - $150" },
        { name: "Table Decoration Package", price: "$60 - $100" },
        { name: "Custom Banners/Signs", price: "$25 - $50" },
      ]
    },
    {
      category: "Cake Toppers",
      items: [
        { name: "Standard Cake Topper", price: "$15 - $25" },
        { name: "Custom Character Topper", price: "$30 - $45" },
        { name: "3D Cake Topper", price: "$40 - $60" },
        { name: "LED Light-up Topper", price: "$35 - $50" },
      ]
    },
    {
      category: "Custom Shirts",
      items: [
        { name: "Adult T-Shirt", price: "$20 - $30" },
        { name: "Kids T-Shirt", price: "$15 - $25" },
        { name: "Family Package (4 shirts)", price: "$75 - $100" },
        { name: "Birthday Shirt with Name", price: "$25 - $35" },
      ]
    },
    {
      category: "Garlands & Banners",
      items: [
        { name: "Balloon Garland", price: "$25 - $40" },
        { name: "Custom Name Banner", price: "$30 - $45" },
        { name: "Photo Banner", price: "$40 - $60" },
      ]
    },
    {
      category: "Party Packages",
      items: [
        { name: "Basic Package", price: "$150 - $250" },
        { name: "Premium Package", price: "$300 - $450" },
        { name: "Deluxe Package", price: "$500 - $800" },
      ]
    }
  ];

  return (
    <>
      <Banner title="Pricing & Services" />
      <Link to="/">
        <button className="back__btn">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>
      <div className="price__list__container">
        <div className="price__list__intro">
          <h2>Our Services & Pricing</h2>
          <p>All prices are estimates and may vary based on customization, size, and complexity. Contact us for a personalized quote!</p>
        </div>
        <div className="budget__message">
          <p>💎 We have something for every budget! Let's create your perfect celebration together. 💎</p>
        </div>
        
        
        {priceCategories.map((category, index) => (
          <div 
            key={index} 
            className="price__category"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <h3 className="price__category__title">{category.category}</h3>
            <div className="price__items">
              {category.items.map((item, idx) => (
                <div key={idx} className="price__item">
                  <span className="price__item__name">{item.name}</span>
                  <span className="price__item__dots"></span>
                  <span className="price__item__price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="price__list__footer">
          <p>* Prices subject to change based on materials and design complexity</p>
          <p>** Delivery and setup fees may apply for certain services</p>
          <button className="contact__quote__btn">Request a Custom Quote</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;
