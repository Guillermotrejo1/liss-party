 const decorData = [
  { id: "decor1", category: "CAKE TOPPERS" },
  { id: "decor2", category: "CAKE TOPPERS" },
  { id: "decor3", category: "CAKE TOPPERS" },
  { id: "decor4", category: "CAKE TOPPERS" },
  { id: "decor5", category: "CAKE TOPPERS" },
  { id: "decor6", category: "CENTER PIECES" },
  { id: "decor7", category: "CENTER PIECES" },
  { id: "decor8", category: "CENTER PIECES" },
  { id: "decor9", category: "CENTER PIECES" },
  { id: "decor10", category: "CENTER PIECES" },
  { id: "decor11", category: "CENTER PIECES" },
  { id: "decor12", category: "LABELS" },
  { id: "decor13", category: "LABELS" },
  { id: "decor14", category: "LABELS" },
  { id: "decor15", category: "LABELS" },
  { id: "decor16", category: "LABELS" },
  { id: "decor17", category: "LABELS" },
  { id: "decor18", category: "PROPS" },
  { id: "decor19", category: "PROPS" },
  { id: "decor20", category: "PROPS" },
  { id: "decor21", category: "PARTY FAVORS" },
  { id: "decor22", category: "PARTY FAVORS" },
  { id: "decor23", category: "PARTY FAVORS" },
  { id: "decor24", category: "PARTY FAVORS" },
  { id: "decor25", category: "PARTY FAVORS" },
  { id: "decor26", category: "PARTY FAVORS" },
  { id: "decor27", category: "PARTY FAVORS" },
];

// Export the full data
export default decorData;

// Also export just the file names for backward compatibility
export const imgFiles = decorData.map(item => item.id);

// Export unique categories for filter buttons
export const categories = ["ALL", ...new Set(decorData.map(item => item.category))];
