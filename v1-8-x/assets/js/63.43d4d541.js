(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{383:function(e,t,n){"use strict";n.r(t);var i=n(3),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"zowe-desktop-and-window-management"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zowe-desktop-and-window-management"}},[e._v("#")]),e._v(" Zowe Desktop and window management")]),e._v(" "),n("p",[e._v("The Zowe™ Desktop is a web component of Zowe, which is an implementation of "),n("code",[e._v("MVDWindowManagement")]),e._v(", the interface that is used to create a window manager.")]),e._v(" "),n("p",[e._v("The code for this software is in the "),n("code",[e._v("zlux-app-manager")]),e._v(" repository.")]),e._v(" "),n("p",[e._v("The interface for building an alternative window manager is in the "),n("code",[e._v("zlux-platform")]),e._v(" repository.")]),e._v(" "),n("p",[e._v('Window Management acts upon Windows, which are visualizations of an instance of an application plug-in. Application plug-ins are plug-ins of the type "application", and therefore the Zowe Desktop operates around a collection of plug-ins.')]),e._v(" "),n("p",[n("strong",[e._v("Note:")]),e._v(" Other objects and frameworks that can be utilized by application plug-ins, but not related to window management, such as application-to-application communication, Logging, URI lookup, and Auth are not described here.")]),e._v(" "),n("h2",{attrs:{id:"loading-and-presenting-application-plug-ins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#loading-and-presenting-application-plug-ins"}},[e._v("#")]),e._v(" Loading and presenting application plug-ins")]),e._v(" "),n("p",[e._v("Upon loading the Zowe Desktop, a GET call is made to "),n("code",[e._v("/plugins?type=application")]),e._v(".\nThe GET call returns a JSON list of all application plug-ins that are on the server, which can be accessed by the user. Application plug-ins can be composed of dataservices, web content, or both. Application plug-ins that have web content are presented in the Zowe Desktop UI.")]),e._v(" "),n("p",[e._v("The Zowe Desktop has a taskbar at the bottom of the page, where it displays each application plug-in as an icon with a description. The icon that is used, and the description that is presented are based on the application plug-in's "),n("code",[e._v("PluginDefinition")]),e._v("'s "),n("code",[e._v("webContent")]),e._v(" attributes.")]),e._v(" "),n("h2",{attrs:{id:"plug-in-management"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plug-in-management"}},[e._v("#")]),e._v(" Plug-in management")]),e._v(" "),n("p",[e._v("Application plug-ins can gain insight into the environment in which they were spawned through the Plugin Manager. Use the Plugin Manager to determine whether a plug-in is present before you act upon the existence of that plug-in. When the Zowe Desktop is running, you can access the Plugin Manager through "),n("code",[e._v("ZoweZLUX.PluginManager")])]),e._v(" "),n("p",[e._v("The following are the functions you can use on the Plugin Manager:")]),e._v(" "),n("ul",[n("li",[e._v("getPlugin(pluginID: string)\n"),n("ul",[n("li",[e._v("Accepts a string of a unique plug-in ID, and returns the Plugin Definition Object (DesktopPluginDefinition) that is associated with it, if found.")])])])]),e._v(" "),n("h2",{attrs:{id:"application-management"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#application-management"}},[e._v("#")]),e._v(" Application management")]),e._v(" "),n("p",[e._v("Application plug-ins within a Window Manager are created and acted upon in part by an Application Manager. The Application Manager can facilitate communication between application plug-ins, but formal application-to-application communication should be performed by calls to the Dispatcher. The Application Manager is not normally directly accessible by application plug-ins, instead used by the Window Manager.")]),e._v(" "),n("p",[e._v("The following are functions of an Application Manager:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Function")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[n("code",[e._v("spawnApplication(plugin: DesktopPluginDefinition, launchMetadata: any): Promise<MVDHosting.InstanceId>;")])]),e._v(" "),n("td",[e._v("Opens an application instance into the Window Manager, with or without context on what actions it should perform after creation.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("killApplication(plugin:ZLUX.Plugin, appId:MVDHosting.InstanceId): void;")])]),e._v(" "),n("td",[e._v("Removes an application instance from the Window Manager.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("showApplicationWindow(plugin: DesktopPluginDefinitionImpl): void;")])]),e._v(" "),n("td",[e._v("Makes an open application instance visible within the Window Manager.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("isApplicationRunning(plugin: DesktopPluginDefinitionImpl): boolean;")])]),e._v(" "),n("td",[e._v("Determines if any instances of the application are open in the Window Manager.")])])])]),e._v(" "),n("h2",{attrs:{id:"windows-and-viewports"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-and-viewports"}},[e._v("#")]),e._v(" Windows and Viewports")]),e._v(" "),n("p",[e._v("When a user clicks an application plug-in's icon on the taskbar, an instance of the application plug-in is started and presented within a Viewport, which is encapsulated in a Window within the Zowe Desktop.\nEvery instance of an application plug-in's web content within Zowe is given context and can listen on events about the Viewport and Window it exists within, regardless of whether the Window Manager implementation utilizes these constructs visually. It is possible to create a Window Manager that only displays one application plug-in at a time, or to have a drawer-and-panel UI rather than a true windowed UI.")]),e._v(" "),n("p",[e._v("When the Window is created, the application plug-in's web content is encapsulated dependent upon its framework type. The following are valid framework types:")]),e._v(" "),n("ul",[n("li",[n("em",[e._v('"angular2"')]),e._v(": The web content is written in Angular, and packaged with Webpack. Application plug-in framework objects are given through @injectables and imports.")]),e._v(" "),n("li",[n("em",[e._v('"iframe"')]),e._v(": The web content can be written using any framework, but is included through an iframe tag. Application plug-ins within an iframe can access framework objects through "),n("em",[e._v("parent.RocketMVD")]),e._v(" and callbacks.")])]),e._v(" "),n("p",[e._v("In the case of the Zowe Desktop, this framework-specific wrapping is handled by the Plugin Manager.")]),e._v(" "),n("h2",{attrs:{id:"viewport-manager"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#viewport-manager"}},[e._v("#")]),e._v(" Viewport Manager")]),e._v(" "),n("p",[e._v("Viewports encapsulate an instance of an application plug-in's web content, but otherwise do not add to the UI (they do not present Chrome as a Window does).\nEach instance of an application plug-in is associated with a viewport, and operations to act upon a particular application plug-in instance should be done by specifying a viewport for an application plug-in, to differentiate which instance is the target of an action. Actions performed against viewports should be performed through the Viewport Manager.")]),e._v(" "),n("p",[e._v("The following are functions of the Viewport Manager:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Function")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[n("code",[e._v("createViewport(providers: ResolvedReflectiveProvider[]): MVDHosting.ViewportId;")])]),e._v(" "),n("td",[e._v("Creates a viewport into which an application plug-in's webcontent can be embedded.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("registerViewport(viewportId: MVDHosting.ViewportId, instanceId: MVDHosting.InstanceId): void;")])]),e._v(" "),n("td",[e._v("Registers a previously created viewport to an application plug-in instance.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("destroyViewport(viewportId: MVDHosting.ViewportId): void;")])]),e._v(" "),n("td",[e._v("Removes a viewport from the Window Manager.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("getApplicationInstanceId(viewportId: MVDHosting.ViewportId): MVDHosting.InstanceId | null;")])]),e._v(" "),n("td",[e._v("Returns the ID of an application plug-in's instance from within a viewport within the Window Manager.")])])])]),e._v(" "),n("h2",{attrs:{id:"injection-manager"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#injection-manager"}},[e._v("#")]),e._v(" Injection Manager")]),e._v(" "),n("p",[e._v("When you create Angular application plug-ins, they can use injectables to be informed of when an action occurs. iframe application plug-ins indirectly benefit from some of these hooks due to the wrapper acting upon them, but Angular application plug-ins have direct access.")]),e._v(" "),n("p",[e._v("The following topics describe injectables that application plug-ins can use.")]),e._v(" "),n("h3",{attrs:{id:"plug-in-definition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plug-in-definition"}},[e._v("#")]),e._v(" Plug-in definition")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Inject(Angular2InjectionTokens.PLUGIN_DEFINITION) private pluginDefinition: ZLUX.ContainerPluginDefinition\n")])])]),n("p",[e._v("Provides the plug-in definition that is associated with this application plug-in. This injectable can be used to gain context about the application plug-in. It can also be used by the application plug-in with other application plug-in framework objects to perform a contextual action.")]),e._v(" "),n("h3",{attrs:{id:"logger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#logger"}},[e._v("#")]),e._v(" Logger")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Inject(Angular2InjectionTokens.LOGGER) private logger: ZLUX.ComponentLogger\n")])])]),n("p",[e._v("Provides a logger that is named after the application plug-in's plugin definition ID.")]),e._v(" "),n("h3",{attrs:{id:"launch-metadata"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#launch-metadata"}},[e._v("#")]),e._v(" Launch Metadata")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Inject(Angular2InjectionTokens.LAUNCH_METADATA) private launchMetadata: any\n")])])]),n("p",[e._v("If present, this variable requests the application plug-in instance to initialize with some context, rather than the default view.")]),e._v(" "),n("h3",{attrs:{id:"viewport-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#viewport-events"}},[e._v("#")]),e._v(" Viewport Events")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Inject(Angular2InjectionTokens.VIEWPORT_EVENTS) private viewportEvents: Angular2PluginViewportEvents\n")])])]),n("p",[e._v("Presents hooks that can be subscribed to for event listening. Events include:")]),e._v(" "),n("p",[n("code",[e._v("resized: Subject<{width: number, height: number}>")])]),e._v(" "),n("p",[e._v("Fires when the viewport's size has changed.")]),e._v(" "),n("h3",{attrs:{id:"window-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#window-events"}},[e._v("#")]),e._v(" Window Events")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Inject(Angular2InjectionTokens.WINDOW_ACTIONS) private windowActions: Angular2PluginWindowActions\n")])])]),n("p",[e._v("Presents hooks that can be subscribed to for event listening. The events include:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Event")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[n("code",[e._v("maximized: Subject<void>")])]),e._v(" "),n("td",[e._v("Fires when the Window is maximized.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("minimized: Subject<void>")])]),e._v(" "),n("td",[e._v("Fires when the Window is minimized.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("restored: Subject<void>")])]),e._v(" "),n("td",[e._v("Fires when the Window is restored from a minimized state.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("moved: Subject<{top: number, left: number}>")])]),e._v(" "),n("td",[e._v("Fires when the Window is moved.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("resized: Subject<{width: number, height: number}>")])]),e._v(" "),n("td",[e._v("Fires when the Window is resized.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("titleChanged: Subject<string>")])]),e._v(" "),n("td",[e._v("Fires when the Window's title changes.")])])])]),e._v(" "),n("h3",{attrs:{id:"window-actions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#window-actions"}},[e._v("#")]),e._v(" Window Actions")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Inject(Angular2InjectionTokens.WINDOW_ACTIONS) private windowActions: Angular2PluginWindowActions\n")])])]),n("p",[e._v("An application plug-in can request actions to be performed on the Window through the following:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Item")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[n("code",[e._v("close(): void")])]),e._v(" "),n("td",[e._v("Closes the Window of the application plug-in instance.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("maximize(): void")])]),e._v(" "),n("td",[e._v("Maximizes the Window of the application plug-in instance.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("minimize(): void")])]),e._v(" "),n("td",[e._v("Minimizes the Window of the application plug-in instance.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("restore(): void")])]),e._v(" "),n("td",[e._v("Restores the Window of the application plug-in instance from a minimized state.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("setTitle(title: string):void")])]),e._v(" "),n("td",[e._v("Sets the title of the Window.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("setPosition(pos: {top: number, left: number, width: number, height: number}): void")])]),e._v(" "),n("td",[e._v("Sets the position of the Window on the page and the size of the window.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("spawnContextMenu(xPos: number, yPos: number, items: ContextMenuItem[]): void")])]),e._v(" "),n("td",[e._v("Opens a context menu on the application plug-in instance, which uses the Context Menu framework.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("registerCloseHandler(handler: () => Promise<void>): void")])]),e._v(" "),n("td",[e._v("Registers a handler, which is called when the Window and application plug-in instance are closed.")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);