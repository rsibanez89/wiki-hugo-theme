window.onload = function() {
  
  //--- Tree view
  var toggler = document.getElementsByClassName("caret");
  var i;
  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("caret-down");
    });
  }

  //--- Dragable menu
  var handler = document.querySelector('.navigation-bar');
  var wrapper = handler.closest('.page-container');
  var navigation = wrapper.querySelector('.tree-navigation');
  var isHandlerDragging = false;

  document.addEventListener('mousedown', function(e) {
    if (e.target === handler) {
      isHandlerDragging = true;
    }
  });

  document.addEventListener('mousemove', function(e) {
    if (!isHandlerDragging) {
      return false;
    }

    // Get offset
    var containerOffsetLeft = wrapper.offsetLeft;

    // Get x-coordinate of pointer relative to container
    var pointerRelativeXpos = e.clientX - containerOffsetLeft;
    
    var navigationMinWidth = 300;

    // Resize navigation
    // * 8px is the left/right spacing between .handler and its inner pseudo-element
    // * Set flex-grow to 0 to prevent it from growing
    navigation.style.width = (Math.max(navigationMinWidth, pointerRelativeXpos)) + 'px';
    navigation.style.flexGrow = 0;
  });

  document.addEventListener('mouseup', function(e) {
    // Turn off dragging flag when user mouse is up
    isHandlerDragging = false;
  });

};