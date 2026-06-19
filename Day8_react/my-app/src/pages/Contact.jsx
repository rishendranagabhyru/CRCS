import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      
      // Store in local storage for past submissions logs if needed
      const pastMessages = JSON.parse(localStorage.getItem("contact_messages") || "[]");
      pastMessages.push({
        id: Date.now(),
        ...formData,
        date: new Date().toLocaleDateString()
      });
      localStorage.setItem("contact_messages", JSON.stringify(pastMessages));

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: ""
      });

      // Clear success banner after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Have questions? We'd love to hear from you. Send us a message and we'll respond shortly.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          {submitted && (
            <div className="success-banner">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <path d="m22 4-10 10.01-3-3"/>
              </svg>
              <span>Message Sent Successfully! We will respond shortly.</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                className="form-input"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <span style={{ color: '#ef4444', fontSize: '12px', fontWeight: '500' }}>{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                className="form-input"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <span style={{ color: '#ef4444', fontSize: '12px', fontWeight: '500' }}>{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                className="form-input"
                style={{ appearance: 'none', backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2364748b\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '16px' }}
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Course Support">Course Support</option>
                <option value="Partnership">Business Partnership</option>
                <option value="Feedback">Feedback</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="form-textarea"
                placeholder="Enter details here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              {errors.message && <span style={{ color: '#ef4444', fontSize: '12px', fontWeight: '500' }}>{errors.message}</span>}
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-info-card">
          <div className="contact-info-header">
            <h3>Get in Touch</h3>
            <p>You can also reach us via the following channels.</p>
          </div>
          
          <ul className="contact-info-list">
            <li className="contact-info-item">
              <div className="contact-info-icon">📍</div>
              <div className="contact-info-text">
                <p>Office Address</p>
                <p>100 Innovation Way, Tech Park, Bangalore, India</p>
              </div>
            </li>
            <li className="contact-info-item">
              <div className="contact-info-icon">📞</div>
              <div className="contact-info-text">
                <p>Phone Number</p>
                <p>+91 80 4912 3456</p>
              </div>
            </li>
            <li className="contact-info-item">
              <div className="contact-info-icon">✉️</div>
              <div className="contact-info-text">
                <p>Email Address</p>
                <p>support@skillhub.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
