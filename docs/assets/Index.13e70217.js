import{u as s,S as A}from"./Index.998812de.js";import{n as B,g as E}from"./index.b6025da3.js";function f(e){return typeof e=="function"}function y(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function $(e){return f(e.$validator)?Object.assign({},e):{$validator:e}}function j(e){return typeof e=="object"?e.$valid:e}function z(e){return e.$validator||e}function N(e,t){if(!y(e))throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof e}`);if(!y(t)&&!f(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const a=$(t);return a.$params=Object.assign({},a.$params||{},e),a}function R(e,t){if(!f(e)&&typeof s(e)!="string")throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof e}`);if(!y(t)&&!f(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const a=$(t);return a.$message=e,a}function V(e,t=[]){const a=$(e);return Object.assign({},a,{$async:!0,$watchTargets:t})}function q(e){return{$validator(t,...a){return s(t).reduce((r,o)=>{const c=Object.entries(o).reduce((l,[d,b])=>{const O=e[d]||{},v=Object.entries(O).reduce((n,[_,x])=>{const u=z(x).call(this,b,o,...a),m=j(u);if(n.$data[_]=u,n.$data.$invalid=!m||!!n.$data.$invalid,n.$data.$error=n.$data.$invalid,!m){let p=x.$message||"";const w=x.$params||{};typeof p=="function"&&(p=p({$pending:!1,$invalid:!m,$params:w,$model:b,$response:u})),n.$errors.push({$property:d,$message:p,$params:w,$response:u,$model:b,$pending:!1,$validator:_})}return{$valid:n.$valid&&m,$data:n.$data,$errors:n.$errors}},{$valid:!0,$data:{},$errors:[]});return l.$data[d]=v.$data,l.$errors[d]=v.$errors,{$valid:l.$valid&&v.$valid,$data:l.$data,$errors:l.$errors}},{$valid:!0,$data:{},$errors:{}});return{$valid:r.$valid&&c.$valid,$data:r.$data.concat(c.$data),$errors:r.$errors.concat(c.$errors)}},{$valid:!0,$data:[],$errors:[]})},$message:({$response:t})=>t?t.$errors.map(a=>Object.values(a).map(r=>r.map(o=>o.$message)).reduce((r,o)=>r.concat(o),[])):[]}}const h=e=>{if(e=s(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let t in e)return!0;return!1}return!!String(e).length},I=e=>(e=s(e),Array.isArray(e)?e.length:typeof e=="object"?Object.keys(e).length:String(e).length);function k(e){return t=>(t=s(t),!h(t)||e.test(t))}var C=Object.freeze({__proto__:null,withParams:N,withMessage:R,withAsync:V,forEach:q,req:h,len:I,regex:k,unwrap:s,unwrapNormalizedValidator:z,unwrapValidatorResponse:j,normalizeValidatorObject:$});const F=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var M=k(F),g={$validator:M,$message:"Value is not a valid email address",$params:{type:"email"}};function P(e){return t=>!h(t)||I(t)>=s(e)}function L(e){return{$validator:P(e),$message:({$params:t})=>`This field should be at least ${t.min} long`,$params:{min:e,type:"minLength"}}}function D(e){return typeof e=="string"&&(e=e.trim()),h(e)}var i={$validator:D,$message:"Value is required",$params:{type:"required"}};const T=C.withMessage("Campo obrigat\xF3rio.",i);var G=[{name:"name",icon:"star",component:"SInput",label:"name",placeholder:"name",value:"1111",validate:{required:T,minLength:L(5)}},{name:"inputBtn",button:"editar",buttonIcon:"star",component:"SInput",label:"inputBtn",placeholder:"inputBtn",value:"",validate:{required:i},onClick(){this.$emit("click:input-btn")}},[{name:"nome2",width:"25%",component:"SInput",label:"Nome2",placeholder:"Nome2",value:"",validate:{required:i}},{name:"email1",width:"25%",component:"SInput",label:"E-mail1",placeholder:"E-mail1",type:"email",value:"",validate:{required:i,email:g}},{name:"nome3",width:"50%",component:"SInput",label:"Nome3",placeholder:"Nome3",value:"",mask:"(##) ####-####"}],[{name:"checkbox1",component:"SCheckbox",label:"Positive",placeholder:"Positive",positive:!0,value:!0,onInput:({form:e,field:t})=>{},validate:{required:i}},{name:"checkbox2",component:"SCheckbox",label:"Negative",placeholder:"Negative",negative:!0,value:!0,validate:{required:i}}],[{name:"radiobox",component:"SRadiobox",id:"sim",label:"radiobox",placeholder:"radiobox",value:"sim"},{name:"radiobox",component:"SRadiobox",id:"nao",label:"radiobox",placeholder:"radiobox",value:"nao"}],{name:"textarea",component:"SInput",label:"textarea",placeholder:"textarea",textArea:!0,value:""},{name:"switch",component:"SSwitch",label:"switch",value:!1},{name:"phone",component:"SInput",label:"phone",placeholder:"phone",value:"",mask:"(##) ####-####"},[{name:"email1",component:"SInput",label:"email1",placeholder:"email1",value:"",validate:{required:i,email:g}},{name:"email2",component:"SInput",label:"email2",placeholder:"email2",type:"email",value:"",validate:{required:i,email:g}}],{name:"cities",component:"SSelect",label:"cities",placeholder:"cities",trackBy:"id",displayBy:"name",value:{name:"sp",id:2},items:[{name:"rj",id:1},{name:"sp",id:2}]}],H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"s-form-builder-example"},[a("s-form-builder",{attrs:{fields:e.fields},on:{synchronize:e.synchronize,"click:input-btn":e.onInputBtn},scopedSlots:e._u([{key:"actions",fn:function(r){var o=r.$v,c=r.$resetData;return a("div",{staticClass:"actions"},[a("s-button",{on:{click:function(l){return e.submit(o,c)}}},[e._v("Salvar")])],1)}}])})],1)},J=[];const K={components:{SFormBuilder:A,SButton:E},data(){return{fields:G}},methods:{synchronize(e){},onInputBtn(){console.log("onInputBtn")},async submit(e,t){if(e.form.$touch(),e.form.$error){console.log("erroooo");return}t(),this.$nextTick(()=>{e.$reset()})}}},S={};var Q=B(K,H,J,!1,U,null,null,null);function U(e){for(let t in S)this[t]=S[t]}var Z=function(){return Q.exports}();export{Z as default};