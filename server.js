// Serve local files on localhost:3000
require("connect")()
  .use(require("morgan")("dev"))
  .use(require("serve-static")(`${__dirname}/app`))
  .listen(3000)

// Watch for changes for live reload
require("livereload")
  .createServer()
  .watch(`${__dirname}/app`)
