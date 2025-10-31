# Real-Time Chat Application

![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-purple?style=for-the-badge&logo=vite)
![Node.js](https://img.shields.io/badge/Node.js-20-green?style=for-the-badge&logo=nodedotjs)
![Express.js](https://img.shields.io/badge/Express.js-4-lightgrey?style=for-the-badge&logo=express)
![Socket.IO](https://img.shields.io/badge/Socket.IO-4-black?style=for-the-badge&logo=socketdotio)
![MongoDB](https://img.shields.io/badge/MongoDB-white?style=for-the-badge&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-cyan?style=for-the-badge&logo=tailwindcss)

This is a full-stack, real-time chat application built with a modern monorepo structure. It features a React/Vite frontend and a Node.js/Express backend, connected via WebSockets for instantaneous communication.

The application includes secure JWT authentication, online presence, "is typing" indicators, image messaging, and a robust backend infrastructure designed for security and scalability.

---

## Key Features

### Frontend (Client-Side)
* **Real-Time Messaging:** Uses `socket.io-client` to send and receive messages instantly.
* **Modern UI:** Built with React and styled using Tailwind CSS for a responsive, clean interface.
* **Global State Management:** Leverages **Zustand** for lightweight and efficient global state management (user auth, chat state).
* **Client-Side Routing:** Uses `react-router-dom` for protected routes and navigation between login, signup, and chat pages.
* **Rich Chat Experience:**
    * Displays online users and "is typing" indicators.
    * Supports sending text and image messages.
    * Includes notification and typing sounds for better UX.
* **Loading & Placeholders:** Skeletons and placeholder components provide a smooth loading experience.

### Backend (Server-Side)
* **RESTful API:** Built with Node.js and Express.js for handling auth and message history.
* **Real-Time WebSocket Server:** Uses **Socket.IO** for broadcasting messages, typing events, and online user lists.
* **Secure Authentication:**
    * Full user authentication (signup/login/logout) using JWT and `bcrypt` for password hashing.
    * Protects API routes and WebSocket connections using custom JWT middleware.
* **Database:** Uses MongoDB with Mongoose, with schemas for `User` and `Message`.
* **Cloud Image Uploads:** Integrates with **Cloudinary** for handling image message uploads.
* **Email Service:** Sends welcome emails upon signup using **Resend**.
* **Security:** Implements **Arcjet** for rate limiting and bot protection on sensitive auth endpoints.

## Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Monorepo** | `npm` workspaces | Manages `frontend` and `backend` packages. |
| **Frontend** | [**React**](https://react.dev/) | UI library |
| | [**Vite**](https://vitejs.dev/) | Frontend build tool |
| | [**Tailwind CSS**](https://tailwindcss.com/) | Utility-first CSS framework |
| | [**Zustand**](https://zustand-demo.pmnd.rs/) | Global state management |
| | [**Socket.IO Client**](https://socket.io/docs/v4/client-api/) | Real-time communication |
| | [**Axios**](https://axios-http.com/) | HTTP client |
| **Backend** | [**Node.js**](https://nodejs.org/) | JavaScript runtime |
| | [**Express.js**](https://expressjs.com/) | Web server framework |
| | [**Socket.IO**](https://socket.io/) | Real-time WebSocket framework |
| | [**JWT**](https://jwt.io/) & [**Bcrypt**](https://www.npmjs.com/package/bcrypt) | Authentication & password hashing |
| **Database** | [**MongoDB**](https://www.mongodb.com/) | NoSQL database |
| | [**Mongoose**](https://mongoosejs.com/) | Object Data Modeling (ODM) |
| **Services** | [**Cloudinary**](https://cloudinary.com/) | Image hosting and transformation |
| | [**Resend**](https://resend.com/) | Transactional email service |
| | [**Arcjet**](https://arcjet.com/) | Security and rate limiting |

## Project Structure

```
chat-app/
├── backend/
│   ├── src/
│   │   ├── controllers/    # Express route logic (auth, message)
│   │   ├── lib/            # Service clients (DB, Socket, Cloudinary, etc.)
│   │   ├── middleware/     # Auth and security middleware
│   │   ├── models/         # Mongoose schemas (User, Message)
│   │   ├── routes/         # API route definitions
│   │   └── server.js       # Backend entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── hooks/          # Custom hooks (e.g., useKeyboardSound)
│   │   ├── lib/            # Axios client setup
│   │   ├── pages/          # Top-level pages (Login, Signup, Chat)
│   │   ├── store/          # Zustand global stores
│   │   ├── App.jsx         # Main router setup
│   │   └── main.jsx        # React entry point
│   └── package.json
└── package.json            # Root package for monorepo scripts
```

## Getting Started

### Prerequisites

* Node.js (v18+)
* MongoDB (a local instance or a cloud URI, e.g., from MongoDB Atlas)
* A [Cloudinary](https://cloudinary.com/) account
* A [Resend](https://resend.com/) account (for emails)
* An [Arcjet](https://arcjet.com/) account (for rate limiting)

### 1. Root Setup

Clone the repository and install all dependencies from the root directory. This will install for both `frontend` and `backend` thanks to npm workspaces.

```bash
git clone [https://github.com/your-username/chat-app.git](https://github.com/your-username/chat-app.git)
cd chat-app
npm install
```

### 2. Backend Setup

1.  Navigate to the backend:
    ```bash
    cd backend
    ```

2.  Create a `.env` file. You can copy `.env.example` if one exists, or create one and add the following:

    ```sh
    NODE_ENV=development
    PORT=8000
    MONGO_URI="your_mongodb_connection_string"
    JWT_SECRET="your_strong_jwt_secret"
    
    # Services
    CLOUDINARY_CLOUD_NAME="your_cloud_name"
    CLOUDINARY_API_KEY="your_api_key"
    CLOUDINARY_API_SECRET="your_api_secret"
    RESEND_API_KEY="your_resend_api_key"
    ARCJET_SIGNING_KEY="your_arcjet_signing_key"
    ```

### 3. Frontend Setup

1.  Navigate to the frontend in a new terminal:
    ```bash
    cd frontend
    ```

2.  Create a `.env` file with the URL of your backend:
    ```sh
    VITE_BACKEND_URL="http://localhost:8000"
    ```

### 4. Running the Application

Run the `dev` script from the **root directory** to start both the frontend and backend servers concurrently.

```bash
# From the root 'chat-app' directory
npm run dev
```

* The **Backend API** will be running on `http://localhost:8000` (or your `PORT`).
* The **Frontend App** will be available at `http://localhost:5173` (or the port Vite assigns).

---

## API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/signup` | Creates a new user account. |
| `POST` | `/api/auth/login` | Authenticates a user and returns a JWT. |
| `POST` | `/api/auth/logout` | Clears the authentication cookie. |
| `GET` | `/api/messages/users` | Gets a list of all users to chat with. |
| `GET` | `/api/messages/:id` | Gets message history with a specific user. |
| `POST` | `/api/messages/send/:id` | Sends a text message to a specific user. |
| `POST` | `/api/messages/send-image/:id` | Uploads and sends an image message. |

## Socket.IO Events

All real-time communication is handled by Socket.IO.

### Client Emits (to Server)
* `join_room`: Joins a specific user's room to receive private messages.
* `new_message`: Sends a new message object to the server.
* `typing`: Notifies the server that the user has started typing.
* `stop_typing`: Notifies the server that the user has stopped typing.

### Server Emits (to Client)
* `get_online_users`: Broadcasts an updated list of all connected users.
* `new_message_received`: Emits the new message object to the recipient.
* `typing`: Relays the "is typing" status to the correct user.
* `stop_typing`: Relays the "stop typing" status to the correct user.

## License

This project is licensed under the **MIT License**.
