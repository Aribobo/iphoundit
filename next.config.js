/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains : ['res.cloudinary.com']
  },
  env: {
    MONGO_URI:process.env.MONGO_URI,
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
  },
}

module.exports = nextConfig
