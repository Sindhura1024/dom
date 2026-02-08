//getting id of container
let containerEle = document.getElementById("Container");

//creating h1 element and adding text to container
let h1Ele = document.createElement("h1");
h1Ele.textContent = "Frontend Development";
containerEle.appendChild(h1Ele);

let divEle = document.createElement("div");
containerEle.appendChild(divEle);

//adding styles and removing styles using classList dynamically
let applyBtn = document.createElement("button");
applyBtn.textContent = "Apply Styles";
applyBtn.addEventListener("click", function() {
    h1Ele.classList.add("apply-styles");
});
divEle.appendChild(applyBtn);

let removeBtn = document.createElement("button");
removeBtn.textContent = "Remove Styles";
removeBtn.addEventListener("click", function() {
    h1Ele.classList.remove("apply-styles");
});
divEle.appendChild(removeBtn);
