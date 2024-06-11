window.scrollTo(0, 0);
// Show and hide elements
const observerLeft = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showleft');
        }
        /* Make items disappear
        else {
            entry.target.classList.remove('show');
        }
        */
    })
})

const observerBottom = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showbottom');
        }
        /* Make items disappear
        else {
            entry.target.classList.remove('show');
        }
        */
    })
})

const hiddenElementsLeft = document.querySelectorAll('.hiddenleft');
hiddenElementsLeft.forEach((el) => observerLeft.observe(el));

const hiddenElementsBottom = document.querySelectorAll('.hiddenbottom');
hiddenElementsBottom.forEach((el) => observerBottom.observe(el));

// On refresh, scroll to top and hide elements
window.onload = function() {
    hiddenElementsLeft.forEach((el) => {
        el.classList.remove('showleft');
        console.log('id removed')
    });
    hiddenElementsBottom.forEach((el) => {
        el.classList.remove('showbottom');
        console.log('id removed')
    });
  };

document.getElementById('Form').addEventListener('submit', function(event) {
      // Delay the reset to ensure formspree submission completes
      setTimeout(() => {
        document.getElementById('Form').reset();
      }, 300);
    });