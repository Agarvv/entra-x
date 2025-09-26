import ShowButton from './components/home/show-button/show-button'
import styles from './App.module.css'

function App() {
  return (
    <>
    <div className={styles.buttonContainer}>
      <p>Carla, Procura subir un poco el volumen para mejor experiencia, pero no muy alto.</p>
         <ShowButton />
    </div>
    </>
  )
}

export default App
