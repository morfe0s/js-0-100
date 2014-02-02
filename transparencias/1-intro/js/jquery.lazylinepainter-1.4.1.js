!function(t,e,a){var o="lazyLinePainter",n={init:function(e){return this.each(function(){var a=t(this),n=a.data(o);if(a.addClass("lazy-line"),!n){var r=t.extend({width:null,height:null,strokeWidth:2,strokeColor:"#000",strokeCap:"round",strokeJoin:"round",strokeOpacity:1,strokeDash:null,onComplete:null,delay:null,overrideKey:null},e),i=null===r.overrideKey?a.attr("id").replace("#",""):r.overrideKey,s=r.svgData[i].dimensions.width,l=r.svgData[i].dimensions.height;r.svgData=r.svgData[i].strokepath,null===r.width&&(r.width=s),null===r.height&&(r.height=l);var h=a.attr("id"),u=new Raphael(h,s,l);a.data(o,{svgData:r.svgData,width:r.width,height:r.height,strokeWidth:r.strokeWidth,strokeColor:r.strokeColor,strokeCap:r.strokeCap,strokeJoin:r.strokeJoin,strokeOpacity:r.strokeOpacity,strokeDash:r.strokeDash,onComplete:r.onComplete,delay:r.delay,overrideKey:r.overrideKey,paper:u,count:1,complete:!1,playhead:0,setTimeOutHandler:[],noAuto:r.noAuto})}})},prev:function(){t(this).data(o).count--},next:function(){var e=t(this).data(o),a=e.svgData[e.count-1];if(a){var n=e.paper.path(a.path);n.attr({stroke:"none","stroke-width":e.strokeWidth,"fill-opacity":0});{s({count:e.count,canvas:e.paper,pathstr:n,duration:a.duration,attr:r(e,a),callback:function(){e.setTimeOutHandler.splice(e.count,1),e.count++,e.svgData.length+1==e.count&&(e.complete=!0,null!==e.onComplete&&e.onComplete.call($this))}})}}},paint:function(){return this.each(function(){var e=t(this),a=e.data(o),n=function(){if(e.css({width:a.width,height:a.height}),a.noAuto){var o=a.svgData[0],n=a.paper.path(o.path);n.attr({stroke:"none","stroke-width":a.strokeWidth,"fill-opacity":0});{s({count:a.count,canvas:a.paper,pathstr:n,duration:o.duration,attr:r(a,o),callback:function(){a.setTimeOutHandler.splice(a.count,1),a.count++,a.svgData.length+1==a.count&&(a.complete=!0,null!==a.onComplete&&a.onComplete.call(e))}})}}else t.each(a.svgData,function(t,o){var n=a.paper.path(o.path);n.attr({stroke:"none","stroke-width":a.strokeWidth,"fill-opacity":0});var i=setTimeout(function(){s({count:a.count,canvas:a.paper,pathstr:n,duration:o.duration,attr:r(a,o),callback:function(){a.setTimeOutHandler.splice(a.count,1),a.count++,a.svgData.length+1==a.count&&(a.complete=!0,null!==a.onComplete&&a.onComplete.call(e))}})},a.playhead);a.playhead+=o.duration,a.setTimeOutHandler.push(i)})};null===a.delay?n():setTimeout(n,a.delay)})},erase:function(){return this.each(function(){var e=t(this);for(e.find("svg").empty(),d=e.data(o),i=0;i<d.setTimeOutHandler.length;i++)clearTimeout(d.setTimeOutHandler[i]);d.playhead=0,d.count=0,d.complete=!1})},destroy:function(){return this.each(function(){{var e=t(this);e.data(o)}e.removeData(o),e.remove()})},stamp:function(){return this.each(function(){var e=t(this),a=e.data(o),n=function(){for(e.css({width:a.width,height:a.height}),i=0;i<a.svgData.length;i++)a.paper.path(a.svgData[i].path).attr(r(a,a.svgData[i]))};null===a.delay?n():setTimeout(n,a.delay)})}},r=function(t,e){var a={stroke:e.strokeColor?e.strokeColor:t.strokeColor,"fill-opacity":0,"stroke-dasharray":e.strokeDash?e.strokeDash:t.strokeDash,"stroke-opacity":e.strokeOpacity?e.strokeOpacity:t.strokeOpacity,"stroke-width":e.strokeWidth?e.strokeWidth:t.strokeWidth,"stroke-linecap":e.strokeCap?e.strokeCap:t.strokeCap,"stroke-linejoin":e.strokeJoin?e.strokeJoin:t.strokeJoin};return a},s=function(t){var e,o=t.canvas,n=t.pathstr,r=t.duration,i=t.attr,s=t.callback;e="string"==typeof n?o.path(n).attr({stroke:"none",fill:"none"}):n;var l=o.path(e.getSubpath(0,1)).attr(i),h=e.getTotalLength(e),u=(e.getPointAtLength(0),(new Date).getTime()),c=25,p=setInterval(function(){var t=(new Date).getTime()-u,o=t/r*h,n=e.getSubpath(0,o);i.path=n,l.animate(i,c),t>=r&&(clearInterval(p),s!==a&&s(),e.remove())},c)};t.fn.lazylinepainter=function(t){return n[t]?n[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void 0:n.init.apply(this,arguments)}}(jQuery,window);