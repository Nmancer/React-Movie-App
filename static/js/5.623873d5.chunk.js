(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var r=a(6),n=a(7),l=a(9),i=a(8),c=a(10),o=a(0),s=a.n(o),p=a(12),h=a(18),m=a(29),u=(a(144),function(e){var t=e.biography,a=e.birthday,r=e.deathday,n=e.name,l=e.place_of_birth,i=e.profile_path;return s.a.createElement("div",{className:"actor__info content"},s.a.createElement("div",{className:"actor__info-wrapper"},s.a.createElement("div",{className:"actor__info-left"},s.a.createElement("img",{src:i?"https://image.tmdb.org/t/p/w185".concat(i):null,alt:n})),s.a.createElement("div",{className:"actor__info-right"},n?s.a.createElement("h1",null,n):null,a?s.a.createElement("h2",null,s.a.createElement("span",null," Birthday:")," ",a," (",l,")"):null,r?s.a.createElement("h2",null,s.a.createElement("span",null," Died:"),r):null,s.a.createElement("div",null,t?s.a.createElement("p",null," ",s.a.createElement("span",null,"Biography:"),t):null))))}),d=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchActorDetails(this.props.match.params.id)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.props.actorDetails.movie_credits?s.a.createElement(s.a.Fragment,null,s.a.createElement(u,{biography:this.props.actorDetails.biography,birthday:this.props.actorDetails.birthday,deathday:this.props.actorDetails.deathday,name:this.props.actorDetails.name,place_of_birth:this.props.actorDetails.place_of_birth,profile_path:this.props.actorDetails.profile_path}),s.a.createElement(m.a,{page:this.props.actorDetails.name,movies:this.props.actorDetails.movie_credits.cast})):null)}}]),t}(o.Component);t.default=Object(p.b)(function(e){return{actorDetails:e.actorDetails}},{fetchActorDetails:h.a})(d)}}]);
//# sourceMappingURL=5.623873d5.chunk.js.map