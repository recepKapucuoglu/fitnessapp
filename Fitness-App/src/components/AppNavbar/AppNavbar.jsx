import React from 'react';

function AppNavbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-success">
        <div className="container-fluid ">
          <a className="navbar-brand m-auto" href="#">
            <h1>
              Fitness-{' '}
              <span style={{ color: 'crimson', fontWeight: '700' }}>App</span>
            </h1>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default AppNavbar;
