# Express Import Routes

[![Build status](https://img.shields.io/travis/tylerhaun/express-express-import-routes/master.svg?style=flat-square)](https://travis-ci.org/tylerhaun/express-import-routes)

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
    ├── shopping-carts.js
    ├── payments.js
    └── files.js

```


Reads files from rootPath and calls the module.exports with routeName and app.  routeName argument is read from name of file
eg. users.js

```
const db = require("./database");

module.exports = function(routeName, app) {

  app.route(`/${routeName}`)
    .get(function(request, response, next) {
      const user = db.user.find(request.query)
      return response.json({user})
    })
    .post(function(request, response, next) {
      const user = db.user.create(request.body)
      return response.json({user})
    })

  app.route(`/${routeName}/:id`)
    .get(function(request, response, next) {
      const user = db.user.find({id: request.params})
      return response.json({user})
    })
    .put(function(request, response, next) {
      const user = db.user.update({id: request.params}, request.body)
      return response.json({user})
    })
    .delete(function(request, response, next) {
      const result = db.user.delete({id: request.params})
      return response.json({result})
    })

}


```
