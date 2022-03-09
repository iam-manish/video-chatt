export const GetStart = (props) => {
    return (
      <div id='getstart'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Get Started</h2>
          </div>
          <div className='row'>
            {props.data
              ? props.data.map((d, i) => (
                <div className="card" >
                  <div key={`${d.name}-${i}`} className='col-md-3' >
                    <div className='testimonial'>
                      <div className='testimonial-image'>
                        {' '}
                        {/* <img src={d.img} alt='' />{' '} */}
                      </div>
                      <div className='testimonial-content' >
                          {/* <div className="getstaredImg"><img src={d.img} alt='' />{' '}</div> */}

                        <p style={{fontWeight:"bold",fontSize:"17px",fontStyle:"normal"}} className="text-center">
                          <span style={{fontSize:"30px",color:"blue"}}>{d.num}</span><br/><hr/>{d.title}
                        </p>
                        <div className='testimonial-meta p-text' data-aos="fade-left">  {d.text} </div>
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
  