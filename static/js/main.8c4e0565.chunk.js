(this["webpackJsonppungeon-react"]=this["webpackJsonppungeon-react"]||[]).push([[0],{24:function(e,t,n){e.exports=n(44)},29:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(10),i=n.n(c),l=(n(29),n(2)),d=n(3),s=n(23),u=n(21),y=n(6),b=n(22),E=n(1),m=function(e,t,n){return e.map((function(e){if(e.id===t){var a=Object(E.a)({},e);return n(a),a}return e}))},h={SELECT:"select",NEW_WALL:"new_wall",NEW_SPACE:"new_space",NEW_DOOR:"new_door"},f={SPACE:"space",WALL:"wall",DOOR:"door"},p=n(46),O=function(e,t){return{type:"MOVE_SELECTED_OBJECT",deltaX:e,deltaY:t}},x=function(e,t){return{type:"SET_MOUSE_DUNGEON_POSITION",x:e,y:t}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVE_VIEWPORT":return Object(E.a)(Object(E.a)({},e),{},{editor:Object(E.a)(Object(E.a)({},e.editor),{},{position:{x:e.editor.position.x+t.deltaX,y:e.editor.position.y+t.deltaY}})});case"SET_MOUSE_DUNGEON_POSITION":return Object(E.a)(Object(E.a)({},e),{},{editor:Object(E.a)(Object(E.a)({},e.editor),{},{mouse:Object(E.a)(Object(E.a)({},e.editor.mouse),{},{dungeonPosition:{x:t.x,y:t.y}})})});case"SCROLL_EVENT":if(!e.scrollMovesViewport||t.holdingCtrl){var n=.1;t.scrollY>0&&(n*=-1);var a=Math.min(Math.max(e.editor.scale+n,.1),2);return e.editor.scale!==a?Object(E.a)(Object(E.a)({},e),{},{editor:Object(E.a)(Object(E.a)({},e.editor),{},{scale:a,position:{x:e.editor.position.x-e.editor.mouse.dungeonPosition.x*n,y:e.editor.position.y-e.editor.mouse.dungeonPosition.y*n}})}):e}var r=.5;return Object(E.a)(Object(E.a)({},e),{},{editor:Object(E.a)(Object(E.a)({},e.editor),{},{position:{x:e.editor.position.x-t.scrollX*r,y:e.editor.position.y-t.scrollY*r}})});case"MOUSE_DOWN":return Object(E.a)(Object(E.a)({},e),{},{mouseDown:!0,mouseStartX:e.editor.mouse.dungeonPosition.x,mouseStartY:e.editor.mouse.dungeonPosition.y});case"MOUSE_UP":return Object(E.a)(Object(E.a)({},e),{},{mouseDown:!1});case"SET_DUNGEON_SIZE":return Object(E.a)(Object(E.a)({},e),{},{dungeon:Object(E.a)(Object(E.a)({},e.dungeon),{},{size:{width:t.width,height:t.height}})});case"SET_SCROLL_MOVES_VIEWPORT":return Object(E.a)(Object(E.a)({},e),{},{scrollMovesViewport:t.scrollMovesViewport});case"MOVE_SELECTED_OBJECT":var o=m(e.dungeon.objects,e.selectedObject,(function(e){return e.position={x:e.position.x+t.deltaX,y:e.position.y+t.deltaY}}));return Object(E.a)(Object(E.a)({},e),{},{dungeon:Object(E.a)(Object(E.a)({},e.dungeon),{},{objects:o})});case"SET_SELECTED_OBJECT_POSITION":var c=m(e.dungeon.objects,e.selectedObject,(function(e){return e.position={x:t.x,y:t.y}}));return Object(E.a)(Object(E.a)({},e),{},{dungeon:Object(E.a)(Object(E.a)({},e.dungeon),{},{objects:c})});case"SET_SELECTED_OBJECT_SIZE":var i=m(e.dungeon.objects,e.selectedObject,(function(e){return e.size={width:t.width,height:t.height}}));return Object(E.a)(Object(E.a)({},e),{},{dungeon:Object(E.a)(Object(E.a)({},e.dungeon),{},{objects:i})});case"SET_SELECTED_OBJECT_START":var l=m(e.dungeon.objects,e.selectedObject,(function(e){return e.start={x:t.x,y:t.y}}));return Object(E.a)(Object(E.a)({},e),{},{dungeon:Object(E.a)(Object(E.a)({},e.dungeon),{},{objects:l})});case"SET_SELECTED_OBJECT_END":var d=m(e.dungeon.objects,e.selectedObject,(function(e){return e.end={x:t.x,y:t.y}}));return Object(E.a)(Object(E.a)({},e),{},{dungeon:Object(E.a)(Object(E.a)({},e.dungeon),{},{objects:d})});case"ADD_OBJECT":var s=e.dungeon.objects.slice();return s=[].concat(Object(b.a)(s),[t.newObject]),Object(E.a)(Object(E.a)({},e),{},{dungeon:Object(E.a)(Object(E.a)({},e.dungeon),{},{objects:s})});case"SELECT_TOOL":var u=e.selectedObject;return t.selectedTool!==h.SELECT&&(u=null),Object(E.a)(Object(E.a)({},e),{},{selectedTool:t.selectedTool,selectedObject:u});case"SELECT_OBJECT":return e.selectedTool===h.SELECT?Object(E.a)(Object(E.a)({},e),{},{selectedObject:t.objectId}):e;case"DELETE_OBJECT":var y=e.selectedObject;if(y){var f=e.dungeon.objects.filter((function(e){return e.id!==y}));return Object(E.a)(Object(E.a)({},e),{},{selectedObject:null,dungeon:Object(E.a)(Object(E.a)({},e.dungeon),{},{objects:f})})}return e;default:return e}},g=n(12),j=Object(g.b)(v,{scrollMovesViewport:!1,mouseDown:!1,mouseStartX:0,mouseStartY:0,selectedTool:h.NEW_SPACE,editor:{scale:1,position:{x:0,y:0},mouse:{dungeonPosition:{x:0,y:0}}},dungeon:{size:{width:28,height:32},objects:[{id:"01f998f7-3ad4-43c6-b498-3249ab470b05",type:"space",position:{x:1,y:1},size:{width:5,height:5}},{id:"79178d8c-3a3e-42ee-b1ec-00dc37a045fc",type:"space",position:{x:6,y:4},size:{width:7,height:9}},{id:"6ce25fdc-9fd4-46c0-a924-74f5f9174193",type:"space",position:{x:15,y:15},size:{width:6,height:7}},{id:"e211fbd3-a817-47a5-bb47-481ba330e46d",type:"space",position:{x:21,y:19},size:{width:4,height:9}},{id:"4abe3330-4a95-4c29-b71d-8ea768da1ee6",type:"wall",start:{x:1,y:1},end:{x:1,y:6}},{id:"ad3c6f9b-f3f0-4025-8073-daacc68483ec",type:"wall",start:{x:6,y:6},end:{x:1,y:6}},{id:"68365136-d12f-4e54-8f7b-4cbd3ab424eb",type:"wall",start:{x:6,y:13},end:{x:6,y:6}},{id:"3d6435e5-8d67-4405-87d0-72c4e8f4dfaa",type:"wall",start:{x:13,y:13},end:{x:6,y:13}},{id:"384ac23d-f5fc-4cd1-9ad7-b528b62fa732",type:"wall",start:{x:13,y:4},end:{x:13,y:13}},{id:"161e3147-ca11-4dc4-a26b-ca8295c5abaa",type:"wall",start:{x:6,y:4},end:{x:13,y:4}},{id:"e8092d63-e7e2-4cd2-8c80-8cd6030980f1",type:"wall",start:{x:6,y:1},end:{x:6,y:4}},{id:"71ed94d3-177b-428b-a8e5-fe25eb79a4ea",type:"wall",start:{x:1,y:1},end:{x:6,y:1}},{id:"0ea47a6f-af9f-4ec6-a7f3-881332643e2a",type:"wall",start:{x:15,y:15},end:{x:15,y:22}},{id:"f7ec5579-7966-4ba4-b8ee-fdaad6372842",type:"wall",start:{x:21,y:22},end:{x:15,y:22}},{id:"1e587060-37cc-4b87-a88a-852c8055cabb",type:"wall",start:{x:21,y:15},end:{x:15,y:15}},{id:"79e1f702-6d60-435b-ba1e-584077a7d479",type:"wall",start:{x:21,y:19},end:{x:21,y:15}},{id:"231997d1-1453-4573-a2c0-0571428d7ac9",type:"wall",start:{x:25,y:19},end:{x:21,y:19}},{id:"85033454-8145-4d36-9b58-5e891f731f25",type:"wall",start:{x:21,y:22},end:{x:21,y:28}},{id:"2c6b4f88-4163-4847-ba05-c4ce865dfd87",type:"wall",start:{x:21,y:28},end:{x:25,y:28}},{id:"57013c9b-609f-4e59-ae1a-fd94a49bac80",type:"wall",start:{x:25,y:19},end:{x:25,y:28}}]}},"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),S=n(5),w=function(e){return e*e},T=function(e,t){return Math.sqrt(w(e.x-t.x)+w(e.y-t.y))},_=function(e,t,n){var a=n.x-t.x,r=n.y-t.y,o=a*a+r*r,c=(e.x-t.x)*a+(e.y-t.y)*r,i=Math.min(1,Math.max(0,c/o));return{x:t.x+a*i,y:t.y+r*i}},C=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,[{key:"onMouseUp",value:function(e){var t=e.getState(),n=t.editor.mouse.dungeonPosition,a=25,r=null,o=null;t.dungeon.objects.filter((function(e){return e.type===f.WALL})).forEach((function(e){var n={x:70*e.start.x,y:70*e.start.y},c={x:70*e.end.x,y:70*e.end.y},i=_({x:t.mouseStartX,y:t.mouseStartY},n,c),l=T(i,{x:t.mouseStartX,y:t.mouseStartY});(!a||l<a)&&(a=l,r=i,o=e.id)}));var c=t.dungeon.objects.find((function(e){return e.id===o}));if(c){var i,l,d,s,u={x:70*c.start.x,y:70*c.start.y},y={x:70*c.end.x,y:70*c.end.y},b=_(n,u,y);e.dispatch((i=r.x/70,l=r.y/70,d=b.x/70,s=b.y/70,{type:"ADD_OBJECT",newObject:{id:Object(p.a)(),type:f.DOOR,start:{x:i,y:l},end:{x:d,y:s}}}))}}},{key:"renderTool",value:function(e,t){var n=e.editor.mouse.dungeonPosition;if(e.mouseDown){var a=25,r=null,o=null;if(e.dungeon.objects.filter((function(e){return e.type===f.WALL})).forEach((function(t){var n={x:70*t.start.x,y:70*t.start.y},c={x:70*t.end.x,y:70*t.end.y},i=_({x:e.mouseStartX,y:e.mouseStartY},n,c),l=T(i,{x:e.mouseStartX,y:e.mouseStartY});(!a||l<a)&&(a=l,r=i,o=t.id)})),!r)return;var c=r.x,i=r.y,l=e.dungeon.objects.find((function(e){return e.id===o})),d={x:70*l.start.x,y:70*l.start.y},s={x:70*l.end.x,y:70*l.end.y},u=_(n,d,s),y=u.x,b=u.y;t.lineStyle(5,16776448),t.moveTo(c,i),t.lineTo(y,b),t.lineStyle(),t.beginFill(16776448),t.drawCircle(c,i,2.5),t.drawCircle(y,b,2.5),t.endFill()}else{var E=25,m=null;e.dungeon.objects.filter((function(e){return e.type===f.WALL})).forEach((function(e){var t={x:70*e.start.x,y:70*e.start.y},a={x:70*e.end.x,y:70*e.end.y},r=_(n,t,a),o=T(r,n);(!E||o<E)&&(E=o,m=r)})),m&&(t.lineStyle(),t.beginFill(16776448),t.drawCircle(m.x,m.y,2.5),t.endFill())}}}]),e}(),N=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,[{key:"onMouseUp",value:function(e){var t=e.getState(),n=t.editor.mouse.dungeonPosition,a=Math.round(t.mouseStartX/70),r=Math.round(t.mouseStartY/70),o=Math.round(n.x/70),c=Math.round(n.y/70);e.dispatch(function(e,t,n,a){return{type:"ADD_OBJECT",newObject:{id:Object(p.a)(),type:f.WALL,start:{x:e,y:t},end:{x:n,y:a}}}}(a,r,o,c))}},{key:"renderTool",value:function(e,t){var n=e.editor.mouse.dungeonPosition;if(e.mouseDown){var a=70*Math.round(e.mouseStartX/70),r=70*Math.round(e.mouseStartY/70),o=70*Math.round(n.x/70),c=70*Math.round(n.y/70);t.lineStyle(5,16776448),t.moveTo(a,r),t.lineTo(o,c),t.lineStyle(),t.beginFill(16776448),t.drawCircle(a,r,2.5),t.drawCircle(o,c,2.5),t.endFill()}else{var i=70*Math.round(n.x/70),l=70*Math.round(n.y/70);t.lineStyle(),t.beginFill(16776448),t.drawCircle(i,l,2.5),t.endFill()}}}]),e}(),D=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,[{key:"onMouseUp",value:function(e){var t=e.getState(),n=t.editor.mouse.dungeonPosition,a=Math.floor(Math.min(t.mouseStartX,n.x)/70),r=Math.floor(Math.min(t.mouseStartY,n.y)/70),o=Math.ceil(Math.max(t.mouseStartX,n.x)/70),c=Math.ceil(Math.max(t.mouseStartY,n.y)/70);e.dispatch(function(e,t,n,a){return{type:"ADD_OBJECT",newObject:{id:Object(p.a)(),type:f.SPACE,position:{x:e,y:t},size:{width:n-e,height:a-t}}}}(a,r,o,c))}},{key:"renderTool",value:function(e,t){var n,a,r,o,c=e.editor.mouse.dungeonPosition;if(e.mouseDown){var i=Math.min(e.mouseStartX,c.x),l=Math.min(e.mouseStartY,c.y),d=Math.max(e.mouseStartX,c.x),s=Math.max(e.mouseStartY,c.y);n=70*Math.floor(i/70),a=70*Math.floor(l/70),r=(d=70*Math.floor(d/70)+70)-n,o=(s=70*Math.floor(s/70)+70)-a}else n=70*Math.floor(c.x/70),a=70*Math.floor(c.y/70),r=70,o=70;t.beginFill(0,0),t.lineStyle(1,16776448),t.drawRect(n,a,r,o),t.endFill()}}]),e}(),L=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,[{key:"onMouseUp",value:function(e,t){}},{key:"renderTool",value:function(e,t){}}]),e}(),M=(a={},Object(S.a)(a,h.NEW_DOOR,new C),Object(S.a)(a,h.NEW_SPACE,new D),Object(S.a)(a,h.NEW_WALL,new N),Object(S.a)(a,h.SELECT,new L),a),k=function(e,t){var n=j.getState();if(e.stage.position.set(n.editor.position.x,n.editor.position.y),e.stage.scale.x!==n.editor.scale&&e.stage.scale.set(n.editor.scale),t.clear(),I(e.stage,n),A(t,n.dungeon.size.width,n.dungeon.size.height),e.renderer.plugins.interaction.mouseOverRenderer){P(n,t);var a=e.renderer.plugins.interaction.mouse.getLocalPosition(e.stage);j.dispatch(x(a.x,a.y))}else j.dispatch(x(null,null))},I=function(e,t){var n=t.dungeon.objects.reduce((function(e,t){return e[t.id]=t,e}),{}),a=new Set(e.children.map((function(e){return e.id})));Object.keys(n).forEach((function(t){if(!a.has(t)){var n=new y.b;n.id=t,n.interactive=!0,n.mouseup=function(){j.dispatch({type:"SELECT_OBJECT",objectId:this.id})},e.addChild(n)}})),e.children.forEach((function(a){if(a.id){var r=n[a.id];if(r)switch(r.type){case f.SPACE:U(a,r,t);break;case f.WALL:W(a,r,t);break;case f.DOOR:z(a,r,t)}else e.removeChild(a)}}))},P=function(e,t){!function(e,t){M[e.selectedTool].renderTool(e,t)}(e,t)},A=function(e,t,n){e.lineStyle(1,4473924,1,.5);for(var a=0;a<t;a++)e.moveTo(70*a,0),e.lineTo(70*a,70*(n-1));for(var r=0;r<n;r++)e.moveTo(0,70*r),e.lineTo(70*(t-1),70*r)},W=function(e,t,n){e.zIndex=2,e.clear(),e.beginFill(157414,1),e.lineStyle(10,157414,1,.5),e.moveTo(70*t.start.x,70*t.start.y),e.lineTo(70*t.end.x,70*t.end.y),e.lineStyle(),e.drawCircle(70*t.start.x,70*t.start.y,5),e.drawCircle(70*t.end.x,70*t.end.y,5);return e.endFill(),n.selectedObject===e.id?e.tint=16777011:e.tint=16777215,e.hitArea=new y.c([70*t.start.x-5,70*t.start.y-5,70*t.start.x+5,70*t.start.y+5,70*t.end.x+5,70*t.end.y+5,70*t.end.x-5,70*t.end.y-5]),5},U=function(e,t,n){e.clear(),e.beginFill(14079445),e.drawRect(70*t.position.x,70*t.position.y,70*t.size.width,70*t.size.height),e.endFill(),n.selectedObject===e.id?e.tint=16777164:e.tint=16777215},z=function(e,t,n){e.zIndex=3,e.clear(),e.beginFill(11094,1),e.lineStyle(20,11094,1,.5),e.moveTo(70*t.start.x,70*t.start.y),e.lineTo(70*t.end.x,70*t.end.y),e.lineStyle();e.endFill(),n.selectedObject===e.id?e.tint=16777011:e.tint=16777215,e.hitArea=new y.c([70*t.start.x-10,70*t.start.y-10,70*t.start.x+10,70*t.start.y+10,70*t.end.x+10,70*t.end.y+10,70*t.end.x-10,70*t.end.y-10])},X=function(e,t){switch(e.key){case"Delete":return t.dispatch({type:"DELETE_OBJECT"});case"ArrowLeft":return t.dispatch(O(-1,0));case"ArrowRight":return t.dispatch(O(1,0));case"ArrowDown":return t.dispatch(O(0,1));case"ArrowUp":return t.dispatch(O(0,-1));default:return}},R=function(e,t){t.getState().mouseDown&&(t.dispatch({type:"MOUSE_UP"}),function(e){var t=e.getState();M[t.selectedTool].onMouseUp(e)}(t))},V=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{height:"85vh"},tabIndex:-1,ref:function(t){return e.canvasDiv=t}})}},{key:"componentDidMount",value:function(){var e=new y.a({backgroundColor:6250335,sharedLoader:!0,sharedTicker:!0,antialias:!0});this.app=e,this.canvasDiv.appendChild(e.view),this.app.resizeTo=this.canvasDiv,this.app.resize();var t=new y.b;t.zIndex=Number.MAX_SAFE_INTEGER,e.stage.sortableChildren=!0,e.stage.addChild(t),this.setupInteractions(),e.ticker.add((function(){k(e,t)}))}},{key:"setupInteractions",value:function(){this.canvasDiv.addEventListener("wheel",(function(e){!function(e,t){t.dispatch(function(e){return{type:"SCROLL_EVENT",scrollX:e.deltaX,scrollY:e.deltaY,holdingCtrl:e.getModifierState("Control")}}(e))}(e,j),e.preventDefault()})),this.canvasDiv.addEventListener("contextmenu",(function(e){e.preventDefault()})),this.canvasDiv.addEventListener("pointerdown",(function(e){var t;t=j,1===e.buttons&&t.dispatch({type:"MOUSE_DOWN"})})),this.canvasDiv.addEventListener("pointerup",(function(e){R(0,j)})),this.canvasDiv.addEventListener("pointermove",(function(e){!function(e,t){var n,a;2===e.buttons&&t.dispatch((n=e.movementX,a=e.movementY,{type:"MOVE_VIEWPORT",deltaX:n,deltaY:a}))}(e,j)})),this.canvasDiv.addEventListener("keydown",(function(e){X(e,j)}))}}]),n}(o.a.Component),Y=n(7),B=function(e){var t=e.title,n=e.x,a=e.y,r=e.onUpdate;return o.a.createElement("div",{className:"card bg-dark text-light border-secondary mb-3"},o.a.createElement("div",{className:"card-header border-secondary"},o.a.createElement("h5",null," ",t||"Position")),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"X:",o.a.createElement("input",{className:"form-control bg-secondary text-light",type:"number",value:n,onChange:function(e){return r(parseInt(e.target.value),a)}})),o.a.createElement("label",null,"Y:",o.a.createElement("input",{className:"form-control bg-secondary text-light",type:"number",value:a,onChange:function(e){return r(n,parseInt(e.target.value))}})))))},J=function(e){var t=e.title,n=e.width,a=e.height,r=e.onUpdate;return o.a.createElement("div",{className:"card bg-dark text-light border-secondary mb-3"},o.a.createElement("div",{className:"card-header border-secondary"},o.a.createElement("h5",null," ",t||"Size")),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Width:",o.a.createElement("input",{className:"form-control bg-secondary text-light",type:"number",value:n,onChange:function(e){return r(parseInt(e.target.value),a)}})),o.a.createElement("label",null,"Height:",o.a.createElement("input",{className:"form-control bg-secondary text-light",type:"number",value:a,onChange:function(e){return r(n,parseInt(e.target.value))}})))))},F=function(e){var t=e.dispatch,n=e.selectedObjectId,a=e.selectedObject,r=e.dungeonSize,c=e.scrollPansViewport;return n?o.a.createElement(o.a.Fragment,null,a.position&&o.a.createElement(B,{x:a.position.x,y:a.position.y,onUpdate:function(e,n){return t(function(e,t){return{type:"SET_SELECTED_OBJECT_POSITION",x:e,y:t}}(e,n))}}),a.size&&o.a.createElement(J,{width:a.size.width,height:a.size.height,onUpdate:function(e,n){return t(function(e,t){return{type:"SET_SELECTED_OBJECT_SIZE",width:e,height:t}}(e,n))}}),a.start&&o.a.createElement(B,{title:"Start",x:a.start.x,y:a.start.y,onUpdate:function(e,n){return t(function(e,t){return{type:"SET_SELECTED_OBJECT_START",x:e,y:t}}(e,n))}}),a.end&&o.a.createElement(B,{title:"End",x:a.end.x,y:a.end.y,onUpdate:function(e,n){return t(function(e,t){return{type:"SET_SELECTED_OBJECT_END",x:e,y:t}}(e,n))}}),n&&o.a.createElement("div",{className:"card bg-dark text-light border-secondary mb-3"},o.a.createElement("div",{className:"card-header border-secondary"},o.a.createElement("h5",null,"Actions")),o.a.createElement("div",{className:"card-body"},o.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){return t({type:"DELETE_OBJECT"})}},"Delete Object")))):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"card bg-dark text-light border-secondary mb-3"},o.a.createElement("div",{className:"card-header border-secondary"},o.a.createElement("h5",null,"Instructions")),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",null,o.a.createElement("i",null,"Right click")," to pan the view."),o.a.createElement("p",null,o.a.createElement("i",null,"Scroll")," to zoom in and out."),o.a.createElement("p",null,o.a.createElement("i",null,"Left click and drag")," to create new spaces with the New Space tool."),o.a.createElement("p",null,o.a.createElement("i",null,"Left click")," to select spaces with the Select tool."),o.a.createElement("p",null,o.a.createElement("i",null,"Arrow keys")," will move the currently selected space."),o.a.createElement("p",null,o.a.createElement("i",null,"Delete")," will delete the currently selected space."))),o.a.createElement(J,{title:"Dungeon Size",width:r.width,height:r.height,onUpdate:function(e,n){return t(function(e,t){return{type:"SET_DUNGEON_SIZE",width:e,height:t}}(e,n))}}),o.a.createElement("div",{className:"card bg-dark text-light border-secondary mb-3"},o.a.createElement("div",{className:"card-header border-secondary"},o.a.createElement("h5",null,"Editor Options")),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",value:c,onChange:function(e){return t({type:"SET_SCROLL_MOVES_VIEWPORT",scrollMovesViewport:e.target.checked})}}),"Scroll to pan")))))},G=F=Object(Y.b)((function(e){return{selectedObjectId:e.selectedObject,selectedObject:e.dungeon.objects.find((function(t){return t.id===e.selectedObject})),dungeonSize:e.dungeon.size,scrollPansViewport:e.scrollPansViewport}}))(F),Z=function(e){var t=e.toolName,n=e.toolId,a=e.selectedTool,r=e.onClick;return o.a.createElement("button",{className:"btn btn-secondary"+(a===n?" active":""),onClick:function(){return r(n)}},t)},q=function(e){var t=e.dispatch,n=e.selectedTool,a=function(e){return t({type:"SELECT_TOOL",selectedTool:e})};return o.a.createElement("div",{className:"btn-group",role:"group"},o.a.createElement(Z,{toolName:"Select",toolId:h.SELECT,selectedTool:n,onClick:a}),o.a.createElement(Z,{toolName:"New Space",toolId:h.NEW_SPACE,selectedTool:n,onClick:a}),o.a.createElement(Z,{toolName:"New Wall",toolId:h.NEW_WALL,selectedTool:n,onClick:a}),o.a.createElement(Z,{toolName:"New Door",toolId:h.NEW_DOOR,selectedTool:n,onClick:a}))},H=q=Object(Y.b)((function(e){return{selectedTool:e.selectedTool}}))(q);var $=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"navbar navbar-dark bg-secondary"},o.a.createElement("span",{className:"navbar-brand"},"Pungeon")),o.a.createElement("div",{className:"px-5"},o.a.createElement("div",{className:"py-2"},o.a.createElement(H,null)),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-9"},o.a.createElement(V,null)),o.a.createElement("div",{className:"col-md-3"},o.a.createElement(G,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Y.a,{store:j},o.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.8c4e0565.chunk.js.map