const seatBookingBtn = getElementByClassName("bttn");

for (const btn of seatBookingBtn) {
  btn.addEventListener("click", seatBookingControl);
}

function seatBookingControl(event) {
  const findSeat = event.target;
  const position = event.target.innerText;

  const maxSeat = getElementInnerTextValue("maxSeat");
  const totalSeat = getElementInnerTextValue("totalSeat");

  // let isSelected = false;
  if (this.classList.contains("bg-green-500")) {
    anabelFunction(findSeat);
    this.classList.remove("bg-green-500");
    let countSeat = maxSeat - 1;
    setInnerText("maxSeat", countSeat);
    const sub = totalSeat + 1;
    setInnerText("totalSeat", sub);
    removeElement("seatClass");
    subCount();
  } else {
    if (maxSeat < 4) {
      this.classList.add("bg-green-500");
      let countSeat = maxSeat + 1;
      setInnerText("maxSeat", countSeat);
      totalCount();
      // disableFunction(findSeat);
      const sub = totalSeat - 1;
      setInnerText("totalSeat", sub);
      createElement(position);
      disableCouponBtn();
    } else {
      alert('You already selected "4"  Seat');
    }
  }
}

//coupon code apply
const applyBtn = getElement("applyBtn");
applyBtn.addEventListener("click", function (event) {
  const element = event.target.parentNode;
  let gradnTotal = getElementInnerTextValue("gradnTotal");
  const inputFild = getElement("couponInput");
  const inputValue = inputFild.value;
  const convertArr = inputValue.split(" ").join("");
  const coupleDis = gradnTotal * 0.2;
  const new12Dis = gradnTotal * 0.15;
  const discount = getElement("discountTag");

  if (convertArr === "NEW15") {
    gradnTotal = gradnTotal - new12Dis;
    setInnerText("gradnTotal", gradnTotal);
    discount.classList.remove("hidden");
    getElement("discountId").innerText = new12Dis;
    element.remove();
  } else if (convertArr === "Couple20") {
    gradnTotal = gradnTotal - coupleDis;
    setInnerText("gradnTotal", gradnTotal);
    discount.classList.remove("hidden");
    getElement("discountId").innerText = coupleDis;
    element.remove();
  } else {
    inputFild.value = " ";
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

function totalCount() {
  const ticketPrice = 550;
  const total = getElementInnerTextValue("total-price");
  const totalPrice = total + ticketPrice;
  setInnerText("total-price", totalPrice);
  setInnerText("gradnTotal", totalPrice);
}

function subCount() {
  const ticketPrice = 550;
  const total = getElementInnerTextValue("total-price");
  const totalPrice = total - ticketPrice;
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
  div.classList.add(
    "flex",
    "removeDiv",
    "justify-between",
    "items-center",
    "mt-4"
  );
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

function anabelFunction(element) {
  element.removeAttribute("disabled");
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
// remove element
function removeElement(elementId) {
  const element = document.getElementById(elementId);
  const lastChildElement = element.lastChild;
  element.removeChild(lastChildElement);
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
