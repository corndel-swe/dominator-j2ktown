// TODO: get a reference to the #button and #txt and #output
// TODO: add an event listener to the #button that changes the text in #output to the uppercase value of #txt
const button = document.getElementById("btn")
const inputText = document.getElementById("txt")
const outputText = document.getElementById("output")

button.addEventListener("click", () => {
    outputText.textContent = inputText.value.toUpperCase()
})