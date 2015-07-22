/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.3
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
function FastClick(e,t){"use strict";function n(e,t){return function(){return e.apply(t,arguments)}}var a;if(t=t||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=t.touchBoundary||10,this.layer=e,this.tapDelay=t.tapDelay||200,!FastClick.notNeeded(e)){for(var r=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],o=this,i=0,s=r.length;s>i;i++)o[r[i]]=n(o[r[i]],o);deviceIsAndroid&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,a){var r=Node.prototype.removeEventListener;"click"===t?r.call(e,t,n.hijacked||n,a):r.call(e,t,n,a)},e.addEventListener=function(t,n,a){var r=Node.prototype.addEventListener;"click"===t?r.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),a):r.call(e,t,n,a)}),"function"==typeof e.onclick&&(a=e.onclick,e.addEventListener("click",function(e){a(e)},!1),e.onclick=null)}}function randomHeadline(){var e=["Young","Teenage","Old","Over the Hill"],t=e[Math.round(Math.random()*(e.length-1))],n=["3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","99"],a=n[Math.round(Math.random()*(n.length-1))],r=["Decides","Doesn't Have a Clue","Finds Out","Goes Undercover","Is Undecided","Knows the Answer","Sleeps His Way to the Answer","Uncovers the Truth"],o=r[Math.round(Math.random()*(r.length-1))],i=["Bought","Gave Away","Sold","Flogged","Shifted","Purchased"],s=i[Math.round(Math.random()*(i.length-1))],c=["Building","Dead","Defunct","Developing","Done For","Dying","Enduring","Flourishing","Gaining Credibility","Gathering Momentum","Growing","Lacking Credibility","Mushrooming","No More","Surviving"],l=c[Math.round(Math.random()*(c.length-1))],u=["Coolest","Most Contemporary","Edgiest","Hippest"],d=u[Math.round(Math.random()*(u.length-1))],h=["Anal Funnelling","Bombing","Dabbing","Gumming","Hoofing","Ingesting","Injecting","Mainlining"],m=h[Math.round(Math.random()*(h.length-1))],g=["Racking up","Shelving","Smoking","Sniffing","Snorting","Space Blasting","Speedballing","Swallowing","Taking"],f=g[Math.round(Math.random()*(g.length-1))],p=h.concat(g),v=p[Math.round(Math.random()*(p.length-1))],M=["2C-B","Acid","Amphetamines","Angel Dust","Base","Basuco","Birdie Powder","Blowcaine","Butane","Crack Cocaine","Crystal Meth","Ecstasy","Freebase","GHB"],y=M[Math.round(Math.random()*(M.length-1))],k=["Glue","Gutter Glitter","Heroin","Ketamin","Krokodil","LSD","Magic Mushrooms","Mescalin","Mephedrone","MCAT","Narcotics","Nose Candy","PCP","Rohypnol","Shrooms","Weasel Dust","Weed"],S=k[Math.round(Math.random()*(k.length-1))],C=M.concat(k),b=C[Math.round(Math.random()*(C.length-1))],T=["Bogus","Fake","Phony","Counterfeit","Moody","Dodgy"],w=T[Math.round(Math.random()*(T.length-1))],E=["Brother","Brother-in-Law","Chef","Cleaner","Cousin","Dad","Gay Best Friend","Grandfather","Gym Buddy","Male Stripper","Neighbour","Pet Dog","Postman","Step Brother","Uncle"],B=E[Math.round(Math.random()*(E.length-1))],F=["Burning Man","Boomfest","Coachella","Creamfields","Donauinselfest","Field Day","Glastonbury","Global Gathering","Lovebox","Mawazine","Przystanek Woodstock","Rock in Rio","Sonar","SXSW","Sundance","Warehouse Project"],P=F[Math.round(Math.random()*(F.length-1))],D=["Ambient-pop","Baile Funk","Breakcore","Britstep","Bro-step","Chillwave","Clownstep","Cumbia","Doghouse","Danger Music","Drillstep","Nu-disco","No-wave","Niche","Crunkstep","DnB-core","Dubstep","Post-EDM","Pre-IDM","Farmcore","Folk-tronica","Hardcore barbershop-tronica","Hymntronica","Post-punk","Post-trap","Psytrance","Rape-gaze","Sadcore","Seapunk","Scouse House","Shitcore","Soft Grunge","Sprock","Tumblrcore","Witchhouse"],A=D[Math.round(Math.random()*(D.length-1))],I=["Appeared as a Hologram at","Beatboxed at","Freestyled at","Gigged at","Rejected","Played"],x=I[Math.round(Math.random()*(I.length-1))],L=["Explorations in","Guide to","Tour of","Travels in","Trip Around"],H=L[Math.round(Math.random()*(L.length-1))],N=["Cartel","Crew","Faction","Gang","Group","Subculture","Tribe"],W=N[Math.round(Math.random()*(N.length-1))],R=["The Bloods","The Crips","The Mungiki","The Russian Mob","Los Zetas","The 18th Street Gang","The Mongols","The Triads","The Texas Syndicate","The IRA","The Cosa Nostra","The Hell’s Angels","The Yakuza","The Black Guerrilla Family","Wah Ching","The Aryan Brotherhood","The Jamaican Posse","The Burger Bar Boys","The Croxteth Crew","The Peckham Boys","The Tijuana Cartel"],G=R[Math.round(Math.random()*(R.length-1))],O=["I","We"],j=O[Math.round(Math.random()*(O.length-1))],z=["Scene"],J=z[Math.round(Math.random()*(z.length-1))],K=["Bolivian","Bosnian","British","Brazilian","Bulgarian","Burmese","Cambodian","Canadian","Chechnyan","Chilean","Chinese","Costa Rican","Crimean","Cuban","Ghanain","Guatemalan","Hungarian","Japanese","Jordanian","Lebanese","Liberian","Lithuanian","Macedonian","Mexican","Moldovan","Mongolian","Moscovite","Nicaraguan","North Korean","Palestinian","Pakistani","Persian","Peruvian","Philipino","Polynesian","Romanian","Russian","Serbian","Scandinavian","Somali","South African","Sri Lankan","Syrian","Venezuelan","Vietnamese","Zambian","Zimbabwean"],V=K[Math.round(Math.random()*(K.length-1))],Y=["Bazooka","Beer Can","Beard Trimmer","Baseball Bat","Burka","Blood Clot","Broken Bottle","Condom","Drill","Drum Kit","Fixie","Glow Stick","Helmet","Kalashnikov","Keyboard","MacBook","Lego Brick"],U=Y[Math.round(Math.random()*(Y.length-1))],X=["Light Sabre","Lighter","Machete","Nailgun","Neon Light","Needle","Plaster","Plastic Fork","Riot Shield","Rifle","Rocket Launcher","Rubber Duck","Samurai Sword","Synthesizer","Tampon","Thong","TV Remote"],q=X[Math.round(Math.random()*(X.length-1))],_=Y.concat(X),Z=_[Math.round(Math.random()*(_.length-1))],Q=["Barista","Bouncer","Burger Flipper","Child Porn Fanatic","Creative","Death Row Inmate","Deep Sea Diver","Donkey Fluffer","Drug Addict","Drug Baron","Film Maker","Fishmonger","Graffiti Crew Member","Hacker","Hooker","Hipster","Human Trafficker","Jimmy Saville impersonator"],et=Q[Math.round(Math.random()*(Q.length-1))],tt=["Media Runner","Midget Stripper","Mime Artist","Miner","Necrophiliac","Pig Farmer","Pirate","Priest","Programmer","Psychologist","Prostitute","Rapper","Rocket Scientist","Scatologist","Serial Killer","Sex Slave","Socialite","Supermodel","Steel Worker","Taxi Driver"],nt=tt[Math.round(Math.random()*(tt.length-1))],at=Q.concat(tt),rt=at[Math.round(Math.random()*(at.length-1))],ot=["Aaron Schwarz","Adolf Hitler","Angela Merkel","Barack Obama","Bashar al-Assad","Ben Affleck","Beyonce","Bill Clinton","Britney Spears","Brian Blessed","Calvin Harris","Cara Delevingne","Chairman Mao","Charles Taylor","Che Guevara","Colonel Qaddafi","Condoleezza Rice","Courtney Love","Chris Brown","Chuck D","Dr. Dre","Daniel Radcliffe","David Bowie","David Letterman","Dick Cheney","Drew Barrymore","Fidel Castro","Gary Glitter","George W. Bush","Harry Styles","Heisenberg","Hilary Clinton","Hugo Chavez","James Franco","Jay-Z","Jason Biggs","John Belushi","John Lennon","Justin Bieber","Kanye West"],it=ot[Math.round(Math.random()*(ot.length-1))],st=["Kanye West","Kelsey Grammar","Kim Dotcom","Kim Jong Un","Lenin","Lil Wayne","Lindsay Lohan","Mahmoud Ahmadinejad","Marilyn Monroe","Matthew McConaughey","Method Man","Michael Barrymore","Michael Jackson","Miley Cyrus","Mike Tyson","Mitt Romney","Morgan Freeman","Mussolini","Nigel Farage","Nigella Lawson","Nick Griffin","Notorious B.I.G.","Paris Hilton","Paul McCartney","Peaches Geldof","Phil Collins","Pol Pot","Psy","Puff Daddy","R Kelly","Ricky Gervais","Richard Dawkins","Rihanna","Robert Downey Jr.","Robert Mugabe","Robin Thicke","Rolf Harris","Ryan Gosling","Saddam Hussein","Satan","Seth Rogen","Shakespeare","Snoop Dogg","Soldier Boy","Stanley Kubrick","Stalin","Tara Reid","Tupac","Vladimir Putin"],ct=st[Math.round(Math.random()*(st.length-1))],lt=ot.concat(st),ut=lt[Math.round(Math.random()*(lt.length-1))],dt=["Bangkok","Beirut","Belgrade","Berlin","Borneo","Brooklyn","Chile","Croydon","Cuba","Denmark","Egypt","Gaza","Guadalahara","Hackney","Hanoi","Helsinki","Iran","Iraq","Jerusalem"],ht=dt[Math.round(Math.random()*(dt.length-1))],mt=["Johannesburg","Kiev","Lebanon","Montenegro","Moscow","NY","North Korea","Osaka","Pakistan","Penang","Russia","Santiago","Seoul","Serbia","Sudan","Syria","Timbuktu","Zagreb","Zurich","Houston","Ukraine","Congo","Sao Paolo","Williamsburg"],gt=mt[Math.round(Math.random()*(mt.length-1))],ft=dt.concat(mt),pt=ft[Math.round(Math.random()*(ft.length-1))],vt=["Gay","Homosexual","Lesbian","Feminist","Queer"],Mt=vt[Math.round(Math.random()*(vt.length-1))],yt=["At College","At Work","Conducting Sacrifices","In a Coma","In Bed","In Rehab","In School","At a Sex Party","In the Studio","On Location","On the Streets","On Vacation","Playing Poker","Playing Russian Roulette","Undercover","Underground"],kt=yt[Math.round(Math.random()*(yt.length-1))],St=["Bi-curious","Down Syndrome","Thalidomide","Paraplegic","Transgender"],Ct=["Exchanging","Substituting","Swapping","Switching","Trading"],bt=Ct[Math.round(Math.random()*(Ct.length-1))],Tt=["24 Hours","48 Hours","5 Minutes","72 Hours","A Fucking Eternity","A Month","A Week","A Year","A Decade","Channukah","Christmas","Easter","Eid","Halloween","January","Passover","Fucking Ages","Way Too Long"],wt=Tt[Math.round(Math.random()*(Tt.length-1))],Et=["Archer","Arrested Development","Avatar","Batman","Breaking Bad","CSI","Dexter","Doctor Who","Fawlty Towers","Friends","Game of Thrones","Harry Potter","House of Cards","Lost","Mad Men","M.A.S.H.","Seinfeld","Star Trek","Star Wars","The Killing","The Sopranos","The Tonight Show","The X Files","The Wire","Top Gear","True Detective","Twin Peaks","T.O.W.I.E.","Catfish"],Bt=Et[Math.round(Math.random()*(Et.length-1))],Ft=["Killed","Tortured","Molested","Executed","Strangled","Murdered","Whored Out","Violated","Defiled","Abused","Assaulted"],Pt=Ft[Math.round(Math.random()*(Ft.length-1))],Dt=["Christian","Hindu","Jewish","Muslim","Scientologist","Buddhist","Taoist","Sikh","Pagan","Kemetist"],At=Dt[Math.round(Math.random()*(Dt.length-1))],It=["Posted it on Facebook","Live Tweeted the Whole Thing","Instagrammed the Shit out of it","Built an App for it","Made a Hilarious Vine of it","Started an AMA on Reddit","Created an Account for it on Tinder","Sent Out a Bunch of Snapchats","Slapped in on Youtube"],xt=It[Math.round(Math.random()*(It.length-1))],Lt=["Facebook","Twitter","Instragram","Secret","Grindr","Vine","Reddit","Tinder","Snapchat","MySpace","AirBnB"],Ht=Lt[Math.round(Math.random()*(Lt.length-1))],Nt=["Fellating","Having Sex with","Kissing"],Wt=Nt[Math.round(Math.random()*(Nt.length-1))],Rt=["Caught","Documented","Filmed","Found"],Gt=Rt[Math.round(Math.random()*(Rt.length-1))],Ot=["Most Backward Place We've Ever Been","Seediest Place in the World","Most Dangerous Place on Earth"],jt=Ot[Math.round(Math.random()*(Ot.length-1))],zt=["How","Why"],Jt=zt[Math.round(Math.random()*(zt.length-1))],Kt=["The Definitive Guide","A Documentary","We Go Deep Undercover"],Vt=Kt[Math.round(Math.random()*(Kt.length-1))],$t=["Just a Front for","Full of","Packed with","A Facade For"],Yt=$t[Math.round(Math.random()*($t.length-1))],Ut=["Band"],Xt=Ut[Math.round(Math.random()*(Ut.length-1))],qt=["Lived as","Began Life as","Masqueraded as","Pretended to be"],_t=qt[Math.round(Math.random()*(qt.length-1))],Zt=["For No Reason At All","For Shits and Giggles","For A laugh","As a Wind Up","For Fun","Because That's Journalism","To Write This Article","As a Joke"],Qt=Zt[Math.round(Math.random()*(Zt.length-1))],en=["Save","Stop","Prevent"],tn=en[Math.round(Math.random()*(en.length-1))],nn=["Debating","Deliberating","Considering"],an=nn[Math.round(Math.random()*(nn.length-1))],rn=["Discover","Find Out","See"],on=rn[Math.round(Math.random()*(rn.length-1))],sn=["Went To","Flew To","Travelled To","Hitchhiked To"],cn=sn[Math.round(Math.random()*(sn.length-1))],ln=["Happened","Went On","Went Down"],un=ln[Math.round(Math.random()*(ln.length-1))],dn=["Man","Woman","Child","Teenager","Girl","Boy","Baby"],hn=dn[Math.round(Math.random()*(dn.length-1))],mn=["Met","Stumbled Across","Found","Ignored"],gn=mn[Math.round(Math.random()*(mn.length-1))],fn=["A Member","A Representative","A Foe","An Ememy","A Whistleblower"],pn=fn[Math.round(Math.random()*(fn.length-1))],vn=ft.concat(F),Mn=vn[Math.round(Math.random()*(vn.length-1))],yn=St.concat(Dt),kn=yn[Math.round(Math.random()*(yn.length-1))],Sn=yn.concat(K),Cn=Sn[Math.round(Math.random()*(Sn.length-1))],bn=at.concat(Ut),Tn=bn[Math.round(Math.random()*(bn.length-1))],wn=Sn.concat(at),En=wn[Math.round(Math.random()*(wn.length-1))],Bn=vt.concat(Dt),Fn=Bn[Math.round(Math.random()*(Bn.length-1))],Pn=Jt+" "+pt+"'s "+rt+"s are "+bt+" "+U+"s for "+q+"s",Dn=j+" Spent "+wt+" "+kt+" with "+pt+"'s "+rt+"s",An=v+" "+b+" "+kt+" with "+ut,In="A "+Cn+" "+rt+"'s "+H+" "+pt,xn=U+"s, "+q+"s and "+b+": "+kt+" with "+ut+" in "+pt,Ln="Is the "+V+" "+A+" "+J+" "+l+"?",Hn=wt+" with "+ut+" and a "+V+" "+rt,Nn=ut+"'s "+B+" is Not a "+et+", But He is a "+nt,Wn="Do "+rt+"s Really Need "+Z+"s? This "+V+" "+A+" Fan "+o,Rn="We're "+an+" "+m+" "+y+" vs. "+f+" "+S+" with "+ut,Gn="Meet the "+Cn+" "+rt+"s Who Are Putting "+A+" Back on the Map",On="I "+_t+" a "+rt+" in "+pt+" and There Was No "+ut,jn=on+" What "+un+" When We Were "+kt+" for "+wt+" in "+pt,zn="We're "+v+" "+b+" with "+pt+"'s "+rt+"s",Jn="Next Month, "+ut+" Spends "+wt+" With a "+Z+", "+v+" "+b,Kn="This is the "+Cn+" "+rt+" Who Wants to Make "+ht+" the New "+gt,Vn=ut+": "+Jt+" a "+Z+" Couldn't "+tn+" My "+B+" From Overdosing on "+b+" in "+pt,$n=Jt+" "+it+" thought "+ct+" was a "+kn+" "+Tn,Yn=Jt+" "+pt+"'s "+d+" "+Xt+" Have Already "+x+" Next Year's "+P,Un=v+" "+b+" at "+P+": "+Vt,Xn="Meet the Writers Behind "+pt+"'s Version of "+Bt,qn=Jt+" "+pt+"'s Answer to "+Bt+" Is Just "+ut+" on "+b,_n=t+" and "+Mt+": "+pt+"'s "+rt+"s",Zn=a+" Reasons Why "+Mn+" is the "+jt,Qn=j+" "+Pt+" "+ut+" and "+xt,ea=j+" "+Gt+" "+ut+" and a "+At+" "+rt+" "+Wt+" Each Other",ta=Jt+" Being a "+V+" "+Fn+" Got Me a Role on "+Bt,na=Jt+" "+pt+"'s Version of "+Ht+" is "+Yt+" "+Pt+" "+rt+"s",aa=j+" "+cn+" "+Mn+" and "+s+" "+w+" "+b+" "+Qt,ra=j+" "+Gt+" a "+Fn+" "+Tn+" and didn't "+tn+" them from "+Wt+" "+ut,oa=j+" "+gn+" a "+hn+" on "+Ht+" who "+cn+" "+Mn+" and "+Pt+" their "+B,ia="I "+_t+" "+pn+" of "+G,sa=Jt+" a "+En+" "+W+" are the "+d+" "+A+" "+Xt+" in "+pt,ca=[];ca.push(Pn,Dn,An,In,xn,Ln,Hn,Nn,Wn,Rn,Gn,On,jn,zn,Jn,Kn,Vn,$n,Yn,Un,Xn,qn,_n,Zn,Qn,ea,ta,na,aa,ra,oa,ia,sa);var la=ca[Math.round(Math.random()*(ca.length-1))];return la}function setHeadline(){document.getElementById("headline").innerHTML=randomHeadline()}window.Modernizr=function(e,t,n){function a(e){v.cssText=e}function r(e,t){return a(S.join(e+";")+(t||""))}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var a in e){var r=e[a];if(!i(r,"-")&&v[r]!==n)return"pfx"==t?r:!0}return!1}function c(e,t,a){for(var r in e){var i=t[e[r]];if(i!==n)return a===!1?e[r]:o(i,"function")?i.bind(a||t):i}return!1}function l(e,t,n){var a=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+b.join(a+" ")+a).split(" ");return o(t,"string")||o(t,"undefined")?s(r,t):(r=(e+" "+T.join(a+" ")+a).split(" "),c(r,t,n))}function u(){h.input=function(n){for(var a=0,r=n.length;r>a;a++)F[n[a]]=!!(n[a]in M);return F.list&&(F.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),F}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var a=0,r,o,i,s=e.length;s>a;a++)M.setAttribute("type",o=e[a]),r="text"!==M.type,r&&(M.value=y,M.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&M.style.WebkitAppearance!==n?(g.appendChild(M),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(M,null).WebkitAppearance&&0!==M.offsetHeight,g.removeChild(M)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?M.checkValidity&&M.checkValidity()===!1:M.value!=y)),B[e[a]]=!!r;return B}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",h={},m=!0,g=t.documentElement,f="modernizr",p=t.createElement(f),v=p.style,M=t.createElement("input"),y=":)",k={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",b=C.split(" "),T=C.toLowerCase().split(" "),w={svg:"http://www.w3.org/2000/svg"},E={},B={},F={},P=[],D=P.slice,A,I=function(e,n,a,r){var o,i,s,c,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(a,10))for(;a--;)s=t.createElement("div"),s.id=r?r[a]:f+(a+1),l.appendChild(s);return o=["&#173;",'<style id="s',f,'">',e,"</style>"].join(""),l.id=f,(u?l:d).innerHTML+=o,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",c=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),i=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),g.style.overflow=c),!!i},x=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var a;return I("@media "+t+" { #"+f+" { position: absolute; } }",function(t){a="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),a},L=function(){function e(e,r){r=r||t.createElement(a[e]||"div"),e="on"+e;var i=e in r;return i||(r.setAttribute||(r=t.createElement("div")),r.setAttribute&&r.removeAttribute&&(r.setAttribute(e,""),i=o(r[e],"function"),o(r[e],"undefined")||(r[e]=n),r.removeAttribute(e))),r=null,i}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),H={}.hasOwnProperty,N;N=o(H,"undefined")||o(H.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return H.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function R(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=D.call(arguments,1),a=function(){if(this instanceof a){var r=function(){};r.prototype=t.prototype;var o=new r,i=t.apply(o,n.concat(D.call(arguments)));return Object(i)===i?i:o}return t.apply(e,n.concat(D.call(arguments)))};return a}),E.flexbox=function(){return l("flexWrap")},E.flexboxlegacy=function(){return l("boxDirection")},E.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},E.canvastext=function(){return!(!h.canvas||!o(t.createElement("canvas").getContext("2d").fillText,"function"))},E.webgl=function(){return!!e.WebGLRenderingContext},E.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:I(["@media (",S.join("touch-enabled),("),f,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},E.geolocation=function(){return"geolocation"in navigator},E.postmessage=function(){return!!e.postMessage},E.websqldatabase=function(){return!!e.openDatabase},E.indexedDB=function(){return!!l("indexedDB",e)},E.hashchange=function(){return L("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},E.history=function(){return!(!e.history||!history.pushState)},E.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},E.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},E.rgba=function(){return a("background-color:rgba(150,255,150,.5)"),i(v.backgroundColor,"rgba")},E.hsla=function(){return a("background-color:hsla(120,40%,100%,.5)"),i(v.backgroundColor,"rgba")||i(v.backgroundColor,"hsla")},E.multiplebgs=function(){return a("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(v.background)},E.backgroundsize=function(){return l("backgroundSize")},E.borderimage=function(){return l("borderImage")},E.borderradius=function(){return l("borderRadius")},E.boxshadow=function(){return l("boxShadow")},E.textshadow=function(){return""===t.createElement("div").style.textShadow},E.opacity=function(){return r("opacity:.55"),/^0.55$/.test(v.opacity)},E.cssanimations=function(){return l("animationName")},E.csscolumns=function(){return l("columnCount")},E.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return a((e+"-webkit- ".split(" ").join(t+e)+S.join(n+e)).slice(0,-e.length)),i(v.backgroundImage,"gradient")},E.cssreflections=function(){return l("boxReflect")},E.csstransforms=function(){return!!l("transform")},E.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in g.style&&I("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},E.csstransitions=function(){return l("transition")},E.fontface=function(){var e;return I('@font-face {font-family:"font";src:url("https://")}',function(n,a){var r=t.getElementById("smodernizr"),o=r.sheet||r.styleSheet,i=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(a.split(" ")[0])}),e},E.generatedcontent=function(){var e;return I(["#",f,"{font:0/0 a}#",f,':after{content:"',y,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},E.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(a){}return n},E.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(a){}return n},E.localstorage=function(){try{return localStorage.setItem(f,f),localStorage.removeItem(f),!0}catch(e){return!1}},E.sessionstorage=function(){try{return sessionStorage.setItem(f,f),sessionStorage.removeItem(f),!0}catch(e){return!1}},E.webworkers=function(){return!!e.Worker},E.applicationcache=function(){return!!e.applicationCache},E.svg=function(){return!!t.createElementNS&&!!t.createElementNS(w.svg,"svg").createSVGRect},E.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==w.svg},E.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(k.call(t.createElementNS(w.svg,"animate")))},E.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(k.call(t.createElementNS(w.svg,"clipPath")))};for(var W in E)N(E,W)&&(A=W.toLowerCase(),h[A]=E[W](),P.push((h[A]?"":"no-")+A));return h.input||u(),h.addTest=function(e,t){if("object"==typeof e)for(var a in e)N(e,a)&&h.addTest(a,e[a]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(g.className+=" "+(t?"":"no-")+e),h[e]=t}return h},a(""),p=M=null,function(e,t){function n(e,t){var n=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",a.insertBefore(n.lastChild,a.firstChild)}function a(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=f[e[m]];return t||(t={},g++,e[m]=g,f[g]=t),t}function o(e,n,a){if(n||(n=t),p)return n.createElement(e);a||(a=r(n));var o;return o=a.cache[e]?a.cache[e].cloneNode():d.test(e)?(a.cache[e]=a.createElem(e)).cloneNode():a.createElem(e),o.canHaveChildren&&!u.test(e)?a.frag.appendChild(o):o}function i(e,n){if(e||(e=t),p)return e.createDocumentFragment();n=n||r(e);for(var o=n.frag.cloneNode(),i=0,s=a(),c=s.length;c>i;i++)o.createElement(s[i]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+a().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function c(e){e||(e=t);var a=r(e);return!v.shivCSS||h||a.hasCSS||(a.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),p||s(e,a),e}var l=e.html5||{},u=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h,m="_html5shiv",g=0,f={},p;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,p=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){h=!0,p=!0}}();var v={elements:l.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:l.shivCSS!==!1,supportsUnknownElements:p,shivMethods:l.shivMethods!==!1,type:"default",shivDocument:c,createElement:o,createDocumentFragment:i};e.html5=v,c(t)}(this,t),h._version=d,h._prefixes=S,h._domPrefixes=T,h._cssomPrefixes=b,h.mq=x,h.hasEvent=L,h.testProp=function(e){return s([e])},h.testAllProps=l,h.testStyles=I,h.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+P.join(" "):""),h}(this,this.document);var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;FastClick.prototype.needsClick=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===e.type||e.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(e.className)},FastClick.prototype.needsFocus=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},FastClick.prototype.sendClick=function(e,t){"use strict";var n,a;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),a=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},FastClick.prototype.determineEventType=function(e){"use strict";return deviceIsAndroid&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(e){"use strict";var t;deviceIsIOS&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},FastClick.prototype.updateScrollParent=function(e){"use strict";var t,n;if(t=e.fastClickScrollParent,!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(e){"use strict";return e.nodeType===Node.TEXT_NODE?e.parentNode:e},FastClick.prototype.onTouchStart=function(e){"use strict";var t,n,a;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],deviceIsIOS){if(a=window.getSelection(),a.rangeCount&&!a.isCollapsed)return!0;if(!deviceIsIOS4){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(e){"use strict";var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n?!0:!1},FastClick.prototype.onTouchMove=function(e){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(e){"use strict";return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(e){"use strict";var t,n,a,r,o,i=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(o=e.changedTouches[0],i=document.elementFromPoint(o.pageX-window.pageXOffset,o.pageY-window.pageYOffset)||i,i.fastClickScrollParent=this.targetElement.fastClickScrollParent),a=i.tagName.toLowerCase(),"label"===a){if(t=this.findControl(i)){if(this.focus(i),deviceIsAndroid)return!1;i=t}}else if(this.needsFocus(i))return e.timeStamp-n>100||deviceIsIOS&&window.top!==window&&"input"===a?(this.targetElement=null,!1):(this.focus(i),this.sendClick(i,e),deviceIsIOS&&"select"===a||(this.targetElement=null,e.preventDefault()),!1);return deviceIsIOS&&!deviceIsIOS4&&(r=i.fastClickScrollParent,r&&r.fastClickLastScrollTop!==r.scrollTop)?!0:(this.needsClick(i)||(e.preventDefault(),this.sendClick(i,e)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(e){"use strict";return this.targetElement?e.forwardedTouchEvent?!0:e.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1):!0:!0},FastClick.prototype.onClick=function(e){"use strict";var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail?!0:(t=this.onMouse(e),t||(this.targetElement=null),t)},FastClick.prototype.destroy=function(){"use strict";var e=this.layer;deviceIsAndroid&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(e){"use strict";var t,n,a;if("undefined"==typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;
if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(deviceIsBlackBerry10&&(a=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),a[1]>=10&&a[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction?!0:!1},FastClick.attach=function(e,t){"use strict";return new FastClick(e,t)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick;