// Loads secret from .env file (not in repo)
require("dotenv").config();
console.log("API key:", process.env.API_KEY);
