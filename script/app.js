const userName = document.querySelector("#input-name");
const btnIn = document.querySelector(".btn-in");
const male = document.querySelector("#male-check");
const female = document.querySelector("#female-check");
const form = document.querySelector("#form");
const btnLogout = document.querySelector("#logOut");
var name;
var userMale;
var userfemale;

btnIn.addEventListener("click", (e) => {
  e.preventDefault();
  const userNameValue = userName.value;

  if (male.checked === true) {
    userMale = "male";
    forBoys(userNameValue, userMale);
  } else if (female.checked === true) {
    userfemale = "female";
    forGirls(userNameValue, userfemale);
  }

  document.querySelector(".welcome-container").style.display = "none";
  document.querySelector(".math-container").style.display = "block";
});

// change user logo according to input

function forBoys(boyName, boyGender) {
  if (boyGender === "male") {
    var showprofile;
    showprofile = `<img class="usre-logo" src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1626716065/boy_urgsbe.svg"> <h4>${boyName}</h4>  `;
    document.querySelector(".user-container").innerHTML = showprofile;
  }
}

function forGirls(girlName, girlGender) {
  if (girlGender === "female") {
    var showprofile;
    showprofile = `<img class="usre-logo" src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1626716065/girl_fcu89n.svg"> <h4>${girlName}</h4>  `;
    document.querySelector(".user-container").innerHTML = showprofile;
  }
}
