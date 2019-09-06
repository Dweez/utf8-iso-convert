import { useState, useEffect } from "react"

const useConverter = input => {
  const [converted, setConverted] = useState()
  const [mixed, setMixed] = useState(false)

  useEffect(() => {
    // voir: https://stackoverflow.com/a/5396742
    async function convert() {
      let res, mix
      if (input && input.length && input[1]) {
        if (input[0] === "utf") {
          try {
            // Si la string est bien de l'UTF-8 il n'y aura pas d'erreur
            res = await decodeURIComponent(escape(input[1]))
            mix = false
          } catch (e) {
            // Si ce n'est pas le cas, une erreur sera levée et nous pouvons estimer
            // qu'il s'agit d'une ISO string
            res = input[1]
            mix = true
          }
        } else if (input[0] === "iso") {
          // traitement pour ISO
          try {
            res = await unescape(encodeURIComponent(input[1]))
            mix = false
          } catch (e) {
            res = input[1]
            mix = true
          }
        }
      } else {
        res = ""
      }
      setMixed(mix)
      setConverted(res)
    }
    convert()
  }, [input])

  return { converted, mixed }
}

export default useConverter
