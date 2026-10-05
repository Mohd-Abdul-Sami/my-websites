export interface SignatureProduct {
  number: string;
  name: string;
  description: string;
  tastingNotes: string[];
  price: string;
  image: string;
}

export const signatureProducts: SignatureProduct[] = [
  {
    number: '01',
    name: "The Sam's Signature",
    description: 'Our defining cup — a double shot pulled to perfection, layered with silk-textured microfoam and finished with a single thread of raw honey.',
    tastingNotes: ['Dark Chocolate', 'Toasted Hazelnut', 'Raw Honey'],
    price: '₹340',
    image: 'https://images.pexels.com/photos/13447735/pexels-photo-13447735.jpeg?auto=compress&cs=tinysrgb&w=800&h=1100',
  },
  {
    number: '02',
    name: 'Midnight Roast',
    description: 'A deep, dark single-origin roast for those who believe coffee should have gravity. Bold, smoky, and unapologetically intense.',
    tastingNotes: ['Dark Cocoa', 'Cedarwood', 'Blackstrap Molasses'],
    price: '₹320',
    image: 'https://images.pexels.com/photos/6771897/pexels-photo-6771897.jpeg?auto=compress&cs=tinysrgb&w=800&h=1100',
  },
  {
    number: '03',
    name: 'Velvet Espresso',
    description: 'A triple ristretto with cascara-steamed milk, creating a velvet texture so smooth it drinks like liquid silk.',
    tastingNotes: ['Cascara', 'Vanilla Bean', 'Brown Butter'],
    price: '₹360',
    image: 'https://images.pexels.com/photos/28935722/pexels-photo-28935722.jpeg?auto=compress&cs=tinysrgb&w=800&h=1100',
  },
  {
    number: '04',
    name: 'Golden Latte',
    description: 'Saffron-infused milk gently steamed with a double shot and a touch of raw honey. Our most photographed creation.',
    tastingNotes: ['Saffron', 'Raw Honey', 'Warm Spice'],
    price: '₹340',
    image: 'https://images.pexels.com/photos/15149236/pexels-photo-15149236.jpeg?auto=compress&cs=tinysrgb&w=800&h=1100',
  },
  {
    number: '05',
    name: 'Caramel Cortado',
    description: 'House-made caramel folded into a 2:1 espresso and milk ratio. Small, potent, and perfectly balanced.',
    tastingNotes: ['Burnt Caramel', 'Sea Salt', 'Espresso Crema'],
    price: '₹330',
    image: 'https://images.pexels.com/photos/39062405/pexels-photo-39062405.jpeg?auto=compress&cs=tinysrgb&w=800&h=1100',
  },
  {
    number: '06',
    name: 'House Cold Brew',
    description: 'Eighteen hours of slow steeping produces a naturally sweet, impossibly smooth cold brew. No bitterness, just depth.',
    tastingNotes: ['Dark Cherry', 'Maple', 'Cocoa Nib'],
    price: '₹300',
    image: 'https://images.pexels.com/photos/38426418/pexels-photo-38426418.jpeg?auto=compress&cs=tinysrgb&w=800&h=1100',
  },
];
