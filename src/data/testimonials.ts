export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

// Fictional demo testimonials — not real customer reviews
export const testimonials: Testimonial[] = [
  {
    quote: 'The kind of place where one coffee becomes two hours.',
    name: 'Anaisha Rao',
    role: 'Writer & Editor',
  },
  {
    quote: 'Every cup feels like it was made just for me. The Golden Latte is unreal.',
    name: 'Kabir Mehta',
    role: 'Creative Director',
  },
  {
    quote: 'I came for the coffee. I stayed for the silence. That is rare in this city.',
    name: 'Sara Kapoor',
    role: 'Photographer',
  },
  {
    quote: 'Sam\'s Bucks made me understand what slow coffee actually means.',
    name: 'Dev Sharma',
    role: 'Architect',
  },
  {
    quote: 'The most beautiful hour of my morning begins with their espresso.',
    name: 'Mira Nair',
    role: 'Film Producer',
  },
];
