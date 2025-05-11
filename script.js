function calculatePrice() {
    let base = 100;
  
    let education = parseFloat(document.getElementById("education").value);
    let networth = parseFloat(document.getElementById("networth").value);
    let caste = parseFloat(document.getElementById("caste").value);
  
    let age = 1;
    document.getElementsByName("age").forEach(r => {
      if (r.checked) age = parseFloat(r.value);
    });
  
    let skillBonus = 0;
    document.querySelectorAll(".skill").forEach(chk => {
      if (chk.checked) skillBonus += parseFloat(chk.value);
    });
  
    let repFactor = 1;
    document.querySelectorAll(".rep").forEach(chk => {
      if (chk.checked) repFactor *= parseFloat(chk.value);
    });
  
    let repDeduct = 0;
    document.querySelectorAll(".repDeduct").forEach(chk => {
      if (chk.checked) repDeduct += parseFloat(chk.value);
    });
  
    let total = base * education * networth * age * repFactor;
    total += caste + skillBonus + repDeduct;
  
    // DOM взаимодействия
    const result = document.getElementById("result");
    result.innerText = `Final Price: $${total.toFixed(2)}`;
    result.classList.add("highlight");
  
    // Изменение кнопки
    document.querySelector("button").innerText = "Recalculate";
  }
  