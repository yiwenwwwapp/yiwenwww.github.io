(function(){"use strict";var e={3128:function(e,t,i){var a=i(9963),s=(i(4002),i(2666),i(6252));function l(e,t,i,a,l,d){const o=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(o)}var d={name:"App",components:{}},o=i(3744);const n=(0,o.Z)(d,[["render",l]]);var r=n,c=i(3577);const p={class:"body"},h=(0,s.Uk)("Yiwen"),u=(0,s.Uk)("About & Contact"),v=["onClick"],g={class:"gold-avatar"},f=["src"],m={id:"carouselExampleFade","data-interval":"false","data-bs-interval":"false",class:"carousel slide carousel-fade","data-bs-ride":"carousel",ref:"elcarousel"},x={class:"carousel-indicators"},b=["data-bs-slide-to"],w={class:"carousel-inner"},H=["src"],y=(0,s.uE)('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" data-v-50ddf4ff><span class="carousel-control-prev-icon" aria-hidden="true" data-v-50ddf4ff></span><span class="visually-hidden" data-v-50ddf4ff>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" data-v-50ddf4ff><span class="carousel-control-next-icon" aria-hidden="true" data-v-50ddf4ff></span><span class="visually-hidden" data-v-50ddf4ff>Next</span></button>',2);function z(e,t,i,a,l,d){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",p,[(0,s._)("div",{class:(0,c.C_)(["header float-none d-flex justify-content-between",{"header-small":l.smallHeader}])},[(0,s._)("div",{class:(0,c.C_)(["avatar-left",{"avatar-small":l.smallHeader}])},[(0,s.Wm)(o,{to:"/"},{default:(0,s.w5)((()=>[(0,s._)("img",{class:(0,c.C_)(["avatar-img",{"avatar-img-small":l.smallHeader}]),src:"./avatar1.jpg"},null,2)])),_:1}),(0,s.Wm)(o,{to:"/",class:(0,c.C_)(["avatar-name",{"avatar-name-small":l.smallHeader}])},{default:(0,s.w5)((()=>[h])),_:1},8,["class"])],2),(0,s._)("div",{class:(0,c.C_)(["avatar-right",{"avatar-right-small":l.smallHeader}])},[(0,s.Wm)(o,{to:"/about",class:(0,c.C_)(["avatar-about",{"avatar-about-small":l.smallHeader}])},{default:(0,s.w5)((()=>[u])),_:1},8,["class"])],2)],2),(0,s._)("div",{class:(0,c.C_)(["main",{"main-small":l.smallHeader}])},[(0,s._)("div",{class:"main-background",style:(0,c.j5)({"min-height":l.innerHeight,height:l.bgHeight})},[(0,s._)("img",{class:"main-background-img",src:"./bg1.jpg",onLoad:t[0]||(t[0]=(...e)=>d.mainBackgroundLoaded&&d.mainBackgroundLoaded(...e)),style:(0,c.j5)({"min-height":l.innerHeight,width:l.bgWidth,height:l.bgHeight})},null,36)],4),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.work,(e=>((0,s.wg)(),(0,s.iD)("div",{class:(0,c.C_)(["gold",{"gold-animationActive":e.animationActive}]),key:e.path,style:(0,c.j5)({top:e.top,left:e.left,width:e.size,height:e.size,visibility:l.goldVisibility}),onClick:t=>d.toggleCarousel(e)},[(0,s._)("div",g,[(0,s._)("img",{class:"gold-avatar-img",src:e.path+".jpg"},null,8,f)])],14,v)))),128))],2),(0,s._)("div",{class:"dialog-background",onClick:t[2]||(t[2]=(...e)=>d.closeCarousel&&d.closeCarousel(...e)),style:(0,c.j5)({display:l.centerDialogVisible,width:l.dialogWidth,height:l.dialogHeight,top:l.dialogTop,left:l.dialogLeft})},[((0,s.wg)(),(0,s.iD)("div",{class:"myCarousel",onClick:t[1]||(t[1]=(...e)=>d.preventClick&&d.preventClick(...e)),key:l.carouselUpdate,ref:"elcarouselcontainer",style:(0,c.j5)({width:l.carouselWidth,height:l.carouselHeight,top:l.carouselTop,left:l.carouselLeft})},[(0,s._)("div",m,[(0,s._)("div",x,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.selectedGroup.numPics,((e,t)=>((0,s.wg)(),(0,s.iD)("button",{key:l.selectedGroup.path+"/"+t+".jpgbtn",type:"button","data-bs-target":"#carouselExampleFade","data-bs-slide-to":t,class:(0,c.C_)({active:t==l.selectedGroup.activeIndex})},null,10,b)))),128))]),(0,s._)("div",w,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.selectedGroup.numPics,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,c.C_)(["carousel-item",{active:t==l.selectedGroup.activeIndex}]),key:l.selectedGroup.path+"/"+(t+1)+".jpg",style:(0,c.j5)({height:l.carouselImgHeight})},[(0,s._)("img",{class:"carousel-inner-img",src:l.selectedGroup.path+"-"+(t+1)+(l.selectedGroup.specialFiles[t+1]?l.selectedGroup.specialFiles[t+1]:".jpg"),style:(0,c.j5)(d.computeImgStyle),ref_for:!0,ref:"preload"},null,12,H)],6)))),128))]),y],512)],4))],4)])}var k={name:"Mine",props:{goldSize:{type:String,required:!1,default:"245px"}},data(){return{bgLoaded:!1,preloadImagesInterval:-1,preloadImagesIndex:0,marginHorizontalOffset:0,marginVerticalOffset:140,smallHeader:!1,heightWidthRatio:1,screenWidth:null,screenHeight:null,innerHeight:100,devWidth:2239,devHeight:3663,goldVisibility:"hidden",centerDialogVisible:"none",bgWidth:"100%",bgHeight:"auto",dialogWidth:null,dialogHeight:null,dialogTop:null,dialogLeft:null,carouselWidth:null,carouselHeight:null,carouselTop:null,carouselLeft:null,elCarouselHeight:"100px",carouselImgHeight:"100px",arouselImgStyle:"height: 100%",carouselAutoPlay:!1,selectedGroup:null,carouselClicked:!1,carouselPlayInterval:null,carouselPlayWindow:4e3,carouselUpdate:0,imgRatio:1.5,devPositions:[{devTop:"456px",devLeft:"204px"},{devTop:"560px",devLeft:"729px"},{devTop:"458px",devLeft:"1550px"},{devTop:"958px",devLeft:"66px"},{devTop:"850px",devLeft:"950px"},{devTop:"850px",devLeft:"1789px"},{devTop:"994px",devLeft:"1395px"},{devTop:"1283px",devLeft:"234px"},{devTop:"1218px",devLeft:"660px"},{devTop:"1328px",devLeft:"1655px"},{devTop:"1544px",devLeft:"862px"},{devTop:"1734px",devLeft:"1870px"},{devTop:"2030px",devLeft:"1350px"},{devTop:"2100px",devLeft:"130px"},{devTop:"2200px",devLeft:"500px"},{devTop:"2430px",devLeft:"1000px"},{devTop:"2600px",devLeft:"400px"},{devTop:"2700px",devLeft:"1470px"},{devTop:"2800px",devLeft:"1950px"}],work:[{path:"./16",devSize:this.goldSize,top:"0px",left:"px",size:"450px",numPics:6,shadowVisible:!1,activeIndex:0,date:"2022",title:"C/LENS Visual Design",specialFiles:{6:".gif"},description:["asdfasdf"]},{path:"./15",devSize:this.goldSize,top:"0px",left:"px",size:"450px",numPics:12,shadowVisible:!1,activeIndex:0,date:"2022",title:"C/LENS Visual Design",specialFiles:{},description:["asdfasdf"]},{path:"./14",devSize:this.goldSize,top:"0px",left:"px",size:"450px",numPics:7,shadowVisible:!1,activeIndex:0,date:"2022",title:"C/LENS Visual Design",specialFiles:{},description:["asdfasdf"]},{path:"./13",devSize:this.goldSize,top:"0px",left:"px",size:"450px",numPics:6,shadowVisible:!1,activeIndex:0,date:"2022",title:"C/LENS Visual Design",specialFiles:{},description:["asdfasdf"]},{path:"./12",devSize:this.goldSize,top:"800px",left:"400px",size:"450px",numPics:4,shadowVisible:!1,activeIndex:0,date:"2022",title:"Cats and Dogs",specialFiles:{},description:["asdfasdf"]},{path:"./11",devSize:this.goldSize,top:"950px",left:"1200px",size:"450px",numPics:7,shadowVisible:!1,activeIndex:0,date:"2022",title:"Wake up! Let's try flying!",specialFiles:{},description:["asdfasdf"]},{path:"./10",devSize:this.goldSize,top:"1600px",left:"100px",size:"450px",numPics:5,shadowVisible:!1,activeIndex:0,date:"2022",title:"Watercolor and color pencil",specialFiles:{},description:["asdfasdf"]},{path:"./9",devSize:this.goldSize,top:"1450px",left:"860px",size:"450px",numPics:4,shadowVisible:!1,activeIndex:0,date:"2021",title:"The difference between comic and graphic novel",specialFiles:{},description:["asdfasdf"]},{path:"./8",devTop:"1400px",devLeft:"1530px",devSize:this.goldSize,top:"1600px",left:"1470px",size:"450px",numPics:7,shadowVisible:!1,activeIndex:0,date:"2021",title:"Liang and his magic brush",specialFiles:{},description:["asdfasdf"]},{path:"./7",devTop:"1800px",devLeft:"520px",devSize:this.goldSize,top:"1600px",left:"1670px",size:"450px",numPics:4,shadowVisible:!1,activeIndex:0,date:"2021",title:"Collage",specialFiles:{},description:["asdfasdf"]},{path:"./6",devTop:"1850px",devLeft:"1170px",devSize:this.goldSize,top:"1600px",left:"1670px",size:"450px",numPics:5,shadowVisible:!1,activeIndex:0,date:"2021",title:"Feuergeist",specialFiles:{},description:["asdfasdf"]},{path:"./5",devTop:"2200px",devLeft:"170px",devSize:this.goldSize,top:"1600px",left:"1670px",size:"450px",numPics:4,shadowVisible:!1,activeIndex:0,date:"2020",title:"Schnittlauch",specialFiles:{},description:["asdfasdf"]},{path:"./4",devTop:"2300px",devLeft:"850px",devSize:this.goldSize,top:"1600px",left:"1670px",size:"450px",numPics:5,shadowVisible:!1,activeIndex:0,date:"2020",title:"Bookstore",specialFiles:{},description:["asdfasdf"]},{path:"./3",devTop:"2200px",devLeft:"1570px",devSize:this.goldSize,top:"1600px",left:"1670px",size:"450px",numPics:5,shadowVisible:!1,activeIndex:0,date:"2020",title:"Outsider",specialFiles:{},description:["asdfasdf"]},{path:"./2",devTop:"2800px",devLeft:"370px",devSize:this.goldSize,top:"1600px",left:"1670px",size:"450px",numPics:4,shadowVisible:!1,activeIndex:0,date:"2019",title:"Hello Leshan",specialFiles:{},description:["asdfasdf"]},{path:"./1",devTop:"2800px",devLeft:"1370px",devSize:this.goldSize,top:"1600px",left:"1670px",size:"450px",numPics:5,shadowVisible:!1,activeIndex:0,date:"2019",title:"Chinese Zodiac",specialFiles:{},description:["asdfasdf"]}]}},created(){this.selectedGroup=this.work[0]},mounted(){window.onresize=()=>(()=>{this.screenWidth=document.body.clientWidth,this.screenHeight=document.body.clientHeight,this.innerHeight=window.innerHeight-50+"px",this.updateWork(),this.updateBg(),this.updateCarousel(),this.updateDialogue(),this.updateHeader()})();let e=this;window.addEventListener("keyup",(function(t){"Escape"===t.key&&e.closeCarousel()})),this.selectedGroup=this.work[this.preloadImagesIndex],this.preloadImagesIndex+=1,this.preloadImagesInterval=setInterval((function(){e.preloadImages(),e.updateBg()}),1e3)},watch:{screenWidth:{handler:function(){this.updateWork(),this.updateBg(),this.updateCarousel(),this.updateDialogue(),this.updateHeader()},immediate:!0,deep:!0}},computed:{computeTop(){return e=>{let t=e.slice(0,-2),i=Math.max(parseFloat(t),141),a=Math.round((i-140)/(this.devWidth-2*this.marginHorizontalOffset)*(this.screenWidth-2*this.marginHorizontalOffset));return`${a}px`}},computeLeft(){return e=>{let t=e.slice(0,-2),i=parseInt(t),a=Math.round(i/this.devWidth*(this.screenWidth-2*this.marginHorizontalOffset)+this.marginHorizontalOffset);return`${a}px`}},computeSize(){return e=>{let t=e.slice(0,-2),i=parseInt(t),a=i/this.devWidth*(this.screenWidth-2*this.marginHorizontalOffset);return this.smallHeader&&(a*=1.2),`${a}px`}},computeImgStyle(){return this.smallHeader?"width: 100%; height: 100%":"height: 100%"}},methods:{preloadImages(){"none"===this.centerDialogVisible&&(console.log(`preload ${this.preloadImagesIndex}`),this.selectedGroup=this.work[this.preloadImagesIndex],this.preloadImagesIndex+=1,this.preloadImagesIndex>=this.work.length&&clearInterval(this.preloadImagesInterval))},updateHeader(){let e=window.innerHeight/window.innerWidth;this.heightWidthRatio=e,this.smallHeader=e>1},bsCarouselButton(e){if("prev"===e){let e=this.selectedGroup.activeIndex;e-=1,e<1&&(e=this.selectedGroup.numPics),this.selectedGroup.activeIndex=e}else{let e=this.selectedGroup.activeIndex;e+=1,e>this.selectedGroup.numPics&&(e=1),this.selectedGroup.activeIndex=e}},updateBg(){this.bgWidth=this.screenWidth-2*this.marginHorizontalOffset+"px";let e=this.work.length-1,t=parseFloat(this.work[e].top.slice(0,-2)),i=parseFloat(this.work[e].size.slice(0,-2));this.bgHeight=`${t+1.5*i}px`},updateWork(){let e={};for(let t in this.work){let e=this.work[t];e.left=this.computeLeft(this.devPositions[t].devLeft),e.top=this.computeTop(this.devPositions[t].devTop),e.size=this.computeSize(e.devSize)}return e},updateCarousel(){let e=.1,t=window.innerWidth/window.innerHeight,i=t-this.imgRatio;if(i>0)this.carouselTop=Math.floor(window.innerHeight*e/2)+"px",this.carouselLeft=Math.floor(window.innerWidth*e/2)+"px",this.carouselWidth=Math.floor(window.innerWidth*(1-e))+"px",this.carouselHeight=Math.floor(window.innerHeight*(1-e))+"px";else{this.carouselWidth=window.innerWidth+"px";let e=Math.floor(window.innerWidth/this.imgRatio);this.carouselHeight=e+"px",this.carouselTop=Math.floor((window.innerHeight-e)/2)+"px",this.carouselLeft="0px"}this.elCarouselHeight=this.carouselHeight,this.carouselImgHeight=this.carouselHeight},updateDialogue(){this.dialogWidth=window.innerWidth+"px",this.dialogHeight=window.innerHeight+"px",this.dialogTop="0px",this.dialogLeft="0px"},mainBackgroundLoaded(){this.bgLoaded=!0,this.screenWidth=document.body.clientWidth,this.screenHeight=document.body.clientHeight,this.innerHeight=window.innerHeight-50+"px",this.updateWork(),this.goldVisibility="visible",this.updateCarousel(),this.updateDialogue(),this.updateBg(),this.updateHeader()},nextPicture(){},toggleCarousel(e){this.carouselUpdate+=1,this.centerDialogVisible="block",this.selectedGroup=e,this.carouselClicked=!0,this.selectedGroup.animationActive=!0},closeCarousel(e){this.centerDialogVisible="none",this.carouselAutoPlay=!1,this.carouselClicked=!1,e&&e.stopPropagation();for(let t of this.work)t.animationActive=!1},preventClick(e){this.carouselClicked=!0,e&&e.stopPropagation()}}};const C=(0,o.Z)(k,[["render",z],["__scopeId","data-v-50ddf4ff"]]);var I=C;const _=(0,s.Uk)("Yiwen"),W=(0,s.Uk)("About & Contact"),L=(0,s.uE)('<div class="contact-icons" data-v-c3306c08><div class="d-flex flex-row-reverse bd-highlight" data-v-c3306c08><div class="p-2 bd-highlight" data-v-c3306c08><div class="contact-icon-bg" data-v-c3306c08></div><a href="https://mp.weixin.qq.com/s/KLXN-1rouK9AvpUCfqCnIQ" target="_blank" data-v-c3306c08><img class="contact-icon-img" src="wechaticon.png" alt="" data-v-c3306c08></a></div><div class="p-2 bd-highlight" data-v-c3306c08><div class="contact-icon-bg" data-v-c3306c08></div><a href="https://www.xiaohongshu.com/user/profile/5afda6014eacab246f365a59?xhsshare=CopyLink&amp;appuid=6208a1030000000010007cc1&amp;apptime=1658418834" target="_blank" data-v-c3306c08><img class="contact-icon-img" src="redbookicon.png" alt="" data-v-c3306c08></a></div><div class="p-2 bd-highlight" data-v-c3306c08><div class="contact-icon-bg" data-v-c3306c08></div><a href="https://www.instagram.com/yiwenwwwang/" target="_blank" data-v-c3306c08><img class="contact-icon-img" src="insicon.png" alt="" data-v-c3306c08></a></div><div class="p-2 bd-highlight" data-v-c3306c08><div class="contact-icon-bg" data-v-c3306c08></div><a href="mailto:yiwen.wang@burg-halle.de" target="_blank" data-v-c3306c08><img class="contact-icon-img" src="emailicon.png" alt="" data-v-c3306c08></a></div></div></div>',1),S={class:"container body-avatar-container"},T=(0,s.uE)('<br class="small" data-v-c3306c08><h3 class="introduction-title" data-v-c3306c08> Yiwen Wang </h3><div class="introduction" data-v-c3306c08><p data-v-c3306c08> yiwen.wang@burg-halle.de </p><br class="small" data-v-c3306c08><p data-v-c3306c08> Yiwen is an illustrator who is intially from China, currently living in Germany. After studying financial engineering in Shanghai and data analysis in the USA, she moved to Germany to study illustration under Prof. ATAK. </p><br class="small" data-v-c3306c08><p data-v-c3306c08> She likes to collaborate with people from different backgrounds to create interesting designs. </p></div><br data-v-c3306c08><h3 class="introduction-title" data-v-c3306c08> 亦闻闻闻闻 </h3><div class="introduction" data-v-c3306c08><p class="chinese" data-v-c3306c08> 亦闻是一位来自中国的插画师,现居住于德国。她曾求学于上海学习金融工程, 而后求学于美国学习数据分析,几经波折之后来到德国学习插画专业,师从ATAK教授。 </p><br class="small" data-v-c3306c08><p class="chinese" data-v-c3306c08> 她喜欢与不同行业的人一起合作创造出有趣的设计。 </p></div>',6);function P(e,t,i,a,l,d){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",{class:"body",style:(0,c.j5)({"background-image":"url(bg2.jpg)"})},[(0,s._)("div",{class:(0,c.C_)(["header float-none d-flex justify-content-between",{"header-small":l.smallHeader}])},[(0,s._)("div",{class:(0,c.C_)(["avatar-left",{"avatar-small":l.smallHeader}])},[(0,s.Wm)(o,{to:"/"},{default:(0,s.w5)((()=>[(0,s._)("img",{class:(0,c.C_)(["avatar-img",{"avatar-img-small":l.smallHeader}]),src:"./avatarblack.jpg"},null,2)])),_:1}),(0,s.Wm)(o,{to:"/",class:(0,c.C_)(["avatar-name",{"avatar-name-small":l.smallHeader}])},{default:(0,s.w5)((()=>[_])),_:1},8,["class"])],2),(0,s._)("div",{class:(0,c.C_)(["avatar-right",{"avatar-right-small":l.smallHeader}])},[(0,s.Wm)(o,{to:"/about",class:(0,c.C_)(["avatar-about",{"avatar-about-small":l.smallHeader}])},{default:(0,s.w5)((()=>[W])),_:1},8,["class"])],2)],2),L,(0,s._)("div",{class:(0,c.C_)(["body-container",{container:!l.smallHeader,"body-container-small":l.smallHeader}])},[(0,s._)("div",S,[(0,s._)("img",{class:(0,c.C_)(["body-avatar",{"body-avatar-small":l.smallHeader}]),src:"./avatar1.jpg"},null,2)]),T],2)],4)}var V={name:"About",props:{},data(){return{smallHeader:!1,screenWidth:null}},mounted(){window.onresize=()=>(()=>{this.screenWidth=document.body.clientWidth,this.updateHeader()})()},watch:{screenWidth:{handler:function(){this.updateHeader()},immediate:!0,deep:!0}},methods:{updateHeader(){let e=window.innerHeight/window.innerWidth;this.heightWidthRatio=e,this.smallHeader=e>1}}};const j=(0,o.Z)(V,[["render",P],["__scopeId","data-v-c3306c08"]]);var F=j;const D=i(4530),G=[{path:"/",component:I},{path:"/about",component:F}],O=D.createRouter({history:D.createWebHashHistory(),routes:G}),A=(0,a.ri)(r);A.use(O),A.mount("#app")}},t={};function i(a){var s=t[a];if(void 0!==s)return s.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,i),l.exports}i.m=e,function(){var e=[];i.O=function(t,a,s,l){if(!a){var d=1/0;for(c=0;c<e.length;c++){a=e[c][0],s=e[c][1],l=e[c][2];for(var o=!0,n=0;n<a.length;n++)(!1&l||d>=l)&&Object.keys(i.O).every((function(e){return i.O[e](a[n])}))?a.splice(n--,1):(o=!1,l<d&&(d=l));if(o){e.splice(c--,1);var r=s();void 0!==r&&(t=r)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,s,l]}}(),function(){i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,l,d=a[0],o=a[1],n=a[2],r=0;if(d.some((function(t){return 0!==e[t]}))){for(s in o)i.o(o,s)&&(i.m[s]=o[s]);if(n)var c=n(i)}for(t&&t(a);r<d.length;r++)l=d[r],i.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return i.O(c)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(3128)}));a=i.O(a)})();
//# sourceMappingURL=app.ac382fbc.js.map