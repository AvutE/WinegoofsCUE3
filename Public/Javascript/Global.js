// wine List array for finning in info box
var wineListData = [];

// DOM ready ===============================================
$(document).ready(function() {

    // Populate winetable  on initial page load
    populateTable();

    // Display more info about wine on click
    $("#wine-container").on('click', '.wine-display-container',function(){
        $(this).find('.wine-display-more-info-click').toggleClass('wine-info-slide-from-side');
    });

});

// FUNCTIONS ================================================

// Fill Table with data
function populateTable(){

    var WineBoxes = '';

    // jquery Ajax call for json
    // Not sure if '/wine/wine' is right change if needed
    $.getJSON( '/Wine/Wines', function(data){

        // stick our wine data array into a winelist variable in the global object
        wineListData = data;

        // For each Loop here
        $.each(data, function(){
            WineBoxes += '<div class="wine-display-container container position-relative d-inline-flex m-3 p-0 shadow bg-light rounded"';
            WineBoxes += 'style="height:400px!important; overflow:hidden; flex:1 1 400px; background:url(\'/Images/'+ this.artNum +'.jpg\') center no-repeat; background-size:auto 80%;">';
            WineBoxes +=    '<div class=" container d-flex flex-column justify-content-between">';
            WineBoxes +=        '<div class="container p-2 pb-4">' + this.name + '</div>';
            WineBoxes +=        '<div class="container p-2 pt-4 text-right">' + this.price + ' Kr</div>';
            WineBoxes +=    '</div>';
            WineBoxes +=    '<div class="wine-display-more-info container d-block position-absolute align-self-end p-2" style="margin-bottom:-50px">Art.Nr: ' + this.artNum + '</div>';
            WineBoxes +=    '<div class="wine-display-more-info-click container d-block position-absolute p-2 bg-primary text-light rounded"style="min-width:150px;width:30%;right:0;margin-top:50px;margin-right:-200px;">';
            WineBoxes +=        '<b>Land:</b><br>' + this.origin;
            WineBoxes +=        '<br><b>Region:</b><br>' + this.region;
            WineBoxes +=        '<br><b>Druvor:</b><br>' + this.grape.join(", ");
            WineBoxes +=    '</div>';
            WineBoxes += '</div>';
        });
        // Insert into existing html table
        $('#wine-container').append(WineBoxes);
    });
};

