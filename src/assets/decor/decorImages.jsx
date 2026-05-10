const CATEGORY_ORDER = [
  "CAKE TOPPERS",
  "CENTER PIECES",
  "LABELS",
  "PROPS",
  "PARTY FAVORS",
];

// Keep manual category assignments grouped for readability.
// Any file not listed here falls back to UNCATEGORIZED.
const idsByCategory = {
  "CAKE TOPPERS": ["decor2", "decor3", "decor25", "decor26", "decor27"],
  "CENTER PIECES": ["decor1", "decor20", "decor21", "decor22", "decor23", "decor24"],
  "LABELS": ["decor6", "decor7", "decor9", "decor10", "decor19"],
  "PROPS": ["decor11", "decor12", "decor18"],
  "PARTY FAVORS": ["decor4", "decor5", "decor8", "decor13", "decor14", "decor15", "decor16", "decor17"],
};

const categoryById = Object.entries(idsByCategory).reduce((acc, [category, ids]) => {
  ids.forEach((id) => {
    acc[id] = category;
  });
  return acc;
}, {});

const decorContext = require.context("./", false, /^\.\/decor\d+\.webp$/);

const decorIds = decorContext
  .keys()
  .map((key) => key.replace("./", "").replace(".webp", ""))
  .sort((a, b) => Number(a.replace("decor", "")) - Number(b.replace("decor", "")));

const decorData = decorIds
  .map((id) => ({
    id,
    category: categoryById[id] || "UNCATEGORIZED",
  }))
  .sort((a, b) => {
    const categoryA = CATEGORY_ORDER.indexOf(a.category);
    const categoryB = CATEGORY_ORDER.indexOf(b.category);

    const orderA = categoryA === -1 ? Number.MAX_SAFE_INTEGER : categoryA;
    const orderB = categoryB === -1 ? Number.MAX_SAFE_INTEGER : categoryB;
    if (orderA !== orderB) return orderA - orderB;

    return Number(a.id.replace("decor", "")) - Number(b.id.replace("decor", ""));
  });

// Export the full data
export default decorData;

// Also export just the file names for backward compatibility
export const imgFiles = decorData.map(item => item.id);

// Export unique categories for filter buttons
export const categories = [
  "ALL",
  ...CATEGORY_ORDER.filter((category) => decorData.some((item) => item.category === category)),
  ...(decorData.some((item) => item.category === "UNCATEGORIZED") ? ["UNCATEGORIZED"] : []),
];
