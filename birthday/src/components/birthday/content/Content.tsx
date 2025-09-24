
import styles from "./Content.module.css"

const Content = () => {
    return(
       <>
         <div className={styles.congratsCtn}> 

            <div className={styles.congrats}>
              <h1>¡Feliz Cumple, <strong>Carla!</strong></h1>
            </div>

            <div className={styles.message}>
                <p>
                    
                    
                    Hoy, domingo 28 de septiembre de 2025, querida Carla...

Felicidades por tus 16 años. No hay mejor manera de que tu primo Lucas te desee muchísimos años más de alegría y un cumpleaños muy, pero muy feliz...

Te deseo mucha salud, felicidad, amor, paz, prosperidad y suerte en todo lo que te propongas. Que todo lo bueno que desees se haga realidad, tanto para ti como para tu hermana Blanca, nuestros primos Alicia, Alex, David y Aitor, y sin olvidarme también de mis otros primos de parte de mi madre, así como para nuestros tíos, tías y abuelos.

Espero que tengas un día... inolvidable junto a tus primos y que lo disfrutes como ningún otro. Que la felicidad, la paz y el amor nunca falten en tu vida.


                </p>
               
               
               
               
               

               <p>
                 Espero que te haya gustado mi sorpresa. Con Mucho Cariño... <strong style={{
         color: "red"
      }}>Lucas</strong>
               </p>
            </div>

         </div>
       </>
    )
}

export default Content;