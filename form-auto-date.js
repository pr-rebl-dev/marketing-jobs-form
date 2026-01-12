document.addEventListener("DOMContentLoaded", function () {

  console.log("LOADED :)");

  const today = new Date();

  const day   = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year  = String(today.getFullYear());

  // Locate the correct date control by label text
  const labels = document.querySelectorAll('[data-role="label"]');

  labels.forEach(label => {
    if (label.textContent.includes("Deadline final artwork required")) {

      const control = label.closest('[data-role="control"][data-type="date"]');
      if (!control) return;

      const dayDiv   = control.querySelector('[data-part="day"]');
      const monthDiv = control.querySelector('[data-part="month"]');
      const yearDiv  = control.querySelector('[data-part="year"]');

      if (dayDiv && monthDiv && yearDiv) {
        dayDiv.textContent   = day;
        monthDiv.textContent = month;
        yearDiv.textContent  = year;

        // Mark as populated (important for validation)
        dayDiv.removeAttribute("data-is-null");
        monthDiv.removeAttribute("data-is-null");
        yearDiv.removeAttribute("data-is-null");

        // Trigger change events so 123FormBuilder registers the value
        ["input", "change", "blur"].forEach(evt => {
          control.dispatchEvent(new Event(evt, { bubbles: true }));
        });
      }
    }
  });

});
