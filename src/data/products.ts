import productRing from "@/assets/product-ring-1.jpg";
import productEarring from "@/assets/product-earring-1.jpg";
import productChain from "@/assets/product-chain-1.jpg";
import productBracelet from "@/assets/product-bracelet-1.jpg";
import collectionRings from "@/assets/collection-rings.jpg";
import collectionEarrings from "@/assets/collection-earrings.jpg";
import collectionChains from "@/assets/collection-chains.jpg";
import collectionBracelets from "@/assets/collection-bracelets.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  price: string;
  images: string[];
  description: string;
  specs: {
    metal: string;
    purity: string;
    weight: string;
    stone: string;
    stoneWeight: string;
    clarity: string;
    color: string;
    setting: string;
    finish: string;
  };
  story: string;
};

export const products: Record<string, Product> = {
  "solitaire-eternal": {
    id: "solitaire-eternal",
    name: "The Eternal Solitaire",
    category: "Ring",
    tagline: "A promise, forged in the rarest metal.",
    price: "On Request",
    images: [productRing, collectionRings],
    description:
      "A single brilliant-cut diamond, held by four hand-shaped platinum prongs. Cast in solid 95% platinum, the tapered shank is mirror-polished for a seamless, weightless silhouette on the finger.",
    specs: {
      metal: "Platinum",
      purity: "PT950 · 95% Pure",
      weight: "4.8 grams",
      stone: "Round Brilliant Diamond",
      stoneWeight: "1.02 ct (Center)",
      clarity: "VVS1",
      color: "D — Colourless",
      setting: "Four-Prong Solitaire",
      finish: "High Polish Mirror",
    },
    story:
      "The Eternal Solitaire is our house signature — an heirloom designed to outlive trends, seasons and generations.",
  },
  "aurora-drops": {
    id: "aurora-drops",
    name: "Aurora Drop Earrings",
    category: "Earrings",
    tagline: "Light, in motion.",
    price: "On Request",
    images: [productEarring, collectionEarrings],
    description:
      "Pear-cut diamonds suspended within a halo of pavé brilliants. Every drop is hand-set on platinum wire, allowing each stone to catch and release light with the slightest movement.",
    specs: {
      metal: "Platinum",
      purity: "PT950 · 95% Pure",
      weight: "6.2 grams (Pair)",
      stone: "Pear & Round Brilliant Diamonds",
      stoneWeight: "3.40 ct (Total)",
      clarity: "VVS2",
      color: "E — Colourless",
      setting: "Halo · Prong",
      finish: "High Polish",
    },
    story:
      "Designed for the moment between anticipation and arrival — the pause when a room turns to look.",
  },
  "silhouette-chain": {
    id: "silhouette-chain",
    name: "Silhouette Solitaire Chain",
    category: "Chain",
    tagline: "Understated. Unmistakably rare.",
    price: "On Request",
    images: [productChain, collectionChains],
    description:
      "A whisper-thin platinum cable chain finished with a single floating solitaire. The kind of piece that lives on the skin — from morning coffee to midnight.",
    specs: {
      metal: "Platinum",
      purity: "PT950 · 95% Pure",
      weight: "3.1 grams",
      stone: "Round Brilliant Diamond",
      stoneWeight: "0.35 ct",
      clarity: "VS1",
      color: "F — Colourless",
      setting: "Four-Prong Pendant",
      finish: "Satin & Polish",
    },
    story:
      "The essential everyday. A piece so quiet, its rarity is discovered rather than announced.",
  },
  "riviera-tennis": {
    id: "riviera-tennis",
    name: "Rivière Tennis Bracelet",
    category: "Bracelet",
    tagline: "A river of light, worn close.",
    price: "On Request",
    images: [productBracelet, collectionBracelets],
    description:
      "Forty-two matched round brilliants, each individually set in platinum, articulated to move with the wrist. Secured by an invisible double-lock clasp.",
    specs: {
      metal: "Platinum",
      purity: "PT950 · 95% Pure",
      weight: "12.4 grams",
      stone: "Round Brilliant Diamonds",
      stoneWeight: "5.85 ct (Total)",
      clarity: "VVS2 – VS1",
      color: "D–F — Colourless",
      setting: "Four-Prong Rivière",
      finish: "High Polish",
    },
    story:
      "The rivière — French for river — a continuous line of light that never breaks.",
  },
};

export const productList = Object.values(products);
