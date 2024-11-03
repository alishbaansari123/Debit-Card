function updateCard() {
    var numberInput = document.getElementById("numberInput").value;
    var expiryInput = document.getElementById("expiryInput").value;
    var holderInput = document.getElementById("holderInput").value;

    var displayNumber = document.getElementById("displayNumber");
    var displayExpiry = document.getElementById("displayExpiry");
    var displayHolder = document.getElementById("displayHolder");

    if (numberInput) {
        displayNumber.textContent = numberInput.replace(/\d(?=\d{4})/g, "**** "); 
    } else {
        displayNumber.textContent = "**** **** **** ****"; 
    }

    displayExpiry.textContent = expiryInput ? "Expiry: " + expiryInput : "Expiry: mon/year"; 

    displayHolder.textContent = holderInput ? "CardHolder Name: " + holderInput : "CardHolder Name: User Name"; 
}

function validateCVV() {
    var cvv = document.getElementById("cvvInput").value;

    if (/^\d{3}$/.test(cvv)) {
        document.getElementById("cvvDisplay").textContent = cvv;
    } else {
        document.getElementById("cvvInput").value = "";
        alert("Please enter a valid 3-digit CVV.");
    }
}