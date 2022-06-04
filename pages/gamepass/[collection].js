import Head from 'next/head';
import axios from 'axios';

import { getGamePassURL } from '../../utils';
import {
  GameCardTemplate,
} from '../../components';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export const getStaticProps = async function ({ params }) {
  const { collection } = params;
  const games = await axios.get(getGamePassURL(collection, 0)).then(response => response.data);

  return {
    props: { games, collection },
    revalidate: 1,
  }
};

export default function GamePass({ games, collection }) {
  return (
    <>
      <Head>
        <title>{`${collection} | XStore`}</title>
      </Head>
      <div className="collection list page page-on">
        <div className="collection-content page-content">
          <h2>{collection}</h2>
          {games.map((game, index) => (
            <GameCardTemplate game={game} />
          ))}
        </div>
      </div>
    </>
  )
}
