"use strict";(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[329],{8329:(t,o,e)=>{e.r(o),e.d(o,{default:()=>i});const s={data:function(){return{loadIng:0,codeNeed:!1,codeUrl:this.$store.state.method.apiUrl("users/login/codeimg"),loginType:"login",email:"",password:"",password2:"",code:"",downList:[]}},mounted:function(){this.isElectron||this.getAppInfo()},computed:{currentLanguage:function(){return this.languageList[this.languageType]||"Language"}},methods:{getAppInfo:function(){var t=this;this.$store.dispatch("call",{url:"system/get/appinfo"}).then((function(o){var e=o.data;t.downList=e.list}))},forgotPassword:function(){$A.modalWarning("请联系管理员！")},reCode:function(){this.codeUrl=this.$store.state.method.apiUrl("users/login/codeimg?_="+Math.random())},onBlur:function(){var t=this;"login"==this.loginType&&this.email?(this.loadIng++,this.$store.dispatch("call",{url:"users/login/needcode",data:{email:this.email}}).then((function(){t.loadIng--,t.reCode(),t.codeNeed=!0})).catch((function(){t.loadIng--,t.codeNeed=!1}))):this.codeNeed=!1},onLogin:function(){var t=this;this.email&&this.password&&("reg"!=this.loginType||this.password==this.password2?(this.loadIng++,this.$store.dispatch("call",{url:"users/login",data:{type:this.loginType,email:this.email,password:this.password,code:this.code}}).then((function(o){var e=o.data;t.loadIng--,t.$store.state.method.clearLocal(),t.$store.dispatch("saveUserInfo",e),t.goNext()})).catch((function(o){var e=o.data,s=o.msg;t.loadIng--,$A.noticeError(s),"need"===e.code&&(t.reCode(),t.codeNeed=!0)}))):$A.noticeError("确认密码输入不一致"))},goNext:function(){var t=decodeURIComponent($A.getObject(this.$route.query,"from"));t?window.location.replace(t):this.goForward({path:"/manage/dashboard"},!0)}}};const i=(0,e(51900).Z)(s,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"page-login"},[e("PageTitle",{attrs:{title:t.$L("登录")}}),t._v(" "),e("div",{staticClass:"login-body"},[e("div",{staticClass:"login-logo"}),t._v(" "),e("div",{staticClass:"login-box"},[e("div",{staticClass:"login-title"},[t._v("Welcome Dootask")]),t._v(" "),"reg"==t.loginType?e("div",{staticClass:"login-subtitle"},[t._v(t._s(t.$L("输入您的信息以创建帐户。")))]):e("div",{staticClass:"login-subtitle"},[t._v(t._s(t.$L("输入您的凭证以访问您的帐户。")))]),t._v(" "),e("div",{staticClass:"login-input"},[e("Input",{attrs:{prefix:"ios-mail-outline",placeholder:t.$L("输入您的电子邮件"),size:"large"},on:{"on-enter":t.onLogin,"on-blur":t.onBlur},model:{value:t.email,callback:function(o){t.email=o},expression:"email"}}),t._v(" "),e("Input",{attrs:{prefix:"ios-lock-outline",placeholder:t.$L("输入您的密码"),type:"password",size:"large"},on:{"on-enter":t.onLogin},model:{value:t.password,callback:function(o){t.password=o},expression:"password"}}),t._v(" "),"reg"==t.loginType?e("Input",{attrs:{prefix:"ios-lock-outline",placeholder:t.$L("输入确认密码"),type:"password",size:"large"},on:{"on-enter":t.onLogin},model:{value:t.password2,callback:function(o){t.password2=o},expression:"password2"}}):t._e(),t._v(" "),t.codeNeed?e("Input",{staticClass:"login-code",attrs:{placeholder:t.$L("输入图形验证码"),size:"large"},on:{"on-enter":t.onLogin},model:{value:t.code,callback:function(o){t.code=o},expression:"code"}},[e("Icon",{staticClass:"login-icon",attrs:{slot:"prepend",type:"ios-checkmark-circle-outline"},slot:"prepend"}),t._v(" "),e("div",{staticClass:"login-code-end",attrs:{slot:"append"},on:{click:t.reCode},slot:"append"},[e("img",{attrs:{src:t.codeUrl}})])],1):t._e(),t._v(" "),e("Button",{attrs:{type:"primary",loading:t.loadIng>0,size:"large",long:""},on:{click:t.onLogin}},[t._v(t._s(t.$L("login"==t.loginType?"登录":"注册")))]),t._v(" "),"reg"==t.loginType?e("div",{staticClass:"login-switch"},[t._v(t._s(t.$L("已经有帐号？"))),e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(o){t.loginType="login"}}},[t._v(t._s(t.$L("登录帐号")))])]):e("div",{staticClass:"login-switch"},[t._v(t._s(t.$L("还没有帐号？"))),e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(o){t.loginType="reg"}}},[t._v(t._s(t.$L("注册帐号")))])])],1)]),t._v(" "),e("div",{staticClass:"login-bottom"},[e("Dropdown",{attrs:{trigger:"click",transfer:""},on:{"on-click":t.setLanguage}},[e("div",{staticClass:"login-language"},[t._v("\n                    "+t._s(t.currentLanguage)+"\n                    "),e("i",{staticClass:"taskfont"},[t._v("")])]),t._v(" "),e("Dropdown-menu",{attrs:{slot:"list"},slot:"list"},t._l(t.languageList,(function(o,s){return e("Dropdown-item",{key:s,attrs:{name:s,selected:t.getLanguage()===s}},[t._v(t._s(o))])})),1)],1),t._v(" "),e("div",{staticClass:"login-forgot"},[t._v(t._s(t.$L("忘记密码了？"))),e("a",{attrs:{href:"javascript:void(0)"},on:{click:t.forgotPassword}},[t._v(t._s(t.$L("重置密码")))])])],1)]),t._v(" "),t.downList.length>0?e("div",{staticClass:"download-app"},[e("Button",{attrs:{icon:"md-download",type:"primary",to:"./download",target:"_blank"}},[t._v(t._s(t.$L("客户端下载")))])],1):t._e()],1)}),[],!1,null,null,null).exports}}]);