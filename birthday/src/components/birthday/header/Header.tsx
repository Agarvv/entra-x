import styles from "./Header.module.css"

const Header = () => {
    return(
       <>
         <header className={styles.header}>
            <div>
                <h1>
                    Agarvv
                </h1>
            </div>

            <div>
               <a href="https://agarv.vercel.app">Mi Web</a>
            </div>
         </header>
       </>
    )
}

export default Header;