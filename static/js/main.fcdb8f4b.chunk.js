(this["webpackJsonpmovie-search-app"]=this["webpackJsonpmovie-search-app"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(0),n=c.n(a),r=c(18),i=(c(29),c(7)),o=c(9),l=c(2),j=c(11),d=(c(30),JSON.parse(localStorage.getItem("checkbox"))),b=function(e){var t=Object(a.useState)(d),c=Object(i.a)(t,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){localStorage.setItem("checkbox",JSON.stringify(n))}),[n]),Object(s.jsx)("div",{className:"toggles",children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{className:"toggle-checkbox",type:"checkbox",checked:n,onChange:function(){r((function(e){return!e})),e.toggleMode()}}),Object(s.jsxs)("div",{className:"toggle-slot",children:[Object(s.jsx)("div",{className:"sun-icon-wrapper",children:Object(s.jsx)(j.c,{className:"iconify sun-icon"})}),Object(s.jsx)("div",{className:"toggle-button"}),Object(s.jsx)("div",{className:"moon-icon-wrapper",children:Object(s.jsx)(j.a,{className:"iconify moon-icon"})})]})]})})},h=function(e){return Object(s.jsxs)("div",{className:"navbar",children:[Object(s.jsx)("h1",{children:"Movie Search App"}),Object(s.jsx)(b,{toggleMode:e.toggleMode})]})},u=c(14),m=c.n(u),O=c(19),p=function(e){var t=e.movie;return Object(s.jsx)(o.b,{to:"/movieSearchApp/".concat(t.id),children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("img",{className:"card-image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:"".concat(t.title," poster")}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("h3",{className:"card-title",children:t.title}),Object(s.jsx)("p",{children:Object(s.jsxs)("small",{children:["Release Date: ",t.release_date]})}),Object(s.jsx)("p",{children:Object(s.jsxs)("small",{children:["Rating: ",t.vote_average]})})]}),Object(s.jsx)("div",{className:"card-footer",children:Object(s.jsx)("span",{children:"Read More..."})})]})})},x=Object(a.createContext)(),v=function(e){var t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],r=c[1];return Object(s.jsx)(x.Provider,{value:{movies:n,setMovies:r},children:e.children})},g=function(e){var t=Object(a.useState)(""),c=Object(i.a)(t,2),n=c[0],r=c[1],o=Object(a.useContext)(x),l=o.movies,d=o.setMovies,b=function(){var e=Object(O.a)(m.a.mark((function e(t){var c,s,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c="https://api.themoviedb.org/3/search/movie?api_key=d39b7df4f1b76fb7df1d1abddbe3ada8&language=en-US&query=".concat(n,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(c);case 5:return s=e.sent,e.next=8,s.json();case 8:a=e.sent,d(a.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:r("");case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("form",{onSubmit:b,className:"searchForm",children:[Object(s.jsx)("input",{type:"text",className:"input",value:n,name:"query",placeholder:"i.e. Jurassic Park...",onChange:function(e){r(e.target.value)},required:!0}),Object(s.jsx)("input",{type:"submit",className:"button",value:""}),Object(s.jsx)(j.b,{className:"searchIcon"})]}),Object(s.jsx)("div",{className:"card-list",children:l&&l.filter((function(e){return e.poster_path})).map((function(e){return Object(s.jsx)(p,{movie:e},e.id)}))})]})},f=function(e){var t=e.match.params.id,c=Object(a.useContext)(x).movies;return Object(s.jsxs)("div",{className:"card-details",children:[c.filter((function(e){return String(e.id)===String(t)})).map((function(e){return Object(s.jsxs)("div",{className:"details",children:[Object(s.jsx)("div",{className:"left",children:Object(s.jsx)("img",{className:"card-images",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e.poster_path),alt:"".concat(e.title," poster")})}),Object(s.jsxs)("div",{className:"right",children:[Object(s.jsx)("h2",{children:e.title}),Object(s.jsxs)("small",{children:["Release Date: ",e.release_date]}),Object(s.jsx)("br",{}),Object(s.jsxs)("small",{children:["Rating: ",e.vote_average]}),Object(s.jsx)("p",{children:e.overview})]})]},e.id)})),Object(s.jsx)("div",{className:"card-footer",children:Object(s.jsx)(o.b,{to:"/movieSearchApp",children:"Go Back"})})]})},N=JSON.parse(localStorage.getItem("theme")),S=function(){var e=Object(a.useState)(N),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){localStorage.setItem("theme",JSON.stringify(c))}),[c]),Object(s.jsx)("div",{className:c?"dark-mode container":"light-mode container",children:Object(s.jsxs)(o.a,{children:[Object(s.jsx)(h,{toggleMode:function(){n((function(e){return!e}))}}),Object(s.jsx)(l.c,{children:Object(s.jsxs)(v,{children:[Object(s.jsx)(l.a,{exact:!0,path:"/movieSearchApp",component:g}),Object(s.jsx)(l.a,{path:"/movieSearchApp/:id",component:f})]})})]})})};Object(r.render)(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.fcdb8f4b.chunk.js.map