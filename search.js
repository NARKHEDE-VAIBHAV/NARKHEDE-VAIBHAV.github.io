document.addEventListener("DOMContentLoaded", () => {
  let searchBox = document.getElementById("search");
  searchBox.addEventListener("input", function() {
    let query = this.value.toLowerCase();
    let links = document.querySelectorAll("a");
    let results = document.getElementById("results");
    results.innerHTML = "";
    links.forEach(link => {
      if(link.textContent.toLowerCase().includes(query)) {
        let item = document.createElement("div");
        item.innerHTML = `<a href="${link.getAttribute('href')}">${link.textContent}</a>`;
        results.appendChild(item);
      }
    });
  });
});




document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre").forEach(block => {
    let btn = document.createElement("button");
    btn.innerText = "Copy";
    btn.classList.add("copy-btn");
    block.appendChild(btn);

    btn.addEventListener("click", () => {
      let code = block.querySelector("code").innerText;
      navigator.clipboard.writeText(code).then(() => {
        btn.innerText = "Copied!";
        setTimeout(() => btn.innerText = "Copy", 1500);
      });
    });
  });
});
