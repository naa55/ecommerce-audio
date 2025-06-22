import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import FeatureTwo from '../components/FeatureTwo';
import FeatureThree from '../components/FeatureThree';
import HomeFeature from '../components/HomeFeature';
import HomeFeatureTwo from '../components/HomeFeatureTwo';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Feature />
      <HomeFeature />
      <HomeFeatureTwo />
      <FeatureTwo />
      {/* <FeatureThree/> */}
    </div>
  )
}

export default Home