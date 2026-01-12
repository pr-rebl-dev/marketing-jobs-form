document.addEventListener("DOMContentLoaded", function () {
  console.log("GitHub custom script loaded :)");

  // Define the fields and values you want to set
  const fieldsToSet = {
    "text-0000001a": "123 Example Street",
    "text-0000001b": "Another Value", // Example for multiple fields
    // Add more fieldId: value pairs as needed
  };

  // Function to set value for a single field
  function setFieldValue(fieldId, value) {
    const field = document.getElementById(fieldId);
    if (!field) return false;

    if (field.tagName === "INPUT" || field.tagName === "TEXTAREA") {
      field.value = value;
    } else {
      field.textContent = value; // For div/span fields
    }

    // Trigger events so 123FormBuilder registers the change
    ["input", "change", "blur"].forEach(evt => {
      field.dispatchEvent(new Event(evt, { bubbles: true }));
    });

    console.log(`Value set for ${fieldId}: "${value}"`);
    return true;
  }

  // Polling loop to wait until fields exist
  const interval = setInterval(() => {
    let allSet = true;
    for (const [fieldId, value] of Object.entries(fieldsToSet)) {
      const success = setFieldValue(fieldId, value);
      if (!success) allSet = false;
    }

    if (allSet) clearInterval(interval);
  }, 100); // Check every 100ms
});
