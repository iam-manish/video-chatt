export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'  style={{marginTop:5+"%",marginBottom:1+"%"}}>
        <div className='col-sm-8 col-md-10 col-md-offset-1 section-title'>
          <h2>Development Technologies</h2>
        </div>
        <div className='row' data-aos="fade-left">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='tools col-xs-5 col-md-3 col-lg-3 '  >
                  {' '}
                  <img className={d.icon} src={d.icon}></img>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
