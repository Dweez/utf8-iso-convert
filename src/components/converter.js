import React, { useState } from 'react'

import useConverter from './useConverter'
import './converter.css'

const utfShownAsIso = "Portez ce vieux whisky au juge blond qui fume sur son Ã®le intÃ©rieure, Ã  cÃ´tÃ© de l'alcÃ´ve ovoÃ¯de, oÃ¹ les bÃ»ches se consument dans l'Ã¢tre, ce qui lui permet de penser Ã  la cÃ¦nogÃ©nÃ¨se de l'Ãªtre dont il est question dans la cause ambiguÃ« entendue Ã  MoÃ¿, dans un capharnaÃ¼m qui, pense-t-il, diminue Ã§Ã  et lÃ  la qualitÃ© de son Åuvre."

function Converter() {
  const [ input, setInput ] = useState(utfShownAsIso)

  const converted = useConverter(input)

  return (
    <div className="converter">
      <textarea className="textarea" value={input} onChange={event => setInput(event.target.value)} />
      <div className="result">{converted}</div>
    </div>
  );
}

export default Converter;
