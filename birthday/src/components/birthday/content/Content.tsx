import { redirect } from "react-router-dom";
import styles from "./Content.module.css"

const Content = () => {
    return(
       <>
         <div className={styles.congratsCtn}> 

            <div className={styles.congrats}>
              <h1>¡Feliz Cumple, <strong>Carla!</strong></h1>
            </div>

            <div className={styles.message}>
               <p>Hoy, Domingo 28 de Septiembre de 2025, Carla, querida Prima, Cumples la edad de 16 años.
                  Que otra mejor manera de que tu Primo Lucas te desee Muchos mas años y un Feliz, pero Muy Feliz 
                  Cumpleaños, que esta?

                  Mucha salud, felicidad, prosperidad, amor, paz y suerte en todo lo que te propongas hacer.
                  
                  y que asi sea tanto contigo, como con mis otros primos, Blanca, Alicia, Alex,
                  David y Aitor. sin olvidarme tambien de los primos que tengo de parte de mi madre. tambien mis tios y tias, y mis abuelos y abuelas.

                  Te deseo un dia Fructifero junto a tus Primos y que disfrutes este dia como ningun otro, que la felicidad, paz y amor nunca falte en ti.

                  

               </p>

               <p>
                 Espero que te haya gustado mi sorpresa, Atentamente Con Mucho Cariño... <strong style={{
         color: "red"
      }}>Lucas</strong>
               </p>
            </div>

         </div>
       </>
    )
}

export default Content;