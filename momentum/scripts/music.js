export const button = document.querySelector(".play");

button.addEventListener("click", toggleBtn);

export function toggleBtn() {
  button.classList.toggle("pause");
}
