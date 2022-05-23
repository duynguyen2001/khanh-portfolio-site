import Link from 'next/link';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import { Background } from '../components/background/Background.jsx';
import Blog from './blog';

export default function Index({ globalData }) {
  return (
    <Background>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        
      </main>
      <Footer copyrightText={globalData.footerText} />
    </Background>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}
