(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-524a29ba"],{"2a2b":function(t,a,e){"use strict";e("e0c3")},8916:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"a",(function(){return o})),e.d(a,"c",(function(){return s}));var n=e("b775"),r={trendLog:"/log/trend",hoursLog:"/log/hours",listLog:"/log/list",updateLog:"/log/update"};function i(t){return Object(n["b"])({url:r.listLog,method:"post",data:t})}function o(t){return Object(n["b"])({url:r.hoursLog,method:"post",data:t})}function s(t){return Object(n["b"])({url:r.trendLog,method:"post",data:t})}},a1f4:function(t,a,e){"use strict";e.d(a,"h",(function(){return i})),e.d(a,"b",(function(){return o})),e.d(a,"d",(function(){return s})),e.d(a,"i",(function(){return c})),e.d(a,"e",(function(){return u})),e.d(a,"a",(function(){return l})),e.d(a,"f",(function(){return d})),e.d(a,"g",(function(){return g})),e.d(a,"c",(function(){return p}));var n=e("b775"),r={FirstLetters:"/package/getFirstLetters",FunctionGraph:"/package/getFunctionGraph",LocalPackages:"/package/getLocalPackages",PackageTable:"/package/getPackageTable",PackageSimple:"/package/getPackageSimple",PackageInfo:"/package/getPackageInfo",PackageGraph:"/package/getPackageGraph",PackageDemo:"/package/getPackageDemo",DemoCode:"/package/getDemoCode"};function i(t){return Object(n["b"])({url:r.PackageSimple,method:"post",data:t})}function o(t){return Object(n["b"])({url:r.FirstLetters,method:"post",data:t})}function s(t){return Object(n["b"])({url:r.LocalPackages,method:"post",data:t})}function c(t){return Object(n["b"])({url:r.PackageTable,method:"post",data:t})}function u(t){return Object(n["b"])({url:r.PackageDemo,method:"post",data:t})}function l(t){return Object(n["b"])({url:r.DemoCode,method:"post",data:t})}function d(t){return Object(n["b"])({url:r.PackageGraph,method:"post",data:t})}function g(t){return Object(n["b"])({url:r.PackageInfo,method:"get",params:t})}function p(t){return console.info("parameter in api getFunctionGraph",t),Object(n["b"])({url:r.FunctionGraph,method:"get",params:t})}},a69c:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("page-header-wrapper",{scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"page-header-content"},[e("div",{staticClass:"avatar"},[e("a-avatar",{attrs:{size:"large",src:t.currentUser.avatar}})],1),e("div",{staticClass:"content"},[e("div",{staticClass:"content-title"},[t._v(" "+t._s(t.timeFix)+"，"+t._s(t.user.name)),e("span",{staticClass:"welcome-text"},[t._v("，"+t._s(t.welcome))])]),e("div",[t._v("graphviewR")])])])]},proxy:!0},{key:"extraContent",fn:function(){return[e("div",{staticClass:"extra-content"},[e("div",{staticClass:"stat-item"},[e("a-statistic",{attrs:{title:"Installed Packages",value:t.installedPackages}})],1),e("div",{staticClass:"stat-item"},[e("a-statistic",{attrs:{title:"API calls weekly",value:t.apiCalls}})],1),e("div",{staticClass:"stat-item"},[e("a-statistic",{attrs:{title:"Active Tasks",value:t.activeTasks}})],1)])]},proxy:!0}])},[e("div",[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{xl:16,lg:24,md:24,sm:24,xs:24}},[e("a-card",{staticClass:"project-list",staticStyle:{"margin-bottom":"24px"},attrs:{loading:t.loading,bordered:!1,title:"Active Tasks","body-style":{padding:0}}},[e("a-table",{ref:"taskTable",attrs:{rowKey:"id",columns:t.tblColumns,"data-source":t.taskList,pagination:{pageSize:6},loading:t.loading}})],1),e("a-card",{staticClass:"project-list",staticStyle:{"margin-bottom":"24px"},attrs:{loading:t.loading,bordered:!1,title:"Usage Time Trend","body-style":{padding:0}}},[e("div",{attrs:{slot:"extra"},slot:"extra"},[e("div",{staticClass:"extra-item"},[e("a-radio-group",{model:{value:t.timeUnit,callback:function(a){t.timeUnit=a},expression:"timeUnit"}},[e("a-radio-button",{attrs:{value:"day"},on:{click:function(a){return t.setTimeUnit("day")}}},[t._v("Day")]),e("a-radio-button",{attrs:{value:"hour"},on:{click:function(a){return t.setTimeUnit("hour")}}},[t._v("Hour")])],1)],1)]),e("bar",{attrs:{data:t.logTrend,yAlias:t.yAlias,startDate:t.startDate}})],1)],1),e("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:8,lg:24,md:24,sm:24,xs:24}},[e("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:"Navigation",bordered:!1,"body-style":{padding:0}}},[e("div",{staticClass:"item-group"},[e("a",{on:{click:function(a){return t.toTableView()}}},[t._v("Table View")]),e("a",{on:{click:function(a){return t.toGraphView()}}},[t._v("Graph View")]),e("a",{on:{click:function(a){return t.toTaskList()}}},[t._v("My Task")]),e("a",{on:{click:function(a){return t.toTaskLog()}}},[t._v("My Log")]),e("a",{on:{click:function(a){return t.toREditor()}}},[t._v("R Editor")]),e("a",{on:{click:function(a){return t.toLearning()}}},[t._v("Learning")])])]),e("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:"Packages",loading:t.loading,bordered:!1,"body-style":{padding:0}}},[e("div",{attrs:{slot:"extra"},slot:"extra"},[e("div",{staticClass:"extra-item"},[e("a-radio-group",{model:{value:t.priority,callback:function(a){t.priority=a},expression:"priority"}},[e("a-radio-button",{attrs:{value:"all"},on:{click:function(a){return t.setPriority("all")}}},[t._v("ALL")]),e("a-radio-button",{attrs:{value:"high"},on:{click:function(a){return t.setPriority("high")}}},[t._v("High")]),e("a-radio-button",{attrs:{value:"base"},on:{click:function(a){return t.setPriority("base")}}},[t._v("Base")])],1)],1)]),e("a-table",{ref:"table",attrs:{columns:t.tblColumns1,"data-source":t.packageList,pagination:{pageSize:6},loading:t.loading}})],1)],1)],1)],1)])},r=[],i=e("5530"),o=(e("b0c0"),e("d3b7"),e("c1df")),s=e.n(o),c=e("ca00"),u=e("5880"),l=e("c0d2"),d=e("2af9"),g=e("b199"),p=e("8916"),k=e("a1f4"),f=[{title:"Task Name",dataIndex:"name",key:"name"},{title:"Description",dataIndex:"description",key:"description"},{title:"Start Time",dataIndex:"startAt",key:"startAt",sorter:function(t,a){return new Date(t.startAt)-new Date(a.startAt)},scopedSlots:{customRender:"startAt"}},{title:"End Time",dataIndex:"endAt",key:"endAt",sorter:function(t,a){return Date.parse(t.endAt)-Date.parse(a.endAt)},scopedSlots:{customRender:"endAt"}},{title:"Directory",dataIndex:"directory",key:"directory"},{title:"Remark",dataIndex:"remark",key:"remark"}],m=[{title:"Package",dataIndex:"Package",key:"Package"},{title:"Version",dataIndex:"Version",key:"Version"},{title:"Depends",dataIndex:"Depends",key:"Depends"}],h={name:"Workplace",components:{Bar:d["c"],PageHeaderWrapper:l["b"]},data:function(){return{activeTasks:0,totalTasks:0,apiCalls:0,installedPackages:0,timeFix:Object(c["b"])(),avatar:"",user:{},dateFormat:"YYYY/MM/DD",startDate:s()().add(-7,"days"),endDate:s()(),tblColumns:f,taskList:[],category:"Frequency (time)",yAlias:"Frequency (time)",timeUnit:"day",logTrend:[],loading:!1,tblColumns1:m,packageList:[],priority:"all"}},computed:Object(i["a"])(Object(i["a"])({},Object(u["mapState"])({nickname:function(t){return t.user.username},welcome:function(t){return t.user.welcome}})),{},{currentUser:function(){return{name:this.user.name,avatar:"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"}},userInfo:function(){return this.$store.getters.userInfo}}),created:function(){this.init(),this.user=this.userInfo,this.avatar=this.userInfo.avatar},methods:{init:function(){console.info("init in settings"),this.reloadData()},toTableView:function(){this.$router.push({path:"/package/tableview"})},toGraphView:function(){this.$router.push({path:"/package/graphview"})},toTaskList:function(){this.$router.push({path:"/task/task-list"})},toTaskLog:function(){this.$router.push({path:"/task/task-log"})},toREditor:function(){this.$router.push({path:"/editor"})},toLearning:function(){this.$router.push({path:"#"})},loadTaskList:function(){var t=this,a={status:"processing",startDate:this.startDate,endDate:this.endDate};return Object(g["a"])(a).then((function(a){console.info("res in listTask",a),t.taskList=a.data||[],t.activeTasks=t.taskList.length})).catch((function(a){console.log("loadTaskList.err",a),t.$message.error("Error on loading task list")}))},setTimeUnit:function(t){this.timeUnit=t,this.loadLogTrend()},loadLogTrend:function(){var t=this,a={category:this.category,timeUnit:this.timeUnit,startDate:this.startDate.toDate(),endDate:this.endDate.toDate()};return Object(p["c"])(a).then((function(a){t.logTrend=a.data||[],t.apiCalls=a.apiCalls}))},checkTask:function(t){this.status=t,this.loadTaskList()},loadPackageTable:function(){var t=this;return new Promise((function(a,e){Object(k["h"])({priority:t.priority}).then((function(e){t.packageList=e.data||[],"all"===t.priority&&(t.installedPackages=t.packageList.length),a(!0)})).catch((function(a){console.log("loadLocalPackages.err",a),t.$message.error("Fail to load local packages!"),e(a)}))}))},reloadData:function(){this.loadTaskList(),this.loadLogTrend(),this.loadPackageTable()},setPriority:function(t){this.priority=t,this.loadPackageTable()}}},b=h,v=(e("2a2b"),e("2877")),y=Object(v["a"])(b,n,r,!1,null,"7287c04c",null);a["default"]=y.exports},b199:function(t,a,e){"use strict";e.d(a,"a",(function(){return i})),e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return s})),e.d(a,"d",(function(){return c}));var n=e("b775"),r={saveTask:"/task/save",removeTask:"/task/remove",listTask:"/task/list",updateTask:"/task/update"};function i(t){return Object(n["b"])({url:r.listTask,method:"post",data:t})}function o(t){return Object(n["b"])({url:r.removeTask,method:"post",data:t})}function s(t){return Object(n["b"])({url:r.saveTask,method:"post",data:t})}function c(t){return Object(n["b"])({url:r.updateTask,method:"post",data:t})}},e0c3:function(t,a,e){}}]);