import React from "react";
import { useDispatch } from "react-redux";
import { authorize } from "../../store/auth/actions";
import gphotos from "../../assets/img/gphotos.svg";
import styles from "./styles.module.scss";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginWrp}>
        <img alt="gphoto" src={gphotos} onClick={() => dispatch(authorize())} />
        <div className={styles.labelContainer}>
          <span className={styles.label}>Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
