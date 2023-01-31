const shareButton = document.querySelector(".share");
const shareLinks = document.querySelector(".share-active");

shareButton.addEventListener("click", handleClick);

function handleClick(){
    shareLinks.classList.toggle("hidden")
}