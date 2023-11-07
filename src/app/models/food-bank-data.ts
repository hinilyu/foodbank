import { Location } from './location.model';

export const foodBanks: Location[] = [
  new Location(
    'Harmony Community Food Centre',
    'Mon-Fri: 9 AM - 5 PM',
    '123 Main Street, Toronto, ON',
    '123-456-7890',
    "../assets/image/food_bank_1.jpg"
  ),
  new Location(
    'Feed Scarborough - Rouge Park Food Bank',
    'Tue-Sat: 12:00 - 18:30',
    '2 Gower St, East York, ON M4B 1E2',
    '456-789-0123',
    "../assets/image/food_bank_2.jpg"
  ),
  // Add more food bank instances as needed
];
