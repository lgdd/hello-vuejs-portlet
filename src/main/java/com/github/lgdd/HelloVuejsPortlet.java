package com.github.lgdd;

import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.ParamUtil;
import com.liferay.portal.util.PortalUtil;
import com.liferay.util.bridges.mvc.MVCPortlet;

import lombok.extern.slf4j.Slf4j;

import javax.portlet.*;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;

@Slf4j
public class HelloVuejsPortlet extends MVCPortlet {

    @Override
    public void doView(RenderRequest renderRequest, RenderResponse renderResponse)
            throws IOException, PortletException {
        String message = GetterUtil.getString(
                renderRequest.getPortletSession().getAttribute("message"), "world");
        log.debug("message={}", message);
        renderRequest.setAttribute("message", message);
        super.doView(renderRequest, renderResponse);
    }

    @Override
    public void serveResource(ResourceRequest resourceRequest, ResourceResponse resourceResponse)
            throws IOException {
        String message = ParamUtil.getString(resourceRequest, "message", "world");
        log.debug("message={}", message);
        if ("".equals(message)) {
            HttpServletResponse httpServletResponse = PortalUtil.getHttpServletResponse(resourceResponse);
            httpServletResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resourceResponse.getWriter().print("Message shouldn't be empty :(");
        } else {
            resourceRequest.getPortletSession().setAttribute("message", message);
        }
    }
}
