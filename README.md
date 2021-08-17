# Express Import Routes

[![Build status](https://img.shields.io/travis/tylerhaun/express-express-import-routes/master.svg?style=flat-square)](https://travis-ci.org/tylerhaun/express-import-rotues)

Import express routes from file system structure for easy scalability

### USE

```

const importRoutes = require("express-import-routes");


const app = express();

const rootPath = path.join(__dirname, "routes");
importRoutes(app, rootPath);

```


```

.
├── index.js
└── routes
    ├── users.js
    ├── cart.js
    ├── payments.js
    └── files.js

```


Reads files from rootPath and calls the module.exports with routeName and app.  routeName argument is read from name of file

```

module.exports = function(routeName, app) {

  app.route(`/${routeName}`)
    .get(function(request, response, next) {
      //...
      return response.json({success: true})
    })
    .post(function(request, response, next) {
      //...
      return response.json({success: true})
    })

  app.route(`/${routeName}/:id`)
    .get(function(request, response, next) {
      //...
      return response.json({success: true})
    })
    .put(function(request, response, next) {
      //...
      return response.json({success: true})
    })
    .delete(function(request, response, next) {
      //...
      return response.json({success: true})
    })

}


```
