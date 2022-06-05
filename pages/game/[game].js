import Head from 'next/head';
import axios from 'axios';

import { gameXboxURL } from '../../utils';
import {
  GameDetailTemplate,
} from '../../components';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export const getStaticProps = async function ({ params }) {
  const gameId = params.game.split('_')[1];

  if (!gameId) {
    return {
      redirect: 'https://xstoregames.com',
    };
  }

  const game = await axios.get(gameXboxURL(gameId)).then(response => response.data).then(game => game[0]);

  const lcp = game.images.titledheroart ?
    (game.images.titledheroart.url || game.images.titledheroart[0].url)
    : game.images.screenshot ? game.images.screenshot[0].url
    : game.images.superheroart.url;

  return {
    props: { game, lcp: lcp + '?w=630', },
    revalidate: 1,
  }
};

export default function Detail({ game, lcp }) {
  return (
    <>
      <Head>
        <title>{`${game.title} | XStore`}</title>
        <meta name="description" content={`${game.title}: ${game.description.split('.')[0].replace(/\n/gi, '')}.`} />
        <link rel="preload" as="image" href={lcp} fetchpriority="high" />
      </Head>
      <div className="detail page page-on">
        <div className="detail-content page-content">
          <GameDetailTemplate game={game} />
        </div>
      </div>
    </>
  )
}
