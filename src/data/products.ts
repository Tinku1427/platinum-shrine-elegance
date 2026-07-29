import productBracelet from "@/assets/product-bracelet-1.jpg";
import collectionRings from "@/assets/collection-rings.jpg";
import collectionEarrings from "@/assets/collection-earrings.jpg";
import collectionChains from "@/assets/collection-chains.jpg";
import collectionBracelets from "@/assets/collection-bracelets.jpg";

// Real product photography supplied by the client.
import ringChannelBar from "@/assets/ring-channel-bar.jpg";
import earringAurora1 from "@/assets/earring-aurora-1.jpg";
import earringAurora2 from "@/assets/earring-aurora-2.jpg";
import earringKite1 from "@/assets/earring-kite-1.jpg";
import earringKite2 from "@/assets/earring-kite-2.jpg";
import pendantAurora1 from "@/assets/pendant-aurora-1.jpg";
import pendantAurora2 from "@/assets/pendant-aurora-2.jpg";
import pendantKite1 from "@/assets/pendant-kite-1.jpg";
import pendantKite2 from "@/assets/pendant-kite-2.jpg";
import bandsCompanion1 from "@/assets/bands-companion-1.jpg";
import bandsCompanion2 from "@/assets/bands-companion-2.jpg";
import bandsCompanion3 from "@/assets/bands-companion-3.jpg";
import bandsCompanion4 from "@/assets/bands-companion-4.jpg";
import bandsCompanion5 from "@/assets/bands-companion-5.jpg";
import bandsCompanion6 from "@/assets/bands-companion-6.jpg";
import bandsCompanion7 from "@/assets/bands-companion-7.jpg";
import bandsCompanion8 from "@/assets/bands-companion-8.jpg";

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
  "channel-bar-ring": {
    id: "channel-bar-ring",
    name: "The Channel Bar Ring",
    category: "Ring",
    tagline: "Four stones, one continuous line of light.",
    price: "On Request",
    images: [ringChannelBar, collectionRings],
    description:
      "A horizontal bar of four channel-set round brilliants, framed in platinum with a rose gold inner border, set into a mirror-polished platinum band. A quiet, architectural take on the classic diamond ring.",
    specs: {
      metal: "Platinum & Rose Gold",
      purity: "PT950 · 95% Pure",
      weight: "4.2 grams",
      stone: "Round Brilliant Diamonds",
      stoneWeight: "0.60 ct (Total)",
      clarity: "VS1 – VS2",
      color: "F — Colourless",
      setting: "Channel Set",
      finish: "High Polish Mirror",
    },
    story:
      "Built on a bar setting rather than a single stone — four brilliants standing in for four moments worth marking.",
  },
  "companion-wedding-bands": {
    id: "companion-wedding-bands",
    name: "Companion Wedding Bands",
    category: "Ring",
    tagline: "Two bands, one platinum promise.",
    price: "On Request",
    images: [
      bandsCompanion1,
      bandsCompanion2,
      bandsCompanion3,
      bandsCompanion4,
      bandsCompanion5,
      bandsCompanion6,
      bandsCompanion7,
      bandsCompanion8,
    ],
    description:
      "A collection of matched his-and-hers platinum wedding bands — offered in a range of finishes, from clean two-tone rose gold inlays to diamond-set courses and satin-brushed profiles. Every pair is cast and finished together, so the two bands read as one design worn by two people.",
    specs: {
      metal: "Platinum, some with Rose Gold accents",
      purity: "PT950 · 95% Pure",
      weight: "4.5–6.0 grams (Each, varies by design)",
      stone: "Round Brilliant Diamonds (selected designs)",
      stoneWeight: "0.05–0.15 ct (Per band, where set)",
      clarity: "VS1 – VS2",
      color: "F–G — Colourless",
      setting: "Bezel & Flush Set",
      finish: "Satin, Brushed & High Polish",
    },
    story:
      "Eight finishes from the same family of companion bands — a starting point for couples to choose the platinum pairing that matches their story.",
  },
  "aurora-cluster-studs": {
    id: "aurora-cluster-studs",
    name: "Aurora Cluster Studs",
    category: "Earrings",
    tagline: "Light, in motion.",
    price: "On Request",
    images: [earringAurora1, earringAurora2, collectionEarrings],
    description:
      "An asymmetric cascade of round brilliants clustered at the top and trailing into a soft S-curve, hand-set on platinum with secure screw backs. Each earring reads as a single continuous piece of light rather than a row of individual stones.",
    specs: {
      metal: "Platinum",
      purity: "PT950 · 95% Pure",
      weight: "2.8 grams (Pair)",
      stone: "Round Brilliant Diamonds",
      stoneWeight: "0.85 ct (Total)",
      clarity: "VVS2 – VS1",
      color: "E–F — Colourless",
      setting: "Cluster · Prong",
      finish: "High Polish",
    },
    story:
      "Designed to catch light from every angle — a cluster silhouette that moves gently with the wearer.",
  },
  "kite-halo-studs": {
    id: "kite-halo-studs",
    name: "Kite Halo Studs",
    category: "Earrings",
    tagline: "A geometric frame for brilliance.",
    price: "On Request",
    images: [earringKite1, earringKite2, collectionEarrings],
    description:
      "A brushed-finish platinum kite frames a circular pavé cluster at its centre, with sharply faceted edges that catch the light differently from every angle. A more architectural, statement-making stud.",
    specs: {
      metal: "Platinum",
      purity: "PT950 · 95% Pure",
      weight: "3.4 grams (Pair)",
      stone: "Round Brilliant Diamonds",
      stoneWeight: "0.30 ct (Total)",
      clarity: "VS1",
      color: "F — Colourless",
      setting: "Pavé Cluster",
      finish: "Brushed & High Polish",
    },
    story:
      "The kite silhouette is a departure from the round stud — a faceted, sculptural frame built to stand on its own.",
  },
  "aurora-cluster-pendant": {
    id: "aurora-cluster-pendant",
    name: "Aurora Cluster Pendant",
    category: "Chain",
    tagline: "Understated. Unmistakably rare.",
    price: "On Request",
    images: [pendantAurora1, pendantAurora2, collectionChains],
    description:
      "The pendant companion to the Aurora Cluster Studs — the same cascading cluster of round brilliants suspended from a fine platinum cable chain. Designed to be worn together or on its own.",
    specs: {
      metal: "Platinum",
      purity: "PT950 · 95% Pure",
      weight: "3.6 grams (With Chain)",
      stone: "Round Brilliant Diamonds",
      stoneWeight: "0.45 ct (Total)",
      clarity: "VVS2 – VS1",
      color: "E–F — Colourless",
      setting: "Cluster · Bezel",
      finish: "High Polish",
    },
    story:
      "The everyday companion piece — quiet on the chain, unmistakable up close.",
  },
  "kite-halo-pendant": {
    id: "kite-halo-pendant",
    name: "Kite Halo Pendant",
    category: "Chain",
    tagline: "A geometric frame, worn close.",
    price: "On Request",
    images: [pendantKite1, pendantKite2, collectionChains],
    description:
      "A faceted platinum kite pendant with a pavé diamond centre, finished to match the Kite Halo Studs. Suspended from a fine cable chain for a piece that reads as sculptural rather than sparkly.",
    specs: {
      metal: "Platinum",
      purity: "PT950 · 95% Pure",
      weight: "3.2 grams (With Chain)",
      stone: "Round Brilliant Diamonds",
      stoneWeight: "0.20 ct (Total)",
      clarity: "VS1",
      color: "F — Colourless",
      setting: "Pavé Cluster",
      finish: "Brushed & High Polish",
    },
    story:
      "A pendant built around geometry first, brilliance second — designed to pair with the Kite Halo Studs.",
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
