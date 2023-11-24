/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLE_CLIENT_ID:
      "1089871007807-ge8cjlf7ougoj6feu8ecrj40c7g0939a.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",

    GITHUB_ID: "ac900eacc83308409589",
    GITHUB_SECRET: "dfd263ea810923f381395b8adaeed860f7a865d8",
  },
};

module.exports = nextConfig;
