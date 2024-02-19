const seatBookingBtn = getElementByClassName("bttn");

for (const btn of seatBookingBtn) {
  btn.addEventListener("click", seatBookingControl);
}

//coupon code apply
const applyBtn = getElement("applyBtn");
applyBtn.addEventListener("click", function (event) {
  const element = event.target.parentNode;
  console.log(element);
  let gradnTotal = getElementInnerTextValue("gradnTotal");
  const inputFild = getElement("couponInput").value;
  const convertArr = inputFild.split(" ").join("").toLowerCase();

  const coupleDis = gradnTotal * 0.2;
  const new12Dis = gradnTotal * 0.15;

  if (convertArr === "new15") {
    gradnTotal = gradnTotal - new12Dis;
    setInnerText("gradnTotal", gradnTotal);
    element.remove();
  } else if (convertArr === "couple20") {
    gradnTotal = gradnTotal - coupleDis;
    setInnerText("gradnTotal", gradnTotal);
    element.remove();
  } else {
    alert("Coupon code not mach !!! plz write caret coupon");
  }
});

function completeBooking() {
  const nextBtn = getElement("nextBtn");
  const numberInput = getElement("numberInput");
  numberInput.addEventListener("keyup", function (e) {
    const value = e.target.value;
    if (value.length === 11) {
      nextBtn.removeAttribute("disabled");
      nextBtn.style.backgroundColor = "rgb(74,222,128)";
    } else {
      nextBtn.setAttribute("disabled", true);
      nextBtn.style.backgroundColor = " rgb(187 247 208)";
    }
  });
}
completeBooking();

// next button click and open new page
const nextBtn = getElement("nextBtn");
newPageLode(nextBtn, "index2.html");

// return Home screen, click continue button
const goHome = getElement("continue");
newPageLode(goHome, "index.html");

function seatBookingControl(event) {
  const findSeat = event.target;
  const position = event.target.innerText;

  const maxSeat = getElementInnerTextValue("maxSeat");
  const totalSeat = getElementInnerTextValue("totalSeat");
  if (maxSeat < 4) {
    let countSeat = maxSeat + 1;
    disableFunction(findSeat);
    setBackgroundColor(findSeat);
    setInnerText("maxSeat", countSeat);
    const sub = totalSeat - 1;
    setInnerText("totalSeat", sub);
    createElement(position);
    totalCount();
    disableCouponBtn();
  } else {
    alert('You already selected "4"  Seat');
  }
}

function totalCount() {
  const ticketPrice = 550;
  const total = getElementInnerTextValue("total-price");
  const totalPrice = total + ticketPrice;
  setInnerText("total-price", totalPrice);
  setInnerText("gradnTotal", totalPrice);
}

function createElement(position) {
  const seat = getElement("seatClass");
  const div = document.createElement("div");
  const seatPosition = document.createElement("p");
  const Class = document.createElement("p");
  const price = document.createElement("p");
  seatPosition.textContent = position;
  Class.textContent = "Economoy";
  price.textContent = "550";
  div.classList.add("flex", "justify-between", "items-center", "mt-4");
  div.appendChild(seatPosition);
  div.appendChild(Class);
  div.appendChild(price);
  seat.appendChild(div);
}

function disableCouponBtn() {
  const maxSeat = getElementInnerTextValue("maxSeat");
  const input = getElement("cuponInput");
  const btn = getElement("applyBtn");
  if (maxSeat === 4) {
    btn.removeAttribute("disabled");
    btn.style.backgroundColor = "rgb(74,222,128)";
  }
}

function disableFunction(element) {
  element.setAttribute("disabled", true);
}

// utility funtion section=====================================================

// load a new page function
function newPageLode(button, link) {
  button.addEventListener("click", function () {
    window.location.href = link;
  });
}

// find Id
function getElement(elementId) {
  const element = document.getElementById(elementId);
  return element;
}

// find className
function getElementByClassName(className) {
  const element = document.getElementsByClassName(className);
  return element;
}

// get innerText
function getElementInnerText(elementId) {
  const element = document.getElementById(elementId).innerText;
  return element;
}

// get innerHtml value
function getElementInnerTextValue(elementId) {
  const element = document.getElementById(elementId).innerText;
  const convert = parseInt(element);
  return convert;
}

// set innerText
function setInnerText(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

// set background color
function setBackgroundColor(element) {
  element.classList.add("bg-green-500");
}
