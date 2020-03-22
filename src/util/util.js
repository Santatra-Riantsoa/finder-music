export async function get(url) {
    return fetch(url)
      .then(response => response.json())
      .then(reponseJavaScript => {
        return reponseJavaScript;
      });
}