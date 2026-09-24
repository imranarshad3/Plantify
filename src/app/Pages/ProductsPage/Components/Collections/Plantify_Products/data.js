import anthurium from "./products/anthurium.png";
import peperomia from "./products/peperomia.png";
import birdsnestfern from "./products/birds-nest-fern.png";
import monstera from "./products/monstera.png";
import pinkcalathea from "./products/pink-calathea.png";
import peacelily from "./products/peace-lily.png";
import snakeplant from "./products/snake-plant.png";
import zzplant from "./products/zz-plant.png";
import calatheaorbifolia from "./products/calathea-orbifolia.png";

export const products = [
  {
    id: 1,
    name: "Anthurium Flower",
    slug: "anthurium-flower",
    category: "Flowering",
    price: 34,
    oldPrice: 40,
    rating: 5,
    reviews: 48,
    badge: "SALE",
    images: [anthurium, peperomia, birdsnestfern],
    careLevel: "Moderate",
    potColor: "Cream",
    colors: ["#292929", "#e9b86d", "#eee9dc", "#bc6831"],
    light: "Bright indirect light",
    watering: "Water when the top inch of soil is dry",
    petFriendly: false,
    description:
      "A striking flowering houseplant with glossy green leaves and vivid red blooms.",
  },

  {
    id: 2,
    name: "Peperomia Ginny",
    slug: "peperomia-ginny",
    category: "Foliage",
    price: 25,
    oldPrice: null,
    rating: 5,
    reviews: 36,
    badge: "NEW",
    images: [peperomia],
    careLevel: "Easy",
    potColor: "Cream",
    colors: ["#292929", "#e9b86d", "#eee9dc", "#bc6831"],
    light: "Medium to bright indirect light",
    watering: "Let the soil partially dry between waterings",
    petFriendly: true,
    description:
      "A compact variegated peperomia with attractive green, cream and pink-edged leaves.",
  },

  {
    id: 3,
    name: "Bird's Nest Fern",
    slug: "birds-nest-fern",
    category: "Foliage",
    price: 45,
    oldPrice: null,
    rating: 5,
    reviews: 29,
    badge: null,
    images: [birdsnestfern],
    careLevel: "Moderate",
    potColor: "Cream",
    colors: ["#292929", "#e9b86d", "#eee9dc"],
    light: "Medium to bright indirect light",
    watering: "Keep the soil lightly and consistently moist",
    petFriendly: true,
    description:
      "A lush tropical fern with broad, gently rippled fronds growing from a central rosette.",
  },

  {
    id: 4,
    name: "Monstera Deliciosa",
    slug: "monstera-deliciosa",
    category: "Foliage",
    price: 55,
    oldPrice: null,
    rating: 4,
    reviews: 61,
    badge: "BESTSELLER",
    images: [monstera],
    careLevel: "Easy",
    potColor: "Cream",
    colors: ["#292929", "#e9b86d", "#eee9dc"],
    light: "Bright indirect light",
    watering: "Water when the top 2 inches of soil are dry",
    petFriendly: false,
    description:
      "A classic tropical houseplant recognized by its large, naturally split leaves.",
  },

  {
    id: 5,
    name: "Pink Calathea",
    slug: "pink-calathea",
    category: "Flowering",
    price: 42,
    oldPrice: null,
    rating: 5,
    reviews: 34,
    badge: "NEW",
    images: [pinkcalathea],
    careLevel: "Moderate",
    potColor: "Cream",
    colors: ["#292929", "#e9b86d", "#eee9dc"],
    light: "Bright filtered light",
    watering: "Keep soil evenly moist without waterlogging",
    petFriendly: true,
    description:
      "A colorful prayer-plant style houseplant with pink, green and cream foliage.",
  },

  {
    id: 6,
    name: "Peace Lily",
    slug: "peace-lily",
    category: "Flowering",
    price: 38,
    oldPrice: null,
    rating: 4,
    reviews: 52,
    badge: null,
    images: [peacelily],
    careLevel: "Easy",
    potColor: "Cream",
    colors: ["#292929", "#e9b86d", "#eee9dc"],
    light: "Medium to bright indirect light",
    watering: "Water when the surface begins to dry",
    petFriendly: false,
    description:
      "An elegant flowering plant with glossy foliage and clean white blooms.",
  },

  {
    id: 7,
    name: "Snake Plant",
    slug: "snake-plant",
    category: "Succulents & Cacti",
    price: 29,
    oldPrice: null,
    rating: 5,
    reviews: 74,
    badge: null,
    images: [snakeplant],
    careLevel: "Easy",
    potColor: "Cream",
    colors: ["#292929", "#e9b86d", "#eee9dc"],
    light: "Low to bright indirect light",
    watering: "Allow soil to dry completely between waterings",
    petFriendly: false,
    description:
      "A hardy architectural plant with upright sword-shaped leaves and minimal watering needs.",
  },

  {
    id: 8,
    name: "ZZ Plant",
    slug: "zz-plant",
    category: "Foliage",
    price: 48,
    oldPrice: null,
    rating: 5,
    reviews: 43,
    badge: null,
    images: [zzplant],
    careLevel: "Easy",
    potColor: "Cream",
    colors: ["#292929", "#e9b86d", "#eee9dc"],
    light: "Low to bright indirect light",
    watering: "Let the soil dry well between waterings",
    petFriendly: false,
    description:
      "A resilient foliage plant with glossy leaflets and an easy-care growth habit.",
  },

  {
    id: 9,
    name: "Calathea Orbifolia",
    slug: "calathea-orbifolia",
    category: "Hanging Plants",
    price: 62,
    oldPrice: null,
    rating: 4,
    reviews: 31,
    badge: null,
    images: [calatheaorbifolia],
    careLevel: "Moderate",
    potColor: "Cream",
    colors: ["#292929", "#e9b86d", "#eee9dc"],
    light: "Bright indirect light",
    watering: "Keep soil lightly moist and avoid letting it dry completely",
    petFriendly: true,
    description:
      "A decorative calathea with broad rounded leaves and distinctive silver-green striping.",
  },
];

export default products;
