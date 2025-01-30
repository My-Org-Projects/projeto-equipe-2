const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',  // Rota inicial
        destination: '/entrar',  // Nova rota
        permanent: true,  // Redirecionamento permanente (código HTTP 308)
      },
    ];
  },
};

export default nextConfig;
