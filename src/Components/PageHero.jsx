// Top banner for inner pages (replaces Banner.jsx).
function PageHero({ title, intro }) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <h1 id="page-title" className="page-hero__title">
        {title}
      </h1>
      {intro && <p className="page-hero__intro">{intro}</p>}
      <img className="page-hero__wave" src="/wave2.svg" alt="" aria-hidden="true" />
    </section>
  );
}

export default PageHero;
