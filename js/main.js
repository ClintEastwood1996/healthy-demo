$(function() {
    // Owl Carousel
    let owl = $(".owl-carousel");
    owl.owlCarousel({
        dots: true,
        items: 1,
        responsive: {
        
        520: {
          items: 1.3
        },    

        600: {
            items: 1.5
        }, 

        720: {
          items: 2
        },
            
        870: {
          items: 2.5
        },
    
        1300: {
          items: 4
        },

        1600: {
            items: 5
        },

        1850: {
            items: 6
        }
      }
    });
  });
