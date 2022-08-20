import './App.css';
import AppControlsDelete from './components/AppControls/AppControlsDelete';
import AppControlsInput from './components/AppControls/AppControlsInput';
import AppControlsCounter from './components/AppControls/AppControlsCounter';
import AppNavbar from './components/AppNavbar/AppNavbar';
import AppYemekList from './components/AppYemekList/AppYemekList';
import AppYemekFilter from './components/AppYemekFilter/AppYemekFilter';
import { useEffect, useState } from 'react';

function App() {
  const [yemekler, setYemekler] = useState([]);
  const [yemekName, setYemekName] = useState('');
  const [kaloriler, setKaloriler] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('');

  // Yemek Ekleme Fonksiyonu
  const addYemekHandler = () => {
    // console.log('yemek eklendi');
    // console.log('Yemek Adı:' + yemekName);
    // console.log('Kalori:' + kaloriler);

    const eskiYemekler = [...yemekler];
    const yemek = {
      yemekName,
      kaloriler,
      id: Math.floor(Math.random() * 1000),
    };

    const yeniYemekler = eskiYemekler.concat(yemek);

    // setYemekler(yeniYemekler)
    if (kaloriler <= 0 || yemekName === '') {
      alert('Yemek adı ya da kaloriler boş bırakılamaz');
    } else {
      setYemekler(yeniYemekler);
      localStorage.setItem('yemekler', JSON.stringify(yeniYemekler));
    }

    setYemekName('');
    setKaloriler(0);
  };

  // Yemek Silme Fonksiyonu
  const deleteYemekHandler = (id) => {
    const eskiYemekler = [...yemekler];
    const yeniYemekler = eskiYemekler.filter((yemek) => yemek.id !== id);

    setYemekler(yeniYemekler);
    localStorage.setItem('yemekler', JSON.stringify(yeniYemekler));
  };

  //Tümünü Silme Fonksiyonu
  const deleteAllYemekler = () => {
    setYemekler([]);
    localStorage.clear();
  };

  //Kalori Hesaplama
  const toplam = yemekler
    .map((yemek) => yemek.kaloriler)
    .reduce((acc, value) => acc + +value, 0);

  //Filtreleme Fonksiyonları

  useEffect(() => {
    const eskiState = [...yemekler];
    if (selectedFilter === 'Asc') {
      const ascYemekler = eskiState.sort((a, b) => a.kaloriler - b.kaloriler);
      setYemekler(ascYemekler);
    } else if (selectedFilter === 'Desc') {
      const descYemekler = eskiState.sort((a, b) => b.kaloriler - a.kaloriler);
      setYemekler(descYemekler);
    }
  }, [selectedFilter]);

  useEffect(() => {
    const localStorageYemekler = JSON.parse(localStorage.getItem('yemekler'));
    if (localStorageYemekler && localStorageYemekler != null) {
      setYemekler(localStorageYemekler);
    }
  }, [setYemekler]);

  return (
    <div className="App">
      <AppNavbar />
      <div className="container">
        {/* Kalori Hesaplama Bölümü */}
        <div className="row">
          <AppControlsCounter toplam={toplam} />
          <AppControlsDelete deleteAllYemekler={deleteAllYemekler} />
          <AppControlsInput
            addYemekHandler={addYemekHandler}
            yemekName={yemekName}
            kaloriler={kaloriler}
            setYemekName={setYemekName}
            setKaloriler={setKaloriler}
          />
        </div>

        {/* Yemek Filtreleme Bölümü */}
        <AppYemekFilter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        {/* Yemek Listesi Bölümü */}

        <div className="row">
          <AppYemekList
            yemekler={yemekler}
            deleteYemekHandler={deleteYemekHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
