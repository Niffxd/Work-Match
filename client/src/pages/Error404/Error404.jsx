import style from "./error404.module.css";
import { Link } from "react-router-dom";

export default function Error404 (){
    return(
        <div className={`${style["container"]}`}>
            <div className={`${style["container-left"]}`}>
                <div className={`${style["img-container"]}`}>
                    <img src="/small_logo.png" alt="logo-header"/>
                </div>
            </div>
            <div>
            <div className={`${style["container-right"]}`}>
                <div className={`${style["error-container"]}`}>
                    <h3 className={`${style["error-h3"]}`}>Error 404</h3>
                    <p className={`${style["error-p1"]}`}>Vaya... ¡Página no encontrada!</p>
                    <p>La página que buscas no existe.</p>
                </div>
                <div className={`${style["container-but"]}`}>
                    <button className={`${style["error-button"]}`}>
                    <Link className={`${style["link-nav"]}`}
                        to='/'>
                        HOME
                    </Link>
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

