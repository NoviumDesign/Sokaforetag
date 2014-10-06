/* *** Accordiom *** */

$(document).ready(function(){
  $(".js-accordion-trigger").click(function(){
    jQuery(this).toggleClass('content-is-expanded');
    jQuery(this).parent().find(".accordion-content").toggleClass("show-accordion");
  });  
});

/* *** Accordion End *** */

/* *** Charts *** */

var economicHistoryData = {
  labels : ["2011","2012","2013"],
  datasets : [
    {
      label: "Omsättning",
      strokeColor : "rgba(52, 152, 219,1.0)",
      pointColor : "rgba(52, 152, 219,1.0)",
      pointStrokeColor : "#FFF",
      pointHighlightFill : "rgba(52, 152, 219,0.75)",
      data : [100,120,213]
    },
    {
      label: "Resultat",
      strokeColor : "rgba(46,204,113,1.0)",
      pointColor : "rgba(46,204,113,1.0)",
      pointStrokeColor : "#FFF",
      pointHighlightFill : "rgba(46,204,113,0.75)",
      data : [100,82,97]
    },
    {
      label: "Antal anställda",
      strokeColor : "rgba(243, 128, 52,1.0)",
      pointColor : "rgba(243, 128, 52,1.0)",
      pointStrokeColor : "#FFF",
      pointHighlightFill : "rgba(243, 128, 52,0.75)",
      data : [100,89,65]
    },
    {
      label: "Snittresultat för hela branschen",
      strokeColor : "rgba(241, 196, 15,1.0)",
      pointColor : "rgba(241, 196, 15,1.0)",
      pointStrokeColor : "#FFF",
      pointHighlightFill : "rgba(241, 196, 15,0.75)",
      data : [100,111,124]
    }
  ]
};

var economicHistoryOptions = {
  responsive : true,
  maintainAspectRatio : true,
  datasetFill : false,
  pointHitDetectionRadius : 20,
  legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};

var economicHistory_ctx = $("#economicHistory").get(0).getContext("2d");
new Chart(economicHistory_ctx).Line(economicHistoryData, economicHistoryOptions);

/* *** Charts End *** */ 