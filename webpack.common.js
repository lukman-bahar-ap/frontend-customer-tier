const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

const plugins = [];
if (!devMode) {
  // enable in production only
  plugins.push(new MiniCssExtractPlugin());
}

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
      favicon: './src/public/icons/favicon.ico',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/public/images',
          to: 'img/',
        },
      ],
    }),
    // new WebpackPwaManifest({
    //   name: 'DIGINAS',
    //   short_name: 'DIGINAS',
    //   description: 'Diginas - MTsN 2 Jember',
    //   background_color: '#118329',
    //   theme_color: '#118329',
    //   display: 'standalone',
    //   filename: 'manifest.json',
    //   start_url: '/index.html',
    //   crossorigin: null,
    //   fingerprints: false,
    //   icons: [
    //     {
    //       src: path.resolve('src/public/icons/icon-192x192.png'),
    //       size: [72, 96, 128, 144, 152, 192],
    //     },
    //     {
    //       src: path.resolve('src/public/icons/icon-384x384.png'),
    //       size: [256, 384],
    //       purpose: 'any maskable',
    //     },
    //     {
    //       src: path.resolve('src/public/icons/icon-512x512.png'),
    //       size: '512x512',
    //       purpose: 'maskable',
    //     },
    //   ],
    // }),
    // new GenerateSW({
    //   skipWaiting: true,
    //   clientsClaim: true,
    //   ignoreURLParametersMatching: [/.*/],
    //   cacheId: 'diginas-mtsn2jbr-v2',
    //   // Define runtime caching rules.
    //   runtimeCaching: [
    //     {
    //     // Match any request that ends with .png, .jpg, .jpeg or .svg.
    //       urlPattern: (request) => request.destination === 'image',
    //       // Apply a cache-first strategy.
    //       handler: 'CacheFirst',
    //       options: {
    //       // Use a custom cache name.
    //         cacheName: 'images',
    //         // Only cache 30 images.
    //         expiration: {
    //           maxEntries: 30,
    //           maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
    //         },
    //       },
    //     },
    //     // {
    //     //   urlPattern: /^https:\/\/mtsn2jember-diginas\.com\/(?:(api-apps|search|detail))/,
    //     //   // Apply a cache-first strategy.
    //     //   handler: 'NetworkFirst',
    //     //   options: {
    //     //     // Use a custom cache name.
    //     //     cacheName: 'diginas-api',
    //     //     expiration: {
    //     //       maxAgeSeconds: 24 * 60 * 60 * 365,
    //     //     },
    //     //   },
    //     // },
    //     {
    //       urlPattern: /.*https:\/\/mtsn2jember-diginas\.com/,
    //       // Apply a cache-first strategy.
    //       handler: 'NetworkFirst',
    //       options: {
    //       // Use a custom cache name.
    //         cacheName: 'diginas-mts2jbr-api',
    //         expiration: {
    //           maxAgeSeconds: 24 * 60 * 60 * 14, // 14 days
    //         },
    //       },
    //     },
    //     {
    //       urlPattern: /.*(?:googleapis|gstatic)\.com/,
    //       // Apply a cache-first strategy.
    //       handler: 'CacheFirst',
    //       options: {
    //       // Use a custom cache name.
    //         cacheName: 'google-fonts-stylesheets',
    //         expiration: {
    //           maxAgeSeconds: 24 * 60 * 60 * 120, // 120 Days
    //           maxEntries: 100,
    //         },
    //       },
    //     }],
    //   cleanupOutdatedCaches: true,
    // }),
    // new ImageminWebpackPlugin({
    //   plugins: [
    //     ImageminMozjpeg({
    //       quality: 50,
    //       progressive: true,
    //     }),
    //     imageminPngquant({
    //       quality: [0.3, 0.5],
    //     }),
    //   ],
    // }),
    // new ImageminWebpWebpackPlugin({
    //   config: [
    //     {
    //       test: /hero\.jpg|icon-192x192\.png/,
    //       options: {
    //         quality: 50,
    //       },
    //     },
    //   ],
    //   overrideExtension: true,
    // }),
    // new BundleAnalyzerPlugin(),
  ],
};
