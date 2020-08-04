import React from "react";
import { useDispatch } from "react-redux";
import { getAlbum } from "../../store/albums/actions";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Album = (props) => {
  const dispatch = useDispatch();
  const { title, id, coverPhotoBaseUrl, mediaItemsCount } = props;

  return (
    <div className={styles.container}>
      <Link to={`/albums/${id}`}>
        <div className={styles.albumPhoto}>
          <img alt="cover" src={coverPhotoBaseUrl} />
          <div onClick={() => dispatch(getAlbum(id))} className={styles.title}>
            <span className={styles.bold}>{title}</span>
            <span>photos: {mediaItemsCount}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Album;
