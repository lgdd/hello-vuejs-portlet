define(["app/portlet", "lodash", "axios", "vue"], function (Portlet, _, axios, Vue) {
  var _portletNamespace = Portlet.getNamespace();
  new Vue({
    el: "#hello-vuejs",
    data: {
      message: Portlet.getAttribute("message"),
      success: false,
      error: false,
      successMessage: "Message has been saved :)",
      errorMessage: "Something went wrong :("
    },
    mounted: function () {
      this.$el.style.display = 'block';
    },
    watch: {
      message: function () {
        this.success = false;
        this.error = false;
        this.saveMessage();
      }
    },
    methods: {
      saveMessage: _.debounce(function () {
        var vm = this;
        vm.saving = true;
        var url = Portlet.getAction('saveMessage') + "&"
                  + _portletNamespace + "message=" + vm.message;
        axios.post(url)
          .then(function (response) {
            if (response.status === 200) {
              vm.success = true;
              vm.error = false;
            }
          })
          .catch(function (error) {
            vm.error = true;
            vm.success = false;
            vm.errorMessage = error.data !== "" ? error.data : vm.errorMessage;
          });
      }, 500)
    }
  })
});
