(this.webpackJsonptest_pokedex2=this.webpackJsonptest_pokedex2||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),s=a.n(r),i=(a(84),a(85),a(152)),o=a(146),d=a(144),l=a(154),j=a(14),b=a(16),p=a.n(b),u=a(23),m=a(48),O=a(13),h=a(30),x=a.n(h),f={getPokemons:function(){var e=Object(u.a)(p.a.mark((function e(t,a){var n,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://pokeapi.co/api/v2/pokemon/?limit=".concat(t,"&offset=").concat(a));case 2:return n=e.sent,c=n.data.results.map(function(){var e=Object(u.a)(p.a.mark((function e(t,a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(t.url));case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",x.a.get("https://pokeapi.co/api/v2/pokemon/".concat(a+10,"/")));case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),e.next=6,x.a.all(c);case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),getTypes:function(){var e=Object(u.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://pokeapi.co/api/v2/type?limit=999");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},g="pokemons-reducer/setPokemons",v="pokemons-reducer/setActivePokemon",k="pokemons-reducer/setAllTypes",y="pokemons-reducer/setActiveType",C="pokemons-reducer/setPokemonsInProgress",w={cards:[],offset:0,limit:12,isChosenPokemon:!1,activePokemon:{},allTypes:[],activeType:null,isInProgress:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(O.a)(Object(O.a)({},e),{},{cards:[].concat(Object(m.a)(e.cards),Object(m.a)(t.pokemons)),offset:t.offset+t.limit});case v:return Object(O.a)(Object(O.a)({},e),{},{activePokemon:Object(O.a)({},e.cards[t.id]),isChosenPokemon:!0});case k:return Object(O.a)(Object(O.a)({},e),{},{allTypes:Object(m.a)(t.types)});case y:return Object(O.a)(Object(O.a)({},e),{},{activeType:t.activeType});case C:return Object(O.a)(Object(O.a)({},e),{},{isInProgress:t.isInProgress});default:return e}},T=function(e,t,a){return{type:g,pokemons:e,limit:t,offset:a}},E=function(e){return{type:y,activeType:e}},P=function(e){return{type:C,isInProgress:e}},B=function(e,t){return function(){var a=Object(u.a)(p.a.mark((function a(n,c){var r,s;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(P(!0)),a.next=3,f.getPokemons(e,t);case 3:r=a.sent,s=r.map((function(e){return e.data})),n(T(s,e,t)),n(P(!1));case 7:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},R=a(18),L=a(148),_=a(150),I=a(149),A=a(151),W=a(147),M=a(12),D=a(41),F=a(42),G=a(43),S=a(136),J=a(44),z=a(137),K=a(138),X=a(45),q=a(139),U=a(140),V=a(141),Y=a(46),H=a(47),Q=a(142),Z=a(143),$=function(e){switch(e){case"normal":return D.a[100];case"fighting":return F.a[900];case"flying":return D.a[300];case"poison":return G.a[900];case"ground":return S.a[400];case"rock":return J.a[500];case"bug":return z.a[600];case"ghost":return J.a[200];case"steel":return K.a[500];case"fire":return X.a[700];case"water":return q.a[600];case"grass":return G.a[500];case"electric":return U.a[500];case"psychic":return V.a[200];case"ice":return D.a[50];case"dragon":return X.a[500];case"dark":return Y.a[400];case"fairy":return H.a[300];case"unknown":return Q.a[200];case"shadow":return Z.a[400]}},ee=a(69),te=a.n(ee),ae=a(2),ne=Object(d.a)((function(e){return{card:{height:"100%",display:"flex",flexDirection:"column",padding:e.spacing(1),backgroundColor:te.a[100]},cardMedia:Object(R.a)({paddingTop:"100%",marginBottom:e.spacing(1)},e.breakpoints.down("sm"),{maxWidth:e.spacing(100)}),cardContent:{flexGrow:1},cardTypes:Object(R.a)({display:"flex",justifyContent:"space-around"},e.breakpoints.down("sm"),{display:"none"}),type:{border:"1px solid green",borderRadius:"5px",padding:"5px 19px"},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},cardContainer:{marginBottom:e.spacing(8),marginTop:e.spacing(8)}}})),ce=function(e){var t=e.id,a=e.name,n=e.types,c=ne(),r=Object(j.b)();return console.log("render"),Object(ae.jsx)(ae.Fragment,{children:Object(ae.jsx)(o.a,{item:!0,xs:12,sm:6,md:6,lg:4,children:Object(ae.jsx)(W.a,{onClick:function(e){r(function(e){return{type:v,id:e}}(t-1))},children:Object(ae.jsxs)(L.a,{className:c.card,children:[Object(ae.jsx)(I.a,{className:c.cardMedia,image:" https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png"),title:a}),Object(ae.jsxs)(_.a,{className:c.cardContent,children:[Object(ae.jsx)(A.a,{align:"center",gutterBottom:!0,variant:"h5",component:"h2",children:Object(M.a)(a)}),Object(ae.jsx)(A.a,{className:c.cardTypes,children:n.map((function(e,t){return Object(ae.jsx)("span",{className:c.type,style:{backgroundColor:"".concat($(e.type.name))},children:Object(M.a)(e.type.name)},"".concat(t+e.type.name))}))})]})]})})})})},re=function(){var e=Object(j.c)((function(e){return e.pokemons})),t=e.cards,a=e.activeType;return Object(ae.jsx)(ae.Fragment,{children:t.filter((function(e){if(null===a)return!0;if(e.types.length>1){if(e.types[0].type.name===a||e.types[1].type.name===a)return!0}else if(1===e.types.length&&e.types[0].type.name===a)return!0;return!1})).map((function(e){return Object(ae.jsx)(ce,{id:e.id,name:e.name,types:e.types},e.name)}))})},se=a(72),ie=a(153),oe=a(157),de=a(74),le=a(158),je=a(160),be=a(159),pe=Object(d.a)((function(e){return{root:{display:"flex",justifyContent:"center"},paper:{marginRight:e.spacing(2)}}}));function ue(){var e=pe(),t=Object(n.useState)(!1),a=Object(se.a)(t,2),r=a[0],s=a[1],o=Object(n.useRef)(null),d=Object(j.b)(),l=Object(j.c)((function(e){return e.pokemons})),b=l.activeType,p=l.allTypes,u=function(e){o.current&&o.current.contains(e.target)||s(!1)},m=function(e){"All"===e.currentTarget.outerText?d(E(null)):d(E(e.currentTarget.outerText.toLowerCase())),s(!1)};function h(e){"Tab"===e.key&&(e.preventDefault(),s(!1))}var x=c.a.useRef(r);return Object(n.useEffect)((function(){!0===x.current&&!1===r&&o.current.focus(),x.current=r}),[r]),Object(ae.jsx)("div",{className:e.root,children:Object(ae.jsxs)("div",{children:[Object(ae.jsxs)(i.a,{ref:o,"aria-controls":r?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){s((function(e){return!e}))},children:["Sort Pokemons by Type : ",b||"All"]}),Object(ae.jsx)(le.a,{open:r,anchorEl:o.current,role:void 0,transition:!0,disablePortal:!0,children:function(e){var t=e.TransitionProps,a=e.placement;return Object(ae.jsx)(oe.a,Object(O.a)(Object(O.a)({},t),{},{style:{transformOrigin:"bottom"===a?"center top":"center bottom"},children:Object(ae.jsx)(de.a,{children:Object(ae.jsx)(ie.a,{onClickAway:u,children:Object(ae.jsxs)(be.a,{autoFocusItem:r,id:"menu-list-grow",onKeyDown:h,children:[Object(ae.jsx)(je.a,{onClick:m,children:"All"}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[0].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[1].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[2].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[3].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[4].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[5].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[6].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[7].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[8].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[9].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[10].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[11].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[12].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[13].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[14].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[15].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[16].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[17].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[18].name)}),Object(ae.jsx)(je.a,{onClick:m,children:Object(M.a)(p[19].name)})]})})})}))}})]})})}var me=Object(d.a)((function(e){return{cardGrid:{paddingBottom:e.spacing(8),maxWidth:"md"},cardContainer:{marginBottom:e.spacing(8),marginTop:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column",padding:e.spacing(1)},cardMedia:{paddingTop:"70%",marginBottom:e.spacing(1)},cardContent:{flexGrow:1},cardActions:{margin:"0 auto"},button:{width:"100%"},div:{position:"relative",zIndex:3,paddingTop:"100px"}}})),Oe=c.a.memo((function(){var e=me(),t=Object(j.c)((function(e){return e.pokemons})),a=t.limit,r=t.offset,s=t.isInProgress,d=Object(j.b)();return Object(n.useEffect)((function(){d(B(a,r)),d(function(){var e=Object(u.a)(p.a.mark((function e(t,a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getTypes();case 2:n=e.sent,t((a=n.results,{type:k,types:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(t,a){return e.apply(this,arguments)}}())}),[]),Object(ae.jsx)(c.a.Fragment,{children:Object(ae.jsxs)(o.a,{item:!0,xs:12,sm:12,md:6,children:[Object(ae.jsx)("div",{className:e.div,children:Object(ae.jsx)(ue,{})}),Object(ae.jsxs)(l.a,{className:e.cardGrid,children:[Object(ae.jsx)(o.a,{className:e.cardContainer,container:!0,spacing:4,children:Object(ae.jsx)(re,{})}),Object(ae.jsx)(i.a,{onClick:function(){d(B(a,r))},className:e.button,variant:"contained",color:"primary",disabled:s,children:"Load more"})]})]})})})),he=a(155),xe=a(156),fe=Object(d.a)((function(e){return{appBar:{position:"fixed",zIndex:2},text:{margin:"0 auto"}}})),ge=function(){var e=fe();return Object(ae.jsx)(ae.Fragment,{children:Object(ae.jsx)(he.a,{className:e.appBar,children:Object(ae.jsx)(xe.a,{children:Object(ae.jsx)(A.a,{className:e.text,variant:"h6",color:"inherit",noWrap:!0,children:"Pokedex"})})})})},ve=Object(d.a)((function(e){return{grid:Object(R.a)({display:"flex",justifyContent:"center"},e.breakpoints.down("xs"),{display:"none"}),paper:Object(R.a)({position:"fixed",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},e.breakpoints.down("sm"),{display:"none"}),cardContainer:{marginBottom:e.spacing(8),marginTop:e.spacing(8)},card:Object(R.a)({maxWidth:"md",display:"flex",flexDirection:"column",justifyContent:"center",padding:e.spacing(1),alignItems:"center"},e.breakpoints.down("md"),{maxWidth:"400px"}),cardTitle:{textAlign:"center",fontWeight:700},cardMedia:{paddingTop:"100%",marginBottom:e.spacing(1),width:"100%"},cardContent:{flexGrow:1},table:{maxWidth:"100%",textAlign:"center"},tabletd:{width:"100%",padding:e.spacing(1,5),border:"1px solid black"},divTable:Object(R.a)({display:"flex",width:"400px",textAlign:"center",justifyContent:"space-between"},e.breakpoints.down("md"),{width:"300px"}),divTableRight:{width:"30%",border:"1px solid black"},divTableLeft:{width:"70%",border:"1px solid black",borderRight:"none"},divLeftEl:{borderBottom:"1px solid black","&:last-child":{borderBottom:"none"}},divRightEl:{borderBottom:"1px solid black","&:last-child":{borderBottom:"none"}}}})),ke=function(){var e=ve(),t=Object(j.c)((function(e){return e.pokemons})),a=t.isChosenPokemon,n=t.activePokemon;return Object(ae.jsx)(ae.Fragment,{children:Object(ae.jsx)(o.a,{className:e.grid,item:!0,xs:!1,sm:!1,md:6,elevation:6,square:"true",children:Object(ae.jsxs)("div",{className:e.paper,children:[a&&Object(ae.jsxs)(L.a,{className:e.card,children:[Object(ae.jsx)(I.a,{className:e.cardMedia,image:"https://pokeres.bastionbot.org/images/pokemon/".concat(n.id,".png")}),Object(ae.jsxs)(_.a,{className:e.cardContent,children:[Object(ae.jsx)(A.a,{className:e.cardTitle,gutterBottom:!0,variant:"h5",component:"h2",children:Object(ae.jsxs)("span",{children:[Object(M.a)(n.name)," #",n.order]})}),Object(ae.jsxs)("div",{className:e.divTable,children:[Object(ae.jsxs)("div",{className:e.divTableLeft,children:[Object(ae.jsx)("div",{className:e.divLeftEl,children:Object(M.a)("Type")}),Object(ae.jsx)("div",{className:e.divLeftEl,children:Object(M.a)(n.stats[1].stat.name)}),Object(ae.jsx)("div",{className:e.divLeftEl,children:Object(M.a)(n.stats[2].stat.name)}),Object(ae.jsx)("div",{className:e.divLeftEl,children:Object(M.a)(n.stats[0].stat.name)}),Object(ae.jsx)("div",{className:e.divLeftEl,children:Object(M.a)(n.stats[3].stat.name)}),Object(ae.jsx)("div",{className:e.divLeftEl,children:Object(M.a)(n.stats[4].stat.name)}),Object(ae.jsx)("div",{className:e.divLeftEl,children:Object(M.a)(n.stats[5].stat.name)}),Object(ae.jsx)("div",{className:e.divLeftEl,children:Object(M.a)("weight")})]}),Object(ae.jsxs)("div",{className:e.divTableRight,children:[Object(ae.jsx)("div",{className:e.divRightEl,children:Object(ae.jsx)("span",{children:Object(M.a)(n.types[0].type.name)})}),Object(ae.jsx)("div",{className:e.divRightEl,children:n.stats[1].base_stat}),Object(ae.jsx)("div",{className:e.divRightEl,children:n.stats[2].base_stat}),Object(ae.jsx)("div",{className:e.divRightEl,children:n.stats[0].base_stat}),Object(ae.jsx)("div",{className:e.divRightEl,children:n.stats[3].base_stat}),Object(ae.jsx)("div",{className:e.divRightEl,children:n.stats[4].base_stat}),Object(ae.jsx)("div",{className:e.divRightEl,children:n.stats[5].base_stat}),Object(ae.jsx)("div",{className:e.divRightEl,children:n.weight})]})]})]})]}),!a&&Object(ae.jsxs)(L.a,{className:e.card,children:[Object(ae.jsx)(I.a,{className:e.cardMedia,image:"https://media.giphy.com/media/uWLJEGCSWdmvK/giphy.gif"}),Object(ae.jsx)(_.a,{className:e.cardContent,children:Object(ae.jsx)(A.a,{className:e.cardTitle,gutterBottom:!0,variant:"h5",component:"h2",children:Object(ae.jsx)("span",{children:"Choose Your Pokemon"})})})]})]})})})},ye=Object(d.a)((function(e){return{root:{height:"100vh"},header:{overflow:"hidden"}}}));var Ce=function(){var e=ye();return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(ge,{}),Object(ae.jsxs)(o.a,{container:!0,component:"main",className:e.root,children:[Object(ae.jsx)(Oe,{}),Object(ae.jsx)(ke,{})]})]})},we=a(22),Ne=a(71),Te=Object(we.c)({pokemons:N}),Ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||we.d,Pe=Object(we.e)(Te,Ee(Object(we.a)(Ne.a)));s.a.render(Object(ae.jsx)(c.a.StrictMode,{children:Object(ae.jsx)(j.a,{store:Pe,children:Object(ae.jsx)(Ce,{})})}),document.getElementById("root"))},84:function(e,t,a){},85:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.1f0257f8.chunk.js.map