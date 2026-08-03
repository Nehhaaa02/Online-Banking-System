import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome to Online Banking System</h1>
          <p>
            Secure, Fast and Easy Banking at your fingertips.
            Manage your account, transfer money and track
            transactions anytime, anywhere.
          </p>

          <button>Open Account</button>
          <button className="login-btn">Login</button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=700"
            alt="Banking"
          />
        </div>
      </div>
      <section className="services">
        <h2>Our Banking Services</h2>

  <div className="service-container">
    <div className="service-card">
      <h3>💸 Money Transfer</h3>
      <p>Transfer money securely anytime, anywhere.</p>
    </div>

    <div className="service-card">
      <h3>💳 Account Management</h3>
      <p>Manage your bank account with ease.</p>
    </div>

    <div className="service-card">
      <h3>📜 Transaction History</h3>
      <p>View all your previous transactions.</p>
    </div>

    <div className="service-card">
      <h3>🏦 Loan Services</h3>
      <p>Apply for personal and business loans online.</p>
    </div>
  </div>
</section>
<section className="why-us">
  <h2>Why Choose Us?</h2>

  <div className="why-container">
    <div className="why-card">
      <h3>🔒 Secure Banking</h3>
      <p>Your money and personal data are protected with advanced security.</p>
    </div>

    <div className="why-card">
      <h3>⚡ Fast Transactions</h3>
      <p>Send and receive money instantly with secure payment services.</p>
    </div>

    <div className="why-card">
      <h3>📞 24/7 Support</h3>
      <p>Our support team is available anytime to help you.</p>
    </div>
  </div>
</section>
    </div>
  );
}

export default Home;