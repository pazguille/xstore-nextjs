import Link from 'next/link';

import {
  convertDollar,
  slugify,
} from './utils.js';

export function SectionTemplate({ section }) {
  return (
    <section>
      <h2>{section.title}</h2>
      <GameListTemplate section={section} />
      <Link href={`/collection/${section.type}`} >
        <a className="see-all link" id={`collection-${section.type}`} aria-label={`Ver el listado de ${section.title}`}>Ver todos</a>
      </Link>
    </section>
  );
}

export function GameListTemplate({ section }) {
  return (
    <ul className="carousel" aria-roledescription="Carrusel" aria-label={section.title}>
      {section.type === 'new' ?
        section.list.map((game, index) => <li key={index}><GameCardNewTemplate game={game} index={index} /></li>)
      : section.list.map((game, index) => <li key={index}><GameCardTemplate game={game} /></li>)
      }
    </ul>
  );
}

export function GamePriceTemplate({ game }) {
  if (!game.sold_separately) {
    return '';
  }

  const dollar = 1;

  return (
    <div className="game-price">
      {game.price.off && <span className="game-price-off">{game.price.off}% OFF</span>}
      <span className="game-price-amount">
        {(game.price.deal || game.price.amount) ?
          <x-price amount={convertDollar(game.price.deal || game.price.amount, dollar)}></x-price>
          : game.demo ? 'Demo' : 'Gratis'
        }
      </span>
      {game.price.deal && <div className="game-price-prev">
        <x-price amount={convertDollar(game.price.amount, dollar)} strike></x-price>
      </div>}
      {game.price.amount > 0 && <small className="game-price-taxes">impuestos incluídos</small>}
      {game.gold_deal && <div>Precio Gold: <x-price amount={convertDollar(game.price.gold_deal, dollar)}></x-price></div>}
    </div>
  );
}

export function GameInfoTemplate({ game }) {
  return (
    <div>
      <h3 className="game-title">
        <Link href={`/game/${slugify(game.title)}_${game.id}`}>
          <a id={`detail-${game.id}`} className="link">{game.title}</a>
        </Link>
      </h3>
      <p className="game-by">by {game.developer || game.publisher}</p>
      {game.game_pass && <img className="game-pass" src="/src/assets/game-pass.png" width="60px" height="11px" alt="Disponible en Game Pass" />}
      {game.ea_play  && <img className="game-pass" src="/src/assets/ea-play.png" width="60px" height="11px" alt="Disponible en EA Play" />}
      <GamePriceTemplate game={game} />
    </div>
  );
}

export function GameDetailTemplate({ game }) {
  const img = game.images.titledheroart ?
  (game.images.titledheroart.url || game.images.titledheroart[0].url)
  : game.images.screenshot ? game.images.screenshot[0].url
  : game.images.superheroart.url;
  const until = Math.ceil((Date.parse(new Date(game.price.ends)) - Date.parse(new Date())) / (24 * 3600 * 1000));

  return (
    <article className="game-preview" style={{"--game-preview-url": `url(${img}?w=1000&q=70)`}}>
      <video className="hero" autoPlay loop muted playsInline></video>
      <div>
        <div className="game-preview-info">
          <h3 className="game-title">{game.title}</h3>
          <p className="game-by">by {game.developer || game.publisher}</p>
          {game.game_pass && <img className="game-pass" src="/src/assets/game-pass.png" width="70px" height="13px" alt="Disponible en Game Pass" />}
          {game.ea_play && <img className="game-pass" src="/src/assets/ea-play.png" width="70px" height="13px" alt="Disponible en EA Play" />}

          <GamePriceTemplate game={game} />
          <a href={`https://www.xbox.com/es-ar/games/store/a/${game.id}`} className="game-buy-now btn">Comprar ahora</a>
          {until ? <div className="game-deal-ends"><small>La oferta termina en {until} días.</small></div> : ''}

          <h4>Fecha de lanzamiento</h4>
          <time dateTime={new Date(game.release_date).toLocaleString('es-AR')}>{new Date(game.release_date).toLocaleString('es-AR', { day: '2-digit' , month: '2-digit', year: 'numeric',  })}</time>

          <h4>Descripción</h4>
          <p className="game-description">{game.description}</p>
        </div>
        {Array.isArray(game.images.screenshot) &&
          <div className="game-preview-images">
            <h4>Galeria</h4>
            <img alt="" width="100%" loading="lazy" decoding="async" src={`${img}?w=1000`} />
            <a href="https://www.youtube.com/results?search_query=${game.title}+xbox+trailer" target="_blank" className="game-preview-video" aria-label="Ver trailers en YouTube">
              <img width="100%" loading="lazy" decoding="async" src="/src/assets/video.jpg" alt="" />
            </a>
            {game.images.screenshot.map((img) => <img alt="" width="100%" loading="lazy" decoding="async" src={`${img.url}?w=1000`} />)}
          </div>
        }
      </div>
    </article>
  );
}

export function GameCardNewTemplate({ game, index }) {
  const img = game.images.titledheroart ?
    (game.images.titledheroart.url || game.images.titledheroart[0].url)
    : game.images.screenshot[0].url;
  const loading = index === 0 ? { fetchpriority: 'high' } : {loading: 'lazy'};

  return (
    <article className="game-preview-new">
      <GameInfoTemplate game={game} />
      <img className="game-img" width="315px" height="177px" alt="" {...loading} decoding="async" src={`${img}?w=630`} />
    </article>
  );
}

export function GameCardTemplate({ game }) {
  const img = game.images.boxart ?
    game.images.boxart.url : game.images.poster?.url;
  return (
    <article className="game-preview">
      <GameInfoTemplate game={game} />
      <img className="game-img" width="165px" height="165px" alt="" decoding="async" loading="lazy" src={`${img}?w=310`} />
    </article>
  );
}

export function NewsTemplate({ news }) {
  return (
    <article className="news-preview">
      <h2><a href={news.link}>{news.title}</a></h2>
      <img className="news-img" width="500px" height="500px" alt="" decoding="async" loading="lazy" src={news.image} />
      <p>{news.description}</p>
    </article>
  );
}

export function emptyWishlist() {
  return <p className="empty-list">Aún no tienes favoritos.</p>;
}

export function emptyList() {
  return <p className="empty-list">No se encontraron juegos.</p>;
}

export function GamepassSection() {
  return (
    <section className="gamepass">
      <h2>Xbox Game Pass</h2>
      <ul>
        <li><a href="/gamepass/new" id="gamepass-new" className="link">Recién agregados</a></li>
        <li><a href="/gamepass/coming" id="gamepass-coming" className="link">Se están por sumar</a></li>
        <li><a href="/gamepass/leaving" id="gamepass-leaving" className="link">Los que se van</a></li>
        <li><a href="/gamepass/all" id="gamepass-all" className="link">Todos</a></li>
      </ul>
    </section>
  );
}

export function GoldSection() {
  return (
    <section className="gold">
      <h2>Xbox Live Gold</h2>
      <ul>
        <li><a href="/gold/gold-new" id="gold-new" className="link">Disponibles</a></li>
        <li><a href="/gold/gold-deals" id="gold-deals" className="link">Ofertas</a></li>
        <li><a href="/gold/gold-free" id="gold-free" className="link">Días gratis</a></li>
      </ul>
    </section>
  );
}
