import{i as c,S as l}from"./assets/vendor-B07T6_gy.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u=o=>{const a={method:"get"},s=new URLSearchParams({key:"48321806-d480a24496502db5d22ba5dda",image_type:"photo",orientation:"hotizontal",safesearch:!0,q:o});return fetch(`https://pixabay.com/api/?${s.toString()}`,a).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{c.show({color:"#ffafb4",message:t.message})})},f=document.querySelector("#search"),i=document.querySelector(".gallery"),d=new l(".gallery a",{captionsData:"alt",captionDelay:250});function m(o){return`<li><a class="gallery-link" href="${o.largeImageURL}"><img class="gallery-image" src="${o.previewURL}" alt="${o.tags}"/></a></li>`}function h(){return'<div class="loader"></div>'}document.querySelector(".submit").addEventListener("click",o=>{o.preventDefault(),i.innerHTML=h(),u(f.value).then(s=>{setTimeout(()=>{if(s.hits.length==0)throw new Error("Sorry, there are no images matching your search query. Please try again!");const t=s.hits.map(e=>m(e)).join("");i.innerHTML=t,d.refresh()},300)}).catch(s=>{c.error({title:"Error",message:s.message})})});
//# sourceMappingURL=index.js.map
