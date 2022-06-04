import '../public/src/styles.css'

import React, { useRef, useEffect, memo } from 'react'
// import Router, { useRouter } from 'next/router'
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script'


// const ROUTES_TO_RETAIN = [
//   '/cycle',
// ];

// Router.onRouteChangeStart = (url, req) => {
//   if (url === '/cycle') {
//     document.querySelector('.muna-loader-box').classList.add('page-right');
//   }

//   document.querySelector('.muna-loader-box').removeAttribute('hidden');
//   requestIdleCallback(() => {
//     document.querySelector('.muna-loader-box').classList.add('page-on');
//   });
// };

// Router.onRouteChangeComplete = () => {
//   document.querySelector('.muna-loader-box').classList.add('page-off');
//   setTimeout(() => {
//     requestIdleCallback(() => {
//       document.querySelector('.muna-loader-box').setAttribute('hidden', true);
//       document.querySelector('.muna-loader-box').classList.remove('page-on');
//       document.querySelector('.muna-loader-box').classList.remove('page-off');
//       document.querySelector('.muna-loader-box').classList.remove('page-right');
//     });
//   }, 300);
// };

// Router.onRouteChangeError = () => {
//   document.querySelector('.muna-loader-box').classList.add('page-off');
//   setTimeout(() => {
//     requestIdleCallback(() => {
//       document.querySelector('.muna-loader-box').setAttribute('hidden', true);
//       document.querySelector('.muna-loader-box').classList.remove('page-on');
//       document.querySelector('.muna-loader-box').classList.remove('page-off');
//       document.querySelector('.muna-loader-box').classList.remove('page-right');
//     });
//   }, 300);
// };

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" />

        <title>XStore: La tienda argenta de Xbox</title>
        <meta name="description" content="Explora la amplia colección de títulos de videojuegos en el catálogo de juegos de Xbox. Busca los éxitos de taquilla favoritos, las ofertas y nuevos lanzamientos en precios argentinos." />

        {/* <link rel="preconnect" href="https://www.dolarsi.com" /> */}
        {/* <link rel="preconnect" href="https://api.xstoregames.com" /> */}
        <link rel="preconnect" href="https://store-images.s-microsoft.com" />
        {/* <link rel="preconnect" href="https://media.rawg.io/" /> */}

        {/* <link rel="preload" as="fetch" href="https://www.dolarsi.com/api/api.php?type=valoresprincipales" crossorigin="anonymous" />
        <link rel="prefetch" as="fetch" fetchpriority="low" href="https://api.xstoregames.com/api/games?list=new&skipitems=0" crossorigin="anonymous" />
        <link rel="prefetch" as="fetch" fetchpriority="low" href="https://api.xstoregames.com/api/games?list=deals&skipitems=0" crossorigin="anonymous" />
        <link rel="prefetch" as="fetch" fetchpriority="low" href="https://api.xstoregames.com/api/games?list=coming&skipitems=0" crossorigin="anonymous" />
        <link rel="prefetch" as="fetch" fetchpriority="low" href="https://api.xstoregames.com/api/games?list=best&skipitems=0" crossorigin="anonymous" />
        <link rel="prefetch" as="fetch" fetchpriority="low" href="https://api.xstoregames.com/api/games?list=free&skipitems=0" crossorigin="anonymous" />
        <link rel="prefetch" as="fetch" fetchpriority="low" href="https://api.xstoregames.com/api/games?list=most&skipitems=0" crossorigin="anonymous" /> */}

        <link rel="shortcut icon" href="/src/assets/favicon.png" />
        <link rel="apple-touch-icon" href="/src/assets/favicon.png" />

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

        <meta name="description" content="Explora la amplia colección de títulos de videojuegos en el catálogo de juegos de Xbox. Busca los éxitos de taquilla favoritos, las ofertas y nuevos lanzamientos en precios argentinos." />
        <meta name="keywords" content="Xbox Series X, Xbox One, xbox live, ofertas con gold, juegos con gold, próximos juegos de xbox, nuevos juegos en xbox, nuevos juegos, videojuegos, catálogo de juegos de xbox, próximos juegos de xbox, nuevos juegos en xbox, nuevos juegos, videojuegos" />

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

        <link rel="manifest" href="/manifest.json" />
      </Head>
      <header>
        <h1>
          <Link href="/">
            <a>
              <img src="/src/assets/favicon.png" width="25px" height="25px" alt="" />
              XStore
            </a>
          </Link>
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
              <Link href="/">
                <a id="home" className="home-btn footer-btn" aria-label="Inicio">
                  <svg width="28" height="28" viewBox="0 0 980 980" aria-hidden="true" fill="#fff"><path d="M53 897c24 15 55 12 76-7 0 0 117-101 152-129 11-9 25-14 39-14h345c14 0 27 5 38 14 35 28 153 129 153 129 20 19 52 22 75 7 78-52 53-190 34-267-16-64-38-126-64-187-37-89-118-203-232-179-11 3-24 10-33 15-9 6-20 9-31 9h-73V118a40 40 0 1 0-80 0v170h-72c-11 0-22-3-32-9-9-5-22-12-33-15-113-24-195 90-232 179-25 61-47 123-63 187-19 77-45 215 33 267zm680-522a44 44 0 1 1 0 87 44 44 0 0 1 0-87zM630 502a44 44 0 1 1 0 87 44 44 0 0 1 0-87zm-432-49h51v-50a30 30 0 1 1 60 0v50h50a30 30 0 1 1 0 60h-50v51a30 30 0 1 1-60 0v-51h-51a30 30 0 1 1 0-60z"/></svg>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/wishlist">
                <a id="wishlist" className="link wish-btn footer-btn" aria-label="Favoritos">
                  <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" fill="#fff"><path d="M12 21.6C9.4 21.6 2 15 2 8.5c0-3 2.5-5.8 5.4-5.8 2.2 0 3.8 1.6 4.6 2.8.8-1.2 2.4-2.8 4.6-2.8 3 0 5.4 2.7 5.4 5.8 0 6.4-7.4 13-10 13.1z"/></svg>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <a id="news" className="link news-btn footer-btn" aria-label="Noticias">
                  <svg width="28" height="28" viewBox="-5 -5 32 32" aria-hidden="true" fill="#fff"><path d="M19.2 24C19.2 13.5 10.5 4.8 0 4.8V0c13.2 0 24 10.8 24 24h-4.8zm-16-6.6a3.3 3.3 0 1 1 0 6.6 3.3 3.3 0 0 1 0-6.6zM16 24h-4.7c0-6.2-5-11.2-11.2-11.2V8A16 16 0 0 1 16 24z"/></svg>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>

      <Script id="inline-script" dangerouslySetInnerHTML={{ __html: `
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
      ` }} />
      <Script type="module" src="/src/js/web-components.js"></Script>
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
