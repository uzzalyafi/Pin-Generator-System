// TODO 1: Generate PIN - done
// TODO 2: Make the keypad functional - done
// TODO 3: Make Notification Work - done
// TODO 4: Make try out functional - done
// TODO 5: Make "<" and "C" work on the keypress - done
// TODO 6: If there is no try left user won't able to generate a new pin - done

// Selectors
const generatedPin = document.querySelector(".generatedPin");
const generatePinBtn = document.querySelector(".generate-btn");
const showValue = document.querySelector(".showValue");
const removeBtn = document.getElementById("removeBtn");
const submitBtn = document.querySelector(".submit-btn");
const worngPin = document.querySelector(".wrong-pin");
const correctPin = document.querySelector(".correct-pin");
const tryLeft = document.getElementById("tryLeft");

// Generate pin
generatePinBtn.addEventListener("click", () => {
  generatedPin.value = "";
  let randomNumber = Math.floor(1000 + Math.random() * 9000);
  generatedPin.value = randomNumber;
  generatePinBtn.disabled = true;
});

//keypad functional
function showKeyPadInput(number) {
  let kyePadValue = number;
  showValue.value += kyePadValue;
  if (generatedPin.value === "") {
    alert("Please Generate Pin");
  }
  if (kyePadValue === "C") {
    showValue.value = "";
  }
}

// Remove one digit
function removeOneDigit() {
  let currentValue = showValue.value;
  let newVlue = currentValue.slice(0, -1);
  showValue.value = newVlue;
  if (generatedPin.value === "") {
    alert("Please Generate Pin");
  }
}

// Generate value macth
function valueMatch() {
  let generatedValue = generatedPin.value;
  let kyePadValue = showValue.value;
  if (generatedPin.value === "") {
    return alert("Please Generate Pin");
  }
  if (generatedValue === kyePadValue) {
    worngPin.style.display = "none";
    correctPin.style.display = "block";
    generatePinBtn.style.backgroundColor = "green";
    submitBtn.style.backgroundColor = "green";
  } else {
    worngPin.style.display = "block";
    correctPin.style.display = "none";
    generatePinBtn.style.backgroundColor = "red";
    submitBtn.style.backgroundColor = "red";
    showValue.value = "";
    numberOfTry();
  }
}

// Try let functional
function numberOfTry() {
  let chance = tryLeft.innerText;
  if (chance > 0) {
    tryLeft.innerHTML = --chance;
  } else {
    tryLeft.innerHTML = "No Try, Please try after 30 Minite";
    generatePinBtn.disabled = true;
    generatePinBtn.style.opacity = "0.5";
    submitBtn.style.opacity = "0.5";
  }
}

removeBtn.addEventListener("click", removeOneDigit);
submitBtn.addEventListener("click", valueMatch);
