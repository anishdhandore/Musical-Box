// javascript starts here

var html_template = "<html><head><body><script>\n";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function read_notes() {
  compiled_script = "";
  var notes = document.getElementById("notes").value.split("\n");
  i = 0;
  while (i < notes.length) {
    j = 0;
    while (j != notes[i].length) {
      if (notes[i][j] == "A") {
        console.log("Play A");
        new Audio("/tunes/A.wav").play();
        compiled_script += "new Audio('/tunes/A.wav').play();\n";
      }
      if (notes[i][j] == "B") {
        console.log("Play B");
        new Audio("/tunes/B.wav").play();
        compiled_script += "new Audio('/tunes/B.wav').play();\n";
      }
      if (notes[i][j] == "C") {
        console.log("Play C");
        new Audio("/tunes/C.wav").play();
        compiled_script += "new Audio('/tunes/C.wav').play();\n";
      }
      if (notes[i][j] == "D") {
        console.log("Play D");
        new Audio("/tunes/D.wav").play();
        compiled_script += "new Audio('/tunes/D.wav').play();\n";
      }
      if (notes[i][j] == "E") {
        console.log("Play E");
        new Audio('/tunes/E.wav').play()
        compiled_script += "new Audio('/tunes/E.wav').play();\n";
      }
      if (notes[i][j] == "F") {
        console.log("Play F");
        new Audio('/tunes/F.wav').play()
        compiled_script += "new Audio('/tunes/F.wav').play();\n";
      }
      if (notes[i][j] == "G") {
        console.log("Play G");
        new Audio('/tunes/G.wav').play()
        compiled_script += "new Audio('/tunes/G.wav').play();\n";
      }
      j++;
    }
    await sleep(1100);
    i++;
  }
  document.getElementById("Compiled").value =
    html_template + compiled_script + "</script></body></html>";
}

function clear_notes(){
  document.getElementById("notes").value = "";
}

function clear_code(){
  document.getElementById("Compiled").value = "";
}