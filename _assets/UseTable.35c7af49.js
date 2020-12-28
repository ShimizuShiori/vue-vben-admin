import{a as e,h as i,i as t,o,j as s,k as n,w as a,p as l}from"./index.b40ad814.js";import"./xlsx.a48e520c.js";import"./index.c8f8d537.js";import"./index.177f6a07.js";import"./Trigger.89356da9.js";import"./omit.b740cc6c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.75a704a4.js";import"./CheckOutlined.f94f10c7.js";import"./index.82e3a32a.js";import"./colors.519923f8.js";import"./index.6d7fef69.js";import"./RightOutlined.b50e3123.js";import"./index.61481b9e.js";import"./types.21061cc2.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4e7ee3f0.js";import"./_baseFor.f4e5f03f.js";import"./index.869eb5dd.js";import"./index.a172b251.js";import"./index.dc65dc5d.js";import"./index.28e3d310.js";import"./UpOutlined.3222a916.js";import"./LeftOutlined.f5c89844.js";import"./index.26143528.js";import"./index.28d4be50.js";import"./index.74f71be9.js";import"./index.3e43cab0.js";import"./index.1227a681.js";import"./zh_CN.0242bd16.js";import"./TableAction.4ab8111b.js";import"./index.5faa6d92.js";import"./CaretDownFilled.1920ec3e.js";import"./index.ae5ad30b.js";import"./CheckOutlined.bfdbeda5.js";import"./CloseOutlined.dc46097f.js";import{s as r}from"./EditTableHeaderIcon.3eac562f.js";import"./DownOutlined.5c039c25.js";import"./FullscreenOutlined.04d66ead.js";import"./functional.0e75de35.js";import"./LoadingOutlined.693212d5.js";import"./RedoOutlined.1825c355.js";import"./RightOutlined.6d34f4ae.js";import"./SettingOutlined.b96230a0.js";import"./useTimeout.1bfe8444.js";import"./tsxHelper.bf0a56cb.js";import"./index.0a2dd4cb.js";import"./domUtils.aa80c6b8.js";import"./index.e1b49b7d.js";import"./animation.7d37eb54.js";import"./useScrollTo.a4e46414.js";import"./useAttrs.ad7eb934.js";import"./index.53deb937.js";import"./index.010fea9b.js";import"./useForm.ea39812c.js";import"./index.2d2833fb.js";import"./useWindowSizeFn.70c01aff.js";import"./useFullScreen.b35deed9.js";import"./uuid.40269c00.js";import"./useExpose.a5ae0acd.js";import"./index.97b69a3c.js";import{u as c}from"./useTable.e77f462c.js";import{getBasicColumns as d,getBasicShortColumns as m}from"./tableData.af0e1ad7.js";import{d as p}from"./table.8b42cf01.js";var u=e({components:{BasicTable:r},setup(){const{createMessage:e}=i(),[t,{setLoading:o,setColumns:s,getColumns:n,getDataSource:a,reload:l,getPaginationRef:r,setPagination:u,getSelectRows:f,getSelectRowKeys:j,setSelectedRowKeys:b,clearSelectedRowKeys:g}]=c({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:p,columns:d(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:t,changeLoading:function(){o(!0),setTimeout((()=>{o(!1)}),1e3)},changeColumns:function(){s(m())},reloadTable:function(){s(d()),l({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){u({current:2}),l()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){g()}}}});const f={class:"p-4"},j={class:"mb-4"},b=l("还原"),g=l("开启loading"),C=l("更改Columns"),x=l("获取Columns"),k=l("获取表格数据"),S=l("跳转到第2页"),T={class:"mb-4"},w=l("获取选中行"),R=l("获取选中行Key"),_=l("设置选中行"),O=l("清空选中行"),h=l("获取分页信息");u.render=function(e,i,l,r,c,d){const m=t("a-button"),p=t("BasicTable");return o(),s("div",f,[n("div",j,[n(m,{class:"mr-2",onClick:e.reloadTable},{default:a((()=>[b])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.changeLoading},{default:a((()=>[g])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.changeColumns},{default:a((()=>[C])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getColumn},{default:a((()=>[x])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getTableData},{default:a((()=>[k])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:a((()=>[S])),_:1},8,["onClick"])]),n("div",T,[n(m,{class:"mr-2",onClick:e.getSelectRowList},{default:a((()=>[w])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:a((()=>[R])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:a((()=>[_])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.clearSelect},{default:a((()=>[O])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getPagination},{default:a((()=>[h])),_:1},8,["onClick"])]),n(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default u;