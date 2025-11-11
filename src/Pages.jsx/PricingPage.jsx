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
        { name: "Mini Piñata (up to12 inches)", price: "$10 - $15" },
        { name: "Regular Piñata (up to 20 inches)", price: "$20 - $45" },
        { name: "Large Piñata (up to 36 inches)", price: "$50+" },
      ]
    },
    {
      category: "Center Pieces",
      items: [
        { name: "Basic (set of 3)", price: "$15" },
        { name: "Premium (set of 3)", price: "$30" },
        { name: "Double Sided", price: "+$10" },
        { name: "Personalized photo", price: "+$10" },
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
        { name: "3D Cake Topper", price: "$30 - $45" },
        { name: "Shaker Cake Topper", price: "$40 - $60" },
        { name: "Cupcake Topper (12pk)", price: "$10 - $15" },
        { name: "LED Light add-on", price: "+$10" },
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
        { name: "Gift Basket Garland", price: "$25 - $40" },
        { name: "Balloon Garland", price: "$100" },
        { name: "Balloon Tower", price: "$50" },
        { name: "Custom B-Day Banner", price: "$25 - $45", note: "* w/name +$10 *" },
        { name: "Photo Banner", price: "$40 - $60" },
        { name: "High Chair Banner", price: "$15", notes: ["* w/Ribbon Garland +$10 *", "* 3D +$5 *"] },
      ]
    },
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
                  <span
                    className="price__item__right"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <span className="price__item__price">{item.price}</span>
                    {/* Single note (backward compatible) */}
                    {item.note && (
                      <span
                        className="price__item__note"
                        style={{
                          marginTop: "4px",
                          fontSize: "12px",
                          fontStyle: "italic",
                          color: "#6107C8",
                        }}
                      >
                        {item.note}
                      </span>
                    )}
                    {/* Multiple notes */}
                    {Array.isArray(item.notes) && item.notes.map((n, i) => (
                      <span
                        key={i}
                        className="price__item__note"
                        style={{
                          marginTop: "4px",
                          fontSize: "12px",
                          fontStyle: "italic",
                          color: "#6107C8",
                        }}
                      >
                        {n}
                      </span>
                    ))}
                  </span>
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
