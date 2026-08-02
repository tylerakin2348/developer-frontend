import path from 'node:path';
import { fileURLToPath } from 'node:url';

const workspaceRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Used by Dockerfile; Amplify Hosting ignores standalone and serves SSR its own way.
  output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: ['pg']
  },
  turbopack: {
    root: workspaceRoot
  }
};

export default nextConfig;

