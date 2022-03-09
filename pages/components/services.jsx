export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container' style={{marginTop:5+"%",marginBottom:1+"%"}}>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
          {/* Trusted blockchain development company that delivers fast, robust, and easy to integrate solutions. */}
          </p>
        </div>
        <div className='row' style={{overflowX:"hidden"}}>
          {props.data
            ? props.data.map((d, i) => (
                <div data-aos="fade-left" key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className="fa"><img src={d.icon}/></i>
                  <div className='service-desc'>
                    <h3 style={{fontSize:16+"px",fontWeight:"bold"}}>{d.name}</h3>
                    <p className="p-text">{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
