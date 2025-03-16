import{j as e,r as l,P as S,c as E}from"./Conway-BJeILc5t.js";import{c as u,a as P,N as L,S as v}from"./Navbar-DpHZ5qQA.js";function A({className:t,...s}){return e.jsx("div",{"data-slot":"card",className:u("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",t),...s})}function D({className:t,...s}){return e.jsx("div",{"data-slot":"card-header",className:u("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",t),...s})}function V({className:t,...s}){return e.jsx("div",{"data-slot":"card-title",className:u("leading-none font-semibold",t),...s})}function O({className:t,...s}){return e.jsx("div",{"data-slot":"card-description",className:u("text-muted-foreground text-sm",t),...s})}function R({className:t,...s}){return e.jsx("div",{"data-slot":"card-content",className:u("px-6",t),...s})}function z({className:t,...s}){return e.jsx("div",{"data-slot":"card-footer",className:u("flex items-center px-6 [.border-t]:pt-6",t),...s})}function j(t,s){if(typeof t=="function")return t(s);t!=null&&(t.current=s)}function B(...t){return s=>{let i=!1;const r=t.map(n=>{const a=j(n,s);return!i&&typeof a=="function"&&(i=!0),a});if(i)return()=>{for(let n=0;n<r.length;n++){const a=r[n];typeof a=="function"?a():j(t[n],null)}}}}var N=l.forwardRef((t,s)=>{const{children:i,...r}=t,n=l.Children.toArray(i),a=n.find(T);if(a){const c=a.props.children,d=n.map(g=>g===a?l.Children.count(c)>1?l.Children.only(null):l.isValidElement(c)?c.props.children:null:g);return e.jsx(p,{...r,ref:s,children:l.isValidElement(c)?l.cloneElement(c,void 0,d):null})}return e.jsx(p,{...r,ref:s,children:i})});N.displayName="Slot";var p=l.forwardRef((t,s)=>{const{children:i,...r}=t;if(l.isValidElement(i)){const n=G(i),a=F(r,i.props);return i.type!==l.Fragment&&(a.ref=s?B(s,n):n),l.cloneElement(i,a)}return l.Children.count(i)>1?l.Children.only(null):null});p.displayName="SlotClone";var M=({children:t})=>e.jsx(e.Fragment,{children:t});function T(t){return l.isValidElement(t)&&t.type===M}function F(t,s){const i={...s};for(const r in s){const n=t[r],a=s[r];/^on[A-Z]/.test(r)?n&&a?i[r]=(...d)=>{a(...d),n(...d)}:n&&(i[r]=n):r==="style"?i[r]={...n,...a}:r==="className"&&(i[r]=[n,a].filter(Boolean).join(" "))}return{...t,...i}}function G(t){var r,n;let s=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,i=s&&"isReactWarning"in s&&s.isReactWarning;return i?t.ref:(s=(n=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:n.get,i=s&&"isReactWarning"in s&&s.isReactWarning,i?t.props.ref:t.props.ref||t.ref)}const y=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,w=P,I=(t,s)=>i=>{var r;if((s==null?void 0:s.variants)==null)return w(t,i==null?void 0:i.class,i==null?void 0:i.className);const{variants:n,defaultVariants:a}=s,c=Object.keys(n).map(o=>{const m=i==null?void 0:i[o],x=a==null?void 0:a[o];if(m===null)return null;const h=y(m)||y(x);return n[o][h]}),d=i&&Object.entries(i).reduce((o,m)=>{let[x,h]=m;return h===void 0||(o[x]=h),o},{}),g=s==null||(r=s.compoundVariants)===null||r===void 0?void 0:r.reduce((o,m)=>{let{class:x,className:h,...k}=m;return Object.entries(k).every(C=>{let[b,f]=C;return Array.isArray(f)?f.includes({...a,...d}[b]):{...a,...d}[b]===f})?[...o,x,h]:o},[]);return w(t,c,g,i==null?void 0:i.class,i==null?void 0:i.className)},W=I("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function _({className:t,variant:s,size:i,asChild:r=!1,...n}){const a=r?N:"button";return e.jsx(a,{"data-slot":"button",className:u(W({variant:s,size:i,className:t})),...n})}const H=[{title:"Early Frost Detection using ML & Sensor Data",description:"Developed a system to detect ice formation on cooling fins using machine learning and sensor data to improve refrigerator efficiency.",image:"",tags:["Go","Python","C","TensorFlow","Keras","ESP-32"],responsibilities:["Web server and front-end for data monitoring written in Go","Creating a refrigerator prototype from scratch","Data collection with ESP-32 and sensor modules","Data preprocessing, feature engineering, and model training"],githubLink:""},{title:"Hand Gesture Detection with Computer Vision",description:"Created two different models to detect and classify hand gestures using computer vision with a webcam.",image:"",tags:["Python","TensorFlow","Keras","NumPy"],responsibilities:["Prepared the dataset from scratch","Built one CNN model that is simpler and less resource-heavy","Built another ML model utilizing Residual Networks architecture","Created a safe & efficient training pipeline with Model Checkpoints","Built webcam support and UX improvements"],githubLink:""},{title:"Game Platform & Storefront",description:"A simple store-front, similar to Steam, that allows users to buy, sell, and publish games.",image:"",tags:["C#",".NET Core","PostgreSQL"],responsibilities:["Database architecture & design","Database automation and management","Back-end development and application logic"],githubLink:""},{title:"Computer From Scratch",description:"Created a computer that can execute custom assembly code from scratch starting with basic logic gates.",image:"",tags:["Intel Quartus Prime"],responsibilities:["Built ALU, controller, bus, memory, and other registers","Implemented from basic logic gates"],githubLink:""},{title:"Fire & Ice",description:"Simple TUI Game written in Java with the Enigma library.",image:"",tags:["Java"],githubLink:"https://github.com/dehidr/fireandice-pbl"},{title:"Simple Music Player",description:"A simple music player with playlist support.",image:"",tags:["Java","JavaFX"],githubLink:""}];function J(){return e.jsxs("div",{className:"py-16 bg-yellow-50 max-w-6xl mx-auto",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"My Projects"}),e.jsx("div",{className:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-2 gap-3",children:H.map((t,s)=>e.jsxs(A,{className:"rounded-none border border-black bg-yellow-50 flex flex-col md:m-1",children:[t.image&&e.jsx("div",{className:"aspect-video w-full overflow-hidden",children:e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover transition-transform duration-200 hover:scale-105"})}),e.jsxs(D,{children:[e.jsx(V,{children:t.title}),e.jsx(O,{children:e.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:t.tags.map((i,r)=>e.jsx("span",{className:"text-black bg-yellow-50 rounded border border-black px-2 py-1",children:i},r))})})]}),e.jsxs(R,{className:"flex-grow",children:[e.jsx("p",{children:t.description}),t.responsibilities&&e.jsxs("div",{className:"mt-3",children:[e.jsx("p",{className:"font-semibold",children:"Responsibilities:"}),e.jsx("ul",{className:"list-disc pl-5 mt-1 text-sm",children:t.responsibilities.map((i,r)=>e.jsx("li",{children:i},r))})]})]}),t.githubLink&&e.jsx(z,{children:e.jsx(_,{variant:"outline",size:"sm",asChild:!0,className:"w-full border border-black bg-yellow-50",children:e.jsx("a",{href:t.githubLink,target:"_blank",rel:"noopener noreferrer",children:"View on GitHub"})})})]},s))})]})}function U(){const t=[{degree:"Bachelor of Science in Computer Engineering",institution:"Dokuz Eylül University",period:"2021 - 2025",description:"Relevant coursework: Advanced Algorithms, Data Structures, Web Development, Computer Vision, Machine Learning, Embedded Systems, Computer Architecture, Database Management Systems."},{degree:"High School Diploma",institution:"Izmir Yunus Emre Anadolu Lisesi",period:"2018 - 2021",description:""}];return e.jsxs("div",{className:"max-w-4xl mx-auto px-4 bg-yellow-50",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"Education"}),e.jsx("div",{className:"space-y-8",children:t.map((s,i)=>e.jsxs("div",{className:" p-6  border-solid border border-black shadow-sm",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:justify-between md:items-start mb-2",children:[e.jsx("h3",{className:"text-xl font-semibold",children:s.degree}),e.jsx("span",{className:"text-muted-foreground",children:s.period})]}),e.jsx("p",{className:"text-primary font-medium mb-2",children:s.institution}),s.description&&e.jsx("p",{className:"text-muted-foreground",children:s.description})]},i))})]})}function K(){const t=[{title:"Programming Languages",skills:["Go","Rust","Java","Kotlin","C#","Lua","C","Python","JavaScript","HTML","CSS"]},{title:"Operating Systems & Tools",skills:["Docker","Linux","Bash"]},{title:"Machine Learning",skills:["TensorFlow","Keras","NumPy"]},{title:"Databases",skills:["PostgreSQL","SQL","NoSQL"]},{title:"Adobe Creative Suite",skills:["Photoshop","After Effects","Illustrator","Premiere Pro"]},{title:"Soft Skills",skills:["Communication","Problem-Solving","Teamwork & Collaboration","Leadership"]},{title:"Languages",skills:["Turkish (Native)","English (Fluent)","German (Beginner)"]}];return e.jsxs("div",{id:"skills",className:"py-16 bg-yellow-50 max-w-6xl mx-auto px-4",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"Skills & Technologies"}),e.jsx("div",{className:" grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map((s,i)=>e.jsxs("div",{className:"bg-card p-6 bg-yellow-50 border-solid border border-black shadow-sm",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:s.title}),e.jsx("ul",{className:"space-y-2",children:s.skills.map((r,n)=>e.jsxs("li",{className:"flex items-center",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-primary mr-2"}),r]},n))})]},i))})]})}function Q(){return e.jsx("section",{id:"about",className:"py-16",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"About Me"}),e.jsxs("div",{className:" p-6 bg-yellow-50 border border-solid border-black",children:[e.jsx("p",{className:"text-lg mb-4",children:"Computer Engineering student from Izmir, currently studying at Dokuz Eylül University, who loves Linux and Open-Source software."}),e.jsx("p",{className:"text-lg mb-4",children:"Experienced in software development, machine learning, and embedded systems, with hands-on experience in IoT, computer vision, and backend development."}),e.jsx("p",{className:"text-lg mb-4",children:"Always eager to learn new technologies and contributing to open-source projects."}),e.jsx("div",{className:"flex flex-wrap gap-3 mt-6",children:e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("a",{href:"https://github.com/dehidr",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-primary hover:text-white transition-colors",children:e.jsx("svg",{className:"w-5 h-5 bg-black fill-yellow-50",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})}),e.jsx("a",{href:"#",className:"w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-primary hover:text-white transition-colors",children:e.jsx("svg",{className:"w-5 h-5 bg-black fill-yellow-50",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})})}),e.jsx("a",{href:"#",className:"w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-primary hover:text-white transition-colors",children:e.jsx("svg",{className:"w-5 h-5 bg-black fill-yellow-50",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})})]})})]})]})})}const Y=()=>e.jsxs("div",{className:"bg-yellow-50",children:[e.jsx(S,{}),e.jsx(L,{isSticky:!0,links:[{name:"Home",href:"/"},{name:"About",href:"#about"},{name:"Education",href:"#education"},{name:"Projects",href:"#projects"},{name:"Skills",href:"#skills"}]}),e.jsx(v,{text:"WELCOME TO MY CV. ",animate:["100%","-100%"],speed:30}),e.jsx("div",{className:"relative flex flex-col items-center justify-center  text-black overflow-hidden  p-4 bg-yellow-50",children:e.jsx("div",{className:"md:max-w-4xl relative w-full  text-left ",children:e.jsxs("div",{className:" items-center justify-center",children:[e.jsx("section",{id:"about",children:e.jsx(Q,{})}),e.jsx("section",{id:"education",children:e.jsx(U,{})}),e.jsx("section",{id:"projects",children:e.jsx(J,{})}),e.jsx("section",{id:"skills",children:e.jsx(K,{})})]})})}),e.jsx(v,{text:"GOODBYE GOODBYE GOODBYE",animate:["100%","-100%"],speed:3})]});E.createRoot(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(Y,{})}));
