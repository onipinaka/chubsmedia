// Past Works Data for Home Page
// This shows a curated selection of past work in a different layout

export const pastWorksData = [
  {
    id: 1,
    title: 'Safe Shipping Logistics',
    category: 'Overall Development',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop',
    slug: 'ssl'
  },
  {
    id: 2,
    title: 'Taskify App',
    category: 'Web Design',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    slug: 'taskify-app'
  },
  {
    id: 3,
    title: 'Fashion Brand',
    category: 'Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
    slug: 'fashion-brand'
  },
  {
    id: 4,
    title: 'Leardo Ecom',
    category: 'Website Design',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    slug: 'leardo-ecom'
  }
];

// Get all past works
export const getPastWorks = () => {
  return pastWorksData;
};
