/*! For license information please see src_bootstrap_app_tsx.ee2a8e79.chunk.js.LICENSE.txt */
(globalThis.webpackChunknotification_admin=globalThis.webpackChunknotification_admin||[]).push([["src_bootstrap_app_tsx"],{45597:(e,t,n)=>{"use strict";Object.defineProperty(t,"X$",{value:!0}),Object.defineProperty(t,"jY",{enumerable:!0,get:function(){return a.default}}),t.h0=void 0,Object.defineProperty(t,"ng",{enumerable:!0,get:function(){return o.default}});var i=r(n(70854)),a=r(n(69363)),o=r(n(83272));function r(e){return e&&e.__esModule?e:{default:e}}const s=[i.default];t.h0=s},5950:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Page:()=>ce,__esModule:()=>re.X$,logo:()=>re.jY,panels:()=>re.h0,readme:()=>re.ng});var i=n(55754),a=n(68275),o=n(45055),r=n(71256),s=n(32671),c=n(92950),l=n(69716),d=n(4550),u=n.n(d),p=n(19289),f=n(21995),h=n.n(f);const y={appId:"notification_admin",url:"https://descartesnetwork.github.io/notification-admin/index.js"},x={development:{...y},production:{...y}},j={devnet:{node:"https://api.devnet.solana.com"},testnet:{node:"https://api.testnet.solana.com"},mainnet:{node:"https://api.mainnet-beta.solana.com"}},g=e=>({origin:e,notification:{index:e+"/notification",get SSE(){return this.index+"/sse"}},userNotification:{index:e+"/user-notification"}}),m={development:{...g("https://api.sentre.io")},production:{...g("https://api.sentre.io")}},w={development:{admins:[new r.PublicKey("8W6QginLcAydYyMYjxuyKQN56NzeakDE3aRFrAmocS6D"),new r.PublicKey("2Mdbxjidw1oHPwkSsFqfaFcYHjLUrNdkVt98Xc1K5dac"),new r.PublicKey("2ZBJ4zJ6vyqAeL4HaggYa28VVUsPas4kmXaRJhsJch37"),new r.PublicKey("FProxTjZgWD4Exu1oYNQbJGuixVzEC1n5szu1xdWxVa2")]},production:{admins:[new r.PublicKey("8W6QginLcAydYyMYjxuyKQN56NzeakDE3aRFrAmocS6D"),new r.PublicKey("2Mdbxjidw1oHPwkSsFqfaFcYHjLUrNdkVt98Xc1K5dac"),new r.PublicKey("2ZBJ4zJ6vyqAeL4HaggYa28VVUsPas4kmXaRJhsJch37"),new r.PublicKey("FProxTjZgWD4Exu1oYNQbJGuixVzEC1n5szu1xdWxVa2")]}},b={manifest:x[a.env],sol:j[a.net],api:m[a.env],admin:w[a.env]},{api:C}=b,v="notifications",S=(0,p.createAsyncThunk)(`${v}/getNotifications`,(async e=>{let{limit:t,offset:n}=e;const{data:i}=await h().get(C.notification.index,{params:{limit:t,offset:n},withCredentials:!0}),a={};for(const o of i)a[o._id]=o;return a})),T=(0,p.createAsyncThunk)(`${v}/addNotification`,(async(e,t)=>{let{id:n,notification:i}=e,{getState:a}=t;if(!i||!n)throw new Error("Notification is invalid!");return{[n]:i}})),O=(0,p.createAsyncThunk)(`${v}/createNotification`,(async(e,t)=>{let{getState:n}=t;const{data:i,status:a}=await h().post(C.notification.index,{...e,type:"sentre"},{withCredentials:!0});if(201!==a)throw Error("Fail in creating notification");return{[i._id]:i}})),k=(0,p.createAsyncThunk)(`${v}/upsetNotification`,(async e=>{if(!e._id)throw new Error("Not found notification Id");const{data:t,status:n}=await h().patch(C.notification.index,e,{withCredentials:!0});if(200!==n)throw Error("Fail in creating notification");return{[t._id]:t}})),P=(0,p.createAsyncThunk)(`${v}/deleteNotification`,(async(e,t)=>{let{notificationId:n}=e,{getState:i}=t;const{notifications:a}=i(),{status:o}=await h().delete(C.notification.index+`/${n}`,{withCredentials:!0});if(200!==o)throw Error("Failed in creating notification");const r={...a};return delete r[n],r})),N=(0,p.createSlice)({name:v,initialState:{},reducers:{},extraReducers:e=>{e.addCase(S.fulfilled,((e,t)=>{let{payload:n}=t;return n})).addCase(T.fulfilled,((e,t)=>{let{payload:n}=t;Object.assign(e,n)})).addCase(k.fulfilled,((e,t)=>{let{payload:n}=t;Object.assign(e,n)})).addCase(O.fulfilled,((e,t)=>{let{payload:n}=t;Object.assign(e,n)})).addCase(P.fulfilled,((e,t)=>{let{payload:n}=t;return n}))}}).reducer;var _=n(45263);const A=e=>{let{onCancel:t,data:n}=e;const o=(0,a.useWalletAddress)(),[r,l]=(0,c.useState)((null===n||void 0===n?void 0:n.title)||""),[d,p]=(0,c.useState)((null===n||void 0===n?void 0:n.content)||""),[f,h]=(0,c.useState)(u()(new Date).format()||""),[y,x]=(0,c.useState)((null===n||void 0===n?void 0:n.action)||""),{onCreateNotification:j,loading:g}=(()=>{const[e,t]=(0,c.useState)(!1),n=(0,i.useDispatch)();return{onCreateNotification:(0,c.useCallback)((async e=>{try{t(!0),await n(O(e)),window.notify({type:"success",description:"Create notification"})}catch(i){window.notify({type:"error",description:`${i}`})}finally{t(!1)}}),[n]),loading:e}})(),{onUpdateNotification:m,loading:w}=(()=>{const[e,t]=(0,c.useState)(!1),n=(0,i.useDispatch)();return{onUpdateNotification:(0,c.useCallback)((async e=>{try{t(!0),await n(k(e)),window.notify({type:"success",description:"Update notification"})}catch(i){window.notify({type:"error",description:`${i}`})}finally{t(!1)}}),[n]),loading:e}})();return(0,_.jsxs)(s.Row,{gutter:[16,16],children:[(0,_.jsx)(s.Col,{span:24,children:(0,_.jsxs)(s.Space,{style:{width:"100%"},size:8,direction:"vertical",children:[(0,_.jsx)(s.Typography.Text,{type:"secondary",children:"Title"}),(0,_.jsx)(s.Input,{placeholder:"Input title",value:r,onChange:e=>l(e.target.value)})]})}),(0,_.jsx)(s.Col,{span:24,children:(0,_.jsxs)(s.Space,{style:{width:"100%"},size:8,direction:"vertical",children:[(0,_.jsx)(s.Typography.Text,{type:"secondary",children:"Description"}),(0,_.jsx)(s.Input.TextArea,{placeholder:"Input description",value:d,onChange:e=>p(e.target.value),rows:3})]})}),(0,_.jsx)(s.Col,{span:24,children:(0,_.jsxs)(s.Space,{style:{width:"100%"},size:8,direction:"vertical",children:[(0,_.jsx)(s.Typography.Text,{type:"secondary",children:"Send time"}),(0,_.jsx)(s.DatePicker,{placeholder:"Select time",onChange:e=>{e&&h(u()(e).format())},value:u()(f),showNow:!0,showTime:!0,style:{width:"100%"}})]})}),(0,_.jsx)(s.Col,{span:24,children:(0,_.jsxs)(s.Space,{style:{width:"100%"},size:8,direction:"vertical",children:[(0,_.jsx)(s.Typography.Text,{type:"secondary",children:"Action"}),(0,_.jsx)(s.Input,{placeholder:"Redirect to",value:y,onChange:e=>x(e.target.value)})]})}),(0,_.jsx)(s.Col,{span:24,style:{marginTop:16},children:(0,_.jsxs)(s.Row,{justify:"end",gutter:[8,8],children:[(0,_.jsx)(s.Col,{children:(0,_.jsx)(s.Button,{onClick:t,children:"Cancel"})}),(0,_.jsx)(s.Col,{children:(0,_.jsx)(s.Button,{onClick:async()=>{n?await m({...n,sender:o,title:r,content:d,action:y,broadcastedAt:f}):await j({sender:o,title:r,content:d,action:y,broadcastedAt:f}),t()},loading:n?w:g,children:"Submit"})})]})})]})},E=e=>{let{open:t,setOpen:n,data:i,title:a}=e;return(0,_.jsx)(s.Modal,{open:t,closable:!0,title:(0,_.jsx)(s.Typography.Title,{level:4,children:a}),onCancel:()=>n(!1),destroyOnClose:!0,footer:null,children:(0,_.jsx)(A,{onCancel:()=>n(!1),data:i})})},I=()=>{const[e,t]=(0,c.useState)(!1);return(0,_.jsxs)(s.Row,{justify:"end",children:[(0,_.jsx)(s.Col,{children:(0,_.jsxs)(s.Button,{type:"primary",onClick:()=>t(!0),children:[(0,_.jsx)(l.Z,{name:"add-outline"}),"Create notification"]})}),(0,_.jsx)(E,{open:e,setOpen:t,title:"Create Notification"})]})},R=()=>(0,i.useSelector)((e=>e.notifications)),D=e=>{let{notificationId:t}=e;const{[t]:n}=R(),[i,a]=(0,c.useState)(!1);return(0,_.jsxs)(s.Row,{gutter:[8,8],wrap:!1,children:[(0,_.jsxs)(s.Col,{children:[(0,_.jsx)(s.Button,{onClick:()=>a(!0),children:(0,_.jsx)(l.Z,{name:"create-outline"})}),(0,_.jsx)(E,{open:i,setOpen:a,data:n,title:"Update Notification"})]}),(0,_.jsx)(s.Col,{children:(0,_.jsx)(s.Tooltip,{title:"Delete currently is disabled!",children:(0,_.jsx)(s.Button,{disabled:!0,children:(0,_.jsx)(l.Z,{name:"trash-outline"})})})})]})},Y=e=>{const t=[];for(const n in e){const i=e[n];t.push({key:i._id,time:i.broadcastedAt,title:i.title,description:i.content})}return t},z=[{title:"TIME",dataIndex:"time",render:e=>u()(e).format("MMMM Do YYYY, h:mm")},{title:"TITLE",dataIndex:"title",render:e=>(0,_.jsx)(s.Typography.Title,{ellipsis:!0,level:5,children:e}),ellipsis:!0},{title:"DESCRIPTION",dataIndex:"description",render:e=>(0,_.jsx)(s.Typography.Text,{type:"secondary",ellipsis:!0,children:e}),ellipsis:!0},{title:"STATUS",dataIndex:"time",render:e=>new Date(e).getTime()>Date.now()?(0,_.jsx)(s.Tag,{color:"gold",children:"Pending"}):(0,_.jsx)(s.Tag,{color:"green",children:"Sent"})},{title:"ACTION",dataIndex:"key",render:e=>(0,_.jsx)(D,{notificationId:e})}],F=()=>{const e=R();return(0,_.jsx)(s.Table,{columns:z,dataSource:Y(e)})},K=()=>{const[e,t]=(0,c.useState)("");return(0,_.jsxs)(s.Row,{gutter:[8,8],children:[(0,_.jsx)(s.Col,{flex:"auto",children:(0,_.jsx)(s.Input,{placeholder:"Search",value:"",prefix:e?(0,_.jsx)(s.Button,{type:"text",style:{width:"auto",height:"auto",background:"transparent",marginLeft:-7},onClick:()=>{},icon:(0,_.jsx)(l.Z,{name:"close-outline"})}):(0,_.jsx)(l.Z,{style:{fontSize:24,marginLeft:-5},name:"search-outline"}),onChange:e=>{t(e.target.value)},style:{borderRadius:8,height:40}})}),(0,_.jsx)(s.Col,{children:(0,_.jsx)(s.Select,{value:"",onChange:e=>{},style:{width:109,borderRadius:8,height:40}})})]})},M=()=>(0,_.jsxs)(s.Row,{gutter:[24,24],children:[(0,_.jsx)(s.Col,{children:(0,_.jsx)(s.Typography.Title,{level:1,children:"Notifications"})}),(0,_.jsx)(s.Col,{span:24,children:(0,_.jsxs)(s.Row,{children:[(0,_.jsx)(s.Col,{span:8,children:(0,_.jsx)(K,{})}),(0,_.jsx)(s.Col,{flex:"auto",children:(0,_.jsx)(I,{})})]})}),(0,_.jsx)(s.Col,{span:24,children:(0,_.jsx)(F,{})})]}),B=()=>(0,_.jsxs)(s.Row,{gutter:[24,24],children:[(0,_.jsx)(s.Col,{span:24,style:{height:32}}),(0,_.jsx)(s.Col,{span:24,style:{textAlign:"center"},children:(0,_.jsx)(s.Space,{direction:"vertical",children:(0,_.jsx)(s.Typography.Title,{level:2,style:{color:"#fafafa"},children:"\u26a0\ufe0f Only used by Sentre's administrators."})})})]}),J="pagination",L={offset:0,limit:10},$=(0,p.createAsyncThunk)("pagination/upsetNotification",(async(e,t)=>{let{getState:n}=t;const{pagination:i}=n();return{...i,...e}})),U=(0,p.createSlice)({name:J,initialState:L,reducers:{},extraReducers:e=>{e.addCase($.fulfilled,((e,t)=>{let{payload:n}=t;return n}))}}).reducer,{api:V}=b,W=new EventSource(V.notification.SSE),Z=()=>{const e=(0,i.useDispatch)(),t=(0,c.useCallback)((async()=>{try{await e(S({offset:0,limit:1e3})),await e($({offset:10,limit:20}))}catch(t){return window.notify({type:"error",description:"Cannot fetch notifications"})}}),[e]),n=(0,c.useCallback)((async()=>{W.onmessage=async t=>{let{data:n}=t;const i=JSON.parse(n);await e(T({id:i._id,notification:i}))}}),[e]);return(0,c.useEffect)((()=>{t(),n()}),[t,n]),(0,_.jsx)(c.Fragment,{})},q=()=>(0,_.jsx)(c.Fragment,{children:(0,_.jsx)(Z,{})}),{admin:{admins:H}}=b,Q=()=>{const e=(0,a.useWalletAddress)(),{extend:t}=(0,a.useAppRoute)();return H.findIndex((t=>t.equals(new r.PublicKey(e))))<0?(0,_.jsx)(B,{}):(0,_.jsxs)(s.Row,{gutter:[24,24],align:"middle",children:[(0,_.jsx)(s.Col,{span:24,children:(0,_.jsxs)(o.Switch,{children:[(0,_.jsx)(o.Route,{path:t("/notification"),component:M}),(0,_.jsx)(o.Redirect,{from:"*",to:t("/notification",{absolutePath:!0})})]})}),(0,_.jsx)(q,{})]})};var X=n(48744),G=n.n(X),ee=n(97429).Buffer;BigInt.prototype.toJSON=function(){return this.toString()};const te={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof r.PublicKey||e instanceof G()||ee.isBuffer(e)}},ne="main",ie=(0,p.createAsyncThunk)("main/increaseCounter",(async(e,t)=>{let{getState:n}=t;const{main:{counter:i}}=n();return{counter:i+1}})),ae=(0,p.createSlice)({name:ne,initialState:{counter:0},reducers:{},extraReducers:e=>{e.addCase(ie.fulfilled,((e,t)=>{let{payload:n}=t;Object.assign(e,n)}))}}).reducer,oe=(0,p.configureStore)({middleware:e=>e(te),devTools:!1,reducer:{main:ae,notifications:N,pagination:U}});var re=n(45597);const{manifest:{appId:se}}=b,ce=()=>(0,_.jsx)(a.AntdProvider,{appId:se,children:(0,_.jsx)(i.Provider,{store:oe,children:(0,_.jsx)(Q,{})})})},25882:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var r,s,c=a(e),l=1;l<arguments.length;l++){for(var d in r=Object(arguments[l]))n.call(r,d)&&(c[d]=r[d]);if(t){s=t(r);for(var u=0;u<s.length;u++)i.call(r,s[u])&&(c[s[u]]=r[s[u]])}}return c}},62175:(e,t,n)=>{"use strict";n(25882);var i=n(92950),a=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),o("react.fragment")}var r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,o={},l=null,d=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,i)&&!c.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:a,type:e,key:l,ref:d,props:o,_owner:r.current}}t.jsx=l,t.jsxs=l},45263:(e,t,n)=>{"use strict";e.exports=n(62175)},83272:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/README.ff93448fef94ea73029b.md"},69363:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/logo.da175f6d5d1564b6bc58.png"},70854:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/panel.6ce7bc345912340df001.png"},7420:()=>{},95856:()=>{},46601:()=>{}}]);
//# sourceMappingURL=src_bootstrap_app_tsx.ee2a8e79.chunk.js.map