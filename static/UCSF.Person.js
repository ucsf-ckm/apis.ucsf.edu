var UCSF=function(){"use strict";var e=[],t={serialize:function(e,t){var n=[];for(var s in e){var r=t?t+"["+s+"]":s,a=e[s];n.push("object"==typeof a?this.serialize(a,r):encodeURIComponent(r)+"="+encodeURIComponent(a))}return n.join("&")},createCORSRequest:function(e,t,n,s){var r=new XMLHttpRequest;return"withCredentials"in r?r.open(e,t,!0):"undefined"!=typeof XDomainRequest?(r=new XDomainRequest,r.open(e,t)):"undefined"!=typeof flensed&&"flXHR"in flensed?(r=new flensed.flXHR({xmlResponseText:!1,onreadystatechange:function(e){4===e.readyState&&(200===e.status&&n?n(JSON.parse(e.responseText)):s(e))},ontimeout:s,onerror:s}),r.open(e,t,!0)):r=null,r},createRequestString:function(e,t){var n=-1===e.indexOf("?")?"?":"&";return e+n+this.serialize(t)},Person:{search:function(t,n,s){s=s||function(e){window.alert(e.statusText||"An error occurred. Please try again.")};var r=UCSF.createRequestString("http://apis.ucsf.edu/person/search",t),a=UCSF.createCORSRequest("GET",r,n,s);a?(a.onload=function(){n(JSON.parse(a.responseText))},a.onerror=s,a.send()):e.push({callee:UCSF.Person.search,options:t,success:n,failure:s})}}};if(!t.createCORSRequest("GET","http://www.example.com/")){window.flensed={base_path:"http://apis.ucsf.edu/static/flensed/"};var n=document.createElement("script");n.src="http://apis.ucsf.edu/static/ie7_polyfill.js",n.onreadystatechange=function(){if("complete"===n.readyState||"loaded"===n.readyState)for(var t=e.length,s=0;t>s;s++)e[s].callee(e[s].options,e[s].success,e[s].failure)},document.getElementsByTagName("head")[0].appendChild(n)}return t}();