const time = document.querySelector(".time");
const day = document.querySelector(".date");

export { time, day };

export function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
  showDate();
}

export function showDate() {
  const date = new Date();

  const options = {
    weekday: "long",

    month: "long",
    day: "numeric",
  };
  const currentDate = date.toLocaleDateString("en-US", options);
  day.textContent = currentDate;
}
