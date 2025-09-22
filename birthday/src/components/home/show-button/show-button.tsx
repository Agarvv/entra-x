import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const ShowButton = () => {
  const navigate = useNavigate()

  // Creamos los audios solo una vez
  const audioOne = useRef(new Audio("/partyblower.mp3"))
  const audioTwo = useRef(new Audio("/happy-birthday-334876.mp3"))

  useEffect(() => {
    audioOne.current.volume = 0.2
    audioTwo.current.volume = 0.2
  }, [])

  const surprise = async () => {
    try {
      // Reproducir ambos audios al mismo tiempo
      await Promise.all([audioOne.current.play(), audioTwo.current.play()])

      // Luego navegar
      navigate("/birthday")
    } catch (err) {
      console.log("Error al reproducir audio:", err)
      navigate("/birthday") // aunque falle el audio, seguimos con la ruta
    }
  }

  return <button onClick={surprise}>Hola</button>
}

export default ShowButton
