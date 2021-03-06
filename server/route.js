Route = function(router, path, options) {
  options = options || {};

  this.path = path;
  this.action = options.action || Function.prototype;
  this.subscriptions = options.subscriptions || Function.prototype;
  this._subsMap = {};
}


Route.prototype.subscribe = function(name, sub, options) {
  var options = _.extend({server: true}, options);
  if(options.server) {
    this._subsMap[name] = sub;
  }
}


Route.prototype.subscription = function(name) {
  return this._subsMap[name];
}


Route.prototype.middleware = function(middleware) {
  // TODO
}
