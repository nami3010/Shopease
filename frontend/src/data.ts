import { Product } from './app/user/shared/models/Product';
import { Category } from './app/user/shared/models/category';



export const sample_products = [
  {
    id: "1",
    name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    photos: ['assets/img/product-1.jpg','assets/img/product-2.jpg','assets/img/product-1.jpg','assets/img/product-1.jpg'],
    rating: { rate: 3.9, count: 120 },
    favorite:false,
  },
  {
    id: "2",
    name: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    photos: ['assets/img/product-2.jpg'],
    rating: { rate: 4.1, count: 259 },
    favorite:false
  },
  {
    id: "3",
    name: 'Mens Cotton Jacket',
    price: 55.99,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    category: "men's clothing",
    photos: ['assets/img/product-3.jpg'],
    rating: { rate: 4.7, count: 500 },
    favorite:false
  },
  {
    id: "4",
    name: 'Mens Casual Slim Fit',
    price: 15.99,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    category: "men's clothing",
    photos: ['assets/img/product-4.jpg'],
    rating: { rate: 2.1, count: 430 },
    favorite:false
  },
  {
    id: "5",
    name:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'jewelery',
    photos: ['assets/img/product-5.jpg'],
    rating: { rate: 4.6, count: 400 },
    favorite:false
  },
  {
    id: "6",
    name: 'Solid Gold Petite Micropave ',
    price: 168,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    category: 'jewelery',
    photos: ['assets/img/product-6.jpg'],
    rating: { rate: 3.9, count: 70 },
    favorite:false
  },
  {
    id: "7",
    name: 'White Gold Plated Princess',
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: 'jewelery',
    photos: ['assets/img/product-7.jpg'],
    rating: { rate: 3, count: 400 },
    favorite:false
  },
  {
    id: "8",
    name: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    price: 10.99,
    description:
      'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    category: 'jewelery',
    photos: ['assets/img/product-8.jpg'],
    rating: { rate: 1.9, count: 100 },
    favorite:false
  },
  {
    id: "9",
    name: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
    price: 64,
    description:
      'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
    category: 'electronics',
    photos: ['assets/img/product-9.jpg'],
    rating: { rate: 3.3, count: 203 },
    favorite:false
  },
  {
    id: "10",
    name: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    price: 109,
    description:
      'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
    category: 'electronics',
    photos: ['assets/img/product-10.jpg'],
    rating: { rate: 2.9, count: 470 },
    favorite:false
  },
  {
    id: "11",
    name:
      'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
    price: 109,
    description:
      '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
    category: 'electronics',
    photos: ['assets/img/product-11.jpg'],
    rating: { rate: 4.8, count: 319 },
    favorite:false
  },
];

export const sample_categories:Category[] = [
  { name: 'All', count: 6 },
  { name: 'Electronics and Gadgets', count: 4 },
  { name: 'Clothing and Fashion', count: 2 },
  { name: 'Home and Kitchen Appliances', count: 3 },
  { name: 'Health and Beauty', count: 2 },
  { name: 'Furniture and Home Decor', count: 1 }
]
