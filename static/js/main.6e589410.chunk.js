(this.webpackJsonptest_pokedex2=this.webpackJsonptest_pokedex2||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),s=n.n(r),i=(n(84),n(85),n(152)),o=n(146),d=n(144),l=n(154),j=n(14),b=n(16),p=n.n(b),u=n(23),m=n(48),O=n(10),h=n(35),x=n.n(h),f={getPokemons:function(){var e=Object(u.a)(p.a.mark((function e(t,n){var a,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://pokeapi.co/api/v2/pokemon/?limit=".concat(t,"&offset=").concat(n));case 2:return a=e.sent,c=a.data.results.map(function(){var e=Object(u.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t.name)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=6,x.a.all(c);case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getTypes:function(){var e=Object(u.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://pokeapi.co/api/v2/type?limit=999");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},g="pokemons-reducer/setPokemons",v="pokemons-reducer/setActivePokemon",k="pokemons-reducer/setActivePokemonClear",y="pokemons-reducer/setAllTypes",C="pokemons-reducer/setActiveType",w="pokemons-reducer/setPokemonsInProgress",N={cards:[],offset:0,limit:12,isChosenPokemon:!1,activePokemon:{},allTypes:[],activeType:null,isInProgress:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(O.a)(Object(O.a)({},e),{},{cards:[].concat(Object(m.a)(e.cards),Object(m.a)(t.pokemons)),offset:t.offset+t.limit});case v:return Object(O.a)(Object(O.a)({},e),{},{activePokemon:Object(O.a)({},e.cards.find((function(e){return e.name===t.name}))),isChosenPokemon:!0});case k:return Object(O.a)(Object(O.a)({},e),{},{activePokemon:{},isChosenPokemon:!1});case y:return Object(O.a)(Object(O.a)({},e),{},{allTypes:Object(m.a)(t.types)});case C:return Object(O.a)(Object(O.a)({},e),{},{activeType:t.activeType});case w:return Object(O.a)(Object(O.a)({},e),{},{isInProgress:t.isInProgress});default:return e}},E=function(e,t,n){return{type:g,pokemons:e,limit:t,offset:n}},P=function(e){return{type:C,activeType:e}},B=function(e){return{type:w,isInProgress:e}},R=function(e,t){return function(){var n=Object(u.a)(p.a.mark((function n(a,c){var r,s;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(B(!0)),n.next=3,f.getPokemons(e,t);case 3:r=n.sent,s=r.map((function(e){return e.data})),a(E(s,e,t)),a(B(!1));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},L=n(18),_=n(148),I=n(150),A=n(149),W=n(151),M=n(147),D=n(13),F=n(41),G=n(42),S=n(43),J=n(136),z=n(44),K=n(137),X=n(138),q=n(45),U=n(139),V=n(140),Y=n(141),H=n(46),Q=n(47),Z=n(142),$=n(143),ee=function(e){switch(e){case"normal":return F.a[100];case"fighting":return G.a[900];case"flying":return F.a[300];case"poison":return S.a[900];case"ground":return J.a[400];case"rock":return z.a[500];case"bug":return K.a[600];case"ghost":return z.a[200];case"steel":return X.a[500];case"fire":return q.a[700];case"water":return U.a[600];case"grass":return S.a[500];case"electric":return V.a[500];case"psychic":return Y.a[200];case"ice":return F.a[50];case"dragon":return q.a[500];case"dark":return H.a[400];case"fairy":return Q.a[300];case"unknown":return Z.a[200];case"shadow":return $.a[400]}},te=n(69),ne=n.n(te),ae=n(2),ce=Object(d.a)((function(e){return{card:{height:"100%",display:"flex",flexDirection:"column",padding:e.spacing(1),backgroundColor:ne.a[100]},cardMedia:Object(L.a)({paddingTop:"100%",marginBottom:e.spacing(1)},e.breakpoints.down("sm"),{maxWidth:e.spacing(100)}),cardContent:{flexGrow:1},cardTypes:Object(L.a)({display:"flex",justifyContent:"space-around"},e.breakpoints.down("sm"),{display:"none"}),type:{border:"1px solid green",borderRadius:"5px",padding:"5px 19px"},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},cardContainer:{marginBottom:e.spacing(8),marginTop:e.spacing(8)}}})),re=function(e){var t=e.id,n=e.name,a=e.types,c=ce(),r=Object(j.b)();return Object(ae.jsx)(ae.Fragment,{children:Object(ae.jsx)(o.a,{item:!0,xs:12,sm:6,md:6,lg:4,children:Object(ae.jsx)(M.a,{onClick:function(e){r(function(e){return{type:v,name:e}}(n))},children:Object(ae.jsxs)(_.a,{className:c.card,children:[Object(ae.jsx)(A.a,{className:c.cardMedia,image:" https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png"),title:n}),Object(ae.jsxs)(I.a,{className:c.cardContent,children:[Object(ae.jsx)(W.a,{align:"center",gutterBottom:!0,variant:"h5",component:"h2",children:Object(D.a)(n)}),Object(ae.jsx)(W.a,{className:c.cardTypes,children:a.map((function(e,t){return Object(ae.jsx)("span",{className:c.type,style:{backgroundColor:"".concat(ee(e.type.name))},children:Object(D.a)(e.type.name)},"".concat(t+e.type.name))}))})]})]})})})})},se=function(){var e=Object(j.c)((function(e){return e.pokemons})),t=e.cards,n=e.activeType;return Object(ae.jsx)(ae.Fragment,{children:t.filter((function(e){if(null===n)return!0;if(e.types.length>1){if(e.types[0].type.name===n||e.types[1].type.name===n)return!0}else if(1===e.types.length&&e.types[0].type.name===n)return!0;return!1})).map((function(e,t){return Object(ae.jsx)(re,{id:e.id,name:e.name,types:e.types},"".concat(e.name+t))}))})},ie=n(72),oe=n(153),de=n(157),le=n(74),je=n(158),be=n(160),pe=n(159),ue=Object(d.a)((function(e){return{root:{display:"flex",justifyContent:"center"},paper:{marginRight:e.spacing(2)}}}));function me(){var e=ue(),t=Object(a.useState)(!1),n=Object(ie.a)(t,2),r=n[0],s=n[1],o=Object(a.useRef)(null),d=Object(j.b)(),l=Object(j.c)((function(e){return e.pokemons})),b=l.activeType,p=l.allTypes,u=function(e){o.current&&o.current.contains(e.target)||s(!1)},m=function(e){"All"===e.currentTarget.outerText?d(P(null)):d(P(e.currentTarget.outerText.toLowerCase())),s(!1)};function h(e){"Tab"===e.key&&(e.preventDefault(),s(!1))}var x=c.a.useRef(r);return Object(a.useEffect)((function(){!0===x.current&&!1===r&&o.current.focus(),x.current=r}),[r]),Object(ae.jsx)("div",{className:e.root,children:Object(ae.jsxs)("div",{children:[Object(ae.jsxs)(i.a,{ref:o,"aria-controls":r?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){s((function(e){return!e}))},children:["Sort Pokemons by Type : ",b||"All"]}),Object(ae.jsx)(je.a,{open:r,anchorEl:o.current,role:void 0,transition:!0,disablePortal:!0,children:function(e){var t=e.TransitionProps,n=e.placement;return Object(ae.jsx)(de.a,Object(O.a)(Object(O.a)({},t),{},{style:{transformOrigin:"bottom"===n?"center top":"center bottom"},children:Object(ae.jsx)(le.a,{children:Object(ae.jsx)(oe.a,{onClickAway:u,children:Object(ae.jsxs)(pe.a,{autoFocusItem:r,id:"menu-list-grow",onKeyDown:h,children:[Object(ae.jsx)(be.a,{onClick:m,children:"All"}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[0].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[1].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[2].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[3].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[4].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[5].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[6].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[7].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[8].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[9].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[10].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[11].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[12].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[13].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[14].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[15].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[16].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[17].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[18].name)}),Object(ae.jsx)(be.a,{onClick:m,children:Object(D.a)(p[19].name)})]})})})}))}})]})})}var Oe=Object(d.a)((function(e){return{cardGrid:{paddingBottom:e.spacing(8),maxWidth:"md"},cardContainer:{marginBottom:e.spacing(8),marginTop:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column",padding:e.spacing(1)},cardMedia:{paddingTop:"70%",marginBottom:e.spacing(1)},cardContent:{flexGrow:1},cardActions:{margin:"0 auto"},button:{width:"100%"},div:{position:"relative",zIndex:3,paddingTop:"100px"}}})),he=c.a.memo((function(){var e=Oe(),t=Object(j.c)((function(e){return e.pokemons})),n=t.limit,r=t.offset,s=t.isInProgress,d=Object(j.b)();return Object(a.useEffect)((function(){d(R(n,r)),d(function(){var e=Object(u.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getTypes();case 2:a=e.sent,t((n=a.results,{type:y,types:n}));case 4:case"end":return e.stop()}var n}),e)})));return function(t,n){return e.apply(this,arguments)}}())}),[]),Object(ae.jsx)(c.a.Fragment,{children:Object(ae.jsxs)(o.a,{item:!0,xs:12,sm:12,md:6,children:[Object(ae.jsx)("div",{className:e.div,children:Object(ae.jsx)(me,{})}),Object(ae.jsxs)(l.a,{className:e.cardGrid,children:[Object(ae.jsx)(o.a,{className:e.cardContainer,container:!0,spacing:4,children:Object(ae.jsx)(se,{})}),Object(ae.jsx)(i.a,{onClick:function(){d(R(n,r)),d({type:k})},className:e.button,variant:"contained",color:"primary",disabled:s,children:"Load more"})]})]})})})),xe=n(155),fe=n(156),ge=Object(d.a)((function(e){return{appBar:{position:"fixed",zIndex:2},text:{margin:"0 auto"}}})),ve=function(){var e=ge();return Object(ae.jsx)(ae.Fragment,{children:Object(ae.jsx)(xe.a,{className:e.appBar,children:Object(ae.jsx)(fe.a,{children:Object(ae.jsx)(W.a,{className:e.text,variant:"h6",color:"inherit",noWrap:!0,children:"Pokedex"})})})})},ke=Object(d.a)((function(e){return{grid:Object(L.a)({display:"flex",justifyContent:"center"},e.breakpoints.down("xs"),{display:"none"}),paper:Object(L.a)({position:"fixed",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},e.breakpoints.down("sm"),{display:"none"}),cardContainer:{marginBottom:e.spacing(8),marginTop:e.spacing(8)},card:Object(L.a)({maxWidth:"md",display:"flex",flexDirection:"column",justifyContent:"center",padding:e.spacing(1),alignItems:"center"},e.breakpoints.down("md"),{maxWidth:"400px"}),cardTitle:{textAlign:"center",fontWeight:700},cardMedia:{paddingTop:"100%",marginBottom:e.spacing(1),width:"100%"},cardContent:{flexGrow:1},table:{maxWidth:"100%",textAlign:"center"},tabletd:{width:"100%",padding:e.spacing(1,5),border:"1px solid black"},divTable:Object(L.a)({display:"flex",width:"400px",textAlign:"center",justifyContent:"space-between"},e.breakpoints.down("md"),{width:"300px"}),divTableRight:{width:"30%",border:"1px solid black"},divTableLeft:{width:"70%",border:"1px solid black",borderRight:"none"},divLeftEl:{borderBottom:"1px solid black","&:last-child":{borderBottom:"none"}},divRightEl:{borderBottom:"1px solid black","&:last-child":{borderBottom:"none"}}}})),ye=function(){var e=ke(),t=Object(j.c)((function(e){return e.pokemons})),n=t.isChosenPokemon,a=t.activePokemon;return Object(ae.jsx)(ae.Fragment,{children:Object(ae.jsx)(o.a,{className:e.grid,item:!0,xs:!1,sm:!1,md:6,elevation:6,square:"true",children:Object(ae.jsxs)("div",{className:e.paper,children:[n&&Object(ae.jsxs)(_.a,{className:e.card,children:[Object(ae.jsx)(A.a,{className:e.cardMedia,image:"https://pokeres.bastionbot.org/images/pokemon/".concat(a.id,".png")}),Object(ae.jsxs)(I.a,{className:e.cardContent,children:[Object(ae.jsx)(W.a,{className:e.cardTitle,gutterBottom:!0,variant:"h5",component:"h2",children:Object(ae.jsxs)("span",{children:[Object(D.a)(a.name)," #",a.order]})}),Object(ae.jsxs)("div",{className:e.divTable,children:[Object(ae.jsxs)("div",{className:e.divTableLeft,children:[Object(ae.jsx)("div",{className:e.divLeftEl,children:Object(D.a)("Type")}),Object(ae.jsx)("div",{className:e.divLeftEl,children:Object(D.a)(a.stats[1].stat.name)}),Object(ae.jsx)("div",{className:e.divLeftEl,children:Object(D.a)(a.stats[2].stat.name)}),Object(ae.jsx)("div",{className:e.divLeftEl,children:Object(D.a)(a.stats[0].stat.name)}),Object(ae.jsx)("div",{className:e.divLeftEl,children:Object(D.a)(a.stats[3].stat.name)}),Object(ae.jsx)("div",{className:e.divLeftEl,children:Object(D.a)(a.stats[4].stat.name)}),Object(ae.jsx)("div",{className:e.divLeftEl,children:Object(D.a)(a.stats[5].stat.name)}),Object(ae.jsx)("div",{className:e.divLeftEl,children:Object(D.a)("weight")})]}),Object(ae.jsxs)("div",{className:e.divTableRight,children:[Object(ae.jsx)("div",{className:e.divRightEl,children:Object(ae.jsx)("span",{children:Object(D.a)(a.types[0].type.name)})}),Object(ae.jsx)("div",{className:e.divRightEl,children:a.stats[1].base_stat}),Object(ae.jsx)("div",{className:e.divRightEl,children:a.stats[2].base_stat}),Object(ae.jsx)("div",{className:e.divRightEl,children:a.stats[0].base_stat}),Object(ae.jsx)("div",{className:e.divRightEl,children:a.stats[3].base_stat}),Object(ae.jsx)("div",{className:e.divRightEl,children:a.stats[4].base_stat}),Object(ae.jsx)("div",{className:e.divRightEl,children:a.stats[5].base_stat}),Object(ae.jsx)("div",{className:e.divRightEl,children:a.weight})]})]})]})]}),!n&&Object(ae.jsxs)(_.a,{className:e.card,children:[Object(ae.jsx)(A.a,{className:e.cardMedia,image:"https://media.giphy.com/media/uWLJEGCSWdmvK/giphy.gif"}),Object(ae.jsx)(I.a,{className:e.cardContent,children:Object(ae.jsx)(W.a,{className:e.cardTitle,gutterBottom:!0,variant:"h5",component:"h2",children:Object(ae.jsx)("span",{children:"Choose Your Pokemon"})})})]})]})})})},Ce=Object(d.a)((function(e){return{root:{height:"100vh"},header:{overflow:"hidden"}}}));var we=function(){var e=Ce();return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(ve,{}),Object(ae.jsxs)(o.a,{container:!0,component:"main",className:e.root,children:[Object(ae.jsx)(he,{}),Object(ae.jsx)(ye,{})]})]})},Ne=n(22),Te=n(71),Ee=Object(Ne.c)({pokemons:T}),Pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ne.d,Be=Object(Ne.e)(Ee,Pe(Object(Ne.a)(Te.a)));s.a.render(Object(ae.jsx)(c.a.StrictMode,{children:Object(ae.jsx)(j.a,{store:Be,children:Object(ae.jsx)(we,{})})}),document.getElementById("root"))},84:function(e,t,n){},85:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.6e589410.chunk.js.map