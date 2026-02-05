const express =  require('express');
const User = require('./user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router =  express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY

// Register a new user
router.post("/register", async (req, res) => {
    const {username, password, role = 'user'} = req.body;
    try {
        const existingUser = await User.findOne({username});
        if(existingUser) {
            return res.status(400).json({message: "Username already exists!"})
        }
        
        const newUser = new User({username, password, role});
        await newUser.save();
        
        return res.status(201).json({
            message: "User registered successfully",
            user: {
                username: newUser.username,
                role: newUser.role
            }
        })
    } catch (error) {
       console.error("Failed to register user", error)
       res.status(500).json({message: "Failed to register user"}) 
    }
})

// Login endpoint
router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await User.findOne({username});
        if(!user) {
            return res.status(404).json({message: "User not found!"})
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.status(401).json({message: "Invalid password!"})
        }
        
        const token = jwt.sign(
            {id: user._id, username: user.username, role: user.role}, 
            JWT_SECRET,
            {expiresIn: "1h"}
        )

        return res.status(200).json({
            message: "Authentication successful",
            token: token,
            user: {
                username: user.username,
                role: user.role
            }
        })
        
    } catch (error) {
       console.error("Failed to login", error)
       res.status(500).json({message: "Failed to login"}) 
    }
})

// Admin login endpoint (deprecated - use login instead)
router.post("/admin", async (req, res) => {
    const {username, password} = req.body;
    try {
        const admin = await User.findOne({username});
        if(!admin) {
            return res.status(404).json({message: "Admin not found!"})
        }
        
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if(!isPasswordValid) {
            return res.status(401).json({message: "Invalid password!"})
        }
        
        const token = jwt.sign(
            {id: admin._id, username: admin.username, role: admin.role}, 
            JWT_SECRET,
            {expiresIn: "1h"}
        )

        return res.status(200).json({
            message: "Authentication successful",
            token: token,
            user: {
                username: admin.username,
                role: admin.role
            }
        })
        
    } catch (error) {
       console.error("Failed to login as admin", error)
       res.status(500).json({message: "Failed to login as admin"}) 
    }
})

module.exports = router;