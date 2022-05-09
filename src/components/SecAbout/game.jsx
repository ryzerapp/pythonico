const Game = ({ imgDwon = false, title, text, img }) => {

  return (
    <>
      <section className="about-us-area section-padding-100 clearfix">
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
                  If you are not a content creator, and still want to create NFT or NFT Collection. Don't worry Just Play Our Games.
                </p>
                <p data-aos="fade-up" data-aos-delay="350">
                  You can use Horizon or Cryptonium both platforms for playing games. Get unlimited Avatar.
                </p>
                <p data-aos="fade-up" data-aos-delay="360">
                  We write an algorithm for generating millions of unique avatars. In Just Single Click You will get your avatar.
                  If you like your generated Avatar you can save it to your account or create NFT.
                </p>
                <a
                  data-aos="fade-up" data-aos-delay="400"
                  target={"_blank"}
                  href={"https://www.cryptonium.in/game"}
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

export default Game;