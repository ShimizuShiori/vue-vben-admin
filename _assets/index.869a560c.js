import{a as e,s as n,f as s,i as t,o as a,j as i,w as r,k as d,ac as o,aH as l,m,n as u,x as c,v as f,y as p}from"./index.b40ad814.js";import{D as y}from"./index.6d7fef69.js";import{M as v}from"./index.61481b9e.js";import{s as g}from"./index.53deb937.js";var k=e({name:"BasicDropdown",components:{[y.name]:y,[v.name]:v,[v.Item.name]:v.Item,[v.Divider.name]:v.Divider,Icon:g},props:{trigger:{type:[Array],default:()=>["contextmenu"]},dropMenuList:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]}},emits:["menuEvent"],setup(e,{emit:t}){const a=n((()=>e.dropMenuList));return{handleClickMenu:function({key:e}){const n=s(a).find((n=>`${n.event}`==`${e}`));t("menuEvent",n)},getMenuList:a}}});const x={class:"ml-1"};k.render=function(e,n,s,p,y,v){const g=t("Icon"),k=t("a-menu-item"),M=t("a-menu-divider"),b=t("a-menu"),$=t("a-dropdown");return a(),i($,f({trigger:e.trigger},e.$attrs),{overlay:r((()=>[d(b,{selectedKeys:e.selectedKeys},{default:r((()=>[(a(!0),i(o,null,l(e.getMenuList,(n=>(a(),i(o,{key:`${n.event}`},[d(k,{onClick:s=>e.handleClickMenu({key:n.event}),disabled:n.disabled},{default:r((()=>[n.icon?(a(),i(g,{key:0,icon:n.icon},null,8,["icon"])):m("v-if",!0),d("span",x,u(n.text),1)])),_:2},1032,["onClick","disabled"]),n.divider?(a(),i(M,{key:`d-${n.event}`})):m("v-if",!0)],64)))),128))])),_:1},8,["selectedKeys"])])),default:r((()=>[d("span",null,[c(e.$slots,"default")])])),_:3},16,["trigger"])},p(k);export{k as s};