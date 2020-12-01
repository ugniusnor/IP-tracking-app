function getInput () {
    const userInput = document.querySelector("input");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener('click',(e) => {
    if (userInput.value.length < 2) {
        {e.preventDefault()}
        return;
        }
        // console.log(userInput.value);
 return userInput.value;

})

}


export default getInput;