let e=document.createElement("style");e.innerHTML=".high-form[data-v-0d2bde26]{padding-bottom:48px}",document.head.appendChild(e);import{an as o,a as t,r as i,c$ as s,d0 as r,i as n,o as d,j as a,k as l,aS as p,p as m}from"./index.b40ad814.js";import"./xlsx.a48e520c.js";import"./index.c8f8d537.js";import"./index.177f6a07.js";import"./Trigger.89356da9.js";import"./omit.b740cc6c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.75a704a4.js";import"./CheckOutlined.f94f10c7.js";import{s as c}from"./index.82e3a32a.js";import"./colors.519923f8.js";import"./index.6d7fef69.js";import"./RightOutlined.b50e3123.js";import"./index.61481b9e.js";import"./types.21061cc2.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4e7ee3f0.js";import"./_baseFor.f4e5f03f.js";import"./index.869eb5dd.js";import"./index.a172b251.js";import"./index.dc65dc5d.js";import"./index.28e3d310.js";import"./UpOutlined.3222a916.js";import"./LeftOutlined.f5c89844.js";import"./index.26143528.js";import"./index.28d4be50.js";import"./index.74f71be9.js";import"./index.3e43cab0.js";import"./index.1227a681.js";import"./zh_CN.0242bd16.js";import"./TableAction.4ab8111b.js";import"./index.5faa6d92.js";import"./CaretDownFilled.1920ec3e.js";import"./index.ae5ad30b.js";import"./CheckOutlined.bfdbeda5.js";import"./CloseOutlined.dc46097f.js";import"./EditTableHeaderIcon.3eac562f.js";import"./DownOutlined.5c039c25.js";import"./FullscreenOutlined.04d66ead.js";import"./functional.0e75de35.js";import"./LoadingOutlined.693212d5.js";import"./RedoOutlined.1825c355.js";import"./RightOutlined.6d34f4ae.js";import"./SettingOutlined.b96230a0.js";import"./useTimeout.1bfe8444.js";import"./tsxHelper.bf0a56cb.js";import"./index.0a2dd4cb.js";import"./domUtils.aa80c6b8.js";import"./index.e1b49b7d.js";import"./animation.7d37eb54.js";import"./useScrollTo.a4e46414.js";import"./useAttrs.ad7eb934.js";import"./index.53deb937.js";import"./index.010fea9b.js";import{u as f}from"./useForm.ea39812c.js";import"./index.2d2833fb.js";import"./useWindowSizeFn.70c01aff.js";import"./useFullScreen.b35deed9.js";import"./uuid.40269c00.js";import"./useExpose.a5ae0acd.js";import"./index.97b69a3c.js";import"./useTable.e77f462c.js";import u from"./PersonTable.f6ec6fd0.js";const b=o((()=>import("./PageFooter.67418d93.js"))),j=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],x=[{label:"私密",value:"1"},{label:"公开",value:"2"}],P=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:j},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:x},required:!0,colProps:{offset:2}}],g=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:j},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:x},required:!0,colProps:{offset:2}}];var h=t({components:{BasicForm:c,PersonTable:u,PageFooter:b},setup(){const e=i(null),[o,{validate:t}]=f({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1}),[s,{validate:r}]=f({baseColProps:{span:6},schemas:g,showActionButtonGroup:!1});return{register:o,registerTask:s,submitAll:async function(){try{e.value;const[o,i]=await Promise.all([t(),r()])}catch(e){}},tableRef:e}}});const v=p("data-v-0d2bde26");s("data-v-0d2bde26");const T={class:"high-form"},O=m(" 高级表单常见于一次性输入和提交大批量数据的场景。 "),q={class:"m-5"},F=m("提交");r();const S=v(((e,o,t,i,s,r)=>{const p=n("a-page-header"),m=n("BasicForm"),c=n("a-card"),f=n("PersonTable"),u=n("a-button"),b=n("PageFooter");return d(),a("div",T,[l(p,{title:"高级表单",ghost:!1},{default:v((()=>[O])),_:1}),l("div",q,[l(c,{title:"仓库管理",bordered:!1},{default:v((()=>[l(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),l(c,{title:"任务管理",bordered:!1,class:"mt-5"},{default:v((()=>[l(m,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),l(c,{title:"成员管理",bordered:!1,class:"mt-5"},{default:v((()=>[l(f,{ref:"tableRef"},null,512)])),_:1})]),l(b,null,{right:v((()=>[l(u,{type:"primary",onClick:e.submitAll},{default:v((()=>[F])),_:1},8,["onClick"])])),_:1})])}));h.render=S,h.__scopeId="data-v-0d2bde26";export default h;