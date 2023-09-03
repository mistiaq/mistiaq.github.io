/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

export default nextConfig

// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.node/,
//       use: 'raw-loader',
//     });

//     return config;
//   },
// }
