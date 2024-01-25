/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "64.media.tumblr.com",
    ] /*si deve configurare il dominio dell'immagine altrimenti il tag immagine nn funziona*/,
  },
};

export default nextConfig;
