requirejs.config({
  baseUrl: '/hello-vuejs-portlet/js/lib',
  paths: {
    app: '/hello-vuejs-portlet/js/app'
  }
});

requirejs(["app/main"]);
