/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    "BASE_URL": "http:/localhost:3000",
    "MONGODB_URL": "mongodb+srv://admin:tjhjt1999@cluster0.zf4hthf.mongodb.net/?retryWrites=true&w=majority",
    "ACCESS_TOKEN_SECRET": "gWrQ>^#=Bm%rhxaBVp2vA5CSvg9",
    "REFRESH_TOKEN_SECRET": "f*z8U2yMDxE-9U[K\^Vt&PM)N)pfzCUg3%rNHxt}6(VJ^N$n@",
  }
}

module.exports = nextConfig
