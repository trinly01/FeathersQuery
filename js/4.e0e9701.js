(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"w/Ns":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("q-toolbar",{attrs:{color:"primary"}},[o("q-toolbar-title",[t._v("\n      Todo App\n    ")]),o("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"mail"}})],1),o("div",{staticClass:"column layout-padding"},[o("q-field",{attrs:{icon:"check",error:!t.task}},[o("form",{on:{submit:function(e){return e.preventDefault(),t.save(e)}}},[o("q-input",{attrs:{"float-label":"task"},model:{value:t.task,callback:function(e){t.task=e},expression:"task"}})],1)]),o("q-list",{attrs:{highlight:""}},[o("q-list-header",[t._v("Todos")]),t._l(t.todos,function(e,n){return o("q-item",{key:n},[o("q-item-side",[o("q-checkbox",{attrs:{value:e.isDone},nativeOn:{click:function(o){t.update(e._id,e.isDone)}}})],1),o("q-item-main",{attrs:{label:e.desc}}),o("q-item-side",[o("q-btn",{attrs:{icon:"delete",round:"",color:"negative",size:"sm"},on:{click:function(o){t.remove(e._id)}}})],1)],1)})],2)],1)],1)},s=[];n._withStripped=!0;var i={mounted:function(){},data:function(){return{task:"",todos:[{desc:"Add button with save function",isDone:!1}]}},methods:{save:function(){this.$dbCon.services.todos.create({desc:this.task,isDone:!1}),this.task="",console.log("TODOS",this.todos)},remove:function(t){this.$dbCon.services.todos.remove(t)},update:function(t,e){this.$dbCon.services.todos.patch(t,{isDone:!e})}}},a=i,r=o("KHd+"),c=Object(r["a"])(a,n,s,!1,null,null,null);c.options.__file="todo.vue";e["default"]=c.exports}}]);