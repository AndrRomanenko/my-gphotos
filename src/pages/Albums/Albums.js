import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAlbums as getAlbumsAction } from "../../store/albums/actions";
import Spinner from "../../components/Spinner";
import Album from "../../components/Album";
import styles from "./styles.module.scss";

const Albums = () => {
  const dispatch = useDispatch();

  const { data, isInit, isLoading } = useSelector(
    ({ common: { isInit }, albums: { data, isLoading } }) => ({
      data,
      isInit,
      isLoading,
    })
  );

  useEffect(() => {
    const getAlbums = () => dispatch(getAlbumsAction());
    if (isInit) {
      getAlbums();
    }
  }, [isInit, dispatch]);

  return isLoading || !isInit ? (
    <Spinner />
  ) : (
    <div className={styles.albumsWrp}>
      <div className={styles.header}>Albums</div>
      {data && !!data.length && (
        <div className={styles.wrapper}>
          <div className={styles.albumContent}>
            {data.map(
              ({ title, id, coverPhotoBaseUrl, mediaItemsCount }, index) => (
                <Album
                  title={title}
                  id={id}
                  coverPhotoBaseUrl={coverPhotoBaseUrl}
                  mediaItemsCount={mediaItemsCount}
                  key={index}
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Albums;
