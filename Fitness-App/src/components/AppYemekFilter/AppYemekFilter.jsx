import React from 'react';

function AppYemekFilter({ selectedFilter, setSelectedFilter }) {
  return (
    <div className="row mx-auto w-25 my-4">
      <div className="col">
        <select
          className="form-select"
          defaultValue={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="" disabled>
            Filtreleme Yapınız
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
        </select>
      </div>
    </div>
  );
}

export default AppYemekFilter;
