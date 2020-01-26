const AddWinner = document.querySelector(".AddWinner");
AddWinner.addEventListener("submit", e => {
  e.preventDefault();
  const city = AddWinner.querySelector(".city").value;
  const edition = AddWinner.querySelector(".edition").value;
  const category = AddWinner.querySelector(".category").value;
  const sport = AddWinner.querySelector(".sport").value;
  const athlete = AddWinner.querySelector(".athlete").value;
  const noc = AddWinner.querySelector(".noc").value;
  const gender = AddWinner.querySelector(".gender").value;
  const event = AddWinner.querySelector(".event").value;
  const medal = AddWinner.querySelector(".medal").value;
  post("/addWinner", {
    city,
    edition,
    category,
    sport,
    athlete,
    noc,
    gender,
    event,
    medal
  });
});
function post(path, data) {
  return window.fetch(path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}
