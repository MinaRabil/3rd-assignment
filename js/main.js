/* recieve inputs */

var siteNameInput = document.getElementById("bookmarkName");
var siteURLInput = document.getElementById("bookmarkURL");

/* push data to array */
var siteList = [];
if (localStorage.getItem("websities") !== null) {
  siteList = JSON.parse(localStorage.getItem("websities"));
  displayData();
}

function addSite() {
  var site = {
    name: siteNameInput.value,
    siteUrl: siteURLInput.value,
  };
  if (
    validName(siteNameInput.value) === true &&
    validURL(siteURLInput.value) === true
  ) {
    /*     validColoredInput(); */
    /* push */
    pushItems(site);
    localStorage.setItem("websities", JSON.stringify(siteList));

    /* Clear inputs */
    clearInputs();

    /* display */
    displayData();

    /* delete */
    deleteItem(index);
  } else {
    popCard();
    /*   inValidColoredInput() */
  }
}

function pushItems(index) {
  siteList.push(index);
}
function clearInputs() {
  siteNameInput.value = "";
  siteURLInput.value = "";
}

function displayData() {
  var cartona = "";
  for (var i = 0; i < siteList.length; i++) {
    cartona += `<tr>
          <td>${i + 1}</td>
          <td>${siteList[i].name}</td>
          <td><button class="btn btn-visit" onclick= onTab('${
            siteList[i].siteUrl
          }')>
              <i class="fa-solid fa-eye pe-2"></i>Visit
            </button></td>
          <td><button class="btn btn-delete pe-2" onclick="deleteItem('${i}')" >
              <i class="fa-solid fa-trash-can"></i>
              Delete
            </button></td>
        </tr>`;
  }
  console.log(cartona);
  document.getElementById("tableContent").innerHTML = cartona;
}
function onTab(indeX) {
  window.open(indeX, "_blank");
}

function deleteItem(index) {
  siteList.splice(index, 1);
  displayData();
  localStorage.setItem("websities", JSON.stringify(siteList));
}

function validURL(index) {
  var y =
    /(((ftp|http|https):\/\/)|(\/)|(..\/))(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  if (y.test(index) === true) {
    return true;
  } else {
    return false;
  }
}

function validName(index) {
  var x = /^[A-Za-z]{3,}$/;
  if (x.test(index) === true) {
    return true;
  } else {
    return false;
  }
}

function popCard() {
  boxInfo.classList.replace("d-none", "d-block");
}

function popCardRemove() {
  boxInfo.classList.replace("d-block", "d-none");
}

function checkInputName() {
  bookmarkName.classList.add("is-valid");

  if (validName(siteNameInput.value) === true) {
    bookmarkName.classList.replace("is-invalid", "is-valid");
  } else {
    bookmarkName.classList.replace("is-valid", "is-invalid");
  }
}

function checkInputURL() {
  bookmarkURL.classList.add("is-valid");

  if (validURL(siteURLInput.value) === true) {
    bookmarkURL.classList.replace("is-invalid", "is-valid");
  } else {
    bookmarkURL.classList.replace("is-valid", "is-invalid");
  }
}
