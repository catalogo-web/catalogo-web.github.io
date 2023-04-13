let github = "https://api.github.com/users/catalogo-web/repos";

let fetchFunction = async () => {
  let var1 = await fetch(github);
  let data1 = await var1.json();

  if (var1.status !== 200) throw Error("El usuario no existe");

  return data1;
};

(async function () {
  try {
    let name = await fetchFunction();
    console.log(name[0].name);
    html = "";
    name.forEach((element) => {
      console.log(element.name);
      if (element.name != "catalogo-web.github.io") {
        html += /*html */ `<!--  -->
<article class="github ${element.name}">
  <iframe src="https://catalogo-web.github.io/${element.name}/" frameborder="0" loading="lazy"></iframe>

  <a target="_blank" href="https://catalogo-web.github.io/${element.name}/" class="open">👀</a>
</article>
<!--  -->`;
      }

    });

    document.querySelector(".data").innerHTML = html;
  } catch (error) {
    console.log(error);
  }
})();
