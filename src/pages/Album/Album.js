import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAlbum as getAlbumAction } from "../../store/albums/actions";
import Spinner from "../../components/Spinner";
import styles from "./styles.module.scss";

const Album = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();

  const { currentAlbum, isLoading, isInit } = useSelector(
    ({ common: { isInit }, albums: { currentAlbum, isLoading } }) => ({
      currentAlbum,
      isLoading,
      isInit,
    })
  );

  useEffect(() => {
    const body = { albumId: id };
    const getAlbum = (body) => dispatch(getAlbumAction(body));
    if (isInit) {
      getAlbum(body);
    }
  }, [isInit, dispatch, id]);

  return isLoading || !isInit ? (
    <Spinner />
  ) : (
    <div className={styles.albumWrp}>
      <div className={styles.header}>Album</div>
      {currentAlbum && !!currentAlbum.length && (
        <div className={styles.wrapper}>
          <div className={styles.albumContent}>
            {currentAlbum.map(({ baseUrl, filename }, i) => (
              <div key={i} className={styles.photoWrapper}>
                <img alt={filename} src={baseUrl} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Album;
