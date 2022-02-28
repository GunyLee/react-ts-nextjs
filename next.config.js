const debug = process.env.NODE_ENV !== 'production'
const name = 'https://gunylee.github.io/react-ts-nextjs/'

module.exports = {
  assetPrefix: !debug ? `/${name}/` : '',
}