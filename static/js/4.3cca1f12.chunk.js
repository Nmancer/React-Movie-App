(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(t,e,n){"use strict";n.r(e);var a=n(10),r=n(11),i=n(13),c=n(12),o=n(14),l=n(0),p=n.n(l),u=n(18),s=n(25),h=n(31),d=n(3),m=n(2),f=n(4);function b(){var t=Object(d.a)(["\n  font-weight: normal;\n  font-size: 20px;\n"]);return b=function(){return t},t}function g(){var t=Object(d.a)(["\n  color: ",";\n"]);return g=function(){return t},t}function v(){var t=Object(d.a)(["\n  margin-left: 5px;\n  color: ",";\n"]);return v=function(){return t},t}function w(){var t=Object(d.a)(["\n  display: flex;\n  width: 60%;\n  margin: 0 auto;\n  padding: 50px;\n  @media (max-width: 1280px) {\n    margin-top: 90px;\n    padding: 0;\n    width: 80%;\n  }\n  @media (max-width: 780px) {\n    width: 100%;\n  }\n  @media (max-width: 480px) {\n    flex-direction: column;\n  }\n"]);return w=function(){return t},t}function y(){var t=Object(d.a)(["\n  width: 100%;\n  margin-top: 60px;\n  background-color: ",";\n"]);return y=function(){return t},t}var D=m.c.div(y(),f.c),E=m.c.div(w()),x=m.c.div(v(),f.e),j=m.c.h1(g(),f.a),O=m.c.h2(b()),_=function(t){var e=t.biography,n=t.birthday,a=t.deathday,r=t.name,i=t.place_of_birth,c=t.profile_path;return p.a.createElement(D,null,p.a.createElement(E,null,p.a.createElement("div",null,p.a.createElement("img",{src:c?"https://image.tmdb.org/t/p/w185".concat(c):null,alt:r})),p.a.createElement(x,null,r?p.a.createElement(j,null,r):null,n?p.a.createElement(O,null,"Birthday: ",n," (",i,")"):null,a?p.a.createElement(O,null,"Died:",a):null,e?p.a.createElement("p",null," ",p.a.createElement("span",null,"Biography:"),e):null)))},k=function(t){function e(){return Object(a.a)(this,e),Object(i.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(o.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.props.fetchActorDetails(this.props.match.params.id)}},{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,this.props.actorDetails.movie_credits&&p.a.createElement(p.a.Fragment,null,p.a.createElement(_,{biography:this.props.actorDetails.biography,birthday:this.props.actorDetails.birthday,deathday:this.props.actorDetails.deathday,name:this.props.actorDetails.name,place_of_birth:this.props.actorDetails.place_of_birth,profile_path:this.props.actorDetails.profile_path}),p.a.createElement(h.a,{page:"Actor",movies:this.props.actorDetails.movie_credits.cast})))}}]),e}(l.Component);e.default=Object(u.b)(function(t){return{actorDetails:t.actorDetails}},{fetchActorDetails:s.a})(k)}}]);
//# sourceMappingURL=4.3cca1f12.chunk.js.map