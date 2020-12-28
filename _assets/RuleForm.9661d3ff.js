import{a as e,h as s,i,o,j as a,k as t,w as l,p as r}from"./index.b40ad814.js";import"./xlsx.a48e520c.js";import"./index.177f6a07.js";import"./Trigger.89356da9.js";import"./omit.b740cc6c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.75a704a4.js";import"./CheckOutlined.f94f10c7.js";import{s as n}from"./index.82e3a32a.js";import"./colors.519923f8.js";import"./RightOutlined.b50e3123.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4e7ee3f0.js";import"./index.869eb5dd.js";import"./index.a172b251.js";import"./index.28e3d310.js";import"./UpOutlined.3222a916.js";import"./index.26143528.js";import"./index.28d4be50.js";import"./index.3e43cab0.js";import"./index.5faa6d92.js";import{a as d}from"./index.ae5ad30b.js";import"./LoadingOutlined.693212d5.js";import"./RightOutlined.6d34f4ae.js";import"./useTimeout.1bfe8444.js";import"./tsxHelper.bf0a56cb.js";import"./index.0a2dd4cb.js";import"./domUtils.aa80c6b8.js";import"./index.e1b49b7d.js";import"./animation.7d37eb54.js";import"./useScrollTo.a4e46414.js";import"./useAttrs.ad7eb934.js";import"./index.53deb937.js";import"./index.010fea9b.js";import{u as c}from"./useForm.ea39812c.js";const p=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa"}]},{field:"field44",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,s)=>s?"1"===s?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空"),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]}];var m=e({components:{BasicForm:n,CollapseContainer:d},setup(){const{createMessage:e}=s(),[i,{validateFields:o,clearValidate:a,getFieldsValue:t,setFieldsValue:l}]=c({labelWidth:120,schemas:p,actionColOptions:{span:24}});return{register:i,schemas:p,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},getFormValues:function(){const s=t();e.success("values:"+JSON.stringify(s))},setFormValues:function(){l({field1:1111,field5:["1"],field7:"1"})},validateForm:async function(){try{await o()}catch(e){}},resetValidate:async function(){a()}}}});const u={class:"m-4"},f={class:"mb-4"},b=r("手动校验表单"),j=r("清空校验信息"),g=r("获取表单值"),x=r("设置表单值");m.render=function(e,s,r,n,d,c){const p=i("a-button"),m=i("BasicForm"),v=i("CollapseContainer");return o(),a("div",u,[t("div",f,[t(p,{onClick:e.validateForm,class:"mr-2"},{default:l((()=>[b])),_:1},8,["onClick"]),t(p,{onClick:e.resetValidate,class:"mr-2"},{default:l((()=>[j])),_:1},8,["onClick"]),t(p,{onClick:e.getFormValues,class:"mr-2"},{default:l((()=>[g])),_:1},8,["onClick"]),t(p,{onClick:e.setFormValues,class:"mr-2"},{default:l((()=>[x])),_:1},8,["onClick"])]),t(v,{title:"表单校验"},{default:l((()=>[t(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])};export default m;