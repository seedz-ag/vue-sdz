import{n as r}from"./index.d776cea1.js";import"./vendor.5affd582.js";const e={name:"SIcon",props:{icon:{type:String,required:!0},size:{type:[String,Number],default:20},primaryColor:Boolean,secondaryColor:Boolean},computed:{classes(){return[`s-icon icon ${this.icon}`,{"--primary":this.primaryColor,"--secondary":this.secondaryColor}]}}},o={};var n=r(e,(function(){var r=this,e=r.$createElement;return(r._self._c||e)("i",{class:r.classes,style:{"font-size":r.size+"px"}})}),[],!1,s,null,null,null);function s(r){for(let e in o)this[e]=o[e]}var t=function(){return n.exports}();export{t as default};