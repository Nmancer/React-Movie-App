(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(t,e,n){"use strict";n.r(e);var a=n(9),r=n(10),i=n(12),c=n(11),l=n(13),o=n(0),p=n.n(o),u=n(14),s=n(16),h=n(37),m=n(3),d=n(2),f=n(4);function b(){var t=Object(m.a)(["\n  font-weight: normal;\n  font-size: 20px;\n"]);return b=function(){return t},t}function g(){var t=Object(m.a)(["\n  color: ",";\n"]);return g=function(){return t},t}function v(){var t=Object(m.a)(["\n  margin-left: 5px;\n  color: ",";\n"]);return v=function(){return t},t}function w(){var t=Object(m.a)(["\n  display: flex;\n  width: 60%;\n  margin: 0 auto;\n  padding: 50px;\n  @media (max-width: 1280px) {\n    margin-top: 90px;\n    padding: 0;\n    width: 80%;\n  }\n  @media (max-width: 780px) {\n    width: 100%;\n  }\n  @media (max-width: 480px) {\n    flex-direction: column;\n  }\n"]);return w=function(){return t},t}function y(){var t=Object(m.a)(["\n  width: 100%;\n  margin-top: 60px;\n  background-color: ",";\n"]);return y=function(){return t},t}var D=d.c.div(y(),f.c),E=d.c.div(w()),x=d.c.div(v(),f.e),j=d.c.h1(g(),f.a),O=d.c.h2(b()),_=function(t){var e=t.biography,n=t.birthday,a=t.deathday,r=t.name,i=t.place_of_birth,c=t.profile_path;return p.a.createElement(D,null,p.a.createElement(E,null,p.a.createElement("div",null,p.a.createElement("img",{src:c?"https://image.tmdb.org/t/p/w185".concat(c):null,alt:r})),p.a.createElement(x,null,r?p.a.createElement(j,null,r):null,n?p.a.createElement(O,null,"Birthday: ",n," (",i,")"):null,a?p.a.createElement(O,null,"Died:",a):null,e?p.a.createElement("p",null," ",p.a.createElement("span",null,"Biography:"),e):null)))},k=function(t){function e(){return Object(a.a)(this,e),Object(i.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.props.fetchActorDetails(this.props.match.params.id)}},{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,this.props.actorDetails.movie_credits?p.a.createElement(p.a.Fragment,null,p.a.createElement(_,{biography:this.props.actorDetails.biography,birthday:this.props.actorDetails.birthday,deathday:this.props.actorDetails.deathday,name:this.props.actorDetails.name,place_of_birth:this.props.actorDetails.place_of_birth,profile_path:this.props.actorDetails.profile_path}),p.a.createElement(h.a,{page:this.props.actorDetails.name,movies:this.props.actorDetails.movie_credits.cast})):null)}}]),e}(o.Component);e.default=Object(u.b)(function(t){return{actorDetails:t.actorDetails}},{fetchActorDetails:s.c})(k)}}]);
//# sourceMappingURL=4.af1bebe3.chunk.js.map