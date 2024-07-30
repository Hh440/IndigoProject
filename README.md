# Flight Status and Notifications System

## Problem Statement
Develop a system to provide real-time flight status updates and notifications to passengers.

## Features
1. **Real-time Updates**: Display current flight status, including delays, cancellations, and gate changes.
2. **Push Notifications**: Send notifications for flight status changes via SMS, email, or app notifications.
3. **Integration with Airport Systems**: Pull data from airport databases for accurate information (mock data provided).
4. **Admin Panel**: Interface for administrators to manage flights and notifications, assuming the user is logged in.

## Technologies Used
### Frontend
- **HTML**: Structure of the web pages.
- **Tailwind CSS**: Styling framework for responsive design.
- **React.js**: JavaScript library for building user interfaces.

### Backend
- **Node.js**: Server-side JavaScript runtime for building scalable network applications.

### Database
- **PostgreSQL**: Relational database for storing flight status and user information.
- **Prisma**: ORM for database schema management and querying.

### Notifications
- **Firebase Cloud Messaging**: Service for sending app notifications.
- **Nodemailer with Ethereum**: Service for sending emails.
- **Twilio**: Service for sending SMS notifications.

## System Architecture
1. **Frontend**:
    - User Interface (UI) built with React.js.
    - Tailwind CSS for responsive and modern design.

2. **Backend**:
    - Node.js server to handle API requests.
    - Integration with airport systems to fetch real-time flight data.

3. **Database**:
    - PostgreSQL to store flight data, user data, and notification logs.
    - Prisma for database schema management and queries.

4. **Notifications**:
    - Firebase Cloud Messaging for push notifications.
    - Nodemailer integrated with Ethereum for sending email notifications.
    - Twilio for sending SMS notifications.

## Installation and Setup
1. **Clone the repository**:
    ```bash
    git clone https://github.com/Hh400/flight-status-notifications.git
    cd flight-status-notifications
    ```

2. **Install frontend dependencies**:
    ```bash
    cd frontend
    npm install
    ```

3. **Install backend dependencies**:
    ```bash
    cd ../backend
    npm install
    ```

4. **Set up the database**:
    - Install PostgreSQL and create a database.
    - Configure Prisma:
      ```bash
      npx prisma init
      ```
    - Update the `DATABASE_URL` in the `.env` file with your PostgreSQL connection string.
    - Run Prisma migrations to set up the database schema:
      ```bash
      npx prisma migrate dev --name init
      ```

5. **Start the backend server**:
    ```bash
    cd backend
    npm start
    ```

6. **Start the frontend server**:
    ```bash
    cd ../frontend
    npm start
    ```

## Usage
- Access the frontend application at `http://localhost:3000`.
- View real-time flight status updates.
- Receive notifications for flight status changes via app notifications, email, and SMS.
- Use the admin panel to add and update flight details and send notifications (assumes user is logged in).

## Mock Data
- Use the provided mock data for initial testing and development.
- Replace with real data integration from airport systems when available.

## Project Insight
This project showcases my ability to integrate various technologies to build a comprehensive full-stack solution. By leveraging React.js for the frontend, Node.js for the backend, and PostgreSQL managed by Prisma, I ensure a robust and scalable architecture. The use of Firebase Cloud Messaging, Nodemailer with Ethereum, and Twilio demonstrates my proficiency in implementing diverse notification systems.

## Personal Statement
Participating in this "Hack to Hire" challenge has been an exciting opportunity to demonstrate my skills in full-stack development, real-time data processing, and notification system integration. I am passionate about building efficient and user-friendly applications and am confident that my technical expertise and problem-solving abilities will be a valuable asset to any team.

## Demo Video
Watch a demonstration of the Flight Status and Notifications System:

https://github.com/user-attachments/assets/3f55759d-04a2-4cd5-b846-d408b1ba0f78

---

### Admin Panel Functionality
The admin panel allows administrators to:
- Add new flights
- Update existing flight details
- Send notifications to users

---

**Note**: Ensure to configure your Firebase, Nodemailer, and Twilio credentials in the backend `.env` file for the notification services to work correctly.
