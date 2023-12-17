$(document).ready(function() {
    // Handle hover effect for logo image
    $('.icon-link').hover(function() {
      // Hover-in: Change image src to the one with the gradient
      $(this).find('.logo-hover').attr('src', $(this).find('.logo-hover').data('hover-src'));
    }, function() {
      // Hover-out: Change image src back to the default image
      $(this).find('.logo-hover').attr('src', $(this).find('.logo-hover').data('default-src'));
    });

    // Handle hover effect for other elements (icon-image)
    $('.icon-link .icon-image').hover(function() {
      // Hover-in: Change image src to the one with the gradient
      $(this).attr('src', $(this).data('hover-src'));
    }, function() {
      // Hover-out: Change image src back to the default image
      $(this).attr('src', $(this).data('default-src'));
    });

    // Plain JavaScript for hover effect on links
    const links = document.querySelectorAll('.custom-link');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.classList.add('gradient-hover');
      });
      link.addEventListener('mouseleave', () => {
        link.classList.remove('gradient-hover');
      });
    });
  });