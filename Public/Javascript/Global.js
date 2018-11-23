// wine List array for finning in info box
var wineListData = [];

// DOM ready ===============================================
$(document).ready(function() {

    // Populate winetable  on initial page load
    populateTable();

    // Winename link click (not done yet, will whow wineinfo)

    // Side Navbar click functions
    $('.leftmenutrigger').on('click', function (e) {
    $('.side-nav').toggleClass("open");
    $('#wrapper').toggleClass("open");
    e.preventDefault();
    });
});

// FUNCTIONS ================================================

// Fill Table with data
function populateTable(){

    var tableContent = '';

    // jquery Ajax call for json
    // Not sure if '/wine/wine' is right change if needed
    $.getJSON( '/Wine/Wines', function(data){

        // stick our wine data array into a winelist variable in the global object
        wineListData = data

        // For each Loop here
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href = "#" class = "linkshowwine" rel ="' + this.name +'">'+ this.name +'</a></td>';
            tableContent += '<td>'+ this.price +'</td>';
            tableContent += '</tr>'

        });
        // Insert into existing html table
        $('#wineList').find('tbody')
        .append(tableContent);
    });
};