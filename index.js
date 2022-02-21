// javascript starts here

var html_template = "<!DOCTYPE html><head><body><script>\n";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

html_template += "function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms));}"
html_template += "async function play_notes() {"

async function play_notes() {
  compiled_script = "";
  var notes = document.getElementById("notes").value.split("\n");
  i = 0;
  while (i < notes.length) {
    j = 0;
    while (j != notes[i].length) {
      if (notes[i][j] == "A") {
        new Audio("/tunes/A.wav").play();
        compiled_script += "new Audio('/tunes/A.wav').play();\n";
      }
      if (notes[i][j] == "B") {
        new Audio("/tunes/B.wav").play();
        compiled_script += "new Audio('/tunes/B.wav').play();\n";
      }
      if (notes[i][j] == "C") {
        new Audio("/tunes/C.wav").play();
        compiled_script += "new Audio('/tunes/C.wav').play();\n";
      }
      if (notes[i][j] == "D") {
        new Audio("/tunes/D.wav").play();
        compiled_script += "new Audio('/tunes/D.wav').play();\n";
      }
      if (notes[i][j] == "E") {
        new Audio('/tunes/E.wav').play()
        compiled_script += "new Audio('/tunes/E.wav').play();\n";
      }
      if (notes[i][j] == "F") {
        new Audio('/tunes/F.wav').play()
        compiled_script += "new Audio('/tunes/F.wav').play();\n";
      }
      if (notes[i][j] == "G") {
        new Audio('/tunes/G.wav').play()
        compiled_script += "new Audio('/tunes/G.wav').play();\n";
      }
      j++;
    }
    await sleep(1100);
    compiled_script += "await sleep(1100);"
    i++;
  }
  document.getElementById("Compiled").value =
    html_template + compiled_script + "}play_notes();</script></body></html>";
}

function clear_notes(){
  document.getElementById("notes").value = "";
}

function clear_code(){
  document.getElementById("Compiled").value = "";
}