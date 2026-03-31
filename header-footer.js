// Shared Header and Footer Component Injector
// Ensures consistent navigation across all pages

document.addEventListener('DOMContentLoaded', function () {
  const headerHTML = `
    <header>
      <div class="header-container">
        <div class="logo" role="link" aria-label="Akramfin">
          <img id="siteLogo" src="/Images/logo.png" data-cf-logo="https://akramfin.com/Images/logo.png" alt="" title="Akramfin" style="height: 56px; width: auto;" />
          <a href="/index.html" class="logo-link"><span class="logo-text">Akramfin</span></a>
        </div>
        <button class="mobile-menu-toggle" id="mobileMenuToggle">☰</button>
        <nav id="mainNav">
          <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/about/leadership.html">Leadership</a></li>
            <li><a href="/solutions/manufacturing.html">Manufacturing</a></li>
            <li><a href="/automotive.html">Automotive</a></li>
            <li><a href="/engineering-services.html">Innovation</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  const footerHTML = `
    <footer>
      <div class="container">
        <div class="footer-grid footer-grid-five">
          <div class="footer-section">
            <h4>About Auronex</h4>
            <ul>
              <li><a href="/about.html">Company Story</a></li>
              <li><a href="/about/leadership.html">Leadership Team</a></li>
              <li><a href="/about/careers.html">Careers</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Solutions</h4>
            <ul>
              <li><a href="/solutions/manufacturing.html">Precision Manufacturing</a></li>
              <li><a href="/automotive.html">Automotive Supply</a></li>
              <li><a href="/engineering-services.html">Industrial Engineering</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Industries</h4>
            <ul>
              <li><a href="/medical.html">Medical Devices</a></li>
              <li><a href="/defense-security.html">Mobility Systems</a></li>
              <li><a href="/products/wireless-ip-network.html">Factory Connectivity</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>London, United Kingdom</li>
              <li>1 St James's Square, SW1Y 4PD</li>
              <li><a href="tel:+442079460958">+44 20 7946 0958</a></li>
              <li><a href="mailto:contact@akramfin.com">contact@akramfin.com</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 Akramfin. UK headquarters.</p>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Make the logo image clickable (left-click navigates home) but keep it as a raw image
  // so users can 'Open image in new tab' and view the PNG directly. Also attempt fallbacks
  // for deployments (Cloudflare Images URLs or different paths).
  const siteLogo = document.getElementById('siteLogo');
  if (siteLogo) {
    siteLogo.style.cursor = 'pointer';
    // Click navigates home
    siteLogo.addEventListener('click', function (e) {
      window.location.href = '/index.html';
    });

    // Try alternative sources if the primary fails to load (useful when files are uploaded elsewhere)
    const fallbackSources = [
      '/Images/logo.png',
      'Images/logo.png',
      '/assets/images/logo.svg',
      '/logo.png'
    ];

    let attempt = 0;
    siteLogo.addEventListener('error', function () {
      attempt += 1;
      if (attempt < fallbackSources.length) {
        siteLogo.src = fallbackSources[attempt];
        console.warn('siteLogo: trying fallback', fallbackSources[attempt]);
      } else {
        console.error('siteLogo: all logo sources failed to load');
      }
    });

    // If Cloudflare Images returns a specific URL, you can set data-cf-logo on the <img>
    // and it will be tried first (useful after uploading to Cloudflare Images).
    const cfUrl = siteLogo.getAttribute('data-cf-logo');
    if (cfUrl) {
      siteLogo.src = cfUrl;
    }
  }

  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');

  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });
  }
});
