function t(){}function e(tn){return tn()}function n(){return Object.create(null)}function c(tn){tn.forEach(e)}function r(tn){return"function"==typeof tn}function o(tn,tr){return tn!=tn?tr==tr:tn!==tr||tn&&"object"==typeof tn||"function"==typeof tn}function s(tn,...tr){if(null==tn)return t;let tl=tn.subscribe(...tr);return tl.unsubscribe?()=>tl.unsubscribe():tl}function i(tn){let tr;return s(tn,tn=>tr=tn)(),tr}function l(tn,tr,tl){tn.$$.on_destroy.push(s(tr,tl))}function a(tn,tr,tl=tr){return tn.set(tl),tr}function u(tn,tr){tn.appendChild(tr)}function d(tn,tr,tl){tn.insertBefore(tr,tl||null)}function f(tn){tn.parentNode.removeChild(tn)}function p(tn,tr){for(let tl=0;tl<tn.length;tl+=1)tn[tl]&&tn[tl].d(tr)}function m(tn){return document.createElement(tn)}function h(tn){return document.createTextNode(tn)}function v(){return h(" ")}function g(tn,tr,tl,tc){return tn.addEventListener(tr,tl,tc),()=>tn.removeEventListener(tr,tl,tc)}function y(tn,tr,tl){null==tl?tn.removeAttribute(tr):tn.getAttribute(tr)!==tl&&tn.setAttribute(tr,tl)}function $(tn,tr){tr=""+tr,tn.wholeText!==tr&&(tn.data=tr)}function b(tn,tr,tl){tn.classList[tl?"add":"remove"](tr)}let w;function x(tn){w=tn}function E(){if(!w)throw Error("Function called outside component initialization");return w}function C(tn){E().$$.on_mount.push(tn)}function A(){let tn=E();return(tr,tl)=>{let tc=tn.$$.callbacks[tr];if(tc){let ts=function(tn,tr){let tl=document.createEvent("CustomEvent");return tl.initCustomEvent(tn,!1,!1,tr),tl}(tr,tl);tc.slice().forEach(tr=>{tr.call(tn,ts)})}}}const k=[],N=[],S=[],T=[],j=Promise.resolve();let L=!1;function _(tn){S.push(tn)}let O=!1;const M=new Set;function q(){if(!O){O=!0;do{for(let tn=0;tn<k.length;tn+=1){let tr=k[tn];x(tr),D(tr.$$)}for(x(null),k.length=0;N.length;)N.pop()();for(let tl=0;tl<S.length;tl+=1){let tc=S[tl];M.has(tc)||(M.add(tc),tc())}S.length=0}while(k.length);for(;T.length;)T.pop()();L=!1,O=!1,M.clear()}}function D(tn){if(null!==tn.fragment){tn.update(),c(tn.before_update);let tr=tn.dirty;tn.dirty=[-1],tn.fragment&&tn.fragment.p(tn.ctx,tr),tn.after_update.forEach(_)}}const F=new Set;let P;function H(tn,tr){tn&&tn.i&&(F.delete(tn),tn.i(tr))}function B(tn,tr,tl,tc){tn&&tn.o&&!F.has(tn)&&(F.add(tn),P.c.push(()=>{F.delete(tn),tc&&(tl&&tn.d(1),tc())}),tn.o(tr))}function R(tn){tn&&tn.c()}function U(tn,tr,tl,tc){let{fragment:ts,on_mount:to,on_destroy:ti,after_update:ta}=tn.$$;ts&&ts.m(tr,tl),tc||_(()=>{let tr=to.map(e).filter(r);ti?ti.push(...tr):c(tr),tn.$$.on_mount=[]}),ta.forEach(_)}function z(tn,tr){let tl=tn.$$;null!==tl.fragment&&(c(tl.on_destroy),tl.fragment&&tl.fragment.d(tr),tl.on_destroy=tl.fragment=null,tl.ctx=[])}function I(tn,tr){-1===tn.$$.dirty[0]&&(k.push(tn),L||(L=!0,j.then(q)),tn.$$.dirty.fill(0)),tn.$$.dirty[tr/31|0]|=1<<tr%31}function V(tn,tr,tl,tc,ts,to,ti=[-1]){let ta=w;x(tn);let tu=tn.$$={fragment:null,ctx:null,props:to,update:t,not_equal:ts,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(ta?ta.$$.context:tr.context||[]),callbacks:n(),dirty:ti,skip_bound:!1},td=!1;if(tu.ctx=tl?tl(tn,tr.props||{},(tr,tl,...tc)=>{let to=tc.length?tc[0]:tl;return tu.ctx&&ts(tu.ctx[tr],tu.ctx[tr]=to)&&(!tu.skip_bound&&tu.bound[tr]&&tu.bound[tr](to),td&&I(tn,tr)),tl}):[],tu.update(),td=!0,c(tu.before_update),tu.fragment=!!tc&&tc(tu.ctx),tr.target){if(tr.hydrate){var tf;let tp=Array.from((tf=tr.target).childNodes);tu.fragment&&tu.fragment.l(tp),tp.forEach(f)}else tu.fragment&&tu.fragment.c();tr.intro&&H(tn.$$.fragment),U(tn,tr.target,tr.anchor,tr.customElement),q()}x(ta)}class W{$destroy(){z(this,1),this.$destroy=t}$on(tn,tr){let tl=this.$$.callbacks[tn]||(this.$$.callbacks[tn]=[]);return tl.push(tr),()=>{let tn=tl.indexOf(tr);-1!==tn&&tl.splice(tn,1)}}$set(tn){var tr;this.$$set&&0!==Object.keys(tr=tn).length&&(this.$$.skip_bound=!0,this.$$set(tn),this.$$.skip_bound=!1)}}const J=[];function G(tn,tr=t){let tl,tc=[];function ts(tr){if(o(tn,tr)&&(tn=tr,tl)){let ts=!J.length;for(let to=0;to<tc.length;to+=1){let ti=tc[to];ti[1](),J.push(ti,tn)}if(ts){for(let ta=0;ta<J.length;ta+=2)J[ta][0](J[ta+1]);J.length=0}}}return{set:ts,update:function(tr){ts(tr(tn))},subscribe:function(to,ti=t){let ta=[to,ti];return tc.push(ta),1===tc.length&&(tl=tr(ts)||t),to(tn),()=>{let tn=tc.indexOf(ta);-1!==tn&&tc.splice(tn,1),0===tc.length&&(tl(),tl=null)}}}}function K({type:tn,label:tr,value:tl}){window.cronitor&&window.cronitor("track",[tn,tr,tl].filter(Boolean).join("."))}const Q=window.requestAnimationFrame,X=window.setTimeout,{body:Y}=document,{location:Z}=window,{hostname:tt}=Z,et=tn=>new Promise(tr=>X(tr,tn)),nt=0,ct=1,rt=2;let ot=null;const st=document.querySelector(".js-tv"),it=st.querySelector(".js-screen"),lt=it.querySelector(".js-content"),at=G(!0),ut=G(.25),dt=G(0),ft=G(0),pt=G(0),mt={0:{},1:{type:"video",duration:null,startTimestamp:null},2:{type:"video",duration:null,startTimestamp:null},3:{type:"video",duration:null,startTimestamp:null},4:{type:"video",duration:null,startTimestamp:null},5:{type:"video",duration:null,startTimestamp:null},6:{type:"video",duration:null,startTimestamp:null},7:{type:"video",duration:null,startTimestamp:null},8:{type:"video",duration:null,startTimestamp:null},9:{type:"webcam",displayName:"AV1"}},ht=Object.keys(mt),vt=function(tn,tr,tl){let tc=!Array.isArray(tn),ts=tc?[tn]:tn,to=tr.length<2;return{subscribe:G(void 0,tn=>{let tl=!1,ti=[],ta=0,tu=t,td=()=>{if(ta)return;tu();let tl=tr(tc?ti[0]:ti,tn);to?tn(tl):tu=r(tl)?tl:t},tf=ts.map((tn,tr)=>s(tn,tn=>{ti[tr]=tn,ta&=~(1<<tr),tl&&td()},()=>{ta|=1<<tr}));return tl=!0,td(),function(){c(tf),tu()}}).subscribe}}([dt],([tn])=>({displayName:tn.toString().padStart(2,"0"),number:tn,type:"unknown",...mt[tn]})),gt=(tn,tr)=>{mt[tn]={...mt[tn],...tr}},yt=()=>{dt.update(tn=>{let tr=tn+1;return tr>=ht.length?0:tr})},$t=tn=>{dt.set(tn)},bt=()=>{dt.update(tn=>{let tr=tn-1;return tr<0?ht.length-1:tr})};function wt(){let tn=i(ut)-.06666666666666667;tn<0||ut.set(tn)}function xt(){let tn=i(ut)+.06666666666666667;tn>1||ut.set(tn)}function Et(){let tn=i(ut);0===tn?ut.set(ot):(ot=tn,ut.set(0))}const Ct=()=>{at.update(tn=>!tn)};function At(){st.addEventListener("animationend",tn=>{Q(()=>"go-to-space"===tn.animationName?Y.setAttribute("space","floating"):"exit-space"===tn.animationName?Y.removeAttribute("space"):void 0)},{once:!0}),Q(()=>{let tn="floating"===Y.getAttribute("space")?"exiting":"entering";Y.setAttribute("space",tn),"entering"===tn&&K({type:"easter_egg",label:"space"})})}function kt(){document.querySelectorAll(".js-channel-trigger").forEach(tn=>{tn._channelButton||(tn._channelButton=!0,tn.addEventListener("click",tn=>{tn.preventDefault(),tn.target.blur();let tr=Number(tn.target.dataset.channel);Number.isNaN(tr)||dt.update(tn=>tr===tn?0:tr)}))})}function Nt(tn,tr,tl){let tc=tn.slice();return tc[6]=tr[tl],tc[8]=tl,tc}function St(tn){let tr,tl,tc,ts={length:15},to=[];for(let ti=0;ti<ts.length;ti+=1)to[ti]=Tt(Nt(tn,ts,ti));return{c(){tr=m("div"),tl=h("VOLUME\n    "),tc=m("div");for(let tn=0;tn<to.length;tn+=1)to[tn].c();y(tc,"class","track svelte-1cukcpa"),y(tr,"class","volume glitchy-text svelte-1cukcpa")},m(tn,ts){d(tn,tr,ts),u(tr,tl),u(tr,tc);for(let ti=0;ti<to.length;ti+=1)to[ti].m(tc,null)},p(tn,tr){if(2&tr){let tl;for(ts={length:15},tl=0;tl<ts.length;tl+=1){let ti=Nt(tn,ts,tl);to[tl]?to[tl].p(ti,tr):(to[tl]=Tt(ti),to[tl].c(),to[tl].m(tc,null))}for(;tl<to.length;tl+=1)to[tl].d(1);to.length=ts.length}},d(tn){tn&&f(tr),p(to,tn)}}}function Tt(tn){let tr,tl,tc=tn[8]<=tn[1]?"|":"-";return{c(){tr=m("div"),tl=h(tc),y(tr,"class","step")},m(tn,tc){d(tn,tr,tc),u(tr,tl)},p(tn,tr){2&tr&&tc!==(tc=tn[8]<=tn[1]?"|":"-")&&$(tl,tc)},d(tn){tn&&f(tr)}}}function jt(tn){let tr,tl=!tn[0]&&St(tn);return{c(){tl&&tl.c(),tr=h("")},m(tn,tc){tl&&tl.m(tn,tc),d(tn,tr,tc)},p(tn,[tc]){tn[0]?tl&&(tl.d(1),tl=null):tl?tl.p(tn,tc):((tl=St(tn)).c(),tl.m(tr.parentNode,tr))},i:t,o:t,d(tn){tl&&tl.d(tn),tn&&f(tr)}}}function Lt(tn,tr,tl){let tc,ts;l(tn,ut,tn=>tl(2,ts=tn));let to=!0,ti=null,ta=!0;return tn.$$.update=()=>{4&tn.$$.dirty&&tl(1,tc=Math.floor(15*ts)),4&tn.$$.dirty&&function(){if(ta)return ta=!1;tl(0,to=!1),clearTimeout(ti),ti=X(()=>tl(0,to=!0),2e3)}()},[to,tc,ts]}window.addEventListener("visibilitychange",()=>{"hidden"===document.visibilityState&&localStorage.setItem("timestamps",JSON.stringify(Object.entries(mt).map(([tn,tr])=>[tn,tr.startTimestamp])))},!1),window.addEventListener("contentChange",kt),function(){let tn=JSON.parse(localStorage.getItem("timestamps"));null!=tn&&tn.forEach(([tn,tr])=>{mt[tn].startTimestamp=tr})}(),kt();class _t extends W{constructor(tn){super(),V(this,tn,Lt,jt,o,{})}}function Ot(tn){let tr,tl,tc,ts,to,ti,ta,tu;return{c(){tr=m("div"),tl=m("video"),tc=v(),ts=m("div"),(to=m("div")).innerHTML='REC <span class="svelte-60jbj3"></span>',ti=v(),ta=m("div"),tu=h(tn[2]),y(tl,"class","tv-video svelte-60jbj3"),y(tl,"channel","camera"),tl.autoplay=!0,y(to,"class","rec svelte-60jbj3"),y(ta,"class","counter"),y(ts,"class","rec-wrapper big-text glitchy-text svelte-60jbj3"),b(tr,"visually-hidden",!tn[0]||1===tn[3])},m(td,tf){d(td,tr,tf),u(tr,tl),tn[5](tl),u(tr,tc),u(tr,ts),u(ts,to),u(ts,ti),u(ts,ta),u(ta,tu)},p(tn,[tl]){4&tl&&$(tu,tn[2]),9&tl&&b(tr,"visually-hidden",!tn[0]||1===tn[3])},i:t,o:t,d(tl){tl&&f(tr),tn[5](null)}}}function Mt(tn){return tn<10?`0${tn}`:tn}function qt(tn,tr,tl){let tc;l(tn,ft,tn=>tl(3,tc=tn));let ts=A(),to,ti,ta,tu,td,tf,tp=!1;async function tm(){null!=(to=await window.navigator.mediaDevices.getUserMedia({video:{width:{exact:256},height:{exact:144}}}).catch(()=>null))&&null!=ti&&(tl(1,ti.srcObject=to,ti),ti.addEventListener("playing",()=>{ts("ready",!0),tl(0,tp=!0),tf=Q(function tn(tr){null==ta&&(ta=tr),tl(4,tu=tr-ta),tf=Q(tn)}),Y.setAttribute("camera","")},{once:!0}))}return C(()=>(tm(),()=>{Y.removeAttribute("camera"),cancelAnimationFrame(tf),to&&to.getTracks().forEach(tn=>tn.stop())})),tn.$$.update=()=>{if(16&tn.$$.dirty){let tr=parseInt(tu%1e3/100),tc=Mt(Math.floor(tu/1e3%60)),ts=Mt(Math.floor(tu/6e4%60)),to=Mt(Math.floor(tu/36e5%24));tl(2,td=`${to}:${ts}:${tc}.${tr}`)}},[tp,ti,td,tc,tu,function(tn){N[tn?"unshift":"push"](()=>{tl(1,ti=tn)})}]}class Dt extends W{constructor(tn){super(),V(this,tn,qt,Ot,o,{})}}function Ft(tn){let tr,tl,tc,ts,to,ti,ta,tu;return{c(){tr=m("video"),tl=m("source"),ts=m("source"),tl.src!==(tc="/assets/videos/channel-"+tn[4].displayName+".webm")&&y(tl,"src",tc),y(tl,"type","video/webm"),ts.src!==(to="/assets/videos/channel-"+tn[4].displayName+".mp4")&&y(ts,"src",to),y(ts,"type","video/mp4"),y(tr,"class","tv-video"),y(tr,"channel",ti=tn[4].number),tr.playsInline=!0,tr.loop=!0,void 0===tn[2]&&_(()=>tn[10].call(tr)),b(tr,"visually-hidden",!tn[1]||1===tn[3])},m(tc,to){d(tc,tr,to),u(tr,tl),u(tr,ts),tn[8](tr),isNaN(tn[5])||(tr.volume=tn[5]),ta||(tu=[g(tr,"volumechange",tn[9]),g(tr,"durationchange",tn[10]),g(tr,"canplay",tn[6])],ta=!0)},p(tn,[ta]){16&ta&&tl.src!==(tc="/assets/videos/channel-"+tn[4].displayName+".webm")&&y(tl,"src",tc),16&ta&&ts.src!==(to="/assets/videos/channel-"+tn[4].displayName+".mp4")&&y(ts,"src",to),16&ta&&ti!==(ti=tn[4].number)&&y(tr,"channel",ti),32&ta&&!isNaN(tn[5])&&(tr.volume=tn[5]),10&ta&&b(tr,"visually-hidden",!tn[1]||1===tn[3])},i:t,o:t,d(tl){tl&&f(tr),tn[8](null),ta=!1,c(tu)}}}function Pt(tn,tr,tl){let tc,ts,to,ti;l(tn,ft,tn=>tl(3,tc=tn)),l(tn,vt,tn=>tl(4,ts=tn)),l(tn,dt,tn=>tl(7,to=tn)),l(tn,ut,tn=>tl(5,ti=tn));let ta=A(),tu,td,tf=!1;return tn.$$.update=()=>{129&tn.$$.dirty&&tu&&(tl(1,tf=!1),tu.load()),10&tn.$$.dirty&&tu&&(tf&&2===tc?tu.play():tu.pause()),4&tn.$$.dirty&&td&&function(){let{number:tn,startTimestamp:tr}=ts,tc=Date.now()/1e3;if(null!=tr){let to,ti=tc-tr;ti<td?to=ti:gt(tn,{startTimestamp:tc-(to=ti%td)}),tl(0,tu.currentTime=to,tu)}else gt(tn,{startTimestamp:tc})}()},[tu,tf,td,tc,ts,ti,function(){tu.readyState<2||(ta("ready",!0),tl(1,tf=!0))},to,function(tn){N[tn?"unshift":"push"](()=>{tl(0,tu=tn)})},function(){ti=this.volume,ut.set(ti)},function(){tl(2,td=this.duration)}]}class Ht extends W{constructor(tn){super(),V(this,tn,Pt,Ft,o,{})}}let Bt=null;function Rt(){null==Bt&&(Bt=function(){if(window.AudioContext)try{let tn=new window.AudioContext,tr=tn.sampleRate/3,tl=tn.createBuffer(1,tr,tn.sampleRate),tc=tn.createGain();tc.gain.setValueAtTime(.008,tn.currentTime),tc.connect(tn.destination);for(let ts=0,to=tl.getChannelData(0);ts<tr;ts++)to[ts]=2*Math.random()-1;let ti=tn.createBufferSource();return ti.buffer=tl,ti.connect(tc),ti.loop=!0,ti.start(0),ti.onended=()=>{ti.disconnect(),tc.disconnect(),tn.close()},ti}catch(ta){}}())}function Ut(tn){let tr,tl;return(tr=new Ht({})).$on("ready",tn[1]),{c(){R(tr.$$.fragment)},m(tn,tc){U(tr,tn,tc),tl=!0},p:t,i(tn){tl||(H(tr.$$.fragment,tn),tl=!0)},o(tn){B(tr.$$.fragment,tn),tl=!1},d(tn){z(tr,tn)}}}function zt(tn){let tr,tl;return(tr=new Dt({})).$on("ready",tn[1]),{c(){R(tr.$$.fragment)},m(tn,tc){U(tr,tn,tc),tl=!0},p:t,i(tn){tl||(H(tr.$$.fragment,tn),tl=!0)},o(tn){B(tr.$$.fragment,tn),tl=!1},d(tn){z(tr,tn)}}}function It(tn){let tr,tl,tc,ts,to,ti,ta=[zt,Ut],tu=[];function td(tn,tr){return"webcam"===tn[0].type?0:"video"===tn[0].type?1:-1}return~(tl=td(tn))&&(tc=tu[tl]=ta[tl](tn)),to=new _t({}),{c(){tr=m("div"),tc&&tc.c(),ts=v(),R(to.$$.fragment),y(tr,"class","tv-videos svelte-18atvsb")},m(tn,tc){d(tn,tr,tc),~tl&&tu[tl].m(tr,null),d(tn,ts,tc),U(to,tn,tc),ti=!0},p(tn,[ts]){let to=tl;(tl=td(tn))===to?~tl&&tu[tl].p(tn,ts):(tc&&(P={r:0,c:[],p:P},B(tu[to],1,1,()=>{tu[to]=null}),P.r||c(P.c),P=P.p),~tl?((tc=tu[tl])?tc.p(tn,ts):(tc=tu[tl]=ta[tl](tn)).c(),H(tc,1),tc.m(tr,null)):tc=null)},i(tn){ti||(H(tc),H(to.$$.fragment,tn),ti=!0)},o(tn){B(tc),B(to.$$.fragment,tn),ti=!1},d(tn){tn&&f(tr),~tl&&tu[tl].d(),tn&&f(ts),z(to,tn)}}}function Vt(tn,tr,tl){let tc,ts,to,ti,ta;l(tn,ft,tn=>tl(2,tc=tn)),l(tn,vt,tn=>tl(0,ts=tn)),l(tn,dt,tn=>tl(3,to=tn)),l(tn,at,tn=>tl(4,ti=tn)),l(tn,pt,tn=>tl(5,ta=tn));let tu,td=!1;function tf(){Y.classList.remove("loading-channel")}function tp(){Q(()=>{let tn=Date.now()-tu;tn<=400?X(()=>{a(ft,tc=2,tc)},400-tn):a(ft,tc=2,tc)})}return C(()=>{td=!0}),tn.$$.update=()=>{var tr;4&tn.$$.dirty&&(1===tc?(tf(),Y.classList.add("loading-channel"),tu=Date.now()):tf()),1&tn.$$.dirty&&(tr=ts,td&&(Q(()=>{a(ft,tc=1,tc),"unknown"==tr.type&&tp()}),K({type:"easter_egg",label:"channel_switch",value:tr.displayName}))),8&tn.$$.dirty&&Y.setAttribute("channel",`${to}`),16&tn.$$.dirty&&Y.classList.toggle("hide-content",!ti),32&tn.$$.dirty&&Y.classList.toggle("loading-page",1===ta),36&tn.$$.dirty&&(1===ta||1===tc?Rt():Bt&&(Bt.stop(),Bt=null))},[ts,tp,tc,to,ti,ta]}class Wt extends W{constructor(tn){super(),V(this,tn,Vt,It,o,{})}}function Jt(tn,tr,tl){let tc=tn.slice();return tc[3]=tr[tl],tc[5]=tl,tc}function Gt(tn){let tr,tl,tc,ts,to,ti=tn[5]+1+"";function ta(){return tn[1](tn[5])}return{c(){tr=m("div"),tl=m("button"),tc=h(ti),y(tl,"class","svelte-1vrpccc"),y(tr,"class","control number svelte-1vrpccc")},m(tn,ti){d(tn,tr,ti),u(tr,tl),u(tl,tc),ts||(to=g(tl,"click",ta),ts=!0)},p(tr,tl){tn=tr},d(tn){tn&&f(tr),ts=!1,to()}}}function Kt(tn){let tr,tl,tc,ts,to,ti,ta,tu,td,tf,tp,tm,tv,th,tg,ty,t_,t$,t9,tb,tx,tE,tC,tk,tw,tA,t4,tN,tL,tT,tS,t0,t8,tj,t1,t2,tO,tM,tq,tB,t3,tD,tF={length:9},tH=[];for(let tY=0;tY<tF.length;tY+=1)tH[tY]=Gt(Jt(tn,tF,tY));return{c(){tr=m("div"),tl=m("div"),tc=m("div"),ts=m("div"),to=m("div"),ti=m("div"),(ta=m("button")).textContent="REMOTE\n              OFF",tu=v(),(td=m("span")).textContent="SPACE OFF",tf=v(),tp=m("div"),(tm=m("button")).textContent="▲",tv=v(),th=m("div"),(tg=m("button")).textContent="▼",ty=v(),(t_=m("span")).textContent="VOLUME",t$=v(),t9=m("div"),(tb=m("button")).textContent="MUTE",tx=v(),(tE=m("span")).textContent="MUTE",tC=v(),tk=m("div"),(tw=m("button")).textContent="▲",tA=v(),t4=m("div"),(tN=m("button")).textContent="▼",tL=v(),(tT=m("span")).textContent="CHANNEL",tS=v(),t0=m("div");for(let tn=0;tn<tH.length;tn+=1)tH[tn].c();t8=v(),tj=m("div"),(t1=m("button")).textContent="0",t2=v(),tO=m("div"),(tM=m("button")).textContent="SHOW/HIDE",tq=v(),(tB=m("div")).innerHTML='<img loading="lazy" src="https://aboutnabil.pages.dev/kaisermann.me/assets/kiwivision.svg" alt="" width="103" height="10" class="svelte-1vrpccc"/> \n          <br/> \n          <span>COMPUTER SPACE COMMAND</span>',y(ta,"class","hide-text svelte-1vrpccc"),y(td,"class","svelte-1vrpccc"),y(ti,"class","control onoff svelte-1vrpccc"),y(tm,"class","svelte-1vrpccc"),y(tp,"class","control vol up svelte-1vrpccc"),y(tg,"class","svelte-1vrpccc"),y(t_,"class","svelte-1vrpccc"),y(th,"class","control vol down svelte-1vrpccc"),y(tb,"class","hide-text svelte-1vrpccc"),y(tE,"class","svelte-1vrpccc"),y(t9,"class","control mute svelte-1vrpccc"),y(tw,"class","svelte-1vrpccc"),y(tk,"class","control ch up svelte-1vrpccc"),y(tN,"class","svelte-1vrpccc"),y(tT,"class","svelte-1vrpccc"),y(t4,"class","control ch down svelte-1vrpccc"),y(t1,"class","svelte-1vrpccc"),y(tj,"class","control number svelte-1vrpccc"),y(tM,"class","showhide svelte-1vrpccc"),y(tO,"class","control showhide svelte-1vrpccc"),y(t0,"class","numbers svelte-1vrpccc"),y(to,"class","buttons svelte-1vrpccc"),y(tB,"class","brand svelte-1vrpccc"),y(ts,"class","inner svelte-1vrpccc"),y(tc,"class","remote svelte-1vrpccc"),y(tl,"class","wrapper svelte-1vrpccc"),y(tr,"class","perspective svelte-1vrpccc")},m(tF,tY){d(tF,tr,tY),u(tr,tl),u(tl,tc),u(tc,ts),u(ts,to),u(to,ti),u(ti,ta),u(ti,tu),u(ti,td),u(to,tf),u(to,tp),u(tp,tm),u(to,tv),u(to,th),u(th,tg),u(th,ty),u(th,t_),u(to,t$),u(to,t9),u(t9,tb),u(t9,tx),u(t9,tE),u(to,tC),u(to,tk),u(tk,tw),u(to,tA),u(to,t4),u(t4,tN),u(t4,tL),u(t4,tT),u(to,tS),u(to,t0);for(let tP=0;tP<tH.length;tP+=1)tH[tP].m(t0,null);u(t0,t8),u(t0,tj),u(tj,t1),u(t0,t2),u(t0,tO),u(tO,tM),u(ts,tq),u(ts,tB),t3||(tD=[g(ta,"click",tn[0]),g(tm,"click",xt),g(tg,"click",wt),g(tb,"click",Et),g(tw,"click",yt),g(tN,"click",bt),g(t1,"click",tn[2]),g(tM,"click",Ct)],t3=!0)},p(tn,[tr]){},i:t,o:t,d(tn){tn&&f(tr),p(tH,tn),t3=!1,c(tD)}}}function Qt(tn){return[()=>At(),tn=>$t(tn+1),()=>$t(0)]}class Xt extends W{constructor(tn){super(),V(this,tn,Qt,Kt,o,{})}}function Yt(tn){let tr,tl,tc,ts,to,ti,ta,tu,td,tf,tp,tm=tn[0].displayName+"";return{c(){tr=m("div"),(tl=m("button")).textContent="◄",tc=v(),ts=m("div"),to=h("CHANNEL "),ti=m("span"),ta=h(tm),tu=v(),(td=m("button")).textContent="►",y(tl,"class","previous cursor-pointer svelte-zwh9ot"),y(tl,"aria-label","previous channel"),y(ts,"class","channel"),y(td,"class","next cursor-pointer svelte-zwh9ot"),y(td,"aria-label","next channel"),y(tr,"class","channel-controller svelte-zwh9ot")},m(tn,tm){d(tn,tr,tm),u(tr,tl),u(tr,tc),u(tr,ts),u(ts,to),u(ts,ti),u(ti,ta),u(tr,tu),u(tr,td),tf||(tp=[g(tl,"click",bt),g(td,"click",yt)],tf=!0)},p(tn,[tr]){1&tr&&tm!==(tm=tn[0].displayName+"")&&$(ta,tm)},i:t,o:t,d(tn){tn&&f(tr),tf=!1,c(tp)}}}function Zt(tn,tr,tl){let tc;return l(tn,vt,tn=>tl(0,tc=tn)),[tc]}class te extends W{constructor(tn){super(),V(this,tn,Zt,Yt,o,{})}}function ee(tn){let tr,tl,tc;return{c(){(tr=m("button")).textContent="SPACE MODE",y(tr,"class","cursor-pointer svelte-6brq6f visible-button")},m(tn,ts){d(tn,tr,ts),tl||(tc=g(tr,"click",At),tl=!0)},p:t,i:t,o:t,d(tn){tn&&f(tr),tl=!1,tc()}}}class ne extends W{constructor(tn){super(),V(this,tn,null,ee,o,{})}}var ce=function(){function tn(tn,tr,tl,tc,ts){return tn<tr||tl<tr?tn>tl?tl+1:tn+1:tc===ts?tr:tr+1}return function(tr,tl){if(tr===tl)return 0;if(tr.length>tl.length){var tc=tr;tr=tl,tl=tc}for(var ts=tr.length,to=tl.length;ts>0&&tr.charCodeAt(ts-1)===tl.charCodeAt(to-1);)ts--,to--;for(var ti=0;ti<ts&&tr.charCodeAt(ti)===tl.charCodeAt(ti);)ti++;if(to-=ti,0==(ts-=ti)||to<3)return to;var ta,tu,td,tf,tp,tm,tv,th,tg,ty,t_,t$,t9=0,tb=[];for(ta=0;ta<ts;ta++)tb.push(ta+1),tb.push(tr.charCodeAt(ti+ta));for(var tx=tb.length-1;t9<to-3;)for(tg=tl.charCodeAt(ti+(tu=t9)),ty=tl.charCodeAt(ti+(td=t9+1)),t_=tl.charCodeAt(ti+(tf=t9+2)),t$=tl.charCodeAt(ti+(tp=t9+3)),tm=t9+=4,ta=0;ta<tx;ta+=2)tu=tn(tv=tb[ta],tu,td,tg,th=tb[ta+1]),td=tn(tu,td,tf,ty,th),tf=tn(td,tf,tp,t_,th),tm=tn(tf,tp,tm,t$,th),tb[ta]=tm,tp=tf,tf=td,td=tu,tu=tv;for(;t9<to;)for(tg=tl.charCodeAt(ti+(tu=t9)),tm=++t9,ta=0;ta<tx;ta+=2)tv=tb[ta],tb[ta]=tm=tn(tv,tu,tm,tg,tb[ta+1]),tu=tv;return tm}}();const re=Array.from(lt.querySelectorAll("[js-slot]")),oe=new Map,se={title:document.title,slots:pe()};let ie,le,ae,ue=Z.pathname;function de(tn){return"A"===tn.tagName&&0===tn.getAttribute("href").indexOf("#")}function fe(tn){return"A"===tn.tagName&&!de(tn)&&"_blank"!==tn.target&&tn.hostname===tt&&!tn.hasAttribute("redirect")}function pe(tn=lt){let tr=re;return tn!==lt&&(tr=Array.from(tn.querySelectorAll("[js-slot]"))),tr.reduce((tn,tr)=>(tn[tr.getAttribute("js-slot")]=tr.innerHTML,tn),{})}function me({slots:tn}){Object.entries(tn).forEach(([tn,tr])=>{let tl=re.find(tr=>tr.getAttribute("js-slot")===tn);null!=tl&&(tl.innerHTML=tr)}),window.dispatchEvent(new CustomEvent("contentChange"))}function he(tn,{importance:tr}={}){if(tn=tn.replace(/\/$/,""),oe.has(tn))return Promise.resolve(oe.get(tn));let tl=fetch(tn,{importance:tr}).then(tn=>tn.text()).then(tr=>{null==ie&&(ie=new DOMParser);let tl=ie.parseFromString(tr,"text/html"),tc=tl.querySelector(".js-content"),ts={title:tl.title,slots:pe(tc)};return oe.set(tn,ts),ts});return oe.set(tn,tl),tl}async function ve(tn){if(0===tn.indexOf("#"))return;0!==tn.indexOf("http")&&(tn=`${window.location.origin}${tn}`),pt.set(1);let[{title:tr,slots:tl}]=await Promise.all([he(tn),et(300)]);pt.set(2),Q(()=>{me({title:tr,slots:tl}),document.title=tr,lt.scrollTop=0,window.history.pushState({title:tr,slots:tl},tr,tn),ue=Z.pathname})}function ge(){Q(()=>{let tn=lt.querySelector(":target");lt.scrollTop=tn?Math.max(tn.offsetTop-24,0):0})}function ye(){let tn=function(tn){let{page:tr}=le.reduce((tr,tl)=>{let{aliases:tc}=tl;return tc.forEach(tc=>{let ts=tc.startsWith(tn)||tn.startsWith(tc)?-4:1,to=Math.max(0,ce(tc,tn)+ts);to<tr.diff&&(tr={diff:to,page:tl})}),tr},{page:le[0],diff:100});return tr}(ae.textContent.trim());tn.external?window.open(tn.url,"_blank"):ve(tn.url)}function $e(){fetch("/assets/pages.json").then(tn=>tn.json()).then(tn=>{le=tn}).catch(()=>{$e.retries++<3?$e():console.warn("Something went wrong :(")})}$e.retries=0;const be=Q.bind(null,function(){if(null==ae)return;let tn=function(tn){let tr=0;if(window.getSelection().rangeCount>0){let tl=window.getSelection().getRangeAt(0),tc=tl.cloneRange();tc.selectNodeContents(tn),tc.setEnd(tl.endContainer,tl.endOffset),tr=tc.toString().length}return tr}(ae);ae.style.setProperty("--caret-position",tn)}),we=be;function xe(){""===ae.textContent&&(ae.textContent=ae.getAttribute("data-original-text"))}function Ee(){be(),null==le&&$e()}function Ce(tn){"Enter"===tn.key&&(tn.preventDefault(),ye())," "===tn.key&&tn.preventDefault(),be()}function Ae(){(ae=document.querySelector(".js-text-nav"))&&(ae.addEventListener("click",we),ae.addEventListener("blur",xe),ae.addEventListener("focus",Ee),ae.addEventListener("keydown",Ce),ae.textContent=ae.textContent.trim())}function ke(tn){if(!function(tn){let tr=document.activeElement;return tr===Y||null==tr||("BUTTON"===tr.tagName||"A"===tr.tagName)&&"Enter"!==tn.key&&" "!==tn.key}(tn))return;if("r"===tn.key)return At();if("+"===tn.key||"="===tn.key)return yt();if("-"===tn.key)return bt();if("h"===tn.key)return Ct();if("f"===tn.key)return void(document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen());let tr=Number(tn.key);Number.isNaN(tr)||(tr===i(dt)?$t(0):$t(tr))}function ee2(tn){let tr,tl,tc;return{c(){(tr=document.createElement("button")).textContent="SPACE MODE 2",tr.classList.add("cursor-pointer","svelte-6brq6f","visible-button")},m(tn,ts){tn.appendChild(tr),tl||(tc=tr.addEventListener("click",At),tl=!0)},p:t,i:t,o:t,d(tn){tn&&tr.remove(),tl=!1,tc()}}}const Ne=()=>{Q(()=>{Ae(),window.addEventListener("contentChange",Ae),window.addEventListener("keyup",ke),window.addEventListener("popstate",async tn=>{let{state:tr}=tn;if(Z.pathname===ue)return tn.preventDefault(),void ge();ue=Z.pathname,null==tr&&(tr=se),pt.set(1),await et(300),pt.set(2),Q(()=>{me(tr),document.title=tr.title,ge()})}),Y.addEventListener("mousemove",tn=>{fe(tn.target)&&(oe.has(tn.target.href)||he(tn.target.href,{importante:"low"}))}),Y.addEventListener("click",tn=>{if(de(tn.target))return tn.preventDefault(),Z.hash=tn.target.getAttribute("href"),ge();fe(tn.target)&&(tn.preventDefault(),ve(tn.target.href))}),new Wt({target:it}),new Xt({target:document.querySelector(".js-remote")}),new te({target:document.querySelector(".js-header-controls")}),new ne({target:document.querySelector(".js-space-trigger")}),new ee2({target:document.querySelector("js-space-trigger2")})})};"interactive"!==document.readyState?window.addEventListener("DOMContentLoaded",Ne):Ne();