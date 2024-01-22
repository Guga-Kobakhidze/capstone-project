import kidPhoto from "../assets/kidPhoto.jpg"
// import popularCollection from "../assets/popular-collection-1.png";
import detailedImage1 from "../assets/detailed-image-1.png";
import detailedImage2 from "../assets/detailed-image-2.png";
import detailedImage3 from "../assets/detailed-image-3.png";
import detailedImage4 from "../assets/detailed-image-4.png";
import weddingPhoto from "../assets/wedding-photo.png";
import moreWedding1 from "../assets/moreWedding1.jpg";
import moreWedding2 from "../assets/moreWedding2.jpg";
import moreWedding3 from "../assets/moreWedding3.jpg";
import banquetPhoto from "../assets/banquetPhoto.png"
import womanPhoto from "../assets/womanPhoto.jpg"

const products = [
  {
    id: "V0bA_wyAL5vX_Nfg5NguJ",
    name: "Product 1",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "red",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "IzzBJKy66-YvAX-bbLjOj",
    name: "Product 2",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "7lbRV86qQIOCiFABflW1z",
    name: "Product 3",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "jdQi8HcDUrkHnjOcb26k2",
    name: "Product 4",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "7joyifQasuYKM3NQmqgbw",
    name: "Product 5",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "URDPb4F_sZYoL_UfzHYFI",
    name: "Product 6",
    image: womanPhoto,
    price: 40,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "uUDbGka8ygGsL5AdVElkk",
    name: "Product 7",
    image: womanPhoto,
    price: 30,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "t3wFSavCDn-mR25xusYPv",
    name: "Product 8",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "2eaK9hD-7vnuqKv5jrzeD",
    name: "Product 9",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "hKT8mr9kVFHapb0VksB8G",
    name: "Product 10",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "wDmwGVU2GQ7qhZnhk8QrO",
    name: "Product 11",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "XouykANboIGeCSDWUJn4q",
    name: "Product 12",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "Br97Y9-iol6Ob1GzvymKK",
    name: "Product 13",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "pOI-O8ZcoIABKdRKx53bv",
    name: "Product 14",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "othUbqZcnkSuGzcJWyiYm",
    name: "Product 15",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "_yfKzVEtn2186YzZ5r4Q2",
    name: "Product 16",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "wn_EBzNlQ6wSZRdFvb-CR",
    name: "Product 17",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "SlTMPGb-K-Czj9dzMh0E0",
    name: "Product 18",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "bNwruK4hqLnx4R-vq1L_C",
    name: "Product 19",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "u1nws3npOkZlkNtCLJyG8",
    name: "Product 20",
    image: womanPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "4lwW42t9byHndFe7r4frk",
    name: "Product 21",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "lHqDYWjQf_lgFwTlvdQ1Z",
    name: "Product 22",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "Se1sOTePtFA2ry3s9qMnL",
    name: "Product 23",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "BQkdBt6-uORsJH6vN4jct",
    name: "Product 24",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "K7YDPogrdUG-EY6TvSumJ",
    name: "Product 25",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "1baaQQb04ONCVaGgeNgdB",
    name: "Product 26",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "fynuUNzMK5OkWKLFq0FdV",
    name: "Product 27",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "w9-O1ZEea29pMAo5kne_I",
    name: "Product 28",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "rFYBuk79h9ftHJLk2JFs8",
    name: "Product 29",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "D_NsmYeB1OR4ThB1sDPHk",
    name: "Product 30",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "oRzahFavXVOMUMRzXEIiR",
    name: "Product 31",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "KkcdRKNfcesngiUgEZOZj",
    name: "Product 32",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "Na-r5A2NdO2Xba0UqlG0N",
    name: "Product 33",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "rsc_ksBzFIEpMR_KnHgut",
    name: "Product 34",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "3Mng69pBzRtTgm5UZ-j-1",
    name: "Product 35",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "DG84odtPlJ1OncMfNKUmw",
    name: "Product 36",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "TfbTqSISeOMkq25SZb3pI",
    name: "Product 37",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "z727cNaU576OGFHb4mHi9",
    name: "Product 38",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "red",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "pJaB2GqvU979djI31BO1W",
    name: "Product 39",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "red",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "6OLfGKTrScNl4kBSYzyAp",
    name: "Product 40",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "red",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "ckAATfObqA87rPwD5_aP3",
    name: "Product 41",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "red",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "8V12M3OC9G6WL20R837CD",
    name: "Product 42",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "red",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "TjUCYCNNerihuqkyn7Tqs",
    name: "Product 43",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "red",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "NlAh9_ZcH9U4VLSu070zt",
    name: "Product 44",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "red",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "Bqf_LhzNqcIIpzljedhmG",
    name: "Product 45",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "red",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "u6sTF6xp8OGTfnZAWTNQY",
    name: "Product 46",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "red",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "TsfEaMszl1i6w7KujE4BG",
    name: "Product 47",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "red",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "NIxmhqBtjURSd1vTZhJ5O",
    name: "Product 48",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "red",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "3RhWpsbZLRUe2KNbr_ysU",
    name: "Product 49",
    image: womanPhoto,
    price: 10,
    isOnSale: true,
    category: "woman",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "red",
    date: "2023-12-15",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "P5Y4qT6NymhtgHgujj_Qh",
    name: "Product 1",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "4HniWl8rUwp00jawDBci_",
    name: "Product 2",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "bW8uqv4mnnNGLpUN7jnJq",
    name: "Product 3",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "oTHj1VR43rRqM9C8NUnsA",
    name: "Product 4",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "OA7CojB_7gKc7uOygeMq9",
    name: "Product 5",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "lfQbvfeleV3IflO3UEFHH",
    name: "Product 6",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "7UP3lhz26xXG-Bp91Y0Ht",
    name: "Product 7",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "5Z3LTPypInQYh1U6A-nGD",
    name: "Product 8",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "2Rf7VDeCy0g1crDDUzeZG",
    name: "Product 9",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "J6OW6hMpMHqgZSex8c6Oy",
    name: "Product 10",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "PiRCXWWavrZnpCk0GKeXY",
    name: "Product 11",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "lTFtTZLrdjyz_-Mh_LD9f",
    name: "Product 12",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "6v7E9QiruDYx4MAuJCYX8",
    name: "Product 13",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "kGIaszhwfiOaYaO7gXTln",
    name: "Product 14",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "9NLdHCir4nCdOXRJqXgsm",
    name: "Product 15",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "WuxjoCaILshmtxCc_F3B-",
    name: "Product 16",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "LDxfdL9vMcoaKlj2q5OzF",
    name: "Product 17",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "JnGRW6Kunh_UQJfTedruD",
    name: "Product 18",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "Ra8hbsC3Lf2Lp1Y_DBIUw",
    name: "Product 19",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "FmT0EYQ-X9FUo3b6ZnC0k",
    name: "Product 20",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "bb4vPl_DcpaImCy8axmqU",
    name: "Product 21",
    image: kidPhoto,
    price: 10,
    isOnSale: true,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "QaDeg5zzHOxK9DFG2FLBa",
    name: "Product 22",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "0n2XdEw5j1LzTXarEJQdd",
    name: "Product 23",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "9RzDej-Jh3CbyrMe48yEx",
    name: "Product 24",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "3xwqNEVo2w0uHzfZPTyAQ",
    name: "Product 25",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "2rHvpNsviP3dqyS0J7hX1",
    name: "Product 26",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "QNWD2ItEJ2F68v61qDC-G",
    name: "Product 27",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "JbeQeCU6VyCtcj5pDASWb",
    name: "Product 28",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "8pD5FlG0cSwBBO2wmchlP",
    name: "Product 29",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "K_1cCexalIeswhCpNySu-",
    name: "Product 30",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "cEFMKvT2zbgvzVNWGmua0",
    name: "Product 31",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "dRc6cR21yl12-fIx_F3XC",
    name: "Product 32",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "zaO5U8Ph0Njh3E897cO46",
    name: "Product 33",
    image: kidPhoto,
    price: 20,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "0Bws54Ul1Ln-k3TsNvbjF",
    name: "Product 34",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "3zH2y2bqm18OaNdZmxFVX",
    name: "Product 35",
    image: kidPhoto,
    price: 40,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "bOLehKcBhejoGCiFJwDkV",
    name: "Product 36",
    image: kidPhoto,
    price: 15,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "UGScrs7SBvWiXSN5QSRhF",
    name: "Product 37",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "m_crssqLSEn63ZtD_FYAx",
    name: "Product 38",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "DRd54CuXTyOUmloTXNr8S",
    name: "Product 39",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "Tf7_kBEU40rEEnFIsK5qq",
    name: "Product 40",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "CMOviwusmOfcm8dzKAsvT",
    name: "Product 41",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "B1CenPADoCXi2oGrrgAbf",
    name: "Product 42",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "bqYwCrBwSacLIeTdKbQ24",
    name: "Product 43",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "Vo0cvyyV_AzSecDvpFVxH",
    name: "Product 44",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "FafbedxJ-nMZP_qH55y7X",
    name: "Product 45",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "CJ2AUw-fMk3LhqNph7zlf",
    name: "Product 46",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "A845iyJ5pGI4jkrOsG3lU",
    name: "Product 47",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "aebPg3YaCMAs2aev1qOGS",
    name: "Product 48",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "ZOOLpka7R6J7k3wOwrPAA",
    name: "Product 49",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "Hc_udY8g5nc7zl6RX-VN5",
    name: "Product 50",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "black",
    date: "2024-01-03",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "xrY9cOffwphWCz7pfHVje321",
    name: "Product 1010",
    image: kidPhoto,
    price: 10,
    isOnSale: false,
    category: "kids",
    result: "new product",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "red",
    date: "2023-12-22",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "xrY9cOffwphWCz7pfHVje21",
    name: "Product 1010",
    image: kidPhoto,
    price: 40,
    isOnSale: false,
    category: "kids",
    result: "new product",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "red",
    date: "2023-12-22",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "apcCnOI6B2LasazoIHpcPxLE",
    name: "Product 96",
    image: banquetPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    subCategory: "banquet",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "red",
    date: "2023-12-22",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "apcCnOI6B2LasazdsfhdgcPxLE",
    name: "Product 97",
    image: banquetPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    subCategory: "banquet",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "blue",
    date: "2023-12-22",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "7I7zjhEA-LfasS4XoEm_cCLj",
    name: "Product 97",
    image: banquetPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    subCategory: "banquet",
    moreImages: [
      detailedImage1,
      detailedImage2,
      detailedImage3,
      detailedImage4
    ],
    color: "red",
    date: "2023-12-22",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "xKKsid3dSdsapMzk1IjcJCaI",
    name: "Product 98",
    image: weddingPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    subCategory: "wedding",
    moreImages: [
      moreWedding1,
      moreWedding2,
      moreWedding3,
      moreWedding1,
      moreWedding2,
      moreWedding3,
    ],
    color: "red",
    date: "2023-12-22",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "zHECC_HYbTBQWqte5dasonAn",
    name: "Product 99",
    image: weddingPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    subCategory: "wedding",
    moreImages: [
      moreWedding1,
      moreWedding2,
      moreWedding3,
      moreWedding1,
      moreWedding2,
      moreWedding3,
    ],
    color: "red",
    date: "2023-12-22",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
  {
    id: "xrY9cOffwphWCz7pasafHVjesad",
    name: "Product 100",
    image: weddingPhoto,
    price: 10,
    isOnSale: false,
    category: "woman",
    subCategory: "wedding",
    moreImages: [
      moreWedding1,
      moreWedding2,
      moreWedding3,
      moreWedding1,
      moreWedding2,
      moreWedding3,
    ],
    color: "red",
    date: "2023-12-22",
    description:
      "Deserunt nisi commodo nostrud reprehenderit anim excepteur incididunt est et dolore exercitation. Labore eu tempor duis magna pariatur velit ex tempor in. Duis velit enim.",
  },
];

export default products;
