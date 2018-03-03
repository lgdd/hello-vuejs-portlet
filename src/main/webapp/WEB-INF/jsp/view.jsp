<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>

<portlet:defineObjects/>
<portlet:resourceURL var="saveMessageURL"/>

<div id="hello-vuejs" style="display: none;">
    <p>Hello, <strong>{{ message }}</strong>!</p>
    <label for="message">
        <input id="message" type="text" v-model="message">
    </label>
    <div class="alert alert-success" v-if="success">
        {{ successMessage }}
    </div>
    <div class="alert alert-danger" v-if="error">
        {{ errorMessage }}
    </div>
</div>

<script>
  requirejs(["app/portlet"], function (Portlet) {
    Portlet.setNamespace("<portlet:namespace/>");
    Portlet.setAttribute("message", "${message}");
    Portlet.setAction("saveMessage", "${saveMessageURL}");
  });
</script>
