

const productPrice = 23999;

function showOrder() {
    document.getElementById("orderBox").style.display = "block";
    calculatePrice();
}

function calculatePrice() {
    let qty = document.getElementById("qty").value;

    if (qty < 1 || qty === "") {
        qty = 1;
        document.getElementById("qty").value = 1;
    }

    const total = productPrice * qty;

    document.getElementById("total").innerHTML =
        "₹" + total.toLocaleString("en-IN");
}