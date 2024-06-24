const logger = require("firebase-functions/logger"); //Used for logging in Firebase functions.
const { onRequest } = require("firebase-functions/v2/https"); // An HTTP request handler for Firebase Functions (v2)

const express = require("express"); //A web application framework for Node.js, used to create the server.
const cors = require("cors"); //Middleware to enable Cross-Origin Resource Sharing, allowing your API to be called from different origins.

const dotenv = require("dotenv"); //Loads environment variables from a .env file into process.env.
const Stripe = require("stripe");

dotenv.config(); // Fetch env

console.log(process.env); // Debugging line to check if env vars are loaded
const secret_key = process.env.STRIPE_SECRET;

if (!secret_key) {
  throw new Error("Missing STRIPE_SECRET environment variable");
}

console.log(secret_key); // Debugging line

const stripe = new Stripe(secret_key); // Initializes the Stripe instance with the secret key.
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

//A simple endpoint to check if the server is working. Responds with a JSON message.
app.get("/", (req, res) => {
  res.status(200).json({
    message: "working",
  });
});

//Endpoint to create a payment intent with Stripe.
//Uncomment if you want to enable the payment creation endpoint
app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
  
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(400).json({ error: "The amount must be greater than zero." });
  }
});

exports.api = onRequest(app); //Exports the Express app as a Firebase function that handles HTTP requests.
