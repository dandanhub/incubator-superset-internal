(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{3086:function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return a});var i=e(2842);function a(t){var n=t.formData,e=t.queryData,a=t.width,u=t.height,r=n.allColumnsX,o=n.entity,c=n.minLeafNodeEventCount,d=e.data;if(d&&0<d.length){var h,f=((h={})[i.ENTITY_ID]=function(t){return t[o]+""},h[i.EVENT_NAME]=function(t){return t[r]},h[i.TS]=function(t){return new Date(t.__timestamp)},h);return{data:Object(i.cleanEvents)(d,f),height:u,initialMinEventCount:c,width:a}}return{data:null,height:u,width:a}}}}]);