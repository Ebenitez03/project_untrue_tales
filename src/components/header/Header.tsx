import Hamburguer_menu from "./hamburguer_menu/Hamburguer_menu";
import styles from "./Header.module.scss";
import Title_box from "./title_box/Title_box";
import Btn_reusable from "../btn_reusable/Btn_reusable";
function Header() {
  return (
    <div className={styles.header}>
      <Hamburguer_menu></Hamburguer_menu>
      <Title_box></Title_box>
      <div className={styles.buttons}>
        <Btn_reusable params="Profile"></Btn_reusable>
        <Btn_reusable params="Search"></Btn_reusable>
      </div>
    </div>
  );
}
export default Header;
