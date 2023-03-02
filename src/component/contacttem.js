
import React from 'react'
import Gif from "./img2/contact.gif"
// import { Button } from 'react-bootstrap';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

function Contacttem() {
  return (
<><div className='conatact12'>
<img src={Gif} alt="img"/>
  <div class="contact-form-wrapper d-flex justify-content-center">
    <form action="#" class="contact-form">
      <h5 class="title">Contact us</h5>
      <p class="description1">Thank you for your intrest in our services. Please fill out the form below or e-mail us at.

      </p>
      <div className='boxs'>
        <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required/>
      </div>
      <div className='boxs'>
        <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required/>
      </div>
      <div className='boxs'>
        <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
      </div>
      <div class="submit-button-wrapper boxs">
        <input type="submit" value="Send"/>
      </div>
    </form>
  </div>
</div></>
  )
}

export default Contacttem




