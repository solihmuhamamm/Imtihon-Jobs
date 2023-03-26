var elForm = document.querySelector("form");
var elCompanyInp = document.querySelector(".company");
var elJobInp = document.querySelector(".job");
var elSalaryInp = document.querySelector(".salary");
var ellist = document.querySelector(".list");
var arr = [
  {
    id: 1,
    JobTitle: "Frontent Developer",
    companyName: "Google",
    Salary: "1000$",
  },
  {
    id: 2,
    JobTitle: "Frontent Developer",
    companyName: "Najottalim",
    Salary: "10000$",
  },
];

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  obj(
    elJobInp.value.trim(),
    elCompanyInp.value.trim(),
    elSalaryInp.value.trim()
  );
  render();

  elJobInp.value = null;
  elCompanyInp.value = null;
  elSalaryInp.value = null;
});

function render() {
  ellist.innerHTML = null;

  for (var i = 0; i < arr.length; i++) {
    var elLi = document.createElement("li");
    elLi.innerHTML = `
                      <div class="mx-auto w-50 card">
                <div class="bg-light px-3 pt-2 pb-1">
                  <h5>${arr[i].JobTitle}</h5>
                </div>

                <div class="card-body p-3">
                  <p>Company Name:<strong>${arr[i].companyName}</strong></p>

                  <p>Salary:<strong>${arr[i].Salary}</strong></p>
                </div>
              </div>
        `;
    ellist.appendChild(elLi);
  }
}

function obj(a, b, c) {
  arr.push({
    id: arr.length + 1,
    JobTitle: a,
    companyName: b,
    Salary: c,
  });
}

render();
