import {useEffect} from "react";
import {addRemoveClassBody} from '../../utils'

import {
        HowItWorksInfo,
        Features2InfoTop,
        Features2InfoDown,
        OurTeamInfo
       } from '../../data/data-containers/HomeDemo2/data-HomeDemo2.js';

import SecPricesInfo from '../../data/data-containers/HomeDemo2/data-SecPricesInfo.json';
import TokenDistributionInfo from '../../data/data-containers/HomeDemo2/data-TokenDistributionInfo.json';
import RoadmapInfo from '../../data/data-containers/HomeDemo2/data-RoadmapInfo.json';

import {
        HomeDemo2Wwhitepaper,
        HomeDemo2SectionIcon11,
        } from '../../utils/allImgs'

import './style/HomeDemo2.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import SecHeroSection from '../../components/HeroSection'
import AboutOther from '../../components/AboutOther'
import FuelFeatures from '../../components/FuelFeatures'
import Features2 from '../../components/Features2'
import SpreadMap from '../../components/SpreadMap'
import SecPrices from '../../components/SecPrices'
import TokenDistribution from '../../components/TokenDistribution'
import Roadmap from '../../components/Roadmap'
import OurTeam from '../../components/OurTeam'
import Subscribe from '../../components/Subscribe'
import OurBlog from '../../components/OurBlog'

import HowItWorks from './HowItWorks'



const HomeDemo2Container = () => {

    useEffect(() => {
      addRemoveClassBody('darker')
    },[])

    return (
      <div>
        <Header Title="Home Template2" />
        <SecHeroSection
          specialHead="Creative landing page template"
          title="The most secure Cypto Trading & ICO Launch Wallet ever."
          link1="contact us"
          link2="Learn more"
          HomeDemo1={false}
          HomeDemo2={true}
          HomeDemo3={false}
        />
        <div className="clearfix" />
        <Features2
            icoCounterClass="ico-counter dotted-bg mb-30"
            Features2InfoTop={Features2InfoTop}
            Features2InfoDown={Features2InfoDown}
        />
        <HowItWorks
            data={HowItWorksInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <AboutOther />
        <FuelFeatures />
        <TokenDistribution
            data={TokenDistributionInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <SecPrices
            data={SecPricesInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <div className="clearfix" />
        <SpreadMap
            Wwhitepaper={HomeDemo2Wwhitepaper}
            SectionIcon11={HomeDemo2SectionIcon11}
        />
        
        <Roadmap
            data={RoadmapInfo}
            ClassSpanTitle="gradient-text blue"
        />
        
        <OurTeam
            data={OurTeamInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <Subscribe />
        
        <FooterPages
            ClassSpanTitle="gradient-text blue"
        />
      </div>
    );
};

export default HomeDemo2Container