(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4873:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/[[...workspace]]",function(){return s(5790)}])},5790:function(e,a,s){"use strict";s.r(a),s.d(a,{__N_SSG:function(){return u},default:function(){return p}});var t=s(5893),i=s(9008),r=s.n(i),n=s(7294),l=s(3162),o=s(8813),c=s(3157),d=s(1163),m=JSON.parse('{"wZ":[{"description":"Chromium is a free and open-source browser, primarily developed and maintained by Google.","docker_registry":"https://index.docker.io/v1/","image_src":"chromium.png","name":"kasmweb/chromium:develop","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Browser"],"friendly_name":"Chromium","architecture":["amd64","arm64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":2980,"sha":"25399e3c06b23dcecce034506f5cecf203f9b414"},{"description":"DIBspace is a hardened Ubuntu OS with prebuilt Cooey community links and tools","docker_registry":"https://index.docker.io/v1/","image_src":"dibspace.png","name":"legitservices/ubuntu:20.04","run_config":{"hostname":"dibspace"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["OS"],"friendly_name":"DIBspace","architecture":["amd64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":2170,"sha":"0e3cbfcf383bfd10c03f831234027700aefcccbd"},{"description":"Chromium is a free and open-source browser, primarily developed and maintained by Google.","docker_registry":"https://index.docker.io/v1/","image_src":"draw.png","name":"jgraph/drawio:latest","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Browser"],"friendly_name":"Drawio","architecture":["amd64","arm64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":2170,"sha":"4d018eab95945916afd1d65aa5ccd9d681b433be"},{"description":"Gaming Workstation","docker_registry":"https://docker2.newey.id.au/v2/","image_src":"ubuntuws.png","name":"my-ubuntu:latest","run_config":{"hostname":"kasm-Gaming"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Workstation"],"friendly_name":"Gaming Workstation","architecture":["amd64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":21700,"sha":"60afe90a34c7eb2bdafdc8634d808da9720ff7f3"},{"description":"Kali Linux is a Debian-derived Linux distribution designed for digital forensics and penetration testing.","docker_registry":"https://index.docker.io/v1/","name":"kasmweb/kali-rolling-desktop:develop","image_src":"kali.png","categories":["Development"],"friendly_name":"Kali Linux Custom","architecture":["amd64"],"run_config":{"hostname":"kasm","security_opt":["seccomp=unconfined"],"user":"root"},"exec_config":{"first_launch":{"cmd":"bash -c \'apt-get update && sudo apt-get install nano -y && sudo dpkg --add-architecture i386 && sudo mkdir -pm755 /etc/apt/keyrings && sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key && sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/debian/dists/bookworm/winehq-bookworm.sources && sudo apt update && sudo apt install --install-recommends winehq-stable && apt-get install cherrytree -y && ln -s /share/ ~/Desktop/share && echo \\"kasm-user  ALL=(ALL) NOPASSWD: ALL\\" >> /etc/sudoers\'","user":"root"}},"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":2170,"sha":"7ef7d0e5d68b7ec7b1a16c2ce59a3af9bcde937c"},{"friendly_name":"Moonlight","image_src":"moonlight.png","description":"Moonlight PC is an open source PC client for NVIDIA GameStream, as used by the NVIDIA Shield.","name":"docker pull jordanplayz158/moonlight-qt:latest","cpu_allocation_method":"Inherit","docker_registry":"https://index.docker.io/v1/","categories":["Games","Remote Access"],"require_gpu":false,"enabled":true,"image_type":"Container","run_config":{"security_opt":["seccomp=unconfined"],"entrypoint":["/kasminit"],"user":1000},"exec_config":{},"architecture":["amd64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":1960,"sha":"0f666501878b28f4b10c98f4588066ddae7d8b2f"},{"description":"One platform for your team and your work.","docker_registry":"https://index.docker.io/v1/","name":"kasmweb/slack:develop","image_src":"slack.png","categories":["Development"],"friendly_name":"Slack","architecture":["amd64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":2170,"sha":"82c074613df863db9053490ef76fb4c472fa58e8"},{"description":"Steam in a ubuntu image","docker_registry":"https://ghcr.io/","image_src":"steam-app.png","name":"ghcr.io/falaxir/kasm-images:steam-app","run_config":{"security_opt":["seccomp=unconfined"],"entrypoint":["/kasminit"],"user":1000,"hostname":"kasm-steam"},"exec_config":{},"categories":["Desktop"],"friendly_name":"Steam app","architecture":["amd64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":2929,"sha":"1242ce8843679c7054b276b0e4c457b23c0791ac"},{"description":"Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.","docker_registry":"https://index.docker.io/v1/","name":"kasmweb/vs-code:develop","image_src":"Visual Studio Code.png","categories":["Development"],"friendly_name":"Visual Studio Code","architecture":["amd64","arm64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":2170,"sha":"50890e4f6d1e6d80d95c8b44fdff11187c21c30a"},{"friendly_name":"Wine","image_src":"wine.png","description":"Wine","name":"Olekpetersen/wine:latest","cores":2,"memory":2768,"gpu_count":0,"cpu_allocation_method":"Inherit","docker_registry":"https://index.docker.io/v1/","categories":["Desktop"],"require_gpu":false,"enabled":true,"image_type":"Container","architecture":["amd64"],"sha":"84447d30632a0fae9d2343185d39452a404d1806"}]}'),u=!0;function p(e){let{workspace:a}=e,i=(0,n.useRef)(null),u=(0,n.useRef)(null),p=(0,n.useRef)(null),[g,f]=(0,n.useState)(null),[b,x]=(0,n.useState)(null),[_,y]=(0,n.useState)(null),[v,k]=(0,n.useState)("png"),[w,j]=(0,n.useState)(null),N={friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",categories:[],require_gpu:!1,enabled:!0,image_type:"Container"},[S,C]=(0,n.useState)(N);(0,d.useRouter)(),(0,n.useEffect)(()=>{if(null===a)p.current.value="",i.current.value="",u.current.value="",f(null),x(null),y(null),C(N);else if(a&&a[0]){let e=m.wZ.find(e=>e.name===atob(a[0]));if(delete e.sha,p.current.value=e.description,i.current.value=e.name,u.current.value=e.friendly_name,e.categories){let s=[];e.categories.map(e=>s.push({label:e,value:e})),f(s)}if(e.architecture){let t=[];e.architecture.map(e=>t.push({label:e,value:e})),x(t)}j("../../icons/"+e.image_src),C({...S,...e})}},[a]);let L={control:(e,a)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue(e,a){let{data:s}=a;return{...e,backgroundColor:"#dde6f1"}}};(0,n.useEffect)(()=>{if(S&&S.friendly_name){let e={...S};e.image_src=R(e.friendly_name)+"."+v,C(e)}},[v]);let A=e=>{let a={...S};a.categories=e.map(e=>e.value),C(a);let s=[];a.categories.map(e=>s.push({label:e,value:e})),f(s)},D=e=>{let a={...S};a.architecture=e.map(e=>e.value),C(a);let s=[];a.architecture.map(e=>s.push({label:e,value:e})),x(s)};function R(e){var a=e.toString().toLowerCase();return(a=(a=(a=a.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let I=()=>{var e=s(5733);let a=new e,t=a.folder(S.friendly_name);if(t.file("workspace.json",JSON.stringify(S,null,2)),_)t.file(S.image_src,_.file);else if(w){let i=fetch(w).then(e=>e.blob());t.file(S.image_src,i)}a.generateAsync({type:"blob"}).then(function(e){(0,l.saveAs)(e,R(S.friendly_name)+".zip")})},z=e=>{let a={...S};a[e.target.name]=e.target.value,"icon"===e.target.name&&(delete a.icon,y({value:e.target.value,file:e.target.files[0]}),k(e.target.value.substr(e.target.value.lastIndexOf(".")+1)),j(null)),a.friendly_name&&(a.image_src=R(a.friendly_name)+"."+v),C(a)};return(0,t.jsxs)("div",{className:"",children:[(0,t.jsxs)(r(),{children:[(0,t.jsx)("title",{children:"Kasm Workspaces"}),(0,t.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,t.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,t.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Workspace"}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("p",{className:"mb-8 opacity-70",children:'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,t.jsx)("input",{type:"file",name:"icon",onChange:z,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,t.jsx)("input",{ref:u,name:"friendly_name",onChange:z,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,t.jsx)(o.Z,{instanceId:"1",name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:A,styles:L,value:g}),(0,t.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,t.jsx)("input",{ref:p,name:"description",onChange:z,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the workspace"}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,t.jsx)("input",{ref:i,name:"name",onChange:z,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,t.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Architecture"}),(0,t.jsx)(c.ZP,{instanceId:"2",name:"architecture",isMulti:!0,options:[{value:"amd64",label:"amd64"},{value:"arm64",label:"arm64"}],onChange:D,styles:L,value:b}),(0,t.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."})]})]}),(0,t.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,t.jsx)(h,{workspace:S,icon:_,inlineImage:w}),(0,t.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...S},null,2)}),(0,t.jsx)("button",{onClick:I,className:"p-4 relative z-10 px-5 bg-cyan-700 border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function h(e){let{workspace:a,icon:s,inlineImage:i}=e,[r,l]=(0,n.useState)(!1),o=null;if(s){let c=new Blob([s.file]);o=URL.createObjectURL(c),a.image_src=o}return(0,t.jsx)("div",{className:"rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,t.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[200px] transition-all"+(r?" -translate-y-1/2":""),children:[(0,t.jsxs)("div",{onClick:()=>l(!0),className:"h-[100px] p-4 relative overflow-hidden cursor-pointer",children:[(0,t.jsx)("img",{className:"h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",src:a.image_src,onError(e){null!==i&&(e.target.src=i)},alt:a.friendly_name}),(0,t.jsxs)("div",{className:"flex-col pl-28",children:[(0,t.jsx)("div",{className:"font-bold",children:a.friendly_name||"Friendly Name"}),(0,t.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["Petersen Tech"," ",(0,t.jsx)("span",{children:void 0})]}),(0,t.jsx)("div",{className:" h-8"})]}),(0,t.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",children:[a.architecture&&a.architecture.map((e,a)=>(0,t.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",children:e},"arch"+a)),a.categories.map((e,a)=>(0,t.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",children:e},"cat"+a))]}),!1]}),(0,t.jsxs)("div",{className:"h-[100px] text-xs relative p-2 pl-4 flex",children:[(0,t.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>l(!1),children:(0,t.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,t.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),(0,t.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,t.jsx)("div",{className:"font-bold",children:a.friendly_name})," ",a.description]}),(0,t.jsxs)("div",{className:"flex flex-col justify-end gap-1",children:[(0,t.jsx)("div",{className:"text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",children:"Edit"}),(0,t.jsx)("button",{className:"text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"})]})]})]})})}}},function(e){e.O(0,[484,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);