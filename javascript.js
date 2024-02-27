function convertStringToNumb(id) {
    const numb = document.getElementById(id).innerText;
    const number = parseInt(numb);
    return (number);
}

function sumTotal(id, value) {
    const data = convertStringToNumb(id);
    const dataValue = data + value;
    const totalDataValue = document.getElementById(id);
    totalDataValue.innerText = dataValue;
}

function updateGrandTotal(data) {
    const totalDataValue = convertStringToNumb("total-price");
    if (data === undefined) {
        document.getElementById("grand-total").innerText = totalDataValue;
    }
    else {
        const couponCode = document.getElementById("coupon-code").value;
        const offer15 = document.getElementById("offer-15").innerText
        const offer20 = document.getElementById("offer-20").innerText

        if (couponCode === offer15) {
            document.getElementById("grand-total").innerText = totalDataValue * .85;
            document.getElementById("discounted-price").innerText = totalDataValue * .15;
            document.getElementById("coupon-container").classList.add('hidden');
            document.getElementById("discounted-container").classList.remove('hidden');

        }
        else if (couponCode === offer20) {
            document.getElementById("grand-total").innerText = totalDataValue * .80;
            document.getElementById("discounted-price").innerText = totalDataValue * .2;
            document.getElementById("coupon-container").classList.add('hidden');
            document.getElementById("discounted-container").classList.remove('hidden');
        }
        else {
            alert("Please enter valid Coupon");
        }

    }
    document.getElementById("coupon-code").value = '';
};


function numCheck(x) {
    if (isNaN(x)) {
        alert('Not a Number! please check');
        document.getElementById("phone-number").value = '';
        document.getElementById("next").classList.add('disabled');
        document.getElementById("next").classList.add('bg-gray-300');
        document.getElementById("next").classList.remove('bg-[#1DD100]');
    }
    else {
        const num1 = convertStringToNumb("total-price");
        console.log(num1);
        console.log(x);
        console.log(typeof x);
        if (num1 > 0 && typeof x === 'string') {
            document.getElementById("next").classList.remove('disabled');
            document.getElementById("next").classList.remove('bg-gray-300');
            document.getElementById("next").classList.add('bg-[#1DD100]');
        }
    }
}


function getVal() {
    const val = document.getElementById("phone-number").value;
    const num2 = numCheck(val);
}




const allSeatNo = document.getElementsByClassName("seat");

for (const seatNo of allSeatNo) {
    seatNo.addEventListener("click", function (event) {
        const selectedSeat = event.target.innerText;
        // Output Function Start
        if (document.getElementById("seat-num").innerText <= 3) {
            event.target.classList.add('disabled');
            event.target.classList.add('text-white');

            const selectedContainer = document.getElementById("selected-seat-container");

            const div = document.createElement("div");
            div.classList.add("flex");
            div.classList.add("justify-between");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            const p3 = document.createElement("p");

            p1.innerText = selectedSeat;
            p2.innerText = "Economy";
            p3.innerText = "550";

            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            selectedContainer.appendChild(div);

            sumTotal("total-price", 550);
            sumTotal("seat-num", 1);
            sumTotal("remaining-seat", -1);
            updateGrandTotal();
        }

        else {
            alert("Already selected four seat")
        }
    })
}

function final() {
    document.getElementById("success").classList.remove('hidden');
    document.getElementById("main-section").classList.add('hidden');
    document.getElementById("footer-section").classList.add('hidden');
}

function con() {
    document.getElementById("success").classList.add('hidden');
    document.getElementById("main-section").classList.remove('hidden');
    document.getElementById("footer-section").classList.remove('hidden');
}