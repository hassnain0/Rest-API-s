const update = document.querySelector("#update-button");

update.addEventListener("click", (_) => {
  fetch("/quotes", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Hassnain Ali",
      quotes: "I find your lack of faith disturbing.",
    }),
  });
});
