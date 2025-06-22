// Get references to the DOM elements
const codeEditor = document.getElementById('code-editor');
const previewFrame = document.getElementById('preview-frame');
const runBtn = document.getElementById('run-btn');

// Function to update the preview pane
function updatePreview() {
    // Get the code from the editor
    const code = codeEditor.value;

    // Write the code into the iframe.
    // The `srcdoc` attribute is a secure way to render content in an iframe.
    previewFrame.srcdoc = code;
}

// Add an event listener to the "Run" button
runBtn.addEventListener('click', updatePreview);

// Optional: Run the code automatically when the page first loads
document.addEventListener('DOMContentLoaded', updatePreview);