$(document).ready(function () {

    $("#map-africa").CSSMap({
        "size": 1450,
        "tooltips": "floating-top-center",
        "responsive": "auto",
        "tapOnce": true


    });

    init();

     /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#cartoonVideo").attr('src');
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal").on('hide.bs.modal', function(){
        $("#cartoonVideo").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#myModal").on('show.bs.modal', function(){
        $("#cartoonVideo").attr('src', url);
    });

});



$('a.SAclass').click(function (e) {
    // Special stuff to do when this link is clicked...
    $("#liRivonia").toggleClass("d-none");
    $("#liMidrand").toggleClass("d-none");
    $("#liLonehill").toggleClass("d-none");
    $("#liBryanston").toggleClass("d-none");
    $("#liNorthriding").toggleClass("d-none");
    $("#liBeverley").toggleClass("d-none");

    $("#liRivonia1").addClass("d-none");
    $("#liMidrand1").addClass("d-none");
    $("#liErandPark").addClass("d-none");
    $("#liLonehill1").addClass("d-none");
    $("#liBryanston1").addClass("d-none");
    $("#liBryanston2").addClass("d-none");
    $("#liAscotmanor").addClass("d-none");
    $("#liMulbarton").addClass("d-none");
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    // Cancel the default action
    e.preventDefault();
});

$('a.someclass').click(function (e) {
    // Special stuff to do when this link is clicked...
    $("#liRivonia1").toggleClass("d-none");
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    // Cancel the default action
    e.preventDefault();
});


$('a.someclass2').click(function (e) {
    // Special stuff to do when this link is clicked...
    $("#liMidrand1").toggleClass("d-none");
    $("#liErandPark").toggleClass("d-none");
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    // Cancel the default action
    e.preventDefault();
});

$('a.someclass4').click(function (e) {
    // Special stuff to do when this link is clicked...
    $("#liLonehill1").toggleClass("d-none");
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    // Cancel the default action
    e.preventDefault();
});

$('a.someclass5').click(function (e) {
    // Special stuff to do when this link is clicked...
    $("#liBryanston1").toggleClass("d-none");
    $("#liBryanston2").toggleClass("d-none");
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    // Cancel the default action
    e.preventDefault();
});


$('a.someclass6').click(function (e) {
    // Special stuff to do when this link is clicked...
    $("#liAscotmanor").toggleClass("d-none");
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    // Cancel the default action
    e.preventDefault();
});

$('a.BeverleyClass').click(function (e) {
    // Special stuff to do when this link is clicked...
    $("#liMulbarton").toggleClass("d-none");
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    // Cancel the default action
    e.preventDefault();
});


$('a.Botclass').click(function (e) {
    // Special stuff to do when this link is clicked...
    $("#liGaborone").toggleClass("d-none");
    $("#liGaborone1").addClass("d-none");
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    // Cancel the default action
    e.preventDefault();
});

$('a.someclass3').click(function (e) {
    // Special stuff to do when this link is clicked...
    $("#liGaborone1").toggleClass("d-none");
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    // Cancel the default action
    e.preventDefault();
});


function init() {
    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng({ lat: -26.0414877, lng: 28.0731298 }),
        styles: [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-100"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 65
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": "50"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-100"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "30"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "40"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#ffff00"
                    },
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -97
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -100
                    }
                ]
            }
        ]
    };

    var mapElement = document.getElementById('map');


    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng({ lat: -26.0414877, lng: 28.0731298 }),
        map: map,
        title: 'RIC Development',
        url: "https://goo.gl/maps/QSCqJNtAcnB9j8gq6"
    });

    google.maps.event.addListener(marker,
        'click',
        function () {
            window.location.href = this.url;
        });

    google.maps.event.addDomListener(window, 'resize', init);
    google.maps.event.addDomListener(window, 'load', init);
}