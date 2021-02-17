import { IHotelDetails } from "./store/search/models/Hotel";

const countries = [
  {
    key: "1",
    name: "Italy",
    image: require("../assets/countries/italy.jpg"),
  },
  {
    key: "2",
    name: "Greece",
    image: require("../assets/countries/greece.jpg"),
  },
  {
    key: "3",
    name: "Spain",
    image: require("../assets/countries/spain.jpg"),
  },
  {
    key: "4",
    name: "Monaco",
    image: require("../assets/countries/monaco.jpg"),
  },
  {
    key: "5",
    name: "Turkey",
    image: require("../assets/countries/turkey.jpg"),
  },
  {
    key: "7",
    name: "United Kindom",
    image: require("../assets/countries/uk.jpg"),
  },
  {
    key: "6",
    name: "Egypt",
    image: require("../assets/countries/egypt.jpg"),
  },
  {
    key: "8",
    name: "U.A.E.",
    image: require("../assets/countries/uae.jpg"),
  },
];

const destinations = [
  {
    country: "Italy",
    image: require("../assets/countries/italy.jpg"),
    cityKeys: [1, 2, 3],
  },
  {
    country: "Greece",
    image: require("../assets/countries/greece.jpg"),
    cityKeys: [4],
  },
  {
    country: "Monaco",
    image: require("../assets/countries/monaco.jpg"),
    cityKeys: [5],
  },
  {
    country: "Spain",
    image: require("../assets/countries/spain.jpg"),
    cityKeys: [6],
  },
  {
    country: "Turkey",
    image: require("../assets/countries/turkey.jpg"),
    cityKeys: [7, 8],
  },
  {
    country: "United Kindom",
    image: require("../assets/countries/uk.jpg"),
    cityKeys: [9],
  },
  {
    country: "Egypt",
    image: require("../assets/countries/egypt.jpg"),
    cityKeys: [10, 11, 12],
  },
  {
    country: "U.A.E.",
    image: require("../assets/countries/uae.jpg"),
    cityKeys: [13],
  },
];

const cities = [
  {
    key: 1,
    continent: "Europe",
    country: "Italy",
    name: "Amalfi",
    image: require("../assets/cities/amalfi.jpg"),
    isHero: true,
    description: "test",
  },
  {
    key: 2,
    continent: "Europe",
    country: "Italy",
    name: "Venice",
    isHero: false,
    description: "test",
    image: require("../assets/cities/dubai.jpg"),
  },
  {
    key: 3,
    continent: "Europe",
    country: "Italy",
    name: "Rome",
    image: require("../assets/cities/rome.jpg"),
    isHero: true,
    description: "test",
  },
  {
    key: 4,
    continent: "Europe",
    country: "Greece",
    name: "Mykonos",
    image: require("../assets/cities/mykonos.jpg"),
    isHero: true,
    description: "test",
  },
  {
    key: 5,
    continent: "Europe",
    country: "Monaco",
    name: "Montecarlo",
    isHero: false,
    description: "test",
    image: require("../assets/cities/dubai.jpg"),
  },
  {
    key: 6,
    continent: "Europe",
    country: "Spain",
    name: "Barcelona",
    image: require("../assets/cities/barcelona.jpg"),
    isHero: true,
    description: "test",
  },
  {
    key: 7,
    continent: "Europe",
    country: "Turkey",
    name: "Antalya/Belek/Ölüdeniz",
    isHero: false,
    description: "test",
    image: require("../assets/cities/dubai.jpg"),
  },
  {
    key: 8,
    continent: "Europe",
    country: "Turkey",
    name: "Istanbul",
    isHero: false,
    description: "test",
    image: require("../assets/cities/dubai.jpg"),
  },
  {
    key: 9,
    continent: "Europe",
    country: "United Kindom",
    name: "London",
    image: require("../assets/cities/london.jpg"),
    isHero: true,
    description: "test",
  },
  {
    key: 10,
    continent: "Africa & Asia",
    country: "Egypt",
    name: "Sharm El Sheikh",
    isHero: false,
    description: "test",
    image: require("../assets/cities/dubai.jpg"),
  },
  {
    key: 11,
    continent: "Africa & Asia",
    country: "Egypt",
    name: "Hurghada",
    isHero: false,
    description: "test",
    image: require("../assets/cities/dubai.jpg"),
  },
  {
    key: 12,
    continent: "Africa & Asia",
    country: "Egypt",
    name: "El Cairo",
    isHero: false,
    description: "test",
    image: require("../assets/cities/dubai.jpg"),
  },
  {
    key: 13,
    continent: "U.A.E",
    country: "U.A.E",
    name: "Dubai",
    image: require("../assets/cities/dubai.jpg"),
    isHero: true,
    description: "test",
  },
];

