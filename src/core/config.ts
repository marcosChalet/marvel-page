import md5 from "md5";

const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY ?? "";
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY ?? "";
const timestamp = Date.now();
const hash = md5(timestamp + privateKey + publicKey);
const apiURL = "https://gateway.marvel.com:443/v1/public/comics";

export { publicKey, privateKey, hash, apiURL, timestamp };
