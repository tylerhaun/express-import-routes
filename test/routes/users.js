
module.exports = function(routeName, app) {

  app.route(`/${routeName}`)
    .get(function(request, response, next) {
      return response.json({success: true})
    })

}


