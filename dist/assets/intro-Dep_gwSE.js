const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/waiting-pd9qrLE1.js","assets/index-BCW33Ro3.js","assets/index-BotbsFDi.css","assets/backDeskImage-szvr8Scl.js","assets/createdCard-941gB_qq.js","assets/cardHome-eKGgcD-9.js","assets/samiBerhane-AHUqpuWn.js","assets/cardForShow-Ckwdhbb4.js","assets/flowers-BAYez1FN.js","assets/copy-CKV8I7sl.js"])))=>i.map(i=>d[i]);
import{r as t,a as at,c as lt,d as nt,e as ct,f as rt,g as it,h as ot,R as ut,S as le,j as e,_ as ft,i as dt,k as mt,l as ht}from"./index-BCW33Ro3.js";import{a as pt,f as xt,s as gt,t as jt,b as wt}from"./samiBerhane-AHUqpuWn.js";import{b as Nt}from"./backDeskImage-szvr8Scl.js";const St="/ReactNode-FullStack/assets/rb_32582-DVlN8tfr.png",yt="/ReactNode-FullStack/assets/10252815-BMtLfPNV.png",bt="/ReactNode-FullStack/assets/170670446_10252808-Cq7CscQd.png",$t="/ReactNode-FullStack/assets/22451856_SL-120920-38660-47-BOhqvpAZ.jpg",It="/ReactNode-FullStack/assets/360524525_11429953-BS3yicZM.png",vt="/ReactNode-FullStack/assets/9083415-Cjf6-Zd2.jpg",ne="/ReactNode-FullStack/assets/rb_26773-6cPzYJOS.png",Ct="/ReactNode-FullStack/assets/rb_30921-lO7n9tDH.png",Rt=()=>{const[r,m]=t.useState([]),a=[yt,bt,$t,It,vt,ne,Ct,St];return t.useEffect(()=>{a.length>0&&m(a)},[]),{AssetImage:r}},j="/ReactNode-FullStack/assets/14666-DF6KK7lC.jpg",Et="/ReactNode-FullStack/assets/next-1989_256-CLljnd2T.gif",$="/ReactNode-FullStack/assets/Pause-OvqhhEur.png",I="/ReactNode-FullStack/assets/Play-DoKDgyPZ.png",kt="/ReactNode-FullStack/assets/smallBack2-CQQLI1BT.jpg",_t="/ReactNode-FullStack/assets/smallBackDesc2-CL67KPgj.jpg",Tt=(r,m,a)=>{const[T,D]=t.useState(!1);return t.useState(!1),t.useEffect(()=>{r&&console.log("time to send data")},[r]),t.useEffect(()=>{const A=async()=>{try{const w=await pt.post("https://reactnode.baranneet.com/data/data",m,{headers:{"Content-Type":"multipart/form-data"}});console.log(w.data),D(!0)}catch(w){console.error("Error sending data:",w)}};m!=null&&r==!0&&a>0&&(A(),console.log(m))},[r,a]),{success:T}},Dt=()=>({type:at}),At=r=>({type:it,payload:r}),Ft=()=>({type:ot}),Mt=()=>({type:lt}),Pt=()=>({type:nt}),Ot=()=>({type:ct}),zt=()=>({type:rt}),Bt=ut.memo(({message:r})=>{const{isDesktop:m,isMobile:a,isTablet:T}=le();return e.jsx("div",{className:" w-full h-full relative flex justify-center",children:e.jsx("div",{className:`${a?"w-2/3":"w-1/3"}  bg-blue-100 fixed top-20 flex justify-center items-center z-50 p-2 animate-shake`,children:e.jsx("p",{className:"animate-fadeIn  text-red-600  word-break",children:r})})})}),Lt=t.lazy(()=>ft(()=>import("./waiting-pd9qrLE1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),Qt=({loaded:r,onLoad:m})=>{const{AssetImage:a}=Rt(),[T,D]=t.useState(!1),[A,w]=t.useState(!1),[v,ce]=t.useState(!1),[re,q]=t.useState(!1),[ie,oe]=t.useState(!1),[ue,H]=t.useState(!0),[V,fe]=t.useState(!1),[de,me]=t.useState(!1),[N,he]=t.useState(""),[pe,xe]=t.useState(!1),[Y,ge]=t.useState(!1);t.useState(!1);const[C,R]=t.useState(!1),[S,F]=t.useState(!1),[h,je]=t.useState(null),[p,we]=t.useState(!1),[E,K]=t.useState(!1),[M,Ne]=t.useState(""),[Q,Se]=t.useState(!1),[n,x]=t.useState(0),[P,ye]=t.useState(!1),[Ut,be]=t.useState(!1),[y,O]=t.useState(!1),[z,Z]=t.useState(!1),o=t.useRef(null),u=t.useRef(null),f=t.useRef(null),d=t.useRef(null),[Wt,G]=t.useState(!1),[B,k]=t.useState(!1),[$e,L]=t.useState(""),[Ie,ve]=t.useState(!1),[Ce,Re]=t.useState(0),[Ee,ke]=t.useState({}),[_e,Te]=t.useState(null),[J,De]=t.useState(!1);t.useState(!1);const[b,Ae]=t.useState(!1),[Fe,Me]=t.useState(""),{success:X}=Tt(Ie,Ee,Ce),{isMobile:s,isDesktop:qt,isTablet:Ht}=le(),[Pe,Oe]=t.useState(!1),[ze,Be]=t.useState(!1),[Le,Ue]=t.useState(!1),[We,_]=t.useState(!1),[ee,qe]=t.useState(!1),[te,He]=t.useState(!1),[se,Ve]=t.useState(!1),Ye=t.useRef(null),Ke=t.useRef(null),Qe=t.useRef(null),U=t.useRef(null),ae=dt(l=>l.intro),c=t.useMemo(()=>ae,[ae]),Ze=["",o,u,f,d],g=mt();t.useEffect(()=>{console.log(c)},[c]),t.useEffect(()=>{ee&&te&&se&&(o.current.load(),u.current.load(),f.current.load(),d.current.load())},[ee,te,se]),t.useEffect(()=>{const l=setTimeout(()=>{r||m()},1e3);return()=>clearTimeout(l)},[r]),t.useEffect(()=>{B&&setTimeout(()=>{k(!1)},3500)},[B]),t.useEffect(()=>{if(X){setTimeout(()=>{De(!0)},1500),Ae(!0);const l=Ze[n];l.current.volume=.5,setTimeout(()=>{l.current.pause(),console.log(l)},1500)}},[X]),t.useEffect(()=>{setTimeout(()=>{g(Dt())},500),setTimeout(()=>{g(Ot()),g(zt())},3500),setTimeout(()=>{g(Pt()),g(Mt())},6500),setTimeout(()=>{w(!0),ce(!0)},15500),setTimeout(()=>{q(!0),H(!1)},10500),setTimeout(()=>{oe(!0),q(!1),H(!1)},19500),setTimeout(()=>{fe(!0)},22e3)},[]),t.useEffect(()=>{a.length>0&&D(!0)},[a]),t.useEffect(()=>{N.length>0&&ge(!0)},[N]),t.useEffect(()=>{Y&&(xe(!0),setTimeout(()=>{R(!0)},3e3))},[Y]),t.useEffect(()=>{C&&!p&&setTimeout(()=>{R(!1),F(!0)},3e3)},[C]),t.useEffect(()=>{S&&!p&&setTimeout(()=>{R(!0),F(!1)},3e3)},[S]),t.useEffect(()=>{y&&setTimeout(()=>{O(!1),Z(!0)},3e3)},[y]),t.useEffect(()=>{z&&setTimeout(()=>{O(!0),Z(!1)},3e3)},[z]),t.useEffect(()=>{h!=null&&setTimeout(()=>{we(!0),R(!1),F(!1)},3e3)},[h]),t.useEffect(()=>{p&&setTimeout(()=>{K(!0)},3e3)},[p]),t.useEffect(()=>{E&&setTimeout(()=>{O(!0)},1e3)},[E]),t.useEffect(()=>{P&&setTimeout(()=>{be(!0),Se(!0),K(!1)},3e3)},[P]),t.useEffect(()=>{n!=0?G(!0):G(!1)},[n]);const Ge=()=>{console.log("create clicked"),g(At(!0)),setTimeout(()=>{g(Ft()),me(!0),Oe(!0)},5e3)},Je=()=>{U.current&&h==null&&U.current.click()},Xe=l=>{const i=l.target.files[0];if(i&&i.type.startsWith("image/")){const W=URL.createObjectURL(i);je(W),Te(i)}else L("Please select a valid image file."),k(!0)},et=()=>{r||m(),Be(!0)},tt=()=>{const l=st(N);Me(l);const i=new FormData;i.append("description",M),i.append("selectedMusic",n),i.append("name",N),i.append("image",_e),i.append("uniqueId",l),ve(!0),console.log("form data : ",i),ke(i),Re(W=>W+1)},st=l=>{const i=Date.now();return l+i};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:` ${c.hiddenIntroBack,""}  ${s?"":"flex justify-center items-center"}   w-full h-screen  relative overflow-hidden`,children:[e.jsx("div",{className:"w-full h-full absolute object-cover z-0  ",children:e.jsx("img",{src:kt,className:"w-full h-full ",alt:""})}),e.jsx("img",{onLoad:et,src:a[2],className:`w-full h-full absolute object-cover z-10 ${c.animate_in_intro_back,""} `,alt:""}),!c.hiddenIntroBack&&e.jsxs("div",{className:` ${s?"":"flex justify-center items-center"} ${c.animate_out_intro?"animate-fadeOut relative w-full h-full z-20 bg-black bg-opacity-50":"absolute w-full h-full z-20"}`,children:[e.jsx("img",{src:a[3],className:` ${c.hidden_center_image?"hidden":""} ${c.animate_in_centre_image?"animate-fadeIn":""} ${c.animate_center_image?"animate-bounce":""} ${s?"w-1/2 h-1/2":"w-1/3 h-full object-cover rounded-full"} absolute ${s?"top-20 left-20":""} z-30`,alt:""}),e.jsx("img",{src:a[0],className:` ${c.hidden_two_ballon?"hidden":""} ${c.animate_in_two_ballon?"animate-fadeIn":""}  ${c.animate_two_ballon?"animate-skew":""} ${s?"w-40 h-40 top-40 left-4":"w-80 h-80 left-60"} absolute  z-20`,alt:""}),e.jsx("img",{src:a[1],className:` ${c.hidden_two_ballon?"hidden":""} ${c.animate_in_two_ballon?"animate-fadeIn":""} ${c.animate_two_ballon?"animate-skew":""} ${s?"w-40 h-40 top-40 right-10":"w-80 h-80 right-60"} absolute  z-20`,alt:""}),e.jsxs("div",{className:` ${ue?"hidden":""} ${V?"hidden":""} ${ie?"animate-slideDown":""} ${re?"animate-fadeIn":""} absolute w-full h-full left-0 right-0 z-40 flex justify-center items-center`,children:[e.jsx("img",{src:a[7],className:` ${A?"animate-rotateCW":""} ${s?"w-full h-80 object-cover":"w-full h-full"} absolute z-10`,alt:""}),e.jsx("div",{className:` ${v?"w-full h-80":"w-80 h-80"} relative text-center `,children:e.jsxs("h1",{className:` ${v?"animate-rotateDeg text-4xl":"transform rotate-45"} font-extrabold text-center text-purple-700 mt-10 absolute ${s?"":"w-full h-full"} ${s&&v?"w-full h-full":""} z-40 ${v?" left-0 top-0":"  top-10 left-20"} text-break`,children:["🎉 Craft the Perfect Birthday",e.jsx("br",{}),"Surprise for Your Bestie! 🎂"]})})]}),e.jsx("div",{className:` ${V?"animate-slideUpToCurrent":"hidden"} w-full h-full ${s?"":"py-10"} absolute z-50 flex justify-center items-center cursor-pointer`,children:e.jsxs("div",{className:`${s?"w-1/2 h-1/2":"w-1/2 h-full"} relative flex justify-center items-center`,children:[e.jsx("img",{src:a[1],className:` ${s?"object-cover":""} ${Pe?"hidden":""} w-full h-full`,alt:""}),e.jsx("div",{onClick:Ge,className:"absolute w-full h-full top-10 flex justify-center ",children:e.jsx("p",{className:"text-white text-lg font-bold text-center animate-slideUpDown",children:"CLICK TO CREATE"})})]})})]}),de&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"  w-full h-full  animate-fadeIn  absolute z-20 flex justify-center items-center",children:[e.jsx("div",{className:`w-full h-full absolute z-10 ${J?"hidden":""}`,children:e.jsx("img",{src:_t,className:"w-full h-full object-cover",alt:""})}),e.jsxs("div",{className:"w-full h-full relative flex justify-center items-center",children:[e.jsx("img",{onLoad:()=>{Ue(!0)},src:s?a[4]:Nt,className:`absolute w-full h-full z-30 ${Le?"animate-fadeIn":"hidden"} ${b?"animate-fadeOut":""}   ${E&&s?"blur-md":""} `,alt:""}),e.jsxs("div",{className:` ${p?"animate-fadeOut":""} absolute h-2/3  ${s?" w-64 ":"w-1/2"} z-40 flex flex-col gap-y-10 justify-center items-center p-10`,children:[e.jsx("input",{value:N,onChange:l=>{he(l.target.value)},type:"text",placeholder:"Enter Your Friends Name",className:`border-b border-gray-400 focus:border-blue-500 focus:outline-none font-italic text-blue-600 ${s?"w-full ":"w-2/3"} py-1 text-center bg-red-300 bg-opacity-0 ${s?"":"text-4xl"} ${p?"animate-fadeOut":""} `}),e.jsxs("div",{onClick:Je,className:` ${pe?"":"hidden"} ${p?"animate-fadeOut":""} ${h==null?"h-20":""} w-full  relative flex justify-center items-center ${S?"animate-rotateCCW":""} ${C?"animate-rotateCW":""} `,children:[e.jsxs("span",{className:` ${h!=null?"hidden":""} ${s?"":"text-2xl"} w-full text-center text-green-600 font-bold`,children:[C?"UPLOAD PICTURE":"",S?"UPLOAD YOUR FRIENDS PICTURE":""]}),e.jsx("img",{src:j,className:` ${S||h!=null?"hidden":""} ${s?"w-16 h-16":"w-40 h-40"}  rounded-full animate-slideUpToCurrent`,alt:""}),e.jsx("img",{src:h,className:` ${h==null?"hidden":""} ${p?"animate-fadeOut":"animate-slideUpToCurrent"} ${s?"w-40 h-40":"w-80 h-80"} rounded-full `,alt:""})]})]}),E&&e.jsxs("div",{className:` ${P?"animate-fadeOut":""} ${s?"p-4 inset-y-10":"px-80 py-10 inset-y-10 inset-x-20 left-0 flex justify-center"}  absolute w-full  z-40 flex flex-col gap-y-6 justify-center items-center overflow-x-hidden`,children:[e.jsxs("div",{className:` ${y?"animate-fadeIn":""} w-full h-40 flex flex-row justify-center items-center relative  `,children:[e.jsx("span",{className:`text-center p-4 bg-black bg-opacity-50 ${z?"animate-rotateCCW z-50":"opacity-0"} `,children:"Message Your Friend"}),e.jsx("img",{src:ne,className:` ${y?"animate-rotateCW":"opacity-0"} ${s?"w-full h-40 top-0 left-0":"w-60 h-60 top-0 z-50"}  absolute `,alt:""})]}),e.jsxs("div",{className:`w-full flex justify-start items-start h-full ${s?"p-4":"py-10 px-20 mt-10"} relative`,children:[e.jsx("textarea",{value:M,onChange:l=>{Ne(l.target.value)},className:` ${y?"text-violet-600":"text-teal-400"} ${s?"w-full p-2 bg-opacity-10 ":"w-2/3 top-0 left-40 absolute p-8 bg-opacity-20"} h-full z-10 bg-red-300  font-bold font-mono text-2xl word-break`,placeholder:"ENTER MESSAGE",name:"",id:""}),e.jsx("img",{src:a[4],className:`${s?"w-full opacity-80 left-0":"w-2/3 left-40"} h-full absolute  top-0 p-4 `,alt:""})]}),e.jsx("div",{className:"w-full h-20  flex justify-center items-center cursor-pointer",children:e.jsx("img",{onClick:()=>{M==""?(k(!0),L("You Should Write a message!")):ye(!0)},src:Et,className:` animate-fadeIn ${s?"w-40 h-20":"h-28 w-60"} object-cover`,alt:""})})]}),Q&&e.jsxs("div",{className:` ${We?"animate-fadeIn":"hidden"} ${b?"animate-fadeOut z-10":"animate-fadeIn z-40"} ${s?"":"p-10"} ${s?"w-full inset-0":"w-1/2 inset-y-20 rounded-lg border-4 border-green-400"} bg-black flex flex-col justify-center items-center gap-y-6 bg-opacity-50  absolute`,children:[e.jsx("div",{className:"w-full p-6 bg-gray-300 flex justify-center items-center",children:e.jsx("span",{className:"text-white text-2xl",children:"SELECT MUSIC"})}),e.jsxs("div",{onClick:()=>{n==1?(o.current.pause(),x(0)):b||(o.current.play(),x(1)),console.log("first clicked")},className:` ${n==1?"animate-bounce":""} cursor-pointer w-full h-20  flex justify-around items-center`,children:[e.jsxs("div",{className:"w-20 h-20 rounded-full",children:[e.jsx("img",{src:j,className:"w-full h-full rounded-full",alt:""}),e.jsx("img",{onLoad:()=>{Ve(!0)},src:j,ref:Qe,className:"hidden",alt:""}),e.jsx("img",{onLoad:()=>{He(!0)},src:I,ref:Ye,className:"hidden",alt:""}),e.jsx("img",{onLoad:()=>{qe(!0)},src:$,ref:Ke,className:"hidden",alt:""})]}),e.jsx("div",{className:"",children:e.jsx("span",{className:"text-green-300 ",children:"SAMI BERHANE"})}),e.jsx("div",{className:"w-20 h-20 ",children:e.jsx("img",{src:n==1?$:I,className:"w-full h-full",alt:""})})]}),e.jsxs("div",{onClick:()=>{n==2?(u.current.pause(),x(0)):b||(u.current.play(),x(2)),console.log("first clicked")},className:` ${n==2?"animate-bounce":""} cursor-pointer w-full h-20  flex justify-around items-center`,children:[e.jsx("div",{className:"w-20 h-20 rounded-full",children:e.jsx("img",{src:j,className:"w-full h-full rounded-full",alt:""})}),e.jsx("div",{className:"",children:e.jsx("span",{className:"text-green-300 ",children:"HELEN MELESE"})}),e.jsx("div",{className:"w-20 h-20 ",children:e.jsx("img",{src:n==2?$:I,className:"w-full h-full",alt:""})})]}),e.jsxs("div",{onClick:()=>{n==3?(f.current.pause(),x(0)):b||(f.current.play(),x(3)),console.log("first clicked")},className:` ${n==3?"animate-bounce":""} cursor-pointer w-full h-20  flex justify-around items-center`,children:[e.jsx("div",{className:"w-20 h-20 rounded-full",children:e.jsx("img",{src:j,className:"w-full h-full rounded-full",alt:""})}),e.jsx("div",{className:"",children:e.jsx("span",{className:"text-green-300 ",children:"HELEN MELESE"})}),e.jsx("div",{className:"w-20 h-20 ",children:e.jsx("img",{src:n==3?$:I,className:"w-full h-full",alt:""})})]}),e.jsxs("div",{onClick:()=>{n==4?(d.current.pause(),x(0)):(d.current.play(),x(4)),console.log("first clicked")},className:` ${n==4?"animate-bounce":""} cursor-pointer w-full h-20  flex justify-around items-center`,children:[e.jsx("div",{className:"w-20 h-20 rounded-full",children:e.jsx("img",{src:j,className:"w-full h-full rounded-full",alt:""})}),e.jsx("div",{className:"",children:e.jsx("span",{className:"text-green-300 ",children:"SAMI BERHANE"})}),e.jsx("div",{className:"w-20 h-20 ",children:e.jsx("img",{src:n==4?$:I,className:"w-full h-full",alt:""})})]}),e.jsx("div",{className:"w-full h-40 flex justify-center items-center animate-fadeIn",children:e.jsx("button",{onClick:()=>{n==0?(L("You Should Select The Music"),k(!0)):tt()},className:"p-4 bg-gray-800 hover:bg-gray-600 transition duration-300 rounded-lg shadow-lg",children:e.jsx("span",{className:"text-white text-2xl font-semibold",children:"CREATE"})})})]}),J&&e.jsx(t.Suspense,{fallback:e.jsx(ht,{}),children:e.jsx(Lt,{userId:Fe})})]})]}),e.jsx("input",{type:"file",ref:U,className:"hidden",onChange:Xe,accept:"image/*"})]}),Q&&e.jsxs(e.Fragment,{children:[e.jsx("audio",{preload:"auto",onCanPlayThrough:()=>{_(!0),console.log("can play first")},ref:o,onPlay:()=>{u.current&&f.current&&(u.current.pause(),f.current.pause())},onEnded:()=>{o.current.currentTime=0,o.current.play()},src:xt}),e.jsx("audio",{preload:"auto",onCanPlayThrough:()=>{_(!0),console.log("can play second")},onPlay:()=>{o.current&&f.current&&d.current&&(o.current.pause(),f.current.pause(),d.current.pause())},onEnded:()=>{u.current.currentTime=0,u.current.play()},ref:u,src:gt}),e.jsx("audio",{preload:"auto",onCanPlayThrough:()=>{_(!0),console.log("can play Third")},onPlay:()=>{u.current&&o.current&&d.current&&(u.current.pause(),o.current.pause(),d.current.pause())},onEnded:()=>{f.current.currentTime=0,f.current.play()},ref:f,src:jt}),e.jsx("audio",{preload:"auto",onCanPlayThrough:()=>{_(!0),console.log("can play fourth")},onPlay:()=>{u.current&&o.current&&f&&(u.current.pause(),o.current.pause(),f.current.pause())},onEnded:()=>{d.current.currentTime=0,d.current.play()},ref:d,src:wt}),B&&e.jsx(Bt,{message:$e})]})]})})};export{Qt as default};
