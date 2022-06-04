import Head from 'next/head';
import axios from 'axios';

import { getXboxURL } from '../utils';
import {
  SectionTemplate,
  GamepassSection,
  GoldSection,
} from '../components';

export const getStaticProps = async function () {
  const sections = [
    {
      type: 'new',
      title: 'Salidos del horno',
      list: [],
    },
    {
      type: 'deals',
      title: 'Ahorrate unos mangos',
      list: [],
    },
    {
      type: 'coming',
      title: '¡Mirá lo que se viene!',
      list: [],
    },
    {
      type: 'best',
      title: 'Deberías jugarlos',
      list: [],
    },
    {
      type: 'most',
      title: 'Los más jugados',
      list: [],
    },
    {
      type: 'free',
      title: 'Gratarola',
      list: [],
    },
  ];

  await Promise.all(sections.map(async ({ type }) => {
    const games = await axios.get(getXboxURL(type)).then((response) => response.data);
    const section = sections.find(section => section.type === type);
    section.list.push(...games);
  }));

  const preloadLCP = sections[0].list[0];
  const lcp = preloadLCP.images.titledheroart ?
    (preloadLCP.images.titledheroart.url || preloadLCP.images.titledheroart[0].url)
    : preloadLCP.images.screenshot[0].url;

  return {
    props: { sections, lcp: lcp + '?w=630', },
    revalidate: 1,
  }
};

export default function Home({ sections, lcp }) {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href={lcp} />
      </Head>
      <div className="home">
        {sections.map((section, index) => (
          <>
            <SectionTemplate section={section} key={section.type} />
            {index === 0 && <notification-prompt hidden key={`notif-${index}`}></notification-prompt>}
            {index === 2 && <GamepassSection key={`gamepass-${index}`} />}
            {index === 5 && <GoldSection key={`gold-${index}`} />}
          </>
        ))}
      </div>
    </>
  )
}
