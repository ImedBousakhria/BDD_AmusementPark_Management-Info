export const zones = [
  {
    title: "Zone A",
    teams: [
      {
        name: "Team 1",
        staff: [
          { name: "Alice Johnson", email: "alice@example.com" },
          { name: "Bob Smith", email: "bob@example.com" },
        ],
      },
      {
        name: "Team 2",
        staff: [
          { name: "Charlie Brown", email: "charlie@example.com" },
          { name: "Diana Miller", email: "diana@example.com" },
        ],
      },
    ],
    games: [
      {
        title: "Wonder Wheel",
        ageRating: "E for Everyone",
        status: "Open",
        rating: 4, // Rating out of 5
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit eu augue suscipit convallis.",
      },
      {
        title: "Thrill Tower",
        ageRating: "T for Teen",
        status: "Closed",
        rating: 3.5, // Rating out of 5
        description:
          "Nulla facilisi. Sed at quam non elit interdum efficitur eu ut ligula.",
      },
    ],
    stalls: [
      {
        name: "Stall 1",
        category: "Food",
      },
      {
        name: "Stall 2",
        category: "Gift",
      },
    ],
  },
  {
    title: "Zone B",
    teams: [
      {
        name: "Team 3",
        staff: [
          { name: "Eva Davis", email: "eva@example.com" },
          { name: "Frank Thomas", email: "frank@example.com" },
        ],
      },
      {
        name: "Team 4",
        staff: [
          { name: "Grace Wilson", email: "grace@example.com" },
          { name: "Henry Clark", email: "henry@example.com" },
        ],
      },
    ],
    games: [
      {
        title: "Dragon Coaster",
        ageRating: "Mature",
        status: "Under Maintenance",
        rating: 2.5, // Rating out of 5
        description:
          "Vestibulum tincidunt justo ut dui rhoncus, in luctus felis interdum.",
      },
      {
        title: "Enchanted Carousel",
        ageRating: "E10+",
        status: "Open",
        rating: 4.5, // Rating out of 5
        description:
          "Cras auctor, felis nec volutpat pellentesque, dui nisl gravida urna, a varius lacus lacus vel dolor.",
      },
    ],
    stalls: [
      {
        name: "Stall 3",
        category: "Food",
      },
      {
        name: "Stall 4",
        category: "Gift",
      },
    ],
  },
  {
    title: "Zone C",
    teams: [
      {
        name: "Team 5",
        staff: [
          { name: "Isaac White", email: "isaac@example.com" },
          { name: "Jessica Turner", email: "jessica@example.com" },
        ],
      },
      {
        name: "Team 6",
        staff: [
          { name: "Kevin Harris", email: "kevin@example.com" },
          { name: "Laura Evans", email: "laura@example.com" },
        ],
      },
    ],
    games: [
      {
        title: "Galactic Adventure",
        ageRating: "E10+",
        status: "Open",
        rating: 4.8, // Rating out of 5
        description:
          "Donec vel neque eget tortor dapibus suscipit. Sed ac libero in ante sodales posuere vel eu libero.",
      },
      {
        title: "Haunted Mansion",
        ageRating: "Mature",
        status: "Closed",
        rating: 3, // Rating out of 5
        description:
          "Maecenas vel neque non elit malesuada congue. Curabitur hendrerit purus vel massa accumsan fringilla.",
      },
    ],
    stalls: [
      {
        name: "Stall 5",
        category: "Food",
      },
      {
        name: "Stall 6",
        category: "Gift",
      },
    ],
  },
];

// Stall categories list
export const stall_cat = ["Food stalls", "Gift Stalls"];

export const comments = {
  "Wonder Wheel": [
    { user: "User1", text: "Great ride for all ages!" },
    { user: "User2", text: "The view from the top is amazing." },
    // Add more comments for Wonder Wheel if needed
  ],
  "Thrill Tower": [
    { user: "User3", text: "Thrilling experience! Loved it." },
    { user: "User4", text: "Closed? Disappointed!" },
    // Add more comments for Thrill Tower if needed
  ],
  "Dragon Coaster": [
    { user: "User5", text: "Exciting twists and turns!" },
    {
      user: "User6",
      text: "Under Maintenance? Looking forward to it reopening.",
    },
    // Add more comments for Dragon Coaster if needed
  ],
  "Enchanted Carousel": [
    { user: "User7", text: "Magical ride, especially for kids." },
    { user: "User8", text: "One of my favorites in Zone B." },
    // Add more comments for Enchanted Carousel if needed
  ],
  "Galactic Adventure": [
    { user: "User9", text: "Awesome space-themed attraction!" },
    { user: "User10", text: "Visited with friends, we had a blast." },
    // Add more comments for Galactic Adventure if needed
  ],
  "Haunted Mansion": [
    { user: "User11", text: "Spooky and well-themed!" },
    { user: "User12", text: "Closed? Hope it reopens soon." },
    // Add more comments for Haunted Mansion if needed
  ],
  // Add more attractions and comments as needed
};

// profiles
// db.js
export const users = [
  { id: "userId2", name: "Meriem Lina Hadi", email: "meriem@example.com" },
  { id: "userId1", name: "Imed Bousakhria", email: "imed@example.com" },
  { id: "userId3", name: "Belaid Sara", email: "belaid@example.com" },
  { id: "userId4", name: "John Doe", email: "john@example.com" },
  { id: "userId5", name: "Jane Doe", email: "jane@example.com" },
  { id: "userId6", name: "Alice Smith", email: "alice@example.com" },
  { id: "userId7", name: "Bob Johnson", email: "bob@example.com" },
  // Add more users as needed
];
