import Ring_165 from "../images/1_Stein_Ring_165.jpg";
import Ring_163 from "../images/1_Stein_Ring_163.jpg";
import TwoStones from "../images/2xStones_01_143.jpg";
import ThreeStones from "../images/3_Stone_RIng_150.jpg";
import FourStones from "../images/4xStones_01_136.jpg";
import JeanLao from "../images/JeanLao.jpg";
import Alfred from "../images/Alfred.jpg";
import Antoni from "../images/Antoni.jpg";
import Daniel from "../images/Daniel.jpg";
import Elizabet from "../images/Elizabet.jpg";
import Jesica from "../images/Jesica.jpg";
import Linda from "../images/Linda.jpg";
import Sandra from "../images/Sandra.jpg";

import Cabochon_Fassungs159 from "../images/Cabochon_Fassungs159.jpg";
import Cabochon_Fassungs162 from "../images/Cabochon_Fassungs162.jpg";
import part1 from "../images/part1.jpg";
import part2 from "../images/part2.jpg";
import part3 from "../images/part3.jpg";
import part4 from "../images/part3.jpg";
import untitled_177 from "../images/untitled_177.jpg";
import untitled_178 from "../images/untitled_178.jpg";
import untitled_179 from "../images/untitled_179.jpg";
import untitled_180 from "../images/untitled_180.jpg";
import untitled_181 from "../images/untitled_181.jpg";
import untitled_182 from "../images/untitled_182.jpg";
function authorFactory(
  id: number,
  firstName: string,
  lastName: string,
  image: string,
  rating: number,
  text: string
) {
  return {
    id,
    firstName,
    lastName,
    image,
    rating,
    text,
  };
}

export const AuthorsArr = [
  authorFactory(
    123,
    "Jean",
    "Lao",
    JeanLao,
    75,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
  ),
  authorFactory(
    124,
    "Alfred",
    "Smit",
    Alfred,
    35,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
  ),
  authorFactory(
    125,
    "Antonio",
    "Edelman",
    Antoni,
    97,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
  ),
  authorFactory(
    126,
    "Daniel",
    "Edwards",
    Daniel,
    12,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
  ),
  authorFactory(
    127,
    "Elizabeth",
    "Rodjerson",
    Elizabet,
    85,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
  ),
  authorFactory(
    128,
    "Jessica",
    "Alvaro",
    Jesica,
    50,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
  ),
  authorFactory(
    129,
    "Linda",
    "Parker",
    Linda,
    78,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
  ),
  authorFactory(
    130,
    "Sandra",
    "Alvaro",
    Sandra,
    59,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
  ),
];
function productFactory(
  id: number,
  name: string,
  category: string,
  images: string[],
  price: number,
  notation: string,
  jevelParts: string[],
  authorID: number
) {
  return {
    id,
    name,
    category,
    images,
    price,
    notation,
    jevelParts,
    authorID,
  };
}

