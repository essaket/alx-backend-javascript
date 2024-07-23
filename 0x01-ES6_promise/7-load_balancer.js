export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]); // you can add .then((x) => x);
}
