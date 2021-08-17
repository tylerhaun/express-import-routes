
module.exports = function(routeName, app) {

  app.route(`/${routeName}`)
    .post(function(request, response, next) {
      return response.json({success: true})
    })
  app.route(`/${routeName}/:id`)
    .get(function(request, response, next) {
      return response.json({success: true})
    })

}


