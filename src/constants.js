const categories = [
  "Plumbing",
  "Tools",
  "Donations",
  "Holiday",
  "Hardware",
  "Flooring",
  "Lumber",
  "Doors",
  "Home Decor",
  "Glass Case",
  "Tile",
  "Cabinets",
  "Windows",
  "Media",
  "HVAC",
  "Lighting",
  "Furniture",
  "Sports",
  "Luggage",
  "Electronics",
  "Electrical",
  "Rugs/Carpeting"
];

const itemsAccepted = [
  { 
    title: "Appliances", 
    detail: "We are no longer able to accept dishwashers of any kind, or refrigerators over 10 years old."
  },
  { 
    title: "Area Rugs", 
    detail: "Must be under 11 feet in length, new or excellent condition"
  },
  { 
    title: "Cabinets", 
    detail: "Must be complete units, sucturally intact; must have doors, shelving, display racks, etc.; single cabinets (pieces) will be taken on a case by case basis"
  },
  { 
    title: "Flooring material", 
    detail: "Vinyl no less than 25 sq. ft., new hardwood complete boxes, ceramic tile no less than 25 square feet. We do not accept scraps of any kind of flooring materials, exception being reclaimed hardwood flooring, must be at least 90 square feet."
  },
  { 
    title: "Furniture Sofas, love seats, coffee tables, bedroom furniture, dining room", 
    detail: "Must be in re-salable condition (no rips, stains or tears.)"
  },
  { 
    title: "Household Items", 
    detail: "Must be clean and unbroken"
  },
  { 
    title: "Lawnmowers & Lawn Equipment", 
    detail: "Must be working with all parts"
  },
  { 
    title: "Lighting Kitchen/dining room chandeliers and sconces, compact florescent bulbs, lamps (standing/table top)", 
    detail: "Must be working with all parts"
  },
  { 
    title: "Lumber", 
    detail: "Must be between 3 – 8 feet in length, we cannot accept lumber with nails"
  },
  { 
    title: "Mirrors", 
    detail: "Mirrors with frames only. We do not accept unframed mirrors or glass due to safety risks"
  },
  { 
    title: "Plumbing", 
    detail: "Must be complete, very clean, and in good condition; heavy duty faucet fixtures, faucets, parts, pedestal sinks, toilets (1.6 gallon/low flush only)"
  },
  { 
    title: "Roofing", 
    detail: "New only"
  },
  { 
    title: "Small Electronics", 
    detail: "Must be working with all parts"
  },
  { 
    title: "Tools & Hardware", 
    detail: "Must be working with all parts"
  },
  { 
    title: "Windows", 
    detail: "We cannot accept sashes"
  },
];

const testItems = {
  items: {
    one: {
      title: "Vintage bureau",
      category: "Furniture",
      location: "Rockville",
      price: 200,
      posted: "2018-10-17T12:30:00",
      image:
        "https://firebasestorage.googleapis.com/v0/b/metro-md-restore.appspot.com/o/vintage_bureau.JPG?alt=media&token=74553708-a297-4926-b3f8-69b6b0046e4f",
      description:
        "This lovely piece of furniture won’t last. Retail price is over $600!"
    },
    two: {
      title: "Super nice glass coffee table",
      category: "Furniture",
      location: "Silver Spring",
      price: 120,
      posted: "2018-11-01T10:00:00",
      image:
        "https://firebasestorage.googleapis.com/v0/b/metro-md-restore.appspot.com/o/glass-top-coffee-table-redo-living-room-with-super-beige-l-shaped-sofa-with-trendy-and-and-wooden-frame-on-brown-shag-rug.jpg?alt=media&token=3cefb3db-afb4-4063-bba3-e5921b0d1eca",
      description: "Brand new! Will look great in your living room."
    },
    three: {
      title: "Brand new bedside lamp",
      category: "Lighting",
      location: "Rockville",
      price: 30,
      posted: "2018-11-8T12:00:00",
      image:
        "https://firebasestorage.googleapis.com/v0/b/metro-md-restore.appspot.com/o/elephant-table-lamp.jpg?alt=media&token=e2d9b930-96c8-4c85-b1cd-1ef5d1990bae",
      description: "Cute elephant lamp perfect for a kids room"
    }
  }
};

export { categories, itemsAccepted, testItems };
