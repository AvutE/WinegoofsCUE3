// wine List array for finning in info box
var wineListData = [];

// DOM ready ===============================================
$(document).ready(function() {

    // Populate winetable  on initial page load
    populateTable();

    // Winename link click (not done yet, will whow wineinfo)
});

// FUNCTIONS ================================================

// Fill Table with data
function populateTable(){

    var WineBoxes = '';

    // jquery Ajax call for json
    // Not sure if '/wine/wine' is right change if needed
    $.getJSON( '/Wine/Wines', function(data){

        // stick our wine data array into a winelist variable in the global object
        wineListData = data

        // For each Loop here
        $.each(data, function(){
            WineBoxes += '<div class="container flex-column justify-content-between d-inline-flex w-25 m-3 p-0 shadow bg-white rounded" style="height:300px!important;">'
            WineBoxes += '<div class="container p-2 pb-4">' + this.name + '</div>'
            WineBoxes += '<div class="container p-2 pt-4 text-right">' + this.price + ' Kr</div>'
            WineBoxes += '</div>'
        });
        // Insert into existing html table
        $('#wine-container').append(WineBoxes);
    });
};