require("dotenv").config();

module.exports = {
  env: {
    ENV: process.env.ENV,
    // Stripe-Donate App
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    STRIPE_API_AUTH_TOKEN: process.env.STRIPE_API_AUTH_TOKEN,
    EXCHANGE_API_KEY: process.env.EXCHANGE_API_KEY,
    // EXTERNAL APP TOKENS
    STRIPE_URL_TOKEN: process.env.STRIPE_URL_TOKEN,
  },
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com"],
  },
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};
