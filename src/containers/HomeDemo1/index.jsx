import { useEffect } from "react";
import { addRemoveClassBody } from '../../utils'

import {
  SecTrustContent,
  Services,
  SmartContractinfo,
  Features2InfoTop,
  Features2InfoDown,
  OurTeamInfo
} from '../../data/data-containers/HomeDemo1/data-HomeDemo1.js';

import OurJoinUsFirst from '../../data/data-containers/HomeDemo1/data-OurJoinUsFirst.json';
import OurJoinUsSecond from '../../data/data-containers/HomeDemo1/data-OurJoinUsSecond.json';
import SecPricesInfo from '../../data/data-containers/HomeDemo1/data-SecPricesInfo.json';
import TokenDistributionInfo from '../../data/data-containers/HomeDemo1/data-TokenDistributionInfo.json';
import RoadmapInfo from '../../data/data-containers/HomeDemo1/data-RoadmapInfo.json';
import FaqInfo from '../../data/data-containers/HomeDemo1/data-FaqInfo.json';

import {
  HomeDemo1Platform1,
  HomeDemo1Wwhitepaper,
  HomeDemo1SectionIcon11,
  HomeDemo1About1,
  HomeDemo1About2
} from '../../utils/allImgs'

import './style/HomeDemo1.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages/indexnew'

import IntoductionPart from '../../components/HeroSection'
import Cryptonium from '../../components/SecAbout'
import Horizon from '../../components/AboutOther'
import FlowOfPlatform from './JoinUs'
import OurMainFeature from "./OurServices"
import TokenSell from '../../components/Features2'
import Whitepaper from '../../components/SpreadMap'
import SmartContract from '../../components/SmartContract'
import ICORoundePrice from '../../components/SecPrices'
import TokenDistribution from '../../components/TokenDistribution'
import Roadmap from '../../components/Roadmap'
import Faq from '../../components/Faq'
import OurTeam from '../../components/OurTeam'

const HomeDemo1Container = () => {

  useEffect(() => {
    addRemoveClassBody('darker')
  }, [])

  return (
    <div>
      <Header Title="Python Coin ICO" />
      <IntoductionPart
        specialHead="We Introduce Digital Art 2.0"
        title="India's First Ecosystem for Content Creator"
        link1="Whitepaper"
        link2="Buy Token"
        img={HomeDemo1Platform1}
        HomeDemo1={true}
        HomeDemo2={false}
        HomeDemo3={false}
      />
      <div className="clearfix" />
      <Cryptonium
        title="The NFT marketplace"
        text="India's First Multi Chain NFT Marketplace"
        img={HomeDemo1About1}
      />
      <Horizon
        title="The Social Media App"
        subtitle="Earn passive income with Reels."
        img={HomeDemo1About2}
      />
      <Whitepaper
        Wwhitepaper={HomeDemo1Wwhitepaper}
        SectionIcon11={HomeDemo1SectionIcon11}
      />
      {/* <ICORoundePrice data={SecPricesInfo} /> */}
      <div className="clearfix" />
      <TokenDistribution data={TokenDistributionInfo} />
      <TokenSell
        icoCounterClass="ico-counter mb-30"
        Features2InfoTop={Features2InfoTop}
        Features2InfoDown={Features2InfoDown}
      />
      <Roadmap data={RoadmapInfo} />

      {/* <OurMainFeature data={Services} /> */}
      {/* <SmartContract data={SmartContractinfo} /> */}
      <Faq data={FaqInfo} />
      <OurTeam data={OurTeamInfo} />
      {/* <SecTrust data={SecTrustContent} /> */}
      {/* <Subscribe /> */}

      <FooterPages />
    </div>
  );
};

export default HomeDemo1Container