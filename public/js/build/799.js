"use strict";(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[799],{47646:(t,e,i)=>{i.d(e,{Z:()=>M});const a=i(70538).default.prototype.$isServer;function s(t,e){for(let i=0;i<e.length;i++)if(t===e[i])return!0;return!1}!a&&(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver);function o(t,e,i){i="string"==typeof e?[e]:e;let a=t.$parent,s=a.$options.name;for(;a&&(!s||i.indexOf(s)<0);)a=a.$parent,a&&(s=a.$options.name);return a}const n=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];let r,l={};function c(t,e=null,i=null,a=!1){r||(r=document.createElement("textarea"),document.body.appendChild(r)),t.getAttribute("wrap")?r.setAttribute("wrap",t.getAttribute("wrap")):r.removeAttribute("wrap");let{paddingSize:s,borderSize:o,boxSizing:c,sizingStyle:u}=function(t,e=!1){const i=t.getAttribute("id")||t.getAttribute("data-reactid")||t.getAttribute("name");if(e&&l[i])return l[i];const a=window.getComputedStyle(t),s=a.getPropertyValue("box-sizing")||a.getPropertyValue("-moz-box-sizing")||a.getPropertyValue("-webkit-box-sizing"),o=parseFloat(a.getPropertyValue("padding-bottom"))+parseFloat(a.getPropertyValue("padding-top")),r=parseFloat(a.getPropertyValue("border-bottom-width"))+parseFloat(a.getPropertyValue("border-top-width")),c={sizingStyle:n.map((t=>`${t}:${a.getPropertyValue(t)}`)).join(";"),paddingSize:o,borderSize:r,boxSizing:s};return e&&i&&(l[i]=c),c}(t,a);r.setAttribute("style",`${u};\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n`),r.value=t.value||t.placeholder||"";let d,p=Number.MIN_SAFE_INTEGER,h=Number.MAX_SAFE_INTEGER,f=r.scrollHeight;if("border-box"===c?f+=o:"content-box"===c&&(f-=s),null!==e||null!==i){r.value=" ";let t=r.scrollHeight-s;null!==e&&(p=t*e,"border-box"===c&&(p=p+s+o),f=Math.max(p,f)),null!==i&&(h=t*i,"border-box"===c&&(h=h+s+o),d=f>h?"":"hidden",f=Math.min(h,f))}return i||(d="hidden"),{height:`${f}px`,minHeight:`${p}px`,maxHeight:`${h}px`,overflowY:d}}function u(t,e,i){this.$children.forEach((a=>{a.$options.name===t?a.$emit.apply(a,[e].concat(i)):u.apply(a,[t,e].concat([i]))}))}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var p="ivu-input";const h={name:"DragInput",mixins:[{methods:{dispatch(t,e,i){let a=this.$parent||this.$root,s=a.$options.name;for(;a&&(!s||s!==t);)a=a.$parent,a&&(s=a.$options.name);a&&a.$emit.apply(a,[e].concat(i))},broadcast(t,e,i){u.call(this,t,e,i)}}},{inject:{FormInstance:{default:""}},computed:{itemDisabled(){let t=this.disabled;return!t&&this.FormInstance&&(t=this.FormInstance.disabled),t}}}],props:{type:{validator:function(t){return s(t,["text","textarea","password","url","email","date","number","tel"])},default:"text"},value:{type:[String,Number],default:""},size:{validator:function(t){return s(t,["small","large","default"])},default:function(){return this.$IVIEW&&""!==this.$IVIEW.size?this.$IVIEW.size:"default"}},placeholder:{type:String,default:""},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},icon:String,autosize:{type:[Boolean,Object],default:!1},rows:{type:Number,default:2},readonly:{type:Boolean,default:!1},name:{type:String},number:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},spellcheck:{type:Boolean,default:!1},autocomplete:{type:String,default:"off"},clearable:{type:Boolean,default:!1},elementId:{type:String},wrap:{validator:function(t){return s(t,["hard","soft"])},default:"soft"},prefix:{type:String,default:""},suffix:{type:String,default:""},search:{type:Boolean,default:!1},enterButton:{type:[Boolean,String],default:!1},showWordLimit:{type:Boolean,default:!1},password:{type:Boolean,default:!1}},data:function(){return{currentValue:this.value,prefixCls:p,slotReady:!1,textareaStyles:{},isOnComposition:!1,showPassword:!1}},computed:{currentType:function(){var t=this.type;return"password"===t&&this.password&&this.showPassword&&(t="text"),t},prepend:function(){var t=!1;return"textarea"!==this.type&&(t=void 0!==this.$slots.prepend),t},append:function(){var t=!1;return"textarea"!==this.type&&(t=void 0!==this.$slots.append),t},showPrefix:function(){var t=!1;return"textarea"!==this.type&&(t=""!==this.prefix||void 0!==this.$slots.prefix),t},showSuffix:function(){var t=!1;return"textarea"!==this.type&&(t=""!==this.suffix||void 0!==this.$slots.suffix),t},wrapClasses:function(){var t;return["".concat(p,"-wrapper"),(t={},d(t,"".concat(p,"-wrapper-").concat(this.size),!!this.size),d(t,"".concat(p,"-type-").concat(this.type),this.type),d(t,"".concat(p,"-group"),this.prepend||this.append||this.search&&this.enterButton),d(t,"".concat(p,"-group-").concat(this.size),(this.prepend||this.append||this.search&&this.enterButton)&&!!this.size),d(t,"".concat(p,"-group-with-prepend"),this.prepend),d(t,"".concat(p,"-group-with-append"),this.append||this.search&&this.enterButton),d(t,"".concat(p,"-hide-icon"),this.append),d(t,"".concat(p,"-with-search"),this.search&&this.enterButton),t)]},inputClasses:function(){var t;return["".concat(p),(t={},d(t,"".concat(p,"-").concat(this.size),!!this.size),d(t,"".concat(p,"-disabled"),this.itemDisabled),d(t,"".concat(p,"-with-prefix"),this.showPrefix),d(t,"".concat(p,"-with-suffix"),this.showSuffix||this.search&&!1===this.enterButton),t)]},textareaClasses:function(){return["".concat(p),d({},"".concat(p,"-disabled"),this.itemDisabled)]},upperLimit:function(){return this.maxlength},textLength:function(){return"number"==typeof this.value?String(this.value).length:(this.value||"").length}},methods:{handleEnter:function(t){this.$emit("on-enter",t),this.search&&this.$emit("on-search",this.currentValue)},handleKeydown:function(t){this.$emit("on-keydown",t)},handleKeypress:function(t){this.$emit("on-keypress",t)},handleKeyup:function(t){this.$emit("on-keyup",t)},handleIconClick:function(t){this.$emit("on-click",t)},handleFocus:function(t){this.$emit("on-focus",t)},handleBlur:function(t){this.$emit("on-blur",t),o(this,["DatePicker","TimePicker","Cascader","Search"])||this.dispatch("FormItem","on-form-blur",this.currentValue)},handleComposition:function(t){"compositionstart"===t.type&&(this.isOnComposition=!0),"compositionend"===t.type&&(this.isOnComposition=!1,this.handleInput(t))},handleInput:function(t){if(!this.isOnComposition){var e=t.target.value;this.number&&""!==e&&(e=Number.isNaN(Number(e))?e:Number(e)),this.$emit("input",e),this.setCurrentValue(e),this.$emit("on-change",t)}},handleChange:function(t){this.$emit("on-input-change",t)},handlePaste:function(t){this.$emit("on-input-paste",t)},setCurrentValue:function(t){var e=this;t!==this.currentValue&&(this.$nextTick((function(){e.resizeTextarea()})),this.currentValue=t,o(this,["DatePicker","TimePicker","Cascader","Search"])||this.dispatch("FormItem","on-form-change",t))},resizeTextarea:function(){var t=this.autosize;if(!t||"textarea"!==this.type)return!1;var e=t.minRows,i=t.maxRows;this.textareaStyles=c(this.$refs.textarea,e,i)},focus:function(){"textarea"===this.type?this.$refs.textarea.focus():this.$refs.input.focus()},blur:function(){"textarea"===this.type?this.$refs.textarea.blur():this.$refs.input.blur()},handleClear:function(){this.$emit("input",""),this.setCurrentValue(""),this.$emit("on-change",{target:{value:""}}),this.$emit("on-clear")},handleSearch:function(){if(this.itemDisabled)return!1;this.$refs.input.focus(),this.$emit("on-search",this.currentValue)},handleToggleShowPassword:function(){var t=this;if(this.itemDisabled)return!1;this.showPassword=!this.showPassword,this.focus();var e=this.currentValue.length;setTimeout((function(){t.$refs.input.setSelectionRange(e,e)}),0)}},watch:{value:function(t){this.setCurrentValue(t)}},mounted:function(){this.slotReady=!0,this.resizeTextarea()}};var f=i(51900);const g=(0,f.Z)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.wrapClasses},["textarea"!==t.type?[t.prepend?i("div",{directives:[{name:"show",rawName:"v-show",value:t.slotReady,expression:"slotReady"}],class:[t.prefixCls+"-group-prepend"]},[t._t("prepend")],2):t._e(),t._v(" "),t.clearable&&t.currentValue&&!t.itemDisabled?i("i",{staticClass:"ivu-icon",class:["ivu-icon-ios-close-circle",t.prefixCls+"-icon",t.prefixCls+"-icon-clear",t.prefixCls+"-icon-normal"],on:{click:t.handleClear}}):t.icon?i("i",{staticClass:"ivu-icon",class:["ivu-icon-"+t.icon,t.prefixCls+"-icon",t.prefixCls+"-icon-normal"],on:{click:t.handleIconClick}}):t.search&&!1===t.enterButton?i("i",{staticClass:"ivu-icon ivu-icon-ios-search",class:[t.prefixCls+"-icon",t.prefixCls+"-icon-normal",t.prefixCls+"-search-icon"],on:{click:t.handleSearch}}):t.showSuffix?i("span",{staticClass:"ivu-input-suffix"},[t._t("suffix",(function(){return[t.suffix?i("i",{staticClass:"ivu-icon",class:["ivu-icon-"+t.suffix]}):t._e()]}))],2):t.showWordLimit?i("span",{staticClass:"ivu-input-word-count"},[t._v(t._s(t.textLength)+"/"+t._s(t.upperLimit))]):t.password?i("span",{staticClass:"ivu-input-suffix",on:{click:t.handleToggleShowPassword}},[t.showPassword?i("i",{staticClass:"ivu-icon ivu-icon-ios-eye-off-outline"}):i("i",{staticClass:"ivu-icon ivu-icon-ios-eye-outline"})]):t._e(),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.icon?t._e():i("i",{staticClass:"ivu-icon ivu-icon-ios-loading ivu-load-loop",class:[t.prefixCls+"-icon",t.prefixCls+"-icon-validate"]})]),t._v(" "),i("input",{ref:"input",class:t.inputClasses,attrs:{id:t.elementId,autocomplete:t.autocomplete,spellcheck:t.spellcheck,type:t.currentType,placeholder:t.placeholder,disabled:t.itemDisabled,maxlength:t.maxlength,readonly:t.readonly,name:t.name,number:t.number,autofocus:t.autofocus},domProps:{value:t.currentValue},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleEnter.apply(null,arguments)},t.handleKeyup],keypress:t.handleKeypress,keydown:t.handleKeydown,focus:t.handleFocus,blur:t.handleBlur,compositionstart:t.handleComposition,compositionupdate:t.handleComposition,compositionend:t.handleComposition,input:t.handleInput,change:t.handleChange,paste:t.handlePaste}}),t._v(" "),t.append?i("div",{directives:[{name:"show",rawName:"v-show",value:t.slotReady,expression:"slotReady"}],class:[t.prefixCls+"-group-append"]},[t._t("append")],2):t.search&&t.enterButton?i("div",{class:[t.prefixCls+"-group-append",t.prefixCls+"-search"],on:{click:t.handleSearch}},[!0===t.enterButton?i("i",{staticClass:"ivu-icon ivu-icon-ios-search"}):[t._v(t._s(t.enterButton))]],2):t.showPrefix?i("span",{staticClass:"ivu-input-prefix"},[t._t("prefix",(function(){return[t.prefix?i("i",{staticClass:"ivu-icon",class:["ivu-icon-"+t.prefix]}):t._e()]}))],2):t._e()]:[i("textarea",{ref:"textarea",class:t.textareaClasses,style:t.textareaStyles,attrs:{id:t.elementId,wrap:t.wrap,autocomplete:t.autocomplete,spellcheck:t.spellcheck,placeholder:t.placeholder,disabled:t.itemDisabled,rows:t.rows,maxlength:t.maxlength,readonly:t.readonly,name:t.name,autofocus:t.autofocus},domProps:{value:t.currentValue},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleEnter.apply(null,arguments)},t.handleKeyup],keypress:t.handleKeypress,keydown:t.handleKeydown,focus:t.handleFocus,blur:t.handleBlur,compositionstart:t.handleComposition,compositionupdate:t.handleComposition,compositionend:t.handleComposition,input:t.handleInput,paste:t.handlePaste}}),t._v(" "),t.showWordLimit?i("span",{staticClass:"ivu-input-word-count"},[t._v(t._s(t.textLength)+"/"+t._s(t.upperLimit))]):t._e()]],2)}),[],!1,null,null,null).exports;const m={name:"ScrollerY",props:{static:{type:Boolean,default:!1},autoBottom:{type:Boolean,default:!1},autoRecovery:{type:Boolean,default:!0},autoRecoveryAnimate:{type:Boolean,default:!1}},data:function(){return{scrollY:0,scrollDiff:0,autoInterval:null}},mounted:function(){this.openInterval(),this.$nextTick(this.initScroll)},activated:function(){this.openInterval(),this.recoveryScroll()},destroyed:function(){this.closeInterval()},deactivated:function(){this.closeInterval()},methods:{initScroll:function(){var t=this;this.autoToBottom();var e="function"==typeof this.$listeners["on-scroll"],i=$A(this.$refs.scrollerView);i.scroll((function(){var a=Math.round(i.innerHeight()),s=i.scrollTop(),o=t.$refs.scrollerView.scrollHeight;if(t.scrollY=s,e){var n="static",r="static";t.scrollDiff-s>50?(t.scrollDiff=s,n="down"):t.scrollDiff-s<-100&&(t.scrollDiff=s,n="up"),t.scrollDiff-s>1?(t.scrollDiff=s,r="down"):t.scrollDiff-s<-1&&(t.scrollDiff=s,r="up"),t.$emit("on-scroll",{scale:s/(o-a),scrollY:s,scrollE:o-a-s,direction:n,directionreal:r})}}))},recoveryScroll:function(){var t=this;this.autoRecovery&&(this.scrollY>0||this.autoBottom)&&this.$nextTick((function(){t.autoBottom?t.autoToBottom():t.scrollTo(t.scrollY,t.autoRecoveryAnimate)}))},openInterval:function(){this.autoToBottom(),this.autoInterval&&clearInterval(this.autoInterval),this.autoInterval=setInterval(this.autoToBottom,300)},closeInterval:function(){clearInterval(this.autoInterval),this.autoInterval=null},scrollTo:function(t,e){!1===e?$A(this.$refs.scrollerView).stop().scrollTop(t):$A(this.$refs.scrollerView).stop().animate({scrollTop:t})},autoToBottom:function(){if(this.autoBottom&&this.$refs.bottom)try{this.$refs.bottom.scrollIntoView(!1)}catch(t){scrollIntoView(this.$refs.bottom,{behavior:"instant",inline:"end"})}},scrollInfo:function(){var t=$A(this.$refs.scrollerView),e=Math.round(t.innerHeight()),i=t.scrollTop(),a=this.$refs.scrollerView.scrollHeight;return this.scrollY=i,{scale:i/(a-e),scrollY:i,scrollE:a-e-i}}}};const v=(0,f.Z)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scrollerView",staticClass:"app-scroller-y",class:[t.static?"static":""]},[t._t("default"),t._v(" "),i("div",{ref:"bottom",staticClass:"app-scroller-bottom"})],2)}),[],!1,null,null,null).exports;var y=i(20629);const b={name:"WCircle",props:{percent:{type:Number,default:0},size:{type:Number,default:120}},computed:{style:function(){var t=this.size;return this.isNumeric(t)&&(t+="px"),{width:t,height:t}},args:function(){var t=this.percent,e=Math.min(360,3.6*t);return 360==e?e=0:0==e&&(e=360),{x:14,y:14,r:14,start:360,end:e}}},methods:{isNumeric:function(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)},point:function(t,e,i,a){return[(t+Math.sin(a)*i).toFixed(2),(e-Math.cos(a)*i).toFixed(2)]},full:function(t,e,i,a){return a<=0?"M ".concat(t-i," ").concat(e," A ").concat(i," ").concat(i," 0 1 1 ").concat(t+i," ").concat(e," A ").concat(i," ").concat(i," 1 1 1 ").concat(t-i," ").concat(e," Z"):"M ".concat(t-i," ").concat(e," A ").concat(i," ").concat(i," 0 1 1 ").concat(t+i," ").concat(e," A ").concat(i," ").concat(i," 1 1 1 ").concat(t-i," ").concat(e," M ").concat(t-a," ").concat(e," A ").concat(a," ").concat(a," 0 1 1 ").concat(t+a," ").concat(e," A ").concat(a," ").concat(a," 1 1 1 ").concat(t-a," ").concat(e," Z")},part:function(t,e,i,a,s,o){var n=s/360*2*Math.PI,r=o/360*2*Math.PI,l=[this.point(t,e,a,n),this.point(t,e,i,n),this.point(t,e,i,r),this.point(t,e,a,r)],c=r-n>Math.PI?"1":"0";return"M ".concat(l[0][0]," ").concat(l[0][1]," L ").concat(l[1][0]," ").concat(l[1][1]," A ").concat(i," ").concat(i," 0 ").concat(c," 1 ").concat(l[2][0]," ").concat(l[2][1]," L ").concat(l[3][0]," ").concat(l[3][1]," A ").concat(a," ").concat(a,"  0 ").concat(c," 0 ").concat(l[0][0]," ").concat(l[0][1]," Z")},arc:function(t){var e=t.x,i=void 0===e?0:e,a=t.y,s=void 0===a?0:a,o=t.R,n=void 0===o?0:o,r=t.r,l=void 0===r?0:r,c=t.start,u=t.end,d=[Math.max(n,l),Math.min(n,l)];if(l=d[1],(n=d[0])<=0)return"";if(c!==+c||u!==+u)return this.full(i,s,n,l);if(Math.abs(c-u)<1e-6)return"";if(Math.abs(c-u)%360<1e-6)return this.full(i,s,n,l);var p=[c%360,u%360];return(c=p[0])>(u=p[1])&&(u+=360),this.part(i,s,n,l,c,u)}}};const _={name:"DialogView",components:{WCircle:(0,f.Z)(b,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"common-circle",style:t.style,attrs:{"data-id":t.percent}},[i("svg",{attrs:{viewBox:"0 0 28 28"}},[i("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[i("path",{staticClass:"common-circle-path",attrs:{d:"M-500-100h997V48h-997z"}}),t._v(" "),i("g",{attrs:{"fill-rule":"nonzero"}},[i("path",{staticClass:"common-circle-g-path-ring",attrs:{"stroke-width":"3",d:"M14 25.5c6.351 0 11.5-5.149 11.5-11.5S20.351 2.5 14 2.5 2.5 7.649 2.5 14 7.649 25.5 14 25.5z"}}),t._v(" "),i("path",{staticClass:"common-circle-g-path-core",attrs:{d:t.arc(t.args)}})])])])])}),[],!1,null,null,null).exports},props:{msgData:{type:Object,default:function(){return{}}},dialogType:{type:String,default:""}},data:function(){return{read_list:[]}},activated:function(){this.msgRead()},computed:{readList:function(){return this.read_list.filter((function(t){return t.read_at}))},unreadList:function(){return this.read_list.filter((function(t){return!t.read_at}))}},watch:{msgData:{handler:function(){this.msgRead()},immediate:!0}},methods:{msgRead:function(){var t=this;!0!==this.msgData._r&&(this.msgData._r=!0,this.$nextTick((function(){t.$el.offsetParent?t.$store.dispatch("dialogMsgRead",t.msgData):t.msgData._r=!1})))},popperShow:function(){var t=this;this.$store.dispatch("call",{url:"dialog/msg/readlist",data:{msg_id:this.msgData.id}}).then((function(e){var i=e.data;t.read_list=i}))},formatTime:function(t){var e=Math.round($A.Date(t).getTime()/1e3);return($A.formatDate("Ymd")===$A.formatDate("Ymd",e)?$A.formatDate("H:i",e):$A.formatDate("Y")===$A.formatDate("Y",e)?$A.formatDate("m-d",e):$A.formatDate("Y-m-d",e))||""},textMsg:function(t){return t?t=(t=t.trim().replace(/(\n\x20*){3,}/g,"<br/><br/>")).trim().replace(/\n/g,"<br/>"):""},imageStyle:function(t){var e=t.width,i=t.height;if(e&&i){var a=e,s=i;return(e>220||i>220)&&(e>i?(a=220,s=i*(220/e)):(a=e*(220/i),s=220)),{width:a+"px",height:s+"px"}}return{}}}};const x=(0,f.Z)(_,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dialog-view",attrs:{"data-id":t.msgData.id}},["text"===t.msgData.type?i("div",{staticClass:"dialog-content",domProps:{innerHTML:t._s(t.textMsg(t.msgData.msg.text))}}):"loading"===t.msgData.type?i("div",{staticClass:"dialog-content loading"},[i("Loading")],1):"file"===t.msgData.type?i("div",{class:["dialog-content",t.msgData.msg.type]},[i("a",{attrs:{href:t.msgData.msg.path,target:"_blank"}},["img"===t.msgData.msg.type?i("img",{staticClass:"file-img",style:t.imageStyle(t.msgData.msg),attrs:{src:t.msgData.msg.thumb}}):i("div",{staticClass:"file-box"},[i("img",{staticClass:"file-thumb",attrs:{src:t.msgData.msg.thumb}}),t._v(" "),i("div",{staticClass:"file-info"},[i("div",{staticClass:"file-name"},[t._v(t._s(t.msgData.msg.name))]),t._v(" "),i("div",{staticClass:"file-size"},[t._v(t._s(t.$A.bytesToSize(t.msgData.msg.size)))])])])])]):i("div",{staticClass:"dialog-content unknown"},[t._v(t._s(t.$L("未知的消息类型")))]),t._v(" "),t.msgData.created_at?i("div",{staticClass:"dialog-foot"},[i("div",{staticClass:"time"},[t._v(t._s(t.formatTime(t.msgData.created_at)))]),t._v(" "),t.msgData.send>1||"group"==t.dialogType?i("Poptip",{staticClass:"percent",attrs:{placement:"left-end",transfer:"",width:360,offset:8},on:{"on-popper-show":t.popperShow}},[i("div",{staticClass:"dialog-wrapper-read-poptip-content",attrs:{slot:"content"},slot:"content"},[i("ul",{staticClass:"read"},[i("li",{staticClass:"read-title"},[i("em",[t._v(t._s(t.readList.length))]),t._v(t._s(t.$L("已读")))]),t._v(" "),t._l(t.readList,(function(t){return i("li",[i("UserAvatar",{attrs:{userid:t.userid,size:26,"show-name":""}})],1)}))],2),t._v(" "),i("ul",{staticClass:"unread"},[i("li",{staticClass:"read-title"},[i("em",[t._v(t._s(t.unreadList.length))]),t._v(t._s(t.$L("未读")))]),t._v(" "),t._l(t.unreadList,(function(t){return i("li",[i("UserAvatar",{attrs:{userid:t.userid,size:26,"show-name":""}})],1)}))],2)]),t._v(" "),i("WCircle",{attrs:{percent:t.msgData.percentage,size:14}})],1):100===t.msgData.percentage?i("Icon",{staticClass:"done",attrs:{type:"md-done-all"}}):i("Icon",{staticClass:"done",attrs:{type:"md-checkmark"}})],1):i("div",{staticClass:"dialog-foot"},[i("Loading")],1)])}),[],!1,null,null,null).exports;function $(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function w(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?$(Object(i),!0).forEach((function(e){D(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):$(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function D(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const C={name:"DialogUpload",props:{dialogId:{type:Number,default:0},maxSize:{type:Number,default:204800}},data:function(){return{uploadFormat:["jpg","jpeg","png","gif","doc","docx","xls","xlsx","ppt","pptx","txt","esp","pdf","rar","zip","gz","ai","avi","bmp","cdr","eps","mov","mp3","mp4","pr","psd","svg","tif"],actionUrl:this.$store.state.method.apiUrl("dialog/msg/sendfile")}},computed:w(w({},(0,y.rn)(["userToken"])),{},{headers:function(){return{fd:this.$store.state.method.getStorageString("userWsFd"),token:this.userToken}},params:function(){return{dialog_id:this.dialogId}}}),methods:{handleProgress:function(t,e){void 0===e.tempId&&(e.tempId=$A.randomString(8),this.$emit("on-progress",e))},handleSuccess:function(t,e){1===t.ret?(e.data=t.data,this.$emit("on-success",e),t.data.task_id&&this.$store.dispatch("getTaskFiles",t.data.task_id)):($A.modalWarning({title:"发送失败",content:"文件 "+e.name+" 发送失败，"+t.msg}),this.$emit("on-error",e),this.$refs.upload.fileList.pop())},handleFormatError:function(t){$A.modalWarning({title:"文件格式不正确",content:"文件 "+t.name+" 格式不正确，仅支持发送："+this.uploadFormat.join(",")})},handleMaxSize:function(t){$A.modalWarning({title:"超出文件大小限制",content:"文件 "+t.name+" 太大，不能发送超过"+$A.bytesToSize(1024*this.maxSize)+"。"})},handleClick:function(){this.$refs.upload.handleClick()},upload:function(t){this.$refs.upload.upload(t)}}};function I(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function k(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?I(Object(i),!0).forEach((function(e){A(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):I(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function A(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const S={name:"DialogWrapper",components:{DialogUpload:(0,f.Z)(C,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Upload",{ref:"upload",attrs:{name:"files",action:t.actionUrl,headers:t.headers,data:t.params,multiple:"",format:t.uploadFormat,"show-upload-list":!1,"max-size":t.maxSize,"on-progress":t.handleProgress,"on-success":t.handleSuccess,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize}})}),[],!1,null,null,null).exports,DialogView:x,ScrollerY:v,DragInput:g},props:{dialogId:{type:Number,default:0}},data:function(){return{autoBottom:!0,autoInterval:null,dialogDrag:!1,inputFocus:!1,msgText:"",msgNew:0,topId:0,tempMsgs:[]}},computed:k(k({},(0,y.rn)(["userId","dialogs","dialogMsgs","dialogMsgPush"])),{},{dialogData:function(){var t=this;return this.dialogs.find((function(e){return e.id==t.dialogId}))||{}},dialogMsgList:function(){var t=this;return this.dialogId?$A.cloneJSON(this.dialogMsgs.filter((function(e){return e.dialog_id==t.dialogId}))).sort((function(t,e){return t.id-e.id})):[]},tempMsgList:function(){var t=this;return this.dialogId?$A.cloneJSON(this.tempMsgs.filter((function(e){return e.dialog_id==t.dialogId}))):[]},peopleNum:function(){return"group"===this.dialogData.type?$A.runNum(this.dialogData.people):0}}),watch:{$route:{handler:function(t){if(t.query&&t.query.sendmsg&&""==this.msgText){var e=$A.cloneJSON(t.query);delete e.sendmsg,this.goForward({query:e},!0),this.msgText=t.query.sendmsg,this.$nextTick(this.sendMsg)}},immediate:!0},dialogMsgPush:function(){this.autoBottom?this.$nextTick(this.goBottom):this.msgNew++},dialogId:{handler:function(t){t&&(this.autoBottom=!0,this.msgNew=0,this.topId=-1,this.$store.dispatch("getDialogMsgs",t))},immediate:!0}},methods:{sendMsg:function(t){var e=this;if("string"==typeof t&&t&&(this.msgText=t,this.$refs.input.focus()),""!=this.msgText){var i=$A.randomString(16);this.tempMsgs.push({id:i,dialog_id:this.dialogData.id,type:"text",userid:this.userId,msg:{text:this.msgText}}),this.$store.state.windowMax768&&this.$refs.input.blur(),this.autoBottom=!0,this.onActive(),this.$store.dispatch("call",{url:"dialog/msg/sendtext",data:{dialog_id:this.dialogId,text:this.msgText}}).then((function(t){var a=t.data;e.tempMsgs=e.tempMsgs.filter((function(t){return t.id!=i})),e.sendSuccess(a)})).catch((function(t){var a=t.msg;$A.modalError(a),e.tempMsgs=e.tempMsgs.filter((function(t){return t.id!=i}))})),this.msgText=""}},chatKeydown:function(t){if(13===t.keyCode){if(t.shiftKey)return;t.preventDefault(),this.sendMsg()}},pasteDrag:function(t,e){var i=this,a="drag"===e?t.dataTransfer.files:t.clipboardData.files,s=Array.prototype.slice.call(a);s.length>0&&(t.preventDefault(),s.forEach((function(t){i.$refs.chatUpload.upload(t)})))},chatDragOver:function(t,e){var i=this,a=this.__dialogDrag=$A.randomString(8);if(t){if("move"===e.dataTransfer.effectAllowed)return;this.dialogDrag=!0}else setTimeout((function(){a===i.__dialogDrag&&(i.dialogDrag=t)}),150)},chatPasteDrag:function(t,e){var i=this;this.dialogDrag=!1;var a="drag"===e?t.dataTransfer.files:t.clipboardData.files,s=Array.prototype.slice.call(a);s.length>0&&(t.preventDefault(),s.forEach((function(t){i.$refs.chatUpload.upload(t)})))},chatFile:function(t,e){switch(t){case"progress":this.tempMsgs.push({id:e.tempId,dialog_id:this.dialogData.id,type:"loading",userid:this.userId,msg:{}}),this.autoBottom=!0,this.onActive();break;case"error":this.tempMsgs=this.tempMsgs.filter((function(t){return t.id!=e.tempId}));break;case"success":this.tempMsgs=this.tempMsgs.filter((function(t){return t.id!=e.tempId})),this.sendSuccess(e.data)}},sendSuccess:function(t){this.$store.dispatch("saveDialogMsg",t),this.$store.dispatch("increaseTaskMsgNum",this.dialogId),this.$store.dispatch("moveDialogTop",this.dialogId),this.$store.dispatch("updateDialogLastMsg",t),this.onActive()},chatScroll:function(t){switch(t.directionreal){case"up":t.scrollE<10&&(this.autoBottom=!0);break;case"down":this.autoBottom=!1}1===t.scale&&(this.autoBottom=!0)},goBottom:function(){this.autoBottom&&(this.msgNew=0,this.$refs.scroller.autoToBottom())},goNewBottom:function(){this.autoBottom=!0,this.goBottom()},onEventFocus:function(t){this.inputFocus=!0,this.$emit("on-focus",t)},onEventblur:function(t){this.inputFocus=!1,this.$emit("on-blur",t)},onActive:function(){this.$emit("on-active")},formatTime:function(t){var e=Math.round($A.Date(t).getTime()/1e3);return($A.formatDate("Ymd")===$A.formatDate("Ymd",e)?$A.formatDate("H:i",e):$A.formatDate("Y")===$A.formatDate("Y",e)?$A.formatDate("m-d",e):$A.formatDate("Y-m-d",e))||""},openProject:function(){this.dialogData.group_info&&this.goForward({path:"/manage/project/"+this.dialogData.group_info.id})},openTask:function(){this.dialogData.group_info&&this.$store.dispatch("openTask",this.dialogData.group_info.id)},loadNextPage:function(){var t=this,e=this.dialogMsgList[0].id;this.$store.dispatch("getDialogMsgNextPage",this.dialogId).then((function(){t.$nextTick((function(){t.topId=e;var i=document.getElementById("view_"+e);if(i)try{i.scrollIntoView(!0)}catch(t){scrollIntoView(i,{behavior:"instant",inline:"start"})}}))}))}}};const M=(0,f.Z)(S,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dialog-wrapper",on:{drop:function(e){return e.preventDefault(),t.chatPasteDrag(e,"drag")},dragover:function(e){return e.preventDefault(),t.chatDragOver(!0,e)},dragleave:function(e){return e.preventDefault(),t.chatDragOver(!1,e)}}},[t._t("head",(function(){return[i("div",{staticClass:"dialog-title"},[i("div",{staticClass:"main-title"},[i("h2",[t._v(t._s(t.dialogData.name))]),t._v(" "),t.peopleNum>0?i("em",[t._v("("+t._s(t.peopleNum)+")")]):t._e()]),t._v(" "),"group"===t.dialogData.type?["project"===t.dialogData.group_type?i("div",{staticClass:"sub-title pointer",on:{click:t.openProject}},[t._v("\n                    "+t._s(t.$L("项目聊天室"))+" "+t._s(t.$L("打开项目管理"))+"\n                ")]):"task"===t.dialogData.group_type?i("div",{staticClass:"sub-title pointer",on:{click:t.openTask}},[t._v("\n                    "+t._s(t.$L("任务聊天室"))+" "+t._s(t.$L("查看任务详情"))+"\n                ")]):t._e()]:t._e()],2)]})),t._v(" "),i("ScrollerY",{ref:"scroller",staticClass:"dialog-scroller overlay-y",attrs:{"auto-bottom":t.autoBottom&&!t.inputFocus,static:""},on:{"on-scroll":t.chatScroll}},[i("div",{ref:"manageList",staticClass:"dialog-list"},[i("ul",[t.dialogData.hasMorePages?i("li",{staticClass:"history",on:{click:t.loadNextPage}},[t._v(t._s(t.$L("加载历史消息")))]):t.dialogData.loading>0&&0===t.dialogMsgList.length?i("li",{staticClass:"loading"},[i("Loading")],1):0===t.dialogMsgList.length?i("li",{staticClass:"nothing"},[t._v(t._s(t.$L("暂无消息")))]):t._e(),t._v(" "),t._l(t.dialogMsgList,(function(e){return i("li",{key:e.id,class:{self:e.userid==t.userId,"history-tip":t.topId==e.id},attrs:{id:"view_"+e.id}},[t.topId==e.id?i("em",{staticClass:"history-text"},[t._v(t._s(t.$L("历史消息")))]):t._e(),t._v(" "),i("div",{staticClass:"dialog-avatar"},[i("UserAvatar",{attrs:{userid:e.userid,"tooltip-disabled":e.userid==t.userId,size:30}})],1),t._v(" "),i("DialogView",{attrs:{"msg-data":e,"dialog-type":t.dialogData.type}})],1)})),t._v(" "),t._l(t.tempMsgList,(function(e){return i("li",{key:"tmp_"+e.id,class:{self:e.userid==t.userId},attrs:{id:"tmp_"+e.id}},[i("div",{staticClass:"dialog-avatar"},[i("UserAvatar",{attrs:{userid:e.userid,"tooltip-disabled":e.userid==t.userId,size:30}})],1),t._v(" "),i("DialogView",{attrs:{"msg-data":e,"dialog-type":t.dialogData.type}})],1)}))],2)])]),t._v(" "),i("div",{class:["dialog-footer",t.msgNew>0&&t.dialogMsgList.length>0?"newmsg":""],on:{click:t.onActive}},[i("div",{staticClass:"dialog-newmsg",on:{click:t.goNewBottom}},[t._v(t._s(t.$L("有"+t.msgNew+"条新消息")))]),t._v(" "),t._t("inputBefore"),t._v(" "),i("DragInput",{ref:"input",staticClass:"dialog-input",attrs:{type:"textarea",rows:1,autosize:{minRows:1,maxRows:3},maxlength:255,placeholder:t.$L("输入消息...")},on:{"on-focus":t.onEventFocus,"on-blur":t.onEventblur,"on-keydown":t.chatKeydown,"on-input-paste":t.pasteDrag},model:{value:t.msgText,callback:function(e){t.msgText=e},expression:"msgText"}}),t._v(" "),""!=t.msgText?i("div",{staticClass:"dialog-send",on:{click:t.sendMsg}},[i("Icon",{attrs:{type:"md-send"}})],1):t._e(),t._v(" "),i("DialogUpload",{ref:"chatUpload",staticClass:"chat-upload",attrs:{"dialog-id":t.dialogId},on:{"on-progress":function(e){return t.chatFile("progress",e)},"on-success":function(e){return t.chatFile("success",e)},"on-error":function(e){return t.chatFile("error",e)}}})],2),t._v(" "),t.dialogDrag?i("div",{staticClass:"drag-over",on:{click:function(e){t.dialogDrag=!1}}},[i("div",{staticClass:"drag-text"},[t._v(t._s(t.$L("拖动到这里发送")))])]):t._e()],2)}),[],!1,null,null,null).exports},94799:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var a=i(20629);function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const r={components:{DialogWrapper:i(47646).Z},data:function(){return{tabActive:"dialog",dialogType:[{type:"",name:"全部"},{type:"project",name:"项目"},{type:"task",name:"任务"},{type:"user",name:"个人"}],dialogActive:"",dialogKey:"",dialogId:0,contactsLoad:0,contactsLists:null}},activated:function(){this.openDialogStorage()},computed:o(o({},(0,a.rn)(["userId","dialogs","dialogOpenId"])),{},{dialogList:function(){var t=this.dialogActive,e=this.dialogKey;return""==t&&""==e?this.dialogs.filter((function(t){return void 0!==t.name})):this.dialogs.filter((function(i){var a=i.name,s=i.type,o=i.group_type,n=i.last_msg;if(void 0===a)return!1;if(t)switch(t){case"project":case"task":if(o!=t)return!1;break;case"user":if("user"!=s)return!1;break;default:return!1}if(e){var r=$A.strExists(a,e),l=n&&"text"===n.type&&$A.strExists(n.msg.text,e);if(!r&&!l)return!1}return!0}))},msgUnread:function(){return function(t){var e=0;return this.dialogs.map((function(i){if(i.unread)switch(t){case"project":case"task":t==i.group_type&&(e+=i.unread);break;case"user":t==i.type&&(e+=i.unread);break;default:e+=i.unread}})),e}}}),watch:{tabActive:function(t){t&&null===this.contactsLists&&this.getContactsList()},dialogOpenId:function(t){this.dialogId=t}},methods:{closeDialog:function(){this.dialogId=0,this.$store.state.method.setStorage("messenger::dialogId",0)},openDialog:function(t,e){this.$store.state.method.setStorage("messenger::dialogId",t.id),this.dialogId=t.id,this.scrollIntoActive(e)},openDialogStorage:function(){var t=this;if(this.dialogId=this.$store.state.method.getStorageInt("messenger::dialogId"),this.dialogId>0){var e=this.dialogs.find((function(e){return e.id===t.dialogId}));e&&this.openDialog(e,!1)}},openContacts:function(t){var e=this;this.tabActive="dialog",this.$store.dispatch("openDialogUserid",t.userid).then((function(){e.scrollIntoActive()}))},getContactsList:function(){var t=this;null===this.contactsLists&&(this.contactsLists={}),this.contactsLoad++,this.$store.dispatch("call",{url:"users/search",data:{take:50}}).then((function(e){var i=e.data;t.contactsLoad--,i.some((function(e){if(e.userid===t.userId)return!1;var i=e.az?e.az.toUpperCase():"#";void 0===t.contactsLists[i]&&(t.contactsLists[i]=[]);var a=t.contactsLists[i].findIndex((function(t){return t.userid===e.userid}));a>-1?t.contactsLists[i].splice(a,1,e):t.contactsLists[i].push(e)}))})).catch((function(){t.contactsLoad--}))},formatTime:function(t){var e=Math.round($A.Date(t).getTime()/1e3);return($A.formatDate("Ymd")===$A.formatDate("Ymd",e)?$A.formatDate("H:i",e):$A.formatDate("Y")===$A.formatDate("Y",e)?$A.formatDate("m-d",e):$A.formatDate("Y-m-d",e))||""},formatLastMsg:function(t){if($A.isJson(t))switch(t.type){case"text":return t.msg.text;case"file":return"img"==t.msg.type?"["+this.$L("图片")+"]":"["+this.$L("文件")+"] "+t.msg.name;default:return"["+this.$L("未知的消息")+"]"}return""},lastMsgReadDone:function(t){if($A.isJson(t)){var e=t.userid,i=t.percentage;if(e===this.userId)return 100===i?"md-done-all":"md-checkmark"}return null},scrollIntoActive:function(t){var e=this;this.$nextTick((function(){if(e.$refs.list){var i=e.$refs.list.querySelector(".active");if(i)scrollIntoView(i,{behavior:!0===t?"smooth":"instant",scrollMode:"if-needed"});else e.dialogs.find((function(t){return t.id==e.dialogId}))&&e.dialogActive&&(e.dialogActive="",e.$nextTick((function(){var i=e.$refs.list.querySelector(".active");i&&scrollIntoView(i,{behavior:!0===t?"smooth":"instant",scrollMode:"if-needed"})})))}}))}}};const l=(0,i(51900).Z)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-messenger"},[i("PageTitle",{attrs:{title:t.$L("消息")}}),t._v(" "),i("div",{staticClass:"messenger-wrapper"},[i("div",{staticClass:"messenger-select",class:{"show768-menu":0==t.dialogId}},[i("div",{staticClass:"messenger-search"},[i("div",{staticClass:"search-wrapper"},[i("Input",{attrs:{prefix:"ios-search",placeholder:t.$L("搜索..."),clearable:""},model:{value:t.dialogKey,callback:function(e){t.dialogKey=e},expression:"dialogKey"}})],1)]),t._v(" "),"dialog"===t.tabActive?i("div",{staticClass:"messenger-nav"},t._l(t.dialogType,(function(e,a){return i("p",{key:a,class:{active:t.dialogActive==e.type},on:{click:function(i){t.dialogActive=e.type}}},[i("Badge",{staticClass:"nav-num",attrs:{count:t.msgUnread(e.type)}}),t._v("\n                    "+t._s(t.$L(e.name))+"\n                ")],1)})),0):t._e(),t._v(" "),i("div",{ref:"list",staticClass:"messenger-list overlay-y"},["dialog"===t.tabActive?i("ul",{staticClass:"dialog"},t._l(t.dialogList,(function(e,a){return i("li",{key:a,class:{active:e.id==t.dialogId},on:{click:function(i){return t.openDialog(e,!0)}}},["group"==e.type?["project"==e.group_type?i("i",{staticClass:"taskfont icon-avatar project"},[t._v("")]):"task"==e.group_type?i("i",{staticClass:"taskfont icon-avatar task"},[t._v("")]):i("Icon",{staticClass:"icon-avatar",attrs:{type:"ios-people"}})]:e.dialog_user?i("div",{staticClass:"user-avatar"},[i("UserAvatar",{attrs:{userid:e.dialog_user.userid,size:42}})],1):i("Icon",{staticClass:"icon-avatar",attrs:{type:"md-person"}}),t._v(" "),i("div",{staticClass:"dialog-box"},[i("div",{staticClass:"dialog-title"},[i("span",[t._v(t._s(e.name))]),t._v(" "),"user"==e.type&&t.lastMsgReadDone(e.last_msg)?i("Icon",{attrs:{type:t.lastMsgReadDone(e.last_msg)}}):t._e(),t._v(" "),e.last_at?i("em",[t._v(t._s(t.formatTime(e.last_at)))]):t._e()],1),t._v(" "),i("div",{staticClass:"dialog-text"},[t._v(t._s(t.formatLastMsg(e.last_msg)))])]),t._v(" "),i("Badge",{staticClass:"dialog-num",attrs:{count:e.unread}})],2)})),0):i("ul",{staticClass:"contacts"},[t._l(t.contactsLists,(function(e,a){return i("li",[i("div",{staticClass:"label"},[t._v(t._s(a))]),t._v(" "),i("ul",t._l(e,(function(e,a){return i("li",{key:a,on:{click:function(i){return t.openContacts(e)}}},[i("div",{staticClass:"avatar"},[i("UserAvatar",{attrs:{userid:e.userid,size:30}})],1),t._v(" "),i("div",{staticClass:"nickname"},[t._v(t._s(e.nickname))])])})),0)])})),t._v(" "),t.contactsLoad>0?i("li",{staticClass:"loading"},[i("Loading")],1):t._e()],2)]),t._v(" "),i("div",{staticClass:"messenger-menu"},[i("Icon",{class:{active:"dialog"===t.tabActive},attrs:{type:"ios-chatbubbles"},on:{click:function(e){t.tabActive="dialog"}}}),t._v(" "),i("Icon",{class:{active:"contacts"===t.tabActive},attrs:{type:"md-person"},on:{click:function(e){t.tabActive="contacts"}}})],1)]),t._v(" "),i("div",{staticClass:"messenger-msg"},[t.dialogId>0?i("DialogWrapper",{attrs:{dialogId:t.dialogId},on:{"on-active":t.scrollIntoActive}},[i("div",{staticClass:"dialog-back",attrs:{slot:"inputBefore"},on:{click:t.closeDialog},slot:"inputBefore"},[i("Icon",{attrs:{type:"md-arrow-back"}})],1)]):i("div",{staticClass:"dialog-no"},[i("div",{staticClass:"dialog-no-icon"},[i("Icon",{attrs:{type:"ios-chatbubbles"}})],1),t._v(" "),i("div",{staticClass:"dialog-no-text"},[t._v(t._s(t.$L("选择一个会话开始聊天")))])])],1)])],1)}),[],!1,null,null,null).exports}}]);