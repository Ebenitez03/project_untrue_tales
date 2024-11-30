import styles from "./Btn_reusable.module.scss";

function Btn_reusable({params=""}) {
    let fnc_mensaje= ()=>{

        return(console.log("Estoy funcionando"));
    };
    return (
    <div>
        <button className={styles.btn} onClick={fnc_mensaje}>{params}</button>
    </div>
    );
}
export default Btn_reusable;