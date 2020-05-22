(this.webpackJsonpzaliczenie_wsb=this.webpackJsonpzaliczenie_wsb||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(10),i=a(20),c=a.n(i);function l(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}var o="https://ninjaorganizer.azurewebsites.net",u=a(18),m=Object(u.a)(),d=a(36),h=a(76),p=a(77),b="ALERT_SUCCESS",v="ALERT_ERROR",E="ALERT_CLEAR",g="USERS_REGISTER_REQUEST",f="USERS_REGISTER_SUCCESS",y="USERS_REGISTER_FAILURE",k="USERS_LOGIN_REQUEST",j="USERS_LOGIN_SUCCESS",N="USERS_LOGIN_FAILURE",O="USERS_LOGOUT",C="USERS_GETALL_REQUEST",S="USERS_GETALL_SUCCESS",w="USERS_GETALL_FAILURE",z="USERS_DELETE_REQUEST",T="USERS_DELETE_SUCCESS",x="USERS_DELETE_FAILURE",I=JSON.parse(localStorage.getItem("user")),U=I?{loggedIn:!0,user:I}:{};var B=a(55),A=a(16);var L=Object(d.c)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return{loggingIn:!0,user:t.user};case j:return{loggedIn:!0,user:t.user};case N:case O:return{};default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{registering:!0};case f:case y:return{};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{loading:!0};case S:return{items:t.users};case w:return{error:t.error};case z:return Object(A.a)(Object(A.a)({},e),{},{items:e.items.map((function(e){return e.id===t.id?Object(A.a)(Object(A.a)({},e),{},{deleting:!0}):e}))});case T:return{items:e.items.filter((function(e){return e.id!==t.id}))};case x:return Object(A.a)(Object(A.a)({},e),{},{items:e.items.map((function(e){if(e.id===t.id){e.deleting;var a=Object(B.a)(e,["deleting"]);return Object(A.a)(Object(A.a)({},a),{},{deleteError:t.error})}return e}))});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return{type:"alert-success",message:t.message};case v:return{type:"alert-danger",message:t.message};case E:return{};default:return e}}}),R=Object(p.createLogger)(),D=Object(d.d)(L,Object(d.a)(h.a,R)),_=a(5),K=a(6),M=a(8),G=a(7),H=a(14);var W={success:function(e){return{type:b,message:e}},error:function(e){return{type:v,message:e}},clear:function(){return{type:E}}};var F={login:function(e,t){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})};return fetch(o+"/users/authenticate",a).then(J,P).then((function(e){return e&&e.token&&localStorage.setItem("user",JSON.stringify(e)),e}))},logout:function(){localStorage.removeItem("user")},register:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch(o+"/users/register",t).then(J,P)},getAll:function(){var e={method:"GET",headers:l()};return fetch(o+"/users",e).then(J,P)},getById:function(e){var t={method:"GET",headers:l()};return fetch(o+"/users/"+e,t).then(J,P)},update:function(e){var t={method:"PUT",headers:Object(A.a)(Object(A.a)({},l()),{},{"Content-Type":"application/json"}),body:JSON.stringify(e)};return fetch(o+"/users/"+e.id,t).then(J,P)},delete:function(e){var t={method:"DELETE",headers:l()};return fetch(o+"/users/"+e,t).then(J,P)}};function J(e){return new Promise((function(t,a){if(e.ok){var n=e.headers.get("content-type");n&&n.includes("application/json")?e.json().then((function(e){return t(e)})):t()}else e.text().then((function(e){return a(e)}))}))}function P(e){return Promise.reject(e&&e.message)}var Z={login:function(e,t){return function(a){a({type:k,user:{username:e}}),F.login(e,t).then((function(e){a(function(e){return{type:j,user:e}}(e)),m.push("/")}),(function(e){a(function(e){return{type:N,error:e}}(e)),a(W.error(e))}))}},logout:function(){return F.logout(),{type:O}},register:function(e){return function(t){t(function(e){return{type:g,user:e}}(e)),F.register(e).then((function(){t(function(e){return{type:f,user:e}}()),m.push("/login"),t(W.success("Zarejestrowa\u0142e\u015b si\u0119 do NingaTask!"))}),(function(e){t(function(e){return{type:y,error:e}}(e)),t(W.error(e))}))}},getAll:function(){return function(e){e({type:C}),F.getAll().then((function(t){return e(function(e){return{type:S,users:e}}(t))}),(function(t){return e(function(e){return{type:w,error:e}}(t))}))}},delete:function(e){return function(t){t(function(e){return{type:z,id:e}}(e)),F.delete(e).then((function(){t(function(e){return{type:T,id:e}}(e))}),(function(a){t(function(e,t){return{type:x,id:e,error:t}}(e,a))}))}}};var Q=function(e){var t=e.component,a=Object(B.a)(e,["component"]);return r.a.createElement(H.b,Object.assign({},a,{render:function(e){return localStorage.getItem("user")?r.a.createElement(t,e):r.a.createElement(H.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},$=a(45),q=(a(59),a(29)),V=a(17),X=a(28),Y=(a(65),a(23)),ee=a(13),te=a(15),ae=a.n(te),ne=a(120),re=a(37),se=function(e){Object(M.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).handleChange=function(e){e.preventDefault(),n.setState(Object(Y.a)({},e.target.name,e.target.value))},n.state={title:"",description:"",tables:[]},n.handleChange=n.handleChange.bind(Object(ee.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(ee.a)(n)),n}return Object(K.a)(a,[{key:"handleSubmit",value:function(e){var t=this,a=this.props.user.token,n=this.props.user.id,r={headers:{Authorization:"Bearer ".concat(a)}},s={title:this.state.title,description:this.state.description};ae.a.post("https://ninjaorganizer.azurewebsites.net/users/".concat(n,"/taskboards/"),s,r).then((function(a){var n=a.data;t.setState({tables:n}),e.preventDefault()})).catch((function(e){}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"formContainer"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"formItem"},r.a.createElement("input",{type:"title",name:"title",value:this.state.title,onChange:this.handleChange,placeholder:"Wpisz tytu\u0142 tablicy"})),r.a.createElement("div",{className:"formItem"},r.a.createElement("input",{type:"content",name:"description",value:this.state.description,onChange:this.handleChange,placeholder:"Kr\xf3tki"})),r.a.createElement("div",null,r.a.createElement(ne.a,{type:" submit",className:"ml-2"},r.a.createElement(re.a,null)))))}}]),a}(n.Component);Object(s.b)((function(e){var t=e.users;return{user:e.authentication.user,users:t}}))(se);var ie=a(121),ce=function(e){Object(M.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={users:[]},n}return Object(K.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.user.token,a={headers:{Authorization:"Bearer ".concat(t)}},n=this.props.user.id;ae.a.get("https://ninjaorganizer.azurewebsites.net/users/".concat(n,"/"),a).then((function(t){return e.setState({users:t.data})}))}},{key:"render",value:function(){return r.a.createElement(ie.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(ie.a.Header,{closeButton:!0},r.a.createElement(ie.a.Title,{id:"contained-modal-title-vcenter"},"Nazwa u\u017cytkownika: ",this.props.user.firstName)),r.a.createElement(ie.a.Body,null,r.a.createElement("p",null,"Liczba aktywnych tablic:  ",this.state.users.numberOfTaskboards," "),r.a.createElement("p",null,"Liczba aktywnych zada\u0144:  ",this.state.users.numberOfTaskboards," ")),r.a.createElement(ie.a.Footer,null,r.a.createElement(ne.a,{variant:"danger",onClick:this.props.onHide},"Zamknij")))}}]),a}(n.Component),le=function(e){Object(M.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={addModalShow:!1},n}return Object(K.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(q.a,{className:"customNaw ",collapseOnSelect:!0,expand:"lg",variant:"dark"},r.a.createElement(q.a.Brand,{href:"/",className:"style1"},"NinjaTask",r.a.createElement(X.a,null)),r.a.createElement(q.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(q.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(V.a,{className:"mr-auto"},r.a.createElement(se,{user:this.props.user,onChange:this.handleChange})),r.a.createElement(V.a,null,r.a.createElement(V.a.Link,{id:"login-name",onClick:function(){return e.setState({addModalShow:!0})}},"Cze\u015b\u0107! ",this.props.user.firstName),r.a.createElement(ce,{user:this.props.user,show:this.state.addModalShow,onHide:function(){return e.setState({addModalShow:!1})}}),r.a.createElement(V.a.Link,{href:"#deets",id:"ikona-ninja"},r.a.createElement(X.a,null)),r.a.createElement(V.a.Link,{eventKey:2,href:"/login"},"Wyloguj")))))}}]),a}(n.Component);Object(s.b)((function(e){var t=e.users;return{user:e.authentication.user,users:t}}))(le);function oe(){return r.a.createElement("div",null)}a(74);var ue=a(38),me=a(22),de=a(84),he=function(e){Object(M.a)(a,e);var t=Object(G.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(K.a)(a,[{key:"render",value:function(){var e=this.props.table,t=e.id,a=e.title,n=e.description,s=this.props.table.id;return r.a.createElement("div",null,r.a.createElement("div",{className:"cardCustomList text-white mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement(de.a,{duration:300,easing:"ease-in-out"},r.a.createElement("h2",{className:"card-title",key:a},a))),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text",onChange:this.props.markcomplete.bind(this,t)},"Opis: ",n)),r.a.createElement("div",{className:"card-footer"},r.a.createElement(me.b,{to:"/taskboards/".concat(s)}," Lista zada\u0144 "),r.a.createElement("div",{className:"btnDetails btnDelete"},r.a.createElement(ue.a,{onClick:this.props.deleteTable.bind(this,t)})))))}}]),a}(n.Component),pe=function(e){Object(M.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).keyCount=0,n.getKey=n.getKey.bind(Object(ee.a)(n)),n}return Object(K.a)(a,[{key:"getKey",value:function(){return this.keyCount++}},{key:"render",value:function(){var e=this;return this.props.tables.map((function(t){return r.a.createElement(he,{key:e.getKey(),markcomplete:e.props.markcomplete,deleteTable:e.props.deleteTable,setUpdate:e.props.setUpdate,onChange:e.handleChange,table:t,user:e.props.user,history:e.props.history})}))}}]),a}(n.Component);Object(s.b)((function(e){return{loggingIn:e.authentication.loggingIn}}))(pe),a(42);var be=function(e){Object(M.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).deleteTable=function(e){n.props.dispatch(Z.getAll());var t=n.props.user.token,a={headers:{Authorization:"Bearer ".concat(t)}},r=n.props.user.id;ae.a.delete("https://ninjaorganizer.azurewebsites.net/users/".concat(r,"/taskboards/").concat(e),a).then((function(t){return n.setState({tables:Object($.a)(n.state.tables.filter((function(t){return t.id!==e})))})}))},n.setUpdate=function(e,t){var a=n.props.user.token,r={headers:{Authorization:"Bearer ".concat(a)}},s=n.props.user.id;ae.a.put("https://ninjaorganizer.azurewebsites.net/users/".concat(s,"/taskboards/").concat(t),r).then((function(e){})).catch((function(e){}))},n.markcomplete=function(e){n.setState({tables:n.state.tables.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},n.state={tables:[]},n}return Object(K.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Z.getAll());var t=this.props.user.token,a={headers:{Authorization:"Bearer ".concat(t)}},n=this.props.user.id;ae.a.get("https://ninjaorganizer.azurewebsites.net/users/".concat(n,"/taskboards/"),a).then((function(t){return e.setState({tables:t.data})}))}},{key:"handleDeleteUser",value:function(e){var t=this;return function(a){return t.props.dispatch(Z.delete(e))}}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(le,{tables:this.state.tables,markcomplete:this.markcomplete,deleteTable:this.deleteTable,setUpdate:this.setUpdate,onChange:this.handleChange,user:e}),r.a.createElement("section",{className:"sectionText"},r.a.createElement("div",{className:"textNewBoard"})),r.a.createElement("div",{className:"newTaskTitle"},r.a.createElement("h4",null,"Aktywne tablice")),r.a.createElement("div",{className:"tablica "},r.a.createElement("div",{className:"d-flex justify-content-start flex-wrap cardCustom"},r.a.createElement(pe,{tables:this.state.tables,markcomplete:this.markcomplete,deleteTable:this.deleteTable,setUpdate:this.setUpdate,onChange:this.handleChange,user:e,table:this.state.table}))),r.a.createElement(oe,null))}}]),a}(r.a.Component);var ve=Object(s.b)((function(e){var t=e.users;return{user:e.authentication.user,users:t}}))(be),Ee=function(e){Object(M.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).handleChange=function(e){e.preventDefault(),n.setState(Object(Y.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){var t=n.props.history.location.pathname,a=t.lastIndexOf("/"),r=t.substring(a+1),s=n.props.user.id,i=n.props.user.token,c={headers:{Authorization:"Bearer ".concat(i)}},l={title:n.state.title,content:n.state.content,priority:n.state.priority,state:n.state.state};ae.a.post("https://ninjaorganizer.azurewebsites.net/users/".concat(s,"/taskboards/").concat(r,"/cards/"),l,c).then((function(e){var t=e.data;n.setState({cards:t})})).catch((function(e){console.log(e)}))},n.state={title:"",content:"",priority:1,state:1,cards:[]},n.handleChange=n.handleChange.bind(Object(ee.a)(n)),n}return Object(K.a)(a,[{key:"onChange",value:function(e){this.setState({priority:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.content;return r.a.createElement("div",{className:"formContainer"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"formItem "},r.a.createElement("input",{type:"title",name:"title",value:t,onChange:this.handleChange,placeholder:"Wpisz tytu\u0142 zadania"})),r.a.createElement("div",{className:"formItem"},r.a.createElement("input",{type:"content",name:"content",value:a,onChange:this.handleChange,placeholder:"Wpisz tre\u015b\u0107 zadania"})),r.a.createElement("div",{className:"formItem mr-2 selectBoxCus selectpicker"},r.a.createElement("select",{value:this.state.value,onChange:this.onChange.bind(this),className:"form-control selectBoxCus"},r.a.createElement("option",null,"Prioritet.."),r.a.createElement("option",{value:"1"},"Niski"),r.a.createElement("option",{value:"2"},"\u015aredni"),r.a.createElement("option",{value:"3"},"Wysoki"))),r.a.createElement("div",null,r.a.createElement(ne.a,{type:"submit",className:"ml-2",onClick:this.props.onHide},r.a.createElement(re.a,null)))))}}]),a}(n.Component);Object(s.b)((function(e){var t=e.users;return{user:e.authentication.user,users:t}}))(Ee);var ge=function(e){Object(M.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={addModalShow:!1},n}return Object(K.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(q.a,{className:"customNaw ",collapseOnSelect:!0,expand:"lg",variant:"dark"},r.a.createElement(q.a.Brand,{href:"/",className:"style1"},"NinjaTask",r.a.createElement(X.a,null)),r.a.createElement(q.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(q.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(V.a,{className:"mr-auto"},r.a.createElement(Ee,{user:this.props.user,onChange:this.handleChange,cards:this.props.tableID,key:this.props.card,tables:this.props.user.taskboards,history:this.props.history,table:this.props.table})),r.a.createElement(V.a,null,r.a.createElement(V.a.Link,{id:"login-name",onClick:function(){return e.setState({addModalShow:!0})}},"Cze\u015b\u0107! ",this.props.user.firstName),r.a.createElement(ce,{user:this.props.user,show:this.state.addModalShow,onHide:function(){return e.setState({addModalShow:!1})}}),r.a.createElement(V.a.Link,{href:"#deets",id:"ikona-ninja"},r.a.createElement(X.a,null)),r.a.createElement(V.a.Link,{eventKey:2,href:"/login"},"Wyloguj")))))}}]),a}(n.Component),fe=(a(47),function(e){Object(M.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){var t=n.props.table,a=n.props.user.id,r=n.props.user.token,s={headers:{Authorization:"Bearer ".concat(r)}},i={title:n.state.title,content:n.state.content,priority:n.state.priority,state:n.state.state},c=n.props.id;ae.a.patch("https://ninjaorganizer.azurewebsites.net/users/".concat(a,"/taskboards/").concat(t,"/cards/").concat(c),i,s).then((function(e){var t=e.data;n.setState({cards:t})})).catch((function(e){console.log(n.props)}))},n.handleChange=function(e){n.setState(Object(Y.a)({},e.target.name,e.target.value))},n.state={users:[],card:[],table:[],title:"",content:"",priority:"",state:"",cards:[]},n.handleChange=n.handleChange.bind(Object(ee.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(ee.a)(n)),n}return Object(K.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.table,a=this.props.user.token,n={headers:{Authorization:"Bearer ".concat(a)}},r=this.props.user.id;ae.a.get("https://ninjaorganizer.azurewebsites.net/users/".concat(r,"/taskboards/").concat(t,"/cards"),n).then((function(t){return e.setState({cards:t.data})}))}},{key:"onChange",value:function(e){this.setState({priority:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.content,n=e.state,s=e.priority;return r.a.createElement(ie.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(ie.a.Header,{closeButton:!0},r.a.createElement(ie.a.Title,{id:"contained-modal-title-vcenter"},"Edycja zadania:")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"cardModalEdit "},r.a.createElement("input",{type:"title",name:"title",value:t,onChange:this.handleChange,placeholder:"Wpisz tytu\u0142 zadania"}),r.a.createElement("input",{type:"content",name:"content",value:a,onChange:this.handleChange,placeholder:"Wpisz tre\u015b\u0107 zadania"}),r.a.createElement("input",{type:"number",name:"state",value:n,onChange:this.handleChange,placeholder:"Wybierz stan (1 -> do zrobienia , 2 -> w procesie 3 -> wykonane)"}),r.a.createElement("input",{type:"number",name:"priority",value:s,onChange:this.handleChange,placeholder:"Wybierz prioritet (1 -> niski, 2 -> \u015bredni, 3-> wysoki)"})),r.a.createElement(ie.a.Footer,null,r.a.createElement(ne.a,{type:"submit",className:"ml-2",onClick:this.props.onHide},r.a.createElement(re.a,null)))))}}]),a}(n.Component));Object(s.b)((function(e){var t=e.users;return{user:e.authentication.user,users:t}}))(fe);var ye=function(e){Object(M.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={users:[],addModalShow:!1},n}return Object(K.a)(a,[{key:"render",value:function(){var e=this,t=this.props.card,a=t.id,n=t.title,s=t.content,i=t.priority,c=t.state;return r.a.createElement("div",{id:this.props.card.id},r.a.createElement("div",{className:"cardCustomList text-white mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title",onChange:this.props.markcomplete.bind(this,a),key:n},n)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text",onChange:this.props.markcomplete.bind(this,a)},s)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("p",null),r.a.createElement("div",{className:"btnDetails d-flex "}),r.a.createElement("p",{className:"card-text",onChange:this.props.markcomplete.bind(this,a)},"Prioritet ",i),r.a.createElement("p",{className:"card-text",onChange:this.props.markcomplete.bind(this,a)},"Status ",c),r.a.createElement(V.a,{className:"acceptBtnEdit"},r.a.createElement("button",{onClick:function(){return e.setState({addModalShow:!0})}}," \u270e"),r.a.createElement(fe,{user:this.props.user,show:this.state.addModalShow,onHide:function(){e.setState({addModalShow:!1}),window.location.reload(!1)},key:this.props.card,card:this.props.card.id,id:this.props.card.id,table:this.props.tables})),r.a.createElement("div",{className:"acceptBtn"},r.a.createElement("button",{onClick:this.props.setUpdate.bind(this,a)}," \u2713 ")),r.a.createElement("div",{className:"btnDetails btnDelete"},r.a.createElement(ue.a,{onClick:this.props.deleteCard.bind(this,a)})))))}}]),a}(n.Component),ke=function(e){Object(M.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).keyCount=0,n.getKey=n.getKey.bind(Object(ee.a)(n)),n}return Object(K.a)(a,[{key:"getKey",value:function(){return this.keyCount++}},{key:"render",value:function(){var e=this;return this.props.cards.filter((function(e){return e.state<3})).map((function(t){return r.a.createElement(ye,{key:e.getKey(),markcomplete:e.props.markcomplete,deleteCard:e.props.deleteCard,setUpdate:e.props.setUpdate,card:t,user:e.props.user,tables:e.props.tableID})}))}}]),a}(n.Component);Object(s.b)((function(e){return{loggingIn:e.authentication.loggingIn}}))(ke);var je=function(e){Object(M.a)(a,e);var t=Object(G.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(K.a)(a,[{key:"render",value:function(){var e=this.props.card,t=e.id,a=e.title,n=e.content,s=e.priority,i=e.state;return r.a.createElement("div",null,r.a.createElement("div",{className:"cardCustomList arch text-white mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title",onChange:this.props.markcomplete.bind(this,t)},a),r.a.createElement("div",{className:"btnDetails btnDelete"},r.a.createElement(ue.a,{onClick:this.props.deleteCard.bind(this,t)}))),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text",onChange:this.props.markcomplete.bind(this,t)},n)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("p",null),r.a.createElement("div",{className:"btnDetails d-flex "}),r.a.createElement("p",{className:"card-text",onChange:this.props.markcomplete.bind(this,t)},"Prioritet: ",s),r.a.createElement("p",{className:"card-text",onChange:this.props.markcomplete.bind(this,t)},"Status: ",i))))}}]),a}(n.Component),Ne=function(e){Object(M.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).keyCount=0,n.getKey=n.getKey.bind(Object(ee.a)(n)),n}return Object(K.a)(a,[{key:"getKey",value:function(){return this.keyCount++}},{key:"render",value:function(){var e=this;return this.props.cards.filter((function(e){return e.state>2})).map((function(t){return r.a.createElement(je,{key:e.getKey(),markcomplete:e.props.markcomplete,deleteCard:e.props.deleteCard,setUpdate:e.setUpdate,card:t,user:e.props.user})}))}}]),a}(n.Component);Object(s.b)((function(e){return{loggingIn:e.authentication.loggingIn}}))(Ne);var Oe=function(e){Object(M.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).deleteCard=function(e){n.props.dispatch(Z.getAll());var t=n.props.user.token,a={headers:{Authorization:"Bearer ".concat(t)}},r=n.props.user.id,s=n.props.location.pathname,i=s.lastIndexOf("/"),c=s.substring(i+1);ae.a.delete("https://ninjaorganizer.azurewebsites.net/users/".concat(r,"/taskboards/").concat(c,"/cards/").concat(e),a).then((function(t){return n.setState({cards:Object($.a)(n.state.cards.filter((function(t){return t.id!==e})))})}))},n.setUpdate=function(e){var t=n.props.user.token,a={headers:{Authorization:"Bearer ".concat(t)}},r=n.props.user.id,s=n.props.location.pathname,i=s.lastIndexOf("/"),c=s.substring(i+1);ae.a.patch("https://ninjaorganizer.azurewebsites.net/users/".concat(r,"/taskboards/").concat(c,"/cards/").concat(e),{state:3},a).then((function(t){return n.setState({cards:Object($.a)(n.state.cards.filter((function(t){return t.id!==e})))})})),window.location.reload(!1)},n.markcomplete=function(e){n.setState({cards:n.state.cards.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},n.state={cards:[],state:"",showing:!0},n}return Object(K.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.pathname,a=t.lastIndexOf("/"),n=t.substring(a+1),r=this.props.user.token,s={headers:{Authorization:"Bearer ".concat(r)}},i=this.props.user.id;ae.a.get("https://ninjaorganizer.azurewebsites.net/users/".concat(i,"/taskboards/").concat(n,"/cards"),s).then((function(t){return e.setState({cards:t.data,tables:n})}))}},{key:"handleDeleteUser",value:function(e){var t=this;return function(a){return t.props.dispatch(Z.delete(e))}}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,{user:e,tables:this.state.tables,key:this.props.card,history:this.props.history,cards:this.state.cards}),r.a.createElement("div",{className:"cardCustom"}),r.a.createElement("div",{className:"newTaskTitle "},r.a.createElement("h4",null,"Zadania do wykonania")),r.a.createElement("div",{className:"tablica"},r.a.createElement("div",{className:" cardCustom"},r.a.createElement("div",{className:"col-12 cardCustom"},r.a.createElement(ke,{key:this.props.card,cards:this.state.cards,markcomplete:this.markcomplete,deleteCard:this.deleteCard,setUpdate:this.setUpdate,user:e,history:this.props.history,tableID:this.state.tables})))),r.a.createElement("hr",null),r.a.createElement("div",{className:"newTaskTitle mt-5"},r.a.createElement("h4",null,"Zadania wykonane")),r.a.createElement("div",{className:"tablicaArch "},r.a.createElement("div",{className:"cardCustom col-12"},r.a.createElement(Ne,{key:this.props.card,cards:this.state.cards,markcomplete:this.markcomplete,deleteCard:this.deleteCard,setUpdate:this.setUpdate,onChange:this.handleChange,user:e,tables:this.props.tables}))),r.a.createElement("div",{className:"retunButton"},r.a.createElement(me.b,{to:"/"},r.a.createElement(ne.a,null,"\u2190"))),r.a.createElement(oe,null))}}]),a}(r.a.Component);var Ce=Object(s.b)((function(e){var t=e.users;return{user:e.authentication.user,users:t}}))(Oe),Se=a(40),we=a(53),ze=function(e){Object(M.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).props.dispatch(Z.logout()),n.state={username:"",password:"",submitted:!1},n.handleChange=n.handleChange.bind(Object(ee.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(ee.a)(n)),n}return Object(K.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(Y.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state,a=t.username,n=t.password,r=this.props.dispatch;a&&n&&r(Z.login(a,n))}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.submitted;return r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"authBox"},r.a.createElement("div",{className:"leftBox"},r.a.createElement("div",{className:"bgGreen"}),r.a.createElement("div",{className:"imageAuth"}),r.a.createElement("div",{className:"imageText bold style1"},"NinjaTask",r.a.createElement(X.a,null)),r.a.createElement("div",{className:"imageText style2"},"Lepsza strona zarz\u0105dzania!")),r.a.createElement("div",{className:"rightBoxLogin"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"titleAuth mb-0"},"LET'S KICK IT!"),r.a.createElement("div",{className:"titleAuth2"},"Je\u015bli nie masz jeszcze konta, ",r.a.createElement(me.b,{to:"/register"}," zarejestruj si\u0119! ")),r.a.createElement("div",{className:"inputSBox form-group"+(n&&!t?" has-error":"")},r.a.createElement("input",{type:"text",className:"inputS",placeholder:"U\u017cytkownik",name:"username",value:t,onChange:this.handleChange}),n&&!t&&r.a.createElement("div",{className:"help-block"},"Nazwa u\u017cytkownika jest wymagana")),r.a.createElement("div",{className:"inputSBox form-group"+(n&&!a?" has-error":"")},r.a.createElement("input",{type:"password",className:"inputS",placeholder:"Has\u0142o",name:"password",value:a,onChange:this.handleChange}),n&&!a&&r.a.createElement("div",{className:"help-block"},"Has\u0142o jest wymagane")),r.a.createElement("div",{className:"contentBox"},r.a.createElement("div",{className:"checkboxBox"}),r.a.createElement("div",{className:"text1"},"Zapomnia\u0142e\u015b has\u0142o?")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btnAuth"},"Zaloguj")),r.a.createElement("div",{className:"borderBox"},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"text2 or"}," LUB ")),r.a.createElement("div",{className:"socialMediaBox"},r.a.createElement("div",{className:"icAuth"},r.a.createElement(Se.a,null)),r.a.createElement("div",{className:"icAuth"},r.a.createElement(we.a,null)),r.a.createElement("div",{className:"icAuth"},r.a.createElement(Se.b,null)))))))}}]),a}(r.a.Component);var Te=Object(s.b)((function(e){return{loggingIn:e.authentication.loggingIn}}))(ze),xe=function(e){Object(M.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={user:{firstName:"",lastName:"",username:"",numberOfTaskboards:"",password:""},submitted:!1},n.handleChange=n.handleChange.bind(Object(ee.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(ee.a)(n)),n}return Object(K.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value,r=this.state.user;this.setState({user:Object(A.a)(Object(A.a)({},r),{},Object(Y.a)({},a,n))})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state.user,a=this.props.dispatch;t.firstName&&t.lastName&&t.username&&t.password&&a(Z.register(t))}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.submitted;return r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"authBox"},r.a.createElement("div",{className:"leftBox leftBoxregister"},r.a.createElement("div",{className:"bgGreen"}),r.a.createElement("div",{className:"imageAuth"}),r.a.createElement("div",{className:"imageText bold style1"},"NinjaTask",r.a.createElement(X.a,null)),r.a.createElement("div",{className:"imageText style2"},"Lepsza strona zarz\u0105dzania!")),r.a.createElement("div",{className:"rightBoxRegister"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"titleAuth mb-0"},"LET'S KICK IT!"),r.a.createElement("div",{className:"titleAuth2"},r.a.createElement("i",null,'"Ka\u017cda praca jest dobra, o ile jest dobrze zarz\u0105dzana."')),r.a.createElement("div",{className:"inputSBox form-group "+(a&&!t.firstName?" has-error":"")},r.a.createElement("input",{type:"text",className:"inputS",placeholder:"Imi\u0119 ",name:"firstName",value:t.firstName,onChange:this.handleChange}),a&&!t.firstName&&r.a.createElement("div",{className:"help-block"},"Imie jest wymagane")),r.a.createElement("div",{className:"inputSBox form-group"+(a&&!t.lastName?" has-error":"")},r.a.createElement("input",{type:"text",className:"inputS",placeholder:"Nazwisko ",name:"lastName",value:t.lastName,onChange:this.handleChange}),a&&!t.lastName&&r.a.createElement("div",{className:"help-block"},"Nazwisko jest wymagane")),r.a.createElement("div",{className:"inputSBox form-group"+(a&&!t.username?" has-error":"")},r.a.createElement("input",{type:"text",className:"inputS",placeholder:"Nazwa u\u017cytkownika",name:"username",value:t.username,onChange:this.handleChange}),a&&!t.username&&r.a.createElement("div",{className:"help-block"},"Nazwa u\u017cytkownika jest wymagana")),r.a.createElement("div",{className:"inputSBox form-group"+(a&&!t.password?" has-error":"")},r.a.createElement("input",{type:"password",className:"inputS",placeholder:"Has\u0142o",name:"password",value:t.password,onChange:this.handleChange}),a&&!t.password&&r.a.createElement("div",{className:"help-block"},"Has\u0142o jest wymagane")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btnAuth"},"Zarejestruj si\u0119"),r.a.createElement(me.b,{to:"/login",className:"btn btn-link "},"Anuluj")),r.a.createElement("div",{className:"borderBox"},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"text2 or"}," LUB ")),r.a.createElement("div",{className:"socialMediaBox"},r.a.createElement("div",{className:"icAuth"},r.a.createElement(Se.a,null)),r.a.createElement("div",{className:"icAuth"},r.a.createElement(we.a,null)),r.a.createElement("div",{className:"icAuth"},r.a.createElement(Se.b,null)))))))}}]),a}(r.a.Component);var Ie=Object(s.b)((function(e){return{registering:e.registration.registering}}))(xe),Ue=function(e){Object(M.a)(a,e);var t=Object(G.a)(a);function a(e){var n;Object(_.a)(this,a);var r=(n=t.call(this,e)).props.dispatch;return m.listen((function(e,t){r(W.clear())})),n}return Object(K.a)(a,[{key:"render",value:function(){var e=this.props.alert;return r.a.createElement(r.a.Fragment,null,e.message&&r.a.createElement("div",{className:"alert ".concat(e.type)},e.message),r.a.createElement(H.d,null,r.a.createElement(H.c,{history:m},r.a.createElement("div",null,r.a.createElement(Q,{exact:!0,path:"/",component:ve}),r.a.createElement(H.b,{path:"/taskboards",component:Ce,user:this.user,tableID:this.tableID,history:this.props.history}),r.a.createElement(H.b,{path:"/login",component:Te}),r.a.createElement(H.b,{path:"/register",component:Ie}),r.a.createElement(H.b,{path:"/userpage",component:ce,user:this.user,tableID:this.tableID})))))}}]),a}(r.a.Component);var Be=Object(s.b)((function(e){return{alert:e.alert}}))(Ue);a(116),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae=a(122);c.a.render(r.a.createElement(Ae.a,null,r.a.createElement(s.a,{store:D},r.a.createElement(me.a,null,r.a.createElement(Be,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,a){},47:function(e,t,a){},65:function(e,t,a){},74:function(e,t,a){},86:function(e,t,a){e.exports=a(117)}},[[86,1,2]]]);
//# sourceMappingURL=main.7ef59865.chunk.js.map