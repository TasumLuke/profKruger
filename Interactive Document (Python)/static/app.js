document.addEventListener("DOMContentLoaded", () => {
  const codeForm = document.querySelector("#code-form");

  // Handle form submission
  codeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const codeTextarea = codeForm.querySelector("#code-textarea");

    // Make POST request to server with code data
    fetch("/submit-code", {
      method: "POST",
      body: JSON.stringify({ code: codeTextarea.value }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // Clear code textarea
        codeTextarea.value = "";

        // Display code on page
        const codeTable = document.querySelector("#code-table tbody");
        const newRow = codeTable.insertRow();
        const addrCell = newRow.insertCell();
        const codeCell = newRow.insertCell();
        const descCell = newRow.insertCell();
        addrCell.innerText = data.addr;
        codeCell.innerText = data.code;
        descCell.innerText = data.desc;
      })
      .catch((err) => console.error(err));
  });
});