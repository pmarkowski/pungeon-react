(this["webpackJsonppungeon-react"]=this["webpackJsonppungeon-react"]||[]).push([[0],{30:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var o,i=n(1),r=n(2),c=n.n(r),a=n(15),s=n.n(a),l=(n(30),n(3)),u=n(4),d=n(7),O=n(6),E=n(5),b={PNG_EXPORTED:"PNG_EXPORTED",EXPORT_TO_PNG_CLICKED:"EXPORT_TO_PNG_CLICKED",CLEAR_ONGOING_SPACE_POLYGON:"CLEAR_ONGOING_SPACE_POLYGON",ADD_ONGOING_SPACE_POLYGON:"ADD_ONGOING_SPACE_POLYGON",MOVE_VIEWPORT:"MOVE_VIEWPORT",SET_CURRENT_MOUSE_POSITION:"SET_CURRENT_MOUSE_POSITION",SCROLL_EVENT:"SCROLL_EVENT",MOUSE_DOWN:"MOUSE_DOWN",MOUSE_UP:"MOUSE_UP",SET_SCROLL_MOVES_VIEWPORT:"SET_SCROLL_MOVES_VIEWPORT",SELECT_TOOL:"SELECT_TOOL",SELECT_OBJECT:"SELECT_OBJECT",SELECT_OBJECTS:"SELECT_OBJECTS",SELECT_AT_POINT:"SELECT_AT_POINT",SELECT_IN_BOUNDING_BOX:"SELECT_IN_BOUNDING_BOX",KEY_PRESSED:"KEY_PRESSED",KEY_RELEASED:"KEY_RELEASED"},j=function(e,t){return{type:b.SELECT_OBJECTS,objectIds:e,shouldMultiSelect:t}},h=function(e,t){return{type:b.SET_CURRENT_MOUSE_POSITION,x:e,y:t}},y=n(11),x=n(10),f=n(0),T=70,_=n(47),p=function(e){return{id:Object(_.a)(),type:e}},g=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"translate",value:function(e,t,n){}},{key:"createRenderObject",value:function(){return new E.c}},{key:"renderObject",value:function(e,t,n){}},{key:"dungeonObjectType",get:function(){return null}}]),e}(),S="door",v=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"translate",value:function(e,t,n){e.start.x+=t,e.start.y+=n,e.end.x+=t,e.end.y+=n}},{key:"renderObject",value:function(e,t,n){e.zIndex=3,e.clear(),e.beginFill(11094,1),e.lineStyle(20,11094,1,.5),e.moveTo(t.start.x*T,t.start.y*T),e.lineTo(t.end.x*T,t.end.y*T),e.lineStyle();var o=10;e.endFill(),e.tint=n?16777011:16777215,e.hitArea=new E.f([t.start.x*T-o,t.start.y*T-o,t.start.x*T+o,t.start.y*T+o,t.end.x*T+o,t.end.y*T+o,t.end.x*T-o,t.end.y*T-o])}},{key:"dungeonObjectType",get:function(){return S}}]),n}(g),C="label",m=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"translate",value:function(e,t,n){e.position.x+=t,e.position.y+=n}},{key:"renderObject",value:function(e,t,n){if(e.zIndex=4,e.clear(),0===e.children.length){var o=new E.i(t.label);o.style.fontFamily="Serif",o.style.fontSize=36,e.addChild(o)}var i=e.children[0];i.style.fill=n?16777011:0,i.text=t.label,i.position.set(t.position.x*T,t.position.y*T)}},{key:"dungeonObjectType",get:function(){return C}}]),n}(g),N="wall",L=function(e,t,n,o){return Object(f.a)(Object(f.a)({},p(N)),{},{start:{x:e,y:t},end:{x:n,y:o}})},P=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"translate",value:function(e,t,n){e.start.x+=t,e.start.y+=n,e.end.x+=t,e.end.y+=n}},{key:"renderObject",value:function(e,t,n){e.zIndex=2,e.clear(),e.lineStyle(10,157414,1,.5),e.line.cap=E.d.ROUND,e.moveTo(t.start.x*T,t.start.y*T),e.lineTo(t.end.x*T,t.end.y*T),e.lineStyle();e.endFill(),e.tint=n?16777011:16777215,e.hitArea=this.createWallHitArea(t,5)}},{key:"createWallHitArea",value:function(e,t){if(e.start.x===e.end.x&&e.start.y===e.end.y)return new E.b(e.start.x*T,e.start.y*T,t);var n=e.start.x<=e.end.x?e.start:e.end,o=e.start.x>e.end.x?e.start:e.end,i=o.y-n.y,r=o.x-n.x,c=i/r,a=-1/c;if(0===c||0===a)return new E.g(n.x*T-t,Math.min(n.y,o.y)*T-t,r*T+2*t,Math.abs(i)*T+2*t);var s=this.getOffsetAlongSlope(c,t),l=s.xOffset,u=s.yOffset,d=this.getOffsetAlongSlope(a,t),O=d.xOffset,b=d.yOffset;return new E.f([n.x*T-l-O,n.y*T-u-b,n.x*T-l+O,n.y*T-u+b,o.x*T+l+O,o.y*T+u+b,o.x*T+l-O,o.y*T+u-b])}},{key:"getOffsetAlongSlope",value:function(e,t){var n=Math.atan(e);return{xOffset:Math.cos(n)*t,yOffset:Math.sin(n)*t}}},{key:"dungeonObjectType",get:function(){return N}}]),n}(g),w="space",D=function(e){var t=e.points,n=e.startX,o=e.startY,i=e.endX,r=e.endY;return t?Object(f.a)(Object(f.a)({},p(w)),{},{points:t}):Object(f.a)(Object(f.a)({},p(w)),{},{position:{x:n,y:o},size:{width:i-n,height:r-o}})},I=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"translate",value:function(e,t,n){e.position?(e.position.x+=t,e.position.y+=n):e.points.forEach((function(e){e.x+=t,e.y+=n}))}},{key:"renderObject",value:function(e,t,n){if(e.clear(),e.beginFill(14079445),t.position&&t.size)e.drawRect(t.position.x*T,t.position.y*T,t.size.width*T,t.size.height*T),e.endFill();else{var o=t.points[0];e.moveTo(o.x*T,o.y*T);for(var i=0;i<t.points.length;i++){var r=t.points[i];e.lineTo(r.x*T,r.y*T)}e.endFill()}e.tint=n?16777164:16777215}},{key:"dungeonObjectType",get:function(){return w}}]),n}(g),M="token",k=function(e,t,n,o,i,r){return Object(f.a)(Object(f.a)({},p(M)),{},{textureUrl:e,position:{x:t,y:n},size:{width:o,height:i},angle:r})},A=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"translate",value:function(e,t,n){e.position.x+=t,e.position.y+=n}},{key:"createRenderObject",value:function(){return new E.h}},{key:"renderObject",value:function(e,t,n){var o;(e.zIndex=4,e.texture=E.j.from("/pungeon-react"+t.textureUrl),e.x=t.position.x*T,e.y=t.position.y*T,e.width=t.size.width*T,e.height=t.size.height*T,e.angle=t.angle,n)?(0===e.children.length?(o=new E.c,e.addChild(o)):o=e.getChildAt(0),o.clear(),o.lineStyle(5,16776448),o.drawShape(e.getLocalBounds())):e.children.length>0&&e.removeChildAt(0)}},{key:"dungeonObjectType",get:function(){return M}}]),n}(g),B=[new v,new m,new P,new I,new A],R=function(e,t,n){return B.filter((function(t){return t.dungeonObjectType===e.type})).map((function(o){return o.translate(e,t,n)}))},U=function(e,t,n){return G(e,[t],n)},G=function(e,t,n){return e.map((function(e){if(t.includes(e.id)){var o=Object(f.a)({},e);return n(o),o}return e}))},J={NEW_DUNGEON:"NEW_DUNGEON",SET_DUNGEON_SIZE:"SET_DUNGEON_SIZE",MOVE_SELECTED_OBJECT:"MOVE_SELECTED_OBJECT",SET_SELECTED_OBJECT_TEXTURE_PATH:"SET_SELECTED_OBJECT_TEXTURE_PATH",SET_SELECTED_OBJECT_ANGLE:"SET_SELECTED_OBJECT_ANGLE",SET_SELECTED_OBJECT_LABEL:"SET_SELECTED_OBJECT_LABEL",SET_SELECTED_OBJECT_POSITION:"SET_SELECTED_OBJECT_POSITION",SET_SELECTED_OBJECT_SIZE:"SET_SELECTED_OBJECT_SIZE",SET_SELECTED_OBJECT_START:"SET_SELECTED_OBJECT_START",SET_SELECTED_OBJECT_END:"SET_SELECTED_OBJECT_END",ADD_OBJECT:"ADD_OBJECT",DELETE_OBJECTS:"DELETE_OBJECTS"},W={size:{width:28,height:32},objects:[k("/assets/stairs.png",2,4,1,2,0),D({startX:1,startY:1,endX:6,endY:6}),D({startX:6,startY:4,endX:13,endY:13}),D({startX:15,startY:15,endX:21,endY:22}),D({startX:21,startY:19,endX:25,endY:28}),L(1,1,1,6),L(6,6,1,6),L(6,13,6,6),L(13,13,6,13),L(13,4,13,13),L(6,4,13,4),L(6,1,6,4),L(1,1,6,1),L(15,15,15,22),L(21,22,15,22),L(21,15,15,15),L(21,19,21,15),L(25,19,21,19),L(21,22,21,28),L(21,28,25,28),L(25,19,25,28)]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J.NEW_DUNGEON:return{size:{width:24,height:32},objects:[]};case J.SET_DUNGEON_SIZE:return Object(f.a)(Object(f.a)({},e),{},{size:{width:t.width,height:t.height}});case J.MOVE_SELECTED_OBJECT:var n=G(e.objects,t.selectedObjectIds,(function(e){return R(e,t.deltaX,t.deltaY)}));return Object(f.a)(Object(f.a)({},e),{},{objects:n});case J.SET_SELECTED_OBJECT_TEXTURE_PATH:var o=U(e.objects,t.selectedObject,(function(e){return e.textureUrl=t.texturePath}));return Object(f.a)(Object(f.a)({},e),{},{objects:o});case J.SET_SELECTED_OBJECT_ANGLE:var i=U(e.objects,t.selectedObject,(function(e){return e.angle=t.angle}));return Object(f.a)(Object(f.a)({},e),{},{objects:i});case J.SET_SELECTED_OBJECT_LABEL:var r=U(e.objects,t.selectedObject,(function(e){return e.label=t.label}));return Object(f.a)(Object(f.a)({},e),{},{objects:r});case J.SET_SELECTED_OBJECT_POSITION:var c=U(e.objects,t.selectedObject,(function(e){return e.position={x:t.x,y:t.y}}));return Object(f.a)(Object(f.a)({},e),{},{objects:c});case J.SET_SELECTED_OBJECT_SIZE:var a=U(e.objects,t.selectedObject,(function(e){return e.size={width:t.width,height:t.height}}));return Object(f.a)(Object(f.a)({},e),{},{objects:a});case J.SET_SELECTED_OBJECT_START:var s=U(e.objects,t.selectedObject,(function(e){return e.start={x:t.x,y:t.y}}));return Object(f.a)(Object(f.a)({},e),{},{objects:s});case J.SET_SELECTED_OBJECT_END:var l=U(e.objects,t.selectedObject,(function(e){return e.end={x:t.x,y:t.y}}));return Object(f.a)(Object(f.a)({},e),{},{objects:l});case J.ADD_OBJECT:var u=e.objects.slice();return u=[].concat(Object(x.a)(u),[t.newObject]),Object(f.a)(Object(f.a)({},e),{},{objects:u});case J.DELETE_OBJECTS:var d=t.objectIds;if(d){var O=e.objects.filter((function(e){return!d.includes(e.id)}));return Object(f.a)(Object(f.a)({},e),{},{objects:O})}return e;default:return e}},Y={SELECT:"select",NEW_WALL:"new_wall",NEW_SPACE_RECTANGLE:"new_space_rectangle",NEW_SPACE_POLYGON:"new_space_polygon",NEW_DOOR:"new_door",NEW_LABEL:"new_label",NEW_TOKEN:"new_token"},V={scrollMovesViewport:!1,selectedTool:Y.NEW_SPACE_RECTANGLE,scale:100,position:{x:0,y:0},mouse:{mouseDown:!1,startPosition:{x:0,y:0},currentPosition:{x:0,y:0}},keyboard:{heldKeys:{}},selectedObjectIds:[],selectingAtPoint:null,selectingInBoundingBox:null},z=Object(y.b)({editor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.KEY_PRESSED:var n=Object(f.a)({},e.keyboard.heldKeys);return n[t.key]=!0,Object(f.a)(Object(f.a)({},e),{},{keyboard:Object(f.a)(Object(f.a)({},e.keyboard),{},{heldKeys:n})});case b.KEY_RELEASED:var o=Object(f.a)({},e.keyboard.heldKeys);return delete o[t.key],Object(f.a)(Object(f.a)({},e),{},{keyboard:Object(f.a)(Object(f.a)({},e.keyboard),{},{heldKeys:o})});case b.PNG_EXPORTED:return Object(f.a)(Object(f.a)({},e),{},{exportToPngClicked:null});case b.EXPORT_TO_PNG_CLICKED:return Object(f.a)(Object(f.a)({},e),{},{exportToPngClicked:!0});case b.CLEAR_ONGOING_SPACE_POLYGON:return Object(f.a)(Object(f.a)({},e),{},{ongoingSpacePolygon:null});case b.ADD_ONGOING_SPACE_POLYGON:var i,r=[].concat(Object(x.a)(null!==(i=e.ongoingSpacePolygon)&&void 0!==i?i:[]),[t.position]);return Object(f.a)(Object(f.a)({},e),{},{ongoingSpacePolygon:r});case b.MOVE_VIEWPORT:return Object(f.a)(Object(f.a)({},e),{},{position:{x:e.position.x+t.deltaX,y:e.position.y+t.deltaY}});case b.SET_CURRENT_MOUSE_POSITION:return Object(f.a)(Object(f.a)({},e),{},{mouse:Object(f.a)(Object(f.a)({},e.mouse),{},{currentPosition:{x:t.x,y:t.y}})});case b.SCROLL_EVENT:if(!e.scrollMovesViewport||t.holdingCtrl){var c=10;t.scrollY>0&&(c*=-1);var a=10,s=200,l=Math.min(Math.max(e.scale+c,a),s);return e.scale!==l?Object(f.a)(Object(f.a)({},e),{},{scale:l,position:{x:e.position.x-e.mouse.currentPosition.x*(c/100),y:e.position.y-e.mouse.currentPosition.y*(c/100)}}):e}var u=.5;return Object(f.a)(Object(f.a)({},e),{},{position:{x:e.position.x-t.scrollX*u,y:e.position.y-t.scrollY*u}});case b.MOUSE_DOWN:return Object(f.a)(Object(f.a)({},e),{},{mouse:Object(f.a)(Object(f.a)({},e.mouse),{},{mouseDown:!0,startPosition:{x:e.mouse.currentPosition.x,y:e.mouse.currentPosition.y}})});case b.MOUSE_UP:return Object(f.a)(Object(f.a)({},e),{},{mouse:Object(f.a)(Object(f.a)({},e.mouse),{},{mouseDown:!1})});case b.SET_SCROLL_MOVES_VIEWPORT:return Object(f.a)(Object(f.a)({},e),{},{scrollMovesViewport:t.scrollMovesViewport});case b.SELECT_TOOL:var d=e.selectedObjectIds;return t.selectedTool!==Y.SELECT&&(d=[]),Object(f.a)(Object(f.a)({},e),{},{selectedTool:t.selectedTool,selectedObjectIds:d});case b.SELECT_AT_POINT:return Object(f.a)(Object(f.a)({},e),{},{selectingAtPoint:{x:t.x,y:t.y,shouldMultiSelect:t.shouldMultiSelect}});case b.SELECT_IN_BOUNDING_BOX:return Object(f.a)(Object(f.a)({},e),{},{selectingInBoundingBox:{x:t.x,y:t.y,width:t.width,height:t.height,shouldMultiSelect:t.shouldMultiSelect}});case b.SELECT_OBJECT:var O;return O=t.shouldMultiSelect&&e.selectedObjectIds.includes(t.objectId)?e.selectedObjectIds.filter((function(e){return e!==t.objectId})):t.shouldMultiSelect?[].concat(Object(x.a)(e.selectedObjectIds),[t.objectId]):[t.objectId],Object(f.a)(Object(f.a)({},e),{},{selectedObjectIds:O,selectingAtPoint:null,selectingInBoundingBox:null});case b.SELECT_OBJECTS:var E;return E=t.shouldMultiSelect?Object(x.a)(new Set([].concat(Object(x.a)(e.selectedObjectIds),Object(x.a)(t.objectIds)))):t.objectIds,Object(f.a)(Object(f.a)({},e),{},{selectedObjectIds:E,selectingAtPoint:null,selectingInBoundingBox:null});case J.DELETE_OBJECTS:return Object(f.a)(Object(f.a)({},e),{},{selectedObjectIds:[]});case J.ADD_OBJECT:return Object(f.a)(Object(f.a)({},e),{},{selectedObjectIds:[t.newObject.id]});default:return Object(f.a)({},e)}},dungeon:X}),F=Object(y.c)(z,{},"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),K=n(8),Z=function(e){return{type:J.ADD_OBJECT,newObject:e}},H=function(e){return{type:J.DELETE_OBJECTS,objectIds:e}},q=function(e,t,n){return{type:J.MOVE_SELECTED_OBJECT,selectedObjectIds:e,deltaX:t,deltaY:n}},$=function(e,t){return{type:J.SET_SELECTED_OBJECT_ANGLE,selectedObject:e,angle:t}},Q=function(e){return e*e},ee=function(e,t){return Math.sqrt(Q(e.x-t.x)+Q(e.y-t.y))},te=function(e,t,n){var o=n.x-t.x,i=n.y-t.y,r=o*o+i*i,c=(e.x-t.x)*o+(e.y-t.y)*i,a=Math.min(1,Math.max(0,c/r));return{x:t.x+o*a,y:t.y+i*a}},ne=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"onMouseUp",value:function(e){var t=e.getState(),n=t.editor.mouse.currentPosition,o=25,i=null,r=null;t.dungeon.objects.filter((function(e){return e.type===N})).forEach((function(e){var n={x:e.start.x*T,y:e.start.y*T},c={x:e.end.x*T,y:e.end.y*T},a=te({x:t.editor.mouse.startPosition.x,y:t.editor.mouse.startPosition.y},n,c),s=ee(a,{x:t.editor.mouse.startPosition.x,y:t.editor.mouse.startPosition.y});(!o||s<o)&&(o=s,i=a,r=e.id)}));var c=t.dungeon.objects.find((function(e){return e.id===r}));if(c){var a,s,l,u,d={x:c.start.x*T,y:c.start.y*T},O={x:c.end.x*T,y:c.end.y*T},E=te(n,d,O);e.dispatch(Z((a=i.x/T,s=i.y/T,l=E.x/T,u=E.y/T,Object(f.a)(Object(f.a)({},p(S)),{},{start:{x:a,y:s},end:{x:l,y:u}}))))}}},{key:"renderTool",value:function(e,t){var n=e.editor.mouse.currentPosition;if(e.editor.mouse.mouseDown){var o=25,i=null,r=null;if(e.dungeon.objects.filter((function(e){return e.type===N})).forEach((function(t){var n={x:t.start.x*T,y:t.start.y*T},c={x:t.end.x*T,y:t.end.y*T},a=te({x:e.editor.mouse.startPosition.x,y:e.editor.mouse.startPosition.y},n,c),s=ee(a,{x:e.editor.mouse.startPosition.x,y:e.editor.mouse.startPosition.y});(!o||s<o)&&(o=s,i=a,r=t.id)})),!i)return;var c=i.x,a=i.y,s=e.dungeon.objects.find((function(e){return e.id===r})),l={x:s.start.x*T,y:s.start.y*T},u={x:s.end.x*T,y:s.end.y*T},d=te(n,l,u),O=d.x,b=d.y;t.lineStyle(5,16776448),t.line.cap=E.d.ROUND,t.moveTo(c,a),t.lineTo(O,b),t.lineStyle()}else{var j=25,h=null;e.dungeon.objects.filter((function(e){return e.type===N})).forEach((function(e){var t={x:e.start.x*T,y:e.start.y*T},o={x:e.end.x*T,y:e.end.y*T},i=te(n,t,o),r=ee(i,n);(!j||r<j)&&(j=r,h=i)})),h&&(t.lineStyle(),t.beginFill(16776448),t.drawCircle(h.x,h.y,2.5),t.endFill())}}}]),e}(),oe=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"onMouseUp",value:function(e){var t,n,o,i=e.getState().editor.mouse.currentPosition,r=i.x/T,c=i.y/T;e.dispatch(Z((t=r,n=c,o="Text Label",Object(f.a)(Object(f.a)({},p(C)),{},{label:o,position:{x:t,y:n}}))))}},{key:"renderTool",value:function(e,t){}}]),e}(),ie=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"onMouseUp",value:function(e){var t=e.getState(),n=t.editor.mouse.currentPosition,o=Math.floor(Math.min(t.editor.mouse.startPosition.x,n.x)/T),i=Math.floor(Math.min(t.editor.mouse.startPosition.y,n.y)/T),r=Math.ceil(Math.max(t.editor.mouse.startPosition.x,n.x)/T),c=Math.ceil(Math.max(t.editor.mouse.startPosition.y,n.y)/T);e.dispatch(Z(D({startX:o,startY:i,endX:r,endY:c})))}},{key:"renderTool",value:function(e,t){var n,o,i,r,c=e.editor.mouse.currentPosition;if(e.editor.mouse.mouseDown){var a=Math.min(e.editor.mouse.startPosition.x,c.x),s=Math.min(e.editor.mouse.startPosition.y,c.y),l=Math.max(e.editor.mouse.startPosition.x,c.x),u=Math.max(e.editor.mouse.startPosition.y,c.y);n=Math.floor(a/T)*T,o=Math.floor(s/T)*T,i=(l=Math.floor(l/T)*T+T)-n,r=(u=Math.floor(u/T)*T+T)-o}else n=Math.floor(c.x/T)*T,o=Math.floor(c.y/T)*T,i=T,r=T;t.beginFill(0,0),t.lineStyle(1,16776448),t.drawRect(n,o,i,r),t.endFill()}}]),e}(),re=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"onMouseUp",value:function(e){var t=e.getState(),n=t.editor.mouse.currentPosition,o=Math.round(t.editor.mouse.startPosition.x/T),i=Math.round(t.editor.mouse.startPosition.y/T),r=Math.round(n.x/T),c=Math.round(n.y/T);e.dispatch(Z(L(o,i,r,c)))}},{key:"renderTool",value:function(e,t){var n=e.editor.mouse.currentPosition;if(e.editor.mouse.mouseDown){var o=Math.round(e.editor.mouse.startPosition.x/T)*T,i=Math.round(e.editor.mouse.startPosition.y/T)*T,r=Math.round(n.x/T)*T,c=Math.round(n.y/T)*T;t.lineStyle(5,16776448),t.line.cap=E.d.ROUND,t.moveTo(o,i),t.lineTo(r,c),t.lineStyle(),t.endFill()}else{var a=Math.round(n.x/T)*T,s=Math.round(n.y/T)*T;t.lineStyle(),t.beginFill(16776448),t.drawCircle(a,s,2.5),t.endFill()}}}]),e}(),ce=function(e,t){return Math.abs(t.x-e.x)>5||Math.abs(t.y-e.y)>5},ae=function(e,t){return{x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),width:Math.abs(t.x-e.x),height:Math.abs(t.y-e.y)}},se=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"onMouseUp",value:function(e){var t,n,o,i,r=e.getState(),c=r.editor.mouse.startPosition,a=r.editor.mouse.currentPosition,s=r.editor.keyboard.heldKeys.Shift;if(ce(c,a)){var l=ae(c,a);e.dispatch((t=l.x,n=l.y,o=l.width,i=l.height,{type:b.SELECT_IN_BOUNDING_BOX,x:t,y:n,width:o,height:i,shouldMultiSelect:s}))}else e.dispatch(function(e,t,n){return{type:b.SELECT_AT_POINT,x:e,y:t,shouldMultiSelect:n}}(a.x,a.y,s))}},{key:"renderTool",value:function(e,t){var n=e.editor.mouse.startPosition,o=e.editor.mouse.currentPosition;if(e.editor.mouse.mouseDown&&ce(n,o)){var i=ae(n,o);t.lineStyle(1,16776448).drawRect(i.x,i.y,i.width,i.height).lineStyle()}}}]),e}(),le=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"onMouseUp",value:function(e){var t,n=e.getState(),o=n.editor.mouse.currentPosition,i=Math.round(o.x/T),r=Math.round(o.y/T),c=null===(t=n.editor.ongoingSpacePolygon)||void 0===t?void 0:t[0];if(c&&c.x===i&&c.y===r){var a=n.editor.ongoingSpacePolygon;e.dispatch({type:b.CLEAR_ONGOING_SPACE_POLYGON}),e.dispatch(Z(D({points:a})))}else e.dispatch(function(e,t){return{type:b.ADD_ONGOING_SPACE_POLYGON,position:{x:e,y:t}}}(i,r))}},{key:"renderTool",value:function(e,t){var n=e.editor.mouse.currentPosition,o=Math.round(n.x/T)*T,i=Math.round(n.y/T)*T;if(e.editor.ongoingSpacePolygon){t.lineStyle(2,16776448);var r=e.editor.ongoingSpacePolygon[0];t.moveTo(r.x*T,r.y*T);for(var c=1;c<e.editor.ongoingSpacePolygon.length;c++){var a=e.editor.ongoingSpacePolygon[c];t.lineTo(a.x*T,a.y*T)}t.lineTo(o,i),t.lineStyle()}else t.lineStyle(),t.beginFill(16776448),t.drawCircle(o,i,2.5),t.endFill()}}]),e}(),ue=function(){function e(){Object(l.a)(this,e),this.tokenTextureUrl="/assets/stairs.png",this.height=2,this.width=1}return Object(u.a)(e,[{key:"onMouseUp",value:function(e){var t,n,o=e.getState().editor.mouse.currentPosition;t=Math.floor(o.x/T),n=Math.floor(o.y/T),e.dispatch(Z(k(this.tokenTextureUrl,t,n,this.width,this.height,0)))}},{key:"renderTool",value:function(e,t){var n,o,i=e.editor.mouse.currentPosition;n=Math.floor(i.x/T)*T,o=Math.floor(i.y/T)*T,t.beginFill(0,0),t.lineStyle(1,16776448),t.drawRect(n,o,this.width*T,this.height*T),t.endFill()}}]),e}(),de=(o={},Object(K.a)(o,Y.NEW_DOOR,new ne),Object(K.a)(o,Y.NEW_SPACE_RECTANGLE,new ie),Object(K.a)(o,Y.NEW_SPACE_POLYGON,new le),Object(K.a)(o,Y.NEW_WALL,new re),Object(K.a)(o,Y.SELECT,new se),Object(K.a)(o,Y.NEW_LABEL,new oe),Object(K.a)(o,Y.NEW_TOKEN,new ue),o),Oe=function(e,t){var n=document.createElement("a");n.href=e,n.download=t,n.target="_blank",n.click()},Ee=function(e,t){var n=F.getState();if(function(e,t){e.stage.position.set(t.editor.position.x,t.editor.position.y)}(e,n),function(e,t){var n=e.editor.scale/100;t.stage.scale.x!==n&&t.stage.scale.set(n)}(n,e),function(e,t){if(e.editor.selectingAtPoint){var n=new E.e(e.editor.selectingAtPoint.x,e.editor.selectingAtPoint.y),o=t.stage.worldTransform.apply(n),i=t.renderer.plugins.interaction.hitTest(o);i?F.dispatch((c=i.id,a=e.editor.selectingAtPoint.shouldMultiSelect,{type:b.SELECT_OBJECT,objectId:c,shouldMultiSelect:a})):F.dispatch(j([],!1))}else if(e.editor.selectingInBoundingBox){var r=[];t.stage.children.forEach((function(t){(function(e,t){var n=Math.max(e.x,t.x),o=Math.min(e.x+e.width,t.x+t.width),i=Math.max(e.y,t.y),r=Math.min(e.y+e.height,t.y+t.height);return o>=n&&r>=i})(t.getLocalBounds(),e.editor.selectingInBoundingBox)&&t.id&&r.push(t.id)})),r.length>0?F.dispatch(j(r,e.editor.selectingInBoundingBox.shouldMultiSelect)):F.dispatch(j([],!1))}var c,a}(n,e),t.clear(),be(e.stage,n),je(t,n.dungeon.size.width,n.dungeon.size.height),function(e,t){e.editor.exportToPngClicked&&function(e){var t=e.renderer.generateTexture(e.stage,null,1/e.stage.scale.x,new E.g(e.stage.position.x-1,e.stage.position.y-1,e.stage.width,e.stage.height));Oe(e.renderer.extract.base64(t),"dungeon.png"),F.dispatch({type:b.PNG_EXPORTED})}(t)}(n,e),e.renderer.plugins.interaction.mouseOverRenderer){!function(e,t){de[e.editor.selectedTool].renderTool(e,t)}(n,t);var o=e.renderer.plugins.interaction.mouse.getLocalPosition(e.stage);F.dispatch(h(o.x,o.y))}else F.dispatch(h(null,null))},be=function(e,t){var n=t.dungeon.objects.reduce((function(e,t){return e[t.id]=t,e}),{}),o=new Set(e.children.map((function(e){return e.id})));Object.keys(n).forEach((function(t){if(!o.has(t)){var i=(r=n[t],B.filter((function(e){return e.dungeonObjectType===r.type})).map((function(e){return e.createRenderObject()}))[0]);i.id=t,i.interactive=!0,e.addChild(i)}var r})),e.children.forEach((function(o){if(o.id){var i=n[o.id];i?function(e,t,n){B.filter((function(e){return e.dungeonObjectType===t.type})).map((function(o){return o.renderObject(e,t,n)}))}(o,i,t.editor.selectedObjectIds.includes(o.id)):e.removeChild(o)}}))},je=function(e,t,n){e.lineStyle(1,4473924,1,.5);for(var o=0;o<=t;o++)e.moveTo(o*T,0),e.lineTo(o*T,n*T);for(var i=0;i<=n;i++)e.moveTo(0,i*T),e.lineTo(t*T,i*T)};var he=function(e,t){var n;e.repeat||t.dispatch((n=e.key,{type:b.KEY_PRESSED,key:n}));var o=t.getState();switch(e.key){case"Delete":return t.dispatch(H(o.editor.selectedObjectIds));case"ArrowLeft":return t.dispatch(q(o.editor.selectedObjectIds,-1,0));case"ArrowRight":return t.dispatch(q(o.editor.selectedObjectIds,1,0));case"ArrowDown":return t.dispatch(q(o.editor.selectedObjectIds,0,1));case"ArrowUp":return t.dispatch(q(o.editor.selectedObjectIds,0,-1));default:return}},ye=function(e,t){var n;t.dispatch((n=e.key,{type:b.KEY_RELEASED,key:n}))},xe=function(e,t){1===e.buttons&&t.dispatch({type:b.MOUSE_DOWN})},fe=function(e,t){t.getState().editor.mouse.mouseDown&&(t.dispatch({type:b.MOUSE_UP}),function(e){var t=e.getState();de[t.editor.selectedTool].onMouseUp(e)}(t))},Te=function(e,t){var n,o;2===e.buttons&&t.dispatch((n=e.movementX,o=e.movementY,{type:b.MOVE_VIEWPORT,deltaX:n,deltaY:o}))},_e=function(e,t){var n,o,i;t.dispatch((n=e.deltaX,o=e.deltaY,i=e.getModifierState("Control"),{type:b.SCROLL_EVENT,scrollX:n,scrollY:o,holdingCtrl:i}))},pe=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{style:{height:"85vh"},tabIndex:-1,ref:function(t){return e.canvasDiv=t}})}},{key:"componentDidMount",value:function(){var e=new E.a({backgroundColor:6250335,sharedLoader:!0,sharedTicker:!0,antialias:!0});this.app=e,this.canvasDiv.appendChild(e.view),this.app.resizeTo=this.canvasDiv,this.app.resize();var t=new E.c;t.zIndex=Number.MAX_SAFE_INTEGER,e.stage.sortableChildren=!0,e.stage.addChild(t),this.setupInteractions(),e.ticker.add((function(){Ee(e,t)}))}},{key:"setupInteractions",value:function(){this.canvasDiv.addEventListener("wheel",(function(e){_e(e,F),e.preventDefault()})),this.canvasDiv.addEventListener("contextmenu",(function(e){e.preventDefault()})),this.canvasDiv.addEventListener("pointerdown",(function(e){xe(e,F)})),this.canvasDiv.addEventListener("pointerup",(function(e){fe(0,F)})),this.canvasDiv.addEventListener("pointermove",(function(e){Te(e,F)})),this.canvasDiv.addEventListener("keydown",(function(e){he(e,F)})),this.canvasDiv.addEventListener("keyup",(function(e){ye(e,F)}))}}]),n}(c.a.Component),ge=n(12),Se=function(e){var t=e.title,n=e.children;return Object(i.jsxs)("div",{className:"card bg-dark text-light border-secondary mb-3",children:[Object(i.jsx)("div",{className:"card-header border-secondary",children:Object(i.jsx)("h5",{children:t})}),Object(i.jsx)("div",{className:"card-body",children:Object(i.jsx)("div",{className:"form-group",children:n})})]})},ve=function(e){var t=e.title,n=e.x,o=e.y,r=e.onUpdate;return Object(i.jsxs)(Se,{title:null!==t&&void 0!==t?t:"Position",children:[Object(i.jsxs)("label",{children:["X:",Object(i.jsx)("input",{className:"form-control bg-secondary text-light",type:"number",value:n,onChange:function(e){return r(parseInt(e.target.value),o)}})]}),Object(i.jsxs)("label",{children:["Y:",Object(i.jsx)("input",{className:"form-control bg-secondary text-light",type:"number",value:o,onChange:function(e){return r(n,parseInt(e.target.value))}})]})]})},Ce=function(e){var t=e.title,n=e.width,o=e.height,r=e.onUpdate;return Object(i.jsxs)(Se,{title:null!==t&&void 0!==t?t:"Size",children:[Object(i.jsxs)("label",{children:["Width:",Object(i.jsx)("input",{className:"form-control bg-secondary text-light",type:"number",value:n,onChange:function(e){return r(parseInt(e.target.value),o)}})]}),Object(i.jsxs)("label",{children:["Height:",Object(i.jsx)("input",{className:"form-control bg-secondary text-light",type:"number",value:o,onChange:function(e){return r(n,parseInt(e.target.value))}})]})]})},me=function(e){var t=e.dispatch,n=e.selectedObjectId,o=e.selectedObject,r=e.dungeonSize,a=e.scrollPansViewport;return n?Object(i.jsxs)(c.a.Fragment,{children:[void 0!==o.label&&Object(i.jsx)(Se,{title:"Label",children:Object(i.jsxs)("label",{children:["Label:",Object(i.jsx)("input",{className:"form-control bg-secondary text-light",type:"text",value:o.label,onChange:function(e){return t(function(e,t){return{type:J.SET_SELECTED_OBJECT_LABEL,selectedObject:e,label:t}}(n,e.target.value))}})]})}),void 0!==o.textureUrl&&Object(i.jsx)(Se,{title:"Texture Path",children:Object(i.jsxs)("label",{children:["Path:",Object(i.jsx)("input",{className:"form-control bg-secondary text-light",value:o.textureUrl,onChange:function(e){t(function(e,t){return{type:J.SET_SELECTED_OBJECT_TEXTURE_PATH,selectedObject:e,texturePath:t}}(n,e.target.value))}})]})}),o.position&&Object(i.jsx)(ve,{x:o.position.x,y:o.position.y,onUpdate:function(e,o){return t(function(e,t,n){return{type:J.SET_SELECTED_OBJECT_POSITION,selectedObject:e,x:t,y:n}}(n,e,o))}}),o.size&&Object(i.jsx)(Ce,{width:o.size.width,height:o.size.height,onUpdate:function(e,o){return t(function(e,t,n){return{type:J.SET_SELECTED_OBJECT_SIZE,selectedObject:e,width:t,height:n}}(n,e,o))}}),o.start&&Object(i.jsx)(ve,{title:"Start",x:o.start.x,y:o.start.y,onUpdate:function(e,o){return t(function(e,t,n){return{type:J.SET_SELECTED_OBJECT_START,selectedObject:e,x:t,y:n}}(n,e,o))}}),o.end&&Object(i.jsx)(ve,{title:"End",x:o.end.x,y:o.end.y,onUpdate:function(e,o){return t(function(e,t,n){return{type:J.SET_SELECTED_OBJECT_END,selectedObject:e,x:t,y:n}}(n,e,o))}}),void 0!==o.angle&&Object(i.jsx)(Se,{title:"Angle",children:Object(i.jsxs)("label",{children:["Angle:",Object(i.jsx)("input",{className:"form-control bg-secondary text-light",type:"number",step:"45",min:"-360",max:"360",value:o.angle,onChange:function(e){t($(n,e.target.value))}}),Object(i.jsx)("input",{className:"form-control bg-secondary text-light",type:"range",step:"45",min:"-360",max:"360",style:{direction:"rtl"},value:o.angle,onChange:function(e){t($(n,e.target.value))}})]})}),n&&Object(i.jsx)(Se,{title:"Actions",children:Object(i.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){return t(H([n]))},children:"Delete Object"})})]}):Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsxs)(Se,{title:"Instructions",children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{children:"Right click"})," to pan the view."]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{children:"Scroll"})," to zoom in and out."]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{children:"Left click and drag"})," to create new spaces with the New Space tool."]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{children:"Left click"})," to select spaces with the Select tool."]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{children:"Arrow keys"})," will move the currently selected space."]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{children:"Delete"})," will delete the currently selected space."]})]}),Object(i.jsxs)(Se,{title:"Actions",children:[Object(i.jsx)("button",{className:"btn btn-primary form-control mb-2",onClick:function(){return t({type:b.EXPORT_TO_PNG_CLICKED})},children:"Download Dungeon as PNG"}),Object(i.jsx)("button",{className:"btn btn-outline-danger form-control mb-2",onClick:function(){return t({type:J.NEW_DUNGEON})},children:"New Dungeon"})]}),Object(i.jsx)(Ce,{title:"Dungeon Size",width:r.width,height:r.height,onUpdate:function(e,n){return t(function(e,t){return{type:J.SET_DUNGEON_SIZE,width:e,height:t}}(e,n))}}),Object(i.jsx)(Se,{title:"Editor Options",children:Object(i.jsx)("div",{class:"form-check",children:Object(i.jsxs)("label",{class:"form-check-label",children:[Object(i.jsx)("input",{class:"form-check-input",type:"checkbox",value:a,onChange:function(e){return t((n=e.target.checked,{type:b.SET_SCROLL_MOVES_VIEWPORT,scrollMovesViewport:n}));var n}}),"Scroll to pan"]})})})]})},Ne=me=Object(ge.b)((function(e){var t=1===e.editor.selectedObjectIds.length?e.editor.selectedObjectIds[0]:null,n=t?e.dungeon.objects.find((function(e){return e.id===t})):null;return{selectedObjectId:t,selectedObject:n,dungeonSize:e.dungeon.size,scrollMovesViewport:e.editor.scrollMovesViewport}}))(me),Le=function(e){var t=e.toolName,n=e.toolId,o=e.selectedTool,r=e.onClick;return Object(i.jsx)("button",{className:"btn btn-secondary"+(o===n?" active":""),onClick:function(){return r(n)},children:t})},Pe=function(e){var t=e.dispatch,n=e.selectedTool,o=function(e){return t({type:b.SELECT_TOOL,selectedTool:e})};return Object(i.jsxs)("div",{className:"btn-group",role:"group",children:[Object(i.jsx)(Le,{toolName:"Select",toolId:Y.SELECT,selectedTool:n,onClick:o}),Object(i.jsx)(Le,{toolName:"New Rectangular Space",toolId:Y.NEW_SPACE_RECTANGLE,selectedTool:n,onClick:o}),Object(i.jsx)(Le,{toolName:"New Polygonal Space",toolId:Y.NEW_SPACE_POLYGON,selectedTool:n,onClick:o}),Object(i.jsx)(Le,{toolName:"New Wall",toolId:Y.NEW_WALL,selectedTool:n,onClick:o}),Object(i.jsx)(Le,{toolName:"New Door",toolId:Y.NEW_DOOR,selectedTool:n,onClick:o}),Object(i.jsx)(Le,{toolName:"New Label",toolId:Y.NEW_LABEL,selectedTool:n,onClick:o}),Object(i.jsx)(Le,{toolName:"New Token",toolId:Y.NEW_TOKEN,selectedTool:n,onClick:o})]})},we=Pe=Object(ge.b)((function(e){return{selectedTool:e.editor.selectedTool}}))(Pe);var De=function(){return Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)("nav",{className:"navbar navbar-dark bg-secondary",children:Object(i.jsx)("span",{className:"navbar-brand",children:"Pungeon"})}),Object(i.jsxs)("div",{className:"px-5",children:[Object(i.jsx)("div",{className:"py-2",children:Object(i.jsx)(we,{})}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-md-9",children:Object(i.jsx)(pe,{})}),Object(i.jsx)("div",{className:"col-md-3",children:Object(i.jsx)(Ne,{})})]})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(ge.a,{store:F,children:Object(i.jsx)(De,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.c316fc3a.chunk.js.map