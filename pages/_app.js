// import Router, { useRouter } from 'next/router'
import Head from 'next/head';

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="HandheldFriendly" content="True" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" />

        <title>XStore: La tienda argenta de Xbox</title>
        <meta name="description" content="Explora la amplia colección de títulos de videojuegos en el catálogo de juegos de Xbox. Busca los éxitos de taquilla favoritos, las ofertas y nuevos lanzamientos en precios argentinos." />
        <meta name="keywords" content="Xbox Series X, Xbox One, xbox live, ofertas con gold, juegos con gold, próximos juegos de xbox, nuevos juegos en xbox, nuevos juegos, videojuegos, catálogo de juegos de xbox, próximos juegos de xbox, nuevos juegos en xbox, nuevos juegos, videojuegos" />

        <link rel="stylesheet" href="/src/styles.css" />

        <link id="preloadLCP" rel="preload" fetchpriority="high" as="image" />

        <link rel="preconnect" href="https://store-images.s-microsoft.com" />
        <link rel="preconnect" href="https://media.rawg.io/" />
        <link rel="preconnect" href="https://api.xstoregames.com" />
        <link rel="preconnect" href="https://www.dolarsi.com" />

        <link rel="modulepreload" href="/src/js/web-components.js" />
        <link rel="modulepreload" href="/src/js/utils.js" />
        <link rel="modulepreload" href="/src/js/templates.js" />
        <link rel="modulepreload" href="/src/js/app.js" />
        <link rel="modulepreload" href="/src/js/swipes.js" />

        <link rel="preload" as="fetch" href="https://www.dolarsi.com/api/api.php?type=valoresprincipales" crossOrigin="anonymous" />
        <link rel="preload" as="fetch" href="https://api.xstoregames.com/api/games?list=new&skipitems=0" crossOrigin="anonymous" />
        <link rel="preload" as="fetch" href="https://api.xstoregames.com/api/games?list=deals&skipitems=0" crossOrigin="anonymous" />
        <link rel="preload" as="fetch" href="https://api.xstoregames.com/api/games?list=coming&skipitems=0" crossOrigin="anonymous" />
        <link rel="preload" as="fetch" href="https://api.xstoregames.com/api/games?list=best&skipitems=0" crossOrigin="anonymous" />
        <link rel="preload" as="fetch" href="https://api.xstoregames.com/api/games?list=free&skipitems=0" crossOrigin="anonymous" />
        <link rel="preload" as="fetch" href="https://api.xstoregames.com/api/games?list=most&skipitems=0" crossOrigin="anonymous" />

        <link rel="shortcut icon" href="/src/assets/favicon.png" />
        <link rel="apple-touch-icon" href="/src/assets/favicon.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="XStore" />
        <meta name="theme-color" content="#107C10" />
        <link rel="apple-touch-startup-image" href="/src/assets/apple-splash-2048-2732.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/src/assets/apple-splash-1668-2388.jpg" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/src/assets/apple-splash-1536-2048.jpg" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/src/assets/apple-splash-1668-2224.jpg" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/src/assets/apple-splash-1620-2160.jpg" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/src/assets/apple-splash-1284-2778.jpg" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/src/assets/apple-splash-1170-2532.jpg" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/src/assets/apple-splash-1125-2436.jpg" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/src/assets/apple-splash-1242-2688.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/src/assets/apple-splash-828-1792.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/src/assets/apple-splash-1242-2208.jpg" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/src/assets/apple-splash-750-1334.jpg" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/src/assets/apple-splash-640-1136.jpg" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xstoregames.com" />
        <meta property="og:title" content="XStore: La tienda argenta de Xbox" />
        <meta property="og:description" content="Explora la amplia colección de títulos de videojuegos en el catálogo de juegos de Xbox. Busca los éxitos de taquilla favoritos, las ofertas y nuevos lanzamientos en precios argentinos." />
        <meta property="og:image" content="https://xstoregames.com/src/assets/Xbox_store_new.jpeg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="xstoregames.com" />
        <meta property="twitter:url" content="https://xstoregames.com" />
        <meta name="twitter:title" content="XStore: La tienda argenta de Xbox" />
        <meta name="twitter:description" content="Explora la amplia colección de títulos de videojuegos en el catálogo de juegos de Xbox. Busca los éxitos de taquilla favoritos, las ofertas y nuevos lanzamientos en precios argentinos." />
        <meta name="twitter:image" content="https://xstoregames.com/src/assets/Xbox_store_new.jpeg" />
      </Head>
      <header>
        <h1>
          <a href="/">
            <img src="/src/assets/favicon.png" width="25px" height="25px" alt="" />
            XStore
          </a>
        </h1>

        <button
          is="install-button"
          id="install-btn"
          class="header-btn install-btn"
          aria-label="Instalar"
          hidden
        >
          <span>
            <svg width="16" height="16" viewBox="0 0 38 38" fill="#fff" aria-hidden="true"><path d="M31 8h-4a1 1 0 0 0 0 2h4v20H5V10h4a1 1 0 0 0 0-2H5a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"/><path d="m10 19 7 7a1 1 0 0 0 2 0l7-7a1 1 0 0 0-2-2l-5 6V4a1 1 0 0 0-2 0v19l-5-6a1 1 0 0 0-2 2Z"/><path fill="none" d="M0 0h36v36H0z"/></svg>
            Instalar
          </span>
        </button>

        <button
          is="back-button"
          id="page-back-btn"
          class="page-back-btn header-btn"
          aria-label="Volver para atrás"
          hidden
        >
          <svg width="19" height="19" fill="none" aria-hidden="true"><path d="M18 9.5H1M9.5 18 1 9.5 9.5 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        <button
          is="share-button"
          id="share-btn"
          class="share-btn header-btn"
          aria-label="Compartir"
          hidden
        >
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="#fff"><path d="m17.5 7.5-5-5a.7.7 0 0 0-1 0l-5 5c-.3.3-.3.7 0 1s.7.3 1 0l3.8-3.7V15a.8.8 0 0 0 1.5 0V4.8l3.7 3.7a.7.7 0 0 0 1 0c.3-.3.3-.7 0-1z"/><path d="M19.7 22H4.3C3 22 2 21 2 19.6V14a.8.8 0 0 1 1.5 0v5.7c0 .4.4.7.8.7h15.4c.4 0 .8-.3.8-.7V14a.8.8 0 0 1 1.5 0v5.7c0 1.2-1 2.2-2.3 2.2z"/></svg>
        </button>

        <button
          is="switch-button"
          id="fav-btn"
          class="fav-btn header-btn"
          aria-label="Favorito"
          hidden
        >
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="#fff"><path d="M12 21.6C9.4 21.6 2 15 2 8.5c0-3 2.5-5.8 5.4-5.8 2.2 0 3.8 1.6 4.6 2.8.8-1.2 2.4-2.8 4.6-2.8 3 0 5.4 2.7 5.4 5.8 0 6.4-7.4 13-10 13.1z"/></svg>
        </button>

        <x-toggle-collapse id="search-collapse">
          <button className="search-btn header-btn" aria-label="Buscar" slot="trigger">
            <svg width="25" height="25" aria-hidden="true" viewBox="0 0 32 32" fill="#fff"><path d="M13 3a10 10 0 1 0 6.3 17.7l6 6a1 1 0 1 0 1.4-1.4l-6-6A10 10 0 0 0 13 3zm0 2a8 8 0 1 1 0 16 8 8 0 1 1 0-16z"/></svg>
          </button>
          <form id="search" className="search" action="/search" slot="content" hidden>
            <label htmlFor="query">Buscar</label>
            <input type="search" id="query" name="q" placeholder="Buscar juegos..." />
            <button type="submit" aria-label="Buscar">
              <svg width="20" height="20" viewBox="0 0 32 32" fill="#fff" aria-hidden="true"><path d="M13 3a10 10 0 1 0 6.3 17.7l6 6a1 1 0 1 0 1.4-1.4l-6-6A10 10 0 0 0 13 3zm0 2a8 8 0 1 1 0 16 8 8 0 1 1 0-16z"/></svg>
            </button>
          </form>
        </x-toggle-collapse>
      </header>

      <main>
        <x-loader hidden></x-loader>
        {children}
      </main>

      <footer>
        <nav>
          <ul>
            <li>
              <a id="home" href="/" className="home-btn footer-btn" aria-label="Inicio">
                <svg width="28" height="28" viewBox="0 0 980 980" aria-hidden="true" fill="#fff"><path d="M53 897c24 15 55 12 76-7 0 0 117-101 152-129 11-9 25-14 39-14h345c14 0 27 5 38 14 35 28 153 129 153 129 20 19 52 22 75 7 78-52 53-190 34-267-16-64-38-126-64-187-37-89-118-203-232-179-11 3-24 10-33 15-9 6-20 9-31 9h-73V118a40 40 0 1 0-80 0v170h-72c-11 0-22-3-32-9-9-5-22-12-33-15-113-24-195 90-232 179-25 61-47 123-63 187-19 77-45 215 33 267zm680-522a44 44 0 1 1 0 87 44 44 0 0 1 0-87zM630 502a44 44 0 1 1 0 87 44 44 0 0 1 0-87zm-432-49h51v-50a30 30 0 1 1 60 0v50h50a30 30 0 1 1 0 60h-50v51a30 30 0 1 1-60 0v-51h-51a30 30 0 1 1 0-60z"/></svg>
              </a>
            </li>
            <li>
              <a id="wishlist" href="/wishlist" className="link wish-btn footer-btn" aria-label="Favoritos">
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" fill="#fff"><path d="M12 21.6C9.4 21.6 2 15 2 8.5c0-3 2.5-5.8 5.4-5.8 2.2 0 3.8 1.6 4.6 2.8.8-1.2 2.4-2.8 4.6-2.8 3 0 5.4 2.7 5.4 5.8 0 6.4-7.4 13-10 13.1z"/></svg>
              </a>
            </li>
            <li>
              <a id="news" href="/news" className="news-btn footer-btn" aria-label="Noticias">
                <svg width="28" height="28" viewBox="-5 -5 32 32" aria-hidden="true" fill="#fff"><path d="M19.2 24C19.2 13.5 10.5 4.8 0 4.8V0c13.2 0 24 10.8 24 24h-4.8zm-16-6.6a3.3 3.3 0 1 1 0 6.6 3.3 3.3 0 0 1 0-6.6zM16 24h-4.7c0-6.2-5-11.2-11.2-11.2V8A16 16 0 0 1 16 24z"/></svg>
              </a>
            </li>
          </ul>
        </nav>
      </footer>


      <script type="text/partytown" dangerouslySetInnerHTML={{ __html:`
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-GTM4ELWW90', {
          anonymize_ip: true,
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
          restricted_data_processing: true,
        });

        gtag('consent', 'default', {
          analytics_storage: 'granted',
          ad_storage: 'denied',
          personalization_storage: 'denied',
          functionality_storage: 'denied',
          security_storage: 'denied',
        });

        var s = document.createElement('script');
        s.src = 'https://www.googletagmanager.com/gtag/js?id=G-GTM4ELWW90';
        s.async = 1;
        s.type='text/partytown';
        var m = document.getElementsByTagName('script')[0];
        m.parentNode.insertBefore(s,m);
      `}} />

      <script dangerouslySetInnerHTML={{ __html:`
        window.requestIdleCallback = window.requestIdleCallback || function (cb) {
          var start = Date.now();
          return setTimeout(function () {
            cb({
              didTimeout: false,
              timeRemaining: function () {
                return Math.max(0, 50 - (Date.now() - start));
              }
            });
          }, 1);
        };
        // custom-elements: https://unpkg.com/@ungap/custom-elements@1.1.0/es.js
        /*! (c) Andrea Giammarchi @webreflection ISC */
        !function(){"use strict";var e=function(e,t){var n=function(e){for(var t=0,n=e.length;t<n;t++)r(e[t])},r=function(e){var t=e.target,n=e.attributeName,r=e.oldValue;t.attributeChangedCallback(n,r,t.getAttribute(n))};return function(o,a){var l=o.constructor.observedAttributes;return l&&e(a).then((function(){new t(n).observe(o,{attributes:!0,attributeOldValue:!0,attributeFilter:l});for(var e=0,a=l.length;e<a;e++)o.hasAttribute(l[e])&&r({target:o,attributeName:l[e],oldValue:null})})),o}};function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance. In order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,l=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw l}}}}
        /*! (c) Andrea Giammarchi - ISC */var r=!0,o=!1,a="querySelectorAll",l="querySelectorAll",i=self,u=i.document,c=i.Element,s=i.MutationObserver,f=i.Set,h=i.WeakMap,d=function(e){return l in e},v=[].filter,g=function(e){var t=new h,i=function(n,r){var o;if(r)for(var a,l=function(e){return e.matches||e.webkitMatchesSelector||e.msMatchesSelector}(n),i=0,u=p.length;i<u;i++)l.call(n,a=p[i])&&(t.has(n)||t.set(n,new f),(o=t.get(n)).has(a)||(o.add(a),e.handle(n,r,a)));else t.has(n)&&(o=t.get(n),t.delete(n),o.forEach((function(t){e.handle(n,r,t)})))},g=function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=0,r=e.length;n<r;n++)i(e[n],t)},p=e.query,y=e.root||u,m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:MutationObserver,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:["*"],u=function t(o,l,i,u,c,s){var f,h=n(o);try{for(h.s();!(f=h.n()).done;){var d=f.value;(s||a in d)&&(c?i.has(d)||(i.add(d),u.delete(d),e(d,c)):u.has(d)||(u.add(d),i.delete(d),e(d,c)),s||t(d[a](l),l,i,u,c,r))}}catch(e){h.e(e)}finally{h.f()}},c=new l((function(e){if(i.length){var t,a=i.join(","),l=new Set,c=new Set,s=n(e);try{for(s.s();!(t=s.n()).done;){var f=t.value,h=f.addedNodes,d=f.removedNodes;u(d,a,l,c,o,o),u(h,a,l,c,r,o)}}catch(e){s.e(e)}finally{s.f()}}})),s=c.observe;return(c.observe=function(e){return s.call(c,e,{subtree:r,childList:r})})(t),c}(i,y,s,p),b=c.prototype.attachShadow;return b&&(c.prototype.attachShadow=function(e){var t=b.call(this,e);return m.observe(t),t}),p.length&&g(y[l](p)),{drop:function(e){for(var n=0,r=e.length;n<r;n++)t.delete(e[n])},flush:function(){for(var e=m.takeRecords(),t=0,n=e.length;t<n;t++)g(v.call(e[t].removedNodes,d),!1),g(v.call(e[t].addedNodes,d),!0)},observer:m,parse:g}},p=self,y=p.document,m=p.Map,b=p.MutationObserver,w=p.Object,E=p.Set,S=p.WeakMap,A=p.Element,M=p.HTMLElement,O=p.Node,N=p.Error,C=p.TypeError,T=p.Reflect,q=w.defineProperty,I=w.keys,D=w.getOwnPropertyNames,L=w.setPrototypeOf,P=!self.customElements,k=function(e){for(var t=I(e),n=[],r=t.length,o=0;o<r;o++)n[o]=e[t[o]],delete e[t[o]];return function(){for(var o=0;o<r;o++)e[t[o]]=n[o]}};if(P){var x=function(){var e=this.constructor;if(!$.has(e))throw new C("Illegal constructor");var t=$.get(e);if(W)return z(W,t);var n=H.call(y,t);return z(L(n,e.prototype),t)},H=y.createElement,$=new m,_=new m,j=new m,R=new m,V=[],U=g({query:V,handle:function(e,t,n){var r=j.get(n);if(t&&!r.isPrototypeOf(e)){var o=k(e);W=L(e,r);try{new r.constructor}finally{W=null,o()}}var a="".concat(t?"":"dis","connectedCallback");a in r&&e[a]()}}).parse,W=null,F=function(e){if(!_.has(e)){var t,n=new Promise((function(e){t=e}));_.set(e,{$:n,_:t})}return _.get(e).$},z=e(F,b);q(self,"customElements",{configurable:!0,value:{define:function(e,t){if(R.has(e))throw new N('the name "'.concat(e,'" has already been used with this registry'));$.set(t,e),j.set(e,t.prototype),R.set(e,t),V.push(e),F(e).then((function(){U(y.querySelectorAll(e))})),_.get(e)._(t)},get:function(e){return R.get(e)},whenDefined:F}}),q(x.prototype=M.prototype,"constructor",{value:x}),q(self,"HTMLElement",{configurable:!0,value:x}),q(y,"createElement",{configurable:!0,value:function(e,t){var n=t&&t.is,r=n?R.get(n):R.get(e);return r?new r:H.call(y,e)}}),"isConnected"in O.prototype||q(O.prototype,"isConnected",{configurable:!0,get:function(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else try{var B=function e(){return self.Reflect.construct(HTMLLIElement,[],e)};B.prototype=HTMLLIElement.prototype;var G="extends-li";self.customElements.define("extends-li",B,{extends:"li"}),P=y.createElement("li",{is:G}).outerHTML.indexOf(G)<0;var J=self.customElements,K=J.get,Q=J.whenDefined;q(self.customElements,"whenDefined",{configurable:!0,value:function(e){var t=this;return Q.call(this,e).then((function(n){return n||K.call(t,e)}))}})}catch(e){P=!P}if(P){var X=function(e){var t=ae.get(e);ve(t.querySelectorAll(this),e.isConnected)},Y=self.customElements,Z=y.createElement,ee=Y.define,te=Y.get,ne=Y.upgrade,re=T||{construct:function(e){return e.call(this)}},oe=re.construct,ae=new S,le=new E,ie=new m,ue=new m,ce=new m,se=new m,fe=[],he=[],de=function(e){return se.get(e)||te.call(Y,e)},ve=g({query:he,handle:function(e,t,n){var r=ce.get(n);if(t&&!r.isPrototypeOf(e)){var o=k(e);be=L(e,r);try{new r.constructor}finally{be=null,o()}}var a="".concat(t?"":"dis","connectedCallback");a in r&&e[a]()}}).parse,ge=g({query:fe,handle:function(e,t){ae.has(e)&&(t?le.add(e):le.delete(e),he.length&&X.call(he,e))}}).parse,pe=A.prototype.attachShadow;pe&&(A.prototype.attachShadow=function(e){var t=pe.call(this,e);return ae.set(this,t),t});var ye=function(e){if(!ue.has(e)){var t,n=new Promise((function(e){t=e}));ue.set(e,{$:n,_:t})}return ue.get(e).$},me=e(ye,b),be=null;D(self).filter((function(e){return/^HTML.*Element$/.test(e)})).forEach((function(e){var t=self[e];function n(){var e=this.constructor;if(!ie.has(e))throw new C("Illegal constructor");var n=ie.get(e),r=n.is,o=n.tag;if(r){if(be)return me(be,r);var a=Z.call(y,o);return a.setAttribute("is",r),me(L(a,e.prototype),r)}return oe.call(this,t,[],e)}q(n.prototype=t.prototype,"constructor",{value:n}),q(self,e,{value:n})})),q(y,"createElement",{configurable:!0,value:function(e,t){var n=t&&t.is;if(n){var r=se.get(n);if(r&&ie.get(r).tag===e)return new r}var o=Z.call(y,e);return n&&o.setAttribute("is",n),o}}),q(Y,"get",{configurable:!0,value:de}),q(Y,"whenDefined",{configurable:!0,value:ye}),q(Y,"upgrade",{configurable:!0,value:function(e){var t=e.getAttribute("is");if(t){var n=se.get(t);if(n)return void me(L(e,n.prototype),t)}ne.call(Y,e)}}),q(Y,"define",{configurable:!0,value:function(e,t,n){if(de(e))throw new N("'".concat(e,"' has already been defined as a custom element"));var r,o=n&&n.extends;ie.set(t,o?{is:e,tag:o}:{is:"",tag:e}),o?(r="".concat(o,'[is="').concat(e,'"]'),ce.set(r,t.prototype),se.set(e,t),he.push(r)):(ee.apply(Y,arguments),fe.push(r=e)),ye(e).then((function(){o?(ve(y.querySelectorAll(r)),le.forEach(X,[r])):ge(y.querySelectorAll(r))})),ue.get(e)._(t)}})}}();

        window.addEventListener('load', function() {
          requestIdleCallback(() => {
            try {
              window.partytown = {
                forward: ['dataLayer.push', 'gtag'],
              };
              /* Inlined Partytown Snippet */
              !function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,"/"==(a=(o.lib||"/~partytown/")+(o.debug?"debug/":""))[0]&&(s=e.querySelectorAll('script[type="text/partytown"]'),i!=t?i.dispatchEvent(new CustomEvent("pt1",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener("pt0",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||"partytown-sw.js"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener("statechange",(function(t){"activated"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?"script":"iframe"),t||(c.setAttribute("style","display:block;width:0;height:0;border:0;visibility:hidden"),c.setAttribute("aria-hidden",!0)),c.src=a+"partytown-"+(t?"atomics.js?v=0.5.4":"sandbox-sw.html?"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement("script")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(".").map((function(e,n,i){p=p[i[n]]=n+1<i.length?"push"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),"complete"==e.readyState?u():(t.addEventListener("DOMContentLoaded",u),t.addEventListener("load",u))}(window,document,navigator,top,window.crossOriginIsolated);
            } catch {}
          });
        });

        try {
          if (navigator.serviceWorker) {
            navigator.serviceWorker
              .register('/sw.js', { scope: '/' })
              .then((reg) => {
                console.log('Registration succeeded. Scope is ' + reg.scope);
              }).catch((error) => {
                console.log('Registration failed with ' + error);
              });

            bs();
          }
        } catch {}

        async function bs() {
          if (!navigator.permissions) { return; }

          const registration = await navigator.serviceWorker.ready;
          const status = await navigator.permissions.query({
            name: 'periodic-background-sync',
          });
          if (status.state === 'granted') {
            await registration.periodicSync.register('check-deals', {
              // An interval of one day.
              minInterval: 24 * 60 * 60 * 1000,
            });
          }
        }
      `}} />
      <script type="module" src="/src/js/web-components.js"></script>
      <script type="module" src="/src/js/app.js"></script>
    </>
  )
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
