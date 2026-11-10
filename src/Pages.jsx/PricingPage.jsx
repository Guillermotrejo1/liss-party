import { useDispatch } from "react-redux";
import PageHero from "../Components/PageHero";
import { openModal } from "../redux/modalSlice";

const priceCategories = [
  {
    category: "Piñatas",
    items: [
      { name: "Mini Piñata (up to 12 inches)", price: "$10 - $15" },
      { name: "Regular Piñata (up to 20 inches)", price: "$20 - $45" },
      { name: "Large Piñata (up to 36 inches)", price: "$50+" },
    ],
  },
  {
    category: "Center Pieces",
    items: [
      { name: "Basic (set of 3)", price: "$15" },
      { name: "Premium (set of 3)", price: "$30" },
      { name: "Double Sided", price: "+$10" },
      { name: "Personalized photo", price: "+$10" },
    ],
  },
  {
    category: "Party Decorations",
    items: [
      { name: "Backdrop with Stand", price: "$80 - $150" },
      { name: "Table Decoration Package", price: "$60 - $100" },
      { name: "Custom Banners/Signs", price: "$25 - $50" },
    ],
  },
  {
    category: "Cake Toppers",
    items: [
      { name: "Standard Cake Topper", price: "$15 - $25" },
      { name: "3D Cake Topper", price: "$30 - $45" },
      { name: "Shaker Cake Topper", price: "$40 - $60" },
      { name: "Cupcake Topper (12pk)", price: "$10 - $15" },
      { name: "LED Light add-on", price: "+$10" },
    ],
  },
  {
    category: "Custom Shirts",
    items: [
      { name: "Adult T-Shirt", price: "$20 - $30" },
      { name: "Kids T-Shirt", price: "$15 - $25" },
      { name: "Family Package (4 shirts)", price: "$75 - $100" },
      { name: "Birthday Shirt with Name", price: "$25 - $35" },
    ],
  },
  {
    category: "Garlands & Banners",
    items: [
      { name: "Gift Basket Garland", price: "$25 - $40" },
      { name: "Balloon Garland", price: "$100" },
      { name: "Balloon Tower", price: "$50" },
      { name: "Custom B-Day Banner", price: "$25 - $45", notes: ["w/ name +$10"] },
      { name: "Photo Banner", price: "$40 - $60" },
      { name: "High Chair Banner", price: "$15", notes: ["w/ Ribbon Garland +$10", "3D +$5"] },
    ],
  },
];

// Turn "Garlands & Banners" into "garlands-banners" for heading ids
const slug = (text) =>
  text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-");

const PricingPage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <PageHero title="Pricing & Services" />

      <div className="pricing">
        <header className="pricing__intro">
          <h2>Our Services & Pricing</h2>
          <p>
            All prices are estimates and may vary based on customization, size,
            and complexity. Contact us for a personalized quote!
          </p>
        </header>

        <p className="pricing__budget">
          <span aria-hidden="true">💎 </span>
          We have something for every budget! Let's create your perfect
          celebration together.
          <span aria-hidden="true"> 💎</span>
        </p>

        <div className="pricing__grid">
          {priceCategories.map((category, index) => {
            const headingId = `price-${slug(category.category)}`;
            return (
              <section
                key={category.category}
                className="price-card"
                aria-labelledby={headingId}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <h3 id={headingId} className="price-card__title">
                  {category.category}
                </h3>
                <ul className="price-list">
                  {category.items.map((item) => (
                    <li key={item.name} className="price-row">
                      <span className="price-row__name">{item.name}</span>
                      <span className="price-row__dots" aria-hidden="true"></span>
                      <span className="price-row__price">{item.price}</span>
                      {item.notes && (
                        <span className="price-row__notes">
                          {item.notes.map((note) => (
                            <small key={note}>{note}</small>
                          ))}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <footer className="pricing__footer">
          <p>* Prices subject to change based on materials and design complexity</p>
          <p>** Delivery and setup fees may apply for certain services</p>
          <button
            type="button"
            className="pricing__cta"
            aria-haspopup="dialog"
            onClick={() => dispatch(openModal())}
          >
            Request a Custom Quote
          </button>
        </footer>
      </div>
    </>
  );
};

export default PricingPage;
