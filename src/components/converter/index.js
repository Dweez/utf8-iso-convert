import React, { useState, useRef } from "react"

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
          Paste or edit your <code>{labels[code]}</code> text in the left field
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

  const [copySuccess, setCopySuccess] = useState(false)
  const resultRef = useRef(null)

  const copyResult = e => {
    resultRef.current.select()
    document.execCommand("copy")
    // focus triggé sur le bouton, émetteur de l'event, pour ne pas se retrouver
    // avec le contenu sélectionné dans le textarea resultRef
    e.target.focus()
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 4000)
  }

  return (
    <>
      <h1>
        {input[0] === "utf" ? (
          <>{`${labels.utf} → ${labels.iso} Conversion tool`}</>
        ) : (
          <>{`${labels.iso} → ${labels.utf} Conversion tool`}</>
        )}
      </h1>
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
        <div className="textarea-container">
          <textarea
            className="textarea"
            value={input[1]}
            onChange={event => setInput([input[0], event.target.value])}
            spellcheck="false"
          />
        </div>
        <div className="result-container">
          <div className={`copy-status ${copySuccess ? "copied" : ""}`}>
            Copied !
          </div>
          <textarea
            className="result"
            ref={resultRef}
            value={converted}
            onChange={() => {}}
            readonly
            spellcheck="false"
          />
        </div>
      </div>
      <div>
        <button
          onClick={event => setInput([input[0], target[input[0]]])}
          disabled={input[1] === target[input[0]]}
        >
          {`${labels[input[0]]} default text`}
        </button>
        <button onClick={event => setInput([input[0], ""])}>Clear</button>
        <button onClick={event => copyResult(event)} disabled={mixed}>
          Copy
        </button>
      </div>
    </>
  )
}

export default Converter
