import React, {useState} from 'react';
import './App.css';
import Captain from './Captain';
import TreasureChest from './TreasureChest';
import LootingControls from './LootingControls';

function App() {
  const [numberOfRubies, setNumberOfRubies] = useState(4200);
  const [numberOfDoubloons, setNumberOfDoubloons] = useState(4000);
  const [numberOfSilverCoins, setNumberOfSilverCoins] = useState(4270);

  const treasureChestContents = {
    rubies: numberOfRubies,
    doubloons: numberOfDoubloons,
    silverCoins: numberOfSilverCoins
  };

  return (
    <div className="App">
      <Captain contents={treasureChestContents} />
      <h3>The Treasure Chest contains:</h3>
      <TreasureChest contents={treasureChestContents} />
      <LootingControls
        rubyQuantity={numberOfRubies}
        updateNumberOfRubies={setNumberOfRubies}
        doubloonQuantity={numberOfDoubloons}
        updateNumberOfDoubloons={setNumberOfDoubloons}
        silverCoinQuantity={numberOfSilverCoins}
        updateNumberOfSilverCoins={setNumberOfSilverCoins}
      />
    </div>
  );
}

export default App;
