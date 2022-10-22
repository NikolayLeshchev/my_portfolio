const greeting = document.querySelector(".greeting");
const name = document.querySelector(".name");

export { greeting };

export function getTimeOfDay() {
  const date = new Date();

  const hours = date.getHours();

  if (hours >= 6 && hours < 12) {
    return "morning";
  } else if (hours >= 12 && hours < 18) {
    return "afternoon";
  } else if (hours >= 18 && hours < 24) {
    return "evening";
  } else {
    return "night";
  }
}

export function showGreeting() {
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay},`;

  greeting.textContent = greetingText;
}

export function setLocalStorage() {
  localStorage.setItem("name", name.value);
}

export function getLocalStorage() {
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
}
