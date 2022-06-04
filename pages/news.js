import axios from 'axios';

import { getXboxNewsURL } from '../utils';
import {
  NewsTemplate,
} from '../components';

export const getStaticProps = async function () {
  const news = await axios.get(getXboxNewsURL()).then(response => response.data);
  return {
    props: { news },
    revalidate: 1,
  }
};

export default function News({ news }) {
  return (
    <>
      <div className="news page page-fixed page-on">
        <div className="news-content page-content">
          <h2>Noticias recientes</h2>
          {news.map((n, i) => (
            <NewsTemplate news={n} key={i}/>
          ))}
        </div>
      </div>
    </>
  )
}
