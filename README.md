# 🛒 Electronic Store Web Application

This is a full-stack e-commerce web application for an electronic store.
The project uses **.NET Core Web API** for the backend and **React** for the frontend.
It supports features like user login with JWT, product listing by category, cart functionality,
and state management with Context API and useReducer.

## 📂 Project Structure

Electronic_Store/
├── backend/ # .NET Core Web API
│ ├── Controllers/
│ ├── Models/
│ ├── Repositories/
│ └── appsettings.json
├── frontend/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.jsx
│ └── tailwind.config.js
└── README.md

## 🛠 Technologies Used

### 🔧 Backend
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- JWT Authentication

### 💻 Frontend
- React.js
- React Router
- Axios
- Tailwind CSS
- Context API + useReducer
- Lazy Loading and Suspense

## 🚀 How to Run the Project
- [.NET 6 SDK](https://dotnet.microsoft.com/download)
- [Node.js & npm](https://nodejs.org/)
- SQL Server
- Visual Studio and VS Code

### 🖥 Backend Setup (.NET Core)

1. Navigate to the backend directory:
   ```bash
   cd backend
   
2.Update your appsettings.json with your SQL Server connection string:

"ConnectionStrings": {
  "DefaultConnection": "Server=YOUR_SERVER_NAME;Database=ElectronicStoreDB;Trusted_Connection=True;"
}
3.dotnet ef migrations add InitialCreate
dotnet ef database update

4.dotnet run

API will be available at https://localhost:5001 or http://localhost:5000.

🌐 Frontend Setup (React)

1. Navigate to the frontend folder:
cd frontend

2. Install all dependencies:
npm install

3. Start the development server:
npm start

React will run on http://localhost:3000.

🧾 Features
👤 User registration and login
📂 Product browsing by category
🛍️ Add to cart / Remove from cart
💰 Checkout page (UI only)

![Screenshot (60)](https://github.com/user-attachments/assets/5a902fbc-2f27-42b8-a2f0-7ce2bdcc78e0)
![Screenshot (61)](https://github.com/user-attachments/assets/8dea1778-dc67-472a-a8c9-4a77026078df)
![Screenshot (62)](https://github.com/user-attachments/assets/978df08b-8025-4cf2-83df-f0f5032e3466)
![Screenshot (63)](https://github.com/user-attachments/assets/ce2d4f4c-04d2-4e53-b159-d731cded29ec)
![Screenshot (64)](https://github.com/user-attachments/assets/8b039a37-1413-4476-a010-89c5b27bbca9)



