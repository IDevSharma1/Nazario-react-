// /src/components/Navbar.jsx
import React from 'react';

function Navbar({ brand = 'Nazario' }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top border-bottom" style={{ zIndex: 1040, background: 'var(--Lunar-Eclipse)'  }} >
        <div className="container">
          <a href="/" className="navbar-brand d-flex align-items-center gap-2 text-decoration-none" style={{ color: 'var(--Creme-Brulee)' }}>
            {/* <i className="bi bi-tornado fs-4" aria-hidden="true"></i> */}
            <span className="fs-4 fw-bold m-0">{brand}</span>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain" aria-controls="navMain" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navMain">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#" style={{ color: 'var(--Creme-Brulee)' }}>New Arrivals</a></li>
              <li className="nav-item"><a className="nav-link" href="#" style={{ color: 'var(--Creme-Brulee)' }}>Men</a></li>
              <li className="nav-item"><a className="nav-link" href="#" style={{ color: 'var(--Creme-Brulee)' }}>Women</a></li>
              <li className="nav-item"><a className="nav-link" href="#" style={{ color: 'var(--Creme-Brulee)' }}>Accessories</a></li>
              <li className="nav-item"><a className="nav-link fw-semibold" href="#" style={{ color: 'var(--Au-Lait)' }}>Sale</a></li>
            </ul>

            <form className="d-none d-md-flex align-items-center position-relative me-2" role="search" style={{ minWidth: 280 }}>
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="Search products"
                style={{ height: 40, borderRadius: 9999, paddingLeft: 40 }}
              />
              <i className="bi bi-search position-absolute"
                 style={{ left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--Lunar-Eclipse)' }}
                 aria-hidden="true" />
            </form>

            <div className="d-flex align-items-center gap-2">
              <button className="btn p-0" style={{ width: 40, height: 40, borderRadius: '50%' }} aria-label="Favorites">
                <i className="bi bi-heart fs-5" style={{ color: 'var(--Creme-Brulee)' }} />
              </button>
              <button className="btn p-0" style={{ width: 40, height: 40, borderRadius: '50%' }} aria-label="Cart">
                <i className="bi bi-bag fs-5" style={{ color: 'var(--Creme-Brulee)' }} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default React.memo(Navbar);
