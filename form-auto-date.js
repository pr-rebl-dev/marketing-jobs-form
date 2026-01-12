document.addEventListener("DOMContentLoaded", function () {
  console.log("GitHub custom script loaded!");

  setTimeout(() => {
    const input = document.getElementById("text-0000001a");
    if (input) {
      input.value = "123 Example Street";
      ["input", "change", "blur"].forEach(evt => 
        input.dispatchEvent(new Event(evt, { bubbles: true }))
      );
      console.log('Property Address set to "123 Example Street"');
    } else {
      console.log("Field not found");
    }
  }, 200); // Wait 200ms
});
