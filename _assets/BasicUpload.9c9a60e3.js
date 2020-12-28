let e=document.createElement("style");e.innerHTML=".thumb img[data-v-1c5b9d26]{position:static;display:block;width:104px;height:104px;-o-object-fit:cover;object-fit:cover}.file-table{width:100%;border-collapse:collapse}.file-table .center{text-align:center}.file-table .left{text-align:left}.file-table .right{text-align:right}.file-table-td,.file-table-th{padding:12px 8px}.file-table thead{background-color:#f0f2f5}.file-table table,.file-table td,.file-table th{border:1px solid #ebeef5}.upload-modal .ant-upload-list{display:none}.upload-modal .ant-table-wrapper .ant-spin-nested-loading{padding:0}.upload-modal-toolbar{display:flex;align-items:center;margin-bottom:8px}.upload-modal-toolbar__btn{margin-left:8px;text-align:right;flex:1}.upload-preview-modal .ant-upload-list{display:none}.upload-preview-modal .ant-table-wrapper .ant-spin-nested-loading{padding:0}",document.head.appendChild(e);import{u as t,s as o,f as a,a as n,q as l,c$ as i,d0 as r,o as s,j as d,m as u,aS as c,V as p,cA as m,r as f,b as g,a6 as b,h,dB as v,i as x,w,k as R,p as j,n as y,v as C,aq as S,ac as U}from"./index.b40ad814.js";import"./xlsx.a48e520c.js";import"./Trigger.89356da9.js";import{o as k}from"./omit.b740cc6c.js";import"./_baseSlice.1123a25b.js";import"./CheckOutlined.f94f10c7.js";import{A as P}from"./index.d4742dfc.js";import"./colors.519923f8.js";import"./index.6d7fef69.js";import"./RightOutlined.b50e3123.js";import"./index.61481b9e.js";import"./types.21061cc2.js";import{U as L}from"./index.7c1414a5.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4e7ee3f0.js";import"./_baseFor.f4e5f03f.js";import"./index.a172b251.js";import{T as O}from"./index.dc65dc5d.js";import"./index.26143528.js";import{T as I}from"./index.28d4be50.js";import{T as M}from"./TableAction.4ab8111b.js";import{P as A}from"./index.1d67ea21.js";import"./FileOutlined.bf9767b9.js";import"./index.ae5ad30b.js";import"./CloseOutlined.dc46097f.js";import"./DownOutlined.5c039c25.js";import"./FullscreenOutlined.04d66ead.js";import{c as T}from"./functional.0e75de35.js";import"./LoadingOutlined.693212d5.js";import"./RightOutlined.6d34f4ae.js";import"./useTimeout.1bfe8444.js";import"./tsxHelper.bf0a56cb.js";import"./index.0a2dd4cb.js";import"./domUtils.aa80c6b8.js";import"./index.e1b49b7d.js";import"./animation.7d37eb54.js";import"./useScrollTo.a4e46414.js";import"./useAttrs.ad7eb934.js";import{s as N}from"./index.53deb937.js";import"./index.010fea9b.js";import{s as F,b as _,a as B}from"./index.2d2833fb.js";import"./useWindowSizeFn.70c01aff.js";import{b as E}from"./uuid.40269c00.js";import{a as z}from"./download.2a1016c7.js";const{t:D}=t();var $,H;(H=$||($={})).SUCCESS="success",H.ERROR="error",H.UPLOADING="uploading";const G={helpText:{type:String,default:""},maxSize:{type:Number,default:2},maxNumber:{type:Number,default:Infinity},accept:{type:Array,default:()=>[]},multiple:{type:Boolean,default:!0},uploadParams:{type:Object,default:{}},api:{type:Function,default:null,required:!0}},W={value:{type:Array,default:()=>[]},...G,showPreviewNumber:{type:Boolean,default:!0},emptyHidePreview:{type:Boolean,default:!1}},q={value:{type:Array,default:()=>[]}},V={columns:{type:[Array],default:null},actionColumn:{type:Object,default:null},dataSource:{type:Array,default:null}};function K(e){return J(e.name)}function J(e){return/\.(jpg|jpeg|png|gif)$/i.test(e)}var Q=n({props:{fileUrl:l.string.def(""),fileName:l.string.def("")}});const X=c("data-v-1c5b9d26");i("data-v-1c5b9d26");const Y={class:"thumb"};r();const Z=X(((e,t,o,a,n,l)=>(s(),d("span",Y,[e.fileUrl?(s(),d("img",{key:0,src:e.fileUrl},null,8,["src"])):u("v-if",!0)]))));Q.render=Z,Q.__scopeId="data-v-1c5b9d26";const{t:ee}=t();function te(e,t){return{width:120,title:ee("component.upload.operating"),dataIndex:"action",fixed:!1,customRender:({record:o})=>{const a=[{label:ee("component.upload.del"),color:"error",onClick:e.bind(null,o)}];return K(o)&&a.unshift({label:ee("component.upload.preview"),onClick:t.bind(null,o)}),p(M,{actions:a})}}}function oe({handleRemove:e,handlePreview:t,handleDownload:o}){return{width:160,title:ee("component.upload.operating"),dataIndex:"action",fixed:!1,customRender:({record:a})=>{const{url:n}=a||{},l=[{label:ee("component.upload.del"),color:"error",onClick:e.bind(null,a)},{label:ee("component.upload.download"),onClick:o.bind(null,a)}];return J(n)&&l.unshift({label:ee("component.upload.preview"),onClick:t.bind(null,a)}),p(M,{actions:l})}}}var ae=n({name:"FileList",props:V,setup:e=>()=>{const{columns:t,actionColumn:o,dataSource:a}=e,n=[...t,o];return p("table",{class:"file-table"},p("colgroup",null,n.map((e=>{const{width:t=0,dataIndex:o}=e;return p("col",{style:t?{width:`${t}px`,minWidth:`${t}px`}:{},key:o})}))),p("thead",null,p("tr",{class:"file-table-tr"},n.map((e=>{const{title:t="",align:o="center",dataIndex:a}=e;return p("th",{class:["file-table-th",o],key:a},t)})))),p("tbody",null,a.map(((e={},t)=>p("tr",{class:"file-table-tr",key:`${t+e.name||""}`},n.map((t=>{const{dataIndex:o="",customRender:a,align:n="center"}=t,l=a&&m(a);return p("td",{class:["file-table-td",n],key:o},l?null==a?void 0:a({text:e[o],record:e}):e[o])})))))))}}),ne=n({components:{BasicModal:F,Upload:L,Alert:P,FileList:ae},props:G,setup(e,{emit:n}){const{t:l}=t(),i=f(!1),r=f([]),s=g({fileList:[]}),[d,{closeModal:u}]=_(),{accept:c,helpText:x,maxNumber:w,maxSize:R}=b(e),{getAccept:j,getStringAccept:y,getHelpText:C}=function({acceptRef:e,helpTextRef:t,maxNumberRef:n,maxSizeRef:l}){const i=o((()=>{const t=a(e);return t&&t.length>0?t:[]})),r=o((()=>a(i).map((e=>`.${e}`)).join(","))),s=o((()=>{const o=a(t);if(o)return o;const i=[],r=a(e);r.length>0&&i.push(D("component.upload.accept",[r.join(",")]));const s=a(l);s&&i.push(D("component.upload.maxSize",[s]));const d=a(n);return d&&Infinity!==d&&i.push(D("component.upload.maxNumber",[d])),i.join("，")}));return{getAccept:i,getStringAccept:r,getHelpText:s}}({acceptRef:c,helpTextRef:x,maxNumberRef:w,maxSizeRef:R}),{createMessage:S}=h(),U=o((()=>r.value.length>0&&!r.value.every((e=>e.status===$.SUCCESS)))),k=o((()=>{const e=r.value.some((e=>e.status===$.SUCCESS));return{disabled:i.value||0===r.value.length||!e}})),P=o((()=>{const e=r.value.some((e=>e.status===$.ERROR));return i.value?l("component.upload.uploading"):l(e?"component.upload.reUploadFailed":"component.upload.startUpload")}));return{columns:[{dataIndex:"thumbUrl",title:ee("component.upload.legend"),width:100,customRender:({record:e})=>{const{thumbUrl:t}=e||{};return t&&p(Q,{fileUrl:t})}},{dataIndex:"name",title:ee("component.upload.fileName"),align:"left",customRender:({text:e,record:t})=>{const{percent:o,status:a}=t||{};let n="normal";return a===$.ERROR?n="exception":a===$.UPLOADING?n="active":a===$.SUCCESS&&(n="success"),p("span",null,p("p",{class:"ellipsis mb-1",title:e},e),p(A,{percent:o,size:"small",status:n}))}},{dataIndex:"size",title:ee("component.upload.fileSize"),width:100,customRender:({text:e=0})=>e&&(e/1024).toFixed(2)+"KB"},{dataIndex:"status",title:ee("component.upload.fileStatue"),width:100,customRender:({text:e})=>e===$.SUCCESS?p(I,{color:"green"},(()=>ee("component.upload.uploadSuccess"))):e===$.ERROR?p(I,{color:"red"},(()=>ee("component.upload.uploadError"))):e===$.UPLOADING?p(I,{color:"blue"},(()=>ee("component.upload.uploading"))):e}],actionColumn:te((function(e){const t=r.value.findIndex((t=>t.uuid===e.uuid));-1!==t&&r.value.splice(t,1)}),(function(e){const{thumbUrl:t=""}=e;T({imageList:[t]})})),register:d,closeModal:u,getHelpText:C,getStringAccept:y,getOkButtonProps:k,beforeUpload:function(t){const{size:o,name:n}=t,{maxSize:i}=e,s=a(j);if(i&&t.size/1024/1024>=i)return S.error(l("component.upload.maxSizeMultiple",[i])),!1;if(s.length>0&&!function(e,t){const o=t.join("|");return new RegExp("\\.("+o+")$","i").test(e.name)}(t,s))return S.error(l("component.upload.acceptUpload",[s.join(",")])),!1;const d={uuid:E(),file:t,size:o,name:n,percent:0,type:n.split(".").pop()};return K(t)?function(e){return new Promise(((t,o)=>{const a=new FileReader;a.readAsDataURL(e),a.onload=()=>t({result:a.result,file:e}),a.onerror=e=>o(e)}))}(t).then((({result:e})=>{r.value=[...a(r),{thumbUrl:e,...d}]})):r.value=[...a(r),d],!1},fileListRef:r,state:s,isUploadingRef:i,handleStartUpload:async function(){const{maxNumber:t}=e;if(r.value.length>t)return S.warning(l("component.upload.maxNumber",[t]));try{i.value=!0;const t=r.value.filter((e=>e.status!==$.SUCCESS))||[],o=await Promise.all(t.map((t=>async function(t){var o;const{api:a}=e;if(!a||!m(a))return v("upload api must exist and be a function");try{t.status=$.UPLOADING;const{data:a}=await(null==(o=e.api)?void 0:o.call(e,{...e.uploadParams||{},file:t.file},(function(e){const o=e.loaded/e.total*100|0;t.percent=o})));return t.status=$.SUCCESS,t.responseData=a,{success:!0,error:null}}catch(e){return t.status=$.ERROR,{success:!1,error:e}}}(t))));i.value=!1;const a=o.filter((e=>!e.success));if(a.length>0)throw a}catch(e){throw i.value=!1,e}},handleOk:function(){const{maxNumber:t}=e;if(r.value.length>t)return S.warning(l("component.upload.maxNumber",[t]));if(i.value)return S.warning(l("component.upload.saveWarn"));const o=[];for(const e of r.value){const{status:t,responseData:a}=e;t===$.SUCCESS&&a&&o.push(a.url)}if(o.length<=0)return S.warning(l("component.upload.saveError"));r.value=[],u(),n("change",o)},handleCloseFunc:function(){return i.value?(S.warning(l("component.upload.uploadWait")),!1):(r.value=[],!0)},getIsSelectFile:U,getUploadBtnText:P,t:l}}});const le={class:"upload-modal-toolbar"};ne.render=function(e,t,o,a,n,l){const i=x("a-button"),r=x("Alert"),u=x("Upload"),c=x("FileList"),p=x("BasicModal");return s(),d(p,C({width:"800px",title:e.t("component.upload.upload"),okText:e.t("component.upload.save")},e.$attrs,{onRegister:e.register,onOk:e.handleOk,closeFunc:e.handleCloseFunc,maskClosable:!1,keyboard:!1,wrapClassName:"upload-modal",okButtonProps:e.getOkButtonProps,cancelButtonProps:{disabled:e.isUploadingRef}}),{centerdFooter:w((()=>[R(i,{onClick:e.handleStartUpload,color:"success",disabled:!e.getIsSelectFile,loading:e.isUploadingRef},{default:w((()=>[j(y(e.getUploadBtnText),1)])),_:1},8,["onClick","disabled","loading"])])),default:w((()=>[R("div",le,[R(r,{message:e.getHelpText,type:"info",banner:"",class:"upload-modal-toolbar__text"},null,8,["message"]),R(u,{accept:e.getStringAccept,multiple:e.multiple,"before-upload":e.beforeUpload,class:"upload-modal-toolbar__btn"},{default:w((()=>[R(i,{type:"primary"},{default:w((()=>[j(y(e.t("component.upload.choose")),1)])),_:1})])),_:1},8,["accept","multiple","before-upload"])]),R(c,{dataSource:e.fileListRef,columns:e.columns,actionColumn:e.actionColumn},null,8,["dataSource","columns","actionColumn"])])),_:1},16,["title","okText","onRegister","onOk","closeFunc","okButtonProps","cancelButtonProps"])};var ie=n({components:{BasicModal:F,FileList:ae},props:q,setup(e,{emit:o}){const[n,{closeModal:l}]=_(),{t:i}=t(),r=f([]);return S((()=>e.value),(e=>{r.value=[],e.forEach((e=>{r.value=[...a(r),{url:e,type:e.split(".").pop()||"",name:e.split("/").pop()||""}]}))}),{immediate:!0}),{t:i,register:n,closeModal:l,fileListRef:r,columns:[{dataIndex:"url",title:ee("component.upload.legend"),width:100,customRender:({record:e})=>{const{url:t}=e||{};return J(t)&&p(Q,{fileUrl:t})}},{dataIndex:"name",title:ee("component.upload.fileName"),align:"left"}],actionColumn:oe({handleRemove:function(e){const t=r.value.findIndex((t=>t.url===e.url));-1!==t&&(r.value.splice(t,1),o("list-change",r.value.map((e=>e.url))))},handlePreview:function(e){const{url:t=""}=e;T({imageList:[t]})},handleDownload:function(e){const{url:t=""}=e;z({url:t})}})}}});ie.render=function(e,t,o,a,n,l){const i=x("FileList"),r=x("BasicModal");return s(),d(r,C({width:"800px",title:e.t("component.upload.preview"),wrapClassName:"upload-preview-modal"},e.$attrs,{onRegister:e.register,showOkBtn:!1}),{default:w((()=>[R(i,{dataSource:e.fileListRef,columns:e.columns,actionColumn:e.actionColumn},null,8,["dataSource","columns","actionColumn"])])),_:1},16,["title","onRegister"])};var re=n({name:"BasicUpload",components:{UploadModal:ne,UploadPreviewModal:ie,Icon:N,Tooltip:O},props:W,setup(e,{emit:n,attrs:l}){const{t:i}=t(),[r,{openModal:s}]=B(),[d,{openModal:u}]=B(),c=f([]),p=o((()=>{const{emptyHidePreview:t}=e;return!t||(!t||c.value.length>0)})),m=o((()=>{const t={...l,...e};return k(t,"onChange")}));return S((()=>e.value),((e=[])=>{c.value=e}),{immediate:!0}),{registerUploadModal:r,openUploadModal:s,handleChange:function(e){c.value=[...a(c),...e||[]],n("change",c.value)},handlePreviewChange:function(e){c.value=[...e||[]],n("change",c.value)},registerPreviewModal:d,openPreviewModal:u,fileListRef:c,showPreview:p,bindValue:m,t:i}}});re.render=function(e,t,o,a,n,l){const i=x("a-button"),r=x("Icon"),c=x("Tooltip"),p=x("a-button-group"),m=x("UploadModal"),f=x("UploadPreviewModal");return s(),d("div",null,[R(p,null,{default:w((()=>[R(i,{type:"primary",onClick:e.openUploadModal,preIcon:"carbon:cloud-upload"},{default:w((()=>[j(y(e.t("component.upload.upload")),1)])),_:1},8,["onClick"]),e.showPreview?(s(),d(c,{key:0,placement:"bottom"},{title:w((()=>[j(y(e.t("component.upload.uploaded"))+" ",1),e.fileListRef.length?(s(),d(U,{key:0},[j(y(e.fileListRef.length),1)],64)):u("v-if",!0)])),default:w((()=>[R(i,{onClick:e.openPreviewModal},{default:w((()=>[R(r,{icon:"bi:eye"}),e.fileListRef.length&&e.showPreviewNumber?(s(),d(U,{key:0},[j(y(e.fileListRef.length),1)],64)):u("v-if",!0)])),_:1},8,["onClick"])])),_:1})):u("v-if",!0)])),_:1}),R(m,C(e.bindValue,{onRegister:e.registerUploadModal,onChange:e.handleChange}),null,16,["onRegister","onChange"]),R(f,{value:e.fileListRef,onRegister:e.registerPreviewModal,onListChange:e.handlePreviewChange},null,8,["value","onRegister","onListChange"])])};export default re;