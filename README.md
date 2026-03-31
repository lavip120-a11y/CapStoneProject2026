# Capstone Project 2026

## Overview
This capstone project, Tairawhiti Rising, showcases a Node.js and Express backend API connected to a MySQL database useing Sequelize.  It provides CRUD functionality and authentification for users, posts, comments and likes.  The backend acts as the middle layer between the frontend application and the database handling all business logic, data validation and API requests.

## Components
- **Frontend**: It utilizes a sleek interface developed using React.js, ensuring an engaging user experience.
- **Backend**: The backend is built with Node.js and Express, providing a robust server-side framework.
- **Database**: MySQL is employed to handle data storage efficiently, facilitating scalability.

## Technology Stack
Node.js
Express.js
MySQL
Sequelize ORM
dotenv
cors

## Setup Instructions
1. **Clone the Repository**:  
   `git clone https://github.com/lavip120-a11y/CapStoneProject2026`

2. **Navigate to Project Directory**:  
   `cd CapStoneProject2026`

3. **Install Backend Dependencies**:  
   `npm install` in the backend directory.

4. **Install Frontend Dependencies**:  
   `npm install` in the frontend directory.

5. **Run the Application**:  
   Start the backend server with `node server.js` and the frontend with `npm start`.

## Key Concepts
- MVC-style structure (Models, Controllers, Routes)
- RESTful API design
- Seperation of concerns
- Environment-based configuration

## Features
- User authentication - basic login functionality is implemented by validating user email and password against stored data.
- Real-time data visualization - for implementation in version 2.
- Responsive design for mobile and desktop

Notes
This project is for development purposes and is not production-ready.
Security features such as password hashing and authentification tokens are not yet implemented.
