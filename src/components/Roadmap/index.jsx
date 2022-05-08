import SectionHeading from "../SectionHeading"

const Roadmap = ({data , ClassSpanTitle}) => {

    return (

      <section
        style={{
          background: "radial-gradient(black, transparent)"
        }}
        className="roadmap section-padding-0-0 pt-5" id="roadmap">
        <SectionHeading
          title="Roadmap"
          text="Our Project Development Roadmap"
          ClassSpanTitle={ClassSpanTitle}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                {data && data.map((item , key) => (
                  <div className="timeline" key={key}>
                    <div className="icon" />
                    <div className="date-content">
                      <div className="date-outer"> <span className="date"> <span className="month">{item.month}</span> <span className="year">{item.year}</span> </span>
                      </div>
                    </div>
                    <div className="timeline-content">
                      <h5 className="title">{item.title}</h5>
                      <p className="description text-light-gray">{item?.description}</p>
                      {item?.link_value ?
                        <a
                          target={"_blank"}
                          href={item?.link_value} >{item?.link_name} </a>
                        : null}

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default Roadmap