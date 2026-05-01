# WanderLust – Travel Listing Platform

A full-stack travel listing web application that allows users to explore, create, and manage travel destinations with reviews, interactive maps, and image uploads.

## Live Demo
https://wanderlust-fxu3.onrender.com/

## GitHub Repository
https://github.com/PSgautam/WanderLust

## Features
- User authentication and authorization using Passport.js
- CRUD operations for travel listings
- Review system with user-generated ratings and comments
- RESTful routing and MVC architecture
- Image upload and storage using Multer and Cloudinary
- Interactive maps integration using Mapbox
- Client-side and server-side validation
- Session and cookie management
- Flash messages for user feedback

## Tech Stack
Frontend: HTML, CSS, JavaScript, EJS, Bootstrap  
Backend: Node.js, Express.js  
Database: MongoDB  

## Project Structure
/models        - Listing, User, Review schemas  
/routes        - Express routes  
/controllers   - Application logic  
/views         - EJS templates  
/public        - Static files  

## Installation and Setup
1. Clone the repository  
   git clone https://github.com/yourusername/repo.git  

2. Navigate to the project folder  
   cd repo  

3. Install dependencies  
   npm install  

4. Create a .env file and add the following  
   CLOUDINARY_CLOUD_NAME=your_value  
   CLOUDINARY_KEY=your_value  
   CLOUDINARY_SECRET=your_value  
   MAPBOX_TOKEN=your_value  
   SESSION_SECRET=your_value
   MONGO_URL=your_mongodb_connection_string 

6. Run the application  
   npm start  

## Learnings
- Implemented authentication and authorization using Passport.js  
- Worked with cloud services like Cloudinary and Mapbox  
- Applied MVC architecture for scalable code structure  
- Built RESTful APIs and handled relational data (Listing, User, Review)  

## Future Improvements
- Add likes/favorites feature  
- Improve UI responsiveness  
- Add advanced search and filtering  
- Enable user profiles  

## Author
Payal Sharma  
