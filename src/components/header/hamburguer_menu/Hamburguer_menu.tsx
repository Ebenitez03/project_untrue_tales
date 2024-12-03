import Btn_reusable from "../../btn_reusable/Btn_reusable";
import styles from "./Hamburguer_menu.module.scss";

function Hamburguer_menu() {
    return(
        <div className={styles.parent}>
            <div className={styles.child}>
                <Btn_reusable params="books"></Btn_reusable>
                <Btn_reusable params="parents"></Btn_reusable>
                <Btn_reusable params="conctact us"></Btn_reusable>
            </div>
        </div>
    );
}
export default Hamburguer_menu;