(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{U8cw:function(e,t,a){e.exports={banner:"Home-module--banner--1kp4l",paginationBox:"Home-module--paginationBox--g6WlZ"}},X9IB:function(e,t,a){e.exports=a.p+"static/banner-large-15e2a39a0118d613644a110a154ea569.png"},beUH:function(e,t,a){e.exports={container:"PostList-module--container--3FzQq",postList:"PostList-module--postList--2miCW",navigation:"PostList-module--navigation--2qn5Y",title:"PostList-module--title--3U3zm"}},d004:function(e,t,a){"use strict";a("AqHK");var n=a("Nhdc"),r=a("q1tI"),o=a.n(r),c=a("beUH"),s=a.n(c);t.a=function(e){var t=e.categories,a=e.tags,c=e.posts;return o.a.createElement("div",{className:s.a.container},o.a.createElement("section",{className:s.a.postList},c.map((function(e){var t=e.category,a=e.date,c=e.slug,s=e.tags,i=e.title,l=e.description;return o.a.createElement(r.Fragment,{key:c},o.a.createElement(n.h,{key:c,createdAt:a,title:i,href:c,description:l,category:{href:"/category/"+t[0],category:t[0]},tags:s.map((function(e){return{href:"/tag/"+e,tag:e}}))}),o.a.createElement("hr",null))}))),o.a.createElement("section",{className:s.a.navigation},o.a.createElement(n.d,{categories:t,tags:a})))}},n56l:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return g}));a("E5k/"),a("AqHK");var n=a("Nhdc"),r=a("d004"),o=a("X9IB"),c=a.n(o),s=a("q1tI"),i=a.n(s),l=a("U8cw"),m=a.n(l),g="554648494";t.default=function(e){var t=e.data,a=e.pageContext,o=a.current,s=a.next,l=a.prev,g=a.total,u=a.categories,p=a.tags;return i.a.createElement(n.c,{categories:u,tags:p,hideNavBtnIfSmallDevice:!0},i.a.createElement(n.b,null),i.a.createElement("section",{className:m.a.banner},i.a.createElement(n.a,{src:c.a})),i.a.createElement(r.a,{categories:u,tags:p,posts:t.allMarkdownRemark.edges.map((function(e){var t=e.node.frontmatter;return Object.assign({},t)}))}),i.a.createElement("section",{className:m.a.paginationBox},i.a.createElement(n.e,{current:o,next:"/"+s,prev:"/"+l,total:g})))}}}]);
//# sourceMappingURL=component---src-containers-home-tsx-a49548783195cd1c2e28.js.map