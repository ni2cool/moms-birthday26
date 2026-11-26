import './App.css'

// Mobile-first template.
// - On a real phone: the content fills the whole screen.
// - On a laptop/desktop: the content is shown inside a phone-shaped frame
//   so you can preview what it will look like on a phone.
//
// Each <section> below is a placeholder block — replace the contents with
// your own text, photos, flowers, etc.

function App() {
  return (
    <div className="stage">
      <div className="phone">
        <div className="phone-notch" aria-hidden="true" />

        <main className="screen">
          <header className="top-bar">
            <span className="top-bar-title">Happy Birthday Mom</span>
          </header>

          <section className="hero">
            <div className="placeholder placeholder-tall">Hero image / flower</div>
            <h1>Happy Birthday, Mom!</h1>
            <p className="subtitle">A short subtitle or message goes here.</p>
          </section>

          <section className="block">
            <h2>Section 1</h2>
            <p>
              Placeholder text. Write a letter, a memory, or anything you want
              her to read first.
            </p>
          </section>

          <section className="block">
            <h2>Section 2 — Photos</h2>
            <div className="grid">
              <div className="placeholder">Photo</div>
              <div className="placeholder">Photo</div>
              <div className="placeholder">Photo</div>
              <div className="placeholder">Photo</div>
            </div>
          </section>

          <section className="block">
            <h2>Section 3</h2>
            <div className="placeholder placeholder-wide">
              Interactive thing / animation
            </div>
            <button type="button" className="cta">
              A button
            </button>
          </section>

          <footer className="footer">With love ♥</footer>
        </main>

        <div className="phone-home-bar" aria-hidden="true" />
      </div>
    </div>
  )
}

export default App
