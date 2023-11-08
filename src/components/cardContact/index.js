import './style.css'

export default function CardContact(){
  return(
    <div className='Card-contact'>
      <div className='Card-left-side'>
        <div>
          <h2>Contact</h2>
          <p>I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.</p>
        </div>
        <div>
          <p>Telefone</p>
          <p>Email</p>
        </div>
      </div>
      <div className='Card-right-side'>
        <h2>Send me a message</h2>
        <input placeholder='Nome' />
        <input placeholder='Email adress' />
        <input placeholder='Subject' />
        <input placeholder='Your message' />
        <button>Send message</button>
      </div>
    </div>
  )
}