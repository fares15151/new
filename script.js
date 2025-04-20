function calcPlastic() {
    const wt = parseFloat(document.getElementById('plasticWeight').value) || 0;
    document.getElementById('plasticResult').innerText = `AED ${(wt * 0.5).toFixed(2)}`;
  }
  
  function calcCardboard() {
    const wt = parseFloat(document.getElementById('cardboardWeight').value) || 0;
    document.getElementById('cardboardResult').innerText = `AED ${(wt * 0.3).toFixed(2)}`;
  }
  
  function calcCans() {
    const wt = parseFloat(document.getElementById('cansWeight').value) || 0;
    document.getElementById('cansResult').innerText = `AED ${(wt * 0.8).toFixed(2)}`;
  }
  
  function calcOthers() {
    const wt = parseFloat(document.getElementById('othersWeight').value) || 0;
    document.getElementById('othersResult').innerText = `AED ${(wt * 0.2).toFixed(2)}`;
  }
  