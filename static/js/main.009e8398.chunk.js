(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{106:function(e,t,n){},338:function(e,t,n){},339:function(e,t,n){},340:function(e,t,n){},378:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(18),a=n.n(s),i=n(49),o=n.n(i),r=(n(106),n(95)),l=n(96),u=n(100),h=n(99),b=n(97),d=n.n(b),j=(n(338),function(){return Object(c.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(c.jsx)("li",{className:" f3 link dim black underline pa3 pointer",children:"Signout"})})}),m=n(98),p=n.n(m),g=(n(339),n.p+"static/media/facesenselogo.30baf14e.png"),f=function(){return Object(c.jsx)("div",{className:"ma4 mt0",children:Object(c.jsx)(p.a,{className:"Tilt br2 shadow-2",options:{max:40},style:{height:150,width:150},children:Object(c.jsx)("div",{className:"Tilt-inner pa3",children:Object(c.jsx)("img",{style:{paddingTop:"5px"},src:g,alt:"logo"})})})})},x=function(e){var t=e.onInputChange,n=e.onBtnSubmit;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"shadow-5 pa4  w-70",style:{marginRight:"auto",marginLeft:"auto"},children:[Object(c.jsx)("p",{className:"f3 white",children:"Facesense detects faces in your pictures. Feel free to try!"}),Object(c.jsxs)("p",{className:"i white",children:["Copy and paste this image into the form to make it easier: ",Object(c.jsx)("br",{}),"https://bit.ly/2Kzax6h"]}),Object(c.jsx)("div",{className:"centered",children:Object(c.jsxs)("div",{className:"pa-4 br3 centered shadow-5",children:[Object(c.jsx)("input",{onChange:t,className:"f4 pa2 w-70 centered",type:"search",placeholder:"image url here"}),Object(c.jsx)("button",{onClick:n,className:"grow f4 link ph3 pv2 dib white bg-light-purple",children:"Detect"})]})})]})})},O=function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h4",{className:"white f1 mt0 mb0",children:["facesense"," "]}),Object(c.jsx)("div",{className:"white f3 mt2",children:"James, your current rank is..."}),Object(c.jsx)("h1",{className:"white f2 mb0",children:"#5"})]})},w=(n(340),function(e){var t=e.imageUrl,n=e.boxes;return console.log(n),Object(c.jsx)("div",{className:"centered",children:Object(c.jsxs)("div",{className:"absolute mt0",children:[Object(c.jsx)("img",{src:t,id:"inputImage",alt:"",width:"400px",height:"auto"}),n.map((function(e,t){return Object(c.jsx)("div",{className:"bounding-box",style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol},children:Object(c.jsx)("span",{className:"white b",children:t+1})})}))]})})}),v=n(50),N=n.n(v),y=new N.a.App({apiKey:"e565fc75ab9f4e1fa80c551dec437ff4"}),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).generateFaceLocation=function(t){return console.log(t),t.outputs[0].data.regions.map((function(t){return e.calculateFaceBox(t.region_info.bounding_box)}))},e.calculateFaceBox=function(e){var t=document.getElementById("inputImage"),n=Number(t.width),c=Number(t.height);return{leftCol:e.left_col*n,topRow:e.top_row*c,rightCol:n-e.right_col*n,bottomRow:c-e.bottom_row*c}},e.displayFaceBoxes=function(t){e.setState({boxes:t}),console.log(e.state)},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onBtnSubmit=function(){e.setState({imageUrl:e.state.input}),y.models.predict(N.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.displayFaceBoxes(e.generateFaceLocation(t)).catch((function(e){return console.log(e)}))}))},e.state={input:"",imageUrl:"",boxes:[]},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(d.a,{className:"background"}),Object(c.jsx)(j,{}),Object(c.jsx)(f,{}),Object(c.jsx)(O,{}),Object(c.jsx)(x,{onInputChange:this.onInputChange,onBtnSubmit:this.onBtnSubmit}),Object(c.jsx)(w,{boxes:this.state.boxes,imageUrl:this.state.imageUrl})]})}}]),n}(s.Component),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,379)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};n(377);o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),F()}},[[378,1,2]]]);
//# sourceMappingURL=main.009e8398.chunk.js.map