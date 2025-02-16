import "../Styles/contact.css";

const ImageFile = "/space-galaxy-background.jpg"; // Ensure this is in 'public/'

export default function ContactPage() {
  return (
    <div className="contact-container">
      <img src={ImageFile} alt="Galaxy Background" className="background-image" />

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us!</p>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Send Message</button>
      </div>
    </div>
  );
}
