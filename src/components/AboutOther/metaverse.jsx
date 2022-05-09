const Metaverse = ({ title, subtitle, img }) => {

  return (

    <section className="about-us-area section-padding-0-100 clearfix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 offset-lg-0">
            <div className="who-we-contant">
              <div className="dream-dots text-left fadeInUp" data-aos="fade-up" data-aos-delay="200">
                <span className="gradient-text blue">{title}</span>
              </div>
              <h4 className="fadeInUp" data-aos="fade-up" data-aos-delay="200">{subtitle}</h4>
              <p className="fadeInUp" data-aos="fade-up" data-aos-delay="200">
                Where users can create a new avatar and create their virtual world. Users also collaborate with other users and create a new virtual world.
              </p>
              <a
                data-aos="fade-up" data-aos-delay="350"
                target={"_blank"}
                href={"https://metaverse.cryptonium.in/"}
                class="btn pushable mt-3">
                <span class="front">
                  Read More
                </span>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-0 col-md-12 mt-30 no-padding-left">
            <div className="welcome-meter floating-anim fadeInUp">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Metaverse;