export const auth = async () => {
  const gAuthInstance = await window.gapi.auth2.getAuthInstance();
  const signIn = await gAuthInstance.signIn();
  return signIn;
};

export const getAlbums = async () => {
  try {
    const response = await window.gapi.client.request({
      path: "https://photoslibrary.googleapis.com/v1/albums",
      method: "GET",
    });
    const { albums } = await response.result;
    return albums;
  } catch (error) {
    console.error(error);
  }
};

export const getAlbum = async (body) => {
  try {
    const response = await window.gapi.client.request({
      path: "https://photoslibrary.googleapis.com/v1/mediaItems:search",
      method: "POST",
      body: JSON.stringify(body),
    });
    const { mediaItems } = await response.result;
    return mediaItems;
  } catch (error) {
    console.error(error);
  }
};
