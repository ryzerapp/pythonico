import SectionHeading from "../../../components/SectionHeading"

import Service from "./Service"


const OurServices = ({data}) => {

    return (

      <section
        style={{
          background: "radial-gradient(black, transparent)"
        }}
        className="our_services_area section-padding-0-0 clearfix pt-5">
        <div className="container">
          <SectionHeading
            title="Why choose us"
            text="Our Main Features"
          />

          <div className="row">
            {data && data.map((item , key) => (
              <Service
                key={key}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>
    );

}

export default OurServices;