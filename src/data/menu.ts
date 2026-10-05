export interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

// Demo content — prices and items are editable placeholders
export const menuCategories: MenuCategory[] = [
  {
    id: 'espresso',
    label: 'Espresso',
    items: [
      { name: "Sam's Espresso", price: '₹220', description: 'A double shot of our signature house blend, rich and balanced.', image: 'https://images.pexels.com/photos/28935722/pexels-photo-28935722.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'Double Espresso', price: '₹260', description: 'An intense, concentrated triple shot for the bold at heart.', image: 'https://images.pexels.com/photos/6771897/pexels-photo-6771897.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'Flat White', price: '₹290', description: 'Velvety microfoam over a double ristretto, smooth and silky.', image: 'https://images.pexels.com/photos/15149236/pexels-photo-15149236.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'Cortado', price: '₹270', description: 'Equal parts espresso and warm milk, harmonious and gentle.', image: 'https://images.pexels.com/photos/36455821/pexels-photo-36455821.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
    ],
  },
  {
    id: 'brewed',
    label: 'Brewed',
    items: [
      { name: 'Pour Over', price: '₹310', description: 'Single-origin beans, hand-poured with precision and patience.', image: 'https://images.pexels.com/photos/19143158/pexels-photo-19143158.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'French Press', price: '₹280', description: 'Full immersion brewing for a deep, robust character.', image: 'https://images.pexels.com/photos/9623566/pexels-photo-9623566.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'Chemex', price: '₹340', description: 'Crystal clean clarity through thick paper filtration.', image: 'https://images.pexels.com/photos/19723762/pexels-photo-19723762.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'Cold Brew Tonic', price: '₹320', description: 'Slow steeped for 18 hours, served over hand-cut ice.', image: 'https://images.pexels.com/photos/38426418/pexels-photo-38426418.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
    ],
  },
  {
    id: 'signature',
    label: 'Signature',
    items: [
      { name: 'Golden Latte', price: '₹340', description: 'Saffron-infused milk, raw honey, and a gentle shot of espresso.', image: 'https://images.pexels.com/photos/13447735/pexels-photo-13447735.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'Velvet Mocha', price: '₹360', description: 'Single-origin cacao, steamed milk, and a whisper of sea salt.', image: 'https://images.pexels.com/photos/15149236/pexels-photo-15149236.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'Salted Caramel Latte', price: '₹350', description: 'House caramel, Maldon salt, and a smooth double shot.', image: 'https://images.pexels.com/photos/39062405/pexels-photo-39062405.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'Midnight Mocha', price: '₹370', description: 'Dark chocolate, espresso, and a touch of vanilla bean.', image: 'https://images.pexels.com/photos/13240964/pexels-photo-13240964.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
    ],
  },
  {
    id: 'cold',
    label: 'Cold',
    items: [
      { name: 'House Cold Brew', price: '₹300', description: '18-hour steep, naturally sweet, refreshingly smooth.', image: 'https://images.pexels.com/photos/38426418/pexels-photo-38426418.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'Iced Vanilla Latte', price: '₹330', description: 'Madagascar vanilla, cold milk, and espresso over ice.', image: 'https://images.pexels.com/photos/38519299/pexels-photo-38519299.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'Cold Foam Cappuccino', price: '₹350', description: 'Cascara cold foam crowning a chilled cappuccino.', image: 'https://images.pexels.com/photos/13735958/pexels-photo-13735958.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'Espresso Tonic', price: '₹340', description: 'Tonic water, citrus, and a float of espresso.', image: 'https://images.pexels.com/photos/37043176/pexels-photo-37043176.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
    ],
  },
  {
    id: 'pastries',
    label: 'Pastries',
    items: [
      { name: 'Almond Croissant', price: '₹240', description: 'Buttery, laminated, and filled with frangipane.', image: 'https://images.pexels.com/photos/35614378/pexels-photo-35614378.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'Pain au Chocolat', price: '₹220', description: 'Classic French pastry with dark chocolate batons.', image: 'https://images.pexels.com/photos/9623566/pexels-photo-9623566.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'Cardamom Bun', price: '₹200', description: 'Swedish-style knot with cardamom and pearl sugar.', image: 'https://images.pexels.com/photos/16231039/pexels-photo-16231039.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'Olive Oil Cake', price: '₹280', description: 'Moist, citrus-glazed, and subtly savory.', image: 'https://images.pexels.com/photos/36455821/pexels-photo-36455821.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
    ],
  },
  {
    id: 'extras',
    label: 'Extras',
    items: [
      { name: 'Oat Milk', price: '₹40', description: 'Barista-grade, creamy and naturally sweet.', image: 'https://images.pexels.com/photos/15149236/pexels-photo-15149236.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'Extra Shot', price: '₹60', description: 'One more shot of our signature espresso blend.', image: 'https://images.pexels.com/photos/28935722/pexels-photo-28935722.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'Vanilla Syrup', price: '₹30', description: 'House-made with real vanilla bean.', image: 'https://images.pexels.com/photos/13447735/pexels-photo-13447735.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
      { name: 'Cascara Drizzle', price: '₹50', description: 'Reduced coffee cherry syrup, bright and fruity.', image: 'https://images.pexels.com/photos/19162213/pexels-photo-19162213.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000' },
    ],
  },
];
