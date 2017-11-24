const path = require("path")

// Serve local files on localhost:3000
require("connect")()
  .use(require("morgan")("dev"))
  .use("/styles", require("postcss-middleware")({
    plugins: [require("postcss-cssnext")({
      //
    })],
    src(req) {
      return `src/${req.url}`
    }
  }))
  .use(require("serve-static")(`${__dirname}/app`))
  .listen(3000)

// Watch for changes for live reload
require("livereload")
  .createServer({
    applyCSSLive: false
  })
  .watch([`${__dirname}/app`, `${__dirname}/src`])
