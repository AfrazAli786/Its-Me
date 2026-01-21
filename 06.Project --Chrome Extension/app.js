const save_btn = document.querySelector(".input");
const input_field = document.querySelector("#input-el");
const ul = document.querySelector(".ul-el");
const del = document.querySelector(".delete");
const tab_btn = document.querySelector(".savetab");
console.log(tab_btn);

let myLeads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(array) {
  let listItems = "";
  for (let i = 0; i < array.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${array[i]}'>
                    ${array[i]}
                </a>
            </li>
        `;
  }
  ul.innerHTML = listItems;
}

save_btn.addEventListener("click", () => {
  if (Boolean(input_field.value.trim())) {
    myLeads.push(input_field.value);
    input_field.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  }
});

del.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  input_field.value = "";
  ul.innerHTML = "";
});

tab_btn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});
