let voteNumber = document.getElementById("voteNumber");
let vn = 10;

const nengiMinus = document.getElementById("nengiMinus");
const nengiInput = document.getElementById("nengiInput");
const nengiPlus = document.getElementById("nengiPlus");

const ozoMinus = document.getElementById("ozoMinus");
const ozoInput = document.getElementById("ozoInput");
const ozoPlus = document.getElementById("ozoPlus");

const kiddwayaMinus = document.getElementById("kiddwayaMinus");
const kiddwayaInput = document.getElementById("kiddwayaInput");
const kiddwayaPlus = document.getElementById("kiddwayPlus");

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
    }
  });

nengiMinus.addEventListener("click", () => {
  if (vn < 10) {
    nengiInput.value--;
    vn++;
    voteNumber.textContent = vn;
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

kiddwayaMinus.addEventListener("click", () => {
    
})



