/**
 * Imposter Game Data
 * Categories and Clues for Words and Images
 */

export const WORD_CATEGORIES = [
  {
    name: "Foods",
    clues: [
      { normal: "Pizza", imposter: "Calzone" },
      { normal: "Hamburger", imposter: "Cheeseburger" },
      { normal: "Sushi", imposter: "Sashimi" },
      { normal: "Taco", imposter: "Burrito" },
      { normal: "Pasta", imposter: "Gnocchi" },
      { normal: "Croissant", imposter: "Baguette" },
      { normal: "Steak", imposter: "Brisket" },
      { normal: "Ramen", imposter: "Pho" },
      { normal: "Hummus", imposter: "Baba Ganoush" },
      { normal: "Biryani", imposter: "Pulao" },
      { normal: "Idli", imposter: "Dosa" },
      { normal: "Samosa", imposter: "Kachori" },
      { normal: "Ice Cream", imposter: "Gelato" },
      { normal: "Chocolate", imposter: "Fudge" }
    ]
  },
  {
    name: "Animals",
    clues: [
      { normal: "Lion", imposter: "Tiger" },
      { normal: "Elephant", imposter: "Mammoth" },
      { normal: "Penguin", imposter: "Ostrich" },
      { normal: "Dolphin", imposter: "Porpoise" },
      { normal: "Zebra", imposter: "Okapi" },
      { normal: "Wolf", imposter: "Coyote" },
      { normal: "Eagle", imposter: "Falcon" },
      { normal: "Cheetah", imposter: "Leopard" },
      { normal: "Platypus", imposter: "Echidna" },
      { normal: "Giraffe", imposter: "Okapi" },
      { normal: "Kangaroo", imposter: "Wallaby" },
      { normal: "Panda", imposter: "Koala" },
      { normal: "Shark", imposter: "Whale Shark" }
    ]
  },
  {
    name: "Science & Nature",
    clues: [
      { normal: "Photosynthesis", imposter: "Respiration" },
      { normal: "Neuron", imposter: "Synapse" },
      { normal: "Tsunami", imposter: "Tidal Wave" },
      { normal: "Solar Eclipse", imposter: "Lunar Eclipse" },
      { normal: "Meteor", imposter: "Comet" },
      { normal: "Proton", imposter: "Neutron" },
      { normal: "DNA", imposter: "RNA" },
      { normal: "Glacier", imposter: "Iceberg" },
      { normal: "Galaxy", imposter: "Nebula" },
      { normal: "Atom", imposter: "Molecule" },
      { normal: "Volcano", imposter: "Geyser" },
      { normal: "Gravity", imposter: "Magnetism" }
    ]
  },
  {
    name: "Myth & History",
    clues: [
      { normal: "Zeus", imposter: "Jupiter" },
      { normal: "Viking", imposter: "Gladiator" },
      { normal: "Sphinx", imposter: "Griffin" },
      { normal: "Atlantis", imposter: "El Dorado" },
      { normal: "Poseidon", imposter: "Neptune" },
      { normal: "Samurai", imposter: "Ninja" },
      { normal: "Knight", imposter: "Paladin" },
      { normal: "Hercules", imposter: "Achilles" },
      { normal: "Tutankhamun", imposter: "Ramesses" },
      { normal: "Mayan", imposter: "Aztec" }
    ]
  },
  {
    name: "Tech & Geekery",
    clues: [
      { normal: "Smartphone", imposter: "Tablet" },
      { normal: "Laptop", imposter: "ChromaBook" },
      { normal: "Earbuds", imposter: "Headphones" },
      { normal: "Camera", imposter: "Camcorder" },
      { normal: "Algorithm", imposter: "Heuristic" },
      { normal: "Blockchain", imposter: "Database" },
      { normal: "Virtual Reality", imposter: "Augmented Reality" },
      { normal: "Python", imposter: "JavaScript" },
      { normal: "Linux", imposter: "Windows" },
      { normal: "Fiber Optics", imposter: "Copper Wire" }
    ]
  },
  {
    name: "Literature & Art",
    clues: [
      { normal: "Sonnet", imposter: "Haiku" },
      { normal: "Canvas", imposter: "Easel" },
      { normal: "Metaphor", imposter: "Simile" },
      { normal: "Protagonist", imposter: "Antagonist" },
      { normal: "Abstract", imposter: "Impressionism" },
      { normal: "Sculpture", imposter: "Statue" },
      { normal: "Novel", imposter: "Novella" },
      { normal: "Oil Paint", imposter: "Watercolor" },
      { normal: "Tragedy", imposter: "Comedy" }
    ]
  },
  {
    name: "Everyday Objects",
    clues: [
      { normal: "Umbrella", imposter: "Raincoat" },
      { normal: "Backpack", imposter: "Briefcase" },
      { normal: "Sunglasses", imposter: "Goggles" },
      { normal: "Watch", imposter: "Clock" },
      { normal: "Key", imposter: "Lock" },
      { normal: "Candle", imposter: "Flashlight" },
      { normal: "Mirror", imposter: "Window" },
      { normal: "Comb", imposter: "Brush" }
    ]
  },
  {
    name: "Sports",
    clues: [
      { normal: "Football", imposter: "Rugby" },
      { normal: "Tennis", imposter: "Badminton" },
      { normal: "Basketball", imposter: "Netball" },
      { normal: "Cricket", imposter: "Baseball" },
      { normal: "Golf", imposter: "Hocky" },
      { normal: "Swimming", imposter: "Diving" },
      { normal: "Marathon", imposter: "Sprint" }
    ]
  },
  {
    name: "Movies",
    clues: [
      { normal: "Inception", imposter: "Interstellar" },
      { normal: "Star Wars", imposter: "Star Trek" },
      { normal: "The Lion King", imposter: "Bambi" },
      { normal: "Harry Potter", imposter: "Lord of the Rings" },
      { normal: "The Avengers", imposter: "Justice League" },
      { normal: "Titanic", imposter: "The Notebook" },
      { normal: "Spider-Man", imposter: "Batman" },
      { normal: "Frozen", imposter: "Moana" }
    ]
  },
  {
    name: "Cities",
    clues: [
      { normal: "Paris", imposter: "London" },
      { normal: "New York", imposter: "Chicago" },
      { normal: "Tokyo", imposter: "Seoul" },
      { normal: "Dubai", imposter: "Abu Dhabi" },
      { normal: "Mumbai", imposter: "Delhi" },
      { normal: "Chennai", imposter: "Bangalore" },
      { normal: "Sydney", imposter: "Melbourne" },
      { normal: "Rome", imposter: "Venice" }
    ]
  },
  {
    name: "Hobbies",
    clues: [
      { normal: "Painting", imposter: "Drawing" },
      { normal: "Cooking", imposter: "Baking" },
      { normal: "Hiking", imposter: "Camping" },
      { normal: "Photography", imposter: "Videography" },
      { normal: "Gardening", imposter: "Farming" },
      { normal: "Reading", imposter: "Writing" },
      { normal: "Gaming", imposter: "Streaming" },
      { normal: "Cycling", imposter: "Running" }
    ]
  }
];

