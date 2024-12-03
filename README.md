
# Gym Management System

## Introduction

This project is a gym management system designed to streamline the operations of a fitness center. It allows you to manage members, class schedules, and instructors. The system includes:

- **Backend**: Built with Spring Boot.
- **Frontend**: Built with React.

## Prerequisites

Before running the project, ensure you have the following prerequisites installed on your system:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html) - Version 17 or higher.
- [Node.js](https://nodejs.org/) - Version 18.15.0 or higher. 
- [npm](https://www.npmjs.com/) - This is included with Node.js.
- [Visual Studio Code](https://code.visualstudio.com/download) - Recommended for running and building the Spring Boot application.

## Getting Started

Follow these steps to get the project up and running:

### Backend (Spring Boot)

1. Open the backend project in your preferred Java IDE (VS Code is recommended).
2. Build the project using Maven.
3. Run the main class **H2DemoApplication** to start the backend server. This will run the backend on `http://localhost:8080`.

### Frontend (React)

1. Open a terminal and navigate to the `frontend` directory of the project, or open the frontend folder in Visual Studio Code.
2. Go into the frontend directory
   ```bash
   cd frontend
   ```
3. Install project dependencies by running:
   ```bash
   npm install
   ```
4. Start the React development server by running:
   ```bash
   npm start
   ```
   This will start the frontend application on `http://localhost:3000`.

### Database Configuration

By default, this project uses an in-memory H2 SQL database for development. The database is automatically configured using the following files in the backend's `resources` folder:

- `schema.sql: Defines the database structure.
- `data.sql`: Populates the database with initial data (e.g., members, classes, instructors).

To customize the database schema or sample data, modify these files.

### Accessing the Application User Interface

Once both the frontend and backend are running:
- Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the frontend.

### Accessing the Database Console

To access the H2 database console:
1. Open your web browser and go to [http://localhost:8080/h2-console](http://localhost:8080/h2-console).

The H2 console is helpful for testing queries and examining the database structure. Note that the in-memory database resets each time the application restarts.

### Additional Notes

- Ensure both the frontend (port 3000) and backend (port 8080) are running for the application to work correctly.
- Use the frontend interface to add, view, update, or delete records in the database.
- The SQL execution feature is available on the frontend for testing pure SQL statements.

## Usage

- Use the web interface to manage gym members, classes, and schedules.
- Explore the class schedule, enrollments, and other features using the user-friendly interface.

## Authors

- Micaiah Hill
- Ariel Jupiter
- Tyler Scott
