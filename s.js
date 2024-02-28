const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "bg-home.jpg") {
    myImage.setAttribute("src", "bg-home.jpg");
  } else {
    myImage.setAttribute("src", "icons.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  function setUserPrenom() {
    const myPrenom = prompt("Please enter your Prenom.");
    if (!myPrenom) {
      setUserprenom();
    } else {
      localStorage.setItem("Prenom", myPrenom);
      myHeading.textContent = `Mozilla is cool, ${myPrenom}`;
    }
  }
  function setUseradresse email () {
    const myadresse email = prompt("Please enter your adresse email.");
    if (!myadresse email) {
      setUseradresse email();
    } else {
      localStorage.setItem("adresse", myadresse email);
      myHeading.textContent = `Mozilla is cool, ${myadresse email}`;
    }
  }
  function setUsertelephone () {
    const myadresse email = prompt("Please enter your telephone.");
    if (!mytelephone) {
      setUsertelephone();
    } else {
      localStorage.setItem("telephone", mytelephone);
      myHeading.textContent = `Mozilla is cool, ${mytelephone}`;
    }
  }