export const IMAGE_CATEGORIES = [
  {
    name: "Fruits",
    clues: [
      { normal: "🍎", imposter: "🍐" },
      { normal: "🍌", imposter: " Pineapple" },
      { normal: "🍓", imposter: " Cherry" },
      { normal: "🍉", imposter: " Melon" },
      { normal: "🥭", imposter: " Peach" },
      { normal: "🍇", imposter: " Blueberries" },
      { normal: "🥝", imposter: " Avocado" }
    ]
  },
  {
    name: "Transport",
    clues: [
      { normal: "🚗", imposter: "🚕" },
      { normal: "🚲", imposter: "🛵" },
      { normal: "✈️", imposter: "🚁" },
      { normal: "🚢", imposter: "🚤" },
      { normal: "🚀", imposter: "🛸" },
      { normal: "🚜", imposter: "🚚" },
      { normal: "🚂", imposter: "🚈" }
    ]
  },
  {
    name: "Weather & Space",
    clues: [
      { normal: "☀️", imposter: "⛅" },
      { normal: "🌧️", imposter: "⛈️" },
      { normal: "❄️", imposter: "🌨️" },
      { normal: "🌙", imposter: "🪐" },
      { normal: "☄️", imposter: "🌠" },
      { normal: "🌑", imposter: "🌘" },
      { normal: "🌋", imposter: "🏔️" }
    ]
  },
  {
    name: "Activities",
    clues: [
      { normal: "🎮", imposter: "🕹️" },
      { normal: "🎨", imposter: "🖌️" },
      { normal: "🎭", imposter: "🎬" },
      { normal: "🎤", imposter: "🎧" },
      { normal: "📚", imposter: "📖" },
      { normal: "🧗", imposter: "🏃" },
      { normal: "🧘", imposter: "🏋️" }
    ]
  }
];
