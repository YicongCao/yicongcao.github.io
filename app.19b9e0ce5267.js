(()=>{var Jl={noartfps:{url:"https://yicongcao.github.io/No-Art-FPS/",label:"\u6253\u5F00 No Art FPS",action:"\u5728\u7EBF\u8BD5\u73A9"},museum:{url:"https://yicongcao.github.io/photo-museum-demo/",label:"\u6253\u5F00 Photo Museum",action:"\u5728\u7EBF\u89C2\u5C55"},brushline:{url:"https://yicongcao.github.io/Brushline-Rally-web/",label:"\u6253\u5F00 Brushline Rally",action:"\u5728\u7EBF\u8BD5\u73A9"}};function Kl(s,t,e=null){let n=s.querySelector("img"),i=s.querySelector("[data-demo-action]"),r=s.querySelector("[data-demo-host]"),a=t.querySelector("[data-demo-continue]"),o=null,l=()=>{t.open&&t.close()};return s.addEventListener("click",c=>{s.href!==Jl.noartfps.url&&matchMedia("(max-width: 850px), (pointer: coarse)").matches&&(c.preventDefault(),o=s,a.href=s.href,t.querySelector("[data-demo-name]").textContent=s.getAttribute("aria-label").replace("\u6253\u5F00 ","").replace("\uFF08\u65B0\u6807\u7B7E\u9875\uFF09",""),t.open||t.showModal(),t.querySelector("[data-demo-cancel]").focus())}),t.querySelector("[data-demo-cancel]").addEventListener("click",l),a.addEventListener("click",l),t.addEventListener("close",()=>{o?.isConnected&&o.focus({preventScroll:!0}),o=null}),t.addEventListener("click",c=>{if(c.target!==t)return;let h=t.getBoundingClientRect();(c.clientX<h.left||c.clientX>h.right||c.clientY<h.top||c.clientY>h.bottom)&&l()}),{close:l,setProject(c){let h=Jl[c.id];if(s.hidden=!h,e&&(e.hidden=c.id!=="brushline"),c.id==="brushline"?s.setAttribute("aria-describedby","rally-experience-note"):s.removeAttribute("aria-describedby"),!h){s.removeAttribute("href"),n.removeAttribute("src");return}s.href=h.url,s.setAttribute("aria-label",h.label+"\uFF08\u65B0\u6807\u7B7E\u9875\uFF09"),n.src=c.coverSrc,i.textContent=h.action,r.textContent=new URL(h.url).hostname}}}var jl={noartfps:"M6 0h4v3H6zM0 6h3v4H0zm13 0h3v4h-3zM6 13h4v3H6zM4 3h8v1h1v8h-1v1H4v-1H3V4h1zm1 2v6h6V5zm2 2h2v2H7z","km-compiler":"M1 1h10v2h3v12H1zm2 2v10h9V5h-3V3zm1 3h4v1H4zm0 3h6v1H4zm0 3h3v1H4z","km-bot":"M1 2h5v1h4V2h5v12h-5v1H6v-1H1zm2 2v8h3v1h1V5H6V4zm6 1v8h1v-1h3V4h-3zM11 0h2v1h2v2h-2v2h-2V3H9V1h2z","km-network":"M6 0h4v4H6zm1 5h2v2h5v3h-2V9H4v1H2V7h5zM0 11h6v5H0zm2 2v1h2v-1zm8-2h6v5h-6zm2 2v1h2v-1z",agent:"M3 4h4V2h2v2h4v2h2v7h-2v2H3v-2H1V6h2zm1 3v3h2V7zm6 0v3h2V7zM5 12v1h6v-1z",game:"M3 4h10v2h2v7h-3v-2H4v2H1V6h2zm2 2v2H3v2h2v2h2v-2h2V8H7V6zm6 1v2h2V7z",screen:"M1 2h14v10H9v2h3v1H4v-1h3v-2H1zm2 2v6h10V4z",compass:"M7 0h2v2h3v2h2v3h2v2h-2v3h-2v2H9v2H7v-2H4v-2H2V9H0V7h2V4h2V2h3zm3 5H8v2H6v4h2V9h2z",school:"M0 5l8-4 8 4-8 4zm3 4 5 2 5-2v4l-5 2-5-2zm11-2h2v6h-2z",github:"M4 1h3v2h2V1h3v2h2v7h-2v2h-1v4H9v-4H7v4H5v-2H2v-2H0v-2h2v2h3v-1H3V9H2V4h2z",phone:"M2 1h4v4H4v3h2v2h2v2h3v-2h4v4h-2v2H9v-2H6v-2H4v-2H2V7H0V3h2z",route:"M1 1h5v5H1zm9 9h5v5h-5zM8 2h5v2H8zm3 2h2v4h-2zM3 8h2v4h3v2H3z",brushline:"M3 5h8v2h2v2h2v5h-2v2h-2v-2H5v2H3v-2H1V9h2zm2 2v3h6V7zM3 11v1h2v-1zm8 0v1h2v-1zM1 0h2v3H1zm3 0h2v2H4zm3 0h2v2H7z",museum:"M0 2h13v11H0zm2 2v7h9V4zm1 5 2-3h2v2h2v2H3zM9 5h1v1H9zm5-1h2v12H3v-2h11z",nex:"M0 2h14v12H0zm2 2v8h10V4zm1 1h2v1h1v2H5v1H3V8h1V6H3zm4 4h3v1H7zM13 0h1v1h1v1h1v1h-2V2h-1z",pgos:"M1 0h6v5H1zm1 2v1h1V2zm6-2h6v5H8zm1 2v1h1V2zM4 6h1v2h6V6h1v3H9v2h4v5H7v-5h1V9H4zM8 13v1h1v-1zM0 11h5v5H0zm1 2v1h1v-1z",cloudgame:"M0 1h16v11H9v2h3v2H4v-2h3v-2H0zm2 2v7h12V3zm1 1h1v4H3zm9 1h1v4h-1zM7 6h2v2H7z",accelerator:"M5 0h6v1h2v2h2v2h1v6h-1v2h-2v2h-2v1H5v-1H3v-2H1v-2H0V5h1V3h2V1h2zm1 2v2H4v2H2v1h4v2H2v2h2v2h2v1h1V9h2v5h1v-1h2v-2h2V9H9V7h5V6h-2V4h-2V2z",desktop:"M0 1h11v10H7v2h3v2H1v-2h4v-2H0zm2 2v6h7V3zm10 3h4v10h-4zm1 2v5h2V8z",cleaner:"M6 0h5v2H9v4h4v2h2v7H1V8h2V6h4V2H6zM4 8v4H3v1h10v-1h-1V8zm2 1h1v3H6zm3 0h1v3H9z",win10:"M0 3h6v5H0zm8-2h8v7H8zM0 10h6v4H0zm8 0h8v6H8z",uwp:"M0 1h16v14H0zm2 2v10h12V3zm1 1h3v3H3zm5 0h5v1H8zm0 2h4v1H8zM3 9h10v1H3zm0 2h8v1H3z",reader:"M0 2h6v1h4V2h6v12h-6v1H6v-1H0zm2 2v8h4v1h1V5H6V4zm7 1v8h1v-1h4V4h-4v1z",ishowfx:"M1 0h11v2H3v8H1zm3 3h11v11H4zm2 2v7h7V5zm1 5 2-3h1v2h2v2H7zM0 12h2v2h2v2H0z",xidian:"M5 0h6v2h2v2h-2v8h4v4H1v-4h4V4H3V2h2zm2 3v4h2V3zm0 6v3h2V9zM3 14v1h10v-1z",protocol:"M0 3h5v2h2v6H5v2H0zm2 2v6h2V5zm7-2h2v2h5v8h-5v2H9v-4H8V7h1zm3 4v4h2V7z",layers:"M0 0h12v12H0zm2 2v8h8V2zm2 1h4v1H4zm0 3h4v1H4zm0 3h3v1H4zm9-6h2v12H3v-2h10z",shield:"M2 1h12v8h-2v3h-2v2H6v-2H4V9H2zm2 2v5h2v3h2v1h1v-1h1V8h2V3zm2 3h2v2h1V6h2v3H9v2H7V9H6z",chart:"M0 1h2v12h14v2H0zm4 7h2v3H4zm4-3h2v6H8zm4-4h2v10h-2z",rules:"M0 3h3V1h3v2h10v2H6v2H3V5H0zm0 8h10V9h3v2h3v2h-3v2h-3v-2H0z",cloud:"M5 1h6v2h2v3h2v2h1v5H0V8h1V6h3V3h1zm1 2v4H3v2H2v2h12V9h-3V5H9V3z",input:"M2 0h2v2h2v2h2v2h2v2h2v2H8v2h2v3H7v-3H5v2H2z"};function Gn(s){return`<svg class="pixel-icon" viewBox="0 0 16 16" aria-hidden="true" shape-rendering="crispEdges"><path fill="currentColor" fill-rule="evenodd" d="${jl[s]||jl.compass}"/></svg>`}function Wn(s){return Gn(s==="bot"?"agent":s)}var as=s=>String(s??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function Tu(s,t,e){let n=new Map((t||[]).map(i=>[i.id,i]));return(s.articles||[]).map(i=>n.get(i)).filter(Boolean).map(i=>({...i,image:e.get(i.image)})).filter(i=>i.image&&/^https:\/\/km\.woa\.com\/articles\/show\/\d+$/.test(i.url))}function Ql(s,t,e){return Tu(s,t,e).map(n=>`<article class="km-card" data-article="${as(n.id)}"><a class="km-article" href="${as(n.url)}" target="_blank" rel="noopener"><img src="${as(n.image.src)}" width="${n.image.width}" height="${n.image.height}" alt="${as(n.title)} \xB7 KM \u6587\u7AE0\u622A\u56FE" loading="lazy"><span class="km-article-title">${Wn({pgos:"km-compiler",bot:"km-bot",accelerator:"km-network"}[n.project]||s.id)}<span>${as(n.title)}</span></span><span class="km-article-link">KM \u2197</span></a></article>`).join("")}var $t=(s,t,e=660,n=0,i=.35)=>({at:s,kind:t,frequency:e,pan:n,volume:i}),tc={noartfps:{loop:2.6,cues:[$t(.5,"key",392,-.2,.18),$t(1.8,"pong",587,.2,.22)]},museum:{loop:10,cues:[$t(0,"shutter"),$t(1.1,"glass",523,-.2),$t(2.85,"glass",659,.2),$t(4.6,"glass",784,-.2),$t(6.35,"glass",659,.2),$t(8.1,"paper")]},cloudgame:{loop:1.8181818181818181,cues:[$t(0,"pong",440,-.45),$t(.9090909090909091,"pong",587,.45)]},accelerator:{loop:Math.PI*2/2.1,cues:[$t(0,"packet",880,.35),$t(Math.PI/2.1,"packet",660,-.35)]},xidian:{loop:5,cues:[$t(0,"unfold"),$t(3.5,"paper")]},ishowfx:{loop:2.4,cues:[$t(0,"shutter",660,-.2),$t(1.2,"shutter",784,.2)]},uwp:{loop:2.4,cues:[$t(0,"key",660,-.15),$t(.8,"key",784,0),$t(1.6,"key",880,.15)]},reader:{loop:Math.PI,cues:[$t(Math.PI/4,"paper"),$t(Math.PI*3/4,"paper")]},cleaner:{loop:1.6666666666666667,cues:[$t(0,"tidy",784,-.2),$t(.55,"tidy",988,0),$t(1.1,"tidy",1175,.2)]},pgos:{loop:1.5384615384615383,cues:[$t(0,"link",392,-.2),$t(.5076923076923077,"link",494,0),$t(1.0153846153846153,"link",587,.2)]},win10:{loop:4,cues:[...Array.from({length:4},(s,t)=>$t(t*.12,"tile",[523,659,784,1047][t],(t-1.5)*.1,.28)),$t(2.6,"close",523)]},desktop:{loop:2,cues:[$t(0,"transfer",659,-.25),$t(1,"link",880,.25)]},nex:{loop:1.6666666666666667,cues:[$t(0,"key",587,-.15),$t(.25,"key",659,.1),$t(.5,"key",784,-.1),$t(.8,"key",659,.15),$t(1.1,"key",880,0)]}},k0=Object.keys(tc);function ec(s,t){let e=tc[s];if(!e||!Number.isFinite(t)||t<0)return null;let n=Math.floor(t/e.loop),i=t-n*e.loop,r=e.cues.findLastIndex(l=>l.at<=i+1e-8),a=n;if(r<0){if(!n)return null;r=e.cues.length-1,a--}let o=e.cues[r];return{...o,key:`${s}:${a}:${r}`,age:t-(a*e.loop+o.at)}}var Eu={key:[.065,.03,0,"triangle"],pong:[.095,.02,0,"sine"],glass:[.42,0,0,"glass"],packet:[.18,0,1,"sine"],link:[.22,0,.35,"glass"],transfer:[.28,.015,1,"sine"],tile:[.18,0,.15,"glass"],close:[.22,.02,-.6,"sine"],tidy:[.23,.15,1,"sine"],shutter:[.12,.8,0,"none"],paper:[.28,.65,0,"none"],unfold:[.42,.65,0,"none"]};function nc(s,t,e=660){let[n,i,r,a]=Eu[t],o=new Float32Array(Math.ceil(s*n)),l=1979,c=0,h=0,d=0,u=1-Math.exp(-2*Math.PI*2400/s),m=1-Math.exp(-2*Math.PI*550/s);for(let g=0;g<o.length;g++){let v=g/s,p=v/n;l=l*1664525+1013904223>>>0,c+=u*(l/4294967296*2-1-c),h+=m*(c-h),d+=Math.PI*2*e*(1+r*p*.5)/s;let f=a==="none"?0:a==="triangle"?2/Math.PI*Math.asin(Math.sin(d)):a==="glass"?.7*Math.sin(d)+.2*Math.sin(d*2)+.1*Math.sin(d*3):Math.sin(d),b=t==="shutter"?Math.exp(-(((p-.15)/.09)**2))+.55*Math.exp(-(((p-.55)/.12)**2)):Math.sin(Math.PI*p)**2,A=Math.min(1,v/.008)*Math.min(1,(n-v)/.025);o[g]=A*(f*.32*Math.exp(-p*5)+i*(c-h)*b*.9)}return o}function Au(s,t=0){let e=new Float32Array(Math.floor(s*.19)),n=8723+t*173,i=0,r=0,a=0,o=1-Math.exp(-2*Math.PI*3400/s),l=1-Math.exp(-2*Math.PI*380/s);for(let c=0;c<e.length;c++){n=n*1664525+1013904223>>>0;let h=n/4294967296*2-1;i+=o*(h-i),r+=l*(i-r);let d=c/s,u=Math.min(1,d/.008,(.19-d)/.025),m=(.8*Math.exp(-(((d-.045)/.028)**2))+.55*Math.exp(-(((d-.115)/.038)**2)))*Math.max(0,u);e[c]=(i-r)*m,a=Math.max(a,Math.abs(e[c]))}for(let c=0;c<e.length;c++)e[c]*=.65/a;return e}function Cu(s){let t=new Float32Array(Math.ceil(s*.88));for(let[e,n,i,r]of[[0,523.25,.3,.24],[.085,659.25,.3,.23],[.17,783.99,.34,.22],[.28,1046.5,.6,.28]]){let a=Math.round(e*s),o=Math.ceil(i*s);for(let l=0;l<o&&a+l<t.length;l++){let c=l/s,h=2*Math.PI*n*c,d=Math.min(1,c/.006)*Math.exp(-c*7)*Math.min(1,(i-c)/.035),u=2/Math.PI*Math.asin(Math.sin(h));t[a+l]+=r*d*(.65*Math.sin(h)+.25*u+.1*Math.sin(h*2))}}return t}var po=class{constructor(){this.distance=null,this.bucket=null}update(t,e){let n=Math.floor(t*1.25/Math.PI),i=this.distance!==null&&t>this.distance+1e-4,r=e&&i&&this.bucket!==null&&n>this.bucket;return this.distance=t,this.bucket=n,r}},mo=class{constructor({speech:t=globalThis.speechSynthesis,Utterance:e=globalThis.SpeechSynthesisUtterance,contextFactory:n=()=>new(window.AudioContext||window.webkitAudioContext),storage:i=globalThis.localStorage,onChange:r=()=>{},loadMusic:a=async()=>{let o=await fetch("/audio/quiet-islands.mp3");if(!o.ok)throw new Error("Music unavailable");return o.arrayBuffer()}}={}){Object.assign(this,{speech:t,Utterance:e,contextFactory:n,storage:i,onChange:r,loadMusic:a});try{this.enabled=i.getItem("pixelcao:sound")!=="off"}catch{this.enabled=!0}this.hidden=!1,this.detail=!1,this.audibleVideo=!1,this.cadence=new po,this.lastTap=-1/0,this.lastStep=-1/0,this.stepCount=0,this.tapCount=0,this.itemCount=0,this.lastPortalToken=null,this.hoverBuffers=new Map,this.hoverVoices=new Set,this.hoverCount=0,this.hoverCounts={},this.lastHoverKey=null}get running(){return this.enabled&&!this.hidden&&this.context?.state==="running"}get state(){return this.enabled?this.failed?"unavailable":this.running?"playing":"waiting":"muted"}emit(){this.onChange(this)}create(){if(!(this.context||this.failed))try{let t=this.context=this.contextFactory();this.master=t.createGain(),this.master.gain.value=0,this.master.connect(t.destination),this.music=t.createGain(),this.music.gain.value=.42,this.music.connect(this.master),this.effects=t.createGain(),this.effects.gain.value=.65,this.effects.connect(this.master),this.footsteps=[0,1].map(n=>{let i=Au(t.sampleRate,n),r=t.createBuffer(1,i.length,t.sampleRate);return r.getChannelData(0).set(i),r});let e=Cu(t.sampleRate);this.itemBuffer=t.createBuffer(1,e.length,t.sampleRate),this.itemBuffer.getChannelData(0).set(e),t.onstatechange=()=>this.emit(),this.loading=this.loadMusic().then(n=>t.decodeAudioData(n)).then(n=>{this.source=t.createBufferSource(),this.source.buffer=n,this.source.loop=!0,this.source.connect(this.music);let i=t.currentTime;this.music.gain.cancelScheduledValues(i),this.music.gain.setValueAtTime(0,i),this.music.gain.setTargetAtTime(this.audibleVideo?0:this.detail?.13:.42,i,1.4),this.source.start(),this.emit()}).catch(()=>{this.musicFailed=!0,this.emit()})}catch{this.failed=!0,this.enabled=!1,this.emit()}}async activate(){if(!this.enabled||this.hidden||this.failed||(this.create(),!this.context))return!1;try{this.context.state!=="running"&&await this.context.resume()}catch{return this.emit(),!1}return this.mix(),this.emit(),!!this.running}async toggle(){let t=!this.enabled;this.enabled=t;try{this.storage.setItem("pixelcao:sound",t?"on":"off")}catch{}t?await this.activate():this.mix(),this.emit()}mix(){if(!this.context)return;(!this.enabled||this.hidden||this.audibleVideo)&&this.stopItem(),(!this.enabled||this.hidden||this.detail||this.audibleVideo)&&(this.stopEngine(),this.stopRobot(),this.stopHover());let t=this.context.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(this.running?.85:0,t,.04),this.music.gain.cancelScheduledValues(t),this.music.gain.setTargetAtTime(this.audibleVideo?0:this.detail?.13:.42,t,.3)}setDetail(t){this.detail=t,this.mix()}setAudibleVideo(t){this.audibleVideo=t,this.mix()}async setHidden(t){if(this.hidden=t,!!this.context){this.mix();try{t?await this.context.suspend():this.enabled&&await this.context.resume()}catch{}try{this.hidden&&this.context.state==="running"&&await this.context.suspend()}catch{}this.mix(),this.emit()}}tone(t,e,n,i="sine",r=0){let a=this.context,o=a.currentTime,l=a.createOscillator(),c=a.createGain(),h=a.createStereoPanner();l.type=i,l.frequency.setValueAtTime(t,o),c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(e,o+.006),c.gain.exponentialRampToValueAtTime(1e-4,o+n),h.pan.value=r,l.connect(c),c.connect(h),h.connect(this.effects),l.start(o),l.stop(o+n+.02),l.onended=()=>{l.disconnect(),c.disconnect(),h.disconnect()}}async tap(){let t=Date.now();if(!await this.activate()||Date.now()-t>350)return;let e=this.context.currentTime;e-this.lastTap<.09||(this.lastTap=e,this.tapCount++,this.tone(880,.09,.24,"sine",-.08),this.tone(1320,.027,.34,"sine",.08),this.emit())}stopItem(){if(!this.itemVoice)return;let{src:t}=this.itemVoice;this.itemVoice=null,t.stop()}portal(t,e){let n=t==="opening"&&e!==this.lastPortalToken;if(t==="opening"&&(this.lastPortalToken=e),["idle","walking","casting","closing"].includes(t)&&this.stopItem(),!n||!this.running||this.audibleVideo)return;this.stopItem();let i=this.context.createBufferSource(),r=this.context.createGain();i.buffer=this.itemBuffer,r.gain.value=.75,i.connect(r),r.connect(this.effects);let a=this.itemVoice={src:i,gain:r};i.onended=()=>{i.disconnect(),r.disconnect(),this.itemVoice===a&&(this.itemVoice=null)},i.start(),this.itemCount++,this.emit()}stopEngine(){if(!this.engine)return;let t=this.engine;this.engine=null;let e=this.context.currentTime;t.gain.gain.setTargetAtTime(0,e,.025),t.osc.stop(e+.12),t.osc.onended=()=>{t.osc.disconnect(),t.filter.disconnect(),t.gain.disconnect()},this.emit()}stopRobot(){this.robotUtterance&&(this.speech?.cancel(),this.robotUtterance=null),this.robotSpeaking=!1}speakRobot(t){this.stopRobot();let e=this.speech?.getVoices().find(r=>r.localService&&/^zh(?:-|_)/i.test(r.lang));if(!e||!this.Utterance)return;let n=new this.Utterance(t);n.voice=e,n.lang=e.lang,n.pitch=1.65,n.rate=1.65,n.volume=.38,this.robotUtterance=n,this.robotSpeaking=!0;let i=()=>{this.robotUtterance===n&&(this.robotSpeaking=!1,this.robotUtterance=null)};n.onend=i,n.onerror=i,this.speech.speak(n)}stopHover(){if(!this.context)return;let t=this.context.currentTime;for(let e of this.hoverVoices)e.gain.gain.cancelScheduledValues(t),e.gain.gain.setTargetAtTime(0,t,.015),e.src.stop(t+.07);this.hoverVoices.clear()}playHover(t,e){let n=this.context,i=`${e.kind}:${e.frequency}`;if(!this.hoverBuffers.has(i)){let c=nc(n.sampleRate,e.kind,e.frequency),h=n.createBuffer(1,c.length,n.sampleRate);h.getChannelData(0).set(c),this.hoverBuffers.set(i,h)}let r=n.createBufferSource(),a=n.createGain(),o=n.createStereoPanner();r.buffer=this.hoverBuffers.get(i),a.gain.value=e.volume,o.pan.value=e.pan,r.connect(a),a.connect(o),o.connect(this.effects);let l={src:r,gain:a,panner:o};this.hoverVoices.add(l),r.onended=()=>{r.disconnect(),a.disconnect(),o.disconnect(),this.hoverVoices.delete(l)},r.start(),this.hoverCount++,this.hoverCounts[t]=(this.hoverCounts[t]||0)+1,this.hoverProject=t,this.hoverKind=e.kind,this.emit()}island({id:t,phase:e,speed:n=0,pitch:i=0,text:r="",time:a=0}){let o=this.running&&!this.detail&&!this.audibleVideo,l=ec(t,a);t!==this.islandId&&(this.stopHover(),this.lastHoverKey=null);let c=l&&l.key!==this.lastHoverKey;if(l&&(this.lastHoverKey=l.key),(!o||t!=="bot")&&this.stopRobot(),(!o||t!=="brushline")&&this.stopEngine(),!o||!t){this.stopHover(),this.islandId=t,this.islandPhase=e;return}if(c&&l.age<.16&&this.playHover(t,l),t==="brushline"){if(!this.engine){let d=this.context,u=d.createOscillator(),m=d.createBiquadFilter(),g=d.createGain();u.type="sawtooth",g.gain.value=0,m.type="lowpass",m.frequency.value=500,u.connect(m),m.connect(g),g.connect(this.effects),u.start(),this.engine={osc:u,filter:m,gain:g},this.emit()}let h=this.context.currentTime;if(this.engine.osc.frequency.setTargetAtTime(42+n*65,h,.08),this.engine.gain.gain.setTargetAtTime(n>0?.07:0,h,.05),e==="horn"&&this.islandPhase!=="horn"&&(this.tone(440,.065,.35,"sine"),this.tone(554,.035,.35,"sine")),e==="drift"&&this.islandPhase!=="drift"){let d=this.context.createBufferSource(),u=this.context.createGain();d.buffer=this.footsteps[0],u.gain.value=.16,d.connect(u),u.connect(this.effects),d.start(),d.onended=()=>{d.disconnect(),u.disconnect()}}}else t==="bot"&&e==="line"?this.speakRobot(r):t==="bot"&&e==="syllable"&&!this.robotSpeaking&&(this.tone(340+i%4*85,.055,.12,"triangle",-.08),this.tone(680+i%3*110,.022,.09,"sine",.08));this.islandId=t,this.islandPhase=e}walk(t,e){if(!this.cadence.update(t,e)||!this.running)return;let n=this.context,i=n.currentTime;if(i-this.lastStep<.16)return;this.lastStep=i,this.stepCount++;let r=this.stepCount%2?.12:-.12,a=n.createBufferSource(),o=n.createGain(),l=n.createStereoPanner();a.buffer=this.footsteps[this.stepCount%2],o.gain.value=.35,l.pan.value=r,a.connect(o),o.connect(l),l.connect(this.effects),a.start(),a.onended=()=>{a.disconnect(),o.disconnect(),l.disconnect()},this.emit()}},Ru='<path d="M1 6h3l4-4v12l-4-4H1z"/><path class="sound-waves" d="M10 4h2v2h-2zm2 2h2v4h-2zm-2 4h2v2h-2z"/><path class="sound-cross" d="M10 5h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"/>';function ic(){let s=[...document.querySelectorAll("[data-sound-toggle]")],t=new mo({onChange:i=>s.forEach(r=>{r.dataset.sound=i.state,r.dataset.music=i.musicFailed?"unavailable":i.source?"ready":"loading",r.dataset.steps=String(i.stepCount),r.dataset.taps=String(i.tapCount),r.dataset.items=String(i.itemCount),r.dataset.hoverSounds=String(i.hoverCount),r.dataset.hoverProject=i.hoverProject||"",r.dataset.hoverKind=i.hoverKind||"",r.dataset.hoverCounts=JSON.stringify(i.hoverCounts),r.setAttribute("aria-pressed",String(i.enabled)),r.setAttribute("aria-label",i.enabled?"\u5173\u95ED\u58F0\u97F3":"\u5F00\u542F\u58F0\u97F3"),r.title=i.enabled?"\u5173\u95ED\u58F0\u97F3":"\u5F00\u542F\u58F0\u97F3",r.disabled=!!i.failed})});s.forEach(i=>{i.innerHTML=`<svg viewBox="0 0 16 16" aria-hidden="true" shape-rendering="crispEdges">${Ru}</svg>`,i.onclick=()=>t.toggle()}),t.emit();let e=i=>{i.target.closest?.("[data-sound-toggle]")||i.type==="keydown"&&(!["Enter"," "].includes(i.key)||i.repeat)||t.activate()};document.addEventListener("pointerdown",e,{capture:!0}),document.addEventListener("keydown",e,{capture:!0}),document.addEventListener("click",i=>{if(i.target.closest?.("[data-sound-toggle]"))return;let r=i.target.closest?.("button,a");r&&!r.disabled&&t.tap()},{capture:!0}),document.addEventListener("visibilitychange",()=>{t.setHidden(document.hidden)});let n=()=>t.setAudibleVideo([...document.querySelectorAll("video")].some(i=>!i.paused&&!i.ended&&!i.muted&&i.volume>0));for(let i of["play","pause","ended","volumechange"])document.addEventListener(i,n,!0);return t.activate(),t}var Lc=0,Xo=1,Dc=2;var Fs=1,Nc=2,Ji=3,ii=0,Ge=1,Ee=2,Tn=0,Ki=1,Os=2,qo=3,Yo=4,Uc=5;var gi=100,Fc=101,Oc=102,Bc=103,zc=104,kc=200,Vc=201,Hc=202,Gc=203,$o=204,Zo=205,Wc=206,Xc=207,qc=208,Yc=209,$c=210,Zc=211,Jc=212,Kc=213,jc=214,Er=0,Ar=1,Cr=2,Vi=3,Rr=4,Ir=5,Pr=6,Lr=7,Jo=0,Qc=1,th=2,dn=0,Ko=1,jo=2,Qo=3,tl=4,el=5,nl=6,il=7;var sl=300,si=301,xi=302,ia=303,sa=304,Bs=306,Dr=1e3,_n=1001,Nr=1002,_e=1003,eh=1004;var zs=1005;var De=1006,ra=1007;var ri=1008;var Ke=1009,rl=1010,al=1011,ji=1012,aa=1013,fn=1014,en=1015,pn=1016,oa=1017,la=1018,Qi=1020,ol=35902,ll=35899,cl=1021,hl=1022,nn=1023,vn=1026,ai=1027,ca=1028,ha=1029,oi=1030,ua=1031;var da=1033,ks=33776,Vs=33777,Hs=33778,Gs=33779,fa=35840,pa=35841,ma=35842,ga=35843,xa=36196,_a=37492,va=37496,ya=37488,Ma=37489,Ws=37490,Sa=37491,ba=37808,wa=37809,Ta=37810,Ea=37811,Aa=37812,Ca=37813,Ra=37814,Ia=37815,Pa=37816,La=37817,Da=37818,Na=37819,Ua=37820,Fa=37821,Oa=36492,Ba=36494,za=36495,ka=36283,Va=36284,Xs=36285,Ha=36286;var ms=2300,Ur=2301,wr=2302,Bo=2303,zo=2400,ko=2401,Vo=2402;var nh=3200;var ul=0,ih=1,Fn="",we="srgb",gs="srgb-linear",xs="linear",ae="srgb";var Tr=7680;var sh=519,rh=512,ah=513,oh=514,Ga=515,lh=516,ch=517,Wa=518,hh=519,uh=35044;var dl="300 es",un=2e3,_s=2001;function Iu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Pu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function vs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dh(){let s=vs("canvas");return s.style.display="block",s}var sc={},Hi=null;function fl(...s){let t="THREE."+s.shift();Hi?Hi("log",t,...s):console.log(t,...s)}function fh(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Lt(...s){s=fh(s);let t="THREE."+s.shift();if(Hi)Hi("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ut(...s){s=fh(s);let t="THREE."+s.shift();if(Hi)Hi("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function fi(...s){let t=s.join(" ");t in sc||(sc[t]=!0,Lt(...s))}function ph(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var mh={[Er]:Ar,[Cr]:Pr,[Rr]:Lr,[Vi]:Ir,[Ar]:Er,[Pr]:Cr,[Lr]:Rr,[Ir]:Vi},yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rc=1234567,zi=Math.PI/180,Gi=180/Math.PI;function ts(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[s&255]+Fe[s>>8&255]+Fe[s>>16&255]+Fe[s>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Jt(s,t,e){return Math.max(t,Math.min(e,s))}function pl(s,t){return(s%t+t)%t}function Lu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Du(s,t,e){return s!==t?(e-s)/(t-s):0}function ps(s,t,e){return(1-e)*s+e*t}function Nu(s,t,e,n){return ps(s,t,1-Math.exp(-e*n))}function Uu(s,t=1){return t-Math.abs(pl(s,t*2)-t)}function Fu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ou(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Bu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function zu(s,t){return s+Math.random()*(t-s)}function ku(s){return s*(.5-Math.random())}function Vu(s){s!==void 0&&(rc=s);let t=rc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hu(s){return s*zi}function Gu(s){return s*Gi}function Wu(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Xu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function qu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Yu(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*h,o*c);break;default:Lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ke(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Pe={DEG2RAD:zi,RAD2DEG:Gi,generateUUID:ts,clamp:Jt,euclideanModulo:pl,mapLinear:Lu,inverseLerp:Du,lerp:ps,damp:Nu,pingpong:Uu,smoothstep:Fu,smootherstep:Ou,randInt:Bu,randFloat:zu,randFloatSpread:ku,seededRandom:Vu,degToRad:Hu,radToDeg:Gu,isPowerOfTwo:Wu,ceilPowerOfTwo:Xu,floorPowerOfTwo:qu,setQuaternionFromProperEuler:Yu,normalize:ke,denormalize:Bi},Kt=class s{static{s.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||l!==u||c!==m||h!==g){let p=l*u+c*m+h*g+d*v;p<0&&(u=-u,m=-m,g=-g,v=-v,p=-p);let f=1-o;if(p<.9995){let b=Math.acos(p),A=Math.sin(b);f=Math.sin(f*b)/A,o=Math.sin(o*b)/A,l=l*f+u*o,c=c*f+m*o,h=h*f+g*o,d=d*f+v*o}else{l=l*f+u*o,c=c*f+m*o,h=h*f+g*o,d=d*f+v*o;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*m-c*u,t[e+1]=l*g+h*u+c*d-o*m,t[e+2]=c*g+h*m+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{static{s.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ac.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ac.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return go.copy(this).projectOnVector(t),this.sub(go)}reflect(t){return this.sub(go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},go=new D,ac=new Mn,Ft=class s{static{s.prototype.isMatrix3=!0}constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],v=i[0],p=i[3],f=i[6],b=i[1],A=i[4],M=i[7],w=i[2],S=i[5],C=i[8];return r[0]=a*v+o*b+l*w,r[3]=a*p+o*A+l*S,r[6]=a*f+o*M+l*C,r[1]=c*v+h*b+d*w,r[4]=c*p+h*A+d*S,r[7]=c*f+h*M+d*C,r[2]=u*v+m*b+g*w,r[5]=u*p+m*A+g*S,r[8]=u*f+m*M+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,m=c*r-a*l,g=e*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-o*e)*v,t[6]=m*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return fi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xo.makeScale(t,e)),this}rotate(t){return fi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xo.makeRotation(-t)),this}translate(t,e){return fi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xo=new Ft,oc=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lc=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $u(){let s={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(i.r=Nn(i.r),i.g=Nn(i.g),i.b=Nn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fn?xs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return fi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return fi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[gs]:{primaries:t,whitePoint:n,transfer:xs,toXYZ:oc,fromXYZ:lc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:oc,fromXYZ:lc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),s}var Zt=$u();function Nn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ki(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var wi,Fr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{wi===void 0&&(wi=vs("canvas")),wi.width=t.width,wi.height=t.height;let i=wi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=wi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=vs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Nn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nn(e[n]/255)*255):e[n]=Nn(e[n]);return{data:e,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zu=0,Wi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(_o(i[a].image)):r.push(_o(i[a]))}else r=_o(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function _o(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}var Ju=0,vo=new D,Ve=class s extends yn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=_n,i=_n,r=De,a=ri,o=nn,l=Ke,c=s.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=ts(),this.name="",this.source=new Wi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vo).x}get height(){return this.source.getSize(vo).y}get depth(){return this.source.getSize(vo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Lt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Lt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dr:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case Nr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dr:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case Nr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=sl;Ve.DEFAULT_ANISOTROPY=1;var xe=class s{static{s.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,M=(m+1)/2,w=(f+1)/2,S=(h+u)/4,C=(d+v)/4,_=(g+p)/4;return A>M&&A>w?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=S/n,r=C/n):M>w?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=S/i,r=_/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=C/r,i=_/r),this.set(n,i,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-v)/b,this.z=(u-h)/b,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Or=class extends yn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new Ve(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:De,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Wi(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xe=class extends Or{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ys=class extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_e,this.minFilter=_e,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Br=class extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_e,this.minFilter=_e,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var oe=class s{static{s.prototype.isMatrix4=!0}constructor(t,e,n,i,r,a,o,l,c,h,d,u,m,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,m,g,v,p)}set(t,e,n,i,r,a,o,l,c,h,d,u,m,g,v,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Ti.setFromMatrixColumn(t,0).length(),r=1/Ti.setFromMatrixColumn(t,1).length(),a=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*d,g=c*h,v=c*d;e[0]=u+v*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*d,g=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+g,e[10]=u-v*d}else if(t.order==="XZY"){let u=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ku,t,ju)}lookAt(t,e,n){let i=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Xn.crossVectors(n,qe),Xn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Xn.crossVectors(n,qe)),Xn.normalize(),Qs.crossVectors(qe,Xn),i[0]=Xn.x,i[4]=Qs.x,i[8]=qe.x,i[1]=Xn.y,i[5]=Qs.y,i[9]=qe.y,i[2]=Xn.z,i[6]=Qs.z,i[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],v=n[6],p=n[10],f=n[14],b=n[3],A=n[7],M=n[11],w=n[15],S=i[0],C=i[4],_=i[8],T=i[12],I=i[1],U=i[5],B=i[9],W=i[13],L=i[2],H=i[6],Y=i[10],Z=i[14],rt=i[3],$=i[7],et=i[11],it=i[15];return r[0]=a*S+o*I+l*L+c*rt,r[4]=a*C+o*U+l*H+c*$,r[8]=a*_+o*B+l*Y+c*et,r[12]=a*T+o*W+l*Z+c*it,r[1]=h*S+d*I+u*L+m*rt,r[5]=h*C+d*U+u*H+m*$,r[9]=h*_+d*B+u*Y+m*et,r[13]=h*T+d*W+u*Z+m*it,r[2]=g*S+v*I+p*L+f*rt,r[6]=g*C+v*U+p*H+f*$,r[10]=g*_+v*B+p*Y+f*et,r[14]=g*T+v*W+p*Z+f*it,r[3]=b*S+A*I+M*L+w*rt,r[7]=b*C+A*U+M*H+w*$,r[11]=b*_+A*B+M*Y+w*et,r[15]=b*T+A*W+M*Z+w*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],v=t[7],p=t[11],f=t[15],b=l*m-c*u,A=o*m-c*d,M=o*u-l*d,w=a*m-c*h,S=a*u-l*h,C=a*d-o*h;return e*(v*b-p*A+f*M)-n*(g*b-p*w+f*S)+i*(g*A-v*w+f*C)-r*(g*M-v*S+p*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],v=t[13],p=t[14],f=t[15],b=e*o-n*a,A=e*l-i*a,M=e*c-r*a,w=n*l-i*o,S=n*c-r*o,C=i*c-r*l,_=h*v-d*g,T=h*p-u*g,I=h*f-m*g,U=d*p-u*v,B=d*f-m*v,W=u*f-m*p,L=b*W-A*B+M*U+w*I-S*T+C*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/L;return t[0]=(o*W-l*B+c*U)*H,t[1]=(i*B-n*W-r*U)*H,t[2]=(v*C-p*S+f*w)*H,t[3]=(u*S-d*C-m*w)*H,t[4]=(l*I-a*W-c*T)*H,t[5]=(e*W-i*I+r*T)*H,t[6]=(p*M-g*C-f*A)*H,t[7]=(h*C-u*M+m*A)*H,t[8]=(a*B-o*I+c*_)*H,t[9]=(n*I-e*B-r*_)*H,t[10]=(g*S-v*M+f*b)*H,t[11]=(d*M-h*S-m*b)*H,t[12]=(o*T-a*U-l*_)*H,t[13]=(e*U-n*T+i*_)*H,t[14]=(v*A-g*w-p*b)*H,t[15]=(h*w-d*A+u*b)*H,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,m=r*h,g=r*d,v=a*h,p=a*d,f=o*d,b=l*c,A=l*h,M=l*d,w=n.x,S=n.y,C=n.z;return i[0]=(1-(v+f))*w,i[1]=(m+M)*w,i[2]=(g-A)*w,i[3]=0,i[4]=(m-M)*S,i[5]=(1-(u+f))*S,i[6]=(p+b)*S,i[7]=0,i[8]=(g+A)*C,i[9]=(p-b)*C,i[10]=(1-(u+v))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ti.set(i[0],i[1],i[2]).length(),o=Ti.set(i[4],i[5],i[6]).length(),l=Ti.set(i[8],i[9],i[10]).length();r<0&&(a=-a),on.copy(this);let c=1/a,h=1/o,d=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,e.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=un,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),m=(n+i)/(n-i),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===un)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===_s)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=un,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),m=-(n+i)/(n-i),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===un)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===_s)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ti=new D,on=new oe,Ku=new D(0,0,0),ju=new D(1,1,1),Xn=new D,Qs=new D,qe=new D,cc=new oe,hc=new Mn,Jn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hc.setFromEuler(this),this.setFromQuaternion(hc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var Xi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qu=0,uc=new D,Ei=new Mn,Cn=new oe,tr=new D,os=new D,td=new D,ed=new Mn,dc=new D(1,0,0),fc=new D(0,1,0),pc=new D(0,0,1),mc={type:"added"},nd={type:"removed"},Ai={type:"childadded",child:null},yo={type:"childremoved",child:null},Ze=class s extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new D,e=new Jn,n=new Mn,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ft}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(dc,t)}rotateY(t){return this.rotateOnAxis(fc,t)}rotateZ(t){return this.rotateOnAxis(pc,t)}translateOnAxis(t,e){return uc.copy(t).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dc,t)}translateY(t){return this.translateOnAxis(fc,t)}translateZ(t){return this.translateOnAxis(pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?tr.copy(t):tr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(os,tr,this.up):Cn.lookAt(tr,os,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),Ei.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nd),yo.child=t,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,td),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,ed,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ze.DEFAULT_UP=new D(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ot=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},id={type:"move"},qi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(id)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},er={h:0,s:0,l:0};function Mo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=pl(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Mo(a,r,t+1/3),this.g=Mo(a,r,t),this.b=Mo(a,r,t-1/3)}return Zt.colorSpaceToWorking(this,i),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Lt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let n=gh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return Zt.workingToColorSpace(Oe.copy(this),t),Math.round(Jt(Oe.r*255,0,255))*65536+Math.round(Jt(Oe.g*255,0,255))*256+Math.round(Jt(Oe.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(Oe.copy(this),e);let n=Oe.r,i=Oe.g,r=Oe.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=we){Zt.workingToColorSpace(Oe.copy(this),t);let e=Oe.r,n=Oe.g,i=Oe.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(er);let n=ps(qn.h,er.h,e),i=ps(qn.s,er.s,e),r=ps(qn.l,er.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new qt;qt.NAMES=gh;var Ms=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ln=new D,Rn=new D,So=new D,In=new D,Ci=new D,Ri=new D,gc=new D,bo=new D,wo=new D,To=new D,Eo=new xe,Ao=new xe,Co=new xe,Dn=class s{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ln.subVectors(i,e),Rn.subVectors(n,e),So.subVectors(t,e);let a=ln.dot(ln),o=ln.dot(Rn),l=ln.dot(So),c=Rn.dot(Rn),h=Rn.dot(So),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Eo.setScalar(0),Ao.setScalar(0),Co.setScalar(0),Eo.fromBufferAttribute(t,e),Ao.fromBufferAttribute(t,n),Co.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Eo,r.x),a.addScaledVector(Ao,r.y),a.addScaledVector(Co,r.z),a}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),Rn.subVectors(t,e),ln.cross(Rn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),ln.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Ci.subVectors(i,n),Ri.subVectors(r,n),bo.subVectors(t,n);let l=Ci.dot(bo),c=Ri.dot(bo);if(l<=0&&c<=0)return e.copy(n);wo.subVectors(t,i);let h=Ci.dot(wo),d=Ri.dot(wo);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ci,a);To.subVectors(t,r);let m=Ci.dot(To),g=Ri.dot(To);if(g>=0&&m<=g)return e.copy(r);let v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ri,o);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return gc.subVectors(r,i),o=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(gc,o);let f=1/(p+v+u);return a=v*f,o=u*f,e.copy(n).addScaledVector(Ci,a).addScaledVector(Ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Sn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),ir.subVectors(this.max,ls),Ii.subVectors(t.a,ls),Pi.subVectors(t.b,ls),Li.subVectors(t.c,ls),Yn.subVectors(Pi,Ii),$n.subVectors(Li,Pi),ci.subVectors(Ii,Li);let e=[0,-Yn.z,Yn.y,0,-$n.z,$n.y,0,-ci.z,ci.y,Yn.z,0,-Yn.x,$n.z,0,-$n.x,ci.z,0,-ci.x,-Yn.y,Yn.x,0,-$n.y,$n.x,0,-ci.y,ci.x,0];return!Ro(e,Ii,Pi,Li,ir)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,Ii,Pi,Li,ir))?!1:(sr.crossVectors(Yn,$n),e=[sr.x,sr.y,sr.z],Ro(e,Ii,Pi,Li,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Pn=[new D,new D,new D,new D,new D,new D,new D,new D],cn=new D,nr=new Sn,Ii=new D,Pi=new D,Li=new D,Yn=new D,$n=new D,ci=new D,ls=new D,ir=new D,sr=new D,hi=new D;function Ro(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){hi.fromArray(s,r);let o=i.x*Math.abs(hi.x)+i.y*Math.abs(hi.y)+i.z*Math.abs(hi.z),l=t.dot(hi),c=e.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var be=new D,rr=new Kt,sd=0,$e=class extends yn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uh,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rr.fromBufferAttribute(this,e),rr.applyMatrix3(t),this.setXY(e,rr.x,rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ss=class extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var bs=class extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}},rd=new Sn,cs=new D,Io=new D,Un=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):rd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);let e=cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(cs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(Io)),this.expandByPoint(cs.copy(t.center).sub(Io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ad=0,tn=new oe,Po=new Ze,Di=new D,Ye=new Sn,hs=new Sn,Re=new D,Te=class s extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Iu(t)?bs:Ss)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return Po.lookAt(t),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(Ye.min,hs.min),Ye.expandByPoint(Re),Re.addVectors(Ye.max,hs.max),Ye.expandByPoint(Re)):(Ye.expandByPoint(hs.min),Ye.expandByPoint(hs.max))}Ye.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Re.fromBufferAttribute(o,c),l&&(Di.fromBufferAttribute(t,c),Re.add(Di)),i=Math.max(i,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $e(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new D,l[_]=new D;let c=new D,h=new D,d=new D,u=new Kt,m=new Kt,g=new Kt,v=new D,p=new D;function f(_,T,I){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,_),m.fromBufferAttribute(r,T),g.fromBufferAttribute(r,I),h.sub(c),d.sub(c),m.sub(u),g.sub(u);let U=1/(m.x*g.y-g.x*m.y);isFinite(U)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(U),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(U),o[_].add(v),o[T].add(v),o[I].add(v),l[_].add(p),l[T].add(p),l[I].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,T=b.length;_<T;++_){let I=b[_],U=I.start,B=I.count;for(let W=U,L=U+B;W<L;W+=3)f(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let A=new D,M=new D,w=new D,S=new D;function C(_){w.fromBufferAttribute(i,_),S.copy(w);let T=o[_];A.copy(T),A.sub(w.multiplyScalar(w.dot(T))).normalize(),M.crossVectors(S,T);let U=M.dot(l[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,U)}for(let _=0,T=b.length;_<T;++_){let I=b[_],U=I.start,B=I.count;for(let W=U,L=U+B;W<L;W+=3)C(t.getX(W+0)),C(t.getX(W+1)),C(t.getX(W+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let u=0,m=t.count;u<m;u+=3){let g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let f=0;f<h;f++)u[g++]=c[m++]}return new $e(u,h,d)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Lo=new D,od=new D,ld=new Ft,hn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Lo.subVectors(n,e).cross(od.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Lo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ld.getNormalMatrix(t),i=this.coplanarPoint(Lo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},cd=0,Kn=class extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Ki,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$o,this.blendDst=Zo,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Lt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Lt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Kt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ln=new D,Do=new D,ar=new D,or=new D,Yi=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Do.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),or.copy(this.origin).sub(Do);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ar),o=or.dot(this.direction),l=-or.dot(ar),c=or.lengthSq(),h=Math.abs(1-a*a),d,u,m,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Do).addScaledVector(ar,u),m}intersectSphere(t,e){if(t.radius<0)return null;Ln.subVectors(t.center,this.origin);let n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,m=t.z-a.z,g=e.x-a.x,v=e.y-a.y,p=e.z-a.z,f=n.x-a.x,b=n.y-a.y,A=n.z-a.z,M=Math.abs(l),w=Math.abs(c),S=Math.abs(h),C,_,T,I,U,B,W,L,H,Y,Z,rt;if(M>=w&&M>=S?(T=l,B=d,H=g,rt=f,l>=0?(C=c,_=h,I=u,U=m,W=v,L=p,Y=b,Z=A):(C=h,_=c,I=m,U=u,W=p,L=v,Y=A,Z=b)):w>=S?(T=c,B=u,H=v,rt=b,c>=0?(C=h,_=l,I=m,U=d,W=p,L=g,Y=A,Z=f):(C=l,_=h,I=d,U=m,W=g,L=p,Y=f,Z=A)):(T=h,B=m,H=p,rt=A,h>=0?(C=l,_=c,I=d,U=u,W=g,L=v,Y=f,Z=b):(C=c,_=l,I=u,U=d,W=v,L=g,Y=b,Z=f)),T===0)return null;let $=C/T,et=_/T,it=1/T,Ct=I-$*B,Tt=U-et*B,ne=W-$*H,Ht=L-et*H,jt=Y-$*rt,J=Z-et*rt,nt=jt*Ht-J*ne,yt=Ct*J-Tt*jt,Nt=ne*Tt-Ht*Ct;if(i){if(nt<0||yt<0||Nt<0)return null}else if((nt<0||yt<0||Nt<0)&&(nt>0||yt>0||Nt>0))return null;let _t=nt+yt+Nt;if(_t===0)return null;let Vt=it*(nt*B+yt*H+Nt*rt);return(_t>0?Vt<0:Vt>0)?null:this.at(Vt/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},xc=new oe,ui=new Yi,lr=new Un,_c=new D,cr=new D,hr=new D,ur=new D,No=new D,dr=new D,vc=new D,fr=new D,ee=class extends Ze{constructor(t=new Te,e=new ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(No.fromBufferAttribute(d,t),a?dr.addScaledVector(No,h):dr.addScaledVector(No.sub(e),h))}e.add(dr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!(lr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(lr,_c)===null||ui.origin.distanceToSquared(_c)>(t.far-t.near)**2))&&(xc.copy(r).invert(),ui.copy(t.ray).applyMatrix4(xc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let p=u[g],f=a[p.materialIndex],b=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,w=A;M<w;M+=3){let S=o.getX(M),C=o.getX(M+1),_=o.getX(M+2);i=pr(this,f,t,n,c,h,d,S,C,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let b=o.getX(p),A=o.getX(p+1),M=o.getX(p+2);i=pr(this,a,t,n,c,h,d,b,A,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let p=u[g],f=a[p.materialIndex],b=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,w=A;M<w;M+=3){let S=M,C=M+1,_=M+2;i=pr(this,f,t,n,c,h,d,S,C,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let b=p,A=p+1,M=p+2;i=pr(this,a,t,n,c,h,d,b,A,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function hd(s,t,e,n,i,r,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ii,o),l===null)return null;fr.copy(o),fr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(fr);return c<e.near||c>e.far?null:{distance:c,point:fr.clone(),object:s}}function pr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,cr),s.getVertexPosition(l,hr),s.getVertexPosition(c,ur);let h=hd(s,t,e,n,cr,hr,ur,vc);if(h){let d=new D;Dn.getBarycoord(vc,cr,hr,ur,d),i&&(h.uv=Dn.getInterpolatedAttribute(i,o,l,c,d,new Kt)),r&&(h.uv1=Dn.getInterpolatedAttribute(r,o,l,c,d,new Kt)),a&&(h.normal=Dn.getInterpolatedAttribute(a,o,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Dn.getNormal(cr,hr,ur,u.normal),h.face=u,h.barycoord=d}return h}var ws=class extends Ve{constructor(t=null,e=1,n=1,i,r,a,o,l,c=_e,h=_e,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ts=class extends $e{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ni=new oe,yc=new oe,mr=[],Mc=new Sn,ud=new oe,us=new ee,ds=new Un,$i=class extends ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ud)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),Mc.copy(t.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Mc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),ds.copy(t.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(n),t.ray.intersectsSphere(ds)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ni),yc.multiplyMatrices(n,Ni),us.matrixWorld=yc,us.raycast(t,mr);for(let a=0,o=mr.length;a<o;a++){let l=mr[a];l.instanceId=r,l.object=this,e.push(l)}mr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ws(new Float32Array(i*this.count),i,this.count,ca,en));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},di=new Un,dd=new Kt(.5,.5),gr=new D,Es=class{constructor(t=new hn,e=new hn,n=new hn,i=new hn,r=new hn,a=new hn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],m=r[7],g=r[8],v=r[9],p=r[10],f=r[11],b=r[12],A=r[13],M=r[14],w=r[15];if(i[0].setComponents(c-a,m-h,f-g,w-b).normalize(),i[1].setComponents(c+a,m+h,f+g,w+b).normalize(),i[2].setComponents(c+o,m+d,f+v,w+A).normalize(),i[3].setComponents(c-o,m-d,f-v,w-A).normalize(),n)i[4].setComponents(l,u,p,M).normalize(),i[5].setComponents(c-l,m-u,f-p,w-M).normalize();else if(i[4].setComponents(c-l,m-u,f-p,w-M).normalize(),e===un)i[5].setComponents(c+l,m+u,f+p,w+M).normalize();else if(e===_s)i[5].setComponents(l,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){di.center.set(0,0,0);let e=dd.distanceTo(t.center);return di.radius=.7071067811865476+e,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(gr.x=i.normal.x>0?t.max.x:t.min.x,gr.y=i.normal.y>0?t.max.y:t.min.y,gr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(gr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bn=class extends Kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},zr=new D,kr=new D,Sc=new oe,fs=new Yi,xr=new Un,Uo=new D,bc=new D,jn=class extends Ze{constructor(t=new Te,e=new bn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)zr.fromBufferAttribute(e,i-1),kr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=zr.distanceTo(kr);t.setAttribute("lineDistance",new fe(n,1))}else Lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(i),xr.radius+=r,t.ray.intersectsSphere(xr)===!1)return;Sc.copy(i).invert(),fs.copy(t.ray).applyMatrix4(Sc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=c){let f=h.getX(v),b=h.getX(v+1),A=_r(this,t,fs,l,f,b,v);A&&e.push(A)}if(this.isLineLoop){let v=h.getX(g-1),p=h.getX(m),f=_r(this,t,fs,l,v,p,g-1);f&&e.push(f)}}else{let m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=c){let f=_r(this,t,fs,l,v,v+1,v);f&&e.push(f)}if(this.isLineLoop){let v=_r(this,t,fs,l,g-1,m,g-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _r(s,t,e,n,i,r,a){let o=s.geometry.attributes.position;if(zr.fromBufferAttribute(o,i),kr.fromBufferAttribute(o,r),e.distanceSqToSegment(zr,kr,Uo,bc)>n)return;Uo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Uo);if(!(c<t.near||c>t.far))return{distance:c,point:bc.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var wc=new D,Tc=new D,As=class extends jn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)wc.fromBufferAttribute(e,i),Tc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wc.distanceTo(Tc);t.setAttribute("lineDistance",new fe(n,1))}else Lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Cs=class extends Ve{constructor(t=[],e=si,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pi=class extends Ve{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qn=class extends Ve{constructor(t,e,n=fn,i,r,a,o=_e,l=_e,c,h=vn,d=1){if(h!==vn&&h!==ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Vr=class extends Qn{constructor(t,e=fn,n=si,i,r,a=_e,o=_e,l,c=vn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Rs=class extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ie=class s extends Te{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(d,2));function g(v,p,f,b,A,M,w,S,C,_,T){let I=M/C,U=w/_,B=M/2,W=w/2,L=S/2,H=C+1,Y=_+1,Z=0,rt=0,$=new D;for(let et=0;et<Y;et++){let it=et*U-W;for(let Ct=0;Ct<H;Ct++){let Tt=Ct*I-B;$[v]=Tt*b,$[p]=it*A,$[f]=L,c.push($.x,$.y,$.z),$[v]=0,$[p]=0,$[f]=S>0?1:-1,h.push($.x,$.y,$.z),d.push(Ct/C),d.push(1-et/_),Z+=1}}for(let et=0;et<_;et++)for(let it=0;it<C;it++){let Ct=u+it+H*et,Tt=u+it+H*(et+1),ne=u+(it+1)+H*(et+1),Ht=u+(it+1)+H*et;l.push(Ct,Tt,Ht),l.push(Tt,ne,Ht),rt+=6}o.addGroup(m,rt,T),m+=rt,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Is=class s extends Te{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],m=[],g=0,v=[],p=n/2,f=0;b(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new fe(d,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(m,2));function b(){let M=new D,w=new D,S=0,C=(e-t)/n;for(let _=0;_<=r;_++){let T=[],I=_/r,U=I*(e-t)+t;for(let B=0;B<=i;B++){let W=B/i,L=W*l+o,H=Math.sin(L),Y=Math.cos(L);w.x=U*H,w.y=-I*n+p,w.z=U*Y,d.push(w.x,w.y,w.z),M.set(H,C,Y).normalize(),u.push(M.x,M.y,M.z),m.push(W,1-I),T.push(g++)}v.push(T)}for(let _=0;_<i;_++)for(let T=0;T<r;T++){let I=v[T][_],U=v[T+1][_],B=v[T+1][_+1],W=v[T][_+1];(t>0||T!==0)&&(h.push(I,U,W),S+=3),(e>0||T!==r-1)&&(h.push(U,B,W),S+=3)}c.addGroup(f,S,0),f+=S}function A(M){let w=g,S=new Kt,C=new D,_=0,T=M===!0?t:e,I=M===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,p*I,0),u.push(0,I,0),m.push(.5,.5),g++;let U=g;for(let B=0;B<=i;B++){let L=B/i*l+o,H=Math.cos(L),Y=Math.sin(L);C.x=T*Y,C.y=p*I,C.z=T*H,d.push(C.x,C.y,C.z),u.push(0,I,0),S.x=H*.5+.5,S.y=Y*.5*I+.5,m.push(S.x,S.y),g++}for(let B=0;B<i;B++){let W=w+B,L=U+B;M===!0?h.push(L,L+1,W):h.push(L+1,L,W),_+=3}c.addGroup(f,_,M===!0?1:2),f+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var vr=new D,yr=new D,Fo=new D,Mr=new Dn,Ps=class extends Te{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(zi*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},m=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:v,b:p,c:f}=Mr;if(v.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),Mr.getNormal(Fo),d[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,d[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,d[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){let A=(b+1)%3,M=d[b],w=d[A],S=Mr[h[b]],C=Mr[h[A]],_=`${M}_${w}`,T=`${w}_${M}`;T in u&&u[T]?(Fo.dot(u[T].normal)<=r&&(m.push(S.x,S.y,S.z),m.push(C.x,C.y,C.z)),u[T]=null):_ in u||(u[_]={index0:c[b],index1:c[A],normal:Fo.clone()})}}for(let g in u)if(u[g]){let{index0:v,index1:p}=u[g];vr.fromBufferAttribute(o,v),yr.fromBufferAttribute(o,p),m.push(vr.x,vr.y,vr.z),m.push(yr.x,yr.y,yr.z)}this.setAttribute("position",new fe(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var wn=class s extends Te{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,m=[],g=[],v=[],p=[];for(let f=0;f<h;f++){let b=f*u-a;for(let A=0;A<c;A++){let M=A*d-r;g.push(M,-b,0),v.push(0,0,1),p.push(A/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){let A=b+c*f,M=b+c*(f+1),w=b+1+c*(f+1),S=b+1+c*f;m.push(A,M,S),m.push(M,w,S)}this.setIndex(m),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Zi=class s extends Te{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/i,m=new D,g=new Kt;for(let v=0;v<=i;v++){for(let p=0;p<=n;p++){let f=r+p/n*a;m.x=d*Math.cos(f),m.y=d*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<i;v++){let p=v*(n+1);for(let f=0;f<n;f++){let b=f+p,A=b,M=b+n+1,w=b+n+2,S=b+1;o.push(A,M,S),o.push(M,w,S)}}this.setIndex(o),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ls=class s extends Te{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new D,u=new D,m=[],g=[],v=[],p=[];for(let f=0;f<=n;f++){let b=[],A=f/n,M=a+A*o,w=t*Math.cos(M),S=Math.sqrt(t*t-w*w),C=0;f===0&&a===0?C=.5/e:f===n&&l===Math.PI&&(C=-.5/e);for(let _=0;_<=e;_++){let T=_/e,I=i+T*r;d.x=-S*Math.cos(I),d.y=w,d.z=S*Math.sin(I),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(T+C,1-A),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){let A=h[f][b+1],M=h[f][b],w=h[f+1][b],S=h[f+1][b+1];(f!==0||a>0)&&m.push(A,M,S),(f!==n-1||l<Math.PI)&&m.push(M,w,S)}this.setIndex(m),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function _i(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Ec(i))i.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Ec(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Be(s){let t={};for(let e=0;e<s.length;e++){let n=_i(s[e]);for(let i in n)t[i]=n[i]}return t}function Ec(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function fd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ml(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var xh={clone:_i,merge:Be},pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_i(t.uniforms),this.uniformsGroups=fd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Kt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new xe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ft().fromArray(i.value);break;case"m4":this.uniforms[n].value=new oe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Hr=class extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Gr=class extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wr=class extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ui(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Oo(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var ti=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xr=class extends ti{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zo,endingEnd:zo}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ko:r=t,o=2*e-n;break;case Vo:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ko:a=t,l=2*n-e;break;case Vo:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-e)/(i-e),v=g*g,p=v*g,f=-u*p+2*u*v-u*g,b=(1+u)*p+(-1.5-2*u)*v+(-.5+u)*g+1,A=(-1-m)*p+(1.5+m)*v+.5*g,M=m*p-m*v;for(let w=0;w!==o;++w)r[w]=f*a[h+w]+b*a[c+w]+A*a[l+w]+M*a[d+w];return r}},qr=class extends ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Yr=class extends ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},$r=class extends ti{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(i-e),v=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*v+a[l+p]*g;return r}let u=o*2,m=t-1;for(let g=0;g!==o;++g){let v=a[c+g],p=a[l+g],f=m*u+g*2,b=d[f],A=d[f+1],M=t*u+g*2,w=h[M],S=h[M+1],C=xd(n,e,b,w,i);r[g]=_h(C,v,A,S,p)}return r}};function _h(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function gd(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function xd(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=_h(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=gd(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Je=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ui(e,this.TimeBufferType),this.values=Ui(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ui(t.times,Array),values:Ui(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Oo(t.settings)&&(n.settings={inTangents:Ui(t.settings.inTangents,Array),outTangents:Ui(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new $r(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ms:e=this.InterpolantFactoryMethodDiscrete;break;case Ur:e=this.InterpolantFactoryMethodLinear;break;case wr:e=this.InterpolantFactoryMethodSmooth;break;case Bo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Lt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return Ur;case this.InterpolantFactoryMethodSmooth:return wr;case this.InterpolantFactoryMethodBezier:return Bo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Oo(this.settings)&&(Ac(this.settings.inTangents,t),Ac(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ut("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ut("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ut("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ut("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Pu(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Ut("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===wr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let d=o*n,u=d-n,m=d+n;for(let g=0;g!==n;++g){let v=e[d+g];if(v!==e[u+g]||v!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Oo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Ac(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Je.prototype.ValueTypeName="";Je.prototype.TimeBufferType=Float32Array;Je.prototype.ValueBufferType=Float32Array;Je.prototype.DefaultInterpolation=Ur;var ei=class extends Je{constructor(t,e,n){super(t,e,n)}};ei.prototype.ValueTypeName="bool";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=ms;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends Je{constructor(t,e,n,i){super(t,e,n,i)}};Zr.prototype.ValueTypeName="color";var Jr=class extends Je{constructor(t,e,n,i){super(t,e,n,i)}};Jr.prototype.ValueTypeName="number";var Kr=class extends ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Mn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ds=class extends Je{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Kr(this.times,this.values,this.getValueSize(),t)}};Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends Je{constructor(t,e,n){super(t,e,n)}};ni.prototype.ValueTypeName="string";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=ms;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var jr=class extends Je{constructor(t,e,n,i){super(t,e,n,i)}};jr.prototype.ValueTypeName="vector";var Qr=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vh=new Qr,ta=class{constructor(t){this.manager=t!==void 0?t:vh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ta.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr=new D,br=new Mn,xn=new D,Ns=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sr,br,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sr,br,xn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Sr,br,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sr,br,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zn=new D,Cc=new Kt,Rc=new Kt,We=class extends Ns{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Gi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,Rc),e.subVectors(Rc,Cc)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var mi=class extends Ns{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Fi=-90,Oi=1,ea=class extends Ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new We(Fi,Oi,t,e);i.layers=this.layers,this.add(i);let r=new We(Fi,Oi,t,e);r.layers=this.layers,this.add(r);let a=new We(Fi,Oi,t,e);a.layers=this.layers,this.add(a);let o=new We(Fi,Oi,t,e);o.layers=this.layers,this.add(o);let l=new We(Fi,Oi,t,e);l.layers=this.layers,this.add(l);let c=new We(Fi,Oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},na=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var gl="\\[\\]\\.:\\/",_d=new RegExp("["+gl+"]","g"),xl="[^"+gl+"]",vd="[^"+gl.replace("\\.","")+"]",yd=/((?:WC+[\/:])*)/.source.replace("WC",xl),Md=/(WCOD+)?/.source.replace("WCOD",vd),Sd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl),bd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl),wd=new RegExp("^"+yd+Md+Sd+bd+"$"),Td=["material","materials","bones","map"],Ho=class{constructor(t,e,n){let i=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_d,"")}static parseTrackName(t){let e=wd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Td.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=Ho;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W0=new Float32Array(1);var Ic=new oe,Us=class{constructor(t,e,n=0,i=1/0){this.ray=new Yi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Xi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ut("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ic.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ic),this}intersectObject(t,e=!0,n=[]){return Go(t,this,n,e),n.sort(Pc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Go(t[i],this,n,e);return n.sort(Pc),n}};function Pc(s,t){return s.distance-t.distance}function Go(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Go(r[a],t,e,!0)}}var Wo=class s{static{s.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};function _l(s,t,e,n){let i=Ed(n);switch(e){case cl:return s*t;case ca:return s*t/i.components*i.byteLength;case ha:return s*t/i.components*i.byteLength;case oi:return s*t*2/i.components*i.byteLength;case ua:return s*t*2/i.components*i.byteLength;case hl:return s*t*3/i.components*i.byteLength;case nn:return s*t*4/i.components*i.byteLength;case da:return s*t*4/i.components*i.byteLength;case ks:case Vs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hs:case Gs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pa:case ga:return Math.max(s,16)*Math.max(t,8)/4;case fa:case ma:return Math.max(s,8)*Math.max(t,8)/2;case xa:case _a:case ya:case Ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case va:case Ws:case Sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case La:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Da:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Na:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Oa:case Ba:case za:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ka:case Va:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Xs:case Ha:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ed(s){switch(s){case Ke:case rl:return{byteLength:1,components:1};case ji:case al:case pn:return{byteLength:2,components:1};case oa:case la:return{byteLength:2,components:4};case fn:case aa:case en:return{byteLength:4,components:1};case ol:case ll:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Vh(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Cd(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<d.length;m++){let g=d[u],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let m=0,g=d.length;m<g;m++){let v=d[m];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Id=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ud=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Od=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,af="gl_FragColor = linearToOutputTexel( gl_FragColor );",of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Sf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Af=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,If=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Op=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,em=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:Rd,alphahash_pars_fragment:Id,alphamap_fragment:Pd,alphamap_pars_fragment:Ld,alphatest_fragment:Dd,alphatest_pars_fragment:Nd,aomap_fragment:Ud,aomap_pars_fragment:Fd,batching_pars_vertex:Od,batching_vertex:Bd,begin_vertex:zd,beginnormal_vertex:kd,bsdfs:Vd,iridescence_fragment:Hd,bumpmap_pars_fragment:Gd,clipping_planes_fragment:Wd,clipping_planes_pars_fragment:Xd,clipping_planes_pars_vertex:qd,clipping_planes_vertex:Yd,color_fragment:$d,color_pars_fragment:Zd,color_pars_vertex:Jd,color_vertex:Kd,common:jd,cube_uv_reflection_fragment:Qd,defaultnormal_vertex:tf,displacementmap_pars_vertex:ef,displacementmap_vertex:nf,emissivemap_fragment:sf,emissivemap_pars_fragment:rf,colorspace_fragment:af,colorspace_pars_fragment:of,envmap_fragment:lf,envmap_common_pars_fragment:cf,envmap_pars_fragment:hf,envmap_pars_vertex:uf,envmap_physical_pars_fragment:Sf,envmap_vertex:df,fog_vertex:ff,fog_pars_vertex:pf,fog_fragment:mf,fog_pars_fragment:gf,gradientmap_pars_fragment:xf,lightmap_pars_fragment:_f,lights_lambert_fragment:vf,lights_lambert_pars_fragment:yf,lights_pars_begin:Mf,lights_toon_fragment:bf,lights_toon_pars_fragment:wf,lights_phong_fragment:Tf,lights_phong_pars_fragment:Ef,lights_physical_fragment:Af,lights_physical_pars_fragment:Cf,lights_fragment_begin:Rf,lights_fragment_maps:If,lights_fragment_end:Pf,lightprobes_pars_fragment:Lf,logdepthbuf_fragment:Df,logdepthbuf_pars_fragment:Nf,logdepthbuf_pars_vertex:Uf,logdepthbuf_vertex:Ff,map_fragment:Of,map_pars_fragment:Bf,map_particle_fragment:zf,map_particle_pars_fragment:kf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:Hf,morphinstance_vertex:Gf,morphcolor_vertex:Wf,morphnormal_vertex:Xf,morphtarget_pars_vertex:qf,morphtarget_vertex:Yf,normal_fragment_begin:$f,normal_fragment_maps:Zf,normal_pars_fragment:Jf,normal_pars_vertex:Kf,normal_vertex:jf,normalmap_pars_fragment:Qf,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:ep,clearcoat_pars_fragment:np,iridescence_pars_fragment:ip,opaque_fragment:sp,packing:rp,premultiplied_alpha_fragment:ap,project_vertex:op,dithering_fragment:lp,dithering_pars_fragment:cp,roughnessmap_fragment:hp,roughnessmap_pars_fragment:up,shadowmap_pars_fragment:dp,shadowmap_pars_vertex:fp,shadowmap_vertex:pp,shadowmask_pars_fragment:mp,skinbase_vertex:gp,skinning_pars_vertex:xp,skinning_vertex:_p,skinnormal_vertex:vp,specularmap_fragment:yp,specularmap_pars_fragment:Mp,tonemapping_fragment:Sp,tonemapping_pars_fragment:bp,transmission_fragment:wp,transmission_pars_fragment:Tp,uv_pars_fragment:Ep,uv_pars_vertex:Ap,uv_vertex:Cp,worldpos_vertex:Rp,background_vert:Ip,background_frag:Pp,backgroundCube_vert:Lp,backgroundCube_frag:Dp,cube_vert:Np,cube_frag:Up,depth_vert:Fp,depth_frag:Op,distance_vert:Bp,distance_frag:zp,equirect_vert:kp,equirect_frag:Vp,linedashed_vert:Hp,linedashed_frag:Gp,meshbasic_vert:Wp,meshbasic_frag:Xp,meshlambert_vert:qp,meshlambert_frag:Yp,meshmatcap_vert:$p,meshmatcap_frag:Zp,meshnormal_vert:Jp,meshnormal_frag:Kp,meshphong_vert:jp,meshphong_frag:Qp,meshphysical_vert:tm,meshphysical_frag:em,meshtoon_vert:nm,meshtoon_frag:im,points_vert:sm,points_frag:rm,shadow_vert:am,shadow_frag:om,sprite_vert:lm,sprite_frag:cm},mt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},An={basic:{uniforms:Be([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Be([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Be([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Be([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Be([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Be([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Be([mt.points,mt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Be([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Be([mt.common,mt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Be([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Be([mt.sprite,mt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:Be([mt.common,mt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:Be([mt.lights,mt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};An.physical={uniforms:Be([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var Xa={r:0,b:0,g:0},hm=new oe,Hh=new Ft;Hh.set(-1,0,0,0,1,0,0,0,1);function um(s,t,e,n,i,r){let a=new qt(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function m(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let M=b.backgroundBlurriness>0;A=t.get(A,M)}return A}function g(b){let A=!1,M=m(b);M===null?p(a,o):M&&M.isColor&&(p(M,1),A=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(b,A){let M=m(A);M&&(M.isCubeTexture||M.mapping===Bs)?(c===void 0&&(c=new ee(new Ie(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:_i(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hm.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hh),c.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ae,(h!==M||d!==M.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ee(new wn(2,2),new He({name:"BackgroundMaterial",uniforms:_i(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,A){b.getRGB(Xa,ml(s)),e.buffers.color.setClear(Xa.r,Xa.g,Xa.b,A,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:g,addToRenderList:v,dispose:f}}function dm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(U,B,W,L,H){let Y=!1,Z=d(U,L,W,B);r!==Z&&(r=Z,c(r.object)),Y=m(U,L,W,H),Y&&g(U,L,W,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(U,B,W,L),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(U){return s.bindVertexArray(U)}function h(U){return s.deleteVertexArray(U)}function d(U,B,W,L){let H=L.wireframe===!0,Y=n[B.id];Y===void 0&&(Y={},n[B.id]=Y);let Z=U.isInstancedMesh===!0?U.id:0,rt=Y[Z];rt===void 0&&(rt={},Y[Z]=rt);let $=rt[W.id];$===void 0&&($={},rt[W.id]=$);let et=$[H];return et===void 0&&(et=u(l()),$[H]=et),et}function u(U){let B=[],W=[],L=[];for(let H=0;H<e;H++)B[H]=0,W[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:L,object:U,attributes:{},index:null}}function m(U,B,W,L){let H=r.attributes,Y=B.attributes,Z=0,rt=W.getAttributes();for(let $ in rt)if(rt[$].location>=0){let it=H[$],Ct=Y[$];if(Ct===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(Ct=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(Ct=U.instanceColor)),it===void 0||it.attribute!==Ct||Ct&&it.data!==Ct.data)return!0;Z++}return r.attributesNum!==Z||r.index!==L}function g(U,B,W,L){let H={},Y=B.attributes,Z=0,rt=W.getAttributes();for(let $ in rt)if(rt[$].location>=0){let it=Y[$];it===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(it=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(it=U.instanceColor));let Ct={};Ct.attribute=it,it&&it.data&&(Ct.data=it.data),H[$]=Ct,Z++}r.attributes=H,r.attributesNum=Z,r.index=L}function v(){let U=r.newAttributes;for(let B=0,W=U.length;B<W;B++)U[B]=0}function p(U){f(U,0)}function f(U,B){let W=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;W[U]=1,L[U]===0&&(s.enableVertexAttribArray(U),L[U]=1),H[U]!==B&&(s.vertexAttribDivisor(U,B),H[U]=B)}function b(){let U=r.newAttributes,B=r.enabledAttributes;for(let W=0,L=B.length;W<L;W++)B[W]!==U[W]&&(s.disableVertexAttribArray(W),B[W]=0)}function A(U,B,W,L,H,Y,Z){Z===!0?s.vertexAttribIPointer(U,B,W,H,Y):s.vertexAttribPointer(U,B,W,L,H,Y)}function M(U,B,W,L){v();let H=L.attributes,Y=W.getAttributes(),Z=B.defaultAttributeValues;for(let rt in Y){let $=Y[rt];if($.location>=0){let et=H[rt];if(et===void 0&&(rt==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),rt==="instanceColor"&&U.instanceColor&&(et=U.instanceColor)),et!==void 0){let it=et.normalized,Ct=et.itemSize,Tt=t.get(et);if(Tt===void 0)continue;let ne=Tt.buffer,Ht=Tt.type,jt=Tt.bytesPerElement,J=Ht===s.INT||Ht===s.UNSIGNED_INT||et.gpuType===aa;if(et.isInterleavedBufferAttribute){let nt=et.data,yt=nt.stride,Nt=et.offset;if(nt.isInstancedInterleavedBuffer){for(let _t=0;_t<$.locationSize;_t++)f($.location+_t,nt.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let _t=0;_t<$.locationSize;_t++)p($.location+_t);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let _t=0;_t<$.locationSize;_t++)A($.location+_t,Ct/$.locationSize,Ht,it,yt*jt,(Nt+Ct/$.locationSize*_t)*jt,J)}else{if(et.isInstancedBufferAttribute){for(let nt=0;nt<$.locationSize;nt++)f($.location+nt,et.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let nt=0;nt<$.locationSize;nt++)p($.location+nt);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let nt=0;nt<$.locationSize;nt++)A($.location+nt,Ct/$.locationSize,Ht,it,Ct*jt,Ct/$.locationSize*nt*jt,J)}}else if(Z!==void 0){let it=Z[rt];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv($.location,it);break;case 3:s.vertexAttrib3fv($.location,it);break;case 4:s.vertexAttrib4fv($.location,it);break;default:s.vertexAttrib1fv($.location,it)}}}}b()}function w(){T();for(let U in n){let B=n[U];for(let W in B){let L=B[W];for(let H in L){let Y=L[H];for(let Z in Y)h(Y[Z].object),delete Y[Z];delete L[H]}}delete n[U]}}function S(U){if(n[U.id]===void 0)return;let B=n[U.id];for(let W in B){let L=B[W];for(let H in L){let Y=L[H];for(let Z in Y)h(Y[Z].object),delete Y[Z];delete L[H]}}delete n[U.id]}function C(U){for(let B in n){let W=n[B];for(let L in W){let H=W[L];if(H[U.id]===void 0)continue;let Y=H[U.id];for(let Z in Y)h(Y[Z].object),delete Y[Z];delete H[U.id]}}}function _(U){for(let B in n){let W=n[B],L=U.isInstancedMesh===!0?U.id:0,H=W[L];if(H!==void 0){for(let Y in H){let Z=H[Y];for(let rt in Z)h(Z[rt].object),delete Z[rt];delete H[Y]}delete W[L],Object.keys(W).length===0&&delete n[B]}}}function T(){I(),a=!0,r!==i&&(r=i,c(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function fm(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function pm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==nn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ke&&C!==en&&!_&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Lt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:M,maxSamples:w,samples:S}}function mm(s){let t=this,e=null,n=0,i=!1,r=!1,a=new hn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){let g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,f=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,A=b*4,M=f.clippingState||null;l.value=M,M=h(g,u,A,m);for(let w=0;w!==A;++w)M[w]=e[w];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let f=m+v*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let A=0,M=m;A!==v;++A,M+=4)a.copy(d[A]).applyMatrix4(b,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}var ns=4,gm=6,xm=20,_m=256,qs=new mi,yh=new qt,vl=null,yl=0,Ml=0,Sl=!1,vm=new D,vi=new D,Ya=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=vm}=r;vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vl,yl,Ml),this._renderer.xr.enabled=Sl,t.scissorTest=!1,es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===si||t.mapping===xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:pn,format:nn,colorSpace:gs,depthBuffer:!1},i=Mh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ym(r)),this._blurMaterial=Sm(r,t,e),this._ggxMaterial=Mm(r,t,e)}return i}_compileMaterial(t){let e=new ee(new Te,t);this._renderer.compile(e,qs)}_sceneToCubeUV(t,e,n,i,r){let l=new We(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,m=d.toneMapping;d.getClearColor(yh),d.toneMapping=dn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ee(new Ie,new ve({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,f=!1,b=t.background;b?b.isColor&&(p.color.copy(b),t.background=null,f=!0):(p.color.copy(yh),f=!0);for(let A=0;A<6;A++){let M=A%3;M===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):M===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let w=this._cubeSize;es(i,M*w,A>2?w:0,w,w),d.setRenderTarget(i),f&&d.render(v,l),d.render(t,l)}d.toneMapping=m,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===si||t.mapping===xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;es(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,qs)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,m=d*u,{_lodMax:g}=this,v=this._sizeLods[n],p=3*v*(n>g-ns?n-g+ns:0),f=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=g-e,es(r,p,f,3*v,2*v),i.setRenderTarget(r),i.render(o,qs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,es(t,p,f,3*v,2*v),i.setRenderTarget(t),i.render(o,qs)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-ns?i-this._lodMax+ns:0),u=4*(this._cubeSize-h);es(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,qs)}};function ym(s){let t=[],e=[],n=s,i=s-ns+1+gm;for(let r=0;r<i;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,m=3,g=new Float32Array(m*u*d),v=new Float32Array(m*u*d);for(let f=0;f<d;f++){let b=f%3*2/3-1,A=f>2?0:-1,M=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];g.set(M,m*u*f);for(let w=0;w<u;w++){let S=h[w*2]*2-1,C=h[w*2+1]*2-1;f===0?vi.set(1,C,S):f===1?vi.set(-S,1,-C):f===2?vi.set(-S,C,1):f===3?vi.set(-1,C,-S):f===4?vi.set(-S,-1,C):vi.set(S,C,-1),vi.toArray(v,(f*u+w)*m)}}let p=new Te;p.setAttribute("position",new $e(g,m)),p.setAttribute("outputDirection",new $e(v,m)),e.push(new ee(p,null)),n>ns&&n--}return{lodMeshes:e,sizeLods:t}}function Mh(s,t,e){let n=new Xe(s,t,e);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function es(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Mm(s,t,e){return new He({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_m,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ja(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Sm(s,t,e){return new He({name:"SphericalGaussianBlur",defines:{SAMPLES:xm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ja(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Sh(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function bh(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Ja(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $a=class extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Cs(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ie(5,5,5),r=new He({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Tn});r.uniforms.tEquirect.value=e;let a=new ee(i,r),o=e.minFilter;return e.minFilter===ri&&(e.minFilter=De),new ea(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function bm(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===ia||m===sa)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new $a(g.height);return v.fromEquirectangularTexture(s,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,g=m===ia||m===sa,v=m===si||m===xi;if(g||v){let p=e.get(u),f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Ya(s)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let b=u.image;return g&&b&&b.height>0||v&&b&&l(b)?(n===null&&(n=new Ya(s)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===ia?u.mapping=si:m===sa&&(u.mapping=xi),u}function l(u){let m=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&m++;return m===g}function c(u){let m=u.target;m.removeEventListener("dispose",c);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function wm(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&fi("WebGLRenderer: "+n+" extension not supported."),i}}}function Tm(s,t,e,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let m in u)t.update(u[m],s.ARRAY_BUFFER)}function c(d){let u=[],m=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(m!==null){let b=m.array;v=m.version;for(let A=0,M=b.length;A<M;A+=3){let w=b[A+0],S=b[A+1],C=b[A+2];u.push(w,S,S,C,C,w)}}else{let b=g.array;v=g.version;for(let A=0,M=b.length/3-1;A<M;A+=3){let w=A+0,S=A+1,C=A+2;u.push(w,S,S,C,C,w)}}let p=new(g.count>=65535?bs:Ss)(u,1);p.version=v;let f=r.get(d);f&&t.remove(f),r.set(d,p)}function h(d){let u=r.get(d);if(u){let m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Em(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,m){m!==0&&(s.drawElementsInstanced(n,u,r,d*a,m),e.update(u,n,m))}function h(d,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,m);let v=0;for(let p=0;p<m;p++)v+=u[p];e.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Am(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Ut("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Cm(s,t,e){let n=new WeakMap,i=new xe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],A=0;m===!0&&(A=1),g===!0&&(A=2),v===!0&&(A=3);let M=o.attributes.position.count*A,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let S=new Float32Array(M*w*4*d),C=new ys(S,M,w,d);C.type=en,C.needsUpdate=!0;let _=A*4;for(let I=0;I<d;I++){let U=p[I],B=f[I],W=b[I],L=M*w*4*I;for(let H=0;H<U.count;H++){let Y=H*_;m===!0&&(i.fromBufferAttribute(U,H),S[L+Y+0]=i.x,S[L+Y+1]=i.y,S[L+Y+2]=i.z,S[L+Y+3]=0),g===!0&&(i.fromBufferAttribute(B,H),S[L+Y+4]=i.x,S[L+Y+5]=i.y,S[L+Y+6]=i.z,S[L+Y+7]=0),v===!0&&(i.fromBufferAttribute(W,H),S[L+Y+8]=i.x,S[L+Y+9]=i.y,S[L+Y+10]=i.z,S[L+Y+11]=W.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new Kt(M,w)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Rm(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Im={[Ko]:"LINEAR_TONE_MAPPING",[jo]:"REINHARD_TONE_MAPPING",[Qo]:"CINEON_TONE_MAPPING",[tl]:"ACES_FILMIC_TONE_MAPPING",[nl]:"AGX_TONE_MAPPING",[il]:"NEUTRAL_TONE_MAPPING",[el]:"CUSTOM_TONE_MAPPING"};function Pm(s,t,e,n,i,r){let a=new Xe(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Te;c.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new fe([0,2,0,0,2,0],2));let h=new Hr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ee(c,h),u=new mi(-1,1,1,-1,0,1),m=null,g=null,v=!1,p,f=null,b=[],A=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),l!==null&&l.setSize(M,w);for(let S=0;S<b.length;S++){let C=b[S];C.setSize&&C.setSize(M,w)}},this.setEffects=function(M){b=M,A=b.length>0&&b[0].isRenderPass===!0;let w=a.width,S=a.height;b.length>0&&o===null&&(o=new Xe(w,S,{type:pn,depthBuffer:!1,stencilBuffer:!1}),l=new Xe(w,S,{type:pn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<b.length;C++){let _=b[C];_.setSize&&_.setSize(w,S)}},this.begin=function(M,w){if(v||M.toneMapping===dn&&b.length===0)return!1;if(f=w,w!==null){let S=w.width,C=w.height;(a.width!==S||a.height!==C)&&this.setSize(S,C)}return A===!1&&M.setRenderTarget(a),p=M.toneMapping,M.toneMapping=dn,!0},this.hasRenderPass=function(){return A},this.end=function(M,w){M.toneMapping=p,v=!0;let S=a,C=o;for(let _=0;_<b.length;_++){let T=b[_];T.enabled!==!1&&(T.render(M,C,S,w),T.needsSwap!==!1&&(S=C,C=C===o?l:o))}if(m!==M.outputColorSpace||g!==M.toneMapping){m=M.outputColorSpace,g=M.toneMapping,h.defines={},Zt.getTransfer(m)===ae&&(h.defines.SRGB_TRANSFER="");let _=Im[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(f),M.render(d,u),f=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Gh=new Ve,Tl=new Qn(1,1),Wh=new ys,Xh=new Br,qh=new Cs,wh=[],Th=[],Eh=new Float32Array(16),Ah=new Float32Array(9),Ch=new Float32Array(4);function ss(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=wh[i];if(r===void 0&&(r=new Float32Array(i),wh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ae(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ka(s,t){let e=Th[t];e===void 0&&(e=new Int32Array(t),Th[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Lm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Dm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function Nm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function Um(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function Fm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Ch.set(n),s.uniformMatrix2fv(this.addr,!1,Ch),Ce(e,n)}}function Om(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Ah.set(n),s.uniformMatrix3fv(this.addr,!1,Ah),Ce(e,n)}}function Bm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Eh.set(n),s.uniformMatrix4fv(this.addr,!1,Eh),Ce(e,n)}}function zm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function km(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function Vm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function Hm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function Gm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Wm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function Xm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function qm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function Ym(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Tl.compareFunction=e.isReversedDepthBuffer()?Wa:Ga,r=Tl):r=Gh,e.setTexture2D(t||r,i)}function $m(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Xh,i)}function Zm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||qh,i)}function Jm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Wh,i)}function Km(s){switch(s){case 5126:return Lm;case 35664:return Dm;case 35665:return Nm;case 35666:return Um;case 35674:return Fm;case 35675:return Om;case 35676:return Bm;case 5124:case 35670:return zm;case 35667:case 35671:return km;case 35668:case 35672:return Vm;case 35669:case 35673:return Hm;case 5125:return Gm;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Jm}}function jm(s,t){s.uniform1fv(this.addr,t)}function Qm(s,t){let e=ss(t,this.size,2);s.uniform2fv(this.addr,e)}function tg(s,t){let e=ss(t,this.size,3);s.uniform3fv(this.addr,e)}function eg(s,t){let e=ss(t,this.size,4);s.uniform4fv(this.addr,e)}function ng(s,t){let e=ss(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ig(s,t){let e=ss(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function sg(s,t){let e=ss(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function rg(s,t){s.uniform1iv(this.addr,t)}function ag(s,t){s.uniform2iv(this.addr,t)}function og(s,t){s.uniform3iv(this.addr,t)}function lg(s,t){s.uniform4iv(this.addr,t)}function cg(s,t){s.uniform1uiv(this.addr,t)}function hg(s,t){s.uniform2uiv(this.addr,t)}function ug(s,t){s.uniform3uiv(this.addr,t)}function dg(s,t){s.uniform4uiv(this.addr,t)}function fg(s,t,e){let n=this.cache,i=t.length,r=Ka(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Tl:a=Gh;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function pg(s,t,e){let n=this.cache,i=t.length,r=Ka(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Xh,r[a])}function mg(s,t,e){let n=this.cache,i=t.length,r=Ka(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||qh,r[a])}function gg(s,t,e){let n=this.cache,i=t.length,r=Ka(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Wh,r[a])}function xg(s){switch(s){case 5126:return jm;case 35664:return Qm;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}var El=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Km(e.type)}},Al=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xg(e.type)}},Cl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},bl=/(\w+)(\])?(\[|\.)?/g;function Rh(s,t){s.seq.push(t),s.map[t.id]=t}function _g(s,t,e){let n=s.name,i=n.length;for(bl.lastIndex=0;;){let r=bl.exec(n),a=bl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Rh(e,c===void 0?new El(o,s,t):new Al(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Cl(o),Rh(e,d)),e=d}}}var is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);_g(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Ih(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var vg=37297,yg=0;function Mg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ph=new Ft;function Sg(s){Zt._getMatrix(Ph,Zt.workingColorSpace,s);let t=`mat3( ${Ph.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(s)){case xs:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Lh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Mg(s.getShaderSource(t),o)}else return r}function bg(s,t){let e=Sg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var wg={[Ko]:"Linear",[jo]:"Reinhard",[Qo]:"Cineon",[tl]:"ACESFilmic",[nl]:"AgX",[il]:"Neutral",[el]:"Custom"};function Tg(s,t){let e=wg[t];return e===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var qa=new D;function Eg(){Zt.getLuminanceCoefficients(qa);let s=qa.x.toFixed(4),t=qa.y.toFixed(4),e=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ag(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function Cg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function $s(s){return s!==""}function Dh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(s){return s.replace(Ig,Lg)}var Pg=new Map;function Lg(s,t){let e=Xt[t];if(e===void 0){let n=Pg.get(t);if(n!==void 0)e=Xt[n],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Rl(e)}var Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(s){return s.replace(Dg,Ng)}function Ng(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ug={[Fs]:"SHADOWMAP_TYPE_PCF",[Ji]:"SHADOWMAP_TYPE_VSM"};function Fg(s){return Ug[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Og={[si]:"ENVMAP_TYPE_CUBE",[xi]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE_UV"};function Bg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Og[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var zg={[xi]:"ENVMAP_MODE_REFRACTION"};function kg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":zg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vg={[Jo]:"ENVMAP_BLENDING_MULTIPLY",[Qc]:"ENVMAP_BLENDING_MIX",[th]:"ENVMAP_BLENDING_ADD"};function Hg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Vg[s.combine]||"ENVMAP_BLENDING_NONE"}function Gg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wg(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Fg(e),c=Bg(e),h=kg(e),d=Hg(e),u=Gg(e),m=Ag(e),g=Cg(r),v=i.createProgram(),p,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),f.length>0&&(f+=`
`)):(p=[Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),f=[Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==dn?"#define TONE_MAPPING":"",e.toneMapping!==dn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==dn?Tg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,bg("linearToOutputTexel",e.outputColorSpace),Eg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($s).join(`
`)),a=Rl(a),a=Dh(a,e),a=Nh(a,e),o=Rl(o),o=Dh(o,e),o=Nh(o,e),a=Uh(a),o=Uh(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let A=b+p+a,M=b+f+o,w=Ih(i,i.VERTEX_SHADER,A),S=Ih(i,i.FRAGMENT_SHADER,M);i.attachShader(v,w),i.attachShader(v,S),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(U){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(v)||"",W=i.getShaderInfoLog(w)||"",L=i.getShaderInfoLog(S)||"",H=B.trim(),Y=W.trim(),Z=L.trim(),rt=!0,$=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(rt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,w,S);else{let et=Lh(i,w,"vertex"),it=Lh(i,S,"fragment");Ut("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+et+`
`+it)}else H!==""?Lt("WebGLProgram: Program Info Log:",H):(Y===""||Z==="")&&($=!1);$&&(U.diagnostics={runnable:rt,programLog:H,vertexShader:{log:Y,prefix:p},fragmentShader:{log:Z,prefix:f}})}i.deleteShader(w),i.deleteShader(S),_=new is(i,v),T=Rg(i,v)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(v,vg)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=S,this}var Xg=0,Il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pl(t),e.set(t,n)),n}},Pl=class{constructor(t){this.id=Xg++,this.code=t,this.usedTimes=0}};function qg(s){return s===oi||s===Ws||s===Xs}function Yg(s,t,e,n,i,r){let a=new Xi,o=new Il,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,T,I,U,B,W){let L=U.fog,H=B.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,rt=t.get(_.envMap||Y,Z),$=rt&&rt.mapping===Bs?rt.image.height:null,et=m[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Lt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let it=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ct=it!==void 0?it.length:0,Tt=0;H.morphAttributes.position!==void 0&&(Tt=1),H.morphAttributes.normal!==void 0&&(Tt=2),H.morphAttributes.color!==void 0&&(Tt=3);let ne,Ht,jt,J;if(et){let ue=An[et];ne=ue.vertexShader,Ht=ue.fragmentShader}else{ne=_.vertexShader,Ht=_.fragmentShader;let ue=o.getVertexShaderStage(_),se=o.getFragmentShaderStage(_);o.update(_,ue,se),jt=ue.id,J=se.id}let nt=s.getRenderTarget(),yt=s.state.buffers.depth.getReversed(),Nt=B.isInstancedMesh===!0,_t=B.isBatchedMesh===!0,Vt=!!_.map,ge=!!_.matcap,Bt=!!rt,Qt=!!_.aoMap,ie=!!_.lightMap,Gt=!!_.bumpMap&&_.wireframe===!1,ce=!!_.normalMap,ye=!!_.displacementMap,Le=!!_.emissiveMap,F=!!_.metalnessMap,ot=!!_.roughnessMap,R=_.anisotropy>0,zt=_.clearcoat>0,ft=_.dispersion>0,E=_.retroreflectivity>0,x=_.iridescence>0,O=_.sheen>0,X=_.transmission>0,K=R&&!!_.anisotropyMap,at=zt&&!!_.clearcoatMap,lt=zt&&!!_.clearcoatNormalMap,j=zt&&!!_.clearcoatRoughnessMap,tt=x&&!!_.iridescenceMap,ct=x&&!!_.iridescenceThicknessMap,Rt=O&&!!_.sheenColorMap,pt=O&&!!_.sheenRoughnessMap,ht=!!_.specularMap,It=!!_.specularColorMap,Dt=!!_.specularIntensityMap,kt=X&&!!_.transmissionMap,N=X&&!!_.thicknessMap,ut=!!_.gradientMap,Q=!!_.alphaMap,dt=_.alphaTest>0,vt=!!_.alphaHash,st=!!_.extensions,Pt=dn;_.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Pt=s.toneMapping);let Et={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:ne,fragmentShader:Ht,defines:_.defines,customVertexShaderID:jt,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:_t,batchingColor:_t&&B._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&B.instanceColor!==null,instancingMorph:Nt&&B.morphTexture!==null,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Vt,matcap:ge,envMap:Bt,envMapMode:Bt&&rt.mapping,envMapCubeUVHeight:$,aoMap:Qt,lightMap:ie,bumpMap:Gt,normalMap:ce,displacementMap:ye,emissiveMap:Le,normalMapObjectSpace:ce&&_.normalMapType===ih,normalMapTangentSpace:ce&&_.normalMapType===ul,packedNormalMap:ce&&_.normalMapType===ul&&qg(_.normalMap.format),metalnessMap:F,roughnessMap:ot,anisotropy:R,anisotropyMap:K,clearcoat:zt,clearcoatMap:at,clearcoatNormalMap:lt,clearcoatRoughnessMap:j,dispersion:ft,retroreflection:E,iridescence:x,iridescenceMap:tt,iridescenceThicknessMap:ct,sheen:O,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:ht,specularColorMap:It,specularIntensityMap:Dt,transmission:X,transmissionMap:kt,thicknessMap:N,gradientMap:ut,opaque:_.transparent===!1&&_.blending===Ki&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:dt,alphaHash:vt,combine:_.combine,mapUv:Vt&&g(_.map.channel),aoMapUv:Qt&&g(_.aoMap.channel),lightMapUv:ie&&g(_.lightMap.channel),bumpMapUv:Gt&&g(_.bumpMap.channel),normalMapUv:ce&&g(_.normalMap.channel),displacementMapUv:ye&&g(_.displacementMap.channel),emissiveMapUv:Le&&g(_.emissiveMap.channel),metalnessMapUv:F&&g(_.metalnessMap.channel),roughnessMapUv:ot&&g(_.roughnessMap.channel),anisotropyMapUv:K&&g(_.anisotropyMap.channel),clearcoatMapUv:at&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:lt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:pt&&g(_.sheenRoughnessMap.channel),specularMapUv:ht&&g(_.specularMap.channel),specularColorMapUv:It&&g(_.specularColorMap.channel),specularIntensityMapUv:Dt&&g(_.specularIntensityMap.channel),transmissionMapUv:kt&&g(_.transmissionMap.channel),thicknessMapUv:N&&g(_.thicknessMap.channel),alphaMapUv:Q&&g(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ce||R),vertexNormals:!!H.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(Vt||Q),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||H.attributes.normal===void 0&&ce===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Tt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Vt&&_.map.isVideoTexture===!0&&Zt.getTransfer(_.map.colorSpace)===ae,decodeVideoTextureEmissive:Le&&_.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(_.emissiveMap.colorSpace)===ae,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ee,flipSided:_.side===Ge,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:st&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&_.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function p(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)T.push(I),T.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(f(T,_),b(T,_),T.push(s.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function f(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function b(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){let T=m[_.type],I;if(T){let U=An[T];I=xh.clone(U.uniforms)}else I=_.uniforms;return I}function M(_,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new Wg(s,T,_,i),c.push(I),h.set(T,I)),I}function w(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:A,acquireProgram:M,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:C}}function $g(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Zg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Oh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Bh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,g,v,p,f){let b=s[t];return b===void 0?(b={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:f},s[t]=b):(b.id=u.id,b.object=u,b.geometry=m,b.material=g,b.materialVariant=a(u),b.groupOrder=v,b.renderOrder=u.renderOrder,b.z=p,b.group=f),t++,b}function l(u,m,g,v,p,f,b){b.reversedDepth===!0&&(p=-p);let A=o(u,m,g,v,p,f);g.transmission>0?n.push(A):g.transparent===!0?i.push(A):e.push(A)}function c(u,m,g,v,p,f){let b=o(u,m,g,v,p,f);g.transmission>0?n.unshift(b):g.transparent===!0?i.unshift(b):e.unshift(b)}function h(u,m){e.length>1&&e.sort(u||Zg),n.length>1&&n.sort(m||Oh),i.length>1&&i.sort(m||Oh)}function d(){for(let u=t,m=s.length;u<m;u++){let g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Jg(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Bh,s.set(n,[a])):i>=r.length?(a=new Bh,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Kg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new qt};break;case"SpotLight":e={position:new D,direction:new D,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function jg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Qg=0;function t0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function e0(s){let t=new Kg,e=jg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let i=new D,r=new oe,a=new oe;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let m=0,g=0,v=0,p=0,f=0,b=0,A=0,M=0,w=0,S=0,C=0,_=0,T=0,I=0;c.sort(t0);for(let B=0,W=c.length;B<W;B++){let L=c[B],H=L.color,Y=L.intensity,Z=L.distance,rt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===oi?rt=L.shadow.map.texture:rt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*Y,d+=H.g*Y,u+=H.b*Y;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],Y);I++}else if(L.isSunLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let et=L.shadow,it=e.get(L);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[g]=it,n.sunShadowMap[g]=rt;let Ct=et.getViewportCount();for(let Tt=0;Tt<Ct;Tt++)n.sunShadowMatrix[v+Tt]=et.getMatrix(Tt),n.sunShadowCascade[v+Tt]=et._cascadeData[Tt];v+=Ct,g++}n.sun[m]=$,m++}else if(L.isDirectionalLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let et=L.shadow,it=e.get(L);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,n.directionalShadow[p]=it,n.directionalShadowMap[p]=rt,n.directionalShadowMatrix[p]=L.shadow.matrix,w++}n.directional[p]=$,p++}else if(L.isSpotLight){let $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(H).multiplyScalar(Y),$.distance=Z,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[b]=$;let et=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,et.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[b]=et.matrix,L.castShadow){let it=e.get(L);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,n.spotShadow[b]=it,n.spotShadowMap[b]=rt,C++}b++}else if(L.isRectAreaLight){let $=t.get(L);$.color.copy(H).multiplyScalar(Y),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=$,A++}else if(L.isPointLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){let et=L.shadow,it=e.get(L);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,it.shadowCameraNear=et.camera.near,it.shadowCameraFar=et.camera.far,n.pointShadow[f]=it,n.pointShadowMap[f]=rt,n.pointShadowMatrix[f]=L.shadow.matrix,S++}n.point[f]=$,f++}else if(L.isHemisphereLight){let $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(Y),$.groundColor.copy(L.groundColor).multiplyScalar(Y),n.hemi[M]=$,M++}}A>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let U=n.hash;(U.sunLength!==m||U.directionalLength!==p||U.pointLength!==f||U.spotLength!==b||U.rectAreaLength!==A||U.hemiLength!==M||U.numSunShadows!==g||U.numDirectionalShadows!==w||U.numPointShadows!==S||U.numSpotShadows!==C||U.numSpotMaps!==_||U.numLightProbes!==I)&&(n.sun.length=m,n.directional.length=p,n.spot.length=b,n.rectArea.length=A,n.point.length=f,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,U.sunLength=m,U.directionalLength=p,U.pointLength=f,U.spotLength=b,U.rectAreaLength=A,U.hemiLength=M,U.numSunShadows=g,U.numDirectionalShadows=w,U.numPointShadows=S,U.numSpotShadows=C,U.numSpotMaps=_,U.numLightProbes=I,n.version=Qg++)}function l(c,h){let d=0,u=0,m=0,g=0,v=0,p=0,f=h.matrixWorldInverse;for(let b=0,A=c.length;b<A;b++){let M=c[b];if(M.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),d++}else if(M.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(f),u++}else if(M.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(f),g++}else if(M.isRectAreaLight){let w=n.rectArea[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let w=n.point[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:n}}function zh(s){let t=new e0(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function n0(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new zh(s),t.set(i,[o])):r>=a.length?(o=new zh(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var i0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,r0=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],a0=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],kh=new oe,Ys=new D,wl=new D;function o0(s,t,e){let n=new Es,i=new Kt,r=new Kt,a=new xe,o=new Gr,l=new Wr,c={},h=e.maxTextureSize,d={[ii]:Ge,[Ge]:ii,[Ee]:Ee},u=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:i0,fragmentShader:s0}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new Te;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ee(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let f=this.type;this.render=function(S,C,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===Nc&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fs);let T=s.getRenderTarget(),I=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Tn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let W=f!==this.type;W&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=S.length;L<H;L++){let Y=S[L],Z=Y.shadow;if(Z===void 0){Lt("WebGLShadowMap:",Y,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);let rt=Z.getFrameExtents();i.multiply(rt),r.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,Z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,Z.mapSize.y=r.y));let $=s.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=$,Z.map===null||W===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Ji){if(Y.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Xe(i.x,i.y,{format:oi,type:pn,minFilter:De,magFilter:De,generateMipmaps:!1}),Z.map.texture.name=Y.name+".shadowMap",Z.map.depthTexture=new Qn(i.x,i.y,en),Z.map.depthTexture.name=Y.name+".shadowMapDepth",Z.map.depthTexture.format=vn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=_e,Z.map.depthTexture.magFilter=_e}else Y.isPointLight?(Z.map=new $a(i.x),Z.map.depthTexture=new Vr(i.x,fn)):(Z.map=new Xe(i.x,i.y),Z.map.depthTexture=new Qn(i.x,i.y,fn)),Z.map.depthTexture.name=Y.name+".shadowMap",Z.map.depthTexture.format=vn,this.type===Fs?(Z.map.depthTexture.compareFunction=$?Wa:Ga,Z.map.depthTexture.minFilter=De,Z.map.depthTexture.magFilter=De):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=_e,Z.map.depthTexture.magFilter=_e);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==i.x||Z.map.height!==i.y)&&Z.map.setSize(i.x,i.y);let et=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();Y.isPointLight!==!0&&Z.updateMatrices(Y,_);for(let it=0;it<et;it++){let Ct=Z.getCamera(it);if(Y.isPointLight){let Tt=Z.camera,ne=Z.matrix,Ht=Y.distance||Tt.far;Ht!==Tt.far&&(Tt.far=Ht,Tt.updateProjectionMatrix()),Ys.setFromMatrixPosition(Y.matrixWorld),Tt.position.copy(Ys),wl.copy(Tt.position),wl.add(r0[it]),Tt.up.copy(a0[it]),Tt.lookAt(wl),Tt.updateMatrixWorld(),ne.makeTranslation(-Ys.x,-Ys.y,-Ys.z),kh.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(kh,Tt.coordinateSystem,Tt.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,it),s.clear();else{it===0&&(s.setRenderTarget(Z.map),s.clear());let Tt=Z.getViewport(it);a.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),B.viewport(a)}n=Z.getFrustum(it),M(C,_,Ct,Y,this.type)}Z.isPointLightShadow!==!0&&this.type===Ji&&b(Z,_),Z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(T,I,U)};function b(S,C){let _=t.update(v);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null?S.mapPass=new Xe(i.x,i.y,{format:oi,type:pn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(C,null,_,u,v,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(C,null,_,m,v,null)}function A(S,C,_,T){let I=null,U=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)I=U;else if(I=_.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let B=I.uuid,W=C.uuid,L=c[B];L===void 0&&(L={},c[B]=L);let H=L[W];H===void 0&&(H=I.clone(),L[W]=H,C.addEventListener("dispose",w)),I=H}if(I.visible=C.visible,I.wireframe=C.wireframe,T===Ji?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:d[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let B=s.properties.get(I);B.light=_}return I}function M(S,C,_,T,I){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===Ji)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let W=t.update(S),L=S.material;if(Array.isArray(L)){let H=W.groups;for(let Y=0,Z=H.length;Y<Z;Y++){let rt=H[Y],$=L[rt.materialIndex];if($&&$.visible){let et=A(S,$,T,I);S.onBeforeShadow(s,S,C,_,W,et,rt),s.renderBufferDirect(_,null,W,et,S,rt),S.onAfterShadow(s,S,C,_,W,et,rt)}}}else if(L.visible){let H=A(S,L,T,I);S.onBeforeShadow(s,S,C,_,W,H,null),s.renderBufferDirect(_,null,W,H,S,null),S.onAfterShadow(s,S,C,_,W,H,null)}}let B=S.children;for(let W=0,L=B.length;W<L;W++)M(B[W],C,_,T,I)}function w(S){S.target.removeEventListener("dispose",w);for(let _ in c){let T=c[_],I=S.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function l0(s,t){function e(){let N=!1,ut=new xe,Q=null,dt=new xe(0,0,0,0);return{setMask:function(vt){Q!==vt&&!N&&(s.colorMask(vt,vt,vt,vt),Q=vt)},setLocked:function(vt){N=vt},setClear:function(vt,st,Pt,Et,ue){ue===!0&&(vt*=Et,st*=Et,Pt*=Et),ut.set(vt,st,Pt,Et),dt.equals(ut)===!1&&(s.clearColor(vt,st,Pt,Et),dt.copy(ut))},reset:function(){N=!1,Q=null,dt.set(-1,0,0,0)}}}function n(){let N=!1,ut=!1,Q=null,dt=null,vt=null;return{setReversed:function(st){if(ut!==st){let Pt=t.get("EXT_clip_control");st?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),ut=st;let Et=vt;vt=null,this.setClear(Et)}},getReversed:function(){return ut},setTest:function(st){st?nt(s.DEPTH_TEST):yt(s.DEPTH_TEST)},setMask:function(st){Q!==st&&!N&&(s.depthMask(st),Q=st)},setFunc:function(st){if(ut&&(st=mh[st]),dt!==st){switch(st){case Er:s.depthFunc(s.NEVER);break;case Ar:s.depthFunc(s.ALWAYS);break;case Cr:s.depthFunc(s.LESS);break;case Vi:s.depthFunc(s.LEQUAL);break;case Rr:s.depthFunc(s.EQUAL);break;case Ir:s.depthFunc(s.GEQUAL);break;case Pr:s.depthFunc(s.GREATER);break;case Lr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=st}},setLocked:function(st){N=st},setClear:function(st){vt!==st&&(vt=st,ut&&(st=1-st),s.clearDepth(st))},reset:function(){N=!1,Q=null,dt=null,vt=null,ut=!1}}}function i(){let N=!1,ut=null,Q=null,dt=null,vt=null,st=null,Pt=null,Et=null,ue=null;return{setTest:function(se){N||(se?nt(s.STENCIL_TEST):yt(s.STENCIL_TEST))},setMask:function(se){ut!==se&&!N&&(s.stencilMask(se),ut=se)},setFunc:function(se,an,mn){(Q!==se||dt!==an||vt!==mn)&&(s.stencilFunc(se,an,mn),Q=se,dt=an,vt=mn)},setOp:function(se,an,mn){(st!==se||Pt!==an||Et!==mn)&&(s.stencilOp(se,an,mn),st=se,Pt=an,Et=mn)},setLocked:function(se){N=se},setClear:function(se){ue!==se&&(s.clearStencil(se),ue=se)},reset:function(){N=!1,ut=null,Q=null,dt=null,vt=null,st=null,Pt=null,Et=null,ue=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},m=new WeakMap,g=[],v=null,p=!1,f=null,b=null,A=null,M=null,w=null,S=null,C=null,_=new qt(0,0,0),T=0,I=!1,U=null,B=null,W=null,L=null,H=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,rt=0,$=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=rt>=1):$.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=rt>=2);let et=null,it={},Ct=s.getParameter(s.SCISSOR_BOX),Tt=s.getParameter(s.VIEWPORT),ne=new xe().fromArray(Ct),Ht=new xe().fromArray(Tt);function jt(N,ut,Q,dt){let vt=new Uint8Array(4),st=s.createTexture();s.bindTexture(N,st),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pt=0;Pt<Q;Pt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ut,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,vt):s.texImage2D(ut+Pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,vt);return st}let J={};J[s.TEXTURE_2D]=jt(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=jt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=jt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=jt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(s.DEPTH_TEST),a.setFunc(Vi),Gt(!1),ce(Xo),nt(s.CULL_FACE),Qt(Tn);function nt(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function yt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Nt(N,ut){return u[N]!==ut?(s.bindFramebuffer(N,ut),u[N]=ut,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ut),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ut),!0):!1}function _t(N,ut){let Q=g,dt=!1;if(N){Q=m.get(ut),Q===void 0&&(Q=[],m.set(ut,Q));let vt=N.textures;if(Q.length!==vt.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let st=0,Pt=vt.length;st<Pt;st++)Q[st]=s.COLOR_ATTACHMENT0+st;Q.length=vt.length,dt=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,dt=!0);dt&&s.drawBuffers(Q)}function Vt(N){return v!==N?(s.useProgram(N),v=N,!0):!1}let ge={[gi]:s.FUNC_ADD,[Fc]:s.FUNC_SUBTRACT,[Oc]:s.FUNC_REVERSE_SUBTRACT};ge[Bc]=s.MIN,ge[zc]=s.MAX;let Bt={[kc]:s.ZERO,[Vc]:s.ONE,[Hc]:s.SRC_COLOR,[$o]:s.SRC_ALPHA,[$c]:s.SRC_ALPHA_SATURATE,[qc]:s.DST_COLOR,[Wc]:s.DST_ALPHA,[Gc]:s.ONE_MINUS_SRC_COLOR,[Zo]:s.ONE_MINUS_SRC_ALPHA,[Yc]:s.ONE_MINUS_DST_COLOR,[Xc]:s.ONE_MINUS_DST_ALPHA,[Zc]:s.CONSTANT_COLOR,[Jc]:s.ONE_MINUS_CONSTANT_COLOR,[Kc]:s.CONSTANT_ALPHA,[jc]:s.ONE_MINUS_CONSTANT_ALPHA};function Qt(N,ut,Q,dt,vt,st,Pt,Et,ue,se){if(N===Tn){p===!0&&(yt(s.BLEND),p=!1);return}if(p===!1&&(nt(s.BLEND),p=!0),N!==Uc){if(N!==f||se!==I){if((b!==gi||w!==gi)&&(s.blendEquation(s.FUNC_ADD),b=gi,w=gi),se)switch(N){case Ki:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Os:s.blendFunc(s.ONE,s.ONE);break;case qo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yo:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",N);break}else switch(N){case Ki:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case qo:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yo:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",N);break}A=null,M=null,S=null,C=null,_.set(0,0,0),T=0,f=N,I=se}return}vt=vt||ut,st=st||Q,Pt=Pt||dt,(ut!==b||vt!==w)&&(s.blendEquationSeparate(ge[ut],ge[vt]),b=ut,w=vt),(Q!==A||dt!==M||st!==S||Pt!==C)&&(s.blendFuncSeparate(Bt[Q],Bt[dt],Bt[st],Bt[Pt]),A=Q,M=dt,S=st,C=Pt),(Et.equals(_)===!1||ue!==T)&&(s.blendColor(Et.r,Et.g,Et.b,ue),_.copy(Et),T=ue),f=N,I=!1}function ie(N,ut){N.side===Ee?yt(s.CULL_FACE):nt(s.CULL_FACE);let Q=N.side===Ge;ut&&(Q=!Q),Gt(Q),N.blending===Ki&&N.transparent===!1?Qt(Tn):Qt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let dt=N.stencilWrite;o.setTest(dt),dt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Le(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):yt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(N){U!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),U=N)}function ce(N){N!==Lc?(nt(s.CULL_FACE),N!==B&&(N===Xo?s.cullFace(s.BACK):N===Dc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):yt(s.CULL_FACE),B=N}function ye(N){N!==W&&(Z&&s.lineWidth(N),W=N)}function Le(N,ut,Q){N?(nt(s.POLYGON_OFFSET_FILL),(L!==ut||H!==Q)&&(L=ut,H=Q,a.getReversed()&&(ut=-ut),s.polygonOffset(ut,Q))):yt(s.POLYGON_OFFSET_FILL)}function F(N){N?nt(s.SCISSOR_TEST):yt(s.SCISSOR_TEST)}function ot(N){N===void 0&&(N=s.TEXTURE0+Y-1),et!==N&&(s.activeTexture(N),et=N)}function R(N,ut,Q){Q===void 0&&(et===null?Q=s.TEXTURE0+Y-1:Q=et);let dt=it[Q];dt===void 0&&(dt={type:void 0,texture:void 0},it[Q]=dt),(dt.type!==N||dt.texture!==ut)&&(et!==Q&&(s.activeTexture(Q),et=Q),s.bindTexture(N,ut||J[N]),dt.type=N,dt.texture=ut)}function zt(){let N=it[et];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ft(){try{s.compressedTexImage2D(...arguments)}catch(N){Ut("WebGLState:",N)}}function E(){try{s.compressedTexImage3D(...arguments)}catch(N){Ut("WebGLState:",N)}}function x(){try{s.texSubImage2D(...arguments)}catch(N){Ut("WebGLState:",N)}}function O(){try{s.texSubImage3D(...arguments)}catch(N){Ut("WebGLState:",N)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(N){Ut("WebGLState:",N)}}function K(){try{s.compressedTexSubImage3D(...arguments)}catch(N){Ut("WebGLState:",N)}}function at(){try{s.texStorage2D(...arguments)}catch(N){Ut("WebGLState:",N)}}function lt(){try{s.texStorage3D(...arguments)}catch(N){Ut("WebGLState:",N)}}function j(){try{s.texImage2D(...arguments)}catch(N){Ut("WebGLState:",N)}}function tt(){try{s.texImage3D(...arguments)}catch(N){Ut("WebGLState:",N)}}function ct(N){return d[N]!==void 0?d[N]:s.getParameter(N)}function Rt(N,ut){d[N]!==ut&&(s.pixelStorei(N,ut),d[N]=ut)}function pt(N){ne.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),ne.copy(N))}function ht(N){Ht.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Ht.copy(N))}function It(N,ut){let Q=c.get(ut);Q===void 0&&(Q=new WeakMap,c.set(ut,Q));let dt=Q.get(N);dt===void 0&&(dt=s.getUniformBlockIndex(ut,N.name),Q.set(N,dt))}function Dt(N,ut){let dt=c.get(ut).get(N);l.get(ut)!==dt&&(s.uniformBlockBinding(ut,dt,N.__bindingPointIndex),l.set(ut,dt))}function kt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},et=null,it={},u={},m=new WeakMap,g=[],v=null,p=!1,f=null,b=null,A=null,M=null,w=null,S=null,C=null,_=new qt(0,0,0),T=0,I=!1,U=null,B=null,W=null,L=null,H=null,ne.set(0,0,s.canvas.width,s.canvas.height),Ht.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:yt,bindFramebuffer:Nt,drawBuffers:_t,useProgram:Vt,setBlending:Qt,setMaterial:ie,setFlipSided:Gt,setCullFace:ce,setLineWidth:ye,setPolygonOffset:Le,setScissorTest:F,activeTexture:ot,bindTexture:R,unbindTexture:zt,compressedTexImage2D:ft,compressedTexImage3D:E,texImage2D:j,texImage3D:tt,pixelStorei:Rt,getParameter:ct,updateUBOMapping:It,uniformBlockBinding:Dt,texStorage2D:at,texStorage3D:lt,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:pt,viewport:ht,reset:kt}}function c0(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,h=new WeakMap,d=new Set,u,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,x){return g?new OffscreenCanvas(E,x):vs("canvas")}function p(E,x,O){let X=1,K=ft(E);if((K.width>O||K.height>O)&&(X=O/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let at=Math.floor(X*K.width),lt=Math.floor(X*K.height);u===void 0&&(u=v(at,lt));let j=x?v(at,lt):u;return j.width=at,j.height=lt,j.getContext("2d").drawImage(E,0,0,at,lt),Lt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+at+"x"+lt+")."),j}else return"data"in E&&Lt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function f(E){return E.generateMipmaps}function b(E){s.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(E,x,O,X,K,at=!1){if(E!==null){if(s[E]!==void 0)return s[E];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let lt;X&&(lt=t.get("EXT_texture_norm16"),lt||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===s.RED&&(O===s.FLOAT&&(j=s.R32F),O===s.HALF_FLOAT&&(j=s.R16F),O===s.UNSIGNED_BYTE&&(j=s.R8),O===s.UNSIGNED_SHORT&&lt&&(j=lt.R16_EXT),O===s.SHORT&&lt&&(j=lt.R16_SNORM_EXT)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.R8UI),O===s.UNSIGNED_SHORT&&(j=s.R16UI),O===s.UNSIGNED_INT&&(j=s.R32UI),O===s.BYTE&&(j=s.R8I),O===s.SHORT&&(j=s.R16I),O===s.INT&&(j=s.R32I)),x===s.RG&&(O===s.FLOAT&&(j=s.RG32F),O===s.HALF_FLOAT&&(j=s.RG16F),O===s.UNSIGNED_BYTE&&(j=s.RG8),O===s.UNSIGNED_SHORT&&lt&&(j=lt.RG16_EXT),O===s.SHORT&&lt&&(j=lt.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RG8UI),O===s.UNSIGNED_SHORT&&(j=s.RG16UI),O===s.UNSIGNED_INT&&(j=s.RG32UI),O===s.BYTE&&(j=s.RG8I),O===s.SHORT&&(j=s.RG16I),O===s.INT&&(j=s.RG32I)),x===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGB8UI),O===s.UNSIGNED_SHORT&&(j=s.RGB16UI),O===s.UNSIGNED_INT&&(j=s.RGB32UI),O===s.BYTE&&(j=s.RGB8I),O===s.SHORT&&(j=s.RGB16I),O===s.INT&&(j=s.RGB32I)),x===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),O===s.UNSIGNED_INT&&(j=s.RGBA32UI),O===s.BYTE&&(j=s.RGBA8I),O===s.SHORT&&(j=s.RGBA16I),O===s.INT&&(j=s.RGBA32I)),x===s.RGB&&(O===s.UNSIGNED_SHORT&&lt&&(j=lt.RGB16_EXT),O===s.SHORT&&lt&&(j=lt.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),x===s.RGBA){let tt=at?xs:Zt.getTransfer(K);O===s.FLOAT&&(j=s.RGBA32F),O===s.HALF_FLOAT&&(j=s.RGBA16F),O===s.UNSIGNED_BYTE&&(j=tt===ae?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&lt&&(j=lt.RGBA16_EXT),O===s.SHORT&&lt&&(j=lt.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function w(E,x){let O;return E?x===null||x===fn||x===Qi?O=s.DEPTH24_STENCIL8:x===en?O=s.DEPTH32F_STENCIL8:x===ji&&(O=s.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===fn||x===Qi?O=s.DEPTH_COMPONENT24:x===en?O=s.DEPTH_COMPONENT32F:x===ji&&(O=s.DEPTH_COMPONENT16),O}function S(E,x){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==_e&&E.minFilter!==De?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function C(E){let x=E.target;x.removeEventListener("dispose",C),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function _(E){let x=E.target;x.removeEventListener("dispose",_),U(x)}function T(E){let x=n.get(E);if(x.__webglInit===void 0)return;let O=E.source,X=m.get(O);if(X){let K=X[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&I(E),Object.keys(X).length===0&&m.delete(O)}n.remove(E)}function I(E){let x=n.get(E);s.deleteTexture(x.__webglTexture);let O=E.source,X=m.get(O);delete X[x.__cacheKey],a.memory.textures--}function U(E){let x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let K=0;K<x.__webglFramebuffer[X].length;K++)s.deleteFramebuffer(x.__webglFramebuffer[X][K]);else s.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)s.deleteFramebuffer(x.__webglFramebuffer[X]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=E.textures;for(let X=0,K=O.length;X<K;X++){let at=n.get(O[X]);at.__webglTexture&&(s.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(O[X])}n.remove(E)}let B=0;function W(){B=0}function L(){return B}function H(E){B=E}function Y(){let E=B;return E>=i.maxTextures&&Lt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+i.maxTextures),B+=1,E}function Z(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function rt(E,x){let O=n.get(E);if(E.isVideoTexture&&R(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){let X=E.image;if(X===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(O,E,x);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}function $(E,x){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){yt(O,E,x);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}function et(E,x){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){yt(O,E,x);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}function it(E,x){let O=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&O.__version!==E.version){Nt(O,E,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}let Ct={[Dr]:s.REPEAT,[_n]:s.CLAMP_TO_EDGE,[Nr]:s.MIRRORED_REPEAT},Tt={[_e]:s.NEAREST,[eh]:s.NEAREST_MIPMAP_NEAREST,[zs]:s.NEAREST_MIPMAP_LINEAR,[De]:s.LINEAR,[ra]:s.LINEAR_MIPMAP_NEAREST,[ri]:s.LINEAR_MIPMAP_LINEAR},ne={[rh]:s.NEVER,[hh]:s.ALWAYS,[ah]:s.LESS,[Ga]:s.LEQUAL,[oh]:s.EQUAL,[Wa]:s.GEQUAL,[lh]:s.GREATER,[ch]:s.NOTEQUAL};function Ht(E,x){if(x.type===en&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===De||x.magFilter===ra||x.magFilter===zs||x.magFilter===ri||x.minFilter===De||x.minFilter===ra||x.minFilter===zs||x.minFilter===ri)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,Ct[x.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,Ct[x.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,Ct[x.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,Tt[x.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,Tt[x.minFilter]),x.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,ne[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===_e||x.minFilter!==zs&&x.minFilter!==ri||x.type===en&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function jt(E,x){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",C));let X=x.source,K=m.get(X);K===void 0&&(K={},m.set(X,K));let at=Z(x);if(at!==E.__cacheKey){K[at]===void 0&&(K[at]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[at].usedTimes++;let lt=K[E.__cacheKey];lt!==void 0&&(K[E.__cacheKey].usedTimes--,lt.usedTimes===0&&I(x)),E.__cacheKey=at,E.__webglTexture=K[at].texture}return O}function J(E,x,O){return Math.floor(Math.floor(E/O)/x)}function nt(E,x,O,X){let at=E.updateRanges;if(at.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,O,X,x.data);else{at.sort((Rt,pt)=>Rt.start-pt.start);let lt=0;for(let Rt=1;Rt<at.length;Rt++){let pt=at[lt],ht=at[Rt],It=pt.start+pt.count,Dt=J(ht.start,x.width,4),kt=J(pt.start,x.width,4);ht.start<=It+1&&Dt===kt&&J(ht.start+ht.count-1,x.width,4)===Dt?pt.count=Math.max(pt.count,ht.start+ht.count-pt.start):(++lt,at[lt]=ht)}at.length=lt+1;let j=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),ct=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Rt=0,pt=at.length;Rt<pt;Rt++){let ht=at[Rt],It=Math.floor(ht.start/4),Dt=Math.ceil(ht.count/4),kt=It%x.width,N=Math.floor(It/x.width),ut=Dt,Q=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,kt),e.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,kt,N,ut,Q,O,X,x.data)}E.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,j),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ct)}}function yt(E,x,O){let X=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=s.TEXTURE_3D);let K=jt(E,x),at=x.source;e.bindTexture(X,E.__webglTexture,s.TEXTURE0+O);let lt=n.get(at);if(at.version!==lt.__version||K===!0){if(e.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let Q=Zt.getPrimaries(Zt.workingColorSpace),dt=x.colorSpace===Fn?null:Zt.getPrimaries(x.colorSpace),vt=x.colorSpace===Fn||Q===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let tt=p(x.image,!1,i.maxTextureSize);tt=zt(x,tt);let ct=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type),pt=M(x.internalFormat,ct,Rt,x.normalized,x.colorSpace,x.isVideoTexture);Ht(X,x);let ht,It=x.mipmaps,Dt=x.isVideoTexture!==!0,kt=lt.__version===void 0||K===!0,N=at.dataReady,ut=S(x,tt);if(x.isDepthTexture)pt=w(x.format===ai,x.type),kt&&(Dt?e.texStorage2D(s.TEXTURE_2D,1,pt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,pt,tt.width,tt.height,0,ct,Rt,null));else if(x.isDataTexture)if(It.length>0){Dt&&kt&&e.texStorage2D(s.TEXTURE_2D,ut,pt,It[0].width,It[0].height);for(let Q=0,dt=It.length;Q<dt;Q++)ht=It[Q],Dt?N&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,ht.width,ht.height,ct,Rt,ht.data):e.texImage2D(s.TEXTURE_2D,Q,pt,ht.width,ht.height,0,ct,Rt,ht.data);x.generateMipmaps=!1}else Dt?(kt&&e.texStorage2D(s.TEXTURE_2D,ut,pt,tt.width,tt.height),N&&nt(x,tt,ct,Rt)):e.texImage2D(s.TEXTURE_2D,0,pt,tt.width,tt.height,0,ct,Rt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Dt&&kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,pt,It[0].width,It[0].height,tt.depth);for(let Q=0,dt=It.length;Q<dt;Q++)if(ht=It[Q],x.format!==nn)if(ct!==null)if(Dt){if(N)if(x.layerUpdates.size>0){let vt=_l(ht.width,ht.height,x.format,x.type);for(let st of x.layerUpdates){let Pt=ht.data.subarray(st*vt/ht.data.BYTES_PER_ELEMENT,(st+1)*vt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,st,ht.width,ht.height,1,ct,Pt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,ht.width,ht.height,tt.depth,ct,ht.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,pt,ht.width,ht.height,tt.depth,0,ht.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,ht.width,ht.height,tt.depth,ct,Rt,ht.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,pt,ht.width,ht.height,tt.depth,0,ct,Rt,ht.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Dt&&kt&&e.texStorage2D(s.TEXTURE_2D,ut,pt,It[0].width,It[0].height);for(let Q=0,dt=It.length;Q<dt;Q++)ht=It[Q],x.format!==nn?ct!==null?Dt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,ht.width,ht.height,ct,ht.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,pt,ht.width,ht.height,0,ht.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?N&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,ht.width,ht.height,ct,Rt,ht.data):e.texImage2D(s.TEXTURE_2D,Q,pt,ht.width,ht.height,0,ct,Rt,ht.data)}else if(x.isDataArrayTexture)if(Dt){if(kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,pt,tt.width,tt.height,tt.depth),N)if(x.layerUpdates.size>0){let Q=_l(tt.width,tt.height,x.format,x.type);for(let dt of x.layerUpdates){let vt=tt.data.subarray(dt*Q/tt.data.BYTES_PER_ELEMENT,(dt+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,dt,tt.width,tt.height,1,ct,Rt,vt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,Rt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,pt,tt.width,tt.height,tt.depth,0,ct,Rt,tt.data);else if(x.isData3DTexture)Dt?(kt&&e.texStorage3D(s.TEXTURE_3D,ut,pt,tt.width,tt.height,tt.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,Rt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,pt,tt.width,tt.height,tt.depth,0,ct,Rt,tt.data);else if(x.isFramebufferTexture){if(kt)if(Dt)e.texStorage2D(s.TEXTURE_2D,ut,pt,tt.width,tt.height);else{let Q=tt.width,dt=tt.height;for(let vt=0;vt<ut;vt++)e.texImage2D(s.TEXTURE_2D,vt,pt,Q,dt,0,ct,Rt,null),Q>>=1,dt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){let Q=s.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),tt.parentNode!==Q){Q.appendChild(tt),d.add(x),Q.onpaint=dt=>{let vt=dt.changedElements;for(let st of d)vt.includes(st.image)&&(st.needsUpdate=!0)},Q.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{let vt=s.RGBA,st=s.RGBA,Pt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,vt,st,Pt,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(It.length>0){if(Dt&&kt){let Q=ft(It[0]);e.texStorage2D(s.TEXTURE_2D,ut,pt,Q.width,Q.height)}for(let Q=0,dt=It.length;Q<dt;Q++)ht=It[Q],Dt?N&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,ct,Rt,ht):e.texImage2D(s.TEXTURE_2D,Q,pt,ct,Rt,ht);x.generateMipmaps=!1}else if(Dt){if(kt){let Q=ft(tt);e.texStorage2D(s.TEXTURE_2D,ut,pt,Q.width,Q.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,Rt,tt)}else e.texImage2D(s.TEXTURE_2D,0,pt,ct,Rt,tt);f(x)&&b(X),lt.__version=at.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Nt(E,x,O){if(x.image.length!==6)return;let X=jt(E,x),K=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+O);let at=n.get(K);if(K.version!==at.__version||X===!0){e.activeTexture(s.TEXTURE0+O);let lt=Zt.getPrimaries(Zt.workingColorSpace),j=x.colorSpace===Fn?null:Zt.getPrimaries(x.colorSpace),tt=x.colorSpace===Fn||lt===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ct=x.isCompressedTexture||x.image[0].isCompressedTexture,Rt=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let st=0;st<6;st++)!ct&&!Rt?pt[st]=p(x.image[st],!0,i.maxCubemapSize):pt[st]=Rt?x.image[st].image:x.image[st],pt[st]=zt(x,pt[st]);let ht=pt[0],It=r.convert(x.format,x.colorSpace),Dt=r.convert(x.type),kt=M(x.internalFormat,It,Dt,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,ut=at.__version===void 0||X===!0,Q=K.dataReady,dt=S(x,ht);Ht(s.TEXTURE_CUBE_MAP,x);let vt;if(ct){N&&ut&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,kt,ht.width,ht.height);for(let st=0;st<6;st++){vt=pt[st].mipmaps;for(let Pt=0;Pt<vt.length;Pt++){let Et=vt[Pt];x.format!==nn?It!==null?N?Q&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,0,0,Et.width,Et.height,It,Et.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,kt,Et.width,Et.height,0,Et.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,0,0,Et.width,Et.height,It,Dt,Et.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,kt,Et.width,Et.height,0,It,Dt,Et.data)}}}else{if(vt=x.mipmaps,N&&ut){vt.length>0&&dt++;let st=ft(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,kt,st.width,st.height)}for(let st=0;st<6;st++)if(Rt){N?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,pt[st].width,pt[st].height,It,Dt,pt[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,kt,pt[st].width,pt[st].height,0,It,Dt,pt[st].data);for(let Pt=0;Pt<vt.length;Pt++){let ue=vt[Pt].image[st].image;N?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,0,0,ue.width,ue.height,It,Dt,ue.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,kt,ue.width,ue.height,0,It,Dt,ue.data)}}else{N?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,It,Dt,pt[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,kt,It,Dt,pt[st]);for(let Pt=0;Pt<vt.length;Pt++){let Et=vt[Pt];N?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,0,0,It,Dt,Et.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,kt,It,Dt,Et.image[st])}}}f(x)&&b(s.TEXTURE_CUBE_MAP),at.__version=K.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function _t(E,x,O,X,K,at){let lt=r.convert(O.format,O.colorSpace),j=r.convert(O.type),tt=M(O.internalFormat,lt,j,O.normalized,O.colorSpace),ct=n.get(x),Rt=n.get(O);if(Rt.__renderTarget=x,!ct.__hasExternalTextures){let pt=Math.max(1,x.width>>at),ht=Math.max(1,x.height>>at);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,at,tt,pt,ht,x.depth,0,lt,j,null):e.texImage2D(K,at,tt,pt,ht,0,lt,j,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),ot(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,K,Rt.__webglTexture,0,F(x)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,K,Rt.__webglTexture,at),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(E,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,E),x.depthBuffer){let X=x.depthTexture,K=X&&X.isDepthTexture?X.type:null,at=w(x.stencilBuffer,K),lt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ot(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,F(x),at,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,F(x),at,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,at,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,E)}else{let X=x.textures;for(let K=0;K<X.length;K++){let at=X[K],lt=r.convert(at.format,at.colorSpace),j=r.convert(at.type),tt=M(at.internalFormat,lt,j,at.normalized,at.colorSpace);ot(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,F(x),tt,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,F(x),tt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,tt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(E,x,O){let X=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,x.depthTexture);let ct=r.convert(x.depthTexture.format),Rt=r.convert(x.depthTexture.type),pt;x.depthTexture.format===vn?pt=s.DEPTH_COMPONENT24:x.depthTexture.format===ai&&(pt=s.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,pt,x.width,x.height,0,ct,Rt,null)}}else rt(x.depthTexture,0);let at=K.__webglTexture,lt=F(x),j=X?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,tt=x.depthTexture.format===ai?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===vn)ot(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,j,at,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,tt,j,at,0);else if(x.depthTexture.format===ai)ot(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,j,at,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,tt,j,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Bt(E){let x=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let X=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=X}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let X=0;X<6;X++)ge(x.__webglFramebuffer[X],E,X);else{let X=E.texture.mipmaps;X&&X.length>0?ge(x.__webglFramebuffer[0],E,0):ge(x.__webglFramebuffer,E,0)}else if(O){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=s.createRenderbuffer(),Vt(x.__webglDepthbuffer[X],E,!1);else{let K=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,at)}}else{let X=E.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Vt(x.__webglDepthbuffer,E,!1);else{let K=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,at)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Qt(E,x,O){let X=n.get(E);x!==void 0&&_t(X.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Bt(E)}function ie(E){let x=E.texture,O=n.get(E),X=n.get(x);E.addEventListener("dispose",_);let K=E.textures,at=E.isWebGLCubeRenderTarget===!0,lt=K.length>1;if(lt||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=x.version,a.memory.textures++),at){O.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[j]=[];for(let tt=0;tt<x.mipmaps.length;tt++)O.__webglFramebuffer[j][tt]=s.createFramebuffer()}else O.__webglFramebuffer[j]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)O.__webglFramebuffer[j]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(lt)for(let j=0,tt=K.length;j<tt;j++){let ct=n.get(K[j]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&ot(E)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let tt=K[j];O.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[j]);let ct=r.convert(tt.format,tt.colorSpace),Rt=r.convert(tt.type),pt=M(tt.internalFormat,ct,Rt,tt.normalized,tt.colorSpace,E.isXRRenderTarget===!0),ht=F(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,pt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,O.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Vt(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)_t(O.__webglFramebuffer[j][tt],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,tt);else _t(O.__webglFramebuffer[j],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(x)&&b(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let j=0,tt=K.length;j<tt;j++){let ct=K[j],Rt=n.get(ct),pt=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pt=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,Rt.__webglTexture),Ht(pt,ct),_t(O.__webglFramebuffer,E,ct,s.COLOR_ATTACHMENT0+j,pt,0),f(ct)&&b(pt)}e.unbindTexture()}else{let j=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(j=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,X.__webglTexture),Ht(j,x),x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)_t(O.__webglFramebuffer[tt],E,x,s.COLOR_ATTACHMENT0,j,tt);else _t(O.__webglFramebuffer,E,x,s.COLOR_ATTACHMENT0,j,0);f(x)&&b(j),e.unbindTexture()}E.depthBuffer&&Bt(E)}function Gt(E){let x=E.textures;for(let O=0,X=x.length;O<X;O++){let K=x[O];if(f(K)){let at=A(E),lt=n.get(K).__webglTexture;e.bindTexture(at,lt),b(at),e.unbindTexture()}}}let ce=[],ye=[];function Le(E){if(E.samples>0){if(ot(E)===!1){let x=E.textures,O=E.width,X=E.height,K=s.COLOR_BUFFER_BIT,at=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=n.get(E),j=x.length>1;if(j)for(let ct=0;ct<x.length;ct++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);let tt=E.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ct=0;ct<x.length;ct++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),j){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);let Rt=n.get(x[ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Rt,0)}s.blitFramebuffer(0,0,O,X,0,0,O,X,K,s.NEAREST),l===!0&&(ce.length=0,ye.length=0,ce.push(s.COLOR_ATTACHMENT0+ct),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(ce.push(at),ye.push(at),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ye)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let ct=0;ct<x.length;ct++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);let Rt=n.get(x[ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,Rt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let x=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function F(E){return Math.min(i.maxSamples,E.samples)}function ot(E){let x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function R(E){let x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function zt(E,x){let O=E.colorSpace,X=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==gs&&O!==Fn&&(Zt.getTransfer(O)===ae?(X!==nn||K!==Ke)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",O)),x}function ft(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=W,this.getTextureUnits=L,this.setTextureUnits=H,this.setTexture2D=rt,this.setTexture2DArray=$,this.setTexture3D=et,this.setTextureCube=it,this.rebindTextures=Qt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function h0(s,t){function e(n,i=Fn){let r,a=Zt.getTransfer(i);if(n===Ke)return s.UNSIGNED_BYTE;if(n===oa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===la)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ol)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ll)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===rl)return s.BYTE;if(n===al)return s.SHORT;if(n===ji)return s.UNSIGNED_SHORT;if(n===aa)return s.INT;if(n===fn)return s.UNSIGNED_INT;if(n===en)return s.FLOAT;if(n===pn)return s.HALF_FLOAT;if(n===cl)return s.ALPHA;if(n===hl)return s.RGB;if(n===nn)return s.RGBA;if(n===vn)return s.DEPTH_COMPONENT;if(n===ai)return s.DEPTH_STENCIL;if(n===ca)return s.RED;if(n===ha)return s.RED_INTEGER;if(n===oi)return s.RG;if(n===ua)return s.RG_INTEGER;if(n===da)return s.RGBA_INTEGER;if(n===ks||n===Vs||n===Hs||n===Gs)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===_a||n===va||n===ya||n===Ma||n===Ws||n===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===_a)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===va)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ya)return r.COMPRESSED_R11_EAC;if(n===Ma)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ws)return r.COMPRESSED_RG11_EAC;if(n===Sa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ba||n===wa||n===Ta||n===Ea||n===Aa||n===Ca||n===Ra||n===Ia||n===Pa||n===La||n===Da||n===Na||n===Ua||n===Fa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ba)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Aa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ca)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ia)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===La)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Da)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Na)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oa||n===Ba||n===za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Oa)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ka||n===Va||n===Xs||n===Ha)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var u0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Rs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new He({vertexShader:u0,fragmentShader:d0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dl=class extends yn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null,v=typeof XRWebGLBinding<"u",p=new Ll,f={},b=e.getContextAttributes(),A=null,M=null,w=[],S=[],C=new Kt,_=null,T=null,I=new We;I.viewport=new xe;let U=new We;U.viewport=new xe;let B=[I,U],W=new na,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=w[J];return nt===void 0&&(nt=new qi,w[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=w[J];return nt===void 0&&(nt=new qi,w[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=w[J];return nt===void 0&&(nt=new qi,w[J]=nt),nt.getHandSpace()};function Y(J){let nt=S.indexOf(J.inputSource);if(nt===-1)return;let yt=w[nt];yt!==void 0&&(yt.update(J.inputSource,J.frame,c||a),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function Z(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",rt);for(let J=0;J<w.length;J++){let nt=S[J];nt!==null&&(S[J]=null,w[J].disconnect(nt))}L=null,H=null,p.reset();for(let J in f)delete f[J];if(t.setRenderTarget(A),m=null,u=null,d=null,i=null,M=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",rt),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Nt=null,_t=null;b.depth&&(_t=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=b.stencil?ai:vn,Nt=b.stencil?Qi:fn);let Vt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Vt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Xe(u.textureWidth,u.textureHeight,{format:nn,type:Ke,depthTexture:new Qn(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Xe(m.framebufferWidth,m.framebufferHeight,{format:nn,type:Ke,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),jt.setContext(i),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function rt(J){for(let nt=0;nt<J.removed.length;nt++){let yt=J.removed[nt],Nt=S.indexOf(yt);Nt>=0&&(S[Nt]=null,w[Nt].disconnect(yt))}for(let nt=0;nt<J.added.length;nt++){let yt=J.added[nt],Nt=S.indexOf(yt);if(Nt===-1){for(let Vt=0;Vt<w.length;Vt++)if(Vt>=S.length){S.push(yt),Nt=Vt;break}else if(S[Vt]===null){S[Vt]=yt,Nt=Vt;break}if(Nt===-1)break}let _t=w[Nt];_t&&_t.connect(yt)}}let $=new D,et=new D;function it(J,nt,yt){$.setFromMatrixPosition(nt.matrixWorld),et.setFromMatrixPosition(yt.matrixWorld);let Nt=$.distanceTo(et),_t=nt.projectionMatrix.elements,Vt=yt.projectionMatrix.elements,ge=_t[14]/(_t[10]-1),Bt=_t[14]/(_t[10]+1),Qt=(_t[9]+1)/_t[5],ie=(_t[9]-1)/_t[5],Gt=(_t[8]-1)/_t[0],ce=(Vt[8]+1)/Vt[0],ye=ge*Gt,Le=ge*ce,F=Nt/(-Gt+ce),ot=F*-Gt;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ot),J.translateZ(F),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),_t[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let R=ge+F,zt=Bt+F,ft=ye-ot,E=Le+(Nt-ot),x=Qt*Bt/zt*R,O=ie*Bt/zt*R;J.projectionMatrix.makePerspective(ft,E,x,O,R,zt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ct(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let nt=J.near,yt=J.far;p.texture!==null&&(p.depthNear>0&&(nt=p.depthNear),p.depthFar>0&&(yt=p.depthFar)),W.near=U.near=I.near=nt,W.far=U.far=I.far=yt,(L!==W.near||H!==W.far)&&(i.updateRenderState({depthNear:W.near,depthFar:W.far}),L=W.near,H=W.far),W.layers.mask=J.layers.mask|6,I.layers.mask=W.layers.mask&-5,U.layers.mask=W.layers.mask&-3;let Nt=J.parent,_t=W.cameras;Ct(W,Nt);for(let Vt=0;Vt<_t.length;Vt++)Ct(_t[Vt],Nt);_t.length===2?it(W,I,U):W.projectionMatrix.copy(I.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),Tt(J,W,Nt)};function Tt(J,nt,yt){yt===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Gi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(W)},this.getCameraTexture=function(J){return f[J]};let ne=null;function Ht(J,nt){if(h=nt.getViewerPose(c||a),g=nt,h!==null){let yt=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let Nt=!1;yt.length!==W.cameras.length&&(W.cameras.length=0,Nt=!0);for(let Bt=0;Bt<yt.length;Bt++){let Qt=yt[Bt],ie=null;if(m!==null)ie=m.getViewport(Qt);else{let ce=d.getViewSubImage(u,Qt);ie=ce.viewport,Bt===0&&(t.setRenderTargetTextures(M,ce.colorTexture,ce.depthStencilTexture),t.setRenderTarget(M))}let Gt=B[Bt];Gt===void 0&&(Gt=new We,Gt.layers.enable(Bt),Gt.viewport=new xe,B[Bt]=Gt),Gt.matrix.fromArray(Qt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Qt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ie.x,ie.y,ie.width,ie.height),Bt===0&&(W.matrix.copy(Gt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Nt===!0&&W.cameras.push(Gt)}let _t=i.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let Bt=d.getDepthInformation(yt[0]);Bt&&Bt.isValid&&Bt.texture&&p.init(Bt,i.renderState)}if(_t&&_t.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let Bt=0;Bt<yt.length;Bt++){let Qt=yt[Bt].camera;if(Qt){let ie=f[Qt];ie||(ie=new Rs,f[Qt]=ie);let Gt=d.getCameraImage(Qt);ie.sourceTexture=Gt}}}}for(let yt=0;yt<w.length;yt++){let Nt=S[yt],_t=w[yt];Nt!==null&&_t!==void 0&&_t.update(Nt,nt,c||a)}ne&&ne(J,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}let jt=new Vh;jt.setAnimationLoop(Ht),this.setAnimationLoop=function(J){ne=J},this.dispose=function(){}}},f0=new oe,Yh=new Ft;Yh.set(-1,0,0,0,1,0,0,0,1);function p0(s,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,ml(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,b,A,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,b,A):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ge&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ge&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let b=t.get(f),A=b.envMap,M=b.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(f0.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Yh),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,b,A){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=A*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ge&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let b=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function m0(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){let S=w.program;n.uniformBlockBinding(M,S)}function c(M,w){let S=i[M.id];S===void 0&&(p(M),S=h(M),i[M.id]=S,M.addEventListener("dispose",b));let C=w.program;n.updateUBOMapping(M,C);let _=t.render.frame;r[M.id]!==_&&(u(M),r[M.id]=_)}function h(M){let w=d();M.__bindingPointIndex=w;let S=s.createBuffer(),C=M.__size,_=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,S),S}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let w=i[M.id],S=M.uniforms,C=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let _=0,T=S.length;_<T;_++){let I=S[_];if(Array.isArray(I))for(let U=0,B=I.length;U<B;U++)m(I[U],_,U,C);else m(I,_,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(M,w,S,C){if(v(M,w,S,C)===!0){let _=M.__offset,T=M.value;if(Array.isArray(T)){let I=0;for(let U=0;U<T.length;U++){let B=T[U],W=f(B);g(B,M.__data,I),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(I+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,M.__data)}}function g(M,w,S){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,S)}function v(M,w,S,C){let _=M.value,T=w+"_"+S;if(C[T]===void 0)return typeof _=="number"||typeof _=="boolean"?C[T]=_:ArrayBuffer.isView(_)?C[T]=_.slice():C[T]=_.clone(),!0;{let I=C[T];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return C[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function p(M){let w=M.uniforms,S=0,C=16;for(let T=0,I=w.length;T<I;T++){let U=Array.isArray(w[T])?w[T]:[w[T]];for(let B=0,W=U.length;B<W;B++){let L=U[B],H=Array.isArray(L.value)?L.value:[L.value];for(let Y=0,Z=H.length;Y<Z;Y++){let rt=H[Y],$=f(rt),et=S%C,it=et%$.boundary,Ct=et+it;S+=it,Ct!==0&&C-Ct<$.storage&&(S+=C-Ct),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=$.storage}}}let _=S%C;return _>0&&(S+=C-_),M.__size=S,M.__cache={},this}function f(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",M),w}function b(M){let w=M.target;w.removeEventListener("dispose",b);let S=a.indexOf(w.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function A(){for(let M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:A}}var g0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),En=null;function x0(){return En===null&&(En=new ws(g0,16,16,oi,pn),En.name="DFG_LUT",En.minFilter=De,En.magFilter=De,En.wrapS=_n,En.wrapT=_n,En.generateMipmaps=!1,En.needsUpdate=!0),En}var Za=class{constructor(t={}){let{canvas:e=dh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Ke}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=m,p=new Set([da,ua,ha]),f=new Set([Ke,fn,ji,Qi,oa,la]),b=new Uint32Array(4),A=new Int32Array(4),M=new D,w=null,S=null,C=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,B=null,W=null,L=null,H=null;this._outputColorSpace=we;let Y=0,Z=0,rt=null,$=-1,et=null,it=new xe,Ct=new xe,Tt=null,ne=new qt(0),Ht=0,jt=e.width,J=e.height,nt=1,yt=null,Nt=null,_t=new xe(0,0,jt,J),Vt=new xe(0,0,jt,J),ge=!1,Bt=new Es,Qt=!1,ie=!1,Gt=new oe,ce=new D,ye=new xe,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},F=!1;function ot(){return rt===null?nt:1}let R=n;function zt(y,P){return e.getContext(y,P)}let ft,E,x,O,X,K,at,lt,j,tt,ct,Rt,pt,ht,It,Dt,kt,N,ut,Q,dt,vt,st;try{let y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ue,!1),e.addEventListener("webglcontextrestored",se,!1),e.addEventListener("webglcontextcreationerror",an,!1),R===null){let P="webgl2";if(R=zt(P,y),R===null)throw zt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pt()}catch(y){throw e.removeEventListener("webglcontextlost",ue,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",an,!1),Ut("WebGLRenderer: "+y.message),y}function Pt(){ft=new wm(R),ft.init(),dt=new h0(R,ft),E=new pm(R,ft,t,dt),x=new l0(R,ft),E.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),W=R.createFramebuffer(),L=R.createFramebuffer(),H=R.createFramebuffer(),O=new Am(R),X=new $g,K=new c0(R,ft,x,X,E,dt,O),at=new bm(I),lt=new Cd(R),vt=new dm(R,lt),j=new Tm(R,lt,O,vt),tt=new Rm(R,j,lt,vt,O),N=new Cm(R,E,K),It=new mm(X),ct=new Yg(I,at,ft,E,vt,It),Rt=new p0(I,X),pt=new Jg,ht=new n0(ft),kt=new um(I,at,x,tt,g,l),Dt=new o0(I,tt,E),st=new m0(R,O,E,x),ut=new fm(R,ft,O),Q=new Em(R,ft,O),O.programs=ct.programs,I.capabilities=E,I.extensions=ft,I.properties=X,I.renderLists=pt,I.shadowMap=Dt,I.state=x,I.info=O}v!==Ke&&(T=new Pm(v,e.width,e.height,o,i,r));let Et=new Dl(I,R);this.xr=Et,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let y=ft.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ft.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(y){y!==void 0&&(nt=y,this.setSize(jt,J,!1))},this.getSize=function(y){return y.set(jt,J)},this.setSize=function(y,P,q=!0){if(Et.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}jt=y,J=P,e.width=Math.floor(y*nt),e.height=Math.floor(P*nt),q===!0&&(e.style.width=y+"px",e.style.height=P+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(jt*nt,J*nt).floor()},this.setDrawingBufferSize=function(y,P,q){jt=y,J=P,nt=q,e.width=Math.floor(y*q),e.height=Math.floor(P*q),this.setViewport(0,0,y,P)},this.setEffects=function(y){if(v===Ke){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let P=0;P<y.length;P++)if(y[P].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(it)},this.getViewport=function(y){return y.copy(_t)},this.setViewport=function(y,P,q,z){y.isVector4?_t.set(y.x,y.y,y.z,y.w):_t.set(y,P,q,z),x.viewport(it.copy(_t).multiplyScalar(nt).round())},this.getScissor=function(y){return y.copy(Vt)},this.setScissor=function(y,P,q,z){y.isVector4?Vt.set(y.x,y.y,y.z,y.w):Vt.set(y,P,q,z),x.scissor(Ct.copy(Vt).multiplyScalar(nt).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(y){x.setScissorTest(ge=y)},this.setOpaqueSort=function(y){yt=y},this.setTransparentSort=function(y){Nt=y},this.getClearColor=function(y){return y.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(y=!0,P=!0,q=!0){let z=0;if(y){let k=!1;if(rt!==null){let xt=rt.texture.format;k=p.has(xt)}if(k){let xt=rt.texture.type,St=f.has(xt),gt=kt.getClearColor(),bt=kt.getClearAlpha(),At=gt.r,Wt=gt.g,Yt=gt.b;St?(b[0]=At,b[1]=Wt,b[2]=Yt,b[3]=bt,R.clearBufferuiv(R.COLOR,0,b)):(A[0]=At,A[1]=Wt,A[2]=Yt,A[3]=bt,R.clearBufferiv(R.COLOR,0,A))}else z|=R.COLOR_BUFFER_BIT}P&&(z|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){e.removeEventListener("webglcontextlost",ue,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",an,!1),kt.dispose(),pt.dispose(),ht.dispose(),X.dispose(),at.dispose(),tt.dispose(),vt.dispose(),st.dispose(),ct.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",Vl),Et.removeEventListener("sessionend",Hl),li.stop()};function ue(y){y.preventDefault(),fl("WebGLRenderer: Context Lost."),U=!0}function se(){fl("WebGLRenderer: Context Restored."),U=!1;let y=O.autoReset,P=Dt.enabled,q=Dt.autoUpdate,z=Dt.needsUpdate,k=Dt.type;Pt(),O.autoReset=y,Dt.enabled=P,Dt.autoUpdate=q,Dt.needsUpdate=z,Dt.type=k}function an(y){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function mn(y){let P=y.target;P.removeEventListener("dispose",mn),_u(P)}function _u(y){vu(y),X.remove(y)}function vu(y){let P=X.get(y).programs;P!==void 0&&(P.forEach(function(q){ct.releaseProgram(q)}),y.isShaderMaterial&&ct.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,q,z,k,xt){P===null&&(P=Le);let St=k.isMesh&&k.matrixWorld.determinantAffine()<0,gt=Su(y,P,q,z,k);x.setMaterial(z,St);let bt=q.index,At=1;if(z.wireframe===!0){if(bt=j.getWireframeAttribute(q),bt===void 0)return;At=2}let Wt=q.drawRange,Yt=q.attributes.position,wt=Wt.start*At,re=(Wt.start+Wt.count)*At;xt!==null&&(wt=Math.max(wt,xt.start*At),re=Math.min(re,(xt.start+xt.count)*At)),bt!==null?(wt=Math.max(wt,0),re=Math.min(re,bt.count)):Yt!=null&&(wt=Math.max(wt,0),re=Math.min(re,Yt.count));let Se=re-wt;if(Se<0||Se===1/0)return;vt.setup(k,z,gt,q,bt);let pe,he=ut;if(bt!==null&&(pe=lt.get(bt),he=Q,he.setIndex(pe)),k.isMesh)z.wireframe===!0?(x.setLineWidth(z.wireframeLinewidth*ot()),he.setMode(R.LINES)):he.setMode(R.TRIANGLES);else if(k.isLine){let Ue=z.linewidth;Ue===void 0&&(Ue=1),x.setLineWidth(Ue*ot()),k.isLineSegments?he.setMode(R.LINES):k.isLineLoop?he.setMode(R.LINE_LOOP):he.setMode(R.LINE_STRIP)}else k.isPoints?he.setMode(R.POINTS):k.isSprite&&he.setMode(R.TRIANGLES);if(k.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))he.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ue=k._multiDrawStarts,Mt=k._multiDrawCounts,ze=k._multiDrawCount,te=bt?lt.get(bt).bytesPerElement:1,Qe=X.get(z).currentProgram.getUniforms();for(let gn=0;gn<ze;gn++)Qe.setValue(R,"_gl_DrawID",gn),he.render(Ue[gn]/te,Mt[gn])}else if(k.isInstancedMesh)he.renderInstances(wt,Se,k.count);else if(q.isInstancedBufferGeometry){let Ue=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Mt=Math.min(q.instanceCount,Ue);he.renderInstances(wt,Se,Mt)}else he.render(wt,Se)};function kl(y,P,q,z){B!==null&&y.isNodeMaterial&&B.setObject(z,y),Qt===!0&&It.setState(y,q,!1),y.transparent===!0&&y.side===Ee&&y.forceSinglePass===!1?(y.side=Ge,y.needsUpdate=!0,js(y,P,z),y.side=ii,y.needsUpdate=!0,js(y,P,z),y.side=Ee):js(y,P,z)}this.compile=function(y,P,q=null){q===null&&(q=y),B!==null&&B.renderStart(y,P,q),S=ht.get(q),S.init(P),_.push(S),q.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),y!==q&&y.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),S.setupLights(),B!==null&&B.updateLights(S.state.lightsArray),ie=this.localClippingEnabled,Qt=It.init(this.clippingPlanes,ie),Qt===!0&&It.setGlobalState(this.clippingPlanes,P),B!==null&&Dt.render(S.state.shadowsArray,q,P);let z=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let xt=k.material;if(xt)if(Array.isArray(xt))for(let St=0;St<xt.length;St++){let gt=xt[St];kl(gt,q,P,k),z.add(gt)}else kl(xt,q,P,k),z.add(xt)}),S=_.pop(),B!==null&&B.renderEnd(),z},this.compileAsync=function(y,P,q=null){let z=this.compile(y,P,q);return new Promise(k=>{function xt(){if(z.forEach(function(St){let bt=X.get(St).currentProgram;(bt===void 0||bt.isReady())&&z.delete(St)}),z.size===0){k(y);return}setTimeout(xt,10)}ft.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let uo=null;function yu(y){uo&&uo(y)}function Vl(){li.stop()}function Hl(){li.start()}let li=new Vh;li.setAnimationLoop(yu),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(y){uo=y,Et.setAnimationLoop(y),y===null?li.stop():li.start()},Et.addEventListener("sessionstart",Vl),Et.addEventListener("sessionend",Hl),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;B!==null&&B.renderStart(y,P);let q=Et.enabled===!0&&Et.isPresenting===!0,z=T!==null&&(rt===null||q)&&T.begin(I,rt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(P),P=Et.getCamera()),y.isScene===!0&&y.onBeforeRender(I,y,P,rt),S=ht.get(y,_.length),S.init(P),S.state.textureUnits=K.getTextureUnits(),_.push(S),Gt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Bt.setFromProjectionMatrix(Gt,un,P.reversedDepth),ie=this.localClippingEnabled,Qt=It.init(this.clippingPlanes,ie),w=pt.get(y,C.length),w.init(),C.push(w),Et.enabled===!0&&Et.isPresenting===!0){let St=I.xr.getDepthSensingMesh();St!==null&&fo(St,P,-1/0,I.sortObjects)}fo(y,P,0,I.sortObjects),w.finish(),B!==null&&B.updateLights(S.state.lightsArray),I.sortObjects===!0&&w.sort(yt,Nt),F=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,F&&kt.addToRenderList(w,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qt===!0&&It.beginShadows();let k=S.state.shadowsArray;if(Dt.render(k,y,P),Qt===!0&&It.endShadows(),(z&&T.hasRenderPass())===!1){let St=w.opaque,gt=w.transmissive;if(S.setupLights(),P.isArrayCamera){let bt=P.cameras;if(gt.length>0)for(let At=0,Wt=bt.length;At<Wt;At++){let Yt=bt[At];Wl(St,gt,y,Yt)}F&&kt.render(y);for(let At=0,Wt=bt.length;At<Wt;At++){let Yt=bt[At];Gl(w,y,Yt,Yt.viewport)}}else gt.length>0&&Wl(St,gt,y,P),F&&kt.render(y),Gl(w,y,P)}rt!==null&&Z===0&&(K.updateMultisampleRenderTarget(rt),K.updateRenderTargetMipmap(rt)),z&&T.end(I),y.isScene===!0&&y.onAfterRender(I,y,P),vt.resetDefaultState(),$=-1,et=null,_.pop(),_.length>0?(S=_[_.length-1],K.setTextureUnits(S.state.textureUnits),Qt===!0&&It.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,B!==null&&B.renderEnd()};function fo(y,P,q,z){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLightProbeGrid)S.pushLightProbeGrid(y);else if(y.isLight)S.pushLight(y),y.castShadow&&S.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Bt)){z&&ye.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Gt);let St=tt.update(y),gt=y.material;gt.visible&&w.push(y,St,gt,q,ye.z,null,P)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Bt))){let St=tt.update(y),gt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ye.copy(y.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),ye.copy(St.boundingSphere.center)),ye.applyMatrix4(y.matrixWorld).applyMatrix4(Gt)),Array.isArray(gt)){let bt=St.groups;for(let At=0,Wt=bt.length;At<Wt;At++){let Yt=bt[At],wt=gt[Yt.materialIndex];wt&&wt.visible&&w.push(y,St,wt,q,ye.z,Yt,P)}}else gt.visible&&w.push(y,St,gt,q,ye.z,null,P)}}let xt=y.children;for(let St=0,gt=xt.length;St<gt;St++)fo(xt[St],P,q,z)}function Gl(y,P,q,z){let{opaque:k,transmissive:xt,transparent:St}=y;S.setupLightsView(q),Qt===!0&&It.setGlobalState(I.clippingPlanes,q),z&&x.viewport(it.copy(z)),k.length>0&&Ks(k,P,q),xt.length>0&&Ks(xt,P,q),St.length>0&&Ks(St,P,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Wl(y,P,q,z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[z.id]===void 0){let wt=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[z.id]=new Xe(1,1,{generateMipmaps:!0,type:wt?pn:Ke,minFilter:ri,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}let xt=S.state.transmissionRenderTarget[z.id],St=z.viewport||it;xt.setSize(St.z*I.transmissionResolutionScale,St.w*I.transmissionResolutionScale);let gt=I.getRenderTarget(),bt=I.getActiveCubeFace(),At=I.getActiveMipmapLevel();I.setRenderTarget(xt),I.getClearColor(ne),Ht=I.getClearAlpha(),Ht<1&&I.setClearColor(16777215,.5),I.clear(),F&&kt.render(q);let Wt=I.toneMapping;I.toneMapping=dn;let Yt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),S.setupLightsView(z),Qt===!0&&It.setGlobalState(I.clippingPlanes,z),Ks(y,q,z),K.updateMultisampleRenderTarget(xt),K.updateRenderTargetMipmap(xt),ft.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let re=0,Se=P.length;re<Se;re++){let pe=P[re],{object:he,geometry:Ue,material:Mt,group:ze}=pe;if(Mt.side===Ee&&he.layers.test(z.layers)){let te=Mt.side;Mt.side=Ge,Mt.needsUpdate=!0,Xl(he,q,z,Ue,Mt,ze),Mt.side=te,Mt.needsUpdate=!0,wt=!0}}wt===!0&&(K.updateMultisampleRenderTarget(xt),K.updateRenderTargetMipmap(xt))}I.setRenderTarget(gt,bt,At),I.setClearColor(ne,Ht),Yt!==void 0&&(z.viewport=Yt),I.toneMapping=Wt}function Ks(y,P,q){let z=P.isScene===!0?P.overrideMaterial:null;for(let k=0,xt=y.length;k<xt;k++){let St=y[k],{object:gt,geometry:bt,group:At}=St,Wt=St.material;Wt.allowOverride===!0&&z!==null&&(Wt=z),gt.layers.test(q.layers)&&Xl(gt,P,q,bt,Wt,At)}}function Xl(y,P,q,z,k,xt){B!==null&&k.isNodeMaterial&&B.setObject(y,k),y.onBeforeRender(I,P,q,z,k,xt),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(I,P,q,z,y,xt),k.transparent===!0&&k.side===Ee&&k.forceSinglePass===!1?(k.side=Ge,k.needsUpdate=!0,I.renderBufferDirect(q,P,z,k,y,xt),k.side=ii,k.needsUpdate=!0,I.renderBufferDirect(q,P,z,k,y,xt),k.side=Ee):I.renderBufferDirect(q,P,z,k,y,xt),y.onAfterRender(I,P,q,z,k,xt)}function js(y,P,q){P.isScene!==!0&&(P=Le);let z=X.get(y),k=S.state.lights,xt=S.state.shadowsArray,St=k.state.version,gt=ct.getParameters(y,k.state,xt,P,q,S.state.lightProbeGridArray),bt=ct.getProgramCacheKey(gt),At=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,z.fog=P.fog;let Wt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=at.get(y.envMap||z.environment,Wt),z.envMapRotation=z.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,At===void 0&&(y.addEventListener("dispose",mn),At=new Map,z.programs=At);let Yt=At.get(bt);if(Yt!==void 0){if(z.currentProgram===Yt&&z.lightsStateVersion===St)return Yl(y,gt),Yt}else gt.uniforms=ct.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,q,gt),y.onBeforeCompile(gt,I),Yt=ct.acquireProgram(gt,bt),At.set(bt,Yt),z.uniforms=gt.uniforms;let wt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(wt.clippingPlanes=It.uniform),Yl(y,gt),z.needsLights=wu(y),z.lightsStateVersion=St,z.needsLights&&(wt.ambientLightColor.value=k.state.ambient,wt.lightProbe.value=k.state.probe,wt.sunLights.value=k.state.sun,wt.sunLightShadows.value=k.state.sunShadow,wt.directionalLights.value=k.state.directional,wt.directionalLightShadows.value=k.state.directionalShadow,wt.spotLights.value=k.state.spot,wt.spotLightShadows.value=k.state.spotShadow,wt.rectAreaLights.value=k.state.rectArea,wt.ltc_1.value=k.state.rectAreaLTC1,wt.ltc_2.value=k.state.rectAreaLTC2,wt.pointLights.value=k.state.point,wt.pointLightShadows.value=k.state.pointShadow,wt.hemisphereLights.value=k.state.hemi,wt.sunShadowMatrix.value=k.state.sunShadowMatrix,wt.sunShadowCascade.value=k.state.sunShadowCascade,wt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,wt.spotLightMatrix.value=k.state.spotLightMatrix,wt.spotLightMap.value=k.state.spotLightMap,wt.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=S.state.lightProbeGridArray.length>0,z.currentProgram=Yt,z.uniformsList=null,Yt}function ql(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=is.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function Yl(y,P){let q=X.get(y);q.outputColorSpace=P.outputColorSpace,q.batching=P.batching,q.batchingColor=P.batchingColor,q.instancing=P.instancing,q.instancingColor=P.instancingColor,q.instancingMorph=P.instancingMorph,q.skinning=P.skinning,q.morphTargets=P.morphTargets,q.morphNormals=P.morphNormals,q.morphColors=P.morphColors,q.morphTargetsCount=P.morphTargetsCount,q.numClippingPlanes=P.numClippingPlanes,q.numIntersection=P.numClipIntersection,q.vertexAlphas=P.vertexAlphas,q.vertexTangents=P.vertexTangents,q.toneMapping=P.toneMapping}function Mu(y,P){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(P.matrixWorld);for(let q=0,z=y.length;q<z;q++){let k=y[q];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function Su(y,P,q,z,k){P.isScene!==!0&&(P=Le),K.resetTextureUnits();let xt=P.fog,St=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?P.environment:null,gt=rt===null?I.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Zt.workingColorSpace,bt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,At=at.get(z.envMap||St,bt),Wt=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Yt=!!q.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),wt=!!q.morphAttributes.position,re=!!q.morphAttributes.normal,Se=!!q.morphAttributes.color,pe=dn;z.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(pe=I.toneMapping);let he=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ue=he!==void 0?he.length:0,Mt=X.get(z),ze=S.state.lights;if(Qt===!0&&(ie===!0||y!==et)){let de=y===et&&z.id===$;It.setState(z,y,de)}let te=!1;z.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==ze.state.version||Mt.outputColorSpace!==gt||k.isBatchedMesh&&Mt.batching===!1||!k.isBatchedMesh&&Mt.batching===!0||k.isBatchedMesh&&Mt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Mt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Mt.instancing===!1||!k.isInstancedMesh&&Mt.instancing===!0||k.isSkinnedMesh&&Mt.skinning===!1||!k.isSkinnedMesh&&Mt.skinning===!0||k.isInstancedMesh&&Mt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Mt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Mt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Mt.instancingMorph===!1&&k.morphTexture!==null||Mt.envMap!==At||z.fog===!0&&Mt.fog!==xt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==It.numPlanes||Mt.numIntersection!==It.numIntersection)||Mt.vertexAlphas!==Wt||Mt.vertexTangents!==Yt||Mt.morphTargets!==wt||Mt.morphNormals!==re||Mt.morphColors!==Se||Mt.toneMapping!==pe||Mt.morphTargetsCount!==Ue||!!Mt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(te=!0):(te=!0,Mt.__version=z.version);let Qe=Mt.currentProgram;te===!0&&(Qe=js(z,P,k),B&&z.isNodeMaterial&&B.onUpdateProgram(z,Qe,Mt));let gn=!1,kn=!1,Si=!1,le=Qe.getUniforms(),Me=Mt.uniforms;if(x.useProgram(Qe.program)&&(gn=!0,kn=!0,Si=!0),z.id!==$&&($=z.id,kn=!0),Mt.needsLights){let de=Mu(S.state.lightProbeGridArray,k);Mt.lightProbeGrid!==de&&(Mt.lightProbeGrid=de,kn=!0)}if(gn||et!==y){x.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),le.setValue(R,"projectionMatrix",y.projectionMatrix),le.setValue(R,"viewMatrix",y.matrixWorldInverse);let Hn=le.map.cameraPosition;Hn!==void 0&&Hn.setValue(R,ce.setFromMatrixPosition(y.matrixWorld)),E.logarithmicDepthBuffer&&le.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&le.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),et!==y&&(et=y,kn=!0,Si=!0)}if(Mt.needsLights&&(ze.state.sunShadowMap.length>0&&le.setValue(R,"sunShadowMap",ze.state.sunShadowMap,K),ze.state.directionalShadowMap.length>0&&le.setValue(R,"directionalShadowMap",ze.state.directionalShadowMap,K),ze.state.spotShadowMap.length>0&&le.setValue(R,"spotShadowMap",ze.state.spotShadowMap,K),ze.state.pointShadowMap.length>0&&le.setValue(R,"pointShadowMap",ze.state.pointShadowMap,K)),k.isSkinnedMesh){le.setOptional(R,k,"bindMatrix"),le.setOptional(R,k,"bindMatrixInverse");let de=k.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),le.setValue(R,"boneTexture",de.boneTexture,K))}k.isBatchedMesh&&(le.setOptional(R,k,"batchingTexture"),le.setValue(R,"batchingTexture",k._matricesTexture,K),le.setOptional(R,k,"batchingIdTexture"),le.setValue(R,"batchingIdTexture",k._indirectTexture,K),le.setOptional(R,k,"batchingColorTexture"),k._colorsTexture!==null&&le.setValue(R,"batchingColorTexture",k._colorsTexture,K));let Vn=q.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&N.update(k,q,Qe),(kn||Mt.receiveShadow!==k.receiveShadow)&&(Mt.receiveShadow=k.receiveShadow,le.setValue(R,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&P.environment!==null&&(Me.envMapIntensity.value=P.environmentIntensity),Me.dfgLUT!==void 0&&(Me.dfgLUT.value=x0()),kn){if(le.setValue(R,"toneMappingExposure",I.toneMappingExposure),Mt.needsLights&&bu(Me,Si),xt&&z.fog===!0&&Rt.refreshFogUniforms(Me,xt),Rt.refreshMaterialUniforms(Me,z,nt,J,S.state.transmissionRenderTarget[y.id]),Mt.needsLights&&Mt.lightProbeGrid){let de=Mt.lightProbeGrid;Me.probesSH.value=de.texture,Me.probesMin.value.copy(de.boundingBox.min),Me.probesMax.value.copy(de.boundingBox.max),Me.probesResolution.value.copy(de.resolution)}is.upload(R,ql(Mt),Me,K)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(is.upload(R,ql(Mt),Me,K),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&le.setValue(R,"center",k.center),le.setValue(R,"modelViewMatrix",k.modelViewMatrix),le.setValue(R,"normalMatrix",k.normalMatrix),le.setValue(R,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){let de=z.uniformsGroups;for(let Hn=0,bi=de.length;Hn<bi;Hn++){let Zl=de[Hn];st.update(Zl,Qe),st.bind(Zl,Qe)}}return Qe}function bu(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.sunLights.needsUpdate=P,y.sunLightShadows.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function wu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(y,P,q){let z=X.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),X.get(y.texture).__webglTexture=P,X.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:q,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,P){let q=X.get(y);q.__webglFramebuffer=P,q.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,q=0){rt=y,Y=P,Z=q;let z=null,k=!1,xt=!1;if(y){let gt=X.get(y);if(gt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(R.FRAMEBUFFER,gt.__webglFramebuffer),it.copy(y.viewport),Ct.copy(y.scissor),Tt=y.scissorTest,x.viewport(it),x.scissor(Ct),x.setScissorTest(Tt),$=-1;return}else if(gt.__webglFramebuffer===void 0)K.setupRenderTarget(y);else if(gt.__hasExternalTextures)K.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Wt=y.depthTexture;if(gt.__boundDepthTexture!==Wt){if(Wt!==null&&X.has(Wt)&&(y.width!==Wt.image.width||y.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(y)}}let bt=y.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(xt=!0);let At=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(At[P])?z=At[P][q]:z=At[P],k=!0):y.samples>0&&K.useMultisampledRTT(y)===!1?z=X.get(y).__webglMultisampledFramebuffer:Array.isArray(At)?z=At[q]:z=At,it.copy(y.viewport),Ct.copy(y.scissor),Tt=y.scissorTest}else it.copy(_t).multiplyScalar(nt).floor(),Ct.copy(Vt).multiplyScalar(nt).floor(),Tt=ge;if(q!==0&&(z=W),x.bindFramebuffer(R.FRAMEBUFFER,z)&&x.drawBuffers(y,z),x.viewport(it),x.scissor(Ct),x.setScissorTest(Tt),k){let gt=X.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+P,gt.__webglTexture,q)}else if(xt){let gt=P;for(let bt=0;bt<y.textures.length;bt++){let At=X.get(y.textures[bt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+bt,At.__webglTexture,q,gt)}}else if(y!==null&&q!==0){let gt=X.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,gt.__webglTexture,q)}$=-1};function $l(y){let P=X.get(y);return(P.__readFormat!==y.format||P.__readType!==y.type)&&(P.__readFormat=y.format,P.__readType=y.type,P.__formatReadable=E.textureFormatReadable(y.format),P.__typeReadable=E.textureTypeReadable(y.type)),P}this.readRenderTargetPixels=function(y,P,q,z,k,xt,St,gt=0){if(!(y&&y.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(bt=bt[St]),bt){x.bindFramebuffer(R.FRAMEBUFFER,bt);try{let At=y.textures[gt],Wt=At.format,Yt=At.type;y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+gt);let wt=$l(At);if(wt.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-z&&q>=0&&q<=y.height-k&&R.readPixels(P,q,z,k,dt.convert(Wt),dt.convert(Yt),xt)}finally{let At=rt!==null?X.get(rt).__webglFramebuffer:null;x.bindFramebuffer(R.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(y,P,q,z,k,xt,St,gt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(bt=bt[St]),bt)if(P>=0&&P<=y.width-z&&q>=0&&q<=y.height-k){x.bindFramebuffer(R.FRAMEBUFFER,bt);let At=y.textures[gt],Wt=At.format,Yt=At.type;y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+gt);let wt=$l(At);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let re=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,re),R.bufferData(R.PIXEL_PACK_BUFFER,xt.byteLength,R.STREAM_READ),R.readPixels(P,q,z,k,dt.convert(Wt),dt.convert(Yt),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let Se=rt!==null?X.get(rt).__webglFramebuffer:null;x.bindFramebuffer(R.FRAMEBUFFER,Se);let pe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ph(R,pe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,re),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,xt),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(re),R.deleteSync(pe),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,P=null,q=0){let z=Math.pow(2,-q),k=Math.floor(y.image.width*z),xt=Math.floor(y.image.height*z),St=P!==null?P.x:0,gt=P!==null?P.y:0;K.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,q,0,0,St,gt,k,xt),x.unbindTexture()},this.copyTextureToTexture=function(y,P,q=null,z=null,k=0,xt=0){let St,gt,bt,At,Wt,Yt,wt,re,Se,pe=y.isCompressedTexture?y.mipmaps[xt]:y.image;if(q!==null)St=q.max.x-q.min.x,gt=q.max.y-q.min.y,bt=q.isBox3?q.max.z-q.min.z:1,At=q.min.x,Wt=q.min.y,Yt=q.isBox3?q.min.z:0;else{let Me=Math.pow(2,-k);St=Math.floor(pe.width*Me),gt=Math.floor(pe.height*Me),y.isDataArrayTexture?bt=pe.depth:y.isData3DTexture?bt=Math.floor(pe.depth*Me):bt=1,At=0,Wt=0,Yt=0}z!==null?(wt=z.x,re=z.y,Se=z.z):(wt=0,re=0,Se=0);let he=dt.convert(P.format),Ue=dt.convert(P.type),Mt;P.isData3DTexture?(K.setTexture3D(P,0),Mt=R.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(K.setTexture2DArray(P,0),Mt=R.TEXTURE_2D_ARRAY):(K.setTexture2D(P,0),Mt=R.TEXTURE_2D),x.activeTexture(R.TEXTURE0),x.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,P.flipY),x.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),x.pixelStorei(R.UNPACK_ALIGNMENT,P.unpackAlignment);let ze=x.getParameter(R.UNPACK_ROW_LENGTH),te=x.getParameter(R.UNPACK_IMAGE_HEIGHT),Qe=x.getParameter(R.UNPACK_SKIP_PIXELS),gn=x.getParameter(R.UNPACK_SKIP_ROWS),kn=x.getParameter(R.UNPACK_SKIP_IMAGES);x.pixelStorei(R.UNPACK_ROW_LENGTH,pe.width),x.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pe.height),x.pixelStorei(R.UNPACK_SKIP_PIXELS,At),x.pixelStorei(R.UNPACK_SKIP_ROWS,Wt),x.pixelStorei(R.UNPACK_SKIP_IMAGES,Yt);let Si=y.isDataArrayTexture||y.isData3DTexture,le=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){let Me=X.get(y),Vn=X.get(P),de=X.get(Me.__renderTarget),Hn=X.get(Vn.__renderTarget);x.bindFramebuffer(R.READ_FRAMEBUFFER,de.__webglFramebuffer),x.bindFramebuffer(R.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let bi=0;bi<bt;bi++)Si&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,X.get(y).__webglTexture,k,Yt+bi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,X.get(P).__webglTexture,xt,Se+bi)),R.blitFramebuffer(At,Wt,St,gt,wt,re,St,gt,R.DEPTH_BUFFER_BIT,R.NEAREST);x.bindFramebuffer(R.READ_FRAMEBUFFER,null),x.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||X.has(y)){let Me=X.get(y),Vn=X.get(P);x.bindFramebuffer(R.READ_FRAMEBUFFER,L),x.bindFramebuffer(R.DRAW_FRAMEBUFFER,H);for(let de=0;de<bt;de++)Si?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Me.__webglTexture,k,Yt+de):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Me.__webglTexture,k),le?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Vn.__webglTexture,xt,Se+de):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Vn.__webglTexture,xt),k!==0?R.blitFramebuffer(At,Wt,St,gt,wt,re,St,gt,R.COLOR_BUFFER_BIT,R.NEAREST):le?R.copyTexSubImage3D(Mt,xt,wt,re,Se+de,At,Wt,St,gt):R.copyTexSubImage2D(Mt,xt,wt,re,At,Wt,St,gt);x.bindFramebuffer(R.READ_FRAMEBUFFER,null),x.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else le?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(Mt,xt,wt,re,Se,St,gt,bt,he,Ue,pe.data):P.isCompressedArrayTexture?R.compressedTexSubImage3D(Mt,xt,wt,re,Se,St,gt,bt,he,pe.data):R.texSubImage3D(Mt,xt,wt,re,Se,St,gt,bt,he,Ue,pe):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,xt,wt,re,St,gt,he,Ue,pe.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,xt,wt,re,pe.width,pe.height,he,pe.data):R.texSubImage2D(R.TEXTURE_2D,xt,wt,re,St,gt,he,Ue,pe);x.pixelStorei(R.UNPACK_ROW_LENGTH,ze),x.pixelStorei(R.UNPACK_IMAGE_HEIGHT,te),x.pixelStorei(R.UNPACK_SKIP_PIXELS,Qe),x.pixelStorei(R.UNPACK_SKIP_ROWS,gn),x.pixelStorei(R.UNPACK_SKIP_IMAGES,kn),xt===0&&P.generateMipmaps&&R.generateMipmap(Mt),x.unbindTexture()},this.initRenderTarget=function(y){X.get(y).__webglFramebuffer===void 0&&K.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?K.setTextureCube(y,0):y.isData3DTexture?K.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?K.setTexture2DArray(y,0):K.setTexture2D(y,0),x.unbindTexture()},this.resetState=function(){Y=0,Z=0,rt=null,x.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var rs=Math.PI*2,$h=Pe.clamp,On=s=>(s=$h(s,0,1),s*s*(3-2*s)),ja=["\u4F60\u597D","\u4EC0\u4E48\u662F\u55B7\u6C14\u80CC\u5305\uFF1F","\u53BB\u54EA\u83B7\u53D6\u94C1\u77FF\u77F3"];function _0(s){let t=ja.reduce((n,i)=>n+(i.length-1)*.14+.46,0),e=s%t;for(let n=0;n<ja.length;n++){let i=ja[n],r=(i.length-1)*.14+.46;if(e<r){let a=(i.length-1)*.14;return{index:n,count:Math.min(i.length,Math.floor(e/.14)+1),text:e<a+.3?i.slice(0,Math.floor(e/.14)+1):"",speaking:e<a}}e-=r}}function v0(s){let t=s%8,e,n,i=0,r;if(t<4)e=t/4*rs,n=1,r="drive";else if(t<5.1){let a=(t-4)/1.1;e=rs+On(a)*Math.PI/2,n=1-a,i=Math.sin(Math.PI*a)*.8,r="drift"}else e=rs+Math.PI/2,n=0,r=t<5.55?"stop":t<6.05?"horn":"rest";if(t>6.5){let a=On((t-6.5)/1.5);e=rs+Math.PI/2+a*Math.PI*1.5,n=Math.sin(Math.PI*a)*.6,r="return"}return{x:1.05*Math.sin(e),z:.82*Math.cos(e),heading:Math.atan2(1.05*Math.cos(e),-.82*Math.sin(e))-i,speed:n,phase:r}}function y0(s){let t=s*1.1,e=Math.floor(t),n=t-e,i=[-.25,.26,-.12,.2,-.28,.08],r=i[e%i.length],a=i[(e+1)%i.length];return{x:(e%2?1-n:n)*1.84-.92,y:Pe.lerp(r,a,n),left:e%2?a:r,right:e%2?r:a}}function Zh(s){let t=document.createElement("canvas");t.width=72,t.height=96;let e=t.getContext("2d");e.fillStyle="#e6d9b2",e.fillRect(0,0,72,96),e.fillStyle=["#8eb3af","#c4a384","#93a4ba"][s%3],e.fillRect(4,4,64,88),e.fillStyle="#e9d6a0",e.fillRect(44,16,12,12),e.fillStyle=["#607969","#7c7768","#677d93"][s%3];for(let n=0;n<8;n++)e.fillRect(n*10,48-n%3*8,12,48);e.fillStyle="#485f59";for(let n=0;n<6;n++)e.fillRect(n*14,66-n%2*12,16,40);return t}var Jh=s=>{let t=new pi(s);return t.magFilter=t.minFilter=_e,t.colorSpace=we,t};function Kh(){let s=new Ot,t=[];for(let e=0;e<3;e++){let n=new wn(.74,1,24,8),i=new ee(n,new ve({map:Jh(Zh(e)),side:Ee}));i.userData.flat=n.attributes.position.array.slice(),s.add(i),t.push(i)}return s.userData.dynamic=!0,{group:s,panels:t,update(e){let n=e%10,i=On(n/1.1)*(1-On((n-8.1)/1.1)),r=On((n-1.1)/7)*rs*2;for(let a=0;a<3;a++){let o=t[a],l=o.geometry.attributes.position,c=o.userData.flat;for(let h=0;h<l.count;h++){let d=h*3,u=(a-1)*rs/3+c[d]/.74*1.72+r;l.setXYZ(h,Pe.lerp(c[d]+(a-1)*.86,Math.sin(u)*.86,i),1.05+c[d+1]*(1+i*.35),Pe.lerp(-.39,Math.cos(u)*.86,i))}l.needsUpdate=!0,o.geometry.computeBoundingSphere()}return i}}}function jh(){let s=document.createElement("canvas");s.width=192,s.height=144;let t=s.getContext("2d"),e=Jh(s),n=[0,1,2].map(Zh),i=new Ot;i.userData.dynamic=!0;let r=new ee(new Ie(2.7,2.04,.12),new ve({color:15656651}));i.add(r);let a=new ee(new wn(2.56,1.92),new ve({map:e,side:Ee}));return a.position.z=.07,i.add(a),i.position.set(0,2,-.65),{group:i,update(o){t.fillStyle="#293c3d",t.fillRect(0,0,192,144),t.save(),t.beginPath(),t.rect(0,0,192,144),t.clip();let l=o*10%396,c=o*30%258;for(let h=Math.floor(l/66)-2;h<Math.floor(l/66)+5;h++)for(let d=Math.floor(c/86)-2;d<Math.floor(c/86)+5;d++){let u=h*66-l,m=d*86-c+(h%2+2)%2*28;t.drawImage(n[((d+h)%3+3)%3],u,m,58,77)}t.restore(),e.needsUpdate=!0}}}var Qa=class{constructor({element:t,islands:e,world:n,onSound:i}){Object.assign(this,{element:t,islands:e,world:n,onSound:i}),this.active=-1,this.elapsed=0,this.lastSpeech="",this.lastLine=-1,this.bubble=document.createElement("div"),this.bubble.className="bot-bubble",this.bubble.hidden=!0,this.bubble.setAttribute("aria-hidden","true"),t.append(this.bubble)}update(t,e,n,i,r){if(e!==this.active&&(this.active>=0&&this.reset(this.active),this.active=e,this.elapsed=0,this.lastSpeech="",this.lastLine=-1,this.onSound?.({id:null})),this.bubble.hidden=!0,e<0)return;this.elapsed+=t;let a=this.world.stations[e],o=this.islands[e].group,l=o.userData.motion,c=this.elapsed,h=l.exhibit,d="active";if(a.id==="brushline"){let u=v0(c);l.car.position.set(u.x,0,u.z),l.car.rotation.y=u.heading-Math.PI/2,d=u.phase,l.dust.visible=d==="drift",l.dust.children.forEach((m,g)=>{m.position.set(u.x-Math.sin(u.heading)*(.2+g*.12),.13+g*.02,u.z-Math.cos(u.heading)*(.2+g*.12)),m.scale.setScalar(.09+Math.sin(c*12+g)*.02)}),this.onSound?.({id:"brushline",phase:d,speed:u.speed})}else if(a.id==="noartfps")l.targets.forEach((u,m)=>{let g=(c+m*1.3)%2.6;u.position.x=u.userData.home.x+Math.sin(g*Math.PI/1.3)*.18,u.scale.y=g>1.8?Math.max(.15,1-(g-1.8)*3):1});else if(a.id==="museum"){let u=l.photos.update(c);l.wall.visible=u<.05}else if(a.id==="cloudgame"){let u=y0(c);l.ball.position.set(u.x,1.18+u.y,-.28),l.paddles[0].position.y=1.18+u.left,l.paddles[1].position.y=1.18+u.right}else if(a.id==="bot"){let u=_0(c),m=u.index+":"+u.count;h.position.y=l.y+Math.sin(c*7)*.035,h.rotation.z=Math.sin(c*5)*.035,this.bubble.textContent=u.text;let g=new D(a.x,a.y+3.2,a.z).project(n);this.bubble.style.left=`${(g.x*.5+.5)*i}px`,this.bubble.style.top=`${(.5-g.y*.5)*r}px`,this.bubble.hidden=!u.text;let v=this.bubble.offsetWidth/2+8;this.bubble.style.left=`${$h((g.x*.5+.5)*i,v,i-v)}px`,this.bubble.style.top=`${Math.max(55,(.5-g.y*.5)*r)}px`,u.index!==this.lastLine&&(this.lastLine=u.index,this.onSound?.({id:"bot",phase:"line",text:ja[u.index]})),u.speaking&&m!==this.lastSpeech&&(this.lastSpeech=m,this.onSound?.({id:"bot",phase:"syllable",pitch:u.count}))}else if(a.id==="accelerator"){let u=c*2.1;l.packet.visible=!0,l.packet.position.set(Math.cos(u)*1.12,Math.sin(u)*.47,Math.sin(u)*1.05)}else if(a.id==="xidian"){let u=On(c%5/1)*(1-On((c%5-3.5)/1));l.map.visible=u>.01,l.map.scale.setScalar(Math.max(.01,u)),l.map.children.forEach((m,g)=>m.rotation.y=(g-1)*(1-u)*1.4)}else if(a.id==="ishowfx"||a.id==="uwp")l.flow.group.visible=!0,l.flow.update(c);else if(a.id==="reader")l.page.rotation.y=Math.sin(c*2)*1.35;else if(a.id==="cleaner")l.bits.forEach((u,m)=>{let g=(c*.6+m*.23)%1;u.position.set((m%3-1)*.8,.2+Math.sin(g*Math.PI)*1.1,.9*(1-g)),u.scale.copy(u.userData.homeScale).multiplyScalar(Math.max(.04,1-g)),u.rotation.z=g*2});else if(a.id==="pgos")l.nodes.forEach((u,m)=>{let g=(c*.65+m*.33)%1;u.position.set((m-1)*.8*(1-g),.3+Math.sin(g*Math.PI)*.8,.95-g*1.2),u.scale.copy(u.userData.homeScale).multiplyScalar(1-g*.45)});else if(a.id==="win10")l.tiles.forEach((u,m)=>{let g=c%4,v=On((g-m*.06)/.7)*(1-On((g-2.6)/.7));u.scale.copy(u.userData.homeScale).multiplyScalar(Math.max(.001,v)),u.position.y=1+Math.floor(m/3)*.28+v*.1});else if(a.id==="desktop"){let u=c%2/2;l.sync.visible=!0,l.sync.position.set(-.4+u*1.4,1.25+Math.sin(u*Math.PI)*.65,.4),l.sync.rotation.y=c*3}else a.id==="nex"?(l.cursor.visible=!0,l.cursor.position.y=1.65-c*.6%1*.75,l.cursor.scale.x=.5+(Math.sin(c*6)+1)*.3):a.type==="compiler"?l.kmTokens.forEach((u,m)=>{u.position.y=u.userData.home.y+Math.max(0,Math.sin(c*2-m*.8))*.3}):a.type==="spellbook"?(l.kmOrbit.rotation.y=c*.7,l.kmOrbit.position.y=2.12+Math.sin(c*2)*.08):a.type==="nat"&&l.kmTokens.forEach((u,m)=>{let g=(c*.45+m/3)%1;u.position.set((m-1)*.65*(1-g),.25+g*.7,.8-g*1.8)});a.id!=="brushline"&&a.id!=="bot"&&this.onSound?.({id:a.id,phase:d,time:c}),this.element.dataset.hoverProject=a.id,this.element.dataset.hoverTime=c.toFixed(2),this.element.dataset.hoverPhase=d}reset(t){let e=this.islands[t].group.userData.motion;if(e){e.exhibit.position.y=e.y,e.exhibit.rotation.z=0,e.car&&(e.car.position.set(.25,0,.83),e.car.rotation.y=0,e.dust.visible=!1),e.targets&&e.targets.forEach(n=>{n.position.copy(n.userData.home),n.scale.set(1,1,1)}),e.photos&&(e.photos.update(0),e.wall.visible=!0),e.ball&&(e.ball.position.set(.14,1.28,-.28),e.paddles.forEach(n=>n.position.y=1.18));for(let n of["packet","map","sync","cursor"])e[n]&&(e[n].visible=!1);e.flow&&(e.flow.group.visible=!1,e.flow.update(0)),e.page&&(e.page.rotation.y=0),e.kmOrbit&&(e.kmOrbit.rotation.y=0,e.kmOrbit.position.y=2.12),e.kmTokens&&e.kmTokens.forEach(n=>n.position.copy(n.userData.home));for(let n of["bits","nodes","tiles"])e[n]&&e[n].forEach(i=>{i.position.copy(i.userData.home),i.rotation.set(0,0,0),i.scale.copy(i.userData.homeScale).multiplyScalar(n==="tiles"?.001:1)});this.element.dataset.hoverProject="",this.element.dataset.hoverTime="0",this.element.dataset.hoverPhase=""}}},to=class{constructor(t){this.element=t,this.wait=10+Math.random()*5,this.items=[],this.count=0}update(t,e,n,i=n*.625){if(!e){for(let r of this.items)r.el.remove();this.items=[];return}if(this.wait-=t,this.wait<=0){this.wait=10+Math.random()*5,this.count++;for(let r=0;r<2;r++){let a=document.createElement("div");a.className="pixel-meteor",a.setAttribute?.("aria-hidden","true"),a.innerHTML='<span class="meteor-tail"><i></i><i></i><i></i><i></i><i></i></span><span class="meteor-core"></span>',this.element.append(a),this.items.push({el:a,t:-r*.28,life:2.8+Math.random()*.5})}}this.items=this.items.filter(r=>{if(r.t+=t,r.t>=r.life)return r.el.remove(),!1;let a=Math.max(0,r.t/r.life);r.el.style.opacity=String(r.t<0?0:.78*Math.pow(1-a,1.25));let o=Math.max(0,n-16),l=Math.max(0,i*.25-16);return r.el.style.transform=`translate(${(1-a)*o}px,${a*l}px)`,r.el.style.setProperty?.("--meteor-angle",`${-Math.atan2(l,o)*180/Math.PI}deg`),!0}),this.element.dataset.meteorPasses=String(this.count),this.element.dataset.meteorNext=this.wait.toFixed(2)}};var M0={N:["10001","11001","10101","10011","10001","10001","10001"],E:["11111","10000","10000","11110","10000","10000","11111"],X:["10001","10001","01010","00100","01010","10001","10001"],P:["11110","10001","10001","11110","10000","10000","10000"],G:["01111","10000","10000","10111","10001","10001","01111"],O:["01110","10001","10001","10001","10001","10001","01110"],S:["01111","10000","10000","01110","00001","00001","11110"]};function Qh(s){let t=document.createElement("canvas");t.width=96,t.height=40;let e=t.getContext("2d");if(e.fillStyle="#294044",e.fillRect(0,0,96,40),s==="win10"){e.fillStyle="#ffffff";for(let a of[32,50])for(let o of[5,23])e.fillRect(a,o,14,14)}else{let a=s==="nex"?"NEX":"PGOS",o=3,l=(96-(a.length*6-1)*o)/2;e.fillStyle=s==="pgos"?"#edbd69":"#eee6cb",[...a].forEach((c,h)=>M0[c].forEach((d,u)=>[...d].forEach((m,g)=>{m==="1"&&e.fillRect(l+(h*6+g)*o,9+u*o,o,o)})))}let n=new pi(t);n.colorSpace=we,n.magFilter=n.minFilter=_e;let i=new wn(4.4,1.84,24,10),r=new ee(i,new ve({map:n,side:Ee}));return r.position.set(0,3.8,0),r.userData.base=new Float32Array(i.attributes.position.array),r}function tu(s,t,e){let n=s.geometry.attributes.position,i=s.userData.base;for(let r=0;r<n.count;r++){let a=r*3,o=(i[a]+2.2)/4.4,l=t*2.4-o*5.5;n.setXYZ(r,i[a],i[a+1]+(e?0:Math.sin(l+.7)*.08*o),e?0:(Math.sin(l)*.25+Math.sin(l*1.6+i[a+1])*.04)*o)}n.needsUpdate=!0,s.geometry.computeBoundingSphere()}function eu(){let s=new Ot;s.userData.dynamic=!0,s.position.set(0,2.65,.35);let t=new ee(new Ls(.82,16,10),new ve({color:3374511,wireframe:!1}));s.add(t);for(let n of[-.45,0,.45]){let i=Math.sqrt(.7055999999999999-n*n),r=[];for(let a=0;a<=32;a++){let o=a/32*Math.PI*2;r.push(new D(Math.cos(o)*i,n,Math.sin(o)*i))}s.add(new jn(new Te().setFromPoints(r),new bn({color:8635342})))}for(let n of[0,Math.PI/3,2*Math.PI/3]){let i=[];for(let r=0;r<=32;r++){let a=r/32*Math.PI*2;i.push(new D(Math.cos(a)*Math.cos(n)*.84,Math.sin(a)*.84,Math.cos(a)*Math.sin(n)*.84))}s.add(new jn(new Te().setFromPoints(i),new bn({color:8635342})))}let e=[];for(let n=0;n<=24;n++){let i=n/24*Math.PI*1.5;e.push(new D(Math.cos(i)*1.12,Math.sin(i)*.47,Math.sin(i)*1.05))}s.add(new jn(new Te().setFromPoints(e),new bn({color:14988124})));for(let n of[0,24]){let i=new ee(new Ie(.14,.14,.14),new ve({color:16766347}));i.position.copy(e[n]),s.add(i)}return s}function nu(s,{width:t,height:e,top:n=0,bottom:i=0,obstacles:r=[]}){let a=r.slice(),o=6,l=(c,h)=>c.x<h.x+h.width+o&&c.x+c.width+o>h.x&&c.y<h.y+h.height+o&&c.y+c.height+o>h.y;return s.map(c=>{let h=(v,p,f)=>Math.max(p,Math.min(Math.max(p,f),v)),d=h(c.x,6,t-c.width-6),u=h(c.y,n,e-i-c.height),m={...c,x:d,y:u},g=1/0;for(let v=0;v<12;v++)for(let p of v?[-1,1]:[0]){let f={...c,x:d,y:h(u+p*v*(c.height+o),n,e-i-c.height)},b=a.filter(M=>l(f,M)).length,A=b*1e4+Math.abs(f.y-u);if(A<g&&(m=f,g=A),!b)break}return a.push(m),m})}var eo=class{constructor(){this.group=new Ot,this.credit=0,this.target=null,this.seed=173;let t=new Ie(1,1,1);this.particles=Array.from({length:12},()=>{let e=new ee(t,new ve({color:15790569,transparent:!0,opacity:0,depthWrite:!1}));return e.visible=!1,this.group.add(e),{mesh:e,age:0,life:0,origin:new D}})}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}spawn(t){let e=this.particles.find(r=>!r.mesh.visible);if(!e)return;e.age=0,e.life=1.1+this.random()*.4,e.size=.11+this.random()*.04;let n=(this.random()-.5)*t.size*.6,i=t.size*.28;e.origin.set(t.x+i+n*.5,t.y-1.45,t.z+i-n*.5),e.dx=(this.random()-.5)*.35,e.dz=(this.random()-.5)*.35,e.mesh.position.copy(e.origin),e.mesh.visible=!0,e.mesh.material.opacity=.5,e.mesh.scale.setScalar(e.size)}update(t,e,n=!0){if(!n){this.particles.forEach(i=>i.mesh.visible=!1),this.credit=0,this.target=null;return}if(e?.id!==this.target&&(this.target=e?.id,this.credit=e?1:0),e)for(this.credit+=t*6;this.credit>=1;)this.spawn(e),this.credit--;for(let i of this.particles){if(!i.mesh.visible)continue;i.age+=t;let r=i.age/i.life;if(r>=1){i.mesh.visible=!1;continue}i.mesh.position.set(i.origin.x+i.dx*r,i.origin.y-1.7*r-.65*r*r,i.origin.z+i.dz*r),i.mesh.material.opacity=.5*(1-r)**1.5,i.mesh.scale.setScalar(i.size*(1-r*.35))}}get activeCount(){return this.particles.filter(t=>t.mesh.visible).length}};var iu=s=>Math.max(0,Math.min(1,s)),no=(s,t,e)=>s.to>=t-1e-8&&s.from<=e+1e-8,io=class{constructor(t){this.world=t,this.time=0,this.lanes=t.edges.filter(e=>e.shortcut).map(e=>{let n=Math.ceil(e.length/.8);return{edge:e,direction:0,age:0,origin:0,occupied:!1,tiles:Array.from({length:n},(i,r)=>({from:r/n,to:(r+1)/n,lift:0,wanted:!1,lowerAt:0}))}}),this.byEdge=new Map(this.lanes.map(e=>[e.edge.id,e]))}approach(t){let e=new Map,n=0;if(t.phase==="walking")for(let i of t.segments)this.byEdge.has(i.edge)&&n<=3&&e.set(i.edge,i),n+=Math.abs(i.to-i.from)*this.world.edges[i.edge].length;return e}update(t,e,n=!1){this.time+=t;let i=this.approach(e);for(let r of this.lanes){let{edge:a,tiles:o}=r,l=i.get(a.id);r.occupied=e.location.edge===a.id;let c=r.occupied?e.location.t:null,h=l?Math.sign(l.to-l.from):0;h&&h!==r.direction&&(r.direction=h,r.lastDirection=h,r.age=0,r.origin=l.from),l?r.age+=t:r.direction=0;let d=[];for(let u=0;u<o.length;u++){let m=o[u],g=c!==null&&no(m,c-.85/a.length,c+.85/a.length),v=l&&no(m,Math.min(l.from,l.to),Math.max(l.from,l.to)),p=Math.max(0,h>0?u-r.origin*o.length:r.origin*o.length-u-1),f=!!g||!!(v&&r.age>=p*.045);m.wanted&&!f&&d.push(m),m.wanted=f}r.lastDirection<0&&d.reverse(),d.forEach((u,m)=>u.lowerAt=this.time+.16+m*.045);for(let u of o){if(n){u.lift=r.occupied&&no(u,c-.85/a.length,c+.85/a.length)?1:0;continue}u.wanted?u.lift=iu(u.lift+t/.48):this.time>=u.lowerAt&&(u.lift=iu(u.lift-t/.6))}}}canTraverse(t,e,n){let i=this.byEdge.get(t.id);if(!i)return!0;let r=.38/t.length;return i.tiles.every(a=>!no(a,Math.min(e,n)-r,Math.max(e,n)+r)||a.lift>=1-1e-8)}focusEdge(t){if(t.phase!=="walking")return null;if(this.byEdge.has(t.location.edge))return this.world.edges[t.location.edge];let e=this.approach(t).keys().next().value;return e===void 0?null:this.world.edges[e]}get moving(){return this.lanes.some(t=>t.tiles.some(e=>e.wanted?e.lift<1:e.lift>0))}snapshot(t){return this.lanes.map(e=>({id:e.edge.shortcut,visible:e.tiles.filter(n=>n.lift>0).length,ready:e.tiles.filter(n=>n.lift>=1-1e-8).length,total:e.tiles.length,occupied:t.location.edge===e.edge.id,rising:e.tiles.filter(n=>n.wanted&&n.lift>0&&n.lift<1).length,falling:e.tiles.filter(n=>!n.wanted&&n.lift>0).length,supported:t.location.edge!==e.edge.id||this.canTraverse(e.edge,t.location.t,t.location.t)}))}};function ru(s,t,e){let n=new Ie(s,t,e),i=[.77,.64,1,.5,.86,.66],r=[];for(let a of i)for(let o=0;o<4;o++)r.push(a,a,a);return n.setAttribute("color",new fe(r,3)),n}var Fl=ru(1,1,1),Nl=new Map,G={stone:10858134,dark:3557707,ink:2109237,cream:15656651,gold:14988124,green:7374936,red:12152148};function Ol(s){return Nl.has(s)||Nl.set(s,new ve({color:s,vertexColors:!0})),Nl.get(s)}function V(s,t,e,n,i,r,a,o=G.stone){let l=new ee(Fl,Ol(o));return l.position.set(t,e,n),l.scale.set(i,r,a),s.add(l),l}function Ne(s){return s.userData.dynamic=!0,s}function Ul(s,t,e,n,i,r,a="code"){if(V(s,t,e,n,i+.12,r+.12,.16,G.stone),V(s,t,e,n+.09,i,r,.025,G.ink),a==="pong"){let o=s.userData.motion;o.paddles=[Ne(V(s,t-.45*i,e,n+.12,.06,.3,.02,G.cream)),Ne(V(s,t+.45*i,e,n+.12,.06,.3,.02,G.cream))],o.ball=Ne(V(s,t+.14,e+.1,n+.12,.075,.075,.03,G.gold))}else if(a==="windows")for(let o=0;o<3;o++)for(let l=0;l<3;l++)V(s,t-i*.28+o*i*.28,e-r*.3+l*r*.3,n+.12,i*.23,r*.22,.02,[6326946,G.gold,G.green][(o+l)%3]);else for(let o=0;o<7;o++)V(s,t-i*.34,e+r*.36-o*r*.11,n+.12,.06,.025,.02,G.gold),V(s,t+.04,e+r*.36-o*r*.11,n+.12,i*(.28+o%3*.12),.025,.02,o%3?7117983:G.gold);V(s,t,e-r/2-.18,n,.15,.32,.18,G.dark),V(s,t,e-r/2-.35,n,.6,.05,.4,G.dark)}function su(s,t,e){V(s,t,.15,e,.36,.3,.36,G.dark),V(s,t,.5,e,.09,.55,.09,8417359);for(let n=0;n<3;n++)V(s,t+n%2*.12,.65+n*.16,e,.42-n*.08,.25,.38-n*.07,G.green)}function S0(s,t){let e=new Ot;e.position.set(.35,0,-.45);let n=e.userData.motion={};switch(s){case"arena":V(e,0,.06,0,2.9,.12,2.25,15124600),V(e,-.8,.46,-.65,1.2,.8,.58,12152148),V(e,.65,.39,-.55,.9,.66,.65,5211520),V(e,.65,.99,-.55,.9,.54,.65,G.cream);for(let i=0;i<4;i++)V(e,-1.25+i*.3,.48,-.35,.035,.55,.02,G.gold);V(e,.8,.22,.65,.65,.32,.35,3759535),n.targets=[];for(let[i,r]of[[-.65,.55],[.1,-.2]]){let a=Ne(new Ot);a.position.set(i,.12,r),a.userData.home=a.position.clone(),e.add(a),V(a,0,.25,0,.24,.36,.2,G.dark),V(a,0,.55,0,.22,.22,.22,G.cream),V(a,0,.29,.12,.12,.12,.035,G.gold),n.targets.push(a)}break;case"race":V(e,0,.04,0,2.7,.08,2.2,G.dark),V(e,0,.09,0,1.4,.04,1.05,G.green);for(let i=0;i<7;i++)V(e,-1.2+i*.4,.1,.9,.15,.015,.035,G.cream),V(e,-1.2+i*.4,.1,-.9,.15,.015,.035,G.cream);n.car=Ne(new Ot),e.add(n.car),n.car.position.set(.25,0,.83),V(n.car,0,.23,0,.76,.25,.36,G.red),V(n.car,-.03,.42,0,.38,.18,.3,G.cream),V(n.car,-.03,.44,.17,.25,.1,.018,G.dark);for(let i of[-.27,.27])for(let r of[-.2,.2])V(n.car,i,.18,r,.16,.2,.08,G.ink);n.dust=Ne(new Ot),e.add(n.dust),n.dust.visible=!1;for(let i=0;i<5;i++)V(n.dust,0,0,0,.1,.1,.1,12695962);V(e,-1.22,.8,-.5,.07,1.6,.07,G.cream);for(let i=0;i<4;i++)for(let r=0;r<3;r++)V(e,-1.15+i*.13,1.4-r*.13,-.5,.13,.13,.035,(i+r)%2?G.cream:G.ink);break;case"photos":n.wall=Ne(V(e,0,.95,-.55,2.65,1.9,.13,G.dark)),n.photos=Kh(),e.add(n.photos.group),n.photos.update(0),V(e,0,.36,.65,1.8,.13,.45,9008731);for(let i of[-.7,.7])V(e,i,.17,.65,.1,.3,.25,G.dark);break;case"code":case"desktop":case"windows":V(e,0,.6,.1,2.25,.12,1.35,G.stone);for(let i of[-.9,.9])V(e,i,.28,.1,.12,.55,.8,G.dark);Ul(e,-.1,1.38,-.25,1.45,1,s==="windows"?"windows":"code"),V(e,-.1,.7,.48,.9,.04,.32,G.dark),s==="desktop"?(V(e,1,1,-.1,.36,.7,.08,G.dark),V(e,1,1,-.05,.27,.52,.02,G.gold)):V(e,1.05,1.1,-.2,.4,.9,.65,G.dark);break;case"servers":case"network":for(let i=0;i<(s==="servers"?3:2);i++){let r=-.75+i*.75;V(e,r,.8,-.25,.56,1.6,.7,G.dark);for(let a=0;a<5;a++)V(e,r,.24+a*.27,.12,.44,.17,.04,6320491),V(e,r-.12,.24+a*.27,.15,.05,.045,.02,G.gold)}for(let i=0;i<3;i++)V(e,-.8+i*.8,.22,.95,.4,.44,.4,G.gold),i<2&&V(e,-.4+i*.8,.06,.95,.4,.045,.045,G.cream);s==="network"&&(V(e,0,1.3,-.3,.07,1.5,.07,G.cream),V(e,0,2,-.3,1.2,.07,.07,G.gold));break;case"pong":Ul(e,0,1.18,-.4,2.15,1.25,"pong"),V(e,0,.24,.65,.9,.2,.5,G.stone),V(e,-.2,.43,.7,.07,.25,.07,G.red);break;case"bot":V(e,0,.65,0,1,.85,.68,G.dark),V(e,0,1.38,0,1.2,.72,.82,G.stone),V(e,0,1.4,.43,.9,.37,.035,G.ink);for(let i of[-.24,.24])V(e,i,1.42,.46,.12,.12,.02,G.gold);V(e,0,1.9,0,.07,.3,.07,G.gold);for(let i of[-.67,.67])V(e,i,.85,0,.23,.55,.25,G.stone),V(e,i*.5,.18,0,.3,.25,.5,G.dark);break;case"cleaner":for(let i=0;i<3;i++)V(e,-.8+i*.8,.35,0,.62,.7,.7,[G.green,G.stone,G.gold][i]),V(e,-.8+i*.8,.75,0,.72,.09,.78,G.dark);V(e,.8,.95,.7,.06,1.5,.06,9533780),V(e,.8,.22,.7,.5,.28,.18,G.cream);break;case"feed":case"books":if(s==="books"){V(e,0,.95,-.3,2.1,1.9,.5,G.dark);for(let i=0;i<3;i++){V(e,0,.1+i*.6,0,2.2,.09,.65,G.stone);for(let r=0;r<7;r++)V(e,-.88+r*.28,.36+i*.6,-.05,.19,.4+r%2*.1,.38,[G.red,G.gold,G.green][r%3])}}else for(let i=0;i<3;i++){V(e,-.8+i*.8,.9,-i*.15,.65,1.65,.12,G.cream);for(let r=0;r<3;r++)V(e,-.8+i*.8,1.43-r*.44,-i*.15+.07,.52,.24,.02,[G.green,G.dark,G.gold][r])}break;case"printer":V(e,0,.65,0,1.7,.9,1.1,G.stone),V(e,0,1.14,-.2,1.4,.13,.6,G.dark),V(e,0,.5,.7,1.15,.04,.7,G.cream),V(e,0,.53,.75,.9,.02,.45,G.green),Ul(e,-.65,1.6,-.55,.55,.6,"windows");break;case"compiler":{V(e,0,.25,0,2.3,.5,1.65,G.dark),V(e,-.8,1.35,-.5,.85,1.75,.14,G.cream);for(let r=0;r<5;r++)V(e,-.8,1.85-r*.23,-.41,.55-r%2*.18,.045,.02,r<2?G.red:G.dark);let i=new Ot;e.add(i),i.position.set(.7,.6,.1),V(i,0,1.18,0,.12,1.75,.12,G.gold),V(i,0,.85,0,1.25,.09,.09,G.gold);for(let r of[-.57,.57])V(i,r,.55,0,.09,.68,.09,G.gold),V(i,r,.23,0,.65,.09,.09,G.gold),V(i,r,.9,0,.26,.28,.22,G.green);V(i,0,1.85,0,.37,.4,.3,G.cream),n.kmTokens=[];for(let r=0;r<4;r++){let a=Ne(V(i,-.87+r*.58,.23,.12,.17,.17,.17,G.cream));a.userData.home=a.position.clone(),n.kmTokens.push(a)}break}case"spellbook":{V(e,0,.3,0,.8,.6,.65,G.dark),V(e,0,.65,0,1.4,.13,.95,G.gold);let i=new Ot;e.add(i),i.position.set(0,1.24,0),i.rotation.x=-.34;for(let a of[-1,1]){let o=new Ot;o.rotation.y=a*.28,i.add(o),V(o,a*.45,0,0,.92,1.05,.12,G.red),V(o,a*.43,.02,.09,.78,.9,.07,G.cream);for(let l=0;l<4;l++)V(o,a*.43,.3-l*.17,.14,.5,.035,.02,G.dark)}V(i,0,0,.12,.07,1.15,.1,G.gold),n.kmOrbit=Ne(new Ot),e.add(n.kmOrbit),n.kmOrbit.position.y=2.12;for(let a=0;a<3;a++){let o=a*Math.PI*2/3;V(n.kmOrbit,Math.cos(o)*.8,Math.sin(o)*.2,Math.sin(o)*.65,.22,.22,.22,[G.gold,G.cream,G.green][a])}let r=V(e,1.15,1.2,.1,.09,1.2,.09,G.dark);r.rotation.z=-.45,V(e,1.38,1.77,.1,.25,.25,.18,G.gold);break}case"nat":{V(e,0,.35,-.1,.7,.7,.75,G.dark),V(e,0,.75,-.1,.92,.1,.92,G.cream);for(let i of[-.36,.36])V(e,i,1.02,-.3,.06,.56,.06,G.dark);V(e,0,.42,.3,.35,.08,.035,G.gold);for(let i of[-.9,.9])V(e,i,.18,.8,.48,.35,.4,G.green),V(e,i,.09,.25,.07,.08,.7,G.cream);V(e,0,.1,.25,1.8,.08,.07,G.cream),V(e,0,.1,-.9,.07,.08,.9,G.gold);for(let i of[-.6,0,.6])V(e,i,1.7,-1,.48,.38,.4,G.cream),V(e,i,1.63,-1,.58,.2,.45,G.cream);V(e,0,1,-1,.08,.9,.08,G.gold),n.kmTokens=[];for(let i=0;i<3;i++){let r=Ne(V(e,(i-1)*.65,.25,.8,.16,.16,.16,G.gold));r.userData.home=r.position.clone(),n.kmTokens.push(r)}break}case"campus":V(e,0,.05,0,2.7,.1,2.1,G.green);for(let i=0;i<5;i++){let r=-.9+i%3*.85,a=-.5+Math.floor(i/3)*1.1;V(e,r,.35,a,.55,.6,.6,G.cream),V(e,r,.69,a,.65,.09,.7,G.red)}V(e,0,.12,.2,2.5,.03,.15,G.stone);break}if(s==="code"&&(n.cursor=Ne(V(e,-.12,1.65,-.12,.48,.045,.03,G.gold)),n.cursor.visible=!1),s==="desktop"&&(n.sync=Ne(V(e,0,1.4,.4,.2,.2,.2,G.gold)),n.sync.visible=!1),s==="windows"){n.tiles=[];for(let i=0;i<9;i++){let r=Ne(V(e,-.65+i%3*.28,1+Math.floor(i/3)*.28,.03,.24,.24,.04,[30935,3254234,G.gold][i%3]));r.userData.home=r.position.clone(),r.userData.homeScale=r.scale.clone(),r.scale.setScalar(.001),n.tiles.push(r)}}if(s==="servers"){n.nodes=[];for(let i=0;i<3;i++){let r=Ne(V(e,(i-1)*.8,.3,.95,.2,.2,.2,G.gold));r.userData.home=r.position.clone(),r.userData.homeScale=r.scale.clone(),n.nodes.push(r)}}if(s==="cleaner"){n.bits=[];for(let i=0;i<6;i++){let r=Ne(V(e,(i%3-1)*.8,.2,.8,.14,.14,.14,[G.gold,G.cream,G.red][i%3]));r.userData.home=r.position.clone(),r.userData.homeScale=r.scale.clone(),n.bits.push(r)}}if((s==="feed"||s==="printer")&&(n.flow=jh(),e.add(n.flow.group),n.flow.update(0),n.flow.group.visible=!1),s==="books"){n.page=Ne(new Ot),e.add(n.page),n.page.position.set(-.7,1.15,.5),V(n.page,.35,0,0,.7,.85,.035,G.cream);for(let i=0;i<5;i++)V(n.page,.35,.25-i*.12,.03,.5,.025,.02,G.dark)}if(s==="campus"){V(e,.6,1.05,-.5,.45,2.1,.45,G.cream),V(e,.6,2.15,-.5,.65,.16,.65,G.red),V(e,.6,2.35,-.5,.25,.25,.25,G.gold),V(e,.6,1.75,-.25,.3,.3,.02,G.dark),V(e,.6,1.78,-.23,.035,.15,.02,G.cream),V(e,.66,1.72,-.23,.14,.035,.02,G.cream),n.map=Ne(new Ot),e.add(n.map),n.map.position.set(0,1.15,.8),n.map.visible=!1;for(let i=0;i<3;i++){let r=new Ot;n.map.add(r),r.position.x=(i-1)*.65,V(r,0,0,0,.65,1.05,.035,G.cream),V(r,0,0,.025,.09,.95,.025,G.green),V(r,0,.12,.04,.6,.07,.025,G.red)}}return su(e,1.35,-1),t%3===0&&su(e,1.35,1.2),e}function au(){let s=new Ot,t=new Ot;s.add(t);let e=[V(s,-.12,.08,0,.17,.16,.28,G.ink),V(s,.12,.08,0,.17,.16,.28,G.ink)];for(let o=0;o<4;o++)V(t,0,.27+o*.12,0,.65-o*.07,.13,.46-o*.035,G.cream);let n=new Ot;n.position.y=.83,t.add(n),V(n,0,0,.015,.38,.27,.34,G.ink),V(n,-.09,.01,.19,.04,.06,.015,G.gold),V(n,.09,.01,.19,.04,.06,.015,G.gold);let i=new Ot;n.add(i),i.position.y=.17,V(i,0,0,0,.79,.075,.62,G.cream);for(let o=0;o<6;o++)V(i,0,.08+o*.1,-o*.012,.46-o*.055,.105,.42-o*.045,G.cream);V(t,0,.42,.24,.055,.4,.02,G.gold);let r=[new Ot,new Ot];r.forEach((o,l)=>{o.position.set(l?.32:-.32,.65,0),t.add(o),V(o,0,-.15,0,.15,.3,.19,G.cream),V(o,0,-.33,0,.1,.1,.12,G.ink)});let a=V(s,0,.015,0,.65,.018,.5,3359301);return{root:s,body:t,head:n,feet:e,arms:r,hat:i,shadow:a}}function ou(s){let t=new Ot;t.position.set(s.x,s.y,s.z);let e=s.hub?14:10,n=s.size/e,i=ru(n-.025,.23,n-.025),r=new $i(i,Ol(G.stone).clone(),e*e),a=new oe,o=new qt;for(let c=0;c<e;c++)for(let h=0;h<e;h++)a.makeTranslation((c-(e-1)/2)*n,-.115,(h-(e-1)/2)*n),r.setMatrixAt(c*e+h,a),o.setScalar(.88+(c*13+h*7+s.index)%9*.015),r.setColorAt(c*e+h,o);t.add(r),t.userData.floor=r,V(t,0,-.55,0,s.size-.4,.65,s.size-.4,6321001);for(let c=0;c<e;c++)for(let h of[-1,1]){let d=(c-(e-1)/2)*n,u=s.size/2-.22,m=.35+(c+s.index)%3*.12;V(t,d,-.6,h*u,n-.04,m,.38,8491388),V(t,h*u,-.65,d,.38,m,n-.04,7571317),c%3===0&&V(t,d,-1.02,h*(u-.2),.34,.5,.4,5465951)}let l=S0(s.type,s.index);if(l.position.set(.1,s.hub?.6:0,-.2),l.scale.setScalar(s.hub?1.5:1.15),t.add(l),s.hub){V(t,0,.18,0,4.9,.36,4.3,8557437),V(t,0,.4,0,4.5,.2,3.9,11581083);for(let c of[-2,2])for(let h of[-1.7,1.7])V(t,c,.5,h,.35,1,.35,7637366),V(t,c,1.05,h,.46,.12,.46,G.stone),V(t,c,1.2,h,.17,.22,.17,G.gold);for(let c=0;c<3;c++)V(t,0,.06+c*.07,2.65-c*.25,.85,.12+c*.14,.3,G.stone);if(["nex","pgos","win10"].includes(s.id)){let c=new Ot;c.rotation.y=Math.PI/4,c.position.set(0,0,-.2),t.add(c);let h=Qh(s.id);c.add(h),t.userData.flag=h,V(c,-2.2,2.25,0,.12,4.5,.12,G.dark),V(c,-2.2,4.57,0,.22,.22,.22,G.gold)}}if(s.id==="accelerator"){let c=eu();t.add(c),t.userData.globe=c;let h=new ee(new Ie(.22,.16,.16),new ve({color:16772522}));c.add(h),h.visible=!1,l.userData.motion.packet=h,V(t,0,1.1,.35,.12,2.2,.12,G.dark)}return so(l),l.userData.dynamic=!0,t.userData.motion={...l.userData.motion,exhibit:l,y:l.position.y},so(t),t}function so(s){s.updateMatrixWorld(!0);let t=s.matrixWorld.clone().invert(),e=[];if(s.traverse(i=>{if(i.isMesh&&!i.isInstancedMesh&&i.geometry===Fl){let r=i;for(;r!==s;){if(r.userData.dynamic)return;r=r.parent}e.push(i)}}),!e.length)return;let n=new $i(Fl,Ol(16777215),e.length);e.forEach((i,r)=>{n.setMatrixAt(r,new oe().multiplyMatrices(t,i.matrixWorld)),n.setColorAt(r,i.material.color),i.removeFromParent()}),s.add(n)}var ro=class{constructor(t){this.state=new io(t),this.group=new Ot,this.tiles=[];for(let e of this.state.lanes){let{edge:n}=e,i=t.nodes[n.a],r=t.nodes[n.b],a=Math.atan2(r.x-i.x,r.z-i.z),o=Math.hypot(r.x-i.x,r.z-i.z);for(let l of e.tiles){let c=(l.from+l.to)/2,h=new Ot;this.group.add(h);let d=V(h,0,-.18,0,1.06,.36,o/e.tiles.length+.018,G.stone);d.material=d.material.clone(),d.material.transparent=!0;let u=V(h,0,.006,-o/e.tiles.length/2,1.06,.018,.035,G.gold);u.material=u.material.clone(),u.material.transparent=!0,h.rotation.y=a,h.visible=!1,this.tiles.push({tile:l,group:h,slab:d,seam:u,x:i.x+(r.x-i.x)*c,y:i.y+(r.y-i.y)*c,z:i.z+(r.z-i.z)*c})}}}update(t,e,n){this.state.update(t,e,n)}render(){for(let{tile:t,group:e,slab:n,seam:i,x:r,y:a,z:o}of this.tiles){let l=t.lift,c=l*l*(3-2*l);e.visible=l>0,e.position.set(r,a-(1-c)*3.2,o),n.material.opacity=Math.min(1,l*2),n.material.depthWrite=l>.5,i.visible=t.wanted&&l<1,i.material.opacity=Math.sin(l*Math.PI)*.6}}};var b0=s=>Math.max(0,Math.min(1,s)),Mi=s=>(s=b0(s),s*s*(3-2*s)),ao=(s,t,e)=>Mi(s/t)*(1-Mi((s-e)/.4)),Bl={twirl:3.2,think:3.6,hat:4},zl=class{constructor(t=Math.random){this.random=t,this.last=null,this.bag=[],this.reset()}reset(){this.action=null,this.elapsed=0,this.next=10}update(t,e){if(!e)return this.reset(),null;if(this.next-=t,this.action&&(this.elapsed+=t,this.elapsed>=Bl[this.action]&&(this.action=null,this.elapsed=0)),!this.action&&this.next<=1e-8){this.bag.length||(this.bag=Object.keys(Bl));let n=this.bag.filter(i=>i!==this.last);this.action=n[Math.min(n.length-1,Math.floor(this.random()*n.length))],this.bag=this.bag.filter(i=>i!==this.action),this.last=this.action,this.elapsed=0,this.next=10}return this.action}},Zs=[[0,0,.17,0,0,0],[.5,0,.17,0,0,0],[1,0,.72,.05,0,0],[1.55,.12,-.08,.47,1.1,-.12],[2.35,.12,-.08,.47,1.1,-.12],[2.9,0,.72,.05,0,0],[3.4,0,.17,0,0,0],[4,0,.17,0,0,0]];function w0(s,t){let e={spin:0,bob:0,lean:0,headX:0,headY:0,headZ:0,leftX:0,leftZ:0,rightX:0,rightZ:0,hatX:0,hatY:.17,hatZ:0,hatRX:0,hatRZ:0,bubble:0};if(!s||t<=0||t>=Bl[s])return e;if(s==="twirl"){let n=ao(t,.45,2.8),i=Mi((t-.4)/2.35);e.spin=Math.PI*2*i,e.leftZ=-1.25*n,e.rightZ=1.25*n,e.leftX=e.rightX=-.1*n,e.bob=Math.sin(i*Math.PI*4)**2*.045,e.lean=Math.sin(i*Math.PI*2)*.065,e.headZ=-.08*n}else if(s==="think"){let n=ao(t,.4,3.2),i=n*Math.sin(t*15)*Mi((t-.45)/.2);e.headZ=-.13*n,e.headY=Math.sin(t*2)*.14*n,e.rightZ=-2.65*n,e.rightX=-.5*n+i*.12,e.hatRZ=i*.025,e.bubble=ao(t-.4,.25,2.6)}else if(s==="hat"){let n=Zs.findIndex((a,o)=>o<Zs.length-1&&t>=a[0]&&t<Zs[o+1][0]);if(n>=0){let a=Zs[n],o=Zs[n+1],l=Mi((t-a[0])/(o[0]-a[0]));[e.hatX,e.hatY,e.hatZ,e.hatRX,e.hatRZ]=a.slice(1).map((c,h)=>c+(o[h+1]-c)*l)}let i=ao(t,.5,3.5),r=Mi((t-1)/.55)*(1-Mi((t-2.35)/.55));e.leftX=e.rightX=(-2.7+r*.8)*i,e.leftZ=(.65-r*.35)*i,e.rightZ=-e.leftZ,e.headX=.25*r,e.headY=-.12*r,e.headZ=Math.sin(t*5)*.035*r,e.hatRZ+=Math.sin(t*5)*.06*r}return e}function T0(s,t,e){s.root.rotation.y=e+t.spin,s.body.position.y+=t.bob,s.body.rotation.z=t.lean,s.head.rotation.set(t.headX,t.headY,t.headZ),s.arms[0].rotation.set(t.leftX,0,t.leftZ),s.arms[1].rotation.set(t.rightX,0,t.rightZ),s.hat.position.set(t.hatX,t.hatY,t.hatZ),s.hat.rotation.set(t.hatRX,0,t.hatRZ)}var oo=class{constructor(t){this.element=t,this.clock=new zl,this.pixelFrame=-1,this.bubble=document.createElement("canvas"),this.bubble.className="traveler-thought",this.bubble.width=64,this.bubble.height=80,this.bubble.hidden=!0,this.bubble.setAttribute("aria-hidden","true"),t.append(this.bubble),this.ctx=this.bubble.getContext("2d")}update(t,e,n,i,r,a,o,l){let c=this.clock.update(t,e),h=w0(c,this.clock.elapsed);if(this.bubble.hidden=!0,c&&T0(n,h,i),h.bubble>.01){let d=Math.floor(this.clock.elapsed*8);d!==this.pixelFrame&&(this.pixelFrame=d,this.drawThought(d));let u=n.root.position,m=new D(u.x+.65,u.y+2.2,u.z-.65).project(r),g=a<=850?32:40,v=a<=850?60:80;this.bubble.style.left=`${Math.max(g,Math.min(a-g,(m.x*.5+.5)*a))}px`,this.bubble.style.top=`${Math.max(l+v+8,Math.min(o-12,(.5-m.y*.5)*o))}px`,this.bubble.style.opacity=String(h.bubble),this.bubble.hidden=!1}this.element.dataset.idleAction=c||"",this.element.dataset.idleTime=this.clock.elapsed.toFixed(2),this.element.dataset.idleNext=Math.max(0,this.clock.next).toFixed(2)}drawThought(t){let e=this.ctx,n=t*.32;e.clearRect(0,0,64,80),e.fillStyle="#708375",e.fillRect(4,0,56,64),e.fillRect(0,4,64,56),e.fillRect(14,62,14,8),e.fillRect(10,68,10,6),e.fillStyle="#eee6cb",e.fillRect(6,2,52,60),e.fillRect(2,6,60,52),e.fillRect(16,60,10,8),e.fillRect(12,66,6,6),e.strokeStyle="#4c6158",e.lineWidth=2,e.lineJoin="miter",e.beginPath();for(let i=0;i<=36;i++){let r=i/36*Math.PI*5,a=Math.round((32+Math.sin(r*1.8+n)*18+Math.cos(r*.7-n)*3)/2)*2,o=Math.round((32+Math.cos(r*2.1-n*.7)*18)/2)*2;i===0?e.moveTo(a,o):e.lineTo(a,o)}e.stroke()}reset(){this.clock.reset(),this.bubble.hidden=!0}dispose(){this.bubble.remove()}};function lu(s,t,e){return t==="overview"?s.filter(n=>n.walkable):s.filter(n=>n.theme===e)}function cu(s,t,e){let n=Math.min(420,Math.max(190,s*.29)),i=Math.min(t*.3,n/e);return{x:s-n*.82,y:t-(s<=850?78:0)-i*.82,width:n,height:i}}var lo=class{constructor({onChange:t=()=>{},onTap:e=()=>{},onEnd:n=()=>{}}={}){Object.assign(this,{onChange:t,onTap:e,onEnd:n}),this.points=new Map,this.moved=!1}get active(){return this.points.size>0}get pinching(){return this.points.size>1}frame(){let t=[...this.points.values()];return t.length>1?{x:(t[0].x+t[1].x)/2,y:(t[0].y+t[1].y)/2,span:Math.hypot(t[1].x-t[0].x,t[1].y-t[0].y)}:t.length?{...t[0],span:0}:null}down(t,e,n,i){this.active||(this.moved=!1,this.start={x:e,y:n,target:i}),this.points.set(t,{x:e,y:n}),this.pinching&&(this.moved=!0),this.previous=this.frame()}move(t,e,n){if(!this.points.has(t))return;this.points.set(t,{x:e,y:n});let i=this.frame();!this.moved&&Math.hypot(e-this.start.x,n-this.start.y)>7&&(this.moved=!0),this.moved&&this.onChange({dx:i.x-this.previous.x,dy:i.y-this.previous.y,ratio:i.span&&this.previous.span?i.span/this.previous.span:1,x:i.x,y:i.y,pinching:this.pinching}),this.previous=i}up(t,e,n){if(!this.points.has(t))return;Math.hypot(e-this.start.x,n-this.start.y)>7&&(this.moved=!0);let i=!this.moved&&this.points.size===1;this.points.delete(t),this.previous=this.frame(),this.active||(i&&this.onTap({...this.start,x:e,y:n}),this.onEnd())}cancel(){this.points.clear(),this.previous=null,this.moved=!0,this.onEnd()}};function hu(s,t,e,n,i){let r=Math.max(12,Math.min(240,s.height/t)),a=(s.height-r)/i;return{height:r,x:s.x+(e.x-n/2)*a,y:s.y+(i/2-e.y)*a}}var je=[{id:"ai",title:"1. AI \u4E0E\u5F00\u53D1\u8005\u5DE5\u5177",hub:"nex",members:["nex","museum","brushline","bot","noartfps"]},{id:"games",title:"2. \u6E38\u620F\u540E\u53F0\u76F8\u5173\u9879\u76EE",hub:"pgos",members:["pgos","cloudgame","accelerator"]},{id:"clients",title:"3. \u5BA2\u6237\u7AEF\u76F8\u5173\u9879\u76EE",hub:"win10",members:["win10","desktop","cleaner","uwp","reader","ishowfx","xidian"]},{id:"km",labelOffsetU:2.5,title:"4. \u53E4\u6CD5\u624B\u4F5C KM \u5934\u6761\u597D\u6587",hub:"km-compiler",members:["km-compiler","km-bot","km-network"]}],E0=[["bot","desktop"],["brushline","cloudgame"],["accelerator","ishowfx"]],A0={noartfps:[-24,-6,.72,"arena"],nex:[-10,-7,.72,"code"],museum:[-18,-14,1.08,"photos"],brushline:[-19,1,.36,"race"],bot:[-7,-20,1.44,"bot"],pgos:[0,10,.36,"servers"],cloudgame:[-8,20,0,"pong"],accelerator:[8,20,.72,"network"],win10:[12,-6,.72,"windows"],desktop:[6,-18,1.08,"desktop"],cleaner:[16,-19,1.44,"cleaner"],uwp:[23,-11,1.08,"feed"],reader:[23,1,.36,"books"],ishowfx:[16,9,0,"printer"],xidian:[7,4,.36,"campus"],"km-compiler":[33,20,.72,"compiler"],"km-bot":[27,30,1.08,"spellbook"],"km-network":[40,30,.36,"nat"]},uu=(s,t)=>Math.hypot(s.x-t.x,s.y-t.y,s.z-t.z);function fu(s){let t=s.map((o,l)=>{let[c,h,d,u]=A0[o.id],m=je.find(g=>g.members.includes(o.id));return{id:o.id,index:l,walkable:!o.articleOnly,theme:m.id,hub:m.hub===o.id,size:m.hub===o.id?7:5.2,x:(c+h)/Math.SQRT2,y:d,z:(h-c)/Math.SQRT2,type:u}}),e=[],n=[],i=[],r=(o,l,c=!1,h=null)=>{let d={id:n.length,a:o,b:l,bridge:c,shortcut:h,length:uu(e[o],e[l])};return n.push(d),i[o].push(d.id),i[l].push(d.id),d};t.forEach(o=>{let l=o.size/2-.5;o.nodes=[];for(let[c,h]of[[-l,l],[-l,-l],[l,-l],[l,l]]){let d=e.length;e.push({id:d,x:o.x+c,y:o.y,z:o.z+h,station:o.index}),i.push([]),o.nodes.push(d)}o.stop=o.nodes[0];for(let c=0;c<4;c++)r(o.nodes[c],o.nodes[(c+1)%4])});let a=(o,l,c=!1)=>{let h=t.find(g=>g.id===o),d=t.find(g=>g.id===l),u,m=1/0;for(let g of h.nodes)for(let v of d.nodes){let p=uu(e[g],e[v]);p<m&&(m=p,u=[g,v])}r(...u,!0,c?`${o}--${l}`:null)};for(let o of je)for(let l of o.members)l!==o.hub&&a(o.hub,l);a("nex","pgos"),a("pgos","win10"),a("win10","nex");for(let[o,l]of E0)a(o,l,!0);return{stations:t,nodes:e,edges:n,adj:i,themes:je}}function C0(s,t){if(t.node!==void 0)return{...s.nodes[t.node]};let e=s.edges[t.edge],n=s.nodes[e.a],i=s.nodes[e.b],r=t.t;return{x:n.x+(i.x-n.x)*r,y:n.y+(i.y-n.y)*r,z:n.z+(i.z-n.z)*r}}function du(s,t,e){let n=Array(s.nodes.length).fill(1/0),i=[],r=new Set(s.nodes.map(l=>l.id));for(n[t]=0;r.size;){let l=-1;for(let c of r)(l<0||n[c]<n[l])&&(l=c);if(l===e||!Number.isFinite(n[l]))break;r.delete(l);for(let c of s.adj[l]){let h=s.edges[c],d=h.a===l?h.b:h.a,u=n[l]+h.length;u<n[d]&&(n[d]=u,i[d]={u:l,edge:c})}}let a=[],o=e;for(;o!==t;){let l=i[o];if(!l)throw new Error("Disconnected exhibition path");let c=s.edges[l.edge];a.unshift({edge:c.id,from:c.a===l.u?0:1,to:c.a===o?0:1}),o=l.u}return{segments:a,cost:n[e]}}function R0(s,t,e){if(t.node!==void 0)return du(s,t.node,e);let n=s.edges[t.edge],i=[[n.a,0],[n.b,1]].map(([r,a])=>{let o=du(s,r,e);return{segments:[...Math.abs(t.t-a)>1e-6?[{edge:n.id,from:t.t,to:a}]:[],...o.segments],cost:Math.abs(t.t-a)*n.length+o.cost}});return i[0].cost<=i[1].cost?i[0]:i[1]}var co=class{constructor(t){this.world=t,this.target=t.stations.findIndex(e=>e.id==="pgos"),this.location={node:t.stations[this.target].stop},this.phase="idle",this.elapsed=0,this.token=0,this.speed=10,this.walked=0,this.segments=[]}get position(){return C0(this.world,this.location)}get remaining(){return this.segments.reduce((t,e)=>t+Math.abs(e.to-e.from)*this.world.edges[e.edge].length,0)}get direction(){let t=this.segments[0];if(!t)return null;let e=this.world.edges[t.edge],n=this.world.nodes[t.to===1?e.a:e.b],i=this.world.nodes[t.to===1?e.b:e.a];return Math.atan2(i.x-n.x,i.z-n.z)}visit(t,e=!1){if(!this.world.stations[t]?.walkable||!e&&this.target===t&&["walking","casting","opening"].includes(this.phase))return!1;this.target=t,this.token++,this.elapsed=0;let n=this.world.stations[t].stop;if(e)return this.location={node:n},this.segments=[],this.phase="detail",!0;let i=R0(this.world,this.location,n);return this.segments=i.segments,this.phase=i.cost<1e-5?"casting":"walking",!0}cancel(){this.token++,this.phase="idle",this.elapsed=0,this.segments=[]}update(t,e=()=>!0){if(this.elapsed+=t,this.waiting=!1,this.phase==="walking"){let n=this.speed*t;for(;n>0&&this.segments.length;){let i=this.segments[0],r=this.world.edges[i.edge],a=Math.abs(i.to-i.from)*r.length,o=Math.min(a,n),l=i.from+Math.sign(i.to-i.from)*o/r.length;if(!e(r,i.from,l)){this.waiting=!0;break}i.from=l,n-=o,this.walked+=o,this.location={edge:i.edge,t:i.from},a-o<1e-6&&(this.location={node:i.to===1?r.b:r.a},this.segments.shift())}this.segments.length||(this.phase="casting",this.elapsed=0)}else if(this.phase==="casting"&&this.elapsed>=1.05)this.phase="opening",this.elapsed=0;else{if(this.phase==="opening"&&this.elapsed>=.42)return this.phase="detail",this.elapsed=0,{index:this.target,token:this.token};this.phase==="closing"&&this.elapsed>=.32&&(this.phase="idle",this.elapsed=0)}return null}};var Bn=Pe.clamp,sn=new D(1,0,-1).normalize(),rn=new D(-1,2,-1).normalize(),I0=new D(1,1,1).normalize(),P0={noartfps:"No Art FPS",brushline:"Brushline Rally",museum:"Photo Museum",nex:"Nex",pgos:"PGOS",cloudgame:"\u4E91\u6E38\u620F",bot:"Bot",accelerator:"\u7F51\u6E38\u52A0\u901F\u5668",desktop:"\u684C\u9762\u73A9\u673A",cleaner:"\u5783\u573E\u6E05\u7406",win10:"Win10 \u52A9\u624B",uwp:"\u7231\u770B\u6BB5\u5B50",reader:"\u7B80\u81F4\u9605\u8BFB",ishowfx:"iShowFX",xidian:"\u897F\u7535\u5BFC\u822A","km-compiler":"\u7F16\u8BD1\u539F\u7406","km-bot":"Bot \u4E0E NLP","km-network":"\u7F51\u7EDC\u4E0E NAT"},L0=new Set(["nex","pgos","bot","brushline","museum","noartfps"]),ho=class{constructor({element:t,projects:e,onSelect:n,onOpen:i,onTheme:r,onFailure:a,onWalk:o,onPortal:l,onAbout:c,onIslandSound:h,onOverview:d}){Object.assign(this,{element:t,projects:e,onSelect:n,onOpen:i,onTheme:r,onFailure:a,onWalk:o,onPortal:l,onAbout:c,onIslandSound:h,onOverview:d}),this.ready=new Promise(g=>{this.resolveReady=g}),this.world=fu(e),this.journey=new co(this.world),this.selected=this.journey.target,this.mode="overview",this.theme=null,this.follow=!1,this.active=!0,this.last=0,this.time=0,this.heading=0,this.zoom=1,this.pan=new D;let u=matchMedia("(prefers-reduced-motion: reduce)");this.reduced=()=>u.matches||new URLSearchParams(location.search).get("motion")==="reduce",this.introActive=!this.reduced()&&!new URLSearchParams(location.hash.slice(1)).has("project"),this.introElapsed=0,this.ripples=[],this.scene=new Ms,this.scene.background=new qt(2240050),this.archiveMask={value:0},this.camera=new mi(-10,10,8,-8,.1,300),this.renderer=new Za({antialias:!1,alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=we,this.renderer.domElement.setAttribute("aria-label","\u56DB\u5EA7\u4E3B\u9898\u5C9B\u7FA4\u4E0E\u767D\u5E3D\u65C5\u4EBA"),t.prepend(this.renderer.domElement),t.dataset.renderer="webgl",this.islands=this.world.stations.map(g=>{let v=ou(g);this.scene.add(v),v.traverse(f=>{f.material&&(f.material=f.material.clone(),g.walkable||this.maskArchive(f.material))});let p=new As(new Ps(new Ie(g.size,.06,g.size)),new bn({color:G.gold}));return p.position.y=.03,v.add(p),{group:v,edge:p}}),this.walkway=new Ot,this.scene.add(this.walkway),this.sections=[];for(let g of this.world.edges){if(g.shortcut)continue;let v=this.world.nodes[g.a],p=this.world.nodes[g.b],f=Math.hypot(p.x-v.x,p.z-v.z),b=Math.max(1,Math.ceil(f/.42)),A=new Ot;this.walkway.add(A);let M=Math.atan2(p.x-v.x,p.z-v.z);for(let w=0;w<b;w++){let S=(w+.5)/b,C=v.x+(p.x-v.x)*S,_=v.y+(p.y-v.y)*S,T=v.z+(p.z-v.z)*S,I=V(A,C,_-(g.bridge?.09:.075),T,g.bridge?1:.64,.18,f/b+.015,g.bridge?10331787:9149312);if(I.rotation.y=M,g.bridge&&w%2===0)for(let U of[-1,1]){let B=V(A,C+Math.cos(M)*.55*U,_+.04,T-Math.sin(M)*.55*U,.12,.15,f/b*.8,8228730);B.rotation.y=M}}g.bridge&&f>5&&V(A,(v.x+p.x)/2,(v.y+p.y)/2-.65,(v.z+p.z)/2,.5,1,.5,5598048),so(A),A.traverse(w=>{w.material&&(w.material=w.material.clone(),this.world.stations[v.station].theme==="km"&&this.maskArchive(w.material))}),this.sections.push({group:A,a:this.world.stations[v.station].theme,b:this.world.stations[p.station].theme})}this.bridges=new ro(this.world),this.scene.add(this.bridges.group),this.traveler=au(),this.scene.add(this.traveler.root),this.traveler.root.scale.setScalar(1.15);let m=new ee(new Ie(.9,1.9,.8),new ve({visible:!1}));m.position.y=.95,this.traveler.root.add(m),this.profileButton=document.createElement("button"),this.profileButton.className="traveler-profile-target",this.profileButton.setAttribute("aria-label","\u5173\u4E8E pixelcao\uFF0C\u767D\u5E3D\u65C5\u4EBA"),this.profileButton.setAttribute("aria-haspopup","dialog"),this.profileButton.onclick=()=>this.onAbout?.(),t.append(this.profileButton),this.idle=new oo(t),this.islandMotion=new Qa({element:t,islands:this.islands,world:this.world,onSound:h}),this.meteors=new to(t),this.exhaust=new eo,this.scene.add(this.exhaust.group),this.createSpotlight(),this.magic=new Ot,this.scene.add(this.magic),this.sparks=[];for(let g=0;g<10;g++)this.sparks.push(V(this.magic,0,0,0,.07,.07,.07,G.gold));this.portal=new Ot,this.scene.add(this.portal);for(let g of[-1,1])V(this.portal,g,0,0,.035,2,.035,G.gold),V(this.portal,0,g,0,2,.035,.035,G.gold);this.pointer=new Kt,this.ray=new Us,this.center=new D,this.goalCenter=new D,this.viewHeight=40,this.skipButton=document.createElement("button"),this.skipButton.className="skip-intro",this.skipButton.textContent="\u8DF3\u8FC7",this.skipButton.onclick=()=>this.skipIntro(),t.append(this.skipButton),u.addEventListener("change",()=>{this.reduced()&&(this.skipIntro(),["walking","casting","opening"].includes(this.journey.phase)&&this.visit(this.journey.target,{immediate:!0})),this.wake()}),this.bindInput(),this.syncLabels(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize(),this.wake(),document.addEventListener("visibilitychange",()=>{this.last=0,this.hover=-1,this.focused=-1,this.idle.reset(),this.onIslandSound?.({id:null}),document.hidden||this.wake()}),this.renderer.domElement.addEventListener("webglcontextlost",g=>{g.preventDefault(),this.active=!1,this.focusShade.remove(),this.profileButton.remove(),this.islandMotion.bubble.remove(),this.idle.dispose(),this.onIslandSound?.({id:null}),this.journey.cancel(),this.closeResolve?.(),this.closeResolve=null,this.onFailure?.()})}maskArchive(t){t.onBeforeCompile=e=>{e.uniforms.archiveMask=this.archiveMask,e.fragmentShader=`uniform float archiveMask;
`+e.fragmentShader.replace("#include <colorspace_fragment>",`#include <colorspace_fragment>
gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(.80,.83,.80),archiveMask);`)},t.customProgramCacheKey=()=>"archive-preview-mask-v1"}updateArchive(t){let e=this.world.stations.filter(p=>!p.walkable),n=this.mode==="overview",i=[];for(let p of e)for(let f of[-p.size/2,p.size/2])for(let b of[-p.size/2,p.size/2])for(let A of[-1.5,p.hub?4.9:2.3])i.push(new D(p.x+f,p.y+A,p.z+b));let r=i.map(p=>p.dot(sn)),a=i.map(p=>p.dot(rn)),o=Math.min(...r),l=Math.max(...r),c=Math.min(...a),h=Math.max(...a),d=cu(this.width,this.height,(l-o)/(h-c));this.archiveRect=d;let u=this.viewHeight/this.height,m=n?Math.min(d.width/(l-o),d.height/(h-c))*u:1,g=new D;if(n){let p=this.center.dot(sn)+(d.x+d.width/2-this.width/2)*u-(o+l)/2*m,f=this.center.dot(rn)+(this.height/2-d.y-d.height/2)*u-(c+h)/2*m;g.copy(sn).multiplyScalar(p).addScaledVector(rn,f)}let v=this.manualDirect||this.reduced()||!this.archivePose?1:1-Math.exp(-t*7);this.archivePose??={scale:m,offset:g.clone()},this.archivePose.scale=Pe.lerp(this.archivePose.scale,m,v),this.archivePose.offset.lerp(g,v),this.archiveMask.value=Pe.lerp(this.archiveMask.value,n?.48:0,v),this.archiveMoving=Math.abs(this.archivePose.scale-m)>1e-4||this.archivePose.offset.distanceTo(g)>.005||Math.abs(this.archiveMask.value-(n?.48:0))>.001;for(let p of e){let f=this.islands[p.index].group;f.position.set(p.x,p.y,p.z).multiplyScalar(this.archivePose.scale).add(this.archivePose.offset),f.scale.setScalar(this.archivePose.scale),f.visible=!this.introActive}for(let p of this.sections)p.a==="km"&&(p.group.position.copy(this.archivePose.offset),p.group.scale.setScalar(this.archivePose.scale),p.group.visible=!this.introActive);this.element.dataset.archive=n?"collapsed":"expanded",this.element.dataset.archiveMask=this.archiveMask.value.toFixed(2)}select(t,{focus:e=!1}={}){this.selected=Bn(t,0,this.projects.length-1),e&&this.focusTheme(this.world.stations[this.selected].theme),this.syncLabels(),this.wake()}focusTheme(t){this.cancel(),this.manualView=null,this.browsingTransition=!0,this.mode="theme",this.theme=t,this.follow=!1,this.pan.set(0,0,0),this.zoom=1,this.syncLabels(),this.wake()}overview(){this.cancel(),this.manualView=null,this.hover=-1,this.focused=-1,this.browsingTransition=!0,this.mode="overview",this.theme=null,this.follow=!1,this.pan.set(0,0,0),this.zoom=1,this.syncLabels(),this.wake()}locate(t){this.manualView=null,this.skipIntro(),this.browsingTransition=!1,this.journey.cancel(),this.world.stations[t].walkable&&this.journey.visit(t,!0),this.selected=t,this.theme=this.world.stations[t].theme,this.mode="theme",this.follow=!1,this.pan.set(0,0,0),this.zoom=1,this.syncLabels(),this.cameraAt(!0),this.wake()}visit(t,{immediate:e=!1}={}){if(["detail","closing"].includes(this.journey.phase))return;if(this.manualView=null,this.skipIntro(),this.browsingTransition=!1,this.addRipple(t),!this.world.stations[t].walkable){this.cancel(),this.selected=t,this.theme=this.world.stations[t].theme,this.mode="theme",this.follow=!1,this.pan.set(0,0,0),this.zoom=1,this.syncLabels(),this.onOpen(t),this.wake();return}let n=e||this.reduced();this.journey.visit(t,n)&&(!this.hasVisited&&!n&&(this.departureDelay=.65,this.hasVisited=!0),this.selected=t,this.theme=this.world.stations[t].theme,this.mode="theme",this.follow=!0,this.pan.set(0,0,0),this.zoom=1,this.syncLabels(),n&&(this.cameraAt(!0),this.updateCharacter(0),this.onOpen(t)),this.wake())}cancel(){this.skipIntro(),["walking","casting","opening"].includes(this.journey.phase)&&(this.journey.cancel(),this.departureDelay=0,this.follow=!1,this.settling=.2,this.magic.visible=!1,this.portal.visible=!1,this.wake())}close(){return this.world.stations[this.selected].walkable?(this.journey.phase=this.reduced()?"idle":"closing",this.journey.elapsed=0,this.wake(),new Promise(t=>{this.closeResolve=t,this.reduced()&&(t(),this.closeResolve=null)})):(this.wake(),Promise.resolve())}skipIntro(){this.introActive&&(this.introActive=!1,this.browsingTransition=!0,this.introElapsed=4.5,this.skipButton.hidden=!0,this.wake())}addRipple(t){let e=this.world.stations[t],n=this.clickPoint||e;this.clickPoint=null;let i=new ee(new Zi(.85,1,48),new ve({color:16771245,transparent:!0,opacity:.85,depthWrite:!1,side:Ee}));if(i.rotation.x=-Math.PI/2,i.position.set(n.x,e.y+.12,n.z),i.scale.setScalar(.25),this.scene.add(i),this.ripples.push({mesh:i,elapsed:0}),this.ripples.length>6){let r=this.ripples.shift();this.scene.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material.dispose()}this.wake()}updateAmbience(t){for(let{group:e}of this.islands)e.userData.flag&&tu(e.userData.flag,this.time,this.reduced()),e.userData.globe&&!this.reduced()&&(e.userData.globe.rotation.y=this.time*.16);this.ripples=this.ripples.filter(e=>{e.elapsed+=t;let n=e.elapsed/.7;return e.mesh.scale.setScalar(this.reduced()?1:.25+n*2.6),e.mesh.material.opacity=.85*(1-n),n>=1?(this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),!1):!0}),this.element.dataset.ripples=String(this.ripples.length),this.element.dataset.windTime=this.time.toFixed(2)}createSpotlight(){this.focusShade=document.createElement("div"),this.focusShade.className="traveler-focus",this.focusShade.setAttribute("aria-hidden","true"),this.element.append(this.focusShade),this.spotlight=new Ot,this.scene.add(this.spotlight),this.spotAmount=0;let t=new He({transparent:!0,depthWrite:!1,side:Ee,blending:Os,uniforms:{strength:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;uniform float strength;void main(){float a=(1.-vUv.y)*.045*strength;gl_FragColor=vec4(.9,.85,.65,a);}"});this.lightBeam=new ee(new Is(.3,1.35,24,8,1,!0),t),this.lightBeam.position.y=12,this.spotlight.add(this.lightBeam);let e=new ee(new Zi(.72,.84,8),new ve({color:16770208,transparent:!0,opacity:0,depthWrite:!1,side:Ee}));e.rotation.x=-Math.PI/2,e.position.y=.045,this.spotlight.add(e),this.lightRing=e}updateSpotlight(t){let e=!this.reduced()&&(this.introActive||["walking","casting"].includes(this.journey.phase)),n=this.journey.position,i=new D(n.x,n.y+.8,n.z).project(this.camera),r=e&&Math.abs(i.x)<1.1&&Math.abs(i.y)<1.1?1:0;this.spotAmount=Pe.lerp(this.spotAmount,r,Math.min(1,t*7)),Math.abs(this.spotAmount-r)<.005&&(this.spotAmount=r),this.spotTransition=this.spotAmount!==r,this.spotlight.visible=this.spotAmount>.001,this.spotlight.position.set(n.x,n.y+.02,n.z),this.lightBeam.material.uniforms.strength.value=this.spotAmount,this.lightRing.material.opacity=this.spotAmount*.6,this.focusShade.style.opacity=String(this.spotAmount),this.focusShade.style.setProperty("--light-x",`${(i.x*.5+.5)*this.width}px`),this.focusShade.style.setProperty("--light-y",`${(.5-i.y*.5)*this.height}px`),this.focusShade.style.setProperty("--light-radius",`${Math.max(this.mobile?65:90,2.6*this.height/this.viewHeight)}px`),this.element.dataset.spotlight=this.spotAmount.toFixed(2),this.element.dataset.departure=String(this.departureDelay>0)}syncLabels(){let t=this.element.querySelector("#cards");if(t){t.replaceChildren();for(let e of je){let n=document.createElement("button");n.disabled=!1,n.className="theme-label",n.dataset.theme=e.id,n.textContent=e.title,n.setAttribute("aria-label",`\u6D4F\u89C8${e.title}`),n.setAttribute("aria-pressed",String(this.theme===e.id)),n.onclick=()=>this.onTheme(e.id),t.append(n)}this.world.stations.forEach((e,n)=>{let i=document.createElement("button");i.disabled=!1,i.className="island-label",i.classList.toggle("is-featured",L0.has(e.id)),i.dataset.card=n,i.dataset.projectId=e.id,i.dataset.labelSide=e.x>e.z?"right":"left",i.setAttribute("aria-label",`\u8BBF\u95EE ${this.projects[n].title}`),i.setAttribute("aria-pressed",String(n===this.selected)),i.innerHTML=`${Wn(e.id)}<span>${P0[e.id]}${["brushline","museum","noartfps"].includes(e.id)?'<small class="online-demo-tag">\u53EF\u5728\u7EBF\u4F53\u9A8C</small>':""}</span>`,i.onpointerenter=()=>{this.hover=n,this.wake()},i.onpointerleave=()=>{this.hover=-1,this.wake()},i.onfocus=()=>{this.focused=n,this.wake()},i.onblur=()=>{this.focused=-1,this.wake()},i.onclick=()=>this.mode==="overview"&&!e.walkable?this.onTheme("km"):this.onSelect(n,{visit:!0}),t.append(i)})}}measureMap(){this.mapBottom=this.mobile?parseFloat(getComputedStyle(document.querySelector("#timeline"),"::after").height)||78:0,this.mapTop=this.mobile?Math.max(this.headerHeight+12,this.mode==="theme"?(document.querySelector(".intro")?.getBoundingClientRect().bottom||0)+14:0):0,this.element.style.setProperty("--map-top",this.mapTop+"px"),this.element.style.setProperty("--map-bottom",this.mapBottom+"px")}resize(){let t=this.element.getBoundingClientRect();if(!t.width||!t.height)return;this.width=t.width,this.height=t.height,this.headerHeight=document.querySelector("header")?.getBoundingClientRect().height||0,this.mobile=t.width<=850;let e=Math.min(2,Math.max(1,window.devicePixelRatio||1)),n=this.mobile?Math.min(e,Math.sqrt(15e5/(t.width*t.height))):.5,i=this.mobile?Math.max(1,Math.floor(t.width*n)):Math.ceil(t.width/2),r=this.mobile?Math.max(1,Math.floor(t.height*n)):Math.ceil(t.height/2);this.renderer.setSize(i,r,!1),this.element.dataset.renderBuffer=`${i}x${r}`,this.element.dataset.renderDensity=String(e),this.measureMap(),this.cameraAt(!0),this.wake()}framing(){if(this.manualView)return{center:this.manualView.center.clone(),height:this.manualView.height};let t=lu(this.world.stations,this.mode,this.theme),e=this.follow?this.bridges.state.focusEdge(this.journey):null;e&&(t=[this.world.stations[this.world.nodes[e.a].station],this.world.stations[this.world.nodes[e.b].station]]);let n=[];for(let _ of t)for(let T of[-_.size/2,_.size/2])for(let I of[-_.size/2,_.size/2])for(let U of[-1.5,_.hub?4.9:2.3])n.push(new D(_.x+T,_.y+U,_.z+I));if(this.follow&&this.journey.phase==="walking"){let _=this.journey.position;if(!e&&this.journey.remaining>16){n.length=0;for(let T of[-9,9])for(let I of[-9,9])for(let U of[0,3])n.push(new D(_.x+T,_.y+U,_.z+I))}else n.push(new D(_.x,_.y+2,_.z))}let i=n.map(_=>_.dot(sn)),r=n.map(_=>_.dot(rn)),a=Math.min(...i),o=Math.max(...i),l=Math.min(...r),c=Math.max(...r),h=this.mode==="overview",d=h?35:this.mobile?22:this.width*.32,u=h?35:28,m=this.mobile&&!h?document.querySelector(".intro").getBoundingClientRect().bottom-this.element.getBoundingClientRect().top+18:0,g=this.mobile?this.mapTop:Math.max((this.headerHeight||0)+40,m),v=this.mobile?this.mapBottom+6:75,p=Math.max(100,this.width-d-u),f=Math.max(150,this.height-g-v),b=Math.max((c-l)*this.height/f,(o-a)*this.height/p)*1.12/this.zoom/(h&&this.mobile?1.45:1),A=(d+this.width-u)/2,M=(g+this.height-v)/2,w=(a+o)/2-(A-this.width/2)*b/this.height,S=(l+c)/2+(M-this.height/2)*b/this.height,C={center:sn.clone().multiplyScalar(w).addScaledVector(rn,S).add(this.pan),height:b};if(this.introActive){let _=this.journey.position,T=Bn((this.introElapsed-2.9)/1.6,0,1),I=T*T*(3-2*T);C.center=new D(_.x,_.y+1,_.z).lerp(C.center,I),C.height=Pe.lerp(this.mobile?5:5.8,b,I)}return C}cameraAt(t=!1,e=.016){let n=this.framing();this.goalCenter.copy(n.center),this.goalHeight=n.height;let i=t||this.gestures?.moved&&this.gestures.active||this.introActive||this.reduced()?1:1-Math.exp(-e*12);this.center.lerp(this.goalCenter,i),this.viewHeight=Pe.lerp(this.viewHeight,this.goalHeight,i);let r=this.viewHeight*this.width/this.height;Object.assign(this.camera,{left:-r/2,right:r/2,top:this.viewHeight/2,bottom:-this.viewHeight/2}),this.camera.updateProjectionMatrix(),this.camera.position.copy(this.center).addScaledVector(I0,100),this.camera.up.set(0,1,0),this.camera.lookAt(this.center),this.camera.updateMatrixWorld()}bridgeNeighbors(){let t=new Set;if(this.journey.phase==="walking")for(let e of this.bridges.state.lanes)e.tiles.some(n=>n.lift>0)&&(t.add(this.world.nodes[e.edge.a].station),t.add(this.world.nodes[e.edge.b].station));return t}pick(t){let e=this.element.getBoundingClientRect();this.pointer.set((t.clientX-e.left)/e.width*2-1,1-(t.clientY-e.top)/e.height*2),this.ray.setFromCamera(this.pointer,this.camera);let n=this.bridgeNeighbors(),i=this.ray.intersectObjects(this.islands.filter(({group:a})=>a.visible).map(a=>a.group).concat(this.traveler.root),!0)[0];if(!i)return-1;this.lastHit=i.point.clone();let r=i.object;for(;r.parent&&r.parent!==this.scene;)r=r.parent;return r===this.traveler.root?-2:this.islands.findIndex(a=>a.group===r)}isBlank(){return this.ray.intersectObjects([...this.islands.map(t=>t.group),this.walkway,...this.bridges.tiles.filter(t=>t.group.visible).map(t=>t.group)],!0).length===0}beginManual(){this.manualView||(this.manualView={center:this.center.clone(),height:this.viewHeight}),this.follow=!1,this.browsingTransition=!1}changeView({dx:t=0,dy:e=0,ratio:n=1,x:i=this.width/2,y:r=this.height/2},a=!0){this.beginManual();let o=this.manualView,l=o.height/this.height;o.center.addScaledVector(sn,-t*l).addScaledVector(rn,e*l);let c=hu({height:o.height,x:o.center.dot(sn),y:o.center.dot(rn)},n,{x:i,y:r},this.width,this.height);o.center.addScaledVector(sn,c.x-o.center.dot(sn)).addScaledVector(rn,c.y-o.center.dot(rn)),o.height=c.height;let h=this.world.stations.filter(v=>this.theme==="km"?v.theme==="km":v.walkable),d=h.map(v=>new D(v.x,v.y,v.z).dot(sn)),u=h.map(v=>new D(v.x,v.y,v.z).dot(rn)),m=o.center.dot(sn),g=o.center.dot(rn);o.center.addScaledVector(sn,Bn(m,Math.min(...d)-6,Math.max(...d)+6)-m).addScaledVector(rn,Bn(g,Math.min(...u)-6,Math.max(...u)+6)-g),this.manualDirect=a,a&&this.cameraAt(!0),this.wake()}tapMap({target:t,x:e,y:n}){let i=t.closest?.("[data-card]"),r=t.closest?.(".theme-label[data-theme]");if(r){this.onTheme(r.dataset.theme);return}if(t.closest?.(".traveler-profile-target")){this.onAbout?.();return}let a=i?+i.dataset.card:this.pick({clientX:e,clientY:n});if(a===-2){this.onAbout?.();return}if(a>=0){if(!this.world.stations[a].walkable&&this.theme!=="km"){this.onTheme("km");return}this.clickPoint=i?null:this.lastHit,this.onSelect(a,{visit:!0})}else this.mode==="theme"&&this.isBlank()&&this.onOverview?.()}bindInput(){let t=this.element,e=this.renderer.domElement;this.gestures=new lo({onChange:i=>{this.down={drag:!0},this.changeView(i)},onTap:i=>this.tapMap(i),onEnd:()=>{this.down=null,this.wake()}}),t.addEventListener("pointerdown",i=>{if(!(i.button!==0||i.target.closest?.(".skip-intro")||["detail","closing","opening"].includes(this.journey.phase))&&!(this.mobile&&(i.clientY<this.mapTop||i.clientY>this.height-this.mapBottom))){if(this.introActive){this.skipIntro();return}i.preventDefault(),this.down={drag:!1},this.gestures.down(i.pointerId,i.clientX,i.clientY,i.target),t.setPointerCapture(i.pointerId)}}),t.addEventListener("pointermove",i=>{if(this.gestures.active)i.preventDefault(),this.gestures.move(i.pointerId,i.clientX,i.clientY);else if(i.pointerType!=="touch"){let r=this.pick(i);e.style.cursor=r!==-1?"pointer":this.mode==="theme"&&this.isBlank()?"zoom-out":"grab";let a=r>=0&&this.mode==="overview"&&!this.world.stations[r].walkable?-1:r;a!==this.hover&&(this.hover=a,this.wake())}}),t.addEventListener("pointerup",i=>{this.gestures.up(i.pointerId,i.clientX,i.clientY),t.hasPointerCapture(i.pointerId)&&t.releasePointerCapture(i.pointerId)}),t.addEventListener("pointercancel",()=>{this.gestures.cancel(),this.hover=-1}),t.addEventListener("lostpointercapture",i=>{this.gestures.points.has(i.pointerId)&&this.gestures.cancel()}),t.addEventListener("click",i=>{i.detail>0&&!i.target.closest?.(".skip-intro")&&(i.preventDefault(),i.stopPropagation())},!0),t.addEventListener("pointerleave",()=>{this.gestures.active||(this.hover=-1,this.wake())}),t.addEventListener("wheel",i=>{["detail","closing","opening"].includes(this.journey.phase)||(i.preventDefault(),this.skipIntro(),this.changeView({ratio:Math.exp(-i.deltaY*.001),x:i.clientX,y:i.clientY}))},{passive:!1});let n=document.querySelector(".map-controls");n&&(n.hidden=!1,n.querySelectorAll("[data-zoom]").forEach(i=>i.onclick=()=>{this.skipIntro(),this.changeView({ratio:Number(i.dataset.zoom),x:this.width/2,y:(this.mapTop+this.height-this.mapBottom-6)/2},!1)}))}updateCharacter(t){let e=this.journey,n=e.position,i=e.phase==="walking",r=i&&!e.waiting&&!(this.departureDelay>0),a=this.world.stations[e.target],o=i?e.direction??this.heading:Math.atan2(a.x+.35-n.x,a.z-.45-n.z),l=Pe.euclideanModulo(o-this.heading+Math.PI,Math.PI*2)-Math.PI;this.heading+=l*Math.min(1,t*15||1);let c=this.traveler;c.root.position.set(n.x,n.y+.025,n.z),c.root.rotation.y=this.heading;let h=r?Math.sin(e.walked*1.25):0;this.step=r?h:Pe.lerp(this.step||0,0,Math.min(1,t*22));let d=this.step;c.feet.forEach((p,f)=>{p.position.z=(f?1:-1)*d*.15,p.position.y=.08+Math.max(0,(f?1:-1)*d)*.12}),c.body.position.y=r?Math.abs(d)*.035:0,c.body.rotation.set(0,0,0),c.hat.position.set(0,.17,0),c.hat.rotation.set(0,0,r?d*.035:0),c.arms.forEach(p=>p.rotation.z=0);let m=["casting","opening","detail","closing"].includes(e.phase)?-Bn(e.phase==="casting"?e.elapsed/.3:e.phase==="closing"?1-e.elapsed/.32:1,0,1)*2.3:d*.28;if(c.arms[1].rotation.x=Pe.lerp(c.arms[1].rotation.x,m,Math.min(1,t*25||1)),c.arms[0].rotation.x=-d*.28,this.onWalk?.(e.walked,r&&!(this.departureDelay>0)),this.onPortal?.(e.phase,e.token),c.head.rotation.set(0,0,0),c.arms[1].rotation.z=0,this.introActive){let p=this.introElapsed;c.root.rotation.y=Math.PI/4,c.head.rotation.y=p<1.5?Math.sin(p*4)*.45:Math.sin(p*2)*.08;let f=Bn((p-1.2)/.35,0,1)*(1-Bn((p-2.65)/.25,0,1));c.head.rotation.z=-f*.14,c.arms[1].rotation.z=-f*2.65,c.arms[1].rotation.x=-f*(.45+Math.sin(p*15)*.15)}let g=new D(n.x,n.y+1,n.z).project(this.camera),v=e.phase==="idle"&&!this.introActive&&!this.reduced()&&!document.querySelector("dialog[open]")&&!this.down&&!this.browsingTransition&&Math.abs(g.x)<.95&&Math.abs(g.y)<.9;if(this.idle.update(t,v,c,this.heading,this.camera,this.width,this.height,this.headerHeight),this.magic.visible=["casting","opening"].includes(e.phase),this.magic.position.copy(c.root.position),this.sparks.forEach((p,f)=>{let b=this.time*2+f*2.4;p.position.set(Math.cos(b)*(.25+f*.04),.8+(this.time+f*.08)%.8*1.4,Math.sin(b)*(.25+f*.04))}),this.portal.visible=["opening","closing"].includes(e.phase),this.portal.visible){let p=Bn(e.phase==="opening"?e.elapsed/.42:1-e.elapsed/.32,0,1),f=p*p*(3-2*p),b=this.center.clone().addScaledVector(new D(0,1,0).applyQuaternion(this.camera.quaternion),43/this.height*this.viewHeight);this.portal.position.set(n.x,n.y+1.3,n.z).lerp(b,f),this.portal.quaternion.copy(this.camera.quaternion),this.portal.scale.set(Pe.lerp(.4,(this.camera.right-this.camera.left)*.46,f),Pe.lerp(.4,this.viewHeight*.38,f),1)}this.element.dataset.animation=e.phase,this.element.dataset.position=[n.x,n.y,n.z].map(p=>p.toFixed(3)).join(","),this.element.dataset.travelerProject=this.projects[e.target].id,this.element.dataset.follow=String(this.follow),this.element.dataset.remaining=e.remaining.toFixed(2),this.element.dataset.view=this.mode,this.element.dataset.theme=this.theme||"",this.element.dataset.walked=e.walked.toFixed(2),this.element.dataset.bridgeWaiting=String(!!e.waiting),this.element.dataset.bridges=JSON.stringify(this.bridges.state.snapshot(e)),this.element.dataset.routeShortcuts=e.segments.map(p=>this.world.edges[p.edge].shortcut).filter(Boolean).join(",")}layout(){this.center.distanceTo(this.goalCenter)<.05&&Math.abs(this.viewHeight-this.goalHeight)<.05&&(this.browsingTransition=!1);let t=this.introActive||["detail","opening","closing"].includes(this.journey.phase),e=this.journey.phase==="walking",n=this.bridgeNeighbors(),i=(h,d)=>{h.userData.intensity!==d&&(h.userData.intensity=d,h.traverse(u=>{u.material?.color&&(u.material.userData.baseColor??=u.material.color.clone(),u.material.color.copy(u.material.userData.baseColor).lerp(this.scene.background,1-d))}))};this.sections.forEach(h=>i(h.group,this.mode==="overview"||h.a===this.theme&&h.b===this.theme?1:e?.4:.36)),this.islands.forEach(({group:h,edge:d},u)=>{let m=this.world.stations[u],g=n.has(u),v=e&&(g||Math.hypot(m.x-this.journey.position.x,m.z-this.journey.position.z)<10),p=this.mode==="overview"&&!m.walkable,f=!p&&u===this.selected&&(this.mode==="theme"||this.world.stations[u].hub);h.userData.highlight!==f&&(h.userData.floor.material.color.set(f?12954739:G.stone),h.userData.floor.material.userData.baseColor=h.userData.floor.material.color.clone(),h.userData.highlight=f,h.userData.intensity=void 0),i(h,this.mode==="overview"||m.theme===this.theme||v?1:e?.4:.36),d.visible=!p&&(f||u===this.hover||["casting","opening"].includes(this.journey.phase)&&u===this.journey.target),d.material.color.set(f?G.gold:14212551)});let r=(h,d)=>(d.project(this.camera),h.style.left=`${(d.x*.5+.5)*this.width}px`,h.style.top=`${(.5-d.y*.5)*this.height}px`,Math.abs(d.x)<.98&&Math.abs(d.y)<.94),a=this.journey.position,o=r(this.profileButton,new D(a.x,a.y+1,a.z));this.profileButton.hidden=t||!o,this.element.querySelectorAll("[data-theme]").forEach(h=>{h.disabled=!1;let d=je.find(p=>p.id===h.dataset.theme),u=this.world.stations.find(p=>p.id===d.hub),m=d.id==="km"&&this.mode==="overview";if(h.classList.toggle("archive-peek",m),h.setAttribute("aria-label",m?"\u5C55\u5F004. \u53E4\u6CD5\u624B\u4F5C KM \u5934\u6761\u597D\u6587":`\u6D4F\u89C8${d.title}`),m){let p=this.archiveRect;h.hidden=t,h.style.left=p.x+"px",h.style.top=p.y+"px",h.style.width=p.width+"px",h.style.height=p.height+"px";return}h.style.width="",h.style.height="";let g=(d.labelOffsetU||0)/Math.SQRT2,v=r(h,new D(u.x+g,u.y+5.6,u.z-g));h.hidden=t||!v||this.mode!=="overview"}),this.element.querySelectorAll("[data-card]").forEach(h=>{if(h.disabled=!1,this.mobile&&this.mode==="overview"&&!["brushline","museum"].includes(h.dataset.projectId)){h.hidden=!0,h.classList.remove("quiet");return}let d=+h.dataset.card,u=this.world.stations[d],m=h.dataset.labelSide==="right",g=m?1:-1,v=m?.25:.75,p=this.mobile&&this.mode==="overview"&&["brushline","museum"].includes(u.id),f=r(h,new D(u.x+g*u.size/2,u.y+.3,u.z-g*u.size/2))||p,b=parseFloat(h.style.top),A=!this.mobile||b>this.mapTop+22&&b<this.height-this.mapBottom-4,M=this.mode==="theme"&&(u.theme===this.theme||n.has(d)||this.hover===d||this.focused===d||u.walkable&&u.size*this.height/this.viewHeight>65),w=h.offsetWidth,S=parseFloat(h.style.left);h.style.left=`${Bn(S,w*v+6,this.width-w*(1-v)-6)}px`,h.hidden=t||!f||!A||this.mode==="theme"&&!M||this.mode==="overview"&&!u.walkable,h.classList.toggle("quiet",this.mobile&&this.mode!=="overview"&&!M&&!u.hub&&this.hover!==d&&this.focused!==d),h.classList.toggle("is-hovered",this.hover===d)});let c=[...this.element.querySelectorAll(".theme-label,.island-label")].filter(h=>!h.hidden&&!h.classList.contains("archive-peek")&&(!h.classList.contains("quiet")||h.matches(":focus-visible"))).map(h=>{let d=h.classList.contains("theme-label")?.5:h.dataset.labelSide==="right"?.25:.75,u=h.classList.contains("theme-label")?1:.9;return{element:h,ax:d,ay:u,width:h.offsetWidth,height:h.offsetHeight,x:parseFloat(h.style.left)-h.offsetWidth*d,y:parseFloat(h.style.top)-h.offsetHeight*u}});for(let h of nu(c,{width:this.width,height:this.height,top:this.mobile?this.mapTop+2:this.headerHeight+8,bottom:this.mobile?this.mapBottom+6:60}))h.element.style.left=`${h.x+h.width*h.ax}px`,h.element.style.top=`${h.y+h.height*h.ay}px`}wake(){this.element.dataset.cameraReady="false",!this.pending&&this.active&&!document.hidden&&(this.pending=!0,requestAnimationFrame(t=>this.draw(t)))}draw(t){if(this.pending=!1,!this.active||document.hidden)return;let e=Math.min(.05,this.last?(t-this.last)/1e3:.016);this.last=t,this.time+=e,this.settling=Math.max(0,(this.settling||0)-e);let n=this.departureDelay>0;this.departureDelay=Math.max(0,(this.departureDelay||0)-e),this.bridges.update(e,this.journey,this.reduced());let i=n||this.introActive?null:this.journey.update(e,(h,d,u)=>this.bridges.state.canTraverse(h,d,u));this.bridges.render(),i&&(this.selected=i.index,this.theme=this.world.stations[i.index].theme,this.mode="theme",this.manualView=null,this.pan.set(0,0,0),this.zoom=1,this.syncLabels()),this.introActive&&(this.introElapsed+=e,this.introElapsed>=4.5&&(this.introActive=!1)),this.skipButton.hidden=!this.introActive,this.element.dataset.intro=this.introActive?this.introElapsed<1.2?"look":this.introElapsed<2.9?"scratch":"zoom":"complete",this.measureMap(),this.cameraAt(!1,e),this.updateArchive(e),this.updateCharacter(e),this.updateAmbience(e),this.updateSpotlight(e);let r=!this.reduced()&&!this.introActive&&!document.querySelector("dialog[open]")&&!this.down?.drag;r||(this.hover=-1);let a=this.element.querySelector("[data-card]:focus-visible"),o=r?this.hover>=0?this.hover:a?+a.dataset.card:-1:-1;this.islandMotion.update(e,o>=0?o:-1,this.camera,this.width,this.height),this.meteors.update(e,r&&this.journey.phase==="idle",this.width,this.height),this.exhaust.update(e,o>=0?this.world.stations[o]:null,r),this.element.dataset.exhaustProject=o>=0?this.world.stations[o].id:"",this.element.dataset.exhaustCount=String(this.exhaust.activeCount),this.layout(),this.scene.updateMatrixWorld(),this.renderer.render(this.scene,this.camera),this.element.dataset.drawCalls=String(this.renderer.info.render.calls),this.resolveReady?.(),this.resolveReady=null,i&&this.onOpen(i.index),this.closeResolve&&this.journey.phase==="idle"&&(this.closeResolve(),this.closeResolve=null);let l=this.archiveMoving||this.bridges.state.moving||this.introActive||this.spotTransition||this.settling>0||this.ripples.length>0||["walking","casting","opening","closing"].includes(this.journey.phase)||this.center.distanceTo(this.goalCenter)>.005||Math.abs(this.viewHeight-this.goalHeight)>.005;this.element.dataset.cameraReady=String(!l),this.manualDirect=!1;let c=!this.reduced()&&!document.querySelector("dialog[open]");l||c?(this.pending=!0,requestAnimationFrame(h=>this.draw(h))):this.last=0}};var D0={p:["00000","11110","10001","11110","10000","10000","10000"],i:["00100","00000","01100","00100","00100","00100","01110"],x:["00000","10001","01010","00100","01010","10001","00000"],e:["00000","01110","10001","11111","10000","01111","00000"],l:["01100","00100","00100","00100","00100","00100","00011"],c:["00000","01111","10000","10000","10000","01111","00000"],a:["00000","01110","00001","01111","10001","01111","00000"],o:["00000","01110","10001","10001","10001","01110","00000"],0:["01110","10001","10011","10101","11001","10001","01110"],1:["00100","01100","00100","00100","00100","00100","01110"],2:["01110","10001","00001","00010","00100","01000","11111"],3:["11110","00001","00001","01110","00001","00001","11110"],4:["00010","00110","01010","10010","11111","00010","00010"],5:["11111","10000","10000","11110","00001","00001","11110"],6:["01110","10000","10000","11110","10001","10001","01110"],7:["11111","00001","00010","00100","01000","01000","01000"],8:["01110","10001","10001","01110","10001","10001","01110"],9:["01110","10001","10001","01111","00001","00001","01110"]};function pu(s){let t="";return[...s].forEach((e,n)=>{let i="";(D0[e]||[]).forEach((r,a)=>[...r].forEach((o,l)=>{o==="1"&&(i+=`<rect x="${n*6+l}" y="${a}" width="1" height="1"/>`)})),t+=`<g class="pixel-letter" style="--letter:${n}">${i}</g>`}),`<svg viewBox="0 0 ${s.length*6-1} 7" aria-hidden="true" shape-rendering="crispEdges" fill="currentColor">${t}</svg>`}function mu(s,{motionQuery:t,reduced:e}){let n,i=s.querySelectorAll(".pixel-letter"),r=()=>{clearTimeout(n),s.classList.remove("brand-idle")},a=()=>!document.hidden&&!e()&&!document.querySelector("dialog[open]");function o(){clearTimeout(n),!(document.hidden||e())&&(n=setTimeout(()=>{a()&&s.classList.add("brand-idle"),o()},5e3))}function l(){r(),o()}s.addEventListener("animationend",c=>{c.animationName==="pixelLetterHop"&&c.target===i[i.length-1]&&s.classList.remove("brand-idle")});for(let c of["pointermove","pointerdown","keydown","wheel","scroll"])document.addEventListener(c,l,{passive:!0,capture:!0});document.addEventListener("visibilitychange",l),t.addEventListener("change",l),o()}function N0(s,t,e,n){if(!e||!n)return!0;let i=Math.min(t.width/e,t.height/n),r=e*i,a=n*i,o=t.left+(t.width-r)/2,l=t.top+(t.height-a)/2;return s.x>=o&&s.x<=o+r&&s.y>=l&&s.y<=l+a}function gu(s,t){let e=t.target;if(!e?.closest||t.button!==0||e.closest("button,a,video,input,textarea,select,figure,svg,h1,h2,h3,p,li"))return!1;let n=e.closest("img");if(n)return!N0({x:t.clientX,y:t.clientY},n.getBoundingClientRect(),n.naturalWidth,n.naturalHeight);for(let i=e;i;i=i.parentElement){let r=i.getBoundingClientRect();if(i.scrollHeight>i.clientHeight&&i.offsetWidth>i.clientWidth+2&&t.clientX>=r.left+i.clientLeft+i.clientWidth&&t.clientX<=r.right)return!1;if(i===s)break}return!0}function Js(s,t){let e=null;s.addEventListener("pointerdown",n=>{e=gu(s,n)?{x:n.clientX,y:n.clientY,id:n.pointerId}:null},{capture:!0}),s.addEventListener("pointercancel",()=>{e=null}),s.addEventListener("click",n=>{let i=e;e=null,!(!i||!s.open||!gu(s,n)||Math.hypot(n.clientX-i.x,n.clientY-i.y)>7)&&(s.ownerDocument.getSelection()?.toString()||t())})}var zn=s=>String(s).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function U0(s,t,e){return s.map(n=>{let i=t.find(r=>r.id===n.id);if(!i)throw new Error(`Unknown gallery project: ${n.id}`);return{project:i,period:n.period||i.period,skills:n.skills||i.keywords,images:n.images.slice(0,10).map((r,a)=>{let o=typeof r=="string"?e.get(r):r;if(!o)throw new Error(`Unknown gallery image: ${r}`);return{src:typeof r=="string"?`/media/gallery/${n.id}-${r}.jpg`:o.src,original:o.original||o.src,width:o.width,height:o.height,surface:o.surface,alt:`${i.title} \xB7 ${o.chapter||"\u6F14\u793A\u753B\u9762"} ${a+1}`}})}})}function xu({dialog:s,config:t,projects:e,assets:n,onProject:i,onClose:r,reduced:a}){let o=U0(t,e,n),l=document.querySelector("#gallery-preview"),c=s.querySelector(".gallery-timeline"),h,d=0,u;c.innerHTML=o.map(({project:v,period:p,skills:f,images:b})=>`<article class="gallery-project" data-gallery-project="${v.id}">
  <p class="gallery-period">${zn(p)}</p><div class="gallery-project-body">
  <h2><button data-gallery-detail="${v.id}">${Wn(v.id)}<span>${zn(v.title)}</span><span class="gallery-detail-arrow" aria-hidden="true">\u2197</span></button></h2>
  <ul class="gallery-skills" aria-label="\u4E3B\u8981\u804C\u4E1A\u6280\u80FD">${f.map(A=>`<li>${zn(A)}</li>`).join("")}</ul>
  <div class="gallery-filmstrip" role="region" aria-label="${zn(v.title)}\u63D2\u56FE" tabindex="0">${b.map((A,M)=>`<button class="gallery-photo" data-gallery-image="${M}" aria-label="\u653E\u5927\uFF1A${zn(A.alt)}" style="--photo-ratio:${Math.max(.65,Math.min(2,A.width/A.height||1.6))}"><img class="${A.surface==="light"?"media-illustration":""}" src="${zn(A.src)}" width="${A.width}" height="${A.height}" alt="${zn(A.alt)}" loading="lazy" decoding="async" draggable="false"></button>`).join("")}</div>
  <div class="gallery-strip-controls" ${b.length<2?"hidden":""}><button data-strip-prev aria-label="\u4E0A\u4E00\u7EC4${zn(v.title)}\u63D2\u56FE">\u2190</button><button data-strip-next aria-label="\u4E0B\u4E00\u7EC4${zn(v.title)}\u63D2\u56FE">\u2192</button></div>
  </div></article>`).join("");function m(){let v=h.images[d],p=l.querySelector("img");p.src=v.original,p.alt=v.alt,p.classList.toggle("media-illustration",v.surface==="light"),l.querySelector("a").href=v.original,l.querySelector("[data-preview-prev]").disabled=d===0,l.querySelector("[data-preview-next]").disabled=d===h.images.length-1}function g(){l.close(),l.querySelector("img").removeAttribute("src"),u?.focus({preventScroll:!0})}return o.forEach(v=>{let p=c.querySelector(`[data-gallery-project="${v.project.id}"]`),f=p.querySelector(".gallery-filmstrip"),b=S=>f.scrollBy({left:S*Math.max(220,f.clientWidth*.8),behavior:a()?"instant":"smooth"}),A=p.querySelector("[data-strip-prev]"),M=p.querySelector("[data-strip-next]"),w=()=>{p.querySelector(".gallery-strip-controls").hidden=f.scrollWidth<=f.clientWidth+2,A.disabled=f.scrollLeft<=4,M.disabled=f.scrollLeft+f.clientWidth>=f.scrollWidth-2};A.onclick=()=>b(-1),M.onclick=()=>b(1),f.addEventListener("scroll",w,{passive:!0}),new ResizeObserver(w).observe(f),f.addEventListener("keydown",S=>{["ArrowLeft","ArrowRight"].includes(S.key)&&(S.preventDefault(),S.stopPropagation(),b(S.key==="ArrowLeft"?-1:1))}),p.querySelector("[data-gallery-detail]").onclick=S=>i(v.project,S.currentTarget),p.querySelectorAll("[data-gallery-image]").forEach(S=>S.onclick=()=>{h=v,d=+S.dataset.galleryImage,u=S,m(),l.showModal(),l.querySelector("[data-preview-close]").focus()})}),l.querySelector("[data-preview-close]").onclick=g,l.querySelector("[data-preview-prev]").onclick=()=>{d>0&&(d--,m())},l.querySelector("[data-preview-next]").onclick=()=>{d<h.images.length-1&&(d++,m())},l.addEventListener("keydown",v=>{if(["ArrowLeft","ArrowRight"].includes(v.key)){v.preventDefault(),v.stopPropagation();let p=d+(v.key==="ArrowRight"?1:-1);p>=0&&p<h.images.length&&(d=p,m())}}),l.addEventListener("cancel",v=>{v.preventDefault(),g()}),Js(l,g),s.querySelector("[data-gallery-close]").onclick=r,s.addEventListener("cancel",v=>{v.preventDefault(),r()}),{open(){s.open||(s.showModal(),s.querySelector("[data-gallery-close]").focus({preventScroll:!0}))},close(){l.open&&g(),s.close()},projectButton(v){return c.querySelector(`[data-gallery-detail="${v}"]`)}}}(async()=>{"use strict";let s=ic(),t=window.portfolioBoot,e=t?.data,n=t?.gallery;if(!e||!n)throw new Error("\u4F5C\u54C1\u6570\u636E\u52A0\u8F7D\u5931\u8D25");let i=e.projects,r=new Map(e.assets.map(F=>[F.id,F])),a=F=>document.querySelector(F),o=F=>[...document.querySelectorAll(F)],l=F=>String(F??"").replace(/[&<>"']/g,ot=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[ot]),c=Kl(a("#demo-link"),a("#demo-device-notice"),a("#rally-download")),h=F=>F.src,d=F=>F&&["png","jpg","jpeg","gif"].includes(F.type),u=F=>F&&["mp4","mov","flv"].includes(F.type),m=F=>!!F,g=matchMedia("(prefers-reduced-motion: reduce)"),v=()=>g.matches||new URLSearchParams(location.search).get("motion")==="reduce",p=F=>new Promise(ot=>setTimeout(ot,v()?0:F)),f=i.findIndex(F=>F.id==="pgos"),b=null,A=null,M=!1,w=!1,S=null,C=[],_=0,T=!1,I=null,U=null,B=null,W={noartfps:"No Art FPS",brushline:'Brushline<span class="title-break"> </span>Rally',museum:"Photo Museum",nex:"Nex",pgos:"PGOS",bot:"Bot",win10:"Win10 \u52A9\u624B",ishowfx:"iShowFX"};function L(F){return F?.preview?`<img src="${l(F.preview)}" alt="${l(F.chapter)}" loading="lazy">`:`<span>${l(F?.type==="pdf"?"\u6280\u672F\u5206\u4EAB":"\u4F5C\u54C1")}</span>`}let H=F=>je.find(ot=>ot.members.includes(F));function Y(F=!1){let ot=i[f];a("#title").innerHTML=W[ot.id]||l(ot.title),a("#title").classList.toggle("latin",["noartfps","brushline","museum","nex","pgos","bot","ishowfx"].includes(ot.id)),a("#title").classList.toggle("long-title",!W[ot.id]&&ot.title.length>8),a("#summary").textContent=ot.summary,a("#stage").dataset.project=ot.id,a("#project-topics").innerHTML=(ot.workflow||[]).map((ft,E)=>`<li>${Gn(ft.icon||["compass","agent","screen","route"][E%4])}<span>${l(ft.title)}</span></li>`).join(""),document.body.classList.toggle("theme-focused",!!b),a("#overview").hidden=!b;let R=H(ot.id).members,zt=R.indexOf(ot.id);a("#previous").disabled=zt===0,a("#next").disabled=zt===R.length-1,A?A.select(f,{focus:!F}):(a("#cards").innerHTML=je.filter(ft=>!b||ft.id===b).map(ft=>`<section class="flat-cluster ${!b&&ft.id==="km"?"flat-archive-peek":""}"><h2><button data-theme-action="${ft.id}" aria-label="${!b&&ft.id==="km"?"\u5C55\u5F00":""}${l(ft.title)}">${l(ft.title)}</button></h2><div ${!b&&(ft.id==="km"||innerWidth<=850)?"hidden":""}>${ft.members.map(E=>{let x=i.findIndex(X=>X.id===E),O=i[x];return`<button class="flat-project ${x===f?"active":""}" data-card="${x}" aria-label="\u8BBF\u95EE ${l(O.title)}">${O.coverSrc?`<img src="${O.coverSrc}" alt="">`:""}<span class="flat-project-title">${Wn(O.id)}<span>${l(O.title)}</span></span></button>`}).join("")}</div></section>`).join(""),o("[data-card]").forEach(ft=>ft.onclick=()=>it(+ft.dataset.card)),o("[data-theme-action]").forEach(ft=>ft.onclick=()=>Z(ft.dataset.themeAction)))}function Z(F){M||a("#detail").open||(b=F,f=i.findIndex(ot=>ot.id===je.find(R=>R.id===F).hub),Y(!0),A?.focusTheme(F))}function rt(){M||a("#detail").open||(b=null,Y(!0),A?.overview(),a("#stage").focus({preventScroll:!0}))}function $(F){M||a("#detail").open||(f=F,b=H(i[F].id).id,Y())}function et(F){if(!b){Z(je[F>0?0:je.length-1].id);return}let ot=je.find(zt=>zt.id===b).members,R=ot.indexOf(i[f].id);$(i.findIndex(zt=>zt.id===ot[Math.max(0,Math.min(ot.length-1,R+F))]))}function it(F){M||a("#detail").open||(s.tap(),f=F,b=H(i[F].id).id,S=document.activeElement,Y(!0),A?A.visit(F):yt(i[F]))}function Ct(F){return F?.project==="noartfps"&&u(F)}function Tt(F){if(!F)return'<div class="document">'+l(i[f].summary)+"</div>";if(d(F))return`<img class="${F.surface==="light"?"media-illustration":""}" src="${l(h(F))}" alt="${l(F.chapter)}">`;if(u(F)){let ot=h(F);return`<video controls playsinline preload="metadata" aria-label="${l(F.chapter)}"${Ct(F)?" data-play-on-request":""} poster="${l(F.preview||"")}" src="${l(ot)}"></video>`}return`<div class="document"><a href="${l(h(F))}" target="_blank" rel="noopener">${l(F.title||"\u9605\u8BFB\u6280\u672F\u5206\u4EAB")} \u2197</a></div>`}function ne(F,ot){let R=F.querySelector("img");R&&R.addEventListener("error",()=>{F.innerHTML='<div class="document">\u56FE\u7247\u6682\u65F6\u65E0\u6CD5\u663E\u793A</div>'},{once:!0});let zt=F.querySelector("video");zt&&zt.addEventListener("error",()=>{F.innerHTML=`<div class="document">${L(ot)}<p><a href="${l(ot.original)}" target="_blank" rel="noopener">\u6253\u5F00\u89C6\u9891 \u2197</a></p></div>`},{once:!0})}function Ht(F){F.querySelectorAll("video").forEach(ot=>ot.pause())}function jt(F){F.muted=!0;let ot=F.play();ot&&ot.catch(()=>{})}function J(){I?.disconnect();let F=[...a("#media").querySelectorAll("video:not([data-play-on-request])")];if(F.length===1&&C.length===1){jt(F[0]);return}I=new IntersectionObserver(ot=>{if(!(!a("#detail").classList.contains("detail-reveal")||a("#lightbox").open))for(let R of ot)R.isIntersecting&&R.intersectionRatio>=.55?(F.filter(zt=>zt!==R.target).forEach(zt=>zt.pause()),jt(R.target)):R.target.pause()},{root:innerWidth>850?a("#media"):a("#detail"),threshold:[0,.55]}),F.forEach(ot=>I.observe(ot))}function nt(){Ht(a("#media")),I?.disconnect(),_=0;let F=i[f],ot=Ql(F,e.articles,r),R=C.length>1||!!ot,zt=(ft,E)=>`<figure data-item="${E}"${Ct(ft)?' class="demo-reel"':""}>${d(ft)?`<button data-expand="${E}" aria-label="\u653E\u5927\uFF1A${l(ft.chapter)}"><img class="${ft.surface==="light"?"media-illustration":""}" src="${l(h(ft))}" width="${ft.width}" height="${ft.height}" alt="${l(ft.chapter)}" loading="${E<2?"eager":"lazy"}"></button>`:Tt(ft)}${u(ft)?`<button class="video-expand" data-expand="${E}" aria-label="\u653E\u5927\u89C6\u9891\uFF1A${l(ft.chapter)}">\u2922</button>`:""}</figure>`;a("#media").classList.toggle("masonry",R),a("#media").innerHTML=R?'<div class="masonry-grid">'+ot+C.map(zt).join("")+"</div>":Tt(C[0]),R?o("[data-item]").forEach(ft=>ne(ft,C[Number(ft.dataset.item)])):ne(a("#media"),C[0]),o("[data-expand]").forEach(ft=>ft.onclick=()=>Vt(Number(ft.dataset.expand))),a("#expand").hidden=!C[0]||!d(C[0])&&!u(C[0]),a(".media-toolbar").hidden=R||!C[0]}async function yt(F,{fromHistory:ot=!1}={}){if(M)return;M=!0,(ot||!S?.isConnected)&&(S=a("#major-gallery").open?U.projectButton(F.id)||a("[data-gallery-close]"):a("#explore")),f=i.indexOf(F),b=H(F.id).id,Y(!0),ot&&A&&A.locate(f),c.setProject(F),a("#detail-period").textContent=F.period,a("#detail-title").textContent=F.title,a("#detail-summary").textContent=F.summary,a("#detail").classList.toggle("article-detail",!!F.articleOnly),a("#detail-summary").hidden=F.articleOnly||F.workflow?.length===1,a(".detail-copy > h3").hidden=a("#contributions").hidden=!!F.articleOnly||!!F.workflow||["cloudgame","xidian"].includes(F.id),a("#ownership").hidden=!F.ownership,a("#ownership").textContent=F.ownership||"",a("#workflow").hidden=!F.workflow,a("#workflow").innerHTML=(F.workflow||[]).map((ft,E)=>`<section>${Gn(ft.icon||["compass","agent","screen","route"][E%4])}<div><h3>${l(ft.title)}</h3><p>${l(ft.text)}</p></div></section>`).join(""),a("#contributions").innerHTML=F.contributions.map(ft=>`<li>${l(ft)}</li>`).join("");let R=F.mediaOrder||[F.cover,...F.assets.filter(ft=>ft!==F.cover)];C=F.articleOnly?[]:R.map(ft=>r.get(ft)).filter(m),nt(),w=!!A&&!F.articleOnly;let zt=a("#detail");zt.dataset.ready="false",zt.dataset.mediaLayout=C.length+(F.articles?.length||0)>1?"collection":"single",document.body.classList.add("is-extracting"),s.island({id:null}),s.setDetail(!0),zt.showModal(),zt.scrollTop=0,a("#media").scrollTop=0,zt.classList.remove("measuring"),zt.classList.add("detail-reveal"),document.body.classList.add("detail-open"),document.body.classList.remove("is-extracting"),await p(250),zt.dataset.ready="true",a("#close-detail").focus({preventScroll:!0}),M=!1,J(),ot||history.pushState({portfolioDetail:F.id,portfolioGallery:a("#major-gallery").open},"","#project="+encodeURIComponent(F.id)),Qt()}async function Nt({fromHistory:F=!1}={}){M||!a("#detail").open||(M=!0,a("#detail").dataset.ready="false",c.close(),a("#lightbox").open&&ge(!1),I?.disconnect(),Ht(a("#detail")),a("#detail").classList.remove("detail-reveal"),a("#detail").classList.add("detail-leave"),document.body.classList.add("is-returning"),await p(160),a("#detail").close(),w&&A&&await A.close(),a("#detail").classList.remove("detail-leave"),document.body.classList.remove("detail-open","is-returning"),a("#media").innerHTML="",w=!1,M=!1,s.setDetail(a("#major-gallery").open),s.setAudibleVideo(!1),Y(!0),F||(history.state?.portfolioDetail?history.back():history.replaceState(null,"",location.pathname+location.search)),(S?.isConnected?S:a("#explore")).focus({preventScroll:!0}),Qt())}function _t(){let F=C[_];Ht(a("#large-media")),a("#large-media").innerHTML=Tt(F),ne(a("#large-media"),F),a("#original-link").href=F.original,a("#original-link").textContent=d(F)?"\u6253\u5F00\u539F\u56FE \u2197":"\u6253\u5F00\u539F\u4EF6 \u2197",a("#large-prev").hidden=a("#large-next").hidden=C.length<=1,a("#large-prev").disabled=_===0,a("#large-next").disabled=_===C.length-1;let ot=a("#large-media video");ot&&!Ct(F)&&jt(ot)}function Vt(F=0){C[F]&&(_=F,I?.disconnect(),Ht(a("#media")),_t(),a("#lightbox").showModal())}function ge(F=!0){Ht(a("#large-media")),a("#lightbox").close(),a("#large-media").innerHTML="",(a(`[data-expand="${_}"]`)||a("#expand")).focus({preventScroll:!0}),F&&J()}async function Bt({initial:F=!1}={}){if(M){T=!0;return}F||A?.cancel(),a("#about").open&&Gt();let ot=new URLSearchParams(location.hash.slice(1)).get("project"),R=i.find(zt=>zt.id===ot);if(a("#detail").open&&(!R||R!==i[f])&&await Nt({fromHistory:!0}),location.hash==="#gallery"){ye({fromHistory:!0});return}if(a("#major-gallery").open&&!R&&Le({fromHistory:!0}),ot&&!R){history.replaceState(null,"",location.pathname+location.search),rt();return}R&&!a("#detail").open&&await yt(R,{fromHistory:!0})}function Qt(){T&&(T=!1,Bt())}addEventListener("popstate",Bt),addEventListener("hashchange",Bt),a("#overview").onclick=rt,a("#previous").onclick=()=>et(-1),a("#next").onclick=()=>et(1),a("#explore").onclick=()=>it(f),a("#title").onclick=()=>it(f),a("#title").onkeydown=F=>{["Enter"," "].includes(F.key)&&(F.preventDefault(),it(f))},a("#close-detail").onclick=()=>Nt(),a("#detail").addEventListener("cancel",F=>{F.preventDefault(),Nt()}),a("#expand").onclick=()=>Vt(0),a("#close-lightbox").onclick=()=>ge(),a("#lightbox").addEventListener("cancel",F=>{F.preventDefault(),ge()}),Js(a("#detail"),()=>{a("#lightbox").open||Nt()}),Js(a("#lightbox"),()=>ge()),a("#large-prev").onclick=()=>{_--,_t()},a("#large-next").onclick=()=>{_++,_t()},document.addEventListener("keydown",F=>{if(a("#demo-device-notice").open||a("#about").open||a("#major-gallery").open&&!a("#detail").open)return;if(F.key==="Escape"&&!a("#detail").open){A?.introActive||["walking","casting","opening"].includes(A?.journey.phase)?A.cancel():b&&rt();return}if(M||!["ArrowLeft","ArrowRight"].includes(F.key)||document.activeElement.tagName==="VIDEO")return;let ot=F.key==="ArrowRight"?1:-1;a("#lightbox").open?(F.preventDefault(),_=Math.max(0,Math.min(C.length-1,_+ot)),_t()):a("#detail").open||(F.preventDefault(),et(ot))}),addEventListener("resize",()=>{!A&&!a("#detail").open&&Y()});try{if(new URLSearchParams(location.search).get("renderer")==="flat")throw new Error("Flat gallery");A=new ho({element:a("#stage"),projects:i,assets:r,onOverview:()=>{s.tap(),rt()},onIslandSound:F=>s.island(F),onAbout:()=>{s.tap(),ce(A.profileButton)},onWalk:(F,ot)=>s.walk(F,ot),onPortal:(F,ot)=>s.portal(F,ot),onSelect:(F,ot)=>ot?.visit?it(F):$(F),onOpen:F=>yt(i[F]),onTheme:Z,onFailure:()=>{a(".map-controls").hidden=!0,A=null,a("#stage canvas")?.remove(),a("#stage").dataset.renderer="fallback",document.body.classList.remove("webgl-ready"),Y()}}),document.body.classList.add("webgl-ready"),a("#stage").dataset.animation="idle"}catch{a(".map-controls").hidden=!0,a("#stage canvas")?.remove(),a("#stage").dataset.renderer="fallback"}a(".brand").innerHTML=pu("pixelcao"),mu(a(".brand"),{motionQuery:g,reduced:v}),a("#about-content").innerHTML=`<div class="about-heading"><div class="portrait" aria-hidden="true"><svg viewBox="0 0 32 40" shape-rendering="crispEdges"><path fill="#eee6cb" d="M14 1h4v4h2v6h3v7H9v-7h3V5h2zM5 18h22v3H5zM10 27h12v4h3v5H7v-5h3z"/><path fill="#35474c" d="M10 21h12v6H10zM10 36h5v4h-5zm7 0h5v4h-5z"/><path fill="#e4b35c" d="M12 23h2v2h-2zm6 0h2v2h-2zM15 28h2v8h-2z"/></svg></div><div><h2 id="about-title">\u66F9\u4E00\u806A <span>pixelcao</span></h2><p>T10 \u5DE5\u7A0B\u5E08 \xB7 2016 \u5E74\u52A0\u5165\u817E\u8BAF</p></div></div>
  <p class="about-lead">\u8BA9\u60F3\u6CD5\u6210\u4E3A\u53EF\u8FD0\u884C\u3001\u53EF\u9A8C\u8BC1\u7684\u4EA7\u54C1\u3002</p>
  <div class="about-skills">${[["agent","Agent \u7CFB\u7EDF","\u7F16\u6392\u3001\u4E0A\u4E0B\u6587\u4E0E\u5DE5\u5177\u8C03\u7528\uFF0C\u8BA9\u667A\u80FD\u4F53\u7A33\u5B9A\u5B8C\u6210\u4EFB\u52A1\u3002"],["game","\u6E38\u620F\u8054\u673A","\u5339\u914D\u3001\u4E13\u7528\u670D\u52A1\u5668\u6258\u7BA1\u4E0E\u5B9E\u65F6\u7F51\u7EDC\uFF0C\u4ECE\u65B9\u6848\u8D70\u5230\u4E0A\u7EBF\u3002"],["screen","\u5BA2\u6237\u7AEF\u4F53\u9A8C","\u4ECE Windows \u5DE5\u5177\u5230\u4EA4\u4E92\u5C55\u5385\uFF0C\u8FDE\u63A5\u7CFB\u7EDF\u80FD\u529B\u4E0E\u7528\u6237\u4F53\u9A8C\u3002"],["compass","AI \u534F\u4F5C","\u5B9A\u4E49\u76EE\u6807\u3001\u505A\u6280\u672F\u4E0E\u8BBE\u8BA1\u53D6\u820D\uFF0C\u7528 Codex \u5B9E\u73B0\u5E76\u6301\u7EED\u9A8C\u8BC1\u3002"]].map(([F,ot,R])=>`<section>${Gn(F)}<h3>${ot}</h3><p>${R}</p></section>`).join("")}</div>
  <div class="about-school">${Gn("school")}<div>\u897F\u5B89\u7535\u5B50\u79D1\u6280\u5927\u5B66<span>\u667A\u80FD\u79D1\u5B66\u4E0E\u6280\u672F</span></div></div>
  <div class="about-links"><a href="https://github.com/yicongcao" target="_blank" rel="noopener">${Gn("github")}GitHub \u2197</a><a href="tel:18126045570">${Gn("phone")}181 2604 5570</a><span class="about-resources"><a href="/resume/" target="_blank" rel="noopener">\u5B8C\u6574\u7B80\u5386 \u2197</a><a class="about-archive" href="https://yicongcao.github.io/old-blog/">\u65E7\u535A\u5BA2 \xB7 \u5DF2\u5F52\u6863</a></span></div>`;let ie=null;function Gt(){a("#about").close(),(ie?.isConnected?ie:a(".brand")).focus({preventScroll:!0}),A?.wake()}function ce(F=a(".brand")){s.island({id:null}),!(M||a("#detail").open||a("#about").open)&&(ie=F,A?.cancel(),a("#about").showModal(),a("#close-about").focus({preventScroll:!0}))}a(".brand").onclick=()=>ce(),a("#close-about").onclick=Gt,a("#about").addEventListener("cancel",F=>{F.preventDefault(),Gt()}),U=xu({dialog:a("#major-gallery"),config:n,projects:i,assets:r,reduced:v,onClose:()=>Le(),onProject:(F,ot)=>{S=ot,A?.locate(i.indexOf(F)),yt(F)}});function ye({fromHistory:F=!1}={}){M||a("#detail").open||a("#major-gallery").open||(B=document.activeElement===document.body?a("#open-gallery"):document.activeElement,A?.cancel(),s.island({id:null}),s.setDetail(!0),U.open(),document.body.classList.add("gallery-open"),F||history.pushState({portfolioGallery:!0},"","#gallery"))}function Le({fromHistory:F=!1}={}){U.close(),document.body.classList.remove("gallery-open"),s.setDetail(!1),A?.wake(),F||(history.state?.portfolioGallery&&location.hash==="#gallery"?history.back():history.replaceState(null,"",location.pathname+location.search)),(B?.isConnected?B:a("#open-gallery")).focus({preventScroll:!0})}a("#open-gallery").onclick=()=>ye(),v()&&(document.body.dataset.reduced="true"),Y(!0),A&&await A.ready,await t.complete()&&(Bt({initial:!0}),document.fonts?.ready.then(()=>A?.wake()))})().catch(s=>{window.portfolioBoot?.fail(s),document.querySelector("#title").textContent="\u4F5C\u54C1\u6682\u65F6\u65E0\u6CD5\u52A0\u8F7D",document.querySelector("#summary").textContent="\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5\uFF0C\u6216\u67E5\u770B\u7B80\u5386\u3002",console.error(s)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
