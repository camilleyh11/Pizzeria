import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      pseudo: 'Admin',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },

    {
      pseudo: 'John',
      email: 'john@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'Chicken Parmesan',
      category: 'Sauce tomate',
      image: '/images/p1.jpg',
      price: 12,
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description: 'Sauce tomate à l origan, mozzarella, filet de poulet rôti et mariné, tomates fraîches, parmigiano reggiano AOP',
    },
    {
      name: 'Queen',
      category: 'Sauce tomate',
      image: '/images/p2.jpg',
      price: 14,
      countInStock: 20,
      rating: 4.0,
      numReviews: 10,
      description: 'Sauce tomate à l origan, mozzarella, jambon et champignons frais',
    },
    {
      name: 'Montagnarde',
      category: 'Shirts',
      image: '/images/p6.jpg',
      price: 15,
      countInStock: 2,
      rating: 4.8,
      numReviews: 17,
      description: 'Crème fraîche légère, mozzarella, jambon cru, fromage à raclette et champignons frais',
    },
      
  ],
};
export default data;