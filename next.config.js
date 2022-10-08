module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['tokens.1inch.io']
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^electron$/
      })
    )
    return config
  }
}
