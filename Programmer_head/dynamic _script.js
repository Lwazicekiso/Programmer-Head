document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.read-button'); // Note the change

    buttons.forEach(button => {
        let done = false;// Move 'done' declaration inside the loop
  
        button.addEventListener('click', () => {
        console.log('Button clicked');
  
        if (!done) { // Simplified the condition
            button.textContent = 'Done';
            button.style.backgroundColor = 'green';
          done = true;
        } else {
            button.textContent = 'Mark as done';
            button.style.backgroundColor = 'red';
          done = false;
        }
      });
    });
  });