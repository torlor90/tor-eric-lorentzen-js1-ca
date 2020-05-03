function replaceText() {
  document.body.innerHTML = document.body.innerHTML
    .replace(/ the /g, " banana ")
    .replace(/ The /g, " Banana ");
}

setTimeout(replaceText, 3000);