webpackJsonp([7],{1661:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){return{isloading:e.loading.effects["mywallethome/query"],mainapp:e.mainapp,salereport:e.salereport}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(82),u=l(r),m=a(178),c=l(m),d=a(179),i=l(d),o=a(338),_=l(o),f=a(26),s=l(f),p=a(1),E=l(p),x=a(6),g=l(x),v=a(2),b=l(v),y=a(3),h=l(y);a(89),a(334),a(335),a(1687);var N=a(0),C=l(N),j=a(5),w=(l(j),a(34)),F=(a(21),a(7)),T=l(F),k=a(20),H=l(k),I=a(43),M=a(91),G=(l(M),a(719)),O=(l(G),a(177)),A=a(1689),L=l(A),q=function(e){function t(){return(0,E.default)(this,t),(0,b.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,g.default)(t,[{key:"componentWillMount",value:function(){(0,this.props.dispatch)({type:"mainapp/getEosAccountDetail",payload:{}})}},{key:"render",value:function(){var e=this.props,t=(e.dispatch,e.isloading,e.salereport.currentitem),a=e.mainapp,l=a.eosAccountData,n=a.mycurrency,r=a.eoscurrency,m=a.eosAccount,d=((0,I.myprofilemenus)(),C.default.createElement("div",{className:L.default.pageHeaderContent},C.default.createElement("div",{className:L.default.content},C.default.createElement("div",{className:L.default.contentTitle},H.default.get("comm.hello"),"\uff0c ",m||""),C.default.createElement("div",null,H.default.get("comm.createat"),":",l?(0,T.default)(l.created).format("YYYY-MM-DD HH:mm"):"")))),o=C.default.createElement("div",{className:L.default.extraContent},C.default.createElement("div",{className:L.default.statItem},C.default.createElement("p",null,"EOS",H.default.get("comm.balance")),C.default.createElement("p",null,r||"0.0000")),C.default.createElement("div",{className:L.default.statItem},C.default.createElement("p",null,H.default.get("comm.tokenbalance")),C.default.createElement("p",null,n||"0.0000")),C.default.createElement("div",{className:L.default.statItem},C.default.createElement("p",null," ")));return C.default.createElement(O.MyWalletToolsPageHeaderLayout,{content:d,extraContent:o},t&&t.length>0?C.default.createElement(O.SaleReportbox,{currentitem:t,showflag:"box"}):"",l?C.default.createElement(u.default,{bodyStyle:{paddingTop:12,paddingBottom:12}},C.default.createElement(c.default,{gutter:16,justify:"center"},C.default.createElement(i.default,{xl:8,lg:8,md:8,sm:24,xs:24},C.default.createElement(_.default,{width:80,type:"circle",percent:Number(100*l.ram_usage/l.ram_quota).toFixed(2),format:function(e){return e+" %"}}),C.default.createElement("p",null,H.default.get("comm.ram")," ",Number(l.ram_usage/1024).toFixed(2),"/",Number(l.ram_quota/1024).toFixed(2),"KB")),C.default.createElement(i.default,{xl:8,lg:8,md:8,sm:24,xs:24},C.default.createElement(_.default,{width:80,type:"circle",percent:Number(100*l.cpu_limit.used/l.cpu_limit.max).toFixed(2),format:function(e){return e+" %"}}),C.default.createElement("p",null,"CPU ",Number(l.cpu_limit.used/100).toFixed(2),"us/",Number(l.cpu_limit.max/1e3).toFixed(2),"ms "),C.default.createElement("p",null,H.default.get("comm.stake"),":",l?l.total_resources.cpu_weight:"")),C.default.createElement(i.default,{xl:8,lg:8,md:8,sm:24,xs:24},C.default.createElement(_.default,{width:80,type:"circle",percent:Number(100*l.net_limit.used/l.net_limit.max).toFixed(2),format:function(e){return e+" %"}}),C.default.createElement("p",null,H.default.get("comm.net")," ",Number(l.net_limit.used).toFixed(2),"bytes/",Number(l.net_limit.max/1024).toFixed(2),"KB "),C.default.createElement("p",null,H.default.get("comm.stake"),":",l?l.total_resources.net_weight:""," ")))):"")}}]),t}(N.Component);q.propTypes={},t.default=(0,w.connect)(n)(q),e.exports=t.default},1687:function(e,t,a){"use strict";a(17),a(1688)},1688:function(e,t){},1689:function(e,t){e.exports={activitiesList:"activitiesList___1j_xv",username:"username___2JmOE",event:"event___9Wx3v",pageHeaderContent:"pageHeaderContent___2dFrJ",avatar:"avatar___3GiCQ",content:"content___3hAHo",contentTitle:"contentTitle___3vZx7",extraContent:"extraContent___1zvAx",statItem:"statItem___JmUUz",members:"members___2Bipj",member:"member___1Xs5o",projectList:"projectList___3G4Tw",cardTitle:"cardTitle___3MmGG",titlename:"titlename___2f6Wf",projectGrid:"projectGrid___1OqEw",projectItemContent:"projectItemContent___3dOXo",datetime:"datetime___2lFrG",enterlink:"enterlink___2RpnM",item:"item___1-jbX",link:"link___1nsb2",cover:"cover___3ORjw",title:"title___2rOTT",activeCard:"activeCard___2HljI"}}});