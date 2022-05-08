function alterar() {
    let str = document.getElementById("url").value;
    str = str.replace(/-/g, "");
    document.getElementById("respuesta").innerHTML = str;
  }