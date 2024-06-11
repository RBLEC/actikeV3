<script>
  document.addEventListener('DOMContentLoaded', function() {
    var accordions = document.querySelectorAll('.accordion');

    accordions.forEach(function(accordion) {
      accordion.addEventListener('click', function() {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  });
</script>
