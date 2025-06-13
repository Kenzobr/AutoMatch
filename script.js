function loadHTML(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(data => document.getElementById(id).innerHTML = data)
    .catch(err => console.error(`Erro ao carregar ${url}: `, err));
}

loadHTML('header', 'header.html');
loadHTML('footer', 'footer.html');
