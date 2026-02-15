export const productsData = [
  {
    id: 1,
    name: "LED Bulb 12W",
    price: 350,
    image: "💡",
    category: "Lighting",
    description: "Energy-efficient LED bulb with 12W power consumption"
  },
  {
    id: 2,
    name: "Premium Switch",
    price: 250,
    image: "🔌",
    category: "Switches",
    description: "High-quality modular switch with elegant design"
  },
  {
    id: 3,
    name: "Copper Wire Roll 100m",
    price: 8500,
    image: "〰️",
    category: "Wiring",
    description: "Pure copper electrical wire, 100 meters roll"
  },
  {
    id: 4,
    name: "Smart WiFi Switch",
    price: 2500,
    image: "📱",
    category: "Smart Home",
    description: "WiFi-enabled smart switch with app control"
  },
  {
    id: 5,
    name: "Wiring Kit Complete",
    price: 12000,
    image: "🧰",
    category: "Kits",
    description: "Complete wiring kit for home installation"
  }
];

export const maintenancePackages = [
  {
    id: 1,
    name: "Basic",
    price: 3000,
    period: "per visit",
    features: [
      "Basic electrical inspection",
      "Minor repairs",
      "Safety check",
      "1-month warranty"
    ],
    recommended: false
  },
  {
    id: 2,
    name: "Standard",
    price: 8000,
    period: "per quarter",
    features: [
      "Complete electrical inspection",
      "All minor & major repairs",
      "Panel maintenance",
      "Safety certification",
      "6-month warranty"
    ],
    recommended: true
  },
  {
    id: 3,
    name: "Premium",
    price: 15000,
    period: "per year",
    features: [
      "24/7 emergency support",
      "Unlimited repairs",
      "Annual rewiring check",
      "Solar system maintenance",
      "Priority booking",
      "1-year warranty"
    ],
    recommended: false
  }
];
