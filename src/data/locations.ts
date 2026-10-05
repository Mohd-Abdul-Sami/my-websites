export interface Location {
  city: string;
  neighborhood: string;
  address: string;
  hours: string;
  image: string;
}

// Demo locations — all content is editable placeholder data
export const locations: Location[] = [
  {
    city: 'Hyderabad',
    neighborhood: 'Jubilee Hills',
    address: 'Road No. 36, Jubilee Hills, Hyderabad — 500033',
    hours: '7:00 AM — 11:00 PM',
    image: 'https://images.pexels.com/photos/7500681/pexels-photo-7500681.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700',
  },
  {
    city: 'Bengaluru',
    neighborhood: 'Indiranagar',
    address: '100 Feet Road, Indiranagar, Bengaluru — 560038',
    hours: '7:00 AM — 12:00 AM',
    image: 'https://images.pexels.com/photos/1055054/pexels-photo-1055054.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700',
  },
  {
    city: 'Mumbai',
    neighborhood: 'Bandra West',
    address: 'Carter Road, Bandra West, Mumbai — 400050',
    hours: '8:00 AM — 1:00 AM',
    image: 'https://images.pexels.com/photos/5379707/pexels-photo-5379707.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700',
  },
  {
    city: 'Delhi',
    neighborhood: 'Khan Market',
    address: 'Khan Market, New Delhi — 110003',
    hours: '8:00 AM — 11:00 PM',
    image: 'https://images.pexels.com/photos/28097275/pexels-photo-28097275.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700',
  },
];
