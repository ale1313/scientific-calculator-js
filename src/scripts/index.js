let memory = "",
  shiftState = false,
  calcState = false;

const shiftHandler = () => {
  if (shiftState === false) {
    shiftState = true;
    document.getElementById("memory").value = "M";
    document.getElementById("memoryShift").innerHTML = "M+";
  } else {
    shiftState = false;
    document.getElementById("memory").value = "M+";
    document.getElementById("memoryShift").innerHTML = "M";
  }
};

const buttonPress = value => {
  if (calcState !== false) {
    let fieldValue = document.getElementById("ans").value;
    switch (value) {
      case "ON":
        document.getElementById("ans").style.backgroundColor = "#CCC";
        document.getElementById("ans").value = "0";
        break;
      case "OFF":
        document.getElementById("ans").style.backgroundColor = "#333";
        document.getElementById("ans").value = "";
        calcState = false;
        break;
      case "=":
        try {
          eval(fieldValue);
        } catch {
          document.getElementById("ans").value = "Syntax error";
        }
        document.getElementById("ans").value = eval(fieldValue);
        break;
      case "C":
      case "AC":
        document.getElementById("ans").value = "0";
        break;
      case "M+":
        memory = document.getElementById("ans").value;
        break;
      case "M":
        document.getElementById("ans").value += memory;
        break;
      case "SHIFT":
        shiftHandler();
        break;
      default:
        if (fieldValue === "0") {
          document.getElementById("ans").value = "";
        }
        document.getElementById("ans").value += value;
    }
  } else if (calcState === false && value === "ON") {
    calcState = true;
    document.getElementById("ans").style.backgroundColor = "#CCC";
    document.getElementById("ans").value = "0";
  }
};
