function calculatePrice() {
    let basePrice = 100;
  
    const education = parseFloat(document.getElementById('education').value);
    const income = parseFloat(document.getElementById('income').value);
    const appearance = parseFloat(document.getElementById('appearance').value);
  
    let ageRadios = document.getElementsByName('age');
    let ageFactor = 1;
    for (let radio of ageRadios) {
      if (radio.checked) {
        ageFactor = parseFloat(radio.value);
        break;
      }
    }
  
    let traitBonus = 0;
    let traits = document.getElementsByClassName('trait');
    for (let trait of traits) {
      if (trait.checked) traitBonus += parseFloat(trait.value);
    }
  
    let flagFactor = 1;
    let flags = document.getElementsByClassName('flag');
    for (let flag of flags) {
      if (flag.checked) flagFactor *= parseFloat(flag.value);
    }
  
    let flagPenalty = 0;
    let deductFlags = document.getElementsByClassName('flagDeduct');
    for (let flag of deductFlags) {
      if (flag.checked) flagPenalty += parseFloat(flag.value);
    }
  
    let total = basePrice * education * income * ageFactor * flagFactor;
    total += appearance + traitBonus + flagPenalty;
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Estimated Groom Price: $${total.toFixed(2)}`;
    resultDiv.classList.add('highlight');
  
    document.querySelector('button').innerText = "Recalculate";
  }
  