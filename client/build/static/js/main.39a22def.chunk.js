(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,t,a){e.exports=a(78)},78:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),o=a.n(r),c=a(83),u=a(84),i=a(85),m=a(35);var s=function(){return l.a.createElement(m.a,null,l.a.createElement("div",{className:"bannerImg"}),l.a.createElement("h1",{className:"text-center"},"React Google Search"),l.a.createElement("h4",{className:"text-center"}," Search for and Save Books of Interest."))},E=a(48),v=a(23);var f=function(){return console.log("Engaging navbar component..."),l.a.createElement(E.a,{bg:"green",expand:"lg"},l.a.createElement("h3",{href:"#home"},"Google Books"),l.a.createElement(v.a,{className:"mr-auto"},l.a.createElement(v.a.Link,{href:"/"},"Search"),l.a.createElement(v.a.Link,{href:"/saved"},"Saved")))},h=a(43),d=a(82),p=a(42),g=a(41),k=a(13),b=a.n(k),w={getBooks:function(){return b.a.get("/api/books")},searchBooks:function(e){return b.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},saveBook:function(e){return b.a.post("/api/books",e)}};var I=function(e){var t=e.all;return l.a.createElement(g.a,{value:e.id,onClick:function(e){e.preventDefault();var a=e.target.value;console.log(a),console.log(t);var n=t.filter(function(e){return e.id===a});console.log(n);var l={title:n[0].volumeInfo.title,authors:n[0].volumeInfo.authors,image:n[0].volumeInfo.imageLinks.thumbnail,link:n[0].volumeInfo.infoLink,description:n[0].volumeInfo.description};w.saveBook(l).then(function(){console.log("success"),alert("Book Saved")})}},"Save")};var S=function(e){return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(p.a,{className:"left"},l.a.createElement("h3",null,e.title),l.a.createElement("h5",null,e.author)),l.a.createElement(p.a,{md:{span:4,offset:4}},l.a.createElement(g.a,{className:"mr-2"},"View"),l.a.createElement(I,{id:e.id,all:e.all}))),l.a.createElement(d.a,null,l.a.createElement(p.a,{md:2},l.a.createElement("p",null,l.a.createElement("img",{src:e.image}))),l.a.createElement(p.a,{md:10},l.a.createElement("p",null,e.description," "),l.a.createElement("p",null,"LINK: ",e.link),l.a.createElement("p",null,"id: ",e.id)))),l.a.createElement("hr",null),l.a.createElement("br",null))};function C(){return l.a.createElement(h.a,null,l.a.createElement(d.a,null,l.a.createElement(S,null)))}function B(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Saved Page"),l.a.createElement(C,null))}var N=a(44),x=a(45),L=a(49),V=a(46),j=a(50),y=a(15),O=function(e){return l.a.createElement("div",null,l.a.createElement(y.a,null,l.a.createElement(y.a.Group,{controlId:"searchBar"},l.a.createElement(y.a.Label,null,"Search For"),l.a.createElement(y.a.Control,{type:"input",onChange:e.setValue}),l.a.createElement(g.a,{type:"submit",onClick:e.handleClick},"Search"))))},G=l.a.createContext({results:[]}),P=function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(L.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(l)))).state={inputVal:"",results:[]},a.setValue=function(e){a.setState({inputVal:e.target.value})},a.handleClick=function(e){e.preventDefault(),console.log(e.target.value),w.searchBooks(a.state.inputVal).then(function(e){if(console.log(e),0===e.data.length)throw new Error("No results found.");if("error"===e.data.status)throw new Error(e.data.message);a.setState({results:e.data.items})}).catch(function(e){console.log(e)})},a}return Object(j.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement("h3",null,"Search Page"),l.a.createElement(O,{setValue:this.setValue,handleClick:this.handleClick}),this.state.results.map(function(t,a){return l.a.createElement(S,{title:t.volumeInfo.title,author:t.volumeInfo.authors[0],image:t.volumeInfo.imageLinks.thumbnail,link:t.volumeInfo.infoLink,description:t.volumeInfo.description,id:t.id,all:e.state.results,index:a,button:"Save",handle:e.saveClick})})))}}]),t}(l.a.Component);var D=function(e){return l.a.createElement("main",Object.assign({className:"wrapper"},e))};var J=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(D,null,l.a.createElement(s,null),l.a.createElement(G.Provider,null,l.a.createElement(u.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:P}),l.a.createElement(i.a,{exact:!0,path:"/saved",component:B}))))))};a(77);o.a.render(l.a.createElement(J,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.39a22def.chunk.js.map