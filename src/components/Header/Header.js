import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ auth: { user } }) => ({
    user,
  }));
  const logout = () => dispatch({ type: "RESET_STORE" });

  const { name, email } = user;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>My Google Photos</div>
        <div className={styles.sideContainer}>
          <div className={styles.infoContainer}>
            <div className={styles.name}>{name}</div>
            <div className={styles.email}>{email}</div>
          </div>
          <div className={styles.button} onClick={logout}>
            Log out
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
