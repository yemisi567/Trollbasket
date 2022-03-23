import Nike from "./assets/Nike.jpg";
import Adidas from "./assets/Adidas.png";
import Dior from "./assets/Dior.jpg";
import Sandals from "./assets/sandals.png";
import Gown from "./assets/gown.jpg";
import Jean from "./assets/jeans.jpg";
import Macbook from "./assets/macbookpro.png";
import Channel from "./assets/channel.jpg";
import Hp from "./assets/Hp.jpg";
import Iphone from "./assets/Iphone.jpg";
import Table from "./assets/table.jpg";
import Umbrella from "./assets/umbrella.jpg";
import RecentIcon from "./assets/recent1.svg";
import RecentIcon2 from "./assets/recent2.svg";
import RecentIcon3 from "./assets/recent3.svg";

export const products = [
  {
    id: "1ads421egjdsc",

    name: "NIKE Huararche 2019",

    description:
      "Get comfy and comfortable with the new 2019 designer sneaker for all your events",

    image: Nike,

    minPrice: 45000,
    maxPrice: 90000,

    location: "Lagos, All",

    stock: 100,

    moq: 10,

    review: 4.5,

    reviewdBy: "Segun Johnson",

    comment: "What a great idea",
  },
  {
    id: "2ads421egjdsc",

    name: "ADIDAS Huararche 2020",

    description:
      "Get comfy and comfortable with the new 2020 designer sneaker for all your events",

    image: Adidas,

    minPrice: 45000,
    maxPrice: 90000,

    location: "Abuja, All",

    stock: 50,

    moq: 10,
    review: 2.5,

    reviewdBy: "Telma Johnson",

    comment: "Sleek",
  },
  {
    id: "3ads421egjdsc",

    name: "DIOR 2020",

    description: "New 2022 designer bag for all your events",

    image: Dior,

    minPrice: 50000,
    maxPrice: 100000,

    location: "Abuja, All",

    stock: 20,
    moq: 5,
    review: 4.5,

    reviewdBy: "Segun Johnson",
    comment:
      "This is the best product I have used in a long while and the size fits perfectly and I love the colors!!!!!",
  },
  {
    id: "4ads421egjdsc",

    name: "SANDALS",

    description: "New 2022 designer sandals to look chick",

    image: Sandals,

    minPrice: 15000,
    maxPrice: 30000,
    location: "Abuja, All",

    stock: 30,
    moq: 7,

    review: 5,

    reviewdBy: "Olumide Johnson",
    comment:
      "This is the best product I have used in a long while and the size fits perfectly and I love the colors!!!!!",
  },
  {
    id: "5ads421egjdsc",

    name: "GOWN",

    description: "New 2022 designer gown to look unique to that party",

    image: Gown,

    minPrice: 30000,
    maxPrice: 60000,
    location: "Lagos, All",

    stock: 40,
    moq: 15,

    review: 4.5,

    reviewdBy: "Rihanna",
    comment: "I defintely felt pretty",
  },
  {
    id: "6ads421egjdsc",

    name: "JEANS",

    description: "New 2022 designer jean to look pretty",

    image: Jean,
    minPrice: 15000,
    maxPrice: 20000,

    location: "Delta, All",

    stock: 100,
    moq: 10,
    review: 4.5,

    reviewdBy: "Beyonce Knowels",

    comment: "I defintely felt pretty",
  },
  {
    id: "7ads421egjdsc",

    name: "MACBOOK PRO",

    description: "New Macbook Pro 2020",

    image: Macbook,
    minPrice: 1000000,
    maxPrice: 1500000,

    location: "Lagos, All",

    stock: 50,
    moq: 8,
    review: 3,

    reviewdBy: "Greg Morey",

    comment:
      "This is the best product I have used in a long while and the size fits perfectly and I love the colors!!!!!",
  },
  {
    id: "8ads421egjdsc",

    name: "TABLE",

    description: "Amazing furniture to make your home feel like home",

    image: Table,
    minPrice: 100000,
    maxPrice: 150000,

    location: "Abuja, All",

    stock: 20,
    moq: 9,

    review: 5,

    reviewdBy: "Jack Laurren",

    comment: "My home feels comfortable and looks pretty",
  },
  {
    id: "9ads421egjdsc",

    name: "IPHONE 13",

    description: "Get the latest iphone 13",

    image: Iphone,

    minPrice: 1000000,
    maxPrice: 1500000,
    location: "Lagos, All",

    stock: 100,
    moq: 1,
    review: 5,

    reviewdBy: "Ben Carson",

    comment: "Now i definitely think bigger",
  },
  {
    id: "10ads421egjdsc",

    name: "CHANNEL",

    description: "Get the latest channel bag",

    image: Channel,

    minPrice: 100000,
    maxPrice: 150000,

    location: "Abuja, All",

    stock: 50,
    moq: 10,

    review: 3,

    reviewdBy: "Nicki Minaj",

    comment: "I rock Channel and this definitely rocks no doubts",
  },
  {
    id: "11ads421egjdsc",

    name: "HP LAPTOP",

    description: "Get the latest channel bag",

    image: Hp,

    minPrice: 100000,
    maxPrice: 150000,

    location: "Lagos, All",

    stock: 32,
    moq: 11,
    review: 3,

    reviewdBy: "Olumide Johnson",

    comment:
      "This is the best product I have used in a long while and the size fits perfectly and I love the colors!!!!!",
  },
  {
    id: "12ads421egjdsc",

    name: "UMBRELLA",

    description: "Get this cute umbrella at a reasonable price",

    image: Umbrella,
    minPrice: 10000,
    maxPrice: 15000,

    location: "Abuja, All",

    stock: 100,
    moq: 10,
    review: 5,

    reviewdBy: "Johnbosco Ibemere",

    comment:
      "This is the best product I have used in a long while and the size fits perfectly and I love the colors!!!!!",
  },
];

export const locations = [
  {
    location: "Lagos",
  },
  {
    location: "Abuja",
  },
  {
    location: "Delta",
  },
  {
    location: "All",
  },
];

export const recent = [
  {
    id: "3ads421egjdsc",

    description: "Free sample small tote bag gucci",

    image: RecentIcon,
    minPrice: "900",
    maxPrice: "1500",

    moq: 5,
  },
  {
    id: "4ads421egjdsc",

    description: "Free sample small tote bag gucci",

    image: RecentIcon2,
    minPrice: "900",
    maxPrice: "1500",

    moq: 5,
  },
  {
    id: "4ads421egjdsc",

    description: "Free sample small tote bag gucci",

    image: RecentIcon3,
    minPrice: "900",
    maxPrice: "1500",

    moq: 10,
  },
];
