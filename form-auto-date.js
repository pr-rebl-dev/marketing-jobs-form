document.addEventListener("DOMContentLoaded", function () {
  console.log("GitHub custom script loaded!");

  const input = document.getElementById("text-0000001a");

  if (input) {
    // Set the value
    input.value = "123 Example Street";

    // Trigger events so 123FormBuilder registers the value
    ["input", "change", "blur"].forEach(evt => {
      input.dispatchEvent(new Event(evt, { bubbles: true }));
    });

    console.log('Property Address set to "123 Example Street"');
  } else {
    console.warn("Field #text-0000001a not found yet.");
  }
});
