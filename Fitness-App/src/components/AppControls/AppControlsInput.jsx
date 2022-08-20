import React from 'react';

function AppControlsInput({
  addYemekHandler,
  kaloriler,
  yemekName,
  setKaloriler,
  setYemekName,
}) {
  const onClickYemekAdd = () => {
    addYemekHandler();
  };

  return (
    <div>
      {/* Yemek Adı Girişi */}
      <div className="row  w-50 mx-auto">
        <div className="col-md-12  my-2">
          <input
            type="text"
            placeholder="Yemek Giriniz"
            className="form-control"
            value={yemekName}
            onChange={(e) => setYemekName(e.target.value)}
          />
        </div>
      </div>

      {/* Yemek Kalori Girişi */}
      <div className="row w-50  mx-auto">
        <div className="col-md-12 my-2">
          <input
            placeholder="Kalori Giriniz"
            type="number"
            className="form-control"
            value={kaloriler}
            onChange={(e) => setKaloriler(e.target.value)}
            min={0}
          />
        </div>
      </div>

      {/* Yemek Ekle Butonu */}
      <div className="row mx-auto my-3 w-25">
        <button onClick={onClickYemekAdd} className="btn btn-danger btn-sm">
          Yemek Ekle
        </button>
      </div>
    </div>
  );
}

export default AppControlsInput;
