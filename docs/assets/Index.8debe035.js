import{u as i,S as c}from"./Index.c29ae49d.js";import{n as u}from"./index.37372979.js";import"./vendor.0f0055ec.js";const m=e=>{if(e=i(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let a in e)return!0;return!1}return!!String(e).length},p=e=>(e=i(e),Array.isArray(e)?e.length:typeof e=="object"?Object.keys(e).length:String(e).length);function r(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return o=>(o=i(o),!m(o)||a.every(s=>s.test(o)))}r(/^[a-zA-Z]*$/);r(/^[a-zA-Z0-9]*$/);r(/^\d*(\.\d+)?$/);const f=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var x=r(f),l={$validator:x,$message:"Value is not a valid email address",$params:{type:"email"}};function h(e){return a=>!m(a)||p(a)>=i(e)}function b(e){return{$validator:h(e),$message:a=>{let{$params:t}=a;return`This field should be at least ${t.min} long`},$params:{min:e,type:"minLength"}}}function v(e){return typeof e=="string"&&(e=e.trim()),m(e)}var n={$validator:v,$message:"Value is required",$params:{type:"required"}};const g=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;r(g);r(/(^[0-9]*$)|(^-[0-9]+$)/);r(/^[-]?\d*(\.\d+)?$/);var S=[{name:"name",icon:"sdz-star",component:"SInput",label:"name",placeholder:"name",value:"1111",validate:{required:n,minLength:b(5)}},{name:"button",button:"editar",buttonIcon:"sdz-star",component:"SInput",label:"button",placeholder:"button",value:"",validate:{required:n}},[{name:"nome2",component:"SInput",label:"Nome2",placeholder:"Nome2",value:"",validate:{required:n}},{name:"email1",component:"SInput",label:"E-mail1",placeholder:"E-mail1",type:"email",value:"",validate:{required:n,email:l}},{name:"nome3",component:"SInput",label:"Nome3",placeholder:"Nome3",value:"",mask:"(##) ####-####"}],[{name:"checkbox1",component:"SCheckbox",label:"Positive",placeholder:"Positive",positive:!0,value:!0,validate:{required:n}},{name:"checkbox2",component:"SCheckbox",label:"Negative",placeholder:"Negative",negative:!0,value:!0,validate:{required:n}}],[{name:"radiobox",component:"SRadiobox",id:"sim",label:"radiobox",placeholder:"radiobox",value:"sim"},{name:"radiobox",component:"SRadiobox",id:"nao",label:"radiobox",placeholder:"radiobox",value:"nao"}],{name:"textarea",component:"SInput",label:"textarea",placeholder:"textarea",textArea:!0,value:""},{name:"switch",component:"SSwitch",label:"switch",value:!1},{name:"phone",component:"SInput",label:"phone",placeholder:"phone",value:"",mask:"(##) ####-####"},[{name:"email1",component:"SInput",label:"email1",placeholder:"email1",value:"",validate:{required:n,email:l}},{name:"email2",component:"SInput",label:"email2",placeholder:"email2",type:"email",value:"",validate:{required:n,email:l}}],{name:"cities",component:"SSelect",label:"cities",placeholder:"cities",display:"name",displayBy:"name",value:{name:"sp",id:2},items:[{name:"rj",id:1},{name:"sp",id:2}]}],$=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"s-form-builder-example"},[t("s-form-builder",{attrs:{fields:e.fields},on:{synchronize:e.synchronize}})],1)},_=[];const z={components:{SFormBuilder:c},data(){return{fields:S}},methods:{synchronize(e){console.log(e)}}},d={};var y=u(z,$,_,!1,I,null,null,null);function I(e){for(let a in d)this[a]=d[a]}var q=function(){return y.exports}();export{q as default};