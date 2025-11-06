 const decorData = [
  { id: "decor1", category: "CENTER PIECE" },
  { id: "decor2", category: "PARTY FAVORS" },
  { id: "decor3", category: "LABELS" },
  { id: "decor4", category: "CENTER PIECE" },
  { id: "decor5", category: "PROPS" },
  { id: "decor6", category: "CENTER PIECE" },
  { id: "decor7", category: "CENTER PIECE" },
  { id: "decor8", category: "PARTY FAVORS" },
  { id: "decor9", category: "PARTY FAVORS" },
  { id: "decor10", category: "PROPS" },
  { id: "decor11", category: "CAKE TOPPERS" },
  { id: "decor12", category: "CENTER PIECE" },
  { id: "decor13", category: "PROPS" },
  { id: "decor14", category: "CAKE TOPPERS" },
  { id: "decor15", category: "CENTER PIECE" },
  { id: "decor16", category: "CENTER PIECE" },
  { id: "decor17", category: "CENTER PIECE" },
  { id: "decor18", category: "CENTER PIECE" },
  { id: "decor19", category: "CENTER PIECE" },
  { id: "decor20", category: "CENTER PIECE" },
];

// Export the full data
export default decorData;

// Also export just the file names for backward compatibility
export const imgFiles = decorData.map(item => item.id);

// Export unique categories for filter buttons
export const categories = ["ALL", ...new Set(decorData.map(item => item.category))];


  /*
**CENTER PIECES**
CENTER PIECES
LABELS
PARTY FAVORS
CAKE TOPPERS
PROPS
*/