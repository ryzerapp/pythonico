const SecAbout = ({imgDwon=false , title , text , img}) => {

  return (
    <>
      <section className="about-us-area section-padding-100 clearfix" id="services">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
                  <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
                    <img src={img} alt="" />
                  </div>
                </div>
                <div className="col-12 col-lg-6 offset-lg-0">
                  <div className="who-we-contant mt-s">
                    <div className="dream-dots text-left" data-aos="fade-up" data-aos-delay="300">
                  <span className="gradient-text ">{title}</span>
                    </div>
                <h4 data-aos="fade-up" data-aos-delay="300">{text}</h4>
                <p data-aos="fade-up" data-aos-delay="300">
                  At Cryptonium, we are building a marketplace where you can launch, buy and sell your NFTs or NFT collections!
                  We are proud to be the multichain marketplace with 4 chains Ethereum, Binance, Polygon, Avalanche.
                </p>
                <p data-aos="fade-up" data-aos-delay="350">
                  You can trade NFTs on your choice of blockchain with us! We are building tools that allow consumers to launch and trade NFTs with the minimum possible technical understanding!
                </p>
                <p data-aos="fade-up" data-aos-delay="360">
                  We are building tools with which creators can estimate the value of their art via virtual auctions!We have developed tools to educate creators about NFTs and to help them to make the first move toward this revolutionary Idea!
                </p>
                <a
                  data-aos="fade-up" data-aos-delay="400"
                  target={"_blank"}
                  href={"https://www.cryptonium.in/"}
                  class="btn pushable mt-3">
                  <span class="front">
                    Read More
                  </span>
                </a> 
                  </div>
                </div>
              </div>
            </div>
      </section>
    </>
  );
}

export default SecAbout;