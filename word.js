var arrNames = ['Samus', 'Kraid', 'Ridley', 'metroids', '...and the Mother Brain!!!'];

  $.each(arrNames, function(i, val) {
      setTimeout(function() {
          $("#changingword").fadeOut("slow", function() {
              $(this).text(val).fadeIn("slow");
          });
      }, i * 3000);
  });
