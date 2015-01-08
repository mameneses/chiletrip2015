  var hideShowing = function() {
    var tileClass = ["pucon","arrive","santiago","pineda","wedding","vina","depart", "packing", "santiago2"];
    for ( var i = 0; i < tileClass.length; i++) {
      var tileInfo = "." + tileClass[i] + "info";     
      $(tileInfo).css("display", "none");         
    };
  };

$( document ).ready(function() {
  
  
  $(".pucon").on("click", function() {     
      $('.puconinfo').slideToggle("slow");    
  }); 
  $(".arrive").on("click", function() {     
      $('.arriveinfo').slideToggle("slow");        
  });
  $(".santiago").on("click", function() {     
      $('.santiagoinfo').slideToggle("slow");        
  });
  $(".santiago2").on("click", function() {     
      $('.santiago2info').slideToggle("slow");        
  });

  $(".pineda").on("click", function() {     
      $('.pinedainfo').slideToggle("slow");        
  });

  $(".wedding").on("click", function() {     
      $('.weddinginfo').slideToggle("slow");        
  });

  $(".vina").on("click", function() {     
      $('.vinainfo').slideToggle("slow");        
  });

  $(".depart").on("click", function() {     
      $('.departinfo').slideToggle("slow");        
  });

  $(".packing").on("click", function() {     
      $('.packinginfo').slideToggle("slow");        
  });
});


