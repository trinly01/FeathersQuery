(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"62A8":function(t,e,i){"use strict";var a=i("aHCp"),n=i.n(a);n.a},"8kEK":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{staticClass:"bg-blue-grey-9",attrs:{view:"hHh Lpr lFf"}},[i("q-window-resize-observable",{on:{resize:t.onResize}}),i("q-layout-header",[i("q-toolbar",{attrs:{color:"secondary",inverted:"ios"===t.$q.theme}},[i("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.size.width>=500,expression:"size.width >= 500"}],staticClass:"no-shadow",attrs:{color:"blue-grey-9",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.isMini=!t.isMini,t.leftDrawerOpen=!0}}},[i("q-icon",{attrs:{name:"data usage"}})],1),i("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.size.width<500,expression:"size.width < 500"}],staticClass:"no-shadow",attrs:{color:"blue-grey-9",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[i("q-icon",{attrs:{name:"data usage"}})],1),i("q-toolbar-title",[t._v("\n        OpenAPI.gov.ph\n        "),i("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Running on Quasar v"+t._s(t.$q.version))])]),i("div",[i("q-toolbar-title",[i("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("by Trinmar Boado")])])],1)],1)],1),i("q-layout-drawer",{staticClass:"bg-dark",attrs:{mini:t.isMini,"content-class":"mat"===t.$q.theme?"bg-blue-grey-14":null},on:{mouseover:function(e){t.isMini=!1},mouseout:t.goMini},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[i("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":"",dark:""}},[i("q-item",{attrs:{exact:"",to:"/"}},[i("q-item-side",{attrs:{icon:"account balance"}}),i("q-item-main",{attrs:{label:"Home",sublabel:""}})],1),i("q-list-header",[t._v("Essential Links")]),i("q-item",{nativeOn:{click:function(e){t.openURL("http://docs.feathersjs.com")}}},[i("q-item-side",{attrs:{icon:"school"}}),i("q-item-main",{attrs:{label:"OpenAPI Docs",sublabel:"docs.api.gov.ph"}})],1),i("q-item",{nativeOn:{click:function(e){t.openURL("https://stackoverflow.com/questions/tagged/feathersjs")}}},[i("q-item-side",{attrs:{icon:"fab fa-stack-overflow"}}),i("q-item-main",{attrs:{label:"StackOverflow",sublabel:"stackoverflow.com"}})],1),i("q-item",{nativeOn:{click:function(e){t.openURL("https://github.com/feathersjs")}}},[i("q-item-side",{attrs:{icon:"fab fa-github"}}),i("q-item-main",{attrs:{label:"GitHub",sublabel:"github.com/trinly01"}})],1),i("q-item",{nativeOn:{click:function(e){t.openURL("https://feathersjs.slack.com")}}},[i("q-item-side",{attrs:{icon:"fab fa-slack"}}),i("q-item-main",{attrs:{label:"Slack Channel",sublabel:"openapi.slack.com"}})],1),i("q-item",{nativeOn:{click:function(e){t.openURL("https://blog.feathersjs.com")}}},[i("q-item-side",{attrs:{icon:"fab fa-medium"}}),i("q-item-main",{attrs:{label:"Medium Articles",sublabel:"blog.api.gov.ph"}})],1),i("q-item",{nativeOn:{click:function(e){t.openURL("https://www.facebook.com/webmobile.ph/")}}},[i("q-item-side",{attrs:{icon:"fab fa-facebook"}}),i("q-item-main",{attrs:{label:"Facebook Group",sublabel:"fb.com/webmobile.ph"}})],1)],1)],1),i("q-page-container",[i("q-btn",{staticStyle:{position:"absolute",top:"50%"},style:{left:t.isMini?"20px":"260px"},attrs:{color:"blue-grey-14"},on:{click:function(e){t.isMini=!t.isMini,t.leftDrawerOpen=!0}}},[i("q-icon",{staticStyle:{position:"relative",left:"20px"},attrs:{size:"",name:t.isMini?"arrow right":"arrow left"}})],1),i("router-view")],1)],1)},n=[];a._withStripped=!0;var s=i("4IOb"),o={name:"MyLayout",mounted:function(){this.goMini()},data:function(){return{timer:null,leftDrawerOpen:this.$q.platform.is.desktop,isMini:!1,size:{width:1200,height:920}}},methods:{openURL:s["d"],onResize:function(t){console.log(t),this.size=t},goMini:function(){var t=this;clearTimeout(this.timer),this.timer=setTimeout(function(){t.isMini=!0},5e3)}}},l=o,r=(i("62A8"),i("KHd+")),c=Object(r["a"])(l,a,n,!1,null,null,null);c.options.__file="MyLayout.vue";e["default"]=c.exports},aHCp:function(t,e,i){}}]);