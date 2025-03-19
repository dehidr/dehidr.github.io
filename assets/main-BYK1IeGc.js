import{j as e,P as i,c as o,r as d}from"./Conway-a0C2QSYf.js";import{c as s,N as h,S as t,G as x,B as m}from"./button-D2H4Z0aC.js";/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]],f=s("Clapperboard",p);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 18a3 3 0 1 0-6 0",key:"16awa0"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]],b=s("FileUser",u);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],w=s("Headphones",j);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],g=s("Music",v);function y({image:a}){return e.jsx("div",{className:`relative flex flex-col items-center justify-center p-4 overflow-hidden 
                 bg-[url('/media/checker.svg')] bg-repeat bg-[10px_10px] text-black`,children:e.jsx("img",{className:"relative border border-black md:max-w-4xl w-full",src:a,alt:"Poster"})})}const k=[{href:"https://www.github.com/dehidr",label:"GITHUB",icon:e.jsx(x,{className:"w-4 h-4"}),newtab:!0},{href:"https://open.spotify.com/user/11144260547",label:"SPOTIFY",icon:e.jsx(g,{className:"w-4 h-4"}),newtab:!0},{href:"https://letterboxd.com/dehidr/",label:"LETTERBOXD",icon:e.jsx(f,{className:"w-4 h-4"}),newtab:!0},{href:"https://www.last.fm/user/emrekerman",label:"LAST.FM",icon:e.jsx(w,{className:"w-4 h-4"}),newtab:!0},{href:"https://dehidr.github.io/cv",label:"RESUME",icon:e.jsx(b,{className:"w-4 h-4"}),newtab:!1}];function N(a,r,l,c){const n=c?e.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:[e.jsx("span",{className:"absolute left-3",children:l}),e.jsx("span",{className:"w-full text-center",children:a})]}):e.jsxs("a",{href:r,rel:"noopener noreferrer",children:[e.jsx("span",{className:"absolute left-3",children:l}),e.jsx("span",{className:"w-full text-center",children:a})]});return e.jsx(m,{variant:"default",size:"sm",asChild:!0,className:"w-full border border-black ",children:n})}function E(){return e.jsx("div",{className:"relative flex flex-col items-center justify-center  text-black overflow-hidden  p-4  bg-[url('/media/checker.svg')] bg-repeat bg-[10px_10px]",children:e.jsx("div",{className:"md:max-w-4xl relative w-full  text-left ",children:e.jsx("div",{className:"grid grid-cols-1 gap-2 items-center justify-center",children:k.map((a,r)=>N(a.label,a.href,a.icon,a.newtab))})})})}const M=()=>e.jsxs("div",{className:"bg-yellow-50",children:[e.jsx(h,{isSticky:!0,links:[{name:"HOME",href:"/"},{name:"GITHUB",href:"https://www.github.com/dehidr"},{name:"RESUME",href:"/cv"}]}),e.jsx(t,{animate:["100%","-100%"],speed:30}),E(),e.jsx(t,{animate:["100%","-100%"],speed:30}),e.jsx("div",{style:{width:"100%",height:"400px",overflow:"hidden"},children:e.jsx(i,{logo:!1})}),e.jsx(t,{animate:["100%","-100%"],speed:30}),e.jsx(y,{image:"/media/fffbeb.png"}),e.jsx(t,{text:"GOODBYE. GOODBYE. GOODBYE.",animate:["100%","-100%"],speed:30})]});o.createRoot(document.getElementById("root")).render(e.jsx(d.StrictMode,{children:e.jsx(M,{})}));
