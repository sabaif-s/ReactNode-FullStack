const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/intro-BgWoMscI.js","assets/index-C8S-MUEO.js","assets/index-BotbsFDi.css","assets/samiBerhane-AHUqpuWn.js","assets/backDeskImage-szvr8Scl.js"])))=>i.map(i=>d[i]);
import{r as a,_ as r,j as e,L as t}from"./index-C8S-MUEO.js";const d=a.lazy(()=>r(()=>import("./intro-BgWoMscI.js"),__vite__mapDeps([0,1,2,3,4])));function i(){const[o,n]=a.useState(!1);function s(){n(!0)}return a.useEffect(()=>{console.log("App Started"),console.log("App Loaded")},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:`${o?"animate-fadeIn":""} w-full`,children:o?e.jsx(d,{loaded:o,onLoad:s,LoadingImages:t},2):e.jsx(a.Suspense,{fallback:e.jsx(t,{reRender:!1},1),children:e.jsx(d,{onLoad:s,loaded:o},1)})})})}export{i as default};
