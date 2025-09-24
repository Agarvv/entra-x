import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import styles from "./show-button.module.css"

const ShowButton = () => {
  const navigate = useNavigate()

 
  const audioOne = useRef(new Audio("/partyblower.mp3"))
  const audioTwo = useRef(new Audio("/happy-birthday-334876.mp3"))

  useEffect(() => {
    audioOne.current.volume = 0.2
    audioTwo.current.volume = 0.2
  }, [])

  const surprise = async () => {
    try {
      
      await Promise.all([audioOne.current.play(), audioTwo.current.play()])

      
      navigate("/birthday")
    } catch (err) {
      console.log("Error al reproducir audio:", err)
      navigate("/birthday") 
    }
  }

  return <button className={styles.button} onClick={surprise}>Hola</button>
}

export default ShowButton
