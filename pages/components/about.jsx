export const About = (props) => {
  return (
    <div id="about">
      <div className="container" style={{marginTop:5+"%",marginBottom:1+"%"}}>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 style={{marginTop:10+"px"}}>About Us</h2>
              <p data-aos="fade-left">{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style d-flex">
                <div data-aos="fade-left" className="col-lg-2 col-sm-6 col-xs-12" style={{width:300+"px"}}>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div data-aos="fade-left" className="col-lg-2 col-sm-6 col-xs-12" style={{width:250+"px"}}>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
