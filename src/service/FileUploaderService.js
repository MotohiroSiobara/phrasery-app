import RNFetchBlob from 'react-native-fetch-blob'

/**
 * fileをサーバーにアップロードするための処理
 * audio/accという形式の音声ファイルをアップロードする
 * @param filePath String ファイルのパス
 * @param url      アップロード先のurl
 */
export const uploadByAudio = (filePath, url) => {
    console.warn(RNFetchBlob.wrap(filePath));
    RNFetchBlob.fetch('POST', 'http://localhost:3000/fileuploads', {
        Authorization: "Bearer access-token...",
        'Content-Type' : 'multipart/form-data',
        // here's the body you're going to send, should be a BASE64 encoded string
        // (you can use "base64"(refer to the library 'mathiasbynens/base64') APIs to make one).
        // The data will be converted to "byte array"(say, blob) before request sent.
    }, [
        // append field data from file path
        {
            name : 'accFile',
            filename : filePath,
            // Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`.
            // Or simply wrap the file path with RNFetchBlob.wrap().
            data: RNFetchBlob.wrap(filePath)
        }])
        .then((res) => {
            console.warn(res.text())
        })
        .catch((err) => {
            console.warn(err)
        })
};
