function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = document.getElementById("display").value;
        document.getElementById("display").value = eval(result);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

