(this["webpackJsonppungeon-react"]=this["webpackJsonppungeon-react"]||[]).push([[0],{30:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var o,i,a=n(0),r=n(1),c=n.n(r),s=n(14),l=n.n(s),d=(n(30),n(3)),u=n(4),b=n(8),O=n(7),j=n(5),h=function(e,t){return{type:"SET_MOUSE_DUNGEON_POSITION",x:e,y:t}},y=n(10),x=n(16),f=n(2),p=function(e,t,n){return e.map((function(e){if(e.id===t){var o=Object(f.a)({},e);return n(o),o}return e}))},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DUNGEON_SIZE":return Object(f.a)(Object(f.a)({},e),{},{size:{width:t.width,height:t.height}});case"MOVE_SELECTED_OBJECT":var n=p(e.objects,t.selectedObject,(function(e){return e.position={x:e.position.x+t.deltaX,y:e.position.y+t.deltaY}}));return Object(f.a)(Object(f.a)({},e),{},{objects:n});case"SET_SELECTED_OBJECT_TEXTURE_PATH":var o=p(e.objects,t.selectedObject,(function(e){return e.textureUrl=t.texturePath}));return Object(f.a)(Object(f.a)({},e),{},{objects:o});case"SET_SELECTED_OBJECT_ANGLE":var i=p(e.objects,t.selectedObject,(function(e){return e.angle=t.angle}));return Object(f.a)(Object(f.a)({},e),{},{objects:i});case"SET_SELECTED_OBJECT_LABEL":var a=p(e.objects,t.selectedObject,(function(e){return e.label=t.label}));return Object(f.a)(Object(f.a)({},e),{},{objects:a});case"SET_SELECTED_OBJECT_POSITION":var r=p(e.objects,t.selectedObject,(function(e){return e.position={x:t.x,y:t.y}}));return Object(f.a)(Object(f.a)({},e),{},{objects:r});case"SET_SELECTED_OBJECT_SIZE":var c=p(e.objects,t.selectedObject,(function(e){return e.size={width:t.width,height:t.height}}));return Object(f.a)(Object(f.a)({},e),{},{objects:c});case"SET_SELECTED_OBJECT_START":var s=p(e.objects,t.selectedObject,(function(e){return e.start={x:t.x,y:t.y}}));return Object(f.a)(Object(f.a)({},e),{},{objects:s});case"SET_SELECTED_OBJECT_END":var l=p(e.objects,t.selectedObject,(function(e){return e.end={x:t.x,y:t.y}}));return Object(f.a)(Object(f.a)({},e),{},{objects:l});case"ADD_OBJECT":var d=e.objects.slice();return d=[].concat(Object(x.a)(d),[t.newObject]),Object(f.a)(Object(f.a)({},e),{},{objects:d});case"DELETE_OBJECT":var u=t.selectedObject;if(u){var b=e.objects.filter((function(e){return e.id!==u}));return Object(f.a)(Object(f.a)({},e),{},{objects:b})}return e;default:return e}},g={SELECT:"select",NEW_WALL:"new_wall",NEW_SPACE_RECTANGLE:"new_space_rectangle",NEW_SPACE_POLYGON:"new_space_polygon",NEW_DOOR:"new_door",NEW_LABEL:"new_label",NEW_TOKEN:"new_token"},v=Object(y.b)({editor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_ONGOING_SPACE_POLYGON":return Object(f.a)(Object(f.a)({},e),{},{ongoingSpacePolygon:null});case"ADD_ONGOING_SPACE_POLYGON":var n,o=[].concat(Object(x.a)(null!==(n=e.ongoingSpacePolygon)&&void 0!==n?n:[]),[t.position]);return Object(f.a)(Object(f.a)({},e),{},{ongoingSpacePolygon:o});case"MOVE_VIEWPORT":return Object(f.a)(Object(f.a)({},e),{},{position:{x:e.position.x+t.deltaX,y:e.position.y+t.deltaY}});case"SET_MOUSE_DUNGEON_POSITION":return Object(f.a)(Object(f.a)({},e),{},{mouse:Object(f.a)(Object(f.a)({},e.mouse),{},{dungeonPosition:{x:t.x,y:t.y}})});case"SCROLL_EVENT":if(!e.scrollMovesViewport||t.holdingCtrl){var i=.1;t.scrollY>0&&(i*=-1);var a=Math.min(Math.max(e.scale+i,.1),2);return e.scale!==a?Object(f.a)(Object(f.a)({},e),{},{scale:a,position:{x:e.position.x-e.mouse.dungeonPosition.x*i,y:e.position.y-e.mouse.dungeonPosition.y*i}}):e}var r=.5;return Object(f.a)(Object(f.a)({},e),{},{position:{x:e.position.x-t.scrollX*r,y:e.position.y-t.scrollY*r}});case"MOUSE_DOWN":return Object(f.a)(Object(f.a)({},e),{},{mouseDown:!0,mouseStartX:e.mouse.dungeonPosition.x,mouseStartY:e.mouse.dungeonPosition.y});case"MOUSE_UP":return Object(f.a)(Object(f.a)({},e),{},{mouseDown:!1});case"SET_SCROLL_MOVES_VIEWPORT":return Object(f.a)(Object(f.a)({},e),{},{scrollMovesViewport:t.scrollMovesViewport});case"SELECT_TOOL":var c=e.selectedObject;return t.selectedTool!==g.SELECT&&(c=null),Object(f.a)(Object(f.a)({},e),{},{selectedTool:t.selectedTool,selectedObject:c});case"SELECT_OBJECT":return Object(f.a)(Object(f.a)({},e),{},{selectedObject:t.objectId});case"DELETE_OBJECT":return Object(f.a)(Object(f.a)({},e),{},{selectedObject:null});default:return Object(f.a)({},e)}},dungeon:E}),S=Object(y.c)(v,{editor:{scrollMovesViewport:!1,mouseDown:!1,mouseStartX:0,mouseStartY:0,selectedTool:g.NEW_SPACE_RECTANGLE,scale:1,position:{x:0,y:0},mouse:{dungeonPosition:{x:0,y:0}}},dungeon:{size:{width:28,height:32},objects:[{id:"423894382",type:"token",position:{x:2,y:4},size:{width:1,height:2},textureUrl:"/assets/stairs.png",angle:0},{id:"01f998f7-3ad4-43c6-b498-3249ab470b05",type:"space",position:{x:1,y:1},size:{width:5,height:5}},{id:"79178d8c-3a3e-42ee-b1ec-00dc37a045fc",type:"space",position:{x:6,y:4},size:{width:7,height:9}},{id:"6ce25fdc-9fd4-46c0-a924-74f5f9174193",type:"space",position:{x:15,y:15},size:{width:6,height:7}},{id:"e211fbd3-a817-47a5-bb47-481ba330e46d",type:"space",position:{x:21,y:19},size:{width:4,height:9}},{id:"4abe3330-4a95-4c29-b71d-8ea768da1ee6",type:"wall",start:{x:1,y:1},end:{x:1,y:6}},{id:"ad3c6f9b-f3f0-4025-8073-daacc68483ec",type:"wall",start:{x:6,y:6},end:{x:1,y:6}},{id:"68365136-d12f-4e54-8f7b-4cbd3ab424eb",type:"wall",start:{x:6,y:13},end:{x:6,y:6}},{id:"3d6435e5-8d67-4405-87d0-72c4e8f4dfaa",type:"wall",start:{x:13,y:13},end:{x:6,y:13}},{id:"384ac23d-f5fc-4cd1-9ad7-b528b62fa732",type:"wall",start:{x:13,y:4},end:{x:13,y:13}},{id:"161e3147-ca11-4dc4-a26b-ca8295c5abaa",type:"wall",start:{x:6,y:4},end:{x:13,y:4}},{id:"e8092d63-e7e2-4cd2-8c80-8cd6030980f1",type:"wall",start:{x:6,y:1},end:{x:6,y:4}},{id:"71ed94d3-177b-428b-a8e5-fe25eb79a4ea",type:"wall",start:{x:1,y:1},end:{x:6,y:1}},{id:"0ea47a6f-af9f-4ec6-a7f3-881332643e2a",type:"wall",start:{x:15,y:15},end:{x:15,y:22}},{id:"f7ec5579-7966-4ba4-b8ee-fdaad6372842",type:"wall",start:{x:21,y:22},end:{x:15,y:22}},{id:"1e587060-37cc-4b87-a88a-852c8055cabb",type:"wall",start:{x:21,y:15},end:{x:15,y:15}},{id:"79e1f702-6d60-435b-ba1e-584077a7d479",type:"wall",start:{x:21,y:19},end:{x:21,y:15}},{id:"231997d1-1453-4573-a2c0-0571428d7ac9",type:"wall",start:{x:25,y:19},end:{x:21,y:19}},{id:"85033454-8145-4d36-9b58-5e891f731f25",type:"wall",start:{x:21,y:22},end:{x:21,y:28}},{id:"2c6b4f88-4163-4847-ba05-c4ce865dfd87",type:"wall",start:{x:21,y:28},end:{x:25,y:28}},{id:"57013c9b-609f-4e59-ae1a-fd94a49bac80",type:"wall",start:{x:25,y:19},end:{x:25,y:28}}]}},"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),T=70,m=n(6),w={SPACE:"space",WALL:"wall",DOOR:"door",LABEL:"label",TOKEN:"token"},_=n(47),C=function(e){return{type:"DELETE_OBJECT",selectedObject:e}},N=function(e,t,n){return{type:"MOVE_SELECTED_OBJECT",selectedObject:e,deltaX:t,deltaY:n}},L=function(e,t){return{type:"SET_SELECTED_OBJECT_ANGLE",selectedObject:e,angle:t}},D=function(e){return e*e},M=function(e,t){return Math.sqrt(D(e.x-t.x)+D(e.y-t.y))},A=function(e,t,n){var o=n.x-t.x,i=n.y-t.y,a=o*o+i*i,r=(e.x-t.x)*o+(e.y-t.y)*i,c=Math.min(1,Math.max(0,r/a));return{x:t.x+o*c,y:t.y+i*c}},P=function(){function e(){Object(d.a)(this,e)}return Object(u.a)(e,[{key:"onMouseUp",value:function(e){var t=e.getState(),n=t.editor.mouse.dungeonPosition,o=25,i=null,a=null;t.dungeon.objects.filter((function(e){return e.type===w.WALL})).forEach((function(e){var n={x:e.start.x*T,y:e.start.y*T},r={x:e.end.x*T,y:e.end.y*T},c=A({x:t.editor.mouseStartX,y:t.editor.mouseStartY},n,r),s=M(c,{x:t.editor.mouseStartX,y:t.editor.mouseStartY});(!o||s<o)&&(o=s,i=c,a=e.id)}));var r=t.dungeon.objects.find((function(e){return e.id===a}));if(r){var c,s,l,d,u={x:r.start.x*T,y:r.start.y*T},b={x:r.end.x*T,y:r.end.y*T},O=A(n,u,b);e.dispatch((c=i.x/T,s=i.y/T,l=O.x/T,d=O.y/T,{type:"ADD_OBJECT",newObject:{id:Object(_.a)(),type:w.DOOR,start:{x:c,y:s},end:{x:l,y:d}}}))}}},{key:"renderTool",value:function(e,t){var n=e.editor.mouse.dungeonPosition;if(e.editor.mouseDown){var o=25,i=null,a=null;if(e.dungeon.objects.filter((function(e){return e.type===w.WALL})).forEach((function(t){var n={x:t.start.x*T,y:t.start.y*T},r={x:t.end.x*T,y:t.end.y*T},c=A({x:e.editor.mouseStartX,y:e.editor.mouseStartY},n,r),s=M(c,{x:e.editor.mouseStartX,y:e.editor.mouseStartY});(!o||s<o)&&(o=s,i=c,a=t.id)})),!i)return;var r=i.x,c=i.y,s=e.dungeon.objects.find((function(e){return e.id===a})),l={x:s.start.x*T,y:s.start.y*T},d={x:s.end.x*T,y:s.end.y*T},u=A(n,l,d),b=u.x,O=u.y;t.lineStyle(5,16776448),t.moveTo(r,c),t.lineTo(b,O),t.lineStyle(),t.beginFill(16776448),t.drawCircle(r,c,2.5),t.drawCircle(b,O,2.5),t.endFill()}else{var j=25,h=null;e.dungeon.objects.filter((function(e){return e.type===w.WALL})).forEach((function(e){var t={x:e.start.x*T,y:e.start.y*T},o={x:e.end.x*T,y:e.end.y*T},i=A(n,t,o),a=M(i,n);(!j||a<j)&&(j=a,h=i)})),h&&(t.lineStyle(),t.beginFill(16776448),t.drawCircle(h.x,h.y,2.5),t.endFill())}}}]),e}(),k=function(){function e(){Object(d.a)(this,e)}return Object(u.a)(e,[{key:"onMouseUp",value:function(e){var t,n,o,i=e.getState().editor.mouse.dungeonPosition,a=i.x/T,r=i.y/T;e.dispatch((t=a,n=r,o="Text Label",{type:"ADD_OBJECT",newObject:{id:Object(_.a)(),type:w.LABEL,position:{x:t,y:n},label:o}}))}},{key:"renderTool",value:function(e,t){}}]),e}(),I=function(){function e(){Object(d.a)(this,e)}return Object(u.a)(e,[{key:"onMouseUp",value:function(e){var t=e.getState(),n=t.editor.mouse.dungeonPosition,o=Math.floor(Math.min(t.editor.mouseStartX,n.x)/T),i=Math.floor(Math.min(t.editor.mouseStartY,n.y)/T),a=Math.ceil(Math.max(t.editor.mouseStartX,n.x)/T),r=Math.ceil(Math.max(t.editor.mouseStartY,n.y)/T);e.dispatch(function(e,t,n,o){return{type:"ADD_OBJECT",newObject:{id:Object(_.a)(),type:w.SPACE,position:{x:e,y:t},size:{width:n-e,height:o-t}}}}(o,i,a,r))}},{key:"renderTool",value:function(e,t){var n,o,i,a,r=e.editor.mouse.dungeonPosition;if(e.editor.mouseDown){var c=Math.min(e.editor.mouseStartX,r.x),s=Math.min(e.editor.mouseStartY,r.y),l=Math.max(e.editor.mouseStartX,r.x),d=Math.max(e.editor.mouseStartY,r.y);n=Math.floor(c/T)*T,o=Math.floor(s/T)*T,i=(l=Math.floor(l/T)*T+T)-n,a=(d=Math.floor(d/T)*T+T)-o}else n=Math.floor(r.x/T)*T,o=Math.floor(r.y/T)*T,i=T,a=T;t.beginFill(0,0),t.lineStyle(1,16776448),t.drawRect(n,o,i,a),t.endFill()}}]),e}(),U=function(){function e(){Object(d.a)(this,e)}return Object(u.a)(e,[{key:"onMouseUp",value:function(e){var t=e.getState(),n=t.editor.mouse.dungeonPosition,o=Math.round(t.editor.mouseStartX/T),i=Math.round(t.editor.mouseStartY/T),a=Math.round(n.x/T),r=Math.round(n.y/T);e.dispatch(function(e,t,n,o){return{type:"ADD_OBJECT",newObject:{id:Object(_.a)(),type:w.WALL,start:{x:e,y:t},end:{x:n,y:o}}}}(o,i,a,r))}},{key:"renderTool",value:function(e,t){var n=e.editor.mouse.dungeonPosition;if(e.editor.mouseDown){var o=Math.round(e.editor.mouseStartX/T)*T,i=Math.round(e.editor.mouseStartY/T)*T,a=Math.round(n.x/T)*T,r=Math.round(n.y/T)*T;t.lineStyle(5,16776448),t.moveTo(o,i),t.lineTo(a,r),t.lineStyle(),t.beginFill(16776448),t.drawCircle(o,i,2.5),t.drawCircle(a,r,2.5),t.endFill()}else{var c=Math.round(n.x/T)*T,s=Math.round(n.y/T)*T;t.lineStyle(),t.beginFill(16776448),t.drawCircle(c,s,2.5),t.endFill()}}}]),e}(),W=function(){function e(){Object(d.a)(this,e)}return Object(u.a)(e,[{key:"onMouseUp",value:function(e,t){}},{key:"renderTool",value:function(e,t){}}]),e}(),B=function(){function e(){Object(d.a)(this,e)}return Object(u.a)(e,[{key:"onMouseUp",value:function(e){var t,n,o=e.getState(),i=o.editor.mouse.dungeonPosition,a=Math.round(i.x/T),r=Math.round(i.y/T),c=null===(t=o.editor.ongoingSpacePolygon)||void 0===t?void 0:t[0];if(c&&c.x===a&&c.y===r){var s=o.editor.ongoingSpacePolygon;e.dispatch({type:"CLEAR_ONGOING_SPACE_POLYGON"}),e.dispatch((n=s,{type:"ADD_OBJECT",newObject:{id:Object(_.a)(),type:w.SPACE,points:n}}))}else e.dispatch(function(e,t){return{type:"ADD_ONGOING_SPACE_POLYGON",position:{x:e,y:t}}}(a,r))}},{key:"renderTool",value:function(e,t){var n=e.editor.mouse.dungeonPosition,o=Math.round(n.x/T)*T,i=Math.round(n.y/T)*T;if(e.editor.ongoingSpacePolygon){t.lineStyle(2,16776448);var a=e.editor.ongoingSpacePolygon[0];t.moveTo(a.x*T,a.y*T);for(var r=1;r<e.editor.ongoingSpacePolygon.length;r++){var c=e.editor.ongoingSpacePolygon[r];t.lineTo(c.x*T,c.y*T)}t.lineTo(o,i),t.lineStyle()}else t.lineStyle(),t.beginFill(16776448),t.drawCircle(o,i,2.5),t.endFill()}}]),e}(),R=function(){function e(){Object(d.a)(this,e),this.tokenTextureUrl="/assets/stairs.png",this.height=2,this.width=1}return Object(u.a)(e,[{key:"onMouseUp",value:function(e){var t,n,o,i,a,r,c,s,l=e.getState().editor.mouse.dungeonPosition;t=Math.floor(l.x/T),n=Math.floor(l.y/T),e.dispatch((o=this.tokenTextureUrl,i=t,a=n,r=this.width,c=this.height,s=0,{type:"ADD_OBJECT",newObject:{id:Object(_.a)(),type:w.TOKEN,textureUrl:o,position:{x:i,y:a},size:{width:r,height:c},angle:s}}))}},{key:"renderTool",value:function(e,t){var n,o,i=e.editor.mouse.dungeonPosition;n=Math.floor(i.x/T)*T,o=Math.floor(i.y/T)*T,t.beginFill(0,0),t.lineStyle(1,16776448),t.drawRect(n,o,this.width*T,this.height*T),t.endFill()}}]),e}(),z=(o={},Object(m.a)(o,g.NEW_DOOR,new P),Object(m.a)(o,g.NEW_SPACE_RECTANGLE,new I),Object(m.a)(o,g.NEW_SPACE_POLYGON,new B),Object(m.a)(o,g.NEW_WALL,new U),Object(m.a)(o,g.SELECT,new W),Object(m.a)(o,g.NEW_LABEL,new k),Object(m.a)(o,g.NEW_TOKEN,new R),o),J=function(){function e(){Object(d.a)(this,e)}return Object(u.a)(e,[{key:"createRenderObject",value:function(){return new j.c}}]),e}(),Y=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderObject",value:function(e,t,n){e.zIndex=3,e.clear(),e.beginFill(11094,1),e.lineStyle(20,11094,1,.5),e.moveTo(t.start.x*T,t.start.y*T),e.lineTo(t.end.x*T,t.end.y*T),e.lineStyle();var o=10;e.endFill(),e.tint=n?16777011:16777215,e.hitArea=new j.d([t.start.x*T-o,t.start.y*T-o,t.start.x*T+o,t.start.y*T+o,t.end.x*T+o,t.end.y*T+o,t.end.x*T-o,t.end.y*T-o])}}]),n}(J),X=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderObject",value:function(e,t,n){if(e.zIndex=4,e.clear(),0===e.children.length){var o=new j.g(t.label);o.style.fontFamily="Serif",o.style.fontSize=36,e.addChild(o)}var i=e.children[0];i.style.fill=n?16777011:0,i.text=t.label,i.position.set(t.position.x*T,t.position.y*T)}}]),n}(J),F=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderObject",value:function(e,t,n){e.zIndex=2,e.clear(),e.beginFill(157414,1),e.lineStyle(10,157414,1,.5),e.moveTo(t.start.x*T,t.start.y*T),e.lineTo(t.end.x*T,t.end.y*T),e.lineStyle(),e.drawCircle(t.start.x*T,t.start.y*T,5),e.drawCircle(t.end.x*T,t.end.y*T,5);e.endFill(),e.tint=n?16777011:16777215,e.hitArea=this.createWallHitArea(t,5)}},{key:"createWallHitArea",value:function(e,t){if(e.start.x===e.end.x&&e.start.y===e.end.y)return new j.b(e.start.x*T,e.start.y*T,t);var n=e.start.x<=e.end.x?e.start:e.end,o=e.start.x>e.end.x?e.start:e.end,i=o.y-n.y,a=o.x-n.x,r=i/a,c=-1/r;if(0===r||0===c)return new j.e(n.x*T-t,Math.min(n.y,o.y)*T-t,a*T+2*t,Math.abs(i)*T+2*t);var s=this.getOffsetAlongSlope(r,t),l=s.xOffset,d=s.yOffset,u=this.getOffsetAlongSlope(c,t),b=u.xOffset,O=u.yOffset;return new j.d([n.x*T-l-b,n.y*T-d-O,n.x*T-l+b,n.y*T-d+O,o.x*T+l+b,o.y*T+d+O,o.x*T+l-b,o.y*T+d-O])}},{key:"getOffsetAlongSlope",value:function(e,t){var n=Math.atan(e);return{xOffset:Math.cos(n)*t,yOffset:Math.sin(n)*t}}}]),n}(J),G=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderObject",value:function(e,t,n){if(e.clear(),e.beginFill(14079445),t.position&&t.size)e.drawRect(t.position.x*T,t.position.y*T,t.size.width*T,t.size.height*T),e.endFill();else{var o=t.points[0];e.moveTo(o.x*T,o.y*T);for(var i=0;i<t.points.length;i++){var a=t.points[i];e.lineTo(a.x*T,a.y*T)}e.endFill()}e.tint=n?16777164:16777215}}]),n}(J),V=function(){function e(){Object(d.a)(this,e)}return Object(u.a)(e,[{key:"createRenderObject",value:function(){return new j.f}},{key:"renderObject",value:function(e,t,n){var o;(e.zIndex=4,e.texture=j.h.from("/pungeon-react"+t.textureUrl),e.x=t.position.x*T,e.y=t.position.y*T,e.width=t.size.width*T,e.height=t.size.height*T,e.angle=t.angle,n)?(0===e.children.length?(o=new j.c,e.addChild(o)):o=e.getChildAt(0),o.clear(),o.lineStyle(5,16776448),o.drawShape(e.getLocalBounds())):e.children.length>0&&e.removeChildAt(0)}}]),e}(),K=(i={},Object(m.a)(i,w.DOOR,new Y),Object(m.a)(i,w.LABEL,new X),Object(m.a)(i,w.WALL,new F),Object(m.a)(i,w.SPACE,new G),Object(m.a)(i,w.TOKEN,new V),i),H=function(e,t){var n=S.getState();if(e.stage.position.set(n.editor.position.x,n.editor.position.y),e.stage.scale.x!==n.editor.scale&&e.stage.scale.set(n.editor.scale),t.clear(),Z(e.stage,n),q(t,n.dungeon.size.width,n.dungeon.size.height),e.renderer.plugins.interaction.mouseOverRenderer){!function(e,t){z[e.editor.selectedTool].renderTool(e,t)}(n,t);var o=e.renderer.plugins.interaction.mouse.getLocalPosition(e.stage);S.dispatch(h(o.x,o.y))}else S.dispatch(h(null,null))},Z=function(e,t){var n=t.dungeon.objects.reduce((function(e,t){return e[t.id]=t,e}),{}),o=new Set(e.children.map((function(e){return e.id})));Object.keys(n).forEach((function(t){if(!o.has(t)){var i=(a=n[t],K[a.type].createRenderObject());i.id=t,i.interactive=!0,i.mouseup=function(){S.getState().editor.selectedTool===g.SELECT&&S.dispatch(function(e){return{type:"SELECT_OBJECT",objectId:e}}(this.id))},e.addChild(i)}var a})),e.children.forEach((function(o){if(o.id){var i=n[o.id];i?function(e,t,n){K[t.type].renderObject(e,t,n)}(o,i,t.editor.selectedObject===o.id):e.removeChild(o)}}))},q=function(e,t,n){e.lineStyle(1,4473924,1,.5);for(var o=0;o<t;o++)e.moveTo(o*T,0),e.lineTo(o*T,(n-1)*T);for(var i=0;i<n;i++)e.moveTo(0,i*T),e.lineTo((t-1)*T,i*T)},$=function(e,t){var n=t.getState();switch(e.key){case"Delete":return t.dispatch(C(n.editor.selectedObject));case"ArrowLeft":return t.dispatch(N(n.editor.selectedObject,-1,0));case"ArrowRight":return t.dispatch(N(n.editor.selectedObject,1,0));case"ArrowDown":return t.dispatch(N(n.editor.selectedObject,0,1));case"ArrowUp":return t.dispatch(N(n.editor.selectedObject,0,-1));default:return}},Q=function(e,t){t.getState().editor.mouseDown&&(t.dispatch({type:"MOUSE_UP"}),function(e){var t=e.getState();z[t.editor.selectedTool].onMouseUp(e)}(t))},ee=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{style:{height:"85vh"},tabIndex:-1,ref:function(t){return e.canvasDiv=t}})}},{key:"componentDidMount",value:function(){var e=new j.a({backgroundColor:6250335,sharedLoader:!0,sharedTicker:!0,antialias:!0});this.app=e,this.canvasDiv.appendChild(e.view),this.app.resizeTo=this.canvasDiv,this.app.resize();var t=new j.c;t.zIndex=Number.MAX_SAFE_INTEGER,e.stage.sortableChildren=!0,e.stage.addChild(t),this.setupInteractions(),e.ticker.add((function(){H(e,t)}))}},{key:"setupInteractions",value:function(){this.canvasDiv.addEventListener("wheel",(function(e){!function(e,t){t.dispatch(function(e){return{type:"SCROLL_EVENT",scrollX:e.deltaX,scrollY:e.deltaY,holdingCtrl:e.getModifierState("Control")}}(e))}(e,S),e.preventDefault()})),this.canvasDiv.addEventListener("contextmenu",(function(e){e.preventDefault()})),this.canvasDiv.addEventListener("pointerdown",(function(e){var t;t=S,1===e.buttons&&t.dispatch({type:"MOUSE_DOWN"})})),this.canvasDiv.addEventListener("pointerup",(function(e){Q(0,S)})),this.canvasDiv.addEventListener("pointermove",(function(e){!function(e,t){var n,o;2===e.buttons&&t.dispatch((n=e.movementX,o=e.movementY,{type:"MOVE_VIEWPORT",deltaX:n,deltaY:o}))}(e,S)})),this.canvasDiv.addEventListener("keydown",(function(e){$(e,S)}))}}]),n}(c.a.Component),te=n(11),ne=function(e){var t=e.title,n=e.children;return Object(a.jsxs)("div",{className:"card bg-dark text-light border-secondary mb-3",children:[Object(a.jsx)("div",{className:"card-header border-secondary",children:Object(a.jsx)("h5",{children:t})}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)("div",{className:"form-group",children:n})})]})},oe=function(e){var t=e.title,n=e.x,o=e.y,i=e.onUpdate;return Object(a.jsxs)(ne,{title:null!==t&&void 0!==t?t:"Position",children:[Object(a.jsxs)("label",{children:["X:",Object(a.jsx)("input",{className:"form-control bg-secondary text-light",type:"number",value:n,onChange:function(e){return i(parseInt(e.target.value),o)}})]}),Object(a.jsxs)("label",{children:["Y:",Object(a.jsx)("input",{className:"form-control bg-secondary text-light",type:"number",value:o,onChange:function(e){return i(n,parseInt(e.target.value))}})]})]})},ie=function(e){var t=e.title,n=e.width,o=e.height,i=e.onUpdate;return Object(a.jsxs)(ne,{title:null!==t&&void 0!==t?t:"Size",children:[Object(a.jsxs)("label",{children:["Width:",Object(a.jsx)("input",{className:"form-control bg-secondary text-light",type:"number",value:n,onChange:function(e){return i(parseInt(e.target.value),o)}})]}),Object(a.jsxs)("label",{children:["Height:",Object(a.jsx)("input",{className:"form-control bg-secondary text-light",type:"number",value:o,onChange:function(e){return i(n,parseInt(e.target.value))}})]})]})},ae=function(e){var t=e.dispatch,n=e.selectedObjectId,o=e.selectedObject,i=e.dungeonSize,r=e.scrollPansViewport;return n?Object(a.jsxs)(c.a.Fragment,{children:[void 0!==o.label&&Object(a.jsx)(ne,{title:"Label",children:Object(a.jsxs)("label",{children:["Label:",Object(a.jsx)("input",{className:"form-control bg-secondary text-light",type:"text",value:o.label,onChange:function(e){return t(function(e,t){return{type:"SET_SELECTED_OBJECT_LABEL",selectedObject:e,label:t}}(n,e.target.value))}})]})}),void 0!==o.textureUrl&&Object(a.jsx)(ne,{title:"Texture Path",children:Object(a.jsxs)("label",{children:["Path:",Object(a.jsx)("input",{className:"form-control bg-secondary text-light",value:o.textureUrl,onChange:function(e){t(function(e,t){return{type:"SET_SELECTED_OBJECT_TEXTURE_PATH",selectedObject:e,texturePath:t}}(n,e.target.value))}})]})}),o.position&&Object(a.jsx)(oe,{x:o.position.x,y:o.position.y,onUpdate:function(e,o){return t(function(e,t,n){return{type:"SET_SELECTED_OBJECT_POSITION",selectedObject:e,x:t,y:n}}(n,e,o))}}),o.size&&Object(a.jsx)(ie,{width:o.size.width,height:o.size.height,onUpdate:function(e,o){return t(function(e,t,n){return{type:"SET_SELECTED_OBJECT_SIZE",selectedObject:e,width:t,height:n}}(n,e,o))}}),o.start&&Object(a.jsx)(oe,{title:"Start",x:o.start.x,y:o.start.y,onUpdate:function(e,o){return t(function(e,t,n){return{type:"SET_SELECTED_OBJECT_START",selectedObject:e,x:t,y:n}}(n,e,o))}}),o.end&&Object(a.jsx)(oe,{title:"End",x:o.end.x,y:o.end.y,onUpdate:function(e,o){return t(function(e,t,n){return{type:"SET_SELECTED_OBJECT_END",selectedObject:e,x:t,y:n}}(n,e,o))}}),void 0!==o.angle&&Object(a.jsx)(ne,{title:"Angle",children:Object(a.jsxs)("label",{children:["Angle:",Object(a.jsx)("input",{className:"form-control bg-secondary text-light",type:"number",step:"45",min:"-360",max:"360",value:o.angle,onChange:function(e){t(L(n,e.target.value))}}),Object(a.jsx)("input",{className:"form-control bg-secondary text-light",type:"range",step:"45",min:"-360",max:"360",style:{direction:"rtl"},value:o.angle,onChange:function(e){t(L(n,e.target.value))}})]})}),n&&Object(a.jsx)(ne,{title:"Actions",children:Object(a.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){return t(C(n))},children:"Delete Object"})})]}):Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsxs)(ne,{title:"Instructions",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("i",{children:"Right click"})," to pan the view."]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("i",{children:"Scroll"})," to zoom in and out."]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("i",{children:"Left click and drag"})," to create new spaces with the New Space tool."]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("i",{children:"Left click"})," to select spaces with the Select tool."]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("i",{children:"Arrow keys"})," will move the currently selected space."]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("i",{children:"Delete"})," will delete the currently selected space."]})]}),Object(a.jsx)(ie,{title:"Dungeon Size",width:i.width,height:i.height,onUpdate:function(e,n){return t(function(e,t){return{type:"SET_DUNGEON_SIZE",width:e,height:t}}(e,n))}}),Object(a.jsx)(ne,{title:"Editor Options",children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",value:r,onChange:function(e){return t({type:"SET_SCROLL_MOVES_VIEWPORT",scrollMovesViewport:e.target.checked})}}),"Scroll to pan"]})})]})},re=ae=Object(te.b)((function(e){return{selectedObjectId:e.editor.selectedObject,selectedObject:e.dungeon.objects.find((function(t){return t.id===e.editor.selectedObject})),dungeonSize:e.dungeon.size,scrollMovesViewport:e.editor.scrollMovesViewport}}))(ae),ce=function(e){var t=e.toolName,n=e.toolId,o=e.selectedTool,i=e.onClick;return Object(a.jsx)("button",{className:"btn btn-secondary"+(o===n?" active":""),onClick:function(){return i(n)},children:t})},se=function(e){var t=e.dispatch,n=e.selectedTool,o=function(e){return t({type:"SELECT_TOOL",selectedTool:e})};return Object(a.jsxs)("div",{className:"btn-group",role:"group",children:[Object(a.jsx)(ce,{toolName:"Select",toolId:g.SELECT,selectedTool:n,onClick:o}),Object(a.jsx)(ce,{toolName:"New Rectangular Space",toolId:g.NEW_SPACE_RECTANGLE,selectedTool:n,onClick:o}),Object(a.jsx)(ce,{toolName:"New Polygonal Space",toolId:g.NEW_SPACE_POLYGON,selectedTool:n,onClick:o}),Object(a.jsx)(ce,{toolName:"New Wall",toolId:g.NEW_WALL,selectedTool:n,onClick:o}),Object(a.jsx)(ce,{toolName:"New Door",toolId:g.NEW_DOOR,selectedTool:n,onClick:o}),Object(a.jsx)(ce,{toolName:"New Label",toolId:g.NEW_LABEL,selectedTool:n,onClick:o}),Object(a.jsx)(ce,{toolName:"New Token",toolId:g.NEW_TOKEN,selectedTool:n,onClick:o})]})},le=se=Object(te.b)((function(e){return{selectedTool:e.editor.selectedTool}}))(se);var de=function(){return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("nav",{className:"navbar navbar-dark bg-secondary",children:Object(a.jsx)("span",{className:"navbar-brand",children:"Pungeon"})}),Object(a.jsxs)("div",{className:"px-5",children:[Object(a.jsx)("div",{className:"py-2",children:Object(a.jsx)(le,{})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-9",children:Object(a.jsx)(ee,{})}),Object(a.jsx)("div",{className:"col-md-3",children:Object(a.jsx)(re,{})})]})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(te.a,{store:S,children:Object(a.jsx)(de,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.de793412.chunk.js.map