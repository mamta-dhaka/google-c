(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAYAAAB3j6rJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHPSURBVHgBtZjtccIwDIaVXv/DCO4EpRvQCZoNYAPYIGwAG8AI3SDdoO0EphOETuBK5PXh0pD687nTcQRZfrEVyUlFERhjpvxRs83YJmwKP53Yvtje2D6qqjpSCVjAnK01Fzo2jWti77hmkWsLysWVAJloI9dG/GdsK4g0+EwTxAGalGA8ZukI2lIMPHCPADvkRTRYRYPt848l6jFwQ5ngWGsrxndAk1uEE3vptU3soOC4p0Jgq81YwhPuDi2CqCCYQ485yD7WFBZ0GprMKAnGZK4zu5hVxOq3lAvklQ4V49zSSaUhWQwqsLCknESKkZaxu6OMoNs+42vrKUY6trpn5xX1LT03CmKeWOBpxO/INpEV+aaC/COiHEjAzjdP0ARfKSehIjDm3N0pF5EibHV9oRzEiMA42/zUYFAKJKHE68ESj+YlbKgw5nIuWdxyaLHMigqBP3yuwGNOCkLydcW/c2xv5saVoz1bxp26x2M3QdvvtOiGMuGICKsbjpg2JWeQE3vEOlAM2KYO1gTWiSnG2MfQNaWABD4gWId/Vw+JwuQ1akvnrGhwffIRpM1vNMx9ALeC5z6xK4oEEzyyPVD/akKQI4XUhk/qX0t4HwF+AIsPBDVS/eh8AAAAAElFTkSuQmCC"},32:function(e,t,a){e.exports=a(64)},33:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(1),o=(a(33),a(0)),c=a.n(o),i=a(29),r=a.n(i),s=a(8),l=a(9),p=a(11),u=a(10),d=a(7),m=a(30),h=a.n(m),f=a(14),g=a.n(f),v=(a(56),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).responseGoogle=function(t){if(void 0===t.error){localStorage.setItem("accessToken",t.accessToken),localStorage.setItem("profileObj",t.profileObj);var a={profileObj:t.profileObj,accessToken:t.accessToken,tokenObj:t.tokenObj};console.log("data",a),g.a.post("https://intense-mesa-47903.herokuapp.com/api/auth/authenticate-user",a,{headers:{"content-type":"application/json"}}).then((function(t){void 0===t.error?e.props.history.push({pathname:"/contacts",state:[{data:a}]}):alert("error occured in api",t.error)})).catch((function(e){}))}else alert("error occured",t.error)},e}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{style:{flex:1}},c.a.createElement("div",{style:{margin:.2*window.outerHeight}}),c.a.createElement("div",{style:{flex:1,justifyContent:"center",display:"flex"}},c.a.createElement(h.a,{clientId:"777570114264-v3lmk0ljmlqjp5ov6ercu8pb07e1naca.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin",approvalPrompt:"force",prompt:"consent",scope:"email profile https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/contacts.readonly openid"})))}}]),a}(o.Component)),A=Object(n.f)(v),E=function(){return c.a.createElement("div",null)},b=(a(63),a(18)),j=a.n(b),w=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleLogout=function(){localStorage.setItem("accessToken",null),localStorage.setItem("profileObj",null),n.props.history.push({pathname:"/"})},n.state={profileObj:e.profileObj||localStorage.getItem("profileObj")},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,this.state.profileObj?c.a.createElement("div",null,c.a.createElement("div",{style:{position:"absolute",width:window.outerWidth,height:.075*window.outerHeight,left:"0px",top:"0px",background:"blue",flex:1,display:"flex",justifyContent:"flex-start"}},c.a.createElement("div",{className:"contact-avatar",style:{margin:"10px",backgroundImage:"url(".concat(this.state.profileObj.imageUrl,")")}}),c.a.createElement("div",{style:{color:"white",fontFamily:"sans-serif",textAlign:"center",paddingTop:"20px"}},c.a.createElement("div",{style:{padding:"2px"}}," ",this.state.profileObj.name," "),c.a.createElement("div",{style:{padding:"2px"}},this.state.profileObj.email))),c.a.createElement("div",{onClick:function(){return e.handleLogout()},style:{position:"absolute",right:"5.44%"}},c.a.createElement("img",{src:j.a}))):c.a.createElement("div",{onClick:function(){return e.handleLogout()},style:{position:"absolute",right:"5.44%"}},c.a.createElement("img",{src:j.a})))}}]),a}(o.Component),k=Object(n.f)(w),O=(a(62),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={profileObj:e.location&&e.location.state&&e.location.state[0].data.profileObj,accessToken:e.location&&e.location.state&&e.location.state[0].data.accessToken,contactList:[]},n}return Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=this;if(this.state.accessToken||this.props.location&&this.props.location.state&&this.props.location.state[0].data.accessToken){var t={accessToken:this.state.accessToken||this.props.location&&this.props.location.state&&this.props.location.state[0].data.accessToken};g.a.post("https://intense-mesa-47903.herokuapp.com/api/contacts/list",t,{headers:{"content-type":"application/json"}}).then((function(t){void 0===t.error?e.setState({contactList:t.data&&t.data.message||[]}):alert("error occured in api",t.error)})).catch((function(e){}))}}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{style:{padding:.025*window.outerHeight}},c.a.createElement(k,{accessToken:this.state.accessToken,profileObj:this.state.profileObj})),c.a.createElement("div",null,c.a.createElement("div",null),c.a.createElement("ol",{className:"contact-list"},this.state.contactList&&this.state.contactList.length?this.state.contactList.map((function(e){return c.a.createElement("li",{key:e.id,className:"contact-list-item"},c.a.createElement("div",{className:"contact-avatar",style:{backgroundImage:"url(".concat(e.photos[0].url,")")}}),c.a.createElement("div",{className:"contact-details"},c.a.createElement("p",null,e.names&&e.names[0].displayName)),c.a.createElement("div",{className:"contact-details"},c.a.createElement("p",null,e.emailAddresses?e.emailAddresses[0].value:"")),c.a.createElement("div",{className:"contact-details"},c.a.createElement("p",null,e.phoneNumbers&&e.phoneNumbers[0].canonicalForm)))})):"")))}}]),a}(o.Component)),y=Object(n.f)(O),x=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement("div",null,c.a.createElement(E,null),c.a.createElement(n.c,null,c.a.createElement(n.a,{path:"/",component:A,exact:!0}),c.a.createElement(n.a,{path:"/contacts",component:y,exact:!0}))))}}]),a}(o.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(c.a.createElement(d.a,null,c.a.createElement("div",null,c.a.createElement(n.a,{exact:!0,path:"/",component:x}),c.a.createElement(n.a,{exact:!0,path:"/contacts",component:y}))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");C?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):I(e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.530f58fe.chunk.js.map