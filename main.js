document.getElementById("RightBtn").onclick = () => {
    setOutput("Tombol Right diklik.");
  };
  
  document.getElementById("UpBtn").onclick = () => {
    setOutput("Tombol Up diklik.");
  };
  
  document.getElementById("LefttBtn").onclick = () => {
    setOutput("Tombol Left diklik.");
  };
  
  document.getElementById("DownBtn").onclick = () => {
    setOutput("Tombol Down diklik!.");
  };
  
  document.getElementById("rightBtn").onclick = () => {
    setOutput("Tombol right diklik!.");
  };
  
  document.getElementById("BBtn").onclick = () => {
    alert("Tombol B dklik!");
  };

  document.getElementById("ABtn").onclick = () => {
    alert("Tombol A dklik!");
  };
  
  function setOutput(text) {
    document.getElementById("output").innerText = text;
  }
    