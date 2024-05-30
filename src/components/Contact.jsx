import React from 'react';

function Contact() {
  return (
    <>
      <div style={{ background: 'linear-gradient(180deg, #b54dff, #340447)', minHeight: '100vh', padding: '20px', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '2.5rem', textAlign: 'center' }}>Contact Us</h1>
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', width: '100%', maxWidth: '400px' }}>
          <label htmlFor="name" style={{ marginRight: '10px', fontSize: '1rem', flex: '0 0 auto', minWidth: '80px' }}>Name:</label>
          <input type="text" id="name" name="name" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #fff', flex: '1', minWidth: '0' }} />
        </div>
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', width: '100%', maxWidth: '400px' }}>
          <label htmlFor="email" style={{ marginRight: '10px', fontSize: '1rem', flex: '0 0 auto', minWidth: '80px' }}>Email:</label>
          <input type="email" id="email" name="email" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #fff', flex: '1', minWidth: '0' }} />
        </div>
        <div style={{ marginBottom: '20px', width: '100%', maxWidth: '400px' }}>
          <label htmlFor="message" style={{ fontSize: '1rem', marginBottom: '10px', display: 'block' }}>Message:</label>
          <textarea id="message" name="message" rows="4" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #fff', width: '100%', minWidth: '0' }} />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'white', color: '#340447', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.2rem' }}>Submit</button>
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <p>123 Main St, Cityville, XYZ 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@example.com</p>
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
            <a href="#" style={{ color: 'white', marginRight: '10px', fontSize: '1.5rem' }}>Facebook</a>
            <a href="#" style={{ color: 'white', marginRight: '10px', fontSize: '1.5rem' }}>Twitter</a>
            <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>Instagram</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
