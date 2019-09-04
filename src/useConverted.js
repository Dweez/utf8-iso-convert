import { useState, useEffect } from 'react';

const useConverted = input => {
  const [ converted, setConverted ] = useState(input)

  useEffect( () => {
    // voir: https://stackoverflow.com/a/5396742
    if(input) {
      try{
        // Si la string est bien de l'UTF-8 il n'y aura pas d'erreur
        setConverted( decodeURIComponent(escape(input)) )
      }catch(e){
        // Si ce n'est pas le cas, une erreur sera levée et nous pouvons estimer
        // qu'il s'agit d'une ISO string
        setConverted( input )
      }
    }else{
      setConverted( "saisissez votre chaîne de caractère" )
    }
  }, [input])

  return converted
}

export default useConverted
