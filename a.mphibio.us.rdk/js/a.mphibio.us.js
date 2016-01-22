/*! a.mphibio.us v1.5.6 | Copyright 2016, Clive Moore @cliveMoore @Treefrog | http://a.mphibio.us | http://www.opensource.org/licenses/mit-license.php */
function initTabNav(){jQuery("ul.mainmenu").tabNav({items:"li"})}!function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),function(a){"use strict";a(["jquery"],function(a){function b(b){return a.isFunction(b)||"object"==typeof b?b:{top:b,left:b}}var c=a.scrollTo=function(b,c,d){return a(window).scrollTo(b,c,d)};return c.defaults={axis:"xy",duration:parseFloat(a.fn.jquery)>=1.3?0:1,limit:!0},c.window=function(){return a(window)._scrollable()},a.fn._scrollable=function(){return this.map(function(){var b=this,c=!b.nodeName||-1!=a.inArray(b.nodeName.toLowerCase(),["iframe","#document","html","body"]);if(!c)return b;var d=(b.contentWindow||b).document||b.ownerDocument||b;return/webkit/i.test(navigator.userAgent)||"BackCompat"==d.compatMode?d.body:d.documentElement})},a.fn.scrollTo=function(d,e,f){return"object"==typeof e&&(f=e,e=0),"function"==typeof f&&(f={onAfter:f}),"max"==d&&(d=9e9),f=a.extend({},c.defaults,f),e=e||f.duration,f.queue=f.queue&&f.axis.length>1,f.queue&&(e/=2),f.offset=b(f.offset),f.over=b(f.over),this._scrollable().each(function(){function g(a){j.animate(l,e,f.easing,a&&function(){a.call(this,k,f)})}if(null!=d){var h,i=this,j=a(i),k=d,l={},m=j.is("html,body");switch(typeof k){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(k)){k=b(k);break}if(k=m?a(k):a(k,this),!k.length)return;case"object":(k.is||k.style)&&(h=(k=a(k)).offset())}var n=a.isFunction(f.offset)&&f.offset(i,k)||f.offset;a.each(f.axis.split(""),function(a,b){var d="x"==b?"Left":"Top",e=d.toLowerCase(),o="scroll"+d,p=i[o],q=c.max(i,b);if(h)l[o]=h[e]+(m?0:p-j.offset()[e]),f.margin&&(l[o]-=parseInt(k.css("margin"+d))||0,l[o]-=parseInt(k.css("border"+d+"Width"))||0),l[o]+=n[e]||0,f.over[e]&&(l[o]+=k["x"==b?"width":"height"]()*f.over[e]);else{var r=k[e];l[o]=r.slice&&"%"==r.slice(-1)?parseFloat(r)/100*q:r}f.limit&&/^\d+$/.test(l[o])&&(l[o]=l[o]<=0?0:Math.min(l[o],q)),!a&&f.queue&&(p!=l[o]&&g(f.onAfterFirst),delete l[o])}),g(f.onAfter)}}).end()},c.max=function(b,c){var d="x"==c?"Width":"Height",e="scroll"+d;if(!a(b).is("html,body"))return b[e]-a(b)[d.toLowerCase()]();var f="client"+d,g=b.ownerDocument.documentElement,h=b.ownerDocument.body;return Math.max(g[e],h[e])-Math.min(g[f],h[f])},c})}("function"==typeof define&&define.amd?define:function(a,b){"undefined"!=typeof module&&module.exports?module.exports=b(require("jquery")):b(jQuery)}),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b,c,d){var e=c.hash.slice(1),f=document.getElementById(e)||document.getElementsByName(e)[0];if(f){b&&b.preventDefault();var g=a(d.target);if(!(d.lock&&g.is(":animated")||d.onBefore&&d.onBefore(b,f,g)===!1)){if(d.stop&&g._scrollable().stop(!0),d.hash){var h=f.id===e?"id":"name",i=a("<a> </a>").attr(h,e).css({position:"absolute",top:a(window).scrollTop(),left:a(window).scrollLeft()});f[h]="",a("body").prepend(i),location.hash=c.hash,i.remove(),f[h]=e}g.scrollTo(f,d).trigger("notify.serialScroll",[f])}}}var c=location.href.replace(/#.*/,""),d=a.localScroll=function(b){a("body").localScroll(b)};return d.defaults={duration:1e3,axis:"y",event:"click",stop:!0,target:window},a.fn.localScroll=function(e){function f(){return!(!this.href||!this.hash||this.href.replace(this.hash,"")!=c||e.filter&&!a(this).is(e.filter))}return e=a.extend({},d.defaults,e),e.hash&&location.hash&&(e.target&&window.scrollTo(0,0),b(0,location,e)),e.lazy?this.on(e.event,"a,area",function(a){f.call(this)&&b(a,this,e)}):this.find("a,area").filter(f).bind(e.event,function(a){b(a,this,e)}).end().end()},d.hash=function(){},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(c){return b(a,c)}):"object"==typeof module&&module.exports?module.exports=b(a,require("ev-emitter")):a.imagesLoaded=b(a,a.EvEmitter)}(window,function(a,b){"use strict";function c(a,b){for(var c in b)a[c]=b[c];return a}function d(a){var b=[];if(Array.isArray(a))b=a;else if("number"==typeof a.length)for(var c=0;c<a.length;c++)b.push(a[c]);else b.push(a);return b}function e(a,b,f){return this instanceof e?("string"==typeof a&&(a=document.querySelectorAll(a)),this.elements=d(a),this.options=c({},this.options),"function"==typeof b?f=b:c(this.options,b),f&&this.on("always",f),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new e(a,b,f)}function f(a){this.img=a}function g(a,b){this.url=a,this.element=b,this.img=new Image}var h=a.jQuery,i=a.console;e.prototype=Object.create(b.prototype),e.prototype.options={},e.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},e.prototype.addElementImages=function(a){"IMG"==a.nodeName&&this.addImage(a),this.options.background===!0&&this.addElementBackgroundImages(a);var b=a.nodeType;if(b&&j[b]){for(var c=a.querySelectorAll("img"),d=0;d<c.length;d++){var e=c[d];this.addImage(e)}if("string"==typeof this.options.background){var f=a.querySelectorAll(this.options.background);for(d=0;d<f.length;d++){var g=f[d];this.addElementBackgroundImages(g)}}}};var j={1:!0,9:!0,11:!0};return e.prototype.addElementBackgroundImages=function(a){var b=getComputedStyle(a);if(b)for(var c=/url\((['"])?(.*?)\1\)/gi,d=c.exec(b.backgroundImage);null!==d;){var e=d&&d[2];e&&this.addBackground(e,a),d=c.exec(b.backgroundImage)}},e.prototype.addImage=function(a){var b=new f(a);this.images.push(b)},e.prototype.addBackground=function(a,b){var c=new g(a,b);this.images.push(c)},e.prototype.check=function(){function a(a,c,d){setTimeout(function(){b.progress(a,c,d)})}var b=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(b){b.once("progress",a),b.check()}):void this.complete()},e.prototype.progress=function(a,b,c){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!a.isLoaded,this.emitEvent("progress",[this,a,b]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,a),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&i&&i.log("progress: "+c,a,b)},e.prototype.complete=function(){var a=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(a,[this]),this.emitEvent("always",[this]),this.jqDeferred){var b=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[b](this)}},f.prototype=Object.create(b.prototype),f.prototype.check=function(){var a=this.getIsImageComplete();return a?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},f.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},f.prototype.confirm=function(a,b){this.isLoaded=a,this.emitEvent("progress",[this,this.img,b])},f.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},f.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},f.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},f.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},g.prototype=Object.create(f.prototype),g.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var a=this.getIsImageComplete();a&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},g.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},g.prototype.confirm=function(a,b){this.isLoaded=a,this.emitEvent("progress",[this,this.element,b])},e.makeJQueryPlugin=function(b){b=b||a.jQuery,b&&(h=b,h.fn.imagesLoaded=function(a,b){var c=new e(this,a,b);return c.jqDeferred.promise(h(this))})},e.makeJQueryPlugin(),e}),function(a,b){"use strict";var c,d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b,c=d.documentElement.style;if("string"==typeof c[a])return a;a=f(a);for(var e=0,h=g.length;h>e;e++)if(b=g[e]+a,"string"==typeof c[b])return b},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=3===f.height(),f.remove(),e.remove()}return a},csstransitions:function(){return!!j}};if(e)for(c in k)e.hasOwnProperty(c)||e.addTest(c,k[c]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var l,m=" ";for(c in k)l=k[c](),e[c]=l,m+=" "+(l?"":"no-")+c;b("html").addClass(m)}if(e.csstransforms){var n=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},o=function(a,c,d){var e,f,g=b.data(a,"isoTransform")||{},h={},j={};h[c]=d,b.extend(g,h);for(e in g)f=g[e],j[e]=n[e](f);var k=j.translate||"",l=j.scale||"",m=k+l;b.data(a,"isoTransform",g),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){o(a,"scale",b)},get:function(a){var c=b.data(a,"isoTransform");return c&&c.scale?c.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){o(a,"translate",b)},get:function(a){var c=b.data(a,"isoTransform");return c&&c.translate?c.translate:[0,0]}}}var p,q;e.csstransitions&&(p={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],q=h("transitionDuration"));var r,s=b.event,t=b.event.handle?"handle":"dispatch";s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",r&&clearTimeout(r),r=setTimeout(function(){s[t].apply(c,d)},"execAsap"===b?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var u=["width","height"],v=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=u.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;g>f;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&v.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return 1===b.nodeType}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a,b=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,"");switch(b){case"css":case"none":a=!1;break;case"jquery":a=!0;break;default:a=!e.csstransitions}this.isUsingJQueryAnimation=a,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=""===this.options.filter?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if("*"!==b){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d,e,f=this,g=this.options.getSortData;a.each(function(){d=b(this),e={};for(var a in g)e[a]=c||"original-order"!==a?g[a](d,f):b.data(this,"isotope-sort-data")[a];b.data(this,"isotope-sort-data",e)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&"original-order"!==a&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:g>f?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;if(this["_"+c+"Layout"](a),this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d,f,g,h,i=this.isLaidOut&&this.isUsingJQueryAnimation?"animate":"css",j=this.options.animationOptions,k=this.options.onLayout;if(f=function(a,b){b.$el[i](b.style,j)},this._isInserting&&this.isUsingJQueryAnimation)f=function(a,b){d=b.$el.hasClass("no-transition")?"css":i,b.$el[d](b.style,j)};else if(c||k||j.complete){var l=!1,m=[c,k,j.complete],n=this;if(g=!0,h=function(){if(!l){for(var b,c=0,d=m.length;d>c;c++)b=m[c],"function"==typeof b&&b.call(n.element,a,n);l=!0}},this.isUsingJQueryAnimation&&"animate"===i)j.complete=h,g=!1;else if(e.csstransitions){for(var o,r=0,s=this.styleQueue[0],t=s&&s.$el;!t||!t.length;){if(o=this.styleQueue[r++],!o)return;t=o.$el}var u=parseFloat(getComputedStyle(t[0])[q]);u>0&&(f=function(a,b){b.$el[i](b.style,j).one(p,h)},g=!1)}}b.each(this.styleQueue,f),g&&h(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),v.unbind(".isotope")},_getSegments:function(a){var b,c=this.options.layoutMode,d=a?"rowHeight":"columnWidth",e=a?"height":"width",g=a?"rows":"cols",h=this.element[e](),i=this.options[c]&&this.options[c][d]||this.$filteredAtoms["outer"+f(e)](!0)||h;b=Math.floor(h/i),b=Math.max(b,1),this[c][g]=b,this[c][d]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;for(this.masonry.colYs=[];a--;)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);if(e=Math.min(e,d.cols),1===e)c._masonryPlaceBrick(a,d.colYs);else{var f,g,h=d.cols+1-e,i=[];for(g=0;h>g;g++)f=d.colYs.slice(g,g+e),i[g]=Math.max.apply(Math,f);c._masonryPlaceBrick(a,i)}})},_masonryPlaceBrick:function(a,b){for(var c=Math.min.apply(Math,b),d=0,e=0,f=b.length;f>e;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;j>e;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);0!==e.x&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(){var a=b(this);c._pushPosition(a,0,c.straightDown.y),c.straightDown.y+=a.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;for(this.masonryHorizontal.rowXs=[];a--;)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);if(e=Math.min(e,d.rows),1===e)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f,g,h=d.rows+1-e,i=[];for(g=0;h>g;g++)f=d.rowXs.slice(g,g+e),i[g]=Math.max.apply(Math,f);c._masonryHorizontalPlaceBrick(a,i)}})},_masonryHorizontalPlaceBrick:function(a,b){for(var c=Math.min.apply(Math,b),d=0,e=0,f=b.length;f>e;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;j>e;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);0!==e.y&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(){var a=b(this);c._pushPosition(a,c.straightAcross.x,0),c.straightAcross.x+=a.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function c(){a.call(e,f)}function d(a){var e=a.target;e.src!==h&&-1===b.inArray(e,i)&&(i.push(e),--g<=0&&(setTimeout(c),f.unbind(".imagesLoaded",d)))}var e=this,f=e.find("img").add(e.filter("img")),g=f.length,h="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",i=[];return g||c(),f.bind("load.imagesLoaded error.imagesLoaded",d).each(function(){var a=this.src;this.src=h,this.src=a}),e};var w=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if("string"==typeof a){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");return c?b.isFunction(c[a])&&"_"!==a.charAt(0)?void c[a].apply(c,d):void w("no such method '"+a+"' for isotope instance"):void w("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'")})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}}(window,jQuery),window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b,c){"use strict";function d(a){var b,c,d,e,g,h=a||{};b=h.elements||f.getAllElements();for(var i=0,j=b.length;j>i;i++)if(c=b[i],d=c.parentNode,e=void 0,g=void 0,"IMG"===c.nodeName.toUpperCase()&&(c[f.ns]||(c[f.ns]={}),h.reevaluate||!c[f.ns].evaluated)){if("PICTURE"===d.nodeName.toUpperCase()){if(f.removeVideoShim(d),e=f.getMatch(c,d),e===!1)continue}else e=void 0;("PICTURE"===d.nodeName.toUpperCase()||c.srcset&&!f.srcsetSupported||!f.sizesSupported&&c.srcset&&c.srcset.indexOf("w")>-1)&&f.dodgeSrcset(c),e?(g=f.processSourceSet(e),f.applyBestCandidate(g,c)):(g=f.processSourceSet(c),(void 0===c.srcset||c[f.ns].srcset)&&f.applyBestCandidate(g,c)),c[f.ns].evaluated=!0}}function e(){function c(){var b;a._picturefillWorking||(a._picturefillWorking=!0,a.clearTimeout(b),b=a.setTimeout(function(){d({reevaluate:!0}),a._picturefillWorking=!1},60))}d();var e=setInterval(function(){return d(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(e):void 0},250);a.addEventListener?a.addEventListener("resize",c,!1):a.attachEvent&&a.attachEvent("onresize",c)}if(a.HTMLPictureElement)return void(a.picturefill=function(){});b.createElement("picture");var f={};f.ns="picturefill",function(){f.srcsetSupported="srcset"in c,f.sizesSupported="sizes"in c}(),f.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},f.endsWith=function(a,b){return a.endsWith?a.endsWith(b):-1!==a.indexOf(b,a.length-b.length)},f.restrictsMixedContent=function(){return"https:"===a.location.protocol},f.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},f.getDpr=function(){return a.devicePixelRatio||1},f.getWidthFromLength=function(a){a=a&&a.indexOf("%")>-1==!1&&(parseFloat(a)>0||a.indexOf("calc(")>-1)?a:"100vw",a=a.replace("vw","%"),f.lengthEl||(f.lengthEl=b.createElement("div"),f.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden"),f.lengthEl.style.width=a,b.body.appendChild(f.lengthEl),f.lengthEl.className="helper-from-picturefill-js",f.lengthEl.offsetWidth<=0&&(f.lengthEl.style.width=b.documentElement.offsetWidth+"px");var c=f.lengthEl.offsetWidth;return b.body.removeChild(f.lengthEl),c},f.types={},f.types["image/jpeg"]=!0,f.types["image/gif"]=!0,f.types["image/png"]=!0,f.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),f.types["image/webp"]=function(){var a="image/webp";c.onerror=function(){f.types[a]=!1,d()},c.onload=function(){f.types[a]=1===c.width,d()},c.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="},f.verifyTypeSupport=function(a){var b=a.getAttribute("type");return null===b||""===b?!0:"function"==typeof f.types[b]?(f.types[b](),"pending"):f.types[b]},f.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},f.findWidthFromSourceSize=function(a){for(var b,c=f.trim(a).split(/\s*,\s*/),d=0,e=c.length;e>d;d++){var g=c[d],h=f.parseSize(g),i=h.length,j=h.media;if(i&&(!j||f.matchesMedia(j))){b=i;break}}return f.getWidthFromLength(b)},f.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c.slice(-1);if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},f.parseDescriptor=function(a,b){var c,d=b||"100vw",e=a&&a.replace(/(^\s+|\s+$)/g,""),g=f.findWidthFromSourceSize(d);if(e)for(var h=e.split(" "),i=h.length-1;i>=0;i--){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||f.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/g)}return c||1},f.getCandidatesFromSourceSet=function(a,b){for(var c=f.parseSrcset(a),d=[],e=0,g=c.length;g>e;e++){var h=c[e];d.push({url:h.url,resolution:f.parseDescriptor(h.descriptor,b)})}return d},f.dodgeSrcset=function(a){a.srcset&&(a[f.ns].srcset=a.srcset,a.removeAttribute("srcset"))},f.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[f.ns]&&a[f.ns].srcset&&(b=a[f.ns].srcset),b&&(d=f.getCandidatesFromSourceSet(b,c)),d},f.applyBestCandidate=function(a,b){var c,d,e;a.sort(f.ascendingSort),d=a.length,e=a[d-1];for(var g=0;d>g;g++)if(c=a[g],c.resolution>=f.getDpr()){e=c;break}if(e&&!f.endsWith(b.src,e.url))if(f.restrictsMixedContent()&&"http:"===e.url.substr(0,"http:".length).toLowerCase())void 0!==typeof console&&console.warn("Blocked mixed content image "+e.url);else{b.src=e.url,b.currentSrc=b.src;var h=b.style||{},i="webkitBackfaceVisibility"in h,j=h.zoom;i&&(h.zoom=".999",i=b.offsetWidth,h.zoom=j)}},f.ascendingSort=function(a,b){return a.resolution-b.resolution},f.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},f.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,e=c.length;e>d;d++){var g=c[d];("PICTURE"===g.parentNode.nodeName.toUpperCase()||null!==g.getAttribute("srcset")||g[f.ns]&&null!==g[f.ns].srcset)&&a.push(g)}return a},f.getMatch=function(a,b){for(var c,d=b.childNodes,e=0,g=d.length;g>e;e++){var h=d[e];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||f.matchesMedia(i))){var j=f.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},e(),d._=f,"object"==typeof module&&"object"==typeof module.exports?module.exports=d:"function"==typeof define&&define.amd?define(function(){return d}):"object"==typeof a&&(a.picturefill=d)}(this,this.document,new this.Image),function(a,b,c){function d(a){var b={},d=/^jQuery\d+$/;return c.each(a.attributes,function(a,c){c.specified&&!d.test(c.name)&&(b[c.name]=c.value)}),b}function e(a,b){var d=this,e=c(d);if(d.value==e.attr("placeholder")&&e.hasClass("placeholder"))if(e.data("placeholder-password")){if(e=e.hide().next().show().attr("id",e.removeAttr("id").data("placeholder-id")),a===!0)return e[0].value=b;e.focus()}else d.value="",e.removeClass("placeholder"),d==g()&&d.select()}function f(){var a,b=this,f=c(b),g=this.id;if(""==b.value){if("password"==b.type){if(!f.data("placeholder-textinput")){try{a=f.clone().attr({type:"text"})}catch(h){a=c("<input>").attr(c.extend(d(this),{type:"text"}))}a.removeAttr("name").data({"placeholder-password":f,"placeholder-id":g}).bind("focus.placeholder",e),f.data({"placeholder-textinput":a,"placeholder-id":g}).before(a)}f=f.removeAttr("id").hide().prev().attr("id",g).show()}f.addClass("placeholder"),f[0].value=f.attr("placeholder")}else f.removeClass("placeholder")}function g(){try{return b.activeElement}catch(a){}}var h,i,j="[object OperaMini]"==Object.prototype.toString.call(a.operamini),k="placeholder"in b.createElement("input")&&!j,l="placeholder"in b.createElement("textarea")&&!j,m=c.fn,n=c.valHooks,o=c.propHooks;k&&l?(i=m.placeholder=function(){return this},i.input=i.textarea=!0):(i=m.placeholder=function(){var a=this;return a.filter((k?"textarea":":input")+"[placeholder]").not(".placeholder").bind({
"focus.placeholder":e,"blur.placeholder":f}).data("placeholder-enabled",!0).trigger("blur.placeholder"),a},i.input=k,i.textarea=l,h={get:function(a){var b=c(a),d=b.data("placeholder-password");return d?d[0].value:b.data("placeholder-enabled")&&b.hasClass("placeholder")?"":a.value},set:function(a,b){var d=c(a),h=d.data("placeholder-password");return h?h[0].value=b:d.data("placeholder-enabled")?(""==b?(a.value=b,a!=g()&&f.call(a)):d.hasClass("placeholder")?e.call(a,!0,b)||(a.value=b):a.value=b,d):a.value=b}},k||(n.input=h,o.value=h),l||(n.textarea=h,o.value=h),c(function(){c(b).delegate("form","submit.placeholder",function(){var a=c(".placeholder",this).each(e);setTimeout(function(){a.each(f)},10)})}),c(a).bind("beforeunload.placeholder",function(){c(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery),function(a){var b=/(Windows Phone OS) ([0-9.]*).*/.exec(navigator.userAgent)||/MSIE 10.*Touch/.test(navigator.userAgent),c="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch;a.fn.tabNav=function(d){var e=a.extend({hoverClass:"hover",items:"li",opener:">a",delay:10},d);return b||c?this:this.each(function(){var b=a(this),c=b.find(e.items);c.each(function(c,d){var f,g,h,i=a(this),j=i.find(e.opener);j.bind("focus",function(){f=b.hasClass("js-nav-active"),g=window.TouchNav&&TouchNav.isActiveOn(d),(!f||g)&&k(),i.trigger(f&&g?"itemhover":"mouseenter")}).bind("blur",function(){i.trigger(f&&g?"itemleave":"mouseleave")});var k=function(){k.done||(k.done=!0,i.hover(function(){clearTimeout(h),h=setTimeout(function(){i.addClass(e.hoverClass)},e.delay)},function(){clearTimeout(h),h=setTimeout(function(){i.removeClass(e.hoverClass)},e.delay)}))}})})}}(jQuery);var amp={};amp.init=function(){amp.bindlisteners(),Modernizr.touch?amp.mobilelisteners():amp.desktoplisteners()},amp.cache=function(){amp.dom={}},amp.bindlisteners=function(){$("table td:first-child").addClass("first"),$("table tr:nth-child(2n+1)").addClass("odd"),$("table tr:nth-child(2n)").addClass("even"),$("table tr:first-child").addClass("first"),$("table tr:last-child").addClass("last"),$("table td:first-child").addClass("first"),$("table td:last-child").addClass("last"),$("table th:first-child").addClass("first"),$("table th:last-child").addClass("last"),$("ul li:first-child").addClass("first"),$("ul li:last-child").addClass("last"),$(document).on("click",".checkall",function(){$(this).closest("fieldset").find(":checkbox").prop("checked",this.checked)}),$(document).on("click","#nav li",function(){$(this).hasClass("active")||($("#nav li").removeClass("active"),$(this).addClass("active"))}),$(document).on("click",".tabs li a",function(){var a=$(this).closest("ul").attr("id"),b="#"+$(this).attr("amp-tab-content");return $(this).hasClass("active")&&b.length||(a>0?($("#"+a+".tabs li a").removeClass("active"),$(this).addClass("active")):($(".tabs li a").removeClass("active"),$(this).addClass("active")),$(b).show().addClass("active").siblings().hide().removeClass("active")),!1}),$(document).on("change",".options_select",function(){var a=".options_div."+$(this).val();$(".options_div").each(function(){$(this).addClass("hide")}),console.log(a),$(a).length>0&&$(a).removeClass("hide")}),$(document).on("click",".opener",function(){var a=$(this).attr("amp-target");$("#"+$(this).attr("amp-target")).hasClass("hide")?$("#"+a).removeClass("hide"):$("#"+a).addClass("hide")}),$(document).on("click",".amp_trigger",function(){$(this).attr("location");"out"==$(this).attr("clicktype")?window.open($(this).attr("location")):document.location.href=$(this).attr("location")}),$(document).on("click",".modal_opener",function(){var a=$(this).attr("amp-target");if($("#"+$(this).attr("amp-target")).hasClass("show"))$("body").css("overflow","auto"),$("#"+a).removeClass("show"),$(".focus").removeClass("blur");else{$("body").css("overflow","hidden"),$("#"+a).addClass("show").css("overflow","auto"),$(".focus").addClass("blur");var b="#"+$(this).attr("amp-tab-content"),c="#trigger_"+$(this).attr("amp-tab-content");$(c).hasClass("active")&&b.length||($(".tabs li a").removeClass("active"),$(c).addClass("active"),$(b).show().addClass("active").siblings().hide().removeClass("active"))}}),$(document).on("click",".modal_kill",function(){var a=$(this).attr("amp-target");$("body").css("overflow","auto"),$("#"+a).removeClass("show"),$(".focus").removeClass("blur")}),$(document).on("click","#searchtoggle, .search_cancel",function(){$("#searchtoggle").hasClass("active")?($("#searchtoggle").removeClass("active"),$("#search_form").removeClass("open")):($("#searchtoggle").addClass("active"),$("#search_form").addClass("open"))}),$(document).on("click","#navtoggle",function(){$("#navtoggle").hasClass("active")?($("#navtoggle").removeClass("active"),$("#mobilenav").removeClass("open")):($("#navtoggle").addClass("active"),$("#mobilenav").addClass("open"))})},amp.mobilelisteners=function(){var a=!1;$("body").on("touchmove",function(){a=!0}),$("body").on("touchstart",function(){a=!1}),$(document).on("click","#mobilenav ul.mainnav li a",function(a){console.log("click");var b=navigator.userAgent.match(/iPad|iPhone|iPod/g)?!0:!1,c=navigator.userAgent.match(/Blackberry|BB/g)?!0:!1;if(0==b||0==c){var d=$(this).siblings("ul, .drop").length;$(this).hasClass("activated")||1>d||(a.preventDefault(),$(this).addClass("activated"))}}),$(document).on("touchend","#mobilenav ul.mainnav li a",function(){if(console.log("touchend"),a=!1){var b=$(this).siblings("ul").length;b>1&&$(this).addClass("okgo")}}),$(document).on("click","#mobilenav li.okgo > a",function(){window.location.href($(this).attr("href"))})},amp.desktoplisteners=function(){initTabNav()},$(document).ready(function(){amp.init(),$("#leapheader").draggable()});