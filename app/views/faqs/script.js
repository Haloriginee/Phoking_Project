const questions = document.getElementsByClassName('accordion-title')

for (const question of questions) {
  const answer = question.parentElement.querySelector('.accordion-content')
  const remove = question.parentElement.querySelector(".remove")
  const add = question.parentElement.querySelector(".add")
  let open = false //Variable to check if the answer is visible or not

  function openAnswer() {
    if (open == true) {
      add.style.display = "block";
      remove.style.display = "none";
      answer.style.overflow = "hidden";
      answer.style.maxHeight = '0';
      open = false;
    } else {
      add.style.display = "none";
      remove.style.display = "block";
      answer.style.maxHeight = "300px";
      answer.style.overflow = "visible";
      open = true;
    }
  }

  question.addEventListener('click', openAnswer)
}
