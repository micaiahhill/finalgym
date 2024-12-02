## Introduction

This project is a gym management system designed to streamline the operations of fitness centers. It allows you to manage members, class schedules, instructors, and more. The system includes a backend (built with Spring Boot) and a frontend (built with React).

## Prerequisites

Before running the project, ensure you have the following installed on your system:

- Java Development Kit (JDK) - Version 11 or higher.
- Node.js - Version 14 or higher.
- npm - This is included with Node.js.
- VS Code - Recommended for running and building the Spring Boot application.

## Getting Started

Follow these steps to set up and run the project:

### Backend (Spring Boot)

1. Open the backend project in your preferred Java IDE (VS Code is recommended).
2. Build the project using Maven.
3. Build the project by clicking on the application then run (MAC users just click run).
4. Start the backend server by running the main class: `H2DemoApplication`.  
   This will start the backend server on port 8080.

### Frontend (React)

1. Open a terminal and navigate to the frontend directory of the project.
2. Install project dependencies by running:

   ```bash
   npm install
   ```

3. Start the frontend development server by running:

   ```bash
   npm start
   ```

   This will start the frontend application on port 3000.

## Database Configuration

This project uses an SQLite database for storing data. The database is automatically configured, and the schema and initial data are set up using SQL scripts located in the backend's resources folder:

- schema.sql - Defines the database structure.
- data.sql - Populates the database with initial data (e.g., members, classes, instructors).

## Accessing the Application User Interface

Once both the frontend and backend are running:

1. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the frontend.
2. You can log in and explore the application's features to manage members, classes, and schedules.

## Accessing the SQLite Database

To view or modify the database directly, you can use an SQLite browser tool or execute queries via the backend. By default, the database file is stored locally and is automatically created when the backend starts.

## Additional Notes

- Ensure both the frontend (port 3000) and backend (port 8080) are running for the application to work correctly.
- Use the frontend's interface to test and manage records. 
- The backend provides a REST API that can also be tested using tools like Postman or curl.

## Authors

- Micaiah Hill  
- Ariel Jupiter
- Tyler Scott
