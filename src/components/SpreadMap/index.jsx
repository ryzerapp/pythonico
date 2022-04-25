const SpreadMap = ({Wwhitepaper , SectionIcon11}) => {

  return (

    <section
      style={{
        background: "radial-gradient(black, transparent)"
      }}
      className="spread-map download section-padding-0-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xs-12">
            <div className="welcome-meter">
              <img src={Wwhitepaper} className="center-block" alt="" />
            </div>
          </div> 
          <div className="col-lg-6 col-xs-12 mt-s">
            <div className="who-we-contant">
              <h4 className="gradient-text">Downoad Our Whitepaper</h4>
              <p className="text-white">
                For More Information Download our whitepaper.
                <br></br>
                Where you can find advantages for Digital Art 2.0
              </p>
              <a
                target={"_blank"}
                href={process.env.REACT_APP_WHITEPAPER}
                class="btn pushable mt-3">
                <span class="front">
                  Get Whitepaper
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default SpreadMap