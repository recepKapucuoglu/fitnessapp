import React from 'react';

function AppYemekList({ yemekler, deleteYemekHandler }) {
  return (
    <>
      {' '}
      {yemekler.map((yemek, index) => (
        <div className="col-md-3 my-3">
          <div className="card">
            <div className="card-body">
              <div key={index}>
                <div className="my-2">{`Besin Adı: ${yemek.yemekName} `}</div>
                <div className="my-1">{`Besin Kalorisi: ${yemek.kaloriler} `}</div>
                <div>
                  <button
                    className="btn btn-danger btn-sm my-2"
                    onClick={() => deleteYemekHandler(yemek.id)}
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default AppYemekList;
