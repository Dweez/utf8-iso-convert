import React, { useState } from "react"

import useConverter from "./useConverter"

import "./converter.css"

const target = {
  utf: `Portez ce vieux whisky au juge blond qui fume sur son Ã®le intÃ©rieure, Ã  cÃ´tÃ© de l'alcÃ´ve ovoÃ¯de, oÃ¹ les bÃ»ches se consument dans l'Ã¢tre, ce qui lui permet de penser Ã  la cÃ¦nogÃ©nÃ¨se de l'Ãªtre dont il est question dans la cause ambiguÃ« entendue Ã  MoÃ¿, dans un capharnaÃ¼m qui, pense-t-il, diminue Ã§Ã  et lÃ  la qualitÃ© de son Åuvre.`,
  iso: `Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l'alcôve ovoïde, où les bûches se consument dans l'âtre, ce qui lui permet de penser à la cænogénèse de l'être dont il est question dans la cause ambiguë entendue à Moÿ, dans un capharnaüm qui, pense-t-il, diminue çà et là la qualité de son œuvre.`
}
const labels = {
  utf: "UTF-8",
  iso: "ISO-8859-1"
}

const Description = ({ code, mixed }) => {
  return (
    <>
      {!mixed ? (
        <>
          Editez votre texte <code>{labels[code]}</code> dans le champ gauche
          ci-dessous
        </>
      ) : (
        <>Mixed content !</>
      )}
    </>
  )
}

const Converter = () => {
  const [input, setInput] = useState(["utf", target.utf])
  const { converted, mixed } = useConverter(input)
  return (
    <>
      <h2>
        {input[0] === "utf" ? (
          <>{`Conversion ${labels.utf} → ${labels.iso}`}</>
        ) : (
          <>{`Conversion ${labels.iso} → ${labels.utf}`}</>
        )}
      </h2>
      <div className="actions">
        <button
          onClick={event => setInput(["utf", converted])}
          // disabled={(input[0] === "utf" || mixed)}
          disabled={input[0] === "utf"}
          className={input[0] === "utf" ? "selected" : ""}
        >
          UTF-8 → ISO-8859-1
        </button>
        <button
          onClick={event => setInput(["iso", converted])}
          // disabled={(input[0] === "iso" || mixed)}
          disabled={input[0] === "iso"}
          className={input[0] === "iso" ? "selected" : ""}
        >
          ISO-8859-1 → UTF-8
        </button>
      </div>
      <p className={`description ${mixed ? "mixed" : ""}`}>
        <Description mixed={mixed} code={input[0]} />
      </p>
      <div className="converter">
        <textarea
          className="textarea"
          value={input[1]}
          onChange={event => setInput([input[0], event.target.value])}
        />
        <div className="result">{converted}</div>
      </div>
      <div>
        <button
          onClick={event => setInput([input[0], target[input[0]]])}
          disabled={input[1] === target[input[0]]}
        >
          {`Texte ${input[0]} par défaut`}
        </button>
        <button onClick={event => setInput([input[0], ""])}>Clear</button>
      </div>
    </>
  )
}

export default Converter
