import{df as a,r as e,cv as s,f as t,dg as i,ad as l,dc as n,F as d,dh as c}from"./index.b40ad814.js";function r(r){a();const o=e(null),u=e(!1);async function m(){const a=t(o);return a||n("The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!"),await d(),a}return[function(a){s((()=>{o.value=null,u.value=null})),t(u)&&i()&&a===t(o)||(o.value=a,u.value=!0,l((()=>{r&&a.setProps(c(r))})))},{scrollToField:async(a,e)=>{(await m()).scrollToField(a,e)},setProps:async a=>{(await m()).setProps(a)},updateSchema:async a=>{(await m()).updateSchema(a)},clearValidate:async a=>{(await m()).clearValidate(a)},resetFields:async()=>{m().then((async a=>{await a.resetFields()}))},removeSchemaByFiled:async a=>{(await m()).removeSchemaByFiled(a)},getFieldsValue:()=>{var a;return null==(a=t(o))?void 0:a.getFieldsValue()},setFieldsValue:async a=>{(await m()).setFieldsValue(a)},appendSchemaByField:async(a,e)=>{(await m()).appendSchemaByField(a,e)},submit:async()=>(await m()).submit(),validate:async a=>(await m()).validate(a),validateFields:async a=>(await m()).validateFields(a)}]}export{r as u};