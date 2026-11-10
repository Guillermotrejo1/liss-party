import { Link } from "react-router-dom";

// One home-page category: heading, two sample photos, and a "See more" link.
// Replaces the near-identical Shirts / Piñatas / Garlands / Decorations components.
function CategoryPreview({ id, title, to, images, linkLabel }) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      className="category"
      aria-labelledby={headingId}
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <h2 id={headingId} className="category__title">
        {title}
      </h2>

      {images.map((image, index) => (
        <figure
          key={image.src}
          className={`category__img category__img--${index === 0 ? "first" : "second"}`}
          data-aos={index === 0 ? "flip-left" : "flip-right"}
        >
          <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
        </figure>
      ))}

      {/* A link styled as a button: it goes to another page */}
      <Link to={to} className="btn-glow category__link">
        {linkLabel}
      </Link>
    </section>
  );
}

export default CategoryPreview;
