(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){},18:function(t,e,a){t.exports=a(40)},25:function(t,e,a){},28:function(t,e,a){},34:function(t,e,a){},36:function(t,e,a){},38:function(t,e,a){},40:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(16),s=a.n(c),o=a(42),i=(a(23),a(25),a(3)),u=a(4),l=a(6),m=a(5),h=a(7),d=a(43),b=(a(28),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand bg-dark"},r.a.createElement("span",{className:"navbar-brand"},"ReactTimer"),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("i",{className:"arrow"}),r.a.createElement(d.a,{exact:!0,activeClassName:"active",to:"/",className:"nav-link"},"Timer")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("i",{className:"arrow"}),r.a.createElement(d.a,{exact:!0,activeClassName:"active",to:"/countdown",className:"nav-link"},"Countdown"))))}}]),e}(n.Component)),p=a(44),v=a(41),f=a(10),S=(a(15),a(34),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"formatSeconds",value:function(t){var e=Math.floor(t/60),a=t%60;return e<10&&(e="0"+e),a<10&&(a="0"+a),r.a.createElement("span",{id:"clock-text"},e,":",a)}},{key:"render",value:function(){var t=this.props.seconds;return r.a.createElement("div",{className:"clock-container"},r.a.createElement("div",{className:"clock mx-auto"},this.formatSeconds(t)))}}]),e}(n.Component)),j=(a(36),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"onStatusChange",value:function(t){this.props.onStatusChange(t)}},{key:"render",value:function(){var t=this,e=this.props.timerStatus;return r.a.createElement("div",{id:"controls"},"started"===e?r.a.createElement("button",{type:"button",ref:"buttons",className:"btn btn-secondary",onClick:function(){return t.onStatusChange("paused")}},"Pause"):r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return t.onStatusChange("started")}},"Start"),r.a.createElement("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return t.onStatusChange("stopped")}},"Clear"))}}]),e}(n.Component)),O=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(m.a)(e).call(this,t))).state={seconds:0,timerStatus:"stopped"},a.handleStatusChange=a.handleStatusChange.bind(Object(f.a)(Object(f.a)(a))),a.handleStart=a.handleStart.bind(Object(f.a)(Object(f.a)(a))),a}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidUpdate",value:function(t,e){if(this.state.timerStatus!==e.timerStatus)switch(this.state.timerStatus){case"started":this.handleStart();break;case"paused":clearInterval(this.timer),this.timer=void 0;break;case"stopped":this.setState({seconds:0}),clearInterval(this.timer),this.timer=void 0}}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"handleStatusChange",value:function(t){this.setState({timerStatus:t})}},{key:"handleStart",value:function(){var t=this;this.timer=setInterval(function(){t.setState({seconds:t.state.seconds+1})},1e3)}},{key:"render",value:function(){var t=this.state,e=t.seconds,a=t.timerStatus;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"text-center font-weight-bold"},"Timer App"),r.a.createElement(S,{seconds:e}),r.a.createElement(j,{timerStatus:a,onStatusChange:this.handleStatusChange}))}}]),e}(n.Component),E=(a(38),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"onFormSubmit",value:function(t){t.preventDefault();var e=this.refs.totalSeconds.value;e.length<1?alert("Input field cannot be empty"):e.search(/^[0-9]*$/)<0?alert("Invalid Input: only numbers can be input"):this.props.onFormSubmit(e),this.refs.totalSeconds.value="",this.refs.totalSeconds.focus()}},{key:"render",value:function(){var t=this;return r.a.createElement("form",{className:"form-group mx-auto",onSubmit:function(e){return t.onFormSubmit(e)}},r.a.createElement("input",{type:"text",className:"form-control text-center",ref:"totalSeconds",placeholder:"Enter Countdown in seconds"}),r.a.createElement("button",{className:"btn btn-primary btn-block"},"Start"))}}]),e}(n.Component)),k=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(m.a)(e).call(this,t))).state={countdown:0,timerStatus:"stopped"},a.handleFormSubmit=a.handleFormSubmit.bind(Object(f.a)(Object(f.a)(a))),a.handleStatusChange=a.handleStatusChange.bind(Object(f.a)(Object(f.a)(a))),a}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidUpdate",value:function(t,e){var a=this.state.timerStatus;if(a!==e.timerStatus)switch(a){case"started":this.handleStartCountdown();break;case"stopped":this.setState({countdown:0}),clearInterval(this.timer),this.timer=void 0;break;case"paused":clearInterval(this.timer),this.timer=void 0}}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"handleStartCountdown",value:function(){var t=this;this.timer=setInterval(function(){var e=t.state.countdown-1;t.setState({countdown:e>0?e:0}),0===e&&t.setState({timerStatus:"stopped"})},1e3)}},{key:"handleFormSubmit",value:function(t){this.setState({countdown:t,timerStatus:"submitted"})}},{key:"handleStatusChange",value:function(t){this.setState({timerStatus:t})}},{key:"render",value:function(){var t=this,e=this.state,a=e.countdown,n=e.timerStatus;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"text-center font-weight-bold",id:"page-title"},"Countdown App"),r.a.createElement(S,{seconds:a}),"stopped"===n?r.a.createElement(E,{onFormSubmit:t.handleFormSubmit}):"submitted"===n?r.a.createElement(j,{timerStatus:"stopped",onStatusChange:t.handleStatusChange}):r.a.createElement(j,{timerStatus:n,onStatusChange:t.handleStatusChange}))}}]),e}(n.Component),y=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(v.a,{exact:!0,path:"/",component:O}),r.a.createElement(v.a,{exact:!0,path:"/countdown",component:k}))}}]),e}(n.Component),C=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(y,null))}}]),e}(n.Component);s.a.render(r.a.createElement(o.a,{basename:"/timer-app"},r.a.createElement(C,null)),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.5c63ca36.chunk.js.map