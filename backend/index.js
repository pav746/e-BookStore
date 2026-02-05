// const express = require("express");
// const app = express();
// const cors = require("cors");

// const mongoose = require("mongoose");
// const port = process.env.PORT || 5000;
// require('dotenv').config()

// // middleware
// app.use(express.json());
// app.use(cors({
//     origin: ['http://localhost:5173', 'https://book-app-frontend-tau.vercel.app'],
//     credentials: true
// }))

// // routes
// const bookRoutes = require('./src/books/book.routes');
// const orderRoutes = require("./src/orders/order.routes")
// const userRoutes =  require("./src/users/user.routes")
// const adminRoutes = require("./src/stats/admin.stats")

// app.use("/api/books", bookRoutes)
// app.use("/api/orders", orderRoutes)
// app.use("/api/auth", userRoutes)
// app.use("/api/admin", adminRoutes)

// async function main() {
//   await mongoose.connect(process.env.DB_URL);
//   app.use("/", (req, res) => {
//     res.send("Book Store Server is running!");
//   });
// }

// main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config(); // Load environment variables

const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://book-app-frontend-tau.vercel.app'],
    credentials: true
}));

// Routes
const bookRoutes = require('./src/books/book.routes');
const orderRoutes = require("./src/orders/order.routes");
const userRoutes =  require("./src/users/user.routes");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Book Store Server is running!");
});

// Connect to MongoDB and start server
async function startServer() {
    try {
        const mongoURI = process.env.DB_URL || "mongodb://127.0.0.1:27017/eBookStore";
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully!");

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

startServer();
