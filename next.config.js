/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    "BASE_URL": "http:/localhost:3000",
    "MONGODB_URL": "mongodb+srv://admin:tjhjt1999@cluster0.zf4hthf.mongodb.net/?retryWrites=true&w=majority",
  }
}

module.exports = nextConfig
