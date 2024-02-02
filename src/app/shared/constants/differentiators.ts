export default interface Differentiator {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: 1,
    image: '../../../../../assets/icons/shop.svg',
    title: 'Title',
    description: 'Large description'
  },
  {
    id: 2,
    image: '../../../../../assets/icons/secure-window.svg',
    title: 'Title',
    description: 'Large description'
  },
  {
    id: 3,
    image: '../../../../../assets/icons/healthcare.svg',
    title: 'Title',
    description: 'Large description'
  },
  {
    id: 4,
    image: '../../../../../assets/icons/delivery-truck.svg',
    title: 'Title',
    description: 'Large description'
  }
];
