(function(){var t={4599:function(t,e,i){"use strict";var n=i(9963),o=i(6252),r=i(3378),s=i(2377);const a=(0,o._)("img",{id:"nav-icon",src:r},null,-1),l={id:"tool-box"},u=(0,o._)("footer",null,null,-1);function c(t,e,i,r,c,p){const g=(0,o.up)("router-link"),m=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("body",null,[(0,o._)("nav",{onClick:e[0]||(e[0]=t=>p.displayNav())},[a,(0,o.Wm)(g,{to:"/profile",class:"nav_item"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1}),(0,o.Wm)(g,{to:"/project",class:"nav_item"},{default:(0,o.w5)((()=>[(0,o.Uk)("Project")])),_:1})]),(0,o.Wm)(m,null,{default:(0,o.w5)((({Component:t,route:e})=>[(0,o.Wm)(n.uT,{name:"fade_fast",mode:"out-in",appear:""},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.iD)("div",{key:e.name,id:"main-body"},[((0,o.wg)(),(0,o.j4)((0,o.LL)(t)))]))])),_:2},1024)])),_:1}),(0,o.Wm)(n.uT,{name:"fade_slow"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",l,[(0,o._)("img",{id:"tool_move-top",src:s,onClick:e[1]||(e[1]=(...t)=>p.scrollUp&&p.scrollUp(...t))})],512),[[n.F8,1==c.isBottom]])])),_:1}),u])}let p;function g(t,e){p||(p=setTimeout((()=>{t(),p=void 0}),e))}var m={data(){return{isBottom:!1,toggleDown:!1,navArrowDeg:0}},mounted(){this.initNavByWindow(),document.addEventListener("scroll",(()=>{g(this.showToolBox,50)})),window.addEventListener("resize",(()=>{g(this.initNavByWindow,500)}))},methods:{scrollUp(){window.scrollTo({top:0,behavior:"smooth"})},showToolBox(){window.scrollY+1.2*window.innerHeight>=document.body.scrollHeight?this.isBottom=!0:this.isBottom=!1},isMobile(){return!(window.innerWidth>640)},displayNav(){this.isMobile()&&(this.toggleDown?(this.toggleDown=!1,this._setNavRouterDisplay("none")):(this.toggleDown=!0,this._setNavRouterDisplay("block")),this.navArrowDeg+=180,this._rotateNavIcon(this.navArrowDeg))},initNavByWindow(){this.isMobile()?(this.toggleDown=!1,this.navArrowDeg=0,this._setNavRouterDisplay("none"),this._rotateNavIcon(this.navArrowDeg)):this._setNavRouterDisplay("block")},_setNavRouterDisplay(t){let e=document.getElementsByClassName("nav_item");for(let i=0;i<e.length;i++)e[i].style.display=t},_rotateNavIcon(t){let e=document.getElementById("nav-icon");e.style.transform=`rotateX(${t}deg) scaleX(-1)`}}},h=i(3744);const d=(0,h.Z)(m,[["render",c]]);var v=d,f=i(2201);const b=(0,o._)("h1",{id:"ko-name"},"박성진",-1),w=(0,o._)("span",{id:"en-name"},"Sung-jin Park",-1),B=(0,o._)("hr",null,null,-1),I={class:"stack_wrapper"};function N(t,e,i,n,r,s){const a=(0,o.up)("DetailListComp"),l=(0,o.up)("SkillBlock");return(0,o.wg)(),(0,o.iD)(o.HY,null,[b,w,B,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.aboutDetails,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{key:e},[(0,o.Wm)(a,{icon:t.icon,title:t.title,details:t.details},null,8,["icon","title","details"])])))),128)),(0,o._)("span",I,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.mainSkill,((t,e)=>((0,o.wg)(),(0,o.j4)(l,{key:e,text:t.text,icons:t.icons},null,8,["text","icons"])))),128)),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.subSkill,((t,e)=>((0,o.wg)(),(0,o.j4)(l,{class:"stack_sub",key:e,text:t.text,icons:t.icons},null,8,["text","icons"])))),128))])],64)}var y=i(3577);const k={class:"detail"},A=["src"],D={class:"detail_content"},j={class:"detail_sub-content"},T=["href"];function C(t,e,i,n,r,s){return(0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("img",{src:s.getIconSrc(i.icon)},null,8,A),(0,o._)("h3",null,(0,y.zw)(i.title),1),(0,o._)("div",D,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.details,((t,e)=>((0,o.wg)(),(0,o.iD)("p",{key:e},[(0,o._)("span",j,(0,y.zw)(t.sub),1),(0,o._)("span",null,(0,y.zw)(t.main),1),void 0!=t.href?((0,o.wg)(),(0,o.iD)("a",{key:0,href:t.href,target:"_blank"},(0,y.zw)(t.aText),9,T)):(0,o.kq)("",!0)])))),128))])])}var Z={props:{icon:{type:String},title:{type:String},details:{type:Object}},methods:{getIconSrc(t){return i(8074)(`./${t}.svg`)}}};const x=(0,h.Z)(Z,[["render",C]]);var S=x;const L={class:"skill_wrapper"},G=["src"];function R(t,e,i,n,r,s){return(0,o.wg)(),(0,o.iD)("div",L,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.icons,((t,e)=>((0,o.wg)(),(0,o.iD)("span",{key:e},[(0,o._)("img",{class:"skill_img",src:s.getIconSrc(t)},null,8,G)])))),128)),(0,o.Uk)(" "+(0,y.zw)(i.text),1)])}var Y={props:{text:{type:String},icons:{type:Array}},methods:{getIconSrc(t){return i(8074)(`./${t}.svg`)}}};const V=(0,h.Z)(Y,[["render",R]]);var M=V;const E=[{icon:"paper",title:"Paper",details:[{sub:"2022",main:"얼굴 인식과 Pyautogui 마우스 제어 기반의 비접촉식 입력 기법"}]},{icon:"links",title:"Links",details:[{sub:"2021~",main:"GitHub",href:"https://github.com/Denev6",aText:": github.com/Denev6"},{sub:"2022~",main:"TIL Blog",href:"https://denev6.tistory.com",aText:": denev6.tistory.com"}]},{icon:"education",title:"Education",details:[{sub:"2021~",main:"성균관대 인공지능융합전공"}]},{icon:"mail",title:"Contact",details:[{main:"Gmail",sub:"",href:"mailto:music5038@gmail.com",aText:": music5038@gmail.com"}]},{icon:"project",title:"Project",details:[{sub:"자세한 내용은 상단의 Project 페이지 참고",main:""}]},{icon:"tech-stack",title:"Stack",details:null}];var W=E;const U=[{text:"Python",icons:["python"]},{text:"PyTorch",icons:["pytorch"]},{text:"OpenCV",icons:["opencv"]},{text:"Go",icons:["go"]},{text:"GitHub",icons:["github"]},{text:"Conda",icons:["anaconda"]}],H=[{text:"Frontend",icons:["vuedotjs","tailwindcss"]},{text:"Django",icons:["django"]},{text:"SQL",icons:["postgresql"]}];var P={data(){return{mainSkill:U,subSkill:H,aboutDetails:W}},components:{DetailListComp:S,SkillBlock:M}};const F=(0,h.Z)(P,[["render",N]]);var z=F;const O=["onClick"];function Q(t,e,i,n,r,s){return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.projects,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"project_card",key:e,onClick:e=>s.routeToPath(t.path)},[(0,o._)("h3",null,(0,y.zw)(t.title),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.tags,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"project_tags",key:e},(0,y.zw)(t),1)))),128))],8,O)))),128)}i(7658);var X={pyautogui:{title:"얼굴 인식 기반의 마우스 제어",tags:["Opencv","Pyautogui","Mediapipe","Python"],path:"/pyautogui"},transformer:{title:"RoBERTa를 활용한 감정 분석",tags:["Transformers","Pytorch","Python","NLP"],path:"/transformer"},pincette:{title:"이미지 크롤링 및 전처리 자동화",tags:["Selenium","Pillow","Python"],path:"/pincette"},profile:{title:"소개 페이지 (현재)",tags:["Vue.js","Tailwindcss","HTML5","CSS3"],path:"/vue-page"}},_={data(){return{projects:X}},methods:{routeToPath(t){this.$router.push(t)}}};const q=(0,h.Z)(_,[["render",Q]]);var J=q,K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAADI2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5OTZCQjhGQTc2MTYxMUU1QTg0RThGQjE2NDkxNjJEOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5OTZCQjhGOTc2MTYxMUU1QTg0RThGQjE2NDkxNjJEOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NTZBMTI3OTc2OTIxMUUzOTE4OThEOTBCRjhDRTQ3NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NTZBMTI3QTc2OTIxMUUzOTE4OThEOTBCRjhDRTQ3NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlYejCoAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAACoFBMVEVHcExBuINB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";const $={id:"page-404"},tt=(0,o._)("img",{src:K},null,-1),et=(0,o._)("h2",null,"페이지를 찾지 못했습니다",-1),it=(0,o._)("div",null,"Page Not Found",-1),nt=[tt,et,it];function ot(t,e){return(0,o.wg)(),(0,o.iD)("div",$,nt)}const rt={},st=(0,h.Z)(rt,[["render",ot]]);var at=st,lt=i.p+"img/pincette1.63ea03aa.png";const ut=(0,o.uE)('<article><p> GitHub 코드 공개: <a href="https://github.com/Denev6/image-data-crawler" target="_blank">github.com/Denev6/image-data-crawler</a><br></p><img src="'+lt+'"><h3>구현 기능</h3><p><ul><li>이미지 크롤링 자동화</li><li>응답 대기 시간, 스크롤 횟수 설정</li><li>저장 파일 이름, 형식 등 포맷팅</li><li>gif 이미지 분할</li><li>이미지 크기, 색상 처리 및 압축</li></ul></p><h3>제작 기술</h3><p><ul><li>Selenium: <span>Apache License 2.0</span></li><li>Pillow: <span>HPND License</span></li></ul></p><h3>개선 방안</h3><p><ul><li>Go를 활용한 비동기 처리 및 속도 향상</li></ul></p></article>',1);function ct(t,e,i,n,r,s){const a=(0,o.up)("TitleComp");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a,{title:r.project.title,tags:r.project.tags},null,8,["title","tags"]),ut],64)}var pt={data(){return{project:X.pincette}}};const gt=(0,h.Z)(pt,[["render",ct]]);var mt=gt;const ht=(0,o.uE)('<article><img src="'+K+'"><h3>페이지 소개</h3><p> 저를 소개하기 위해 제작한 프로필 페이지입니다. </p><h3>제작 기술</h3><p><ul><li>Vue.js<span>: MIT License</span></li><li>Tailwindcss<span>: MIT License</span></li><li>Bootstrap Icons<span>: MIT License</span></li><li>Noto Sans KR<span>: OFL</span></li><li>Simple Icons<span>: CC0 1.0 Universal</span></li></ul></p><h3>프로젝트 기록</h3><p><ul><li><a href="https://denev6.tistory.com/entry/Vue-profile" target="_blank">시작 계기 및 진행 과정</a></li></ul></p></article>',1);function dt(t,e,i,n,r,s){const a=(0,o.up)("TitleComp");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a,{title:r.project.title,tags:r.project.tags},null,8,["title","tags"]),ht],64)}var vt={data(){return{project:X.profile}}};const ft=(0,h.Z)(vt,[["render",dt]]);var bt=ft,wt=i.p+"img/pyautogui1.18975f05.png",Bt=i.p+"img/pyautogui2.f7099da7.png";const It=(0,o._)("p",null,[(0,o.Uk)(" GitHub 코드 공개: "),(0,o._)("a",{href:"https://github.com/Denev6/face-mouse-control",target:"_blank"},"github.com/Denev6/face-mouse-control"),(0,o._)("br")],-1),Nt=(0,o._)("p",null,[(0,o.Uk)(" 논문 조회: "),(0,o._)("a",{href:"https://doi.org/10.6109/jkiice.2022.26.9.1279",target:"_blank"},"doi.org/10.6109/jkiice.2022.26.9.1279")],-1),yt=(0,o._)("img",{class:"img-shadow",src:wt,alt:"논문 중 시연 장면"},null,-1),kt=(0,o._)("h3",null,"프로젝트 진행",-1),At=(0,o._)("p",null," 얼굴의 방향에 따라 마우스를 제어하고 눈 깜빡임을 통해 클릭을 수행합니다. 얼굴 랜드마크 좌표를 이용해 얼굴 주시 방향을 측정했으며, FachMesh와 Pyautogui를 중심으로 구현하였습니다. 해당 내용을 오픈소스로 모두 공개했으며, 교내 'Co-Deep Learning' 프로젝트를 통해 두 분의 전문가분께 질문 및 피드백을 받는 시간을 가졌습니다. 최종적으로 연구 내용을 논문으로 정리하여 등록하였습니다. ",-1),Dt=(0,o.uE)('<h3>역할</h3><p><ul><li>프로젝트 팀장</li><li>얼굴 방향 / 눈 깜빡임 인식 구현 및 시스템 통합</li><li>논문 작성 및 전체 과정 참여</li></ul></p><h3>세부 내용 요약</h3><p><ul><li>얼굴 인식 모델 (FaceMesh, Dlib) 비교</li><li>얼굴 방향 검출 알고리즘 (2D, 3D) 비교</li><li>전체 구현 및 통합 과정</li><li>테스트 결과</li><li>사용자 설문 및 개선사항</li></ul></p><img src="'+Bt+'" alt="전체 구조"><h3>기록</h3><p><ul><li><a href="https://denev6.tistory.com/entry/face-mouse-control" target="_blank">프로젝트에 대한 생각</a></li></ul></p>',7);function jt(t,e,i,n,r,s){const a=(0,o.up)("TitleComp"),l=(0,o.up)("ModalView");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a,{title:r.project.title,tags:r.project.tags},null,8,["title","tags"]),(0,o._)("article",null,[It,Nt,yt,kt,At,(0,o._)("button",{onClick:e[0]||(e[0]=t=>r.modalState=!0)},"피드백 보기"),Dt]),1==r.modalState?((0,o.wg)(),(0,o.j4)(l,{key:0,onClick:e[1]||(e[1]=t=>r.modalState=!1)})):(0,o.kq)("",!0)],64)}var Tt=i.p+"img/pyautogui0.935516a4.png";const Ct={id:"modal"},Zt=(0,o._)("img",{src:Tt},null,-1),xt=(0,o._)("div",{id:"close-tab"},"아무 곳이나 클릭해 닫기",-1),St=[Zt,xt];function Lt(t,e){return(0,o.wg)(),(0,o.iD)("div",Ct,St)}const Gt={},Rt=(0,h.Z)(Gt,[["render",Lt]]);var Yt=Rt,Vt={data(){return{project:X.pyautogui,modalState:!1}},components:{ModalView:Yt}};const Mt=(0,h.Z)(Vt,[["render",jt]]);var Et=Mt;const Wt=(0,o.uE)('<article><p> GitHub 코드 공개: <a href="https://github.com/Denev6/practice/tree/main/transformer" target="_blank">github.com/Denev6/practice/transformer</a><br></p><p> 데이터 출처: <a href="https://dacon.io/competitions/official/236027/data" target="_blank">dacon.io/competitions/236027</a><br></p><h3>프로젝트 요약</h3><p><ul><li>영어 문장 감정 분류</li><li>RoBERTa Fine-tuning</li><li>데이터 전처리 및 성능 평가</li><li>Transformers &amp; PyTorch 활용</li></ul></p><h3>데이터 정보</h3><p><table><thead><tr><th>Column</th><th>Type</th></tr></thead><tbody><tr><td>ID</td><td>Object</td></tr><tr><td>Utterance</td><td>Object</td></tr><tr><td>Dialogue_ID</td><td>Integer</td></tr><tr><td>Target</td><td>Object</td></tr><tr><td colspan="2">...</td></tr></tbody></table><a class="article_colab-link" href="https://github.com/Denev6/practice/blob/main/transformer/data_processing.ipynb" target="_blank"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"></a></p><h3>모델 정보</h3><p><ul><li>Accuracy: 0.79379</li><li>Batch Size: 16*16</li><li>Optimizer: AdamW</li><li>Model: <a href="https://github.com/tae898/erc" target="_blank">Emoberta-large (tae898)</a></li></ul><a class="article_colab-link" href="https://colab.research.google.com/github/Denev6/practice/blob/main/transformer/RoBERTa_pytorch.ipynb" target="_blank"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"></a></p><h3>기록</h3><p><ul><li><a href="https://denev6.tistory.com/entry/transformers-emo-classify" target="_blank">프로젝트 전체 기록</a></li><li><a href="https://denev6.tistory.com/entry/EmoBERTa" target="_blank">BASE 모델 학습 과정</a></li></ul></p></article>',1);function Ut(t,e,i,n,r,s){const a=(0,o.up)("TitleComp");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a,{title:r.project.title,tags:r.project.tags},null,8,["title","tags"]),Wt],64)}var Ht={data(){return{project:X.transformer}}};const Pt=(0,h.Z)(Ht,[["render",Ut]]);var Ft=Pt;const zt=[{path:"/profile",name:"about",component:z},{path:"/",redirect:"/profile"},{path:"/project",name:"project",component:J},{path:"/pincette",name:"pincette",component:mt},{path:"/vue-page",name:"vue-page",component:bt},{path:"/pyautogui",name:"pyautogui",component:Et},{path:"/transformer",name:"transformer",component:Ft},{path:"/404",name:"notFoundView",component:at},{path:"/:pathMatch(.*)*",redirect:"/404"}],Ot=(0,f.p7)({history:(0,f.PO)(),scrollBehavior(){return{top:0}},routes:zt});var Qt=Ot;const Xt={id:"article_title"},_t=(0,o._)("hr",{id:"article_hr"},null,-1);function qt(t,e,i,n,r,s){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("h1",Xt,(0,y.zw)(i.title),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.tags,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"article_tags",key:e},(0,y.zw)(t),1)))),128)),_t],64)}var Jt={props:{title:{type:String},tags:{type:Array}}};const Kt=(0,h.Z)(Jt,[["render",qt]]);var $t=Kt;const te=(0,n.ri)(v);te.component("TitleComp",$t),te.use(Qt),te.mount("#app")},8074:function(t,e,i){var n={"./anaconda.svg":4800,"./arrow-up.svg":2377,"./c.svg":6589,"./django.svg":3180,"./docker.svg":3945,"./education.svg":4550,"./github.svg":8239,"./go.svg":8871,"./javascript.svg":4134,"./links.svg":1953,"./linux.svg":6440,"./mail.svg":6755,"./nav-arrow.svg":3378,"./opencv.svg":9766,"./paper.svg":2961,"./postgresql.svg":4318,"./project.svg":8939,"./python.svg":4994,"./pytorch.svg":3029,"./tailwindcss.svg":4179,"./tech-stack.svg":2984,"./tensorflow.svg":478,"./vuedotjs.svg":6078};function o(t){var e=r(t);return i(e)}function r(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=r,t.exports=o,o.id=8074},4800:function(t,e,i){"use strict";t.exports=i.p+"img/anaconda.1f61f074.svg"},2377:function(t,e,i){"use strict";t.exports=i.p+"img/arrow-up.0b3a2cfd.svg"},6589:function(t,e,i){"use strict";t.exports=i.p+"img/c.e83710d2.svg"},3180:function(t,e,i){"use strict";t.exports=i.p+"img/django.ba2c6875.svg"},3945:function(t,e,i){"use strict";t.exports=i.p+"img/docker.19f4b350.svg"},4550:function(t,e,i){"use strict";t.exports=i.p+"img/education.ef4bd645.svg"},8239:function(t,e,i){"use strict";t.exports=i.p+"img/github.1290de3d.svg"},8871:function(t,e,i){"use strict";t.exports=i.p+"img/go.4a1a310b.svg"},4134:function(t,e,i){"use strict";t.exports=i.p+"img/javascript.f7af06dc.svg"},1953:function(t,e,i){"use strict";t.exports=i.p+"img/links.5df6cb84.svg"},6440:function(t,e,i){"use strict";t.exports=i.p+"img/linux.854a4548.svg"},6755:function(t,e,i){"use strict";t.exports=i.p+"img/mail.b24f5c13.svg"},3378:function(t,e,i){"use strict";t.exports=i.p+"img/nav-arrow.c6e3f095.svg"},9766:function(t,e,i){"use strict";t.exports=i.p+"img/opencv.50f15d23.svg"},2961:function(t,e,i){"use strict";t.exports=i.p+"img/paper.b5df4206.svg"},4318:function(t,e,i){"use strict";t.exports=i.p+"img/postgresql.45da5af6.svg"},8939:function(t,e,i){"use strict";t.exports=i.p+"img/project.975218b3.svg"},4994:function(t,e,i){"use strict";t.exports=i.p+"img/python.c2ab2b2d.svg"},3029:function(t,e,i){"use strict";t.exports=i.p+"img/pytorch.8bbf2441.svg"},4179:function(t,e,i){"use strict";t.exports=i.p+"img/tailwindcss.affe6a35.svg"},2984:function(t,e,i){"use strict";t.exports=i.p+"img/tech-stack.81140a00.svg"},478:function(t,e,i){"use strict";t.exports=i.p+"img/tensorflow.e5511c35.svg"},6078:function(t,e,i){"use strict";t.exports=i.p+"img/vuedotjs.8d39798d.svg"}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,n,o,r){if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],o=t[c][1],r=t[c][2];for(var a=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(i.O).every((function(t){return i.O[t](n[l])}))?n.splice(l--,1):(a=!1,r<s&&(s=r));if(a){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,o,r]}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p="/profile/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,r,s=n[0],a=n[1],l=n[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(l)var c=l(i)}for(e&&e(n);u<s.length;u++)r=s[u],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(c)},n=self["webpackChunkprofile"]=self["webpackChunkprofile"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(4599)}));n=i.O(n)})();
//# sourceMappingURL=app.cc2592a6.js.map