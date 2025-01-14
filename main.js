"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee col-lg-6">';
    html += '<h3>' + coffee.name +'</h3>';
    html += '<span>' + coffee.roast + '</span>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    coffees.forEach(function(coffee){
        html += renderCoffee(coffee);
    }) ;
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}
];

var tbody = document.getElementById('coffees');
// var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');


tbody.innerHTML = renderCoffees(coffees);
// console.log(tbody);

// submitButton.addEventListener('click', updateCoffees);


// ------------------our code----------------------//




var filterInput = document.getElementById("roast-selection");

filterInput.addEventListener('change', updateCoffees);


var searchFilter = document.getElementById("filterInput");

searchFilter.addEventListener('keyup',coffeeSearch);




var textSearch = document.querySelector('#filterInput');

function coffeeSearch(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var coffeeSearch = textSearch.value.toUpperCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase().includes(coffeeSearch)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

var coffeeAdd = document.querySelector('#addCoffee');
var roastAdd = document.querySelector('#roastNew');
var userSubmit = document.querySelector('#submitNew');

function addToCoffees(e) {
    e.preventDefault();
    var newCoffee = {};
    newCoffee.id = coffees.length+1;
    newCoffee.name = coffeeAdd.value;
    newCoffee.roast = roastAdd.value;
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees)
}

userSubmit.addEventListener('click', addToCoffees);

var invis = document.getElementById("invis");

invis.addEventListener('click', function(){
    invis.style.display = "none";
    }
);