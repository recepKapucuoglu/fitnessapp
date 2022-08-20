import React from 'react';

function AppControlsCounter({ toplam }) {
  return (
    <div className="col-md-6 text-start my-3">
      <h2>
        Toplam Kalori Miktarınız:{' '}
        <span style={{ color: 'crimson' }}>{toplam}</span> KCal
      </h2>
    </div>
  );
}

export default AppControlsCounter;
