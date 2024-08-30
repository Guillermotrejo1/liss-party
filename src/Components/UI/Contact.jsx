import React from 'react'

function Contact() {
  return (
    <div className='contact__container'>
        <div className="contact__box">
            <form action="">
                <input type="text" name='Name' value="" placeholder='Enter Your Full Name' autoComplete='off' />
                <input type="email" name='Email' value="" placeholder='Enter Your E-mail' autoComplete='off' />
                <input type="tel" name='phoneNumber' value="" placeholder='Enter Your Phone #' autoComplete='off' />
                <textarea value="" name="Requests" placeholder='Enter Your Request Here' autoComplete='off' id=""></textarea>
                <button className='submit__btn'>Submit</button>
            </form>
            <button className='contact__close--btn'>X</button>
        </div>
    </div>
  )
}

export default Contact