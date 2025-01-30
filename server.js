const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS to allow frontend requests

app.post("/create-order", async (req, res) => {
    try {
        const response = await axios.post(
            "https://api.razorpay.com/v1/orders",
            {
                amount: req.body.amount, // Amount in smallest currency unit
                currency: "INR",
                receipt: "order_rcptid_11",
            },
            {
                auth: {
                    username: "rzp_test_CZYZe7EBqCHpog", // Replace with your Razorpay API Key
                    password: "qYqNScawDYIDWjEboKAygyfD", // Replace with your Razorpay API Secret
                },
            }
        );
        res.json(response.data); // Send order details back to the frontend
    } catch (error) {
        console.error("Error creating order:", error.response?.data || error.message);
        res.status(500).json(error.response?.data || { message: error.message });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