export const productsArr = [
  productFactory(
    400,
    "Earrings",
    "Necklaces",
    [Cabochon_Fassungs162],
    700,
    "Gold, Brilliant",
    [part1, part2, part3, part4],
    123
  ),
  productFactory(
    401,
    "Friendship Ring",
    "Pendants",
    [
      Ring_165,
      untitled_177,
      untitled_178,
      untitled_179,
      untitled_180,
      untitled_181,
      untitled_182,
    ],
    230,
    "Silver, Gold plated, rose Turmaline",
    [part1, part2, part3, part4],
    124
  ),
  productFactory(
    403,
    "4 Stones Earrings",
    "Pendants",
    [FourStones],
    550,
    "Gold, colored glas stones",
    [part1, part2, part3, part4],
    125
  ),
  productFactory(
    404,
    "2 Stones Earrings",
    "Necklaces",
    [TwoStones],
    450,
    "Gold, colored glas stones",
    [part1, part2, part3, part4],
    126
  ),
  productFactory(
    405,
    "3 Stones Ring",
    "Pendants",
    [ThreeStones],
    450,
    "Gold, Granat stone",
    [part1, part2, part3, part4],
    127
  ),
  productFactory(
    406,
    "Earrings",
    "MensRings",
    [Cabochon_Fassungs159],
    850,
    "Gold, Aquamarine",
    [part1, part2, part3, part4],
    128
  ),
  productFactory(
    407,
    "Friendship Ring",
    "MensRings",
    [Ring_163],
    530,
    "Gold, Brilliant",
    [part1, part2, part3, part4],
    129
  ),

  productFactory(
    400,
    "Earrings",
    "Necklaces",
    [Cabochon_Fassungs162],
    700,
    "Gold, Brilliant",
    [part1, part2, part3, part4],
    123
  ),
  productFactory(
    401,
    "Friendship Ring",
    "Pendants",
    [
      Ring_165,
      untitled_177,
      untitled_178,
      untitled_179,
      untitled_180,
      untitled_181,
      untitled_182,
    ],
    230,
    "Silver, Gold plated, rose Turmaline",
    [part1, part2, part3, part4],
    124
  ),
  productFactory(
    403,
    "4 Stones Earrings",
    "Pendants",
    [FourStones],
    550,
    "Gold, colored glas stones",
    [part1, part2, part3, part4],
    125
  ),
  productFactory(
    404,
    "2 Stones Earrings",
    "Necklaces",
    [TwoStones],
    450,
    "Gold, colored glas stones",
    [part1, part2, part3, part4],
    126
  ),
  productFactory(
    405,
    "3 Stones Ring",
    "Pendants",
    [ThreeStones],
    450,
    "Gold, Granat stone",
    [part1, part2, part3, part4],
    127
  ),
  productFactory(
    406,
    "Earrings",
    "MensRings",
    [Cabochon_Fassungs159],
    850,
    "Gold, Aquamarine",
    [part1, part2, part3, part4],
    128
  ),
  productFactory(
    407,
    "Friendship Ring",
    "MensRings",
    [Ring_163],
    530,
    "Gold, Brilliant",
    [part1, part2, part3, part4],
    129
  ),

  productFactory(
    400,
    "Earrings",
    "Necklaces",
    [Cabochon_Fassungs162],
    700,
    "Gold, Brilliant",
    [part1, part2, part3, part4],
    123
  ),
  productFactory(
    401,
    "Friendship Ring",
    "Pendants",
    [
      Ring_165,
      untitled_177,
      untitled_178,
      untitled_179,
      untitled_180,
      untitled_181,
      untitled_182,
    ],
    230,
    "Silver, Gold plated, rose Turmaline",
    [part1, part2, part3, part4],
    124
  ),
  productFactory(
    403,
    "4 Stones Earrings",
    "Pendants",
    [FourStones],
    550,
    "Gold, colored glas stones",
    [part1, part2, part3, part4],
    125
  ),
  productFactory(
    404,
    "2 Stones Earrings",
    "Necklaces",
    [TwoStones],
    450,
    "Gold, colored glas stones",
    [part1, part2, part3, part4],
    126
  ),
  productFactory(
    405,
    "3 Stones Ring",
    "Pendants",
    [ThreeStones],
    450,
    "Gold, Granat stone",
    [part1, part2, part3, part4],
    127
  ),
  productFactory(
    406,
    "Earrings",
    "MensRings",
    [Cabochon_Fassungs159],
    850,
    "Gold, Aquamarine",
    [part1, part2, part3, part4],
    128
  ),
  productFactory(
    407,
    "Friendship Ring",
    "MensRings",
    [Ring_163],
    530,
    "Gold, Brilliant",
    [part1, part2, part3, part4],
    129
  ),

  productFactory(
    400,
    "Earrings",
    "Necklaces",
    [Cabochon_Fassungs162],
    700,
    "Gold, Brilliant",
    [part1, part2, part3, part4],
    123
  ),
  productFactory(
    401,
    "Friendship Ring",
    "Pendants",
    [
      Ring_165,
      untitled_177,
      untitled_178,
      untitled_179,
      untitled_180,
      untitled_181,
      untitled_182,
    ],
    230,
    "Silver, Gold plated, rose Turmaline",
    [part1, part2, part3, part4],
    124
  ),
  productFactory(
    403,
    "4 Stones Earrings",
    "Pendants",
    [FourStones],
    550,
    "Gold, colored glas stones",
    [part1, part2, part3, part4],
    125
  ),
  productFactory(
    404,
    "2 Stones Earrings",
    "Necklaces",
    [TwoStones],
    450,
    "Gold, colored glas stones",
    [part1, part2, part3, part4],
    126
  ),
  productFactory(
    405,
    "3 Stones Ring",
    "Pendants",
    [ThreeStones],
    450,
    "Gold, Granat stone",
    [part1, part2, part3, part4],
    127
  ),
  productFactory(
    406,
    "Earrings",
    "MensRings",
    [Cabochon_Fassungs159],
    850,
    "Gold, Aquamarine",
    [part1, part2, part3, part4],
    128
  ),
  productFactory(
    407,
    "Friendship Ring",
    "MensRings",
    [Ring_163],
    530,
    "Gold, Brilliant",
    [part1, part2, part3, part4],
    129
  ),
];

function messageFactory(id: number, authorID: number, title: string, text: string) {
  return {
    id,
    authorID,
    title,
    text,
  };
}
export const messages = [
  messageFactory(
    71,
    123,
    "Hello",
    "Hi, Glad to receive your order."
  ),
  messageFactory(
    72,
    124,
    "Hello",
    "Hi, Glad to receive your order. Is your address correct? May I have your telephone number? Some packages require a telephone number so that the post office can deliver them. Thank you. Jean"
  ),
  messageFactory(
    73,
    125,
    "Hello",
    "Hi, Glad to receive your order. Is your address correct? May I have your telephone number? Some packages require a telephone number so that the post office can deliver them. Thank you. Jean"
  ),
  messageFactory(
    74,
    126,
    "Hello",
    "Hi, Glad to receive your order. Is your address correct? May I have your telephone number? Some packages require a telephone number so that the post office can deliver them. Thank you. Jean"
  ),
  messageFactory(
    75,
    127,
    "Hello",
    "Hi, Glad to receive your order. Is your address correct? May I have your telephone number? Some packages require a telephone number so that the post office can deliver them. Thank you. Jean"
  ),
  messageFactory(
    76,
    128,
    "Hello",
    "Hi, Glad to receive your order. Is your address correct? May I have your telephone number? Some packages require a telephone number so that the post office can deliver them. Thank you. Jean"
  ),
  messageFactory(
    77,
    129,
    "Hello",
    "Hi, Glad to receive your order. Is your address correct? May I have your telephone number? Some packages require a telephone number so that the post office can deliver them. Thank you. Jean"
  ),
  messageFactory(
    78,
    130,
    "Hello",
    "Hi, Glad to receive your order. Is your address correct? May I have your telephone number? Some packages require a telephone number so that the post office can deliver them. Thank you. Jean"
  ),
];

export const categories = [
  { url: "Necklaces", name: "Necklaces" },
  { url: "Pendants", name: "Pendants" },
  { url: "Chains", name: "Chains" },
  { url: "GoldRings", name: "Gold Rings" },
  { url: "MensRings", name: `Men's Rings` },
  { url: "KidsJewellery", name: `Kid's Jewellery` },
  { url: "FashionRings", name: "Fashion Rings" },
];
