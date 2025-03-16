import{j as e,r as l,P as S,c as E}from"./Conway-B8RlqNEi.js";import{c as m,a as P,N as L,S as v}from"./Navbar-CXsj6YtN.js";function D({className:t,...r}){return e.jsx("div",{"data-slot":"card",className:m("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",t),...r})}function V({className:t,...r}){return e.jsx("div",{"data-slot":"card-header",className:m("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",t),...r})}function A({className:t,...r}){return e.jsx("div",{"data-slot":"card-title",className:m("leading-none font-semibold",t),...r})}function O({className:t,...r}){return e.jsx("div",{"data-slot":"card-description",className:m("text-muted-foreground text-sm",t),...r})}function T({className:t,...r}){return e.jsx("div",{"data-slot":"card-content",className:m("px-6",t),...r})}function B({className:t,...r}){return e.jsx("div",{"data-slot":"card-footer",className:m("flex items-center px-6 [.border-t]:pt-6",t),...r})}function y(t,r){if(typeof t=="function")return t(r);t!=null&&(t.current=r)}function z(...t){return r=>{let s=!1;const i=t.map(n=>{const a=y(n,r);return!s&&typeof a=="function"&&(s=!0),a});if(s)return()=>{for(let n=0;n<i.length;n++){const a=i[n];typeof a=="function"?a():y(t[n],null)}}}}var w=l.forwardRef((t,r)=>{const{children:s,...i}=t,n=l.Children.toArray(s),a=n.find(R);if(a){const d=a.props.children,c=n.map(g=>g===a?l.Children.count(d)>1?l.Children.only(null):l.isValidElement(d)?d.props.children:null:g);return e.jsx(b,{...i,ref:r,children:l.isValidElement(d)?l.cloneElement(d,void 0,c):null})}return e.jsx(b,{...i,ref:r,children:s})});w.displayName="Slot";var b=l.forwardRef((t,r)=>{const{children:s,...i}=t;if(l.isValidElement(s)){const n=I(s),a=G(i,s.props);return s.type!==l.Fragment&&(a.ref=r?z(r,n):n),l.cloneElement(s,a)}return l.Children.count(s)>1?l.Children.only(null):null});b.displayName="SlotClone";var M=({children:t})=>e.jsx(e.Fragment,{children:t});function R(t){return l.isValidElement(t)&&t.type===M}function G(t,r){const s={...r};for(const i in r){const n=t[i],a=r[i];/^on[A-Z]/.test(i)?n&&a?s[i]=(...c)=>{a(...c),n(...c)}:n&&(s[i]=n):i==="style"?s[i]={...n,...a}:i==="className"&&(s[i]=[n,a].filter(Boolean).join(" "))}return{...t,...s}}function I(t){var i,n;let r=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?t.ref:(r=(n=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:n.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?t.props.ref:t.props.ref||t.ref)}const j=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,N=P,F=(t,r)=>s=>{var i;if((r==null?void 0:r.variants)==null)return N(t,s==null?void 0:s.class,s==null?void 0:s.className);const{variants:n,defaultVariants:a}=r,d=Object.keys(n).map(o=>{const u=s==null?void 0:s[o],x=a==null?void 0:a[o];if(u===null)return null;const h=j(u)||j(x);return n[o][h]}),c=s&&Object.entries(s).reduce((o,u)=>{let[x,h]=u;return h===void 0||(o[x]=h),o},{}),g=r==null||(i=r.compoundVariants)===null||i===void 0?void 0:i.reduce((o,u)=>{let{class:x,className:h,...k}=u;return Object.entries(k).every(C=>{let[p,f]=C;return Array.isArray(f)?f.includes({...a,...c}[p]):{...a,...c}[p]===f})?[...o,x,h]:o},[]);return N(t,d,g,s==null?void 0:s.class,s==null?void 0:s.className)},_=F("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function H({className:t,variant:r,size:s,asChild:i=!1,...n}){const a=i?w:"button";return e.jsx(a,{"data-slot":"button",className:m(_({variant:r,size:s,className:t})),...n})}const W=[{title:"Early Frost Detection using ML & Sensor Data",description:"Developed a system to detect ice formation on cooling fins using machine learning and sensor data to improve refrigerator efficiency.",image:"",tags:["Go","Python","C","TensorFlow","Keras","ESP-32"],responsibilities:["Web server and front-end for data monitoring written in Go","Creating a refrigerator prototype from scratch","Data collection with ESP-32 and sensor modules","Data preprocessing, feature engineering, and model training"],githubLink:""},{title:"Hand Gesture Detection with Computer Vision",description:"Created two different models to detect and classify hand gestures using computer vision with a webcam.",image:"",tags:["Python","TensorFlow","Keras","NumPy"],responsibilities:["Prepared the dataset from scratch","Built one CNN model that is simpler and less resource-heavy","Built another ML model utilizing Residual Networks architecture","Created a safe & efficient training pipeline with Model Checkpoints","Built webcam support and UX improvements"],githubLink:""},{title:"Game Platform & Storefront",description:"A simple store-front, similar to Steam, that allows users to buy, sell, and publish games.",image:"",tags:["C#",".NET Core","PostgreSQL"],responsibilities:["Database architecture & design","Database automation and management","Back-end development and application logic"],githubLink:""},{title:"Computer From Scratch",description:"Created a computer that can execute custom assembly code from scratch starting with basic logic gates.",image:"",tags:["Intel Quartus Prime"],responsibilities:["Built ALU, controller, bus, memory, and other registers","Implemented from basic logic gates"],githubLink:""},{title:"Fire & Ice",description:"Simple TUI Game written in Java with the Enigma library.",image:"",tags:["Java"],githubLink:"https://github.com/dehidr/fireandice-pbl"},{title:"Simple Music Player",description:"A simple music player with playlist support.",image:"",tags:["Java","JavaFX"],githubLink:""}];function U(){return e.jsxs("div",{className:"py-16 bg-yellow-50 max-w-6xl mx-auto",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"My Projects"}),e.jsx("div",{className:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-2 gap-3",children:W.map((t,r)=>e.jsxs(D,{className:"rounded-none border border-black bg-yellow-50 flex flex-col md:m-1",children:[t.image&&e.jsx("div",{className:"aspect-video w-full overflow-hidden",children:e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover transition-transform duration-200 hover:scale-105"})}),e.jsxs(V,{children:[e.jsx(A,{children:t.title}),e.jsx(O,{children:e.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:t.tags.map((s,i)=>e.jsx("span",{className:"text-black bg-yellow-50 rounded border border-black px-2 py-1",children:s},i))})})]}),e.jsxs(T,{className:"flex-grow",children:[e.jsx("p",{children:t.description}),t.responsibilities&&e.jsxs("div",{className:"mt-3",children:[e.jsx("p",{className:"font-semibold",children:"Responsibilities:"}),e.jsx("ul",{className:"list-disc pl-5 mt-1 text-sm",children:t.responsibilities.map((s,i)=>e.jsx("li",{children:s},i))})]})]}),t.githubLink&&e.jsx(B,{children:e.jsx(H,{variant:"outline",size:"sm",asChild:!0,className:"w-full border border-black bg-yellow-50",children:e.jsx("a",{href:t.githubLink,target:"_blank",rel:"noopener noreferrer",children:"View on GitHub"})})})]},r))})]})}function J(){const t=[{degree:"Bachelor of Science in Computer Engineering",institution:"Dokuz Eylül University",period:"2021 - 2025",description:"Relevant coursework: Advanced Algorithms, Data Structures, Web Development, Computer Vision, Machine Learning, Embedded Systems, Computer Architecture, Database Management Systems."},{degree:"High School Diploma",institution:"Izmir Yunus Emre Anadolu Lisesi",period:"2018 - 2021",description:""}];return e.jsxs("div",{className:"max-w-4xl mx-auto px-4 bg-yellow-50",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"Education"}),e.jsx("div",{className:"space-y-8",children:t.map((r,s)=>e.jsxs("div",{className:" p-6  border-solid border border-black shadow-sm",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:justify-between md:items-start mb-2",children:[e.jsx("h3",{className:"text-xl font-semibold",children:r.degree}),e.jsx("span",{className:"text-muted-foreground",children:r.period})]}),e.jsx("p",{className:"text-primary  mb-2",children:r.institution}),r.description&&e.jsx("p",{className:"text-muted-foreground",children:r.description})]},s))})]})}function K(){const t=[{title:"Programming Languages",skills:["Go","Rust","Java","Kotlin","C#","Lua","C","Python","JavaScript","HTML","CSS"]},{title:"Operating Systems & Tools",skills:["Docker","Linux","Bash"]},{title:"Machine Learning",skills:["TensorFlow","Keras","NumPy"]},{title:"Databases",skills:["PostgreSQL","SQL","NoSQL"]},{title:"Adobe Creative Suite",skills:["Photoshop","After Effects","Illustrator","Premiere Pro"]},{title:"Soft Skills",skills:["Communication","Problem-Solving","Teamwork & Collaboration","Leadership"]},{title:"Languages",skills:["Turkish (Native)","English (Fluent)","German (Beginner)"]}];return e.jsxs("div",{id:"skills",className:"py-16 bg-yellow-50 max-w-6xl mx-auto px-4",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"Skills & Technologies"}),e.jsx("div",{className:" grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map((r,s)=>e.jsxs("div",{className:"bg-card p-6 bg-yellow-50 border-solid border border-black shadow-sm",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:r.title}),e.jsx("ul",{className:"space-y-2",children:r.skills.map((i,n)=>e.jsxs("li",{className:"flex items-center",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-primary mr-2"}),i]},n))})]},s))})]})}function Q(){return e.jsx("section",{id:"about",className:"py-16",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"About Me"}),e.jsxs("div",{className:" p-6 bg-yellow-50 border border-solid border-black",children:[e.jsx("p",{className:"text-lg mb-4",children:"Computer Engineering student from Izmir, currently studying at Dokuz Eylül University, who loves Linux and Open-Source software."}),e.jsx("p",{className:"text-lg mb-4",children:"Experienced in software development, machine learning, and embedded systems, with hands-on experience in IoT, computer vision, and backend development."}),e.jsx("p",{className:"text-lg mb-4",children:"Always eager to learn new technologies and contributing to open-source projects."}),e.jsx("div",{className:"flex flex-wrap gap-3 mt-6",children:e.jsx("div",{className:"flex space-x-4",children:e.jsx("div",{className:" relative flex flex-col items-center justify-center  text-black overflow-hidden   ",children:e.jsxs("div",{className:" grid grid-cols-3  gap-3 items-center justify-center",children:[e.jsx("a",{href:"https://github.com/dehidr",target:"_blank",rel:"noopener noreferrer",className:" relative bg-yellow-50 p-1 z-10 text-center border border-black border-solid hover:bg-amber-100 transition-all ",children:"GITHUB"}),e.jsx("a",{href:"https://linkedin.com/kermanemre",target:"_blank",rel:"noopener noreferrer",className:" relative bg-yellow-50 p-1  z-10 text-center border border-black border-solid hover:bg-amber-100 transition-all ",children:"LINKEDIN"}),e.jsx("a",{href:"mailto:emrekerman02@gmail.com",className:"relative bg-yellow-50 p-1 z-10 text-center border border-black border-solid hover:bg-amber-100 transition-all",children:"GMAIL"})]})})})})]})]})})}const Y=()=>e.jsxs("div",{className:"bg-yellow-50",children:[e.jsx(S,{logo:!0}),e.jsx(L,{isSticky:!0,links:[{name:"Home",href:"/"},{name:"About",href:"#about"},{name:"Education",href:"#education"},{name:"Projects",href:"#projects"},{name:"Skills",href:"#skills"}]}),e.jsx(v,{text:"WELCOME TO MY CV. ",animate:["100%","-100%"],speed:30}),e.jsx("div",{className:"relative flex flex-col items-center justify-center  text-black overflow-hidden  p-4 bg-yellow-50",children:e.jsx("div",{className:"md:max-w-4xl relative w-full  text-left ",children:e.jsxs("div",{className:" items-center justify-center",children:[e.jsx("section",{id:"about",children:e.jsx(Q,{})}),e.jsx("section",{id:"education",children:e.jsx(J,{})}),e.jsx("section",{id:"projects",children:e.jsx(U,{})}),e.jsx("section",{id:"skills",children:e.jsx(K,{})})]})})}),e.jsx(v,{text:"GOODBYE GOODBYE GOODBYE",animate:["100%","-100%"],speed:3}),e.jsx("div",{className:` relative flex flex-col items-center justify-center text-black overflow-hidden 
             bg-[url('/media/checker.svg')] bg-repeat bg-[10px_10px]`,style:{width:"100%",height:"400px",overflow:"hidden"}})]});E.createRoot(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(Y,{})}));
