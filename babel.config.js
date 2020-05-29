module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-glob',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@components': './src/app/components',
          '@config': './src/config',
          '@constants': './src/constants',
          '@screens': './src/app/screens',
          '@services': './src/services',
          '@redux': './src/redux',
          '@utils': './src/utils',
          '@assets': './assets',
          '@naturaDesign': './natura-design',
          '@models': './src/app/models'
        }
      }
    ]
  ]
};