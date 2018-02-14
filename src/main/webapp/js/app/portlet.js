define(function () {
  var _namespace,
    _attributes = [],
    _actions = [];
  return {
    setNamespace: function (namespace) {
      _namespace = namespace;
    },
    getNamespace: function () {
      return _namespace;
    },
    setAttribute: function (name, value) {
      _attributes[name] = value;
    },
    getAttribute: function (name) {
      return _attributes[name];
    },
    setAction: function (name, url) {
      _actions[name] = url;
    },
    getAction: function (name) {
      return _actions[name];
    }
  }
});