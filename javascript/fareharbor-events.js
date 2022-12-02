(function(){var embedId=+(new Date())+'-'+Math.random().toString().substr(2);var CARTFRAME_EMBED_ID='fareharbor-cartframe-iframe';var LIGHTFRAME_EMBED_ID='fareharbor-lightframe-iframe';var initialHeight="100px";var staticHeight="";var embedSrc="https://fareharbor.com/embeds/items/shortsvillereindeer/?flow=451580&amp;full-items=yes";var fallbackEmbedSrc="https://fareharbor.com/embeds/button/shortsvillereindeer/?flow=451580&amp;full-items=yes";var lightframeFallback="simple";var lightframePath="https://fareharbor.com/embeds/book";var cartframeSrc="https://fareharbor.com/embeds/cart/";var originPath="https://fareharbor.com";var backUrl="";var embedLanguage="";var isWrapped=false;var isLightframed=true;var isAlwaysLightframed=false;var isAutolightframe=false;var lightframeShade="";var isFallback=!(window.JSON&&window.JSON.stringify)||!window.addEventListener;var isScriptInBody=document.body!==null;var isScriptInIframe=window.top!==window.self;var width=Math.max(document.documentElement.clientWidth,window.innerWidth||0);var isTouchEnabled=('ontouchstart'in window)||navigator.msMaxTouchPoints||navigator.maxTouchPoints;var isTouchUsed=false;var shouldLightframe=function(){if(!isLightframed){return false;}
if(!isScriptInBody){return false;}
if(isScriptInIframe){return false;}
if(isFallback){return false;}
if(isAlwaysLightframed){return true;}
if(isTouchEnabled&&width<1100){return false;}
if(isTouchUsed){return false;}
return true;};var shouldCartframe=function(){if(!isScriptInBody){return false;}
if(isScriptInIframe){return false;}
if(isFallback){return false;}
return true;};var hasClass=function(element,className){return(' '+element.className+' ').replace(/[\t\r\n\f]/g,' ').indexOf(' '+className+' ')>-1;};var toggleClass=function(element,className,add){if(add){if(hasClass(element,className)){return;}
element.className=element.className+' '+className;return;}
var elementClassName=(' '+element.className+' ').replace(/[\t\r\n\f]/g,' ');element.className=elementClassName.replace(' '+className+' ',' ');};var ignore=function(){};var console=window.console||{};console.log=console.log||ignore;console.warn=console.warn||ignore;console.error=console.error||ignore;var pageState=(function(){var state=window.FH?window.FH._:{};return function(key,value){if(!key){return state;}
if(typeof value==='undefined'){return state[key];}
state[key]=value;};})();var composeUrl=(function(){var encodeUriQuery=function(val,pctEncodeSpaces){return encodeURIComponent(val).replace(/%40/gi,'@').replace(/%3A/gi,':').replace(/%24/g,'$').replace(/%2C/gi,',').replace(/%2F/gi,'/').replace(/%20/g,(pctEncodeSpaces?'%20':'+'));};return function(url,query,avoidDuplicates){var parts=[];var encoded;for(var param in query){if(!query.hasOwnProperty(param)||!query[param]){continue;}
encoded=encodeUriQuery(param);if(avoidDuplicates&&new RegExp('[&\\?]'+encoded+'=').test(url)){continue;}
parts.push(encoded+'='+encodeUriQuery(query[param],true));}
var index=url.indexOf('?');var needsSep=parts.length&&index!==url.length-1;var sep=needsSep?(index===-1?'?':'&'):'';return url+sep+parts.join('&');};})();var getShortnameFromUrl=function(url){var regex=new RegExp('/embeds/[^/]+/([a-zA-Z0-9-_]+)/[^/]*.*$');var match=url.split('?')[0].match(regex);var shortname=match&&match[1];return shortname};var extractLightframePath=(function(){var ligthframePathPattern=new RegExp('^'+originPath+'/embeds/book/(\\w+.*)');return function(url){var matches=ligthframePathPattern.exec(url);if(matches&&matches.length===2){return'/'+matches[1];}
return false;};})();var closest=function(element,tagName,container){while(element.tagName.toLowerCase()!==tagName){if(container&&element===container){return;}
element=element.parentElement;if(!element){return;}}
return element;};var storage={get:function(key){try{return window.localStorage.getItem(key);}
catch(e){return null;}},set:function(key,value){try{window.localStorage.setItem(key,value);}
catch(e){}}};var getHref=function(){var href='';try{href=window.top.location.href;}
catch(e){}
return href;};var getSearch=function(){var search='';try{search=window.top.location.search;}
catch(e){}
return search;};var parseQueryParam=function(name){name=name.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');var regex=new RegExp('[\\?&]'+name+'=([^&#]*)');var results=regex.exec(getSearch());return results===null?'':decodeURIComponent(results[1].replace(/\+/g,' '));};var generateUuid=function(){return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=Math.random()*16|0;var v=c==='x'?r:(r&0x3|0x8);return v.toString(16);});};var isValidUuid=(function(){var UUID_REGEX=/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;return function(uuid){return uuid&&UUID_REGEX.test(uuid);};})();var persistentGetter=function(storageKey,queryKey,options){options=options||{};var value=pageState(storageKey)||parseQueryParam(queryKey)||storage.get(storageKey)||'';if(options.validator&&!options.validator(value)){value='';}
if(!value&&options.generator){value=options.generator();}
if(value){storage.set(storageKey,value);pageState(storageKey,value);}
return value;};var userIdentifier=persistentGetter('fareharbor-uuid','fh-u',{validator:isValidUuid,generator:generateUuid});var appendPropertiesToUrl=(function(){var yesNo=function(bool){return bool?'yes':'no';};var keyValue=function(k,v){return k+','+v+';';};var query={language:embedLanguage,u:userIdentifier,'from-ssl':yesNo(window.location.protocol==='https:')};var includesAny=function(dictionary,keys){keys=typeof keys==='string'?[keys]:keys;for(var i=0,len=keys.length;i<len;i++){if(dictionary[keys[i]]){return true;}}
return false;};var wrap=function(func,keys){return function(){if(!includesAny(query,keys)){func();}};};var linkGoogleAnalytics=wrap(function(){try{if(window.GoogleAnalyticsObject){var ga=window[window.GoogleAnalyticsObject];if(ga&&ga.getAll){var gaTrackers=ga.getAll();query.ga='';for(var i=0;i<gaTrackers.length;i++){var trackingId=gaTrackers[i].get('trackingId');var clientId=gaTrackers[i].get('clientId');query.ga+=keyValue(trackingId,clientId);}}}}
catch(e){delete query.ga;console.warn('analytics: unable to link Google Analytics');}},'ga');var linkGoogleAds=wrap(function(){var gclid=parseQueryParam('gclid');if(gclid){query.gclid=gclid;}},'gclid');var linkOptimizely=wrap(function(){try{var opt=window.optimizely;if(opt&&opt.activeExperiments){query['o-aid']=opt.getAccountId();query['o-pid']=opt.getProjectId();query['o-uid']=document.cookie.match('optimizelyEndUserId=([^;]*)')[1];query['o-x']='';for(var i=0;i<opt.activeExperiments.length;i++){var experimentID=opt.activeExperiments[i];var variationID=opt.variationIdsMap[experimentID];query['o-x']+=keyValue(experimentID,variationID);}}}
catch(e){delete query['o-aid'];delete query['o-pid'];delete query['o-uid'];delete query['o-x'];console.warn('analytics: unable to link Optimizely');}},['o-aid','o-pid','o-uid','o-x']);var linkAdroll=wrap(function(){try{if(window.adroll_adv_id&&window.adroll_pix_id){query['ad-adv']=window.adroll_adv_id;query['ad-pix']=window.adroll_pix_id;}}
catch(e){delete query['ad-adv'];delete query['ad-pix'];console.warn('analytics: unable to link Adroll');}},['ad-adv','ad-pix']);var linkFacebook=wrap(function(){try{var fbq=(window.fbq&&window.fbq.registerPlugin)?window.fbq:window._fbq;if(fbq&&fbq.registerPlugin){fbq.registerPlugin('fareharbor',function(o){if(!o.pixels||!o.pixels.length){return;}
query['fb-pix']=o.pixels[0].id;});}}
catch(e){delete query['fb-pix'];console.warn('analytics: unable to link Facebook');}},'fb-pix');var findMeta=function(name){name='fh-'+name;var meta;if(document.querySelector){meta=document.querySelector('meta[name="'+name+'"]');}
else{var metas=document.getElementsByTagName('meta');for(var i=0,m;(m=metas[i++]);){if(m.name===name){meta=m;break;}}}
return meta;};var METAS=['site-tags','page-tags'];var addTags=wrap(function(){var meta;for(var i=0,len=METAS.length;i<len;i++){meta=findMeta(METAS[i]);if(meta&&meta.content){query[METAS[i]]=meta.content;}}},METAS);var addAnalyticsFlag=function(){if(shouldEnableAnalytics()){query.a='yes';}};var addBackUrl=function(){query['back']=window.location.href;}
var addLanguageFromStorage=function(url){var shortname=getShortnameFromUrl(url);if(shortname){var language=storage.get('fareharbor-language-'+shortname);if(language&&!query.language){query.language=language;}}};return function(url){linkGoogleAnalytics();linkGoogleAds();linkOptimizely();linkFacebook();linkAdroll();addTags();addAnalyticsFlag();if(!(new RegExp('[&\\?]back=').test(url))){addBackUrl();}
addLanguageFromStorage(url);return composeUrl(url,query,true);};})();var createStyles=function(){var styles=document.getElementById('fareharbor-styles');if(styles){return;}
var css='<style id="fareharbor-styles">    #fareharbor-lightframe-iframe, #fareharbor-lightframe-shade, #fareharbor-lightframe-loading, #fareharbor-cartframe, #fareharbor-cartframe iframe {   visibility: visible !important;   opacity: 1 !important;   padding: 0 !important;   box-sizing: content-box !important;   float: none !important;   direction: ltr !important;   text-indent: 0 !important;   text-shadow: none !important;   border: 0 none transparent !important;   filter: none !important;   -webkit-filter: none !important; }    #fareharbor-lightframe-iframe, #fareharbor-lightframe-shade {   position: fixed !important;   top: 0 !important;   right: 0 !important;   bottom: 0 !important;   left: 0 !important;   width: 100% !important;   height: 100% !important;   max-width: 100% !important;   max-height: 100% !important;   margin: 0 !important;   border-radius: 0 !important;   box-shadow: none !important; }    #fareharbor-cartframe {   height: auto !important;   width: auto !important; }  #fareharbor-lightframe-iframe {   display: none;    z-index: 999999999 !important;    overflow-x: hidden !important;   overflow-y: auto !important;   -webkit-overflow-scrolling: touch;   overflow-scrolling: touch;    background: transparent !important;   -webkit-tap-highlight-color: transparent; }  #fareharbor-lightframe-shade {   display: none;    z-index: 999999998 !important;    overflow: hidden !important;    background-color: rgba(255, 255, 255, 0.8) !important; /* IE */   background-color: var(--lightframe-shade-surface, rgba(255, 255, 255, 0.8)) !important;   -webkit-backdrop-filter:  blur(1px);   backdrop-filter: blur(1px); }  #fareharbor-lightframe-loading {   display: none;    position: fixed !important;   top: 50% !important;   left: 50% !important;   margin-top: -30px !important;   margin-left: -19px !important;    width: 26px !important;   height: 26px !important;    z-index: 999999999 !important;    border-radius: 50% !important;   border: 6px solid rgba(0, 0, 0, 0.25) !important; /* IE */   border-top-color: #000 !important; /* IE */    border-color: var(--lightframe-loader-border-color, rgba(0, 0, 0, 0.25)) !important;   border-top-color: var(--lightframe-loader-border-top-color, #000) !important;    -webkit-animation: spin .8s linear infinite !important;   animation: spin .8s linear infinite !important;    -webkit-transform-origin: 50% 50% 0;   -ms-transform-origin: 50% 50% 0;   -o-transform-origin: 50% 50% 0;   transform-origin: 50% 50% 0; }  @-webkit-keyframes spin { to { transform: rotate(360deg); } } @keyframes spin { to { transform: rotate(360deg); } }    #fareharbor-lightframe.fareharbor-is-showing #fareharbor-lightframe-iframe, #fareharbor-lightframe.fareharbor-is-showing #fareharbor-lightframe-shade, #fareharbor-lightframe-loading.fareharbor-is-loading {   display: block !important; }    #fareharbor-cartframe iframe {   display: block !important;    width: 230px !important;   height: 50px !important;    position: fixed !important;   z-index: 999999997 !important;   top: auto !important;   right: 20px !important;   bottom: -110px !important;    left: auto !important;   transition: bottom 300ms 500ms ease !important;    box-shadow: 0 1px 18px rgba(0, 0, 0, 0.42) !important;   border-radius: 50px !important;    background: transparent !important;   -webkit-tap-highlight-color: transparent; }  #fareharbor-cartframe.fareharbor-cart-is-showing iframe {   bottom: 20px !important; }  .fareharbor-showing-lightframe #fareharbor-cartframe.fareharbor-cart-is-showing iframe {   bottom: -110px !important;  }    .fareharbor-calendar-wrap iframe {   display: block !important;   padding: 0 !important;   margin: 0 !important;   border: 0 none transparent !important;   background: transparent !important;   -webkit-box-shadow: none !important;   -moz-box-shadow: none !important;   box-shadow: none !important; }    .fareharbor-lightframe-shade--dark {   --lightframe-shade-surface: rgba(0, 0, 0, 0.8);   --lightframe-loader-border-color: rgba(255, 255, 255, 0.25);   --lightframe-loader-border-top-color: hsl(205, 5%, 82%); }    @media screen and (prefers-color-scheme: dark) {   .fareharbor-lightframe-shade--auto {     --lightframe-shade-surface: rgba(0, 0, 0, 0.8);     --lightframe-loader-border-color: rgba(255, 255, 255, 0.25);     --lightframe-loader-border-top-color: hsl(205, 5%, 82%);   } }</style>';if(isScriptInBody){var styleContainer=document.createElement('div');styleContainer.style.setProperty('display','none','important');styleContainer.innerHTML=css;document.body.insertBefore(styleContainer,document.body.firstChild);}
else{document.write(css);}};var createdCartframe=false;var createCartframe=function(){if(!shouldCartframe()){return;}
var cartframe=document.getElementById('fareharbor-cartframe');if(cartframe){return;}
createdCartframe=true;var container=document.createElement('div');container.id='fareharbor-cartframe';var name=embedName(CARTFRAME_EMBED_ID);var src=appendPropertiesToUrl(cartframeSrc);container.innerHTML='<iframe id="'+CARTFRAME_EMBED_ID+'" name="'+name+'" frameborder=0 border=0 src="'+src+'" style="display: none;" title="FareHarbor"></iframe>';createStyles();document.body.insertBefore(container,document.body.firstChild);};var showCartframe=function(){if(!createdCartframe){return;}
var cartframe=document.getElementById('fareharbor-cartframe');if(!cartframe){return;}
createStyles();toggleClass(document.documentElement,'fareharbor-showing-cartframe',true);cartframe.className='fareharbor-cart-is-showing';};var hideCartframe=function(){if(!createdCartframe){return;}
var cartframe=document.getElementById('fareharbor-cartframe');if(!cartframe){return;}
toggleClass(document.documentElement,'fareharbor-showing-cartframe',false);cartframe.className='';};var notifyFrame=function(frameId,type,data){var iframe=document.getElementById(frameId);if(!iframe){return;}
var messageObject={type:type};if(data){messageObject.data=data;}
var message=window.JSON.stringify(messageObject);iframe.contentWindow.postMessage(message,'*');};var createLightframe=function(){var lightframe=document.getElementById('fareharbor-lightframe');if(lightframe){return;}
var container=document.createElement('div');container.id='fareharbor-lightframe';if(lightframeShade){document.documentElement.classList.add('fareharbor-lightframe-shade--'+lightframeShade);}
container.innerHTML='<div id="fareharbor-lightframe-shade"></div>'+'<div id="fareharbor-lightframe-loading"></div>';document.body.insertBefore(container,document.body.firstChild);};var openLightframe=function(url,lightframeFallbackOption,isLightframeDisabled){lightframeFallbackOption=lightframeFallbackOption||lightframeFallback;url=appendPropertiesToUrl(url);var lightframe=document.getElementById('fareharbor-lightframe');if(!lightframe||!shouldLightframe()||isLightframeDisabled){var fullUrl=originPath+url;if(lightframeFallbackOption!=='classic'){fullUrl=lightframePath+url;if(backUrl){fullUrl=composeUrl(fullUrl,{back:backUrl},true);}}
window.top.location.href=fullUrl;return true;}
createStyles();var iframe=document.getElementById(LIGHTFRAME_EMBED_ID);var lightframeLoading=document.getElementById('fareharbor-lightframe-loading');lightframeLoading.className='fareharbor-is-loading';lightframe.className='fareharbor-is-showing';var lightframeData={parentUrl:backUrl||getHref()};lightframeData=window.JSON.stringify(lightframeData);lightframeData=encodeURIComponent(lightframeData);if(!iframe){window.FH=window.FH||{};window.FH._bodyOverflow=document.body.style.overflow;window.FH._documentOverflow=document.documentElement.style.overflow;document.body.style.overflow='hidden';document.documentElement.style.overflow='hidden';iframe=document.createElement('iframe');iframe.id=LIGHTFRAME_EMBED_ID;iframe.name='fareharbor-lightframe:'+lightframeData;iframe.title='FareHarbor';iframe.frameBorder='0';iframe.border='0';iframe.width='100%';iframe.style.opacity='0';iframe.allow="payment *";iframe.src=lightframePath+url;lightframe.appendChild(iframe);}
else{iframe.style.opacity='0';iframe.allow="payment *";iframe.src=lightframePath+url;}
toggleClass(document.documentElement,'fareharbor-showing-lightframe',true);var lightframeClickToOpenTime=new Date();iframe.addEventListener('load',function(){var lightframeFinishedLoadingTime=new Date();this.focus();notifyFrame(LIGHTFRAME_EMBED_ID,'fareharbor-lightframe-created',{lightframeClickToOpenTime:lightframeClickToOpenTime,lightframeFinishedLoadingTime:lightframeFinishedLoadingTime})});return true;};var closeLightframe=function(){toggleClass(document.documentElement,'fareharbor-showing-lightframe',false);var lightframe=document.getElementById('fareharbor-lightframe');var iframe=document.getElementById(LIGHTFRAME_EMBED_ID);if(!lightframe){return false;}
lightframe.className='';var wasRemoved=false;if(iframe){lightframe.removeChild(iframe);wasRemoved=true;}
document.body.style.overflow=window.FH._bodyOverflow;document.documentElement.style.overflow=window.FH._documentOverflow;return true;};var createFallback=function(fallbackSrc){if(!fallbackSrc){return;}
var fallbackOptions='{"embedId":"'+embedId+'"}';fallbackOptions=encodeURIComponent(fallbackOptions);document.write('<iframe id="'+embedId+'" name="fareharbor-embed:'+fallbackOptions+'" frameborder=0 border=0 width="100%" src="'+fallbackSrc+'" title="FareHarbor"></iframe>');var fallback=document.getElementById(embedId);fallback.style.height="60px";return fallback;};var embedName=function(id){var options={isLightframed:shouldLightframe(),parentUrl:getHref(),embedId:id};return'fareharbor-embed:'+encodeURIComponent(window.JSON.stringify(options));};var createEmbedHtml=function(src){if(!src){return;}
src=appendPropertiesToUrl(src);var name=embedName(embedId);var iframeHtml='<iframe id="'+embedId+'" name="'+name+'" frameborder=0 border=0 width="100%" src="'+src+'" title="FareHarbor"></iframe>';if(isWrapped){iframeHtml='<div class="fareharbor-calendar-wrap">'+iframeHtml+'</div>';}
return iframeHtml;};var createEmbed=function(){var iframeHtml=createEmbedHtml(embedSrc);if(!iframeHtml){return;}
document.write(iframeHtml);var iframe=document.getElementById(embedId);iframe.style.height=initialHeight;if(staticHeight){iframe.style.height=staticHeight;}};var isReady=false;if(!window.FH){isReady=true;(function(){var QUERY_KEYS={asn:'asn',asnRef:'asn-ref',ref:'ref',items:'selected-items',fullItems:'full-items',kiosk:'kiosk',sheet:'sheet',sheetUuid:'sheet-uuid',schedule:'schedule',scheduleUuid:'schedule-uuid',back:'back',buttonTags:'button-tags',flow:'flow',language:'language',branding:'branding'};var DEFAULTS={fullItems:'no'};var zipQuery=function(options){var query={};for(var key in QUERY_KEYS){if(QUERY_KEYS.hasOwnProperty(key)){query[QUERY_KEYS[key]]=options[key]||DEFAULTS[key];}}
return query;};window.FH={version:"",_:pageState(),open:function(options){try{options=options||{};if(!options.shortname){return false;}
var lightframeFallback;if(options.fallback){lightframeFallback=options.fallback;delete options.fallback;}
var isLightframeDisabled=false;if(options.lightframe){isLightframeDisabled=options.lightframe==='no';delete options.lightframe;}
var path='/'+options.shortname+'/';if(options.view){if(options.view==='items'){}
else if(options.view==='all-availability'){path+='items/calendar/';}
else if(options.view.item){path+='items/'+options.view.item.toString()+'/';if(options.view.availability){path+='availability/'+options.view.availability.toString()+'/book/';}
else{path+='calendar/';}}}
options.items=options.items?options.items.join(','):null;path=composeUrl(path,zipQuery(options));return openLightframe(path,lightframeFallback,isLightframeDisabled);}catch(e){return false;}},close:function(){return closeLightframe();},autoLightframe:function(options){if(isFallback){return;}
if(typeof options==='string'){options={className:options};}
else if(options instanceof HTMLElement){options={container:options};}
else if(!options||typeof options!=='object'){options={};}
options.container=options.container instanceof HTMLElement?options.container:window.document;options.callback=typeof options.callback==='function'?options.callback:ignore;options.container.addEventListener('click',function(event){var link=closest(event.target,'a',options.container);if(!link){return;}
var onclick=link.getAttribute('onclick');var isOverride=onclick&&options.overrideOnclick!=='all';if(isOverride&&(!options.overrideOnclick||onclick.indexOf('FH.open(')!==-1)){return;}
var path=extractLightframePath(link.href);if(!path){return;}
if(options.className&&!hasClass(link,options.className)){return;}
try{options.callback(link);}
catch(e){console.error('FareHarbor AutoLightframe: error in callback function:',e);}
var isLightframeDisabled=path.indexOf('lightframe=no')!==-1;var didOpen=openLightframe(path,'simple',isLightframeDisabled);if(didOpen){event.preventDefault();event.stopPropagation();}},true);}};})();}
if(isAutolightframe){window.FH.autoLightframe();}
var isOneTrustScriptIncluded=function(){var regex=new RegExp('^https://cookie-cdn\.cookiepro\.com/.*/otSDKStub.js$');for(var i=0,len=document.scripts.length;i<len;i++){var src=document.scripts[i].src;if(src&&src.match(regex)){return true;}}
return false;};var checkOneTrustConsents=function(consents){for(var i=0,len=consents.length;i<len;i++){var value=consents[i];if(value==='C0002'||value==='C0004'||value==='C0005'){return true;}}
return false;};var parseOneTrustCookieConsent=function(){try{var oneTrustConsents=OnetrustActiveGroups.split(',');return checkOneTrustConsents(oneTrustConsents);}
catch(e){}};var setOneTrustConsentCallback=function(callback){try{OneTrust.OnConsentChanged(function(event){if(checkOneTrustConsents(event.detail)){callback();}});return true;}
catch(e){}
return false;};var shouldEnableAnalytics=function(){var consent=parseOneTrustCookieConsent();if(consent!==undefined){return consent;}
if(isOneTrustScriptIncluded()){return false;}
return true;};var setEnableAnalyticsCallback=function(callback){if(setOneTrustConsentCallback(callback)){return;}};if(isFallback){createFallback(fallbackEmbedSrc);return;}
createStyles();if(shouldLightframe()){createLightframe();}
createCartframe();createEmbed();window.addEventListener('unload',function(){});window.addEventListener('beforeunload',function(){});var onTouchDetected=function(){isTouchUsed=true;};window.addEventListener('touchstart',function onTouchStart(){onTouchDetected();window.removeEventListener('touchstart',onTouchStart);},false);window.addEventListener('pointerdown',function onPointerDown(evt){if(evt.pointerType=="touch"){onTouchDetected();window.removeEventListener('pointerdown',onPointerDown);}},false);document.addEventListener('mousedown',function(event){try{var link=closest(event.target,'a');if(!link){return;}
if(extractLightframePath(link.href)){link.href=appendPropertiesToUrl(link.href);}}
catch(e){return true;}},true);var isFromOwnEmbed=function(message){if(createdCartframe&&message.embedId===CARTFRAME_EMBED_ID){return true;}
return message.embedId===embedId;};var resize=function(message){if(staticHeight){return;}
if(!isFromOwnEmbed(message)){return;}
var height=message.height;var iframe=document.getElementById(embedId);if(iframe&&height){iframe.style.height=height+"px";}};var open=function(message){if(!isFromOwnEmbed(message)){return;}
openLightframe(message.url);};var close=function(message){closeLightframe();};var ready=function(message){
    
    console.log('ready!');
    
    var iframe=document.getElementById(LIGHTFRAME_EMBED_ID);if(iframe){iframe.style.opacity='';}
var lightframeLoading=document.getElementById('fareharbor-lightframe-loading');if(lightframeLoading){lightframeLoading.className='';}};var analyticsReady=function(message){var frameId;function enable(){notifyFrame(frameId,'fareharbor.analytics.enable');}
if(!message.embedId){frameId=LIGHTFRAME_EMBED_ID;}
else if(isFromOwnEmbed(message)){frameId=message.embedId;}
if(frameId){if(shouldEnableAnalytics()){enable();}
else{setEnableAnalyticsCallback(enable);}}};var handlers={};handlers['fareharbor.height']=resize;handlers['fareharbor.open']=open;handlers['fareharbor.close']=close;handlers['fareharbor.ready']=ready;handlers['fareharbor.touchDetected']=onTouchDetected;handlers['fareharbor.cart.show']=showCartframe;handlers['fareharbor.cart.hide']=hideCartframe;handlers['fareharbor.cart.changed']=function(){notifyFrame(CARTFRAME_EMBED_ID,'fareharbor.cart.changed');};handlers['fareharbor.confirm']=function(options){if(confirm(options.message)){notifyFrame(LIGHTFRAME_EMBED_ID,'fareharbor.confirmed');}};handlers['fareharbor.analytics.ready']=analyticsReady;handlers['fareharbor.storeLanguage']=function(message){storage.set('fareharbor-language-'+message.shortname,message.language);};window.addEventListener('message',function(e){var message;try{message=window.JSON.parse(e.data);}
catch(err){return;}
var handler;if(message.type){handler=handlers[message.type];}
if(message&&handler){handler(message);}},false);window.addEventListener('focus',function(){notifyFrame(CARTFRAME_EMBED_ID,'fareharbor.window.focused');});if(isReady&&document.documentElement){document.documentElement.className+=' fh-ready fareharbor-ready';}})();
