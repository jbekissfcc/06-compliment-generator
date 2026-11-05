/* 
  What this app does:
  -------------------
  - Waits for the user to click the button
  - Picks a random compliment from a list
  - Displays the compliment inside the page
  - Adds a random image above the compliment to keep it fun
    (example image source: https://picsum.photos/600/400)
*/
window.onload = function () {
  // 1. Get the button and output area from the HTML
  const compBtn = document.getElementById("complimentBtn");
  const compOut = document.getElementById("complimentContainer");

  // 2. Create a list of compliments to choose from
  let compliments = [
    "Your ability to overcome adversity is deeply inspiring.",
    "I admire your bravery to speak up about things that matter to you.",
    "You’re so resilient. I have so much respect for how you handle tough moments.",
    "Your courage to be yourself is truly empowering.",
    "Watching your journey and your commitment to building your skills is motivating.",
  ];
  // 3. Listen for a button click
  compBtn.addEventListener("click", () => {
    console.log("Button was clicked!", Date.now());
    // 4. Pick a compliment at random
    let compliment = Math.floor(Math.random() * 5);

    // 5. Update the page with the compliment and a random image
    let complimentEl = document.createElement("div");
    let complimentImg = document.createElement("img");
    let dateNow = Date.now();
    complimentImg.src = "https://picsum.photos/600/400?v=" + dateNow;
    let complimentP = document.createElement("p");
    complimentP.textContent = compliments[compliment];
    complimentEl.appendChild(complimentP);
    complimentEl.appendChild(complimentImg);
    compOut.replaceChildren(complimentEl);
  });
};
