import { useState, useEffect } from "react"

const useConverter = input => {
  const [converted, setConverted] = useState(input)

  useEffect(() => {
    // voir: https://stackoverflow.com/a/5396742
    if (input) {
      try {
        // Si la string est bien de l'UTF-8 il n'y aura pas d'erreur
        setConverted(decodeURIComponent(escape(input)))
      } catch (e) {
        // Si ce n'est pas le cas, une erreur sera levée et nous pouvons estimer
        // qu'il s'agit d'une ISO string
        setConverted(input)
      }
    } else {
      setConverted("Saisissez votre texte (mal encodé) dans le champ ci-contre")
    }
  }, [input])

  return converted
}

export default useConverter
