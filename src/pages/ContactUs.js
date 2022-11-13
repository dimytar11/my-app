import './ContactUs.scss';

export default function ContactUs() {
  return (
    <div className="contact-main">
      <form className="contact-form">
        
          <span className="contact-label">Enter your name:</span>
          <input type="text" />
        
        
          <span className="contact-label">Enter your email:</span>
          <input type="text" />
        
        
          <span className="contact-label">Enter your text</span>
          <textarea className="contact-textarea" cols="20" rows="5"></textarea>
        
        <button type="submit" className="contact-btn">Submit</button>
      </form>
    </div>
  );
}
