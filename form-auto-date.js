document.addEventListener("DOMContentLoaded", function () {
  console.log("GitHub custom script loaded!");

  // Define the fields and values you want to set
  const fieldsToSet = {
    "text-0000001a": "123 Example Street",
    "text-0000001b": "Another Value", // Add more if needed
  };

  // Function to set value for a single field
  function setFieldValue(fieldId, value) {
    const field = document.getElementById(fieldId);
    if (!field) {
      console.warn(`Field ${fieldId} not found`);
      return;
    }

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
  }

  // Set all fields once
  for (const [fieldId, value] of Object.entries(fieldsToSet)) {
    setFieldValue(fieldId, value);
  }
});
