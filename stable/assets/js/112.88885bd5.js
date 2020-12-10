(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{403:function(e,t,a){"use strict";a.r(t);var s=a(3),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"advanced-gateway-features-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-gateway-features-configuration"}},[e._v("#")]),e._v(" Advanced Gateway features configuration")]),e._v(" "),a("p",[e._v("As a system programmer who wants to configure advanced Gateway features of the API Mediation Layer, set the following parameters by modifying either of the following files:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("<Zowe install directory>/components/api-mediation/bin/start.sh")])]),e._v(" "),a("li",[a("code",[e._v("<Zowe instance directory>/instance.env")])])]),e._v(" "),a("p",[e._v("The parameters begin with the "),a("code",[e._v("-D")]),e._v(" prefix, similar to all the other parameters in the file.")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" Restart Zowe to apply changes to the parameter.")]),e._v(" "),a("p",[e._v("Refer to the particular section in this table fo contents for specific instructions.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#prefer-ip-address-for-api-layer-services"}},[e._v("Prefer IP Address for API Layer services")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#saf-as-an-authentication-provider"}},[e._v("SAF as an Authentication provider")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#gateway-retry-policy"}},[e._v("Gateway retry policy")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#gateway-timeouts"}},[e._v("Gateway timeouts")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#cors-handling"}},[e._v("Cors handling")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#encoded-slashes"}},[e._v("Encoded slashes")])])]),e._v(" "),a("h2",{attrs:{id:"prefer-ip-address-for-api-layer-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prefer-ip-address-for-api-layer-services"}},[e._v("#")]),e._v(" Prefer IP Address for API Layer services")]),e._v(" "),a("p",[e._v("API Mediation Layer services use the hostname when communicating with each other. This behavior can be changed so that the IP address is used instead.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[e._v("Open the "),a("code",[e._v("<Zowe instance directory>/instance.env")]),e._v(" configuration file.")]),e._v(" "),a("li",[e._v("Find the property "),a("code",[e._v("APIML_PREFER_IP_ADDRESS")]),e._v(" and set the value to "),a("code",[e._v("true")]),e._v(".")]),e._v(" "),a("li",[e._v("Restart Zowe&trade.")])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" Changing the value of this property might introduce problems with certificates. The IP Address needs to be present on the certificate SAN name.")]),e._v(" "),a("h2",{attrs:{id:"saf-as-an-authentication-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#saf-as-an-authentication-provider"}},[e._v("#")]),e._v(" SAF as an Authentication provider")]),e._v(" "),a("p",[e._v("By default, the API Gateway uses z/OSMF as an authentication provider. It is possible to switch to SAF as the authentication\nprovider instead of z/OSMF. The intended usage of SAF as an authentication provider is for systems without z/OSMF.\nIf SAF is used and the z/OSMF is available on the system, the created tokens are not accepted by z/OSMF. Use\nthe following procedure to switch to SAF.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[e._v("Open the "),a("code",[e._v("<Zowe instance directory>/instance.env")]),e._v(" configuration file.")]),e._v(" "),a("li",[e._v("Find the property "),a("code",[e._v("APIML_SECURITY_AUTH_PROVIDER")]),e._v(" and set the value to "),a("code",[e._v("saf")]),e._v(".")]),e._v(" "),a("li",[e._v("Restart Zowe&trade.")])]),e._v(" "),a("p",[e._v("Authentication requests now utilize SAF as the authentication provider. API ML can run without z/OSMF present on the system.")]),e._v(" "),a("h2",{attrs:{id:"gateway-retry-policy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gateway-retry-policy"}},[e._v("#")]),e._v(" Gateway retry policy")]),e._v(" "),a("p",[e._v("Edit properties in the "),a("code",[e._v("<Zowe install directory>/components/api-mediation/bin/start.sh")]),e._v(" file:")]),e._v(" "),a("p",[e._v("In default configuration, retry for all requests is disabled, with one exception: the server retries "),a("code",[e._v("GET")]),e._v(" requests that finish with status code "),a("code",[e._v("503")]),e._v(".\nTo change this default configuration, include the following parameters:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("ribbon.retryableStatusCodes")])]),e._v(" "),a("p",[e._v("Provides a list of status codes, for which the server should retry the request.")]),e._v(" "),a("p",[a("strong",[e._v("Example:")]),e._v(" "),a("code",[e._v('-Dribbon.retryableStatusCodes="503, 404"')])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("ribbon.OkToRetryOnAllOperations")])]),e._v(" "),a("p",[e._v("Specifies whether all operations can be retried for this service. The default value is "),a("code",[e._v("false")]),e._v(". In this case, only "),a("code",[e._v("GET")]),e._v(" requests are retried if they return a response code that is listed in "),a("code",[e._v("ribbon.retryableStatusCodes")]),e._v(". Setting this parameter to "),a("code",[e._v("true")]),e._v(" enables retry requests for all methods which return a response code listed in "),a("code",[e._v("ribbon.retryableStatusCodes")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" Enabling retry can impact server resources due to request body buffering.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("ribbon.MaxAutoRetries")])]),e._v(" "),a("p",[e._v("Specifies the number of times a failed request is retried on the same server. This number is multiplied with "),a("code",[e._v("ribbon.MaxAutoRetriesNextServer")]),e._v(". The default value is "),a("code",[e._v("0")]),e._v(".")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("ribbon.MaxAutoRetriesNextServer")])]),e._v(" "),a("p",[e._v("Specfies the number of additional servers that attempt to make the request. This number excleds the first server. The default value is "),a("code",[e._v("5")]),e._v(".")])])]),e._v(" "),a("h2",{attrs:{id:"gateway-timeouts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gateway-timeouts"}},[e._v("#")]),e._v(" Gateway timeouts")]),e._v(" "),a("p",[e._v("Change the global timeout value for the API Layer instance:")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[e._v("Open the file "),a("code",[e._v("<Zowe instance directory>/instance.env")]),e._v(".")]),e._v(" "),a("li",[e._v("Find the property "),a("code",[e._v("APIML_GATEWAY_TIMEOUT_MILLIS")]),e._v(" and set the value to the desired value.")]),e._v(" "),a("li",[e._v("Restart Zowe&trade.")])]),e._v(" "),a("p",[e._v("If you require finer control, you can edit the "),a("code",[e._v("<Zowe install directory>/components/api-mediation/bin/start.sh")]),e._v(", and modify the following properties:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("apiml.gateway.timeoutMillis")])]),e._v(" "),a("p",[e._v("This property defines the global value for http/ws client timeout.")])])]),e._v(" "),a("p",[e._v("Add the following properties to the file for API Gateway:")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" Ribbon configures the client that connects to the routed services.")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("ribbon.connectTimeout")])]),e._v(" "),a("p",[e._v("Specifies the value in milliseconds which corresponds to the period in which API ML should establish a single, non-managed connection with the service. If omitted, the default value specified in the API ML Gateway service configuration is used.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("ribbon.readTimeout")])]),e._v(" "),a("p",[e._v("Specifies the time in milliseconds of inactivity between two packets in response from this service to API ML. If omitted, the default value specified in the API ML Gateway service configuration is used.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("ribbon.connectionManagerTimeout")])]),e._v(" "),a("p",[e._v("The HttpClient employs a special entity to manage access to HTTP connections called by the HTTP connection manager. The purpose of an HTTP connection manager is to serve as a factory for new HTTP connections, to manage the life cycle of persistent connections, and to synchronize access to persistent connections. Internally, the connections that are managed serve as proxies for real connections. "),a("code",[e._v("ConnectionManagerTimeout")]),e._v(" specifies a period during which managed connections with API ML should be established. The value is in milliseconds. If omitted, the default value specified in the API ML Gateway service configuration is used.")])])]),e._v(" "),a("h2",{attrs:{id:"cors-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors-handling"}},[e._v("#")]),e._v(" Cors handling")]),e._v(" "),a("p",[e._v("By default, CORS are disabled in the API Gateway for the Gateway routes "),a("code",[e._v("api/v1/gateway/**")]),e._v(". Allowing CORS in the Gateway is necessary to enable CORS at the service level. Use the following procedure to enable CORS.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[e._v("Open the file "),a("code",[e._v("<Zowe instance directory>/instance.env")]),e._v(".")]),e._v(" "),a("li",[e._v("Find the property "),a("code",[e._v("APIML_CORS_ENABLED")]),e._v(" and set the value to "),a("code",[e._v("true")]),e._v(".")]),e._v(" "),a("li",[e._v("Restart Zowe&trade.")])]),e._v(" "),a("p",[e._v("Requests through the Gateway now contain a CORS header.")]),e._v(" "),a("h2",{attrs:{id:"encoded-slashes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encoded-slashes"}},[e._v("#")]),e._v(" Encoded slashes")]),e._v(" "),a("p",[e._v("By default, the API Mediation Layer accepts encoded slashes in the URL path of the request. If you are onboarding applications which expose endpoints that expect encoded slashes you must keep the default configuration. We recommend that you change the property to "),a("code",[e._v("false")]),e._v(" if you do not expect the applications to use the encoded slashes.")]),e._v(" "),a("p",[e._v("Use the following procedure to reject encoded slashes.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[e._v("Open the file "),a("code",[e._v("<Zowe instance directory>/instance.env")]),e._v(".")]),e._v(" "),a("li",[e._v("Find the property "),a("code",[e._v("APIML_ALLOW_ENCODED_SLASHES")]),e._v(" and set the value to "),a("code",[e._v("false")]),e._v(".")]),e._v(" "),a("li",[e._v("Restart Zowe&trade.")])]),e._v(" "),a("p",[e._v("Requests with encoded slashes are now rejected by the API Mediation Layer.")])])}),[],!1,null,null,null);t.default=i.exports}}]);