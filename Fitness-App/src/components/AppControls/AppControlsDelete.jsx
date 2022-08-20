import React from 'react';

function AppControlsDelete({ deleteAllYemekler }) {
  return (
    <div className="col-md-6 text-end my-3">
      <button className="btn btn-warning" onClick={() => deleteAllYemekler()}>
        Tümünü Sil
      </button>
    </div>
  );
}

export default AppControlsDelete;
