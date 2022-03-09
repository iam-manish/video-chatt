export const DevelopmentProcess = (props) => {
    return (
      <div id='developmentprocess'>
        <div className='container' style={{marginTop:5+"%",marginBottom:1+"%"}}>
          <div className='section-title text-center'>
            <h2 style={{color:"#fff"}}>Blockchain Development Process</h2>
            <p style={{color:"#fff"}}>
            We focus on delivering a usable product to the business that is user-friendly, technically robust and scalable. We follow a sound and proven system development process to develop swiftly, test adequately and get product maturity at an early stage. 
          </p>
          </div>
          <div className='row'>
            {props.data
              ? props.data.map((d, i) => (
                <div className="card" >
                  <div key={`${d.name}-${i}`} className='col-md-4' >
                    <div className='testimonial'>
                      <div className='testimonial-image'>
                        {' '}
                        {/* <img src={d.img} alt='' />{' '} */}
                      </div>
                      <div className='testimonial-content'  style={{width:350+"px"}}>
                          {/* <div className="getstaredImg"><img src={d.img} alt='' />{' '}</div> */}

                        <p style={{fontWeight:"bold",fontSize:"17px",fontStyle:"normal"}} className="text-center">
                          <span style={{fontSize:"30px",color:"blue"}}>{d.num}</span><br/><hr/>{d.title}
                        </p>
                        <div data-aos="fade-right" className='testimonial-meta p-text'>  {d.text} </div>
                      </div>
                    </div>
                  </div>
              </div>
                  
                ))
              : 'loading'}
          </div>
        </div>
      </div>
    )
  }
  