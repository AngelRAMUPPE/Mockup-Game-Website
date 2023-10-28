document.addEventListener('DOMContentLoaded', function () {
    const transElement = document.querySelector('.trans');
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight && rect.bottom >= 0
      );
    }
  
    function handleScroll() {
      if (isInViewport(transElement)) {
        transElement.classList.add('fade-in');
        window.removeEventListener('scroll', handleScroll); // Remove the scroll event listener after the element has faded in
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  