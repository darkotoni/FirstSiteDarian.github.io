
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "Images/tokyo.jpg") {
    myImage.setAttribute("src", "Images/tokyo2.jpg");
  } else {
    myImage.setAttribute("src", "Images/tokyo.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Tokyo is cool, ${myName}`;
    }
  }
  

if (!localStorage.getItem("name")){
    setUserName();
}else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Tokyo is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };
  