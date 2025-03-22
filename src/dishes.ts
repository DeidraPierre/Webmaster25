type MenuType = "Lunch" | "Dinner";
type ElementType = "Fire" | "Water" | "Air" | "Earth";
type DishType = "Entree" | "Appetizer" | "Dessert" | "Side";

type Dish = {
  title: string,
  description: string,
  price: number,
  menu: MenuType,
  element: ElementType,
  dishType: DishType,
  index: number
}

type CartItem = {
  dish: Dish,
  count: number
}

const dishes: Array<Dish> = [
  {
    title: "Spicy Black Bean Burger",
    description: "Black bean burger topped with a spicy aioli and served on a vegan bun.",
    price: 16.99,
    menu: "Lunch",
    element: "Fire",
    dishType: "Entree",
    index: 0
  },
  {
    title: "Peanut Noodles",
    description: "Rice noodles topped blazing peanut butter sauce.",
    price: 12.99,
    menu: "Lunch",
    element: "Fire",
    dishType: "Entree",
    index: 1
  },
  {
    title: "Vegan Verde Aguachile",
    description: "Oster mushrooms, hearts of palm, cucumber, peppers, and lemon juice.",
    price: 7.99,
    menu: "Lunch",
    element: "Fire",
    dishType: "Appetizer",
    index: 2
  },
  {
    title: "Chips and Salsa",
    description: "Spicy black bean and corn salsa paired with fresh in-house tortilla chips.",
    price: 5.99,
    menu: "Lunch",
    element: "Fire",
    dishType: "Appetizer",
    index: 3
  },
  {
    title: "Spicy Mexican Chocolate Trifle",
    description: "Cayenne pepper crushed cookie crumbles layered with non-dairy whip cream and chocolate drizzle.",
    price: 8.99,
    menu: "Lunch",
    element: "Fire",
    dishType: "Dessert",
    index: 4
  },
  {
    title: "Paprika Roasted Potatoes",
    description: "Potatoes roasted in avocado oil, sprinkled with paprika.",
    price: 3.99,
    menu: "Lunch",
    element: "Fire",
    dishType: "Side",
    index: 5
  },
  {
    title: "“Tuna” Salad Wrap",
    description: "Salad made with chickpeas, celery, onions and vegan mayo, wrapped with lettuce.",
    price: 14.99,
    menu: "Lunch",
    element: "Water",
    dishType: "Entree",
    index: 6
  },
  {
    title: "Mediterranean Spring Rolls",
    description: "Lightly fried bean sprout and avocado spring rolls with our signature sauce.",
    price: 15.99,
    menu: "Lunch",
    element: "Water",
    dishType: "Entree",
    index: 7
  },
  {
    title: "Artichoke and Kale Dip",
    description: "Creamy, savory dip served with fresh in-house tortilla chips on the side.",
    price: 5.99,
    menu: "Lunch",
    element: "Water",
    dishType: "Appetizer",
    index: 8
  },
  {
    title: "Aguadito",
    description: "Hearty stew filled with potatoes, mushrooms, corn and poblano peppers.",
    price: 9.99,
    menu: "Lunch",
    element: "Water",
    dishType: "Appetizer",
    index: 9
  },
  {
    title: "Strawberry Kanten Japanese Jelly",
    description: "Fresh strawberries nestles into a fruit-sweetened Kanten jelly sprinkled with fresh mint.",
    price: 10.99,
    menu: "Lunch",
    element: "Water",
    dishType: "Dessert",
    index: 10
  },
  {
    title: "Grilled Asparagus",
    description: "Grilled Asparagus sprinkles with salt and pepper and a drizzle of olive oil.",
    price: 3.99,
    menu: "Lunch",
    element: "Water",
    dishType: "Side",
    index: 11
  },
  {
    title: "Falafel",
    description: "Flavorful and tender chickpea, garlic and onion spheres. Served with a creamy tzatziki sauce.",
    price: 17.99,
    menu: "Lunch",
    element: "Air",
    dishType: "Entree",
    index: 12
  },
  {
    title: "Quiche",
    description: "Comforting tofu and vegan cheese filled tart.",
    price: 12.99,
    menu: "Lunch",
    element: "Air",
    dishType: "Entree",
    index: 13
  },
  {
    title: "Mushroom Mousse",
    description: "Whipped mushroom mousse served with vegan sourdough crackers.",
    price: 4.99,
    menu: "Lunch",
    element: "Air",
    dishType: "Appetizer",
    index: 14
  },
  {
    title: "Stuffed Dates",
    description: "Dates stuffed with almond butter and pistachios.",
    price: 3.99,
    menu: "Lunch",
    element: "Air",
    dishType: "Appetizer",
    index: 15
  },
  {
    title: "Orange and Lime Sorbet",
    description: "Sorbet blended with sweet orange and sour lime.",
    price: 8.99,
    menu: "Lunch",
    element: "Air",
    dishType: "Dessert",
    index: 16
  },
  {
    title: "Polenta",
    description: "Vegan polenta served with sautéed mushrooms and beans.",
    price: 8.99,
    menu: "Lunch",
    element: "Air",
    dishType: "Side",
    index: 17
  },
  {
    title: "Avocado Toast",
    description: "Avocado spread on multigrain bread.",
    price: 13.99,
    menu: "Lunch",
    element: "Earth",
    dishType: "Entree",
    index: 18
  },
  {
    title: "Greens and Beans Soup",
    description: "Broccoli, peppers, and leeks roasted with olive oil and herbs. Served with a side of buckwheat bread.",
    price: 16.99,
    menu: "Lunch",
    element: "Earth",
    dishType: "Entree",
    index: 19
  },
  {
    title: "Stuffed Mushrooms",
    description: "Mushrooms stuffed with grilled peppers, onions, tomatoes and herbs.",
    price: 10.99,
    menu: "Lunch",
    element: "Earth",
    dishType: "Appetizer",
    index: 20
  },
  {
    title: "Potato Pancakes",
    description: "Crispy potato disks served with a creamy ranch dressing.",
    price: 6.99,
    menu: "Lunch",
    element: "Earth",
    dishType: "Appetizer",
    index: 21
  },
  {
    title: "Chia Seed Pudding",
    description: "Chia seeds soaked in coconut milk, and topped with fresh blueberries.",
    price: 12.99,
    menu: "Lunch",
    element: "Earth",
    dishType: "Dessert",
    index: 22
  },
  {
    title: "Mashed Potatoes",
    description: "Creamy, buttery potatoes.",
    price: 3.99,
    menu: "Lunch",
    element: "Earth",
    dishType: "Side",
    index: 23
  },
  {
    title: "Stewed Curry Portobello",
    description: "Jamaica spiced portobellos marinated in coconut milk and spices paired with wild garlic quinoa.",
    price: 17.99,
    menu: "Dinner",
    element: "Fire",
    dishType: "Entree",
    index: 24
  },
  {
    title: "Spicy Tofu Stir-Fry",
    description: "Crispy tofu bites served seared garden vegetables (bell peppers, onions, zucchini, and carrots) tossed in a fiery mango jalapeno sauce.",
    price: 12.99,
    menu: "Dinner",
    element: "Fire",
    dishType: "Entree",
    index: 25
  },
  {
    title: "Buffalo Cauliflower Wings",
    description: "Roasted cauliflower tossed in a Calabrian chili buffalo wing sauce",
    price: 7.99,
    menu: "Dinner",
    element: "Fire",
    dishType: "Appetizer",
    index: 26
  },
  {
    title: "Chips and Salsa",
    description: "Spicy black bean and corn salsa paired with fresh in-house tortilla chips.",
    price: 5.99,
    menu: "Dinner",
    element: "Fire",
    dishType: "Appetizer",
    index: 27
  },
  {
    title: "Spicy Mexican Chocolate Trifle",
    description: "Cayenne pepper crushed cookie crumbles layered with non-dairy whip cream and chocolate drizzle.",
    price: 8.99,
    menu: "Dinner",
    element: "Fire",
    dishType: "Dessert",
    index: 28
  },
  {
    title: "Paprika Roasted Potatoes",
    description: "Potatoes roasted in avocado oil, sprinkled with paprika.",
    price: 3.99,
    menu: "Dinner",
    element: "Fire",
    dishType: "Side",
    index: 29
  },
  {
    title: "Kombu Seaweed Salad",
    description: "Kombu seaweed tossed with roasted sesame seeds, thinly cut carrots and rice vinegar dressing.",
    price: 14.99,
    menu: "Dinner",
    element: "Water",
    dishType: "Entree",
    index: 30
  },
  {
    title: "Loaded Vegan Wrap",
    description: "Lettuce wrap with cucumbers, tomatoes, avocado, peppers, onions and a roasted hummus dip.",
    price: 15.99,
    menu: "Dinner",
    element: "Water",
    dishType: "Entree",
    index: 31
  },
  {
    title: "Artichoke and Kale Dip",
    description: "Creamy, savory dip served with fresh in-house tortilla chips on the side.",
    price: 5.99,
    menu: "Dinner",
    element: "Water",
    dishType: "Appetizer",
    index: 32
  },
  {
    title: "Cucumber Slices with Hummus",
    description: "Creamy, sweet hummus paired with thick cut cucumber strips.",
    price: 6.99,
    menu: "Dinner",
    element: "Water",
    dishType: "Appetizer",
    index: 33
  },
  {
    title: "Grilled Watermelon",
    description: "Watermelon grilled with balsamic vinegar, served over freshly churned honey Greek yogurt.",
    price: 6.99,
    menu: "Dinner",
    element: "Water",
    dishType: "Dessert",
    index: 34
  },
  {
    title: "Grilled Asparagus",
    description: "Grilled Asparagus sprinkles with salt and pepper and a drizzle of olive oil.",
    price: 3.99,
    menu: "Dinner",
    element: "Water",
    dishType: "Side",
    index: 35
  },
  {
    title: "Pea Risotto",
    description: "Vegetable broth and white wine vinegar risotto with tender peas and carrots.",
    price: 17.99,
    menu: "Dinner",
    element: "Air",
    dishType: "Entree",
    index: 36
  },
  {
    title: "Vegan Pancakes",
    description: "Golden–brown savory pancakes sprinkled with green onions and a creamy cashew sauce on the side.",
    price: 12.99,
    menu: "Dinner",
    element: "Air",
    dishType: "Entree",
    index: 37
  },
  {
    title: "Tofu Mousse",
    description: "Whipped tofu mousse topped with fresh berries.",
    price: 4.99,
    menu: "Dinner",
    element: "Air",
    dishType: "Appetizer",
    index: 38
  },
  {
    title: "Stuffed Dates",
    description: "Dates stuffed with almond butter and pistachios.",
    price: 3.99,
    menu: "Dinner",
    element: "Air",
    dishType: "Appetizer",
    index: 39
  },
  {
    title: "Orange and Lime Sorbet",
    description: "Sorbet blended with sweet orange and sour lime.",
    price: 8.99,
    menu: "Dinner",
    element: "Air",
    dishType: "Dessert",
    index: 40
  },
  {
    title: "Polenta",
    description: "Vegan polenta served with sautéed mushrooms and beans.",
    price: 8.99,
    menu: "Dinner",
    element: "Air",
    dishType: "Side",
    index: 41
  },
  {
    title: "Black Bean and Sweet Potato Chili",
    description: "Tomato broth vegan chili with tender sweet potatoes and black beans.",
    price: 17.99,
    menu: "Dinner",
    element: "Earth",
    dishType: "Entree",
    index: 42
  },
  {
    title: "Root Vegetable Stew",
    description: "Tender carrots, potatoes, onions and beets in a stew.",
    price: 14.99,
    menu: "Dinner",
    element: "Earth",
    dishType: "Entree",
    index: 43
  },
  {
    title: "Stuffed Mushrooms",
    description: "Mushrooms stuffed with grilled peppers, onions, tomatoes and herbs.",
    price: 10.99,
    menu: "Dinner",
    element: "Earth",
    dishType: "Appetizer",
    index: 44
  },
  {
    title: "Balsamic Vinegar Salad",
    description: "Salad topped with walnuts, almonds, strawberries and balsamic vinegar.",
    price: 8.99,
    menu: "Dinner",
    element: "Earth",
    dishType: "Appetizer",
    index: 45
  },
  {
    title: "Chia Seed Pudding",
    description: "Chia seeds soaked in coconut milk, and topped with fresh blueberries.",
    price: 12.99,
    menu: "Dinner",
    element: "Earth",
    dishType: "Dessert",
    index: 46
  },
  {
    title: "Mashed Potatoes",
    description: "Creamy, buttery potatoes.",
    price: 3.99,
    menu: "Dinner",
    element: "Earth",
    dishType: "Side",
    index: 47
  },
]

export { dishes };
export type { MenuType, ElementType, DishType, Dish, CartItem };
