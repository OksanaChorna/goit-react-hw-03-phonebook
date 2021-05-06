(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={contactItem:"ContactsListItem_contactItem__1wnOx",buttonDel:"ContactsListItem_buttonDel__9nuqh"}},13:function(t,e,n){t.exports={button:"ContactsForm_button__25cQN"}},14:function(t,e,n){t.exports={contactList:"ContactsList_contactList__2dfNq"}},15:function(t,e,n){t.exports={container:"Container_container__vaYDc"}},22:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),i=(n(21),n(22),n(16)),s=n(8),u=n(3),l=n(4),d=n(6),m=n(5),b=n(2),h=n.n(b),j=n(13),f=n.n(j),p=n(9),C=n.n(p),O=n(0),v=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).initialState={name:"",number:""},t.state={name:"",number:""},t.nameInputId=C.a.generate(),t.numberInputId=C.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n={id:C.a.generate(),name:t.state.name,number:t.state.number};t.props.onSubmit(n),t.reset()},t.reset=function(){t.setState(t.initialState)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(O.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleChange,id:this.nameInputId})]}),Object(O.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(O.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handleChange,id:this.numberInputId})]}),Object(O.jsx)("button",{className:f.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component);v.PropsType={onSubmit:h.a.func.isRequired};var x=v,g=n(11),y=n.n(g),I=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteContact;return Object(O.jsxs)("li",{className:y.a.contactItem,children:[n,": ",a,Object(O.jsx)("button",{className:y.a.buttonDel,type:"submit",onClick:function(){return c(e)},children:"Delete"})]})};I.prototype={id:h.a.number.isRequired,name:h.a.string.isRequired,number:h.a.number.isRequired,onDeleteContact:h.a.func.isRequired};var S=I,_=n(14),D=n.n(_),L=function(t){var e=t.findContact,n=t.onDeleteContact;return Object(O.jsx)("ul",{className:D.a.contactList,children:e().map((function(t){var e=t.id,a=t.name,c=t.number;return Object(O.jsx)(S,{id:e,name:a,number:c,onDeleteContact:n},e)}))})};L.prototype={findContact:h.a.func.isRequired,onDeleteContact:h.a.func.isRequired};var k=L,q=n(15),w=n.n(q),N=function(t){var e=t.children;return Object(O.jsx)("div",{className:w.a.container,children:e})},A=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{children:"Find contacts by name"}),Object(O.jsx)("input",{type:"text",name:"filter",value:this.props.value,onChange:this.props.onChange})]})}}]),n}(a.Component),R=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.addContact=function(e){t.hasContacts(e.name)?alert("".concat(e.name," is already in contacts")):t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(i.a)(n))}}))},t.hasContacts=function(e){return t.state.contacts.find((function(t){return t.name.toLocaleLowerCase()===e.toLocaleLowerCase()}))},t.findContact=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLocaleLowerCase();return n.length?a.filter((function(t){return t.name.toLowerCase().includes(c)})):a},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(O.jsxs)(N,{children:[Object(O.jsx)("h1",{children:"PhoneBook"}),Object(O.jsx)(x,{onSubmit:this.addContact}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(A,{value:this.state.filter,onChange:this.handleChange}),Object(O.jsx)(k,{findContact:this.findContact,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component);o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(R,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.96d5962a.chunk.js.map