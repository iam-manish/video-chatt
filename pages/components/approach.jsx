export const Approach = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'  style={{marginTop:5+"%",marginBottom:1+"%"}}>
        <div className='section-title text-center'>
          <h2>Our Approach</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div className="card" data-aos="fade-right">
                <div key={`${d.name}-${i}`} className='col-md-3'>
                  <div className='testimonial' >
                    <div className='testimonial-image'>
                      {' '}
                      {/* <img src={d.img} alt='' />{' '} */}
                    </div>
                    <div className='testimonial-content'>
                      <p style={{fontWeight:"bold",textAlign:"center",fontStyle:"normal",fontSize:"17px"}}>{d.text}<hr/></p>
                      <div className='testimonial-meta p-text' style={{textAlign:"left"}}>  {d.name} </div>
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
