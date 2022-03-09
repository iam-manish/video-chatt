import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'service_uwrudmm', 'template_it76qd3', e.target, 'wJzJSvTZySDb4260M'
      )
      .then(
        (result) => {
          alert("Message send");
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(result.text)
          clearState()
        },
        (error) => {
          alert("Message not send");
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container' style={{marginTop:5+"%",marginBottom:1+"%"}}>
          <div className='col-md-8' >
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p data-aos="fade-right" style={{color:"black"}}>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit} style={{marginTop:"-30px"}}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className='col-md-3 col-sm-1 col-md-offset-1 contact-info' >
            <div className='contact-item' >
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                <span data-aos="fade-left"> {props.data ? props.data.address : 'loading'}</span>
               
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  {/* <i className='fa fa-phone'></i> Phone */}
                </span>{' '}
                <span data-aos="fade-left">{props.data ? props.data.phone : 'loading'}</span>
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                <a href="mailto:info@blocorbit.com">
                <span data-aos="fade-left">{props.data ? props.data.email : 'loading'}</span>
                </a>
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <a href="https://www.linkedin.com/company/blocorbit/?viewAsMember=true" target="_blank" >
                <span>
                  <i className='fa fa-linkedin'></i> LinkedIn
                </span>{' '}
                </a>
              </p>
            </div>
            
          </div>
          {/* <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a target="_blank" href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; Copyright 2022. BlocOrbit | All Right Reserved{' '}
          </p>
        </div>
      </div>
    </div>
  )
}
