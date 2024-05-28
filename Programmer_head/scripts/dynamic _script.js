document.addEventListener('DOMContentLoaded', () => {
  const readButtons = document.querySelectorAll('.read-button');
  const toggleButtons = document.querySelectorAll('.toggler-button');

  // Function to handle read button clicks
  function toggleReadStatus(button) {
      button.classList.toggle('read');
      button.textContent = button.classList.contains('read') ? 'Done' : 'Mark as done';
  }

  // Function to toggle content and icon for each section
  function toggleSection(button) {
    const contentToToggle = button.parentNode.nextElementSibling; 
    if (!contentToToggle) return; // Exit if no content found

      // Toggle 'active' class on content and icon
      contentToToggle.classList.toggle('active');
      button.classList.toggle('active'); // Toggle for the button itself

      // Update the icon image
      const toggleIcon = button.querySelector('.toggle-icon');
      if (button.classList.contains('active')) {
          toggleIcon.src = "images/icons/Right_Arrow.svg";
      } else {
          toggleIcon.src = "images/icons/Down_arrow_icon.svg";
      }

      // Check if all sections are "Done"
      if (allSectionsRead()) {
          alert("Congratulations! You've read all sections!");
      }
  }

  // Check if all sections are read
  function allSectionsRead() {
      return Array.from(readButtons).every(button => button.classList.contains('read'));
  }

  // Attach event listeners to read buttons
  readButtons.forEach(button => {
      button.addEventListener('click', () => toggleReadStatus(button));
  });

  // Attach event listeners to toggle buttons
  toggleButtons.forEach(button => {
      button.addEventListener('click', () => toggleSection(button));
  });
});
