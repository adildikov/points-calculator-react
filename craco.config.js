const path = require("path");

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@assets': resolvePath('./src/assets'),
      '@images': resolvePath('./src/assets/images'),
      '@styles': resolvePath('./src/styles'),
      '@hooks': resolvePath('./src/hooks'),
      '@utils': resolvePath('./src/utils'),
      '@models': resolvePath('./src/models'),
      '@pages': resolvePath('./src/pages'),
      '@api': resolvePath('./src/api'),
    },
  },
};