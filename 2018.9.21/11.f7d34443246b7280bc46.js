webpackJsonp([11],{1672:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(69),o=a(n),c=r(331),s=a(c),u=r(83),i=a(u),l=(r(21),r(114)),d=r(330);r(1679);t.default=(0,i.default)(l.detailModel,{namespace:"manageresource",state:{tabflag:"topicedit",abibuffer:null,wasmbuffer:null},subscriptions:{},effects:{create:o.default.mark(function e(t,r){var a,n,c,u,i,l,p,f,b=t.payload,m=(r.call,r.put),w=r.select;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(function(e){return e.mainapp});case 2:return a=e.sent,n=a.scatter,c=a.eosClient,u=a.activeNetwork,i=a.eosAccount,l=a.eosAuthority,p={authorization:[i+"@"+l]},console.log("create account eosClient:",c),console.log("create account permissionoptions:",p),console.log("create account payload:",b),e.prev=12,e.next=15,c.transaction(function(e){e.newaccount({creator:b.creator,name:b.newuser,owner:b.ownerkey,active:b.activekey}),e.buyrambytes({payer:b.creator,receiver:b.newuser,bytes:Number(b.ram)}),e.delegatebw({from:b.creator,receiver:b.newuser,stake_net_quantity:Number(b.net).toFixed(4).toString()+" EOS",stake_cpu_quantity:Number(b.cpu).toFixed(4).toString()+" EOS",transfer:b.transfer?1:0})});case 15:if(!(f=e.sent)){e.next=22;break}return(0,d.msgSuccess)(f.transaction_id),e.next=20,m({type:"setdata"});case 20:e.next=23;break;case 22:(0,d.msgError)();case 23:e.next=30;break;case 25:e.prev=25,e.t0=e.catch(12),console.error("An create eosAccount error occured - see details below:"),console.error(e.t0),(0,d.msgError)((0,s.default)(e.t0));case 30:case"end":return e.stop()}},e,this,[[12,25]])}),setdata:o.default.mark(function e(t,r){var a=(t.payload,r.call,r.put);r.select;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({type:"updatedata",payload:{myitem:[],detailid:"",lscontent:"",lsimages:[],tabflag:"topicedit",modaltype:"create",abibuffer:null,wasmbuffer:null}});case 2:case"end":return e.stop()}},e,this)})}}),e.exports=t.default},1679:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getScatterEosClient=void 0;var a=r(333),n=function(e){return e&&e.__esModule?e:{default:e}}(a);t.getScatterEosClient=function(e,t){var r={protocol:t.endpoint.protocol,blockchain:t.network.network,host:t.endpoint.url,port:t.endpoint.port,chainId:t.network.chainId},a={broadcast:!0,sign:!0,chainId:t.network.chainId},o=t.endpoint.protocol;return e.eos(r,n.default,a,o)}}});