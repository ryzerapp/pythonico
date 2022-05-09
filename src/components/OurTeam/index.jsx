import SectionHeading from "../SectionHeading";

const OurTeam = ({ data, ClassSpanTitle }) => {
  return (
    <>
      <section
        style={{
          background: "radial-gradient(black, transparent)",
        }}
        className="our_team_area myTeam section-padding-100-0 clearfix"
        id="team"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionHeading
                  title="Our Awesome"
                  text="Team"
                ClassSpanTitle={ClassSpanTitle}
              />
            </div>
          </div>

          <div class="swiper mySwiper container">
            <div class="swiper-wrapper content">
              {data &&
                data.map((item, key) => (
                  <div class="swiper-slide card responsive" key={key}>
                    <div class="card-content">
                      <div class="image">
                        <img src={item.img} className="center-block" alt="" />
                      </div>
                      {/* <div class="media-icons">
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-github"></i>
            </div> */}
                      <div class="name-profession">
                        <span class="name">{item.title}</span>
                        <span class="profession">{item.text}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
