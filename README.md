E-Commerce Application
Description
The E-Commerce Application is a comprehensive online platform that allows users, vendors, and administrators to interact seamlessly. Users can browse, search, and purchase products, vendors can manage their shops and products, and administrators have full control over the platform. The application is built with modern web development technologies, ensuring a scalable and high-performance system.

Live URL
Frontend Live URL
Backend Live URL
Technology Stack & Packages
Backend
Node.js: Server-side JavaScript runtime environment
Express.js: Web framework for Node.js
PostgreSQL: Relational database for data storage
JWT: JSON Web Tokens for authentication
Prisma: ORM for interacting with PostgreSQL
Cloudinary: Cloud storage service for handling image uploads
Aamarpay/Stripe: Payment processing services
Frontend
React.js: JavaScript library for building user interfaces
Redux: State management for React
TypeScript: Type-safe JavaScript for scalability
Tailwind CSS: Utility-first CSS framework
React Router: For routing in the frontend
Axios: HTTP client for making requests
Lottie: For animations and loading screens
Features & Functionality
1. Home Page
Display products from various vendors
Prioritize products from followed shops for logged-in users
Infinite scrolling for product listings
Filters and search options (e.g., price range, category)
Categories, flash sale products, and scroll-to-top functionality
2. Product Details Page
Displays product name, price, description, and images
Related products section
Customer reviews and ratings
3. Shop Page (Vendor Page)
Vendor details and product listings
Customers can add products directly to the cart
Option to follow/unfollow vendor shops
Follower count
4. Cart Functionality
Restrict adding products from different vendors
Display product details, pricing, and total cost
5. Checkout
Apply coupon codes for discounts
Payment integration via Aamarpay or Stripe
6. Order History
Vendors can view orders related to their shop
Customers can view their past orders
7. Authentication
Signup and login with JWT-based authentication
Password management (change/reset password)
8. Vendor Dashboard
Manage shop info (name, logo, products)
View and respond to reviews
Paginated lists for products and order history
9. Recent Products Page
Displays the last 10 viewed products
10. Comparison Feature
Compare up to three products from the same category
11. Responsive Design
Fully mobile and desktop-friendly interface
12. Scalability
Paginated APIs for order history and product listings
Efficient pagination with filters and search
Setup Instructions
Backend Setup
Clone the repository:
git clone https://github.com/your-username/e-commerce-backend.git
Navigate to the backend folder:
cd e-commerce-backend
Install dependencies:
npm install
Set up environment variables in a .env file (refer to .env.example for required variables):
DATABASE_URL: PostgreSQL database connection string
JWT_SECRET: Secret key for JWT authentication
CLOUDINARY_URL: Cloudinary API credentials
Run migrations for the database:
npx prisma migrate dev
Start the server:
npm run start
Frontend Setup
Clone the repository:
git clone https://github.com/your-username/e-commerce-frontend.git
Navigate to the frontend folder:
cd e-commerce-frontend
Install dependencies:
npm install
Create a .env file with the following variables:
REACT_APP_API_URL: URL of the backend API
Start the frontend server:
npm run start
Key Features & Functionality
Multiple Roles: Admin, Vendor, and User roles with distinct features and access.
Advanced Search & Filtering: Efficient search with filters such as price range, category, and keyword.
Cart Management: Ensure that users can only add products from a single vendor at a time.
Payment Integration: Secure payment processing via Aamarpay or Stripe.
Responsive Design: Mobile-first approach, ensuring an optimal experience across devices.
Dynamic Product Comparison: Users can compare up to three products at once based on key attributes.
Admin Dashboard: Complete control over users, vendors, and products for platform monitoring.
Known Issues/Bugs
Pagination for order history is not fully functional for large datasets (coming in future updates).
Admin dashboard's user management section has some minor UI glitches.
Sorting in product listings may not be responsive in very small screens.
