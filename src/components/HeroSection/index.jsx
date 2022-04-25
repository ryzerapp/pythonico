const SecHeroSection = ({
      ClassSec="",
      specialHead="",
      title="",
      link1="",
      link2="",
      img="",
      AbsoImgInfo="",
      AddWrapper=false,
      HomeDemo1=false,
      HomeDemo2=false,
      HomeDemo3=false
    }) => {

  return (
    <>
      {HomeDemo1 && (
        <section className="hero-section moving" id="home">
          <div className="moving-bg" />
          <div className="hero-section-content">
            <div className="container ">
              <div className="row align-items-center">
                <div className="col-12 col-lg-5 col-md-12">
                  <div className="welcome-content">
                    <div className="promo-section">
                      <h3 className="special-head dark">{specialHead}</h3>
                    </div>
                    <h1 className="" data-aos-delay="200">{title}</h1>
                    <p className="w-text " data-aos-delay="300">
                      We transform the digital world into Blockchain.
                      <br></br>
                      See Our Whitepaper for More Information About
                      <br></br>
                      <span className="gradient-text">Digital Art 2.0</span>
                    </p>
                    <div className="dream-btn-group " data-aos-delay="400">
                      <a
                        target={"_blank"}
                        href={process.env.REACT_APP_WHITEPAPER}
                        class="btn pushable mr-3">
                        <span class="front">
                          Whitepaper
                        </span>
                      </a>
                      <a
                        target={"_blank"}
                        href={process.env.REACT_APP_SWAP}
                        class="btn pushable">
                        <span class="front">
                          Buy Token
                        </span>
                      </a>
                    </div>

                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="dotted" data-aos-delay="500">
                    <img
                      src={img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {HomeDemo2 && (
        <section className="hero-section app section-padding" id="home">
          <div className="hero-section-content">
            <div className="container ">
              <div className="row align-items-center">
                <div className="col-12 col-lg-7 col-md-12">
                  <div className="welcome-content">
                    <div className="promo-section">
                      <h3 className="special-head dark">{specialHead}</h3>
                    </div>
                    <h1>{title}</h1>
                    <p className="w-text">We have over 15 year exprience in business consultting arena. We have over 15 year exprience in business consultting arena and artficial intelligence.</p>
                    <div className="dream-btn-group">
                      <a href="#" className="btn more-btn mr-3">{link1}</a>
                      <a href="#" className="btn more-btn">{link2}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {HomeDemo3 && (
        <section className="hero-section de-3 section-padding" id="home">
          <div className="hero-section-content">
            <div className="container ">
              <div className="row align-items-center">
                <div className="col-12 col-lg-5 col-md-12">
                  <div className="welcome-content">
                    <div className="promo-section">
                      <h3 className="special-head dark">{specialHead}</h3>
                    </div>
                    <h1>{title}</h1>
                    <p className="w-text fadeInUp" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. Eveniet.</p>
                    <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                      <a href="#" className="btn more-btn mr-3">{link1}</a>
                      <a href="#" className="btn more-btn">{link2}</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>

  );
}

export default SecHeroSection;