const fs = require("fs");
const path = require("path");


function importRoutes(app, root) {

  var handlers = [];
  const fullRoot = path.resolve(root);

  var files = fs.readdirSync(fullRoot)

  files = files
    .filter(file => file.endsWith(".js"))
    .filter(file => file != "index.js")

  const fsHandlers = files.map(file => {
    const requirePath = `${root}/${file}`;
    const fullRequirePath = path.resolve(requirePath);
    const ret = {
      fn: require(fullRequirePath),
      routeName: path.parse(file).name,
    };
    return ret;
  })
  handlers = handlers.concat(fsHandlers);

  handlers.forEach(handler => {
    handler.fn(handler.routeName, app);
  })

}

module.exports = importRoutes;
