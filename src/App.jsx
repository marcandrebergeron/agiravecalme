import './App.css'

function App() {
  return (
    <div className="landing-page">
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Agira<span className="highlight">vecalme</span>
          </h1>
          <p className="hero-subtitle">
            Solutions personnalisées pour vos besoins numériques
          </p>
          <div className="hero-description">
            <p>
              Vous avez un projet ? Une idée à concrétiser ? 
              <br />
              Je suis là pour vous accompagner dans la réalisation de vos ambitions digitales.
            </p>
          </div>
          
          <div className="services">
            <h2>Services disponibles</h2>
            <div className="service-grid">
              <div className="service-item">
                <h3>🚀 Développement Web</h3>
                <p>Sites web modernes et performants</p>
              </div>
              <div className="service-item">
                <h3>📱 Applications</h3>
                <p>Solutions sur mesure pour vos besoins</p>
              </div>
              <div className="service-item">
                <h3>🎨 Design & UX</h3>
                <p>Interfaces intuitives et attrayantes</p>
              </div>
              <div className="service-item">
                <h3>⚡ Optimisation</h3>
                <p>Performance et référencement</p>
              </div>
            </div>
          </div>

          <div className="contact-section">
            <h2>Prêt à commencer ?</h2>
            <p className="contact-text">
              Contactez-moi pour discuter de votre projet
            </p>
            <a 
              href="mailto:agiravecalme@gmail.com" 
              className="contact-button"
            >
              📧 agiravecalme@gmail.com
            </a>
          </div>
        </div>
      </header>
      
      <footer className="footer">
        <p>&copy; 2025 Agiravecalme - Développement web et solutions numériques</p>
      </footer>
    </div>
  )
}

export default App
