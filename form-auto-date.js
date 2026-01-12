document.addEventListener("DOMContentLoaded", function () {
  console.log("The GitHub custom script has loaded!");

  const input = document.getElementById("text-0000001a");
  if (input) {
    input.value = "123 Example Street";

    // Trigger events so 123FormBuilder registers the value
    ["input", "change", "blur"].forEach(evt => {
      input.dispatchEvent(new Event(evt, { bubbles: true }));
    });
  }
});