const activities = [
  {
    name: "Intimate group tour to Positano & Raello & Sorrento with Giuseppe",
    image: require("../assets/activities/amalfi/1.jpg"),
    description: "",
    location: 1,
  },
  {
    name: "Wine and cheese tasting on a sunny day with a sommelier Franco",
    image: require("../assets/activities/amalfi/2.jpg"),
    description: "",
    location: 1,
  },
];

const hotels = [
  {
    id: 1,
    location: 1,
    name: "Hotel Santa Caterina",
    type: "Hotel",
    rating: 5,
    minPrice: 250,
    images: [
      require("../assets/hotels/hotel_1/common/1.jpg"),
      require("../assets/hotels/hotel_1/common/2.jpg"),
      require("../assets/hotels/hotel_1/common/3.jpg"),
      require("../assets/hotels/hotel_1/common/4.jpg"),
      require("../assets/hotels/hotel_1/common/5.jpg"),
    ],
    geoLocation: [40.629602535607994, 14.592922850526529],
    address: "S.S. AMALFITANA, 9 84011 AMALFI (SA)",
    phone: "+39 089 871012",
    policies: {
      checkIn: "15:00",
      checkOut: "12:00",
      securityDeposit: 100,
    },
    rooms: [
      {
        key: 1,
        type: "Standard Room Partial Sea View",
        amenities: [
          "AIR CONDITIONING",
          "MINIBAR",
          "COFFEE MAKER",
          "SAFE BOX",
          "FLAT SCREEN TV",
          "WI-FI",
        ],
        images: [
          require("../assets/hotels/hotel_1/rooms/room_1/1.jpg"),
          require("../assets/hotels/hotel_1/rooms/room_1/2.jpg"),
        ],
        price: 115,
      },
      {
        key: 2,
        type: "Standard Room City View",
        amenities: [
          "AIR CONDITIONING",
          "MINIBAR",
          "COFFEE MAKER",
          "SAFE BOX",
          "FLAT SCREEN TV",
          "WI-FI",
        ],
        images: [
          require("../assets/hotels/hotel_1/rooms/room_2/1.jpg"),
          require("../assets/hotels/hotel_1/rooms/room_2/2.jpg"),
          require("../assets/hotels/hotel_1/rooms/room_2/3.jpg"),
        ],
        price: 89,
      },
    ],
    moto: "THE TIMELESS BEAUTY OF THE AMALFI COAST",
    description:
      "\tA late 19th century liberty style villa immersed in the beautiful scenery of the Amalfi Coast, an elegant seaside residence surrounded by the perennial blue of the Mediterranean sea and sky, by luscious bougainvillea and by lovingly cultivated olive groves and fruit orchards. This is Hotel Santa Caterina of Amalfi, a special place to experience the finest of Italian hospitality and lasting sensations of wellbeing.\n\tThe hotel is perched above the coast, just steps from the center of the historic marine republic of Amalfi. The location is perfect for day trips and tours of the Amalfi Coast.\n\tHotel Santa Caterina has two restaurants both with panoramic sea view : the Michelin-starred Glicine, located in the main building and Al Mare, overlooking the swimming pool and the sea. The careful selection of primary ingredients and the natural talent of the hotel’s chefs result in the most delicious of dishes. The classic recipes of the Amalfi Coast and their brilliant modern interpretation have earned Hotel Santa Caterina its outstanding reputation on the international gastronomic scene.",
    reviews: [
      {
        text: "Absolutely lovely",
        rating: {
          cleanless: 5,
          location: 5,
          staff: 5,
          comfort: 5,
          facilities: 5,
          valueForMoney: 5,
        },
      },
      {
        text: `Our family did enjoy food and service!`,
        rating: {
          cleanless: 5,
          location: 5,
          staff: 5,
          comfort: 5,
          facilities: 5,
          valueForMoney: 5,
        },
      },
    ],
    amenities: [
      "A la carte restaurant",
      "Heated pool",
      "Elevator in building",
      "Play courts",
      "Fitness facility",
      "Handicap acessible",
      "Reception 24H",
      "Air conditioning",
    ],
    popularity: {
      isTrending: true,
      roomKeys: [1],
    },
  },

  {
    id: 2,
    location: 2,
    name: "Cà Sagredo",
    type: "Hotel",
    rating: 5,
    minPrice: 150,
    imagesSrc: "./assets/hotels/hotel_2/",
    address: "CAMPO SANTA SOFIA 4198/99",
    phone: "+39 089 871012",
    policies: {
      checkIn: "15:00",
      checkOut: "12:00",
      securityDeposit: 100,
    },
    rooms: [
      {
        key: 1,
        type: "Junior suite",
        amenities: [
          "AIR CONDITIONING",
          "MINIBAR",
          "COFFEE MAKER",
          "SAFE BOX",
          "FLAT SCREEN TV",
          "WI-FI",
        ],
        images: [require("../assets/hotels/hotel_2/rooms/room_1/1.jpg")],
      },
      {
        key: 2,
        type: "Classic Double",
        amenities: [
          "AIR CONDITIONING",
          "MINIBAR",
          "COFFEE MAKER",
          "SAFE BOX",
          "FLAT SCREEN TV",
          "WI-FI",
        ],
        images: [require("../assets/hotels/hotel_2/rooms/room_2/1.jpg")],
      },
    ],
    moto: "",
    description: `A Private Palazzo, a Noble Residence, a Museum, a Luxury Hotel and much more… this all is Ca’ Sagredo.
  
      The sheer beauty of Ca’ Sagredo Hotel is weep-with-joy wondrous. As you pull up alongside the Grand Canal, you’ll need to pinch yourself and again when you step inside.
      
      The 15th century Palace has been declared a National Monument and still preserves the untouched beauty of an ancient noble Residence. It oozes romance while the opulently frescoed ballroom and lounge echoes with epic events of the past. Just gliding up the imposing marble staircase; whilst resisting a tap on a cherub’s peachy cheek, feels positively regal. Ca’ Sagredo’s views of the canal life and the historical Rialto Market opposite are storybook scenes of old. The hotel’s 42 magnificently appointed rooms and suites are a seriously suggestive sight to behold with classic Venetian styling.
      
      Art lovers be warned: there are so many treasures here, it’s easy to forget the outside world. But there’s always the hotel’s panoramic waterside L’Alcova restaurant with terrace over the Grand Canal to remind you, serving dishes that are a celebration of Italy on a plate.
      
      This magical location has inspired our Chef’s approach: the absolute protagonist is a cuisine made of fresh ingredients and characterized by a strong “Back to Nature” concept. Local delicacies are enhanced in his menus through the daily attentive personal selection from the Rialto Market: a “Natural Flavours Philosophy” providing a fresh twist on the authentic Venetian cuisine.
      His vision can be savored on his refined plates, characterized by rich tastes and great personality.`,
    reviews: [
      {
        text: "Absolutely lovely",
        rating: {
          cleanless: 5,
          location: 5,
          staff: 5,
          comfort: 5,
          facilities: 5,
          valueForMoney: 5,
        },
      },
    ],
    amenities: [
      "A LA CARTE RESTAURANT",
      "ELEVATOR IN BUILDING",
      "HEATED POOL",
      "PLAY COURTS",
      "RECEPTION H24",
      "AIR CONDITIONING",
      "FITNESS FACILITY",
      "HANDICAP ACCESSIBLE",
    ],
    popularity: {
      isTrending: true,
      roomKeys: [2],
    },
  },
];

export default { countries, cities, hotels, activities, destinations };
