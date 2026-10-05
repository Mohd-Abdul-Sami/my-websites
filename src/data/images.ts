// Centralized image configuration for SAM'S BUCKS
// All images sourced from Pexels (license-free stock photography)
// Replace with Recraft-generated assets for final production

const px = (id: number, w = 940, h = 650) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}`;

export const images = {
  heroBg: px(39529656, 1920, 1080),
  hero: px(28935722, 1400, 1000),
  heroAlt: px(27297703, 1400, 1000),
  espresso: px(13240964, 940, 1200),
  signatureEspresso: px(13447735, 800, 1200),
  latte: px(15149236, 800, 1200),
  coldBrew: px(38426418, 800, 1200),
  caramel: px(39062405, 800, 1200),
  midnight: px(6771897, 800, 1200),
  houseBrew: px(36455821, 800, 1200),
  barista: px(20749138, 800, 1100),
  barista2: px(9052268, 800, 1100),
  barista3: px(22884688, 800, 1100),
  cafeInterior: px(7500681, 1200, 800),
  cafeInterior2: px(1055054, 1200, 800),
  cafeCounter: px(28097275, 1200, 800),
  beans: px(19162213, 1000, 700),
  beans2: px(34258683, 1000, 700),
  beans3: px(30444143, 1000, 700),
  packaging: px(26117179, 800, 1200),
  packaging2: px(28495604, 800, 1200),
  lifestyle: px(5709530, 1200, 800),
  lifestyle2: px(5047013, 1200, 800),
  pourOver: px(19143158, 800, 1000),
  pourOver2: px(19723762, 800, 1100),
  pourOver3: px(16284358, 800, 1100),
  gallery01: px(13240964, 800, 1000),
  gallery02: px(19162213, 1000, 700),
  gallery03: px(20749138, 800, 1100),
  gallery04: px(7500681, 1000, 700),
  gallery05: px(19723762, 800, 1100),
  gallery06: px(26117179, 800, 1000),
  gallery07: px(5709530, 1000, 700),
  gallery08: px(302893, 1000, 700),
  gallery09: px(13447735, 800, 1100),
  gallery10: px(1055054, 1000, 700),
  gallery11: px(27297703, 1000, 700),
  gallery12: px(9052268, 800, 1100),
  experience01: px(6771897, 1000, 750),
  experience02: px(5709530, 1000, 750),
  experience03: px(35614378, 1000, 750),
  process01: px(19162213, 1000, 700),
  process02: px(30444143, 1000, 700),
  process03: px(302893, 1000, 700),
  process04: px(13692578, 800, 1100),
};

export type ImageKey = keyof typeof images;
