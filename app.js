let voteNumber = document.getElementById("voteNumber");
let progressBar = document.getElementById("myBar");
let vn = 10;

const nengiMinus = document.getElementById("nengiMinus");
const nengiInput = document.getElementById("nengiInput");
const nengiPlus = document.getElementById("nengiPlus");

const ozoMinus = document.getElementById("ozoMinus");
const ozoInput = document.getElementById("ozoInput");
const ozoPlus = document.getElementById("ozoPlus");

const kiddwayaMinus = document.getElementById("kiddwayaMinus");
const kiddwayaInput = document.getElementById("kiddwayaInput");
const kiddwayaPlus = document.getElementById("kiddwayaPlus");

const ericaMinus = document.getElementById("ericaMinus");
const ericaInput = document.getElementById("ericaInput");
const ericaPlus = document.getElementById("ericaPlus");

const layconMinus = document.getElementById("layconMinus");
const laconInput = document.getElementById("layconInput");
const layconPlus = document.getElementById("layconPlus");

const dorathyMinus = document.getElementById("dorathyMinus");
const dorathyInput = document.getElementById("dorathyInput");
const dorathyPlus = document.getElementById("dorathyPlus");

nengiPlus.addEventListener("click", () => {
  if (vn > 0) {
    nengiInput.value++;
    vn--;
    voteNumber.textContent = vn;
    console.log(vn);
    let voteLen = (vn * 100) / 10;
    console.log(voteLen);
    progressBar.style.width = `${voteLen}%`;
  }
});

nengiMinus.addEventListener("click", () => {
  if (vn < 10) {
    nengiInput.value--;
    vn++;
    voteNumber.textContent = vn;
    let voteLen = (vn * 100) / 10;
    console.log(voteLen);
    progressBar.style.width = `${voteLen}%`;
  }
});

ozoPlus.addEventListener("click", () => {
  if (vn > 0) {
    ozoInput.value++;
    vn--;
    voteNumber.textContent = vn;
  }
});

ozoMinus.addEventListener("click", () => {
  if (vn < 10) {
    ozoInput.value--;
    vn++;
    voteNumber.textContent = vn;
  }
});

kiddwayaPlus.addEventListener("click", () => {
  if (vn > 0) {
    kiddwayaInput.value++;
    vn--;
    voteNumber.textContent = vn;
  }
});

kiddwayaMinus.addEventListener("click", () => {
  if (vn < 10) {
    kiddwayaInput.value--;
    vn++;
    voteNumber.textContent = vn;
  }
});

ericaMinus.addEventListener("click", () => {
  if (vn < 10) {
    ericaInput.value--;
    vn++;
    voteNumber.textContent = vn;
  }
});

ericaPlus.addEventListener("click", () => {
  if (vn > 0) {
    ericaInput.value++;
    vn--;
    voteNumber.textContent = vn;
  }
});

layconMinus.addEventListener("click", () => {
  if (vn < 10) {
    layconInput.value--;
    vn++;
    voteNumber.textContent = vn;
  }
});
layconPlus.addEventListener("click", () => {
  if (vn > 0) {
    layconInput.value++;
    vn--;
    voteNumber.textContent = vn;
  }
});

dorathyMinus.addEventListener("click", () => {
  if (vn < 10) {
    dorathyInput.value--;
    vn++;
    voteNumber.textContent = vn;
  }
});

dorathyPlus.addEventListener("click", () => {
  if (vn > 0) {
    dorathyInput.value++;
    vn--;
    voteNumber.textContent = vn;
  }
});
