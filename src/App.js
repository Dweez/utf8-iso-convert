import React from 'react'
import './App.css'

import Converter from './components/converter'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Conversion ISO-8859-1 ← → UTF-8</h2>
        <p>Vous venez d'ouvrir un fichier et vous découvrez avec stupeur des caractères étranges (ex: Ã©, Ã®) à la place des caractères accentués ?<br/>
        Ce petit convertisseur pourrait vous sauver la mise ! Collez votre texte dans le champs de gauche et récupérez le résultat à droite.</p>
        <Converter />
      </div>
    </div>
  );
}

export default App;
