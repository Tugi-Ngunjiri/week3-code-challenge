//Load Dom first
document.addEventListener("DOMContentLoaded", ()=>{
    getFilms()
})

//Global variables
const allFilms = https;//github.com/Tugi-Ngunjiri/week3-code-challenge
const movielist = document.getElementById("movie-list")
const moviePoster =document.getElementById("img")
const h3 = document.querySelector(".card-title")
const p = document.querySelector(".card-text")
const l1 = document.getElementById("l1")
const l2 = document.getElementById("l2")
const l3 = document.getElementById("l3")
const btn = document.getElementById("btn")
const div1 = document.getElementById("div1")

//General Styling
div1.style = "height: 20rem;"
img.style="height: 65rem;"

//Get Movies
function getFilms() {
        data.films.forEach(films => {
            //Display Movie Menu
            let listItem1 = document.createElement('a')
            listItem1.classList="list-group-item list-group-item-action list-group-item-danger fs-2 fw-bold"
            listItem1.innerHTML = `${films.title}`
            movielist.appendChild(listItem1)

            //Display first movie on the menu when page loads
            fetch(allFilms)
            .then(res=>res.json())
            .then(data=>{
                moviePoster.src = data.films[0].poster
                h3.innerHTML = data.films[0].title
                p.innerHTML = data.films[0].description
                l1.innerHTML = "Runtime: " + data.films[0].runtime
                l2.innerHTML = "Showtime: " + data.films[0].showtime

                let availableTickets = data.films[0].capacity - data.films[0].tickets_sold
                l3.innerHTML = "Available Tickets: " + availableTickets
                btn.innerHTML = "Buy Ticket"

                btn.addEventListener("click", (e)=>{
                    if(availableTickets > 0) {
                        --availableTickets
                        l3.innerHTML = "Available Tickets: " + availableTickets
                        btn.innerHTML = "Buy Ticket"
                    }
                    else{
                        btn.innerHTML = "Sold Out"
                    }
                    
                })

            })

            //display movie details when a movie is selected from the menu
            listItem1.addEventListener("click", (e)=>{
                moviePoster.src = films.poster
                h3.innerHTML = films.title
                p.innerHTML = films.description
                l1.innerHTML = "Runtime: " + films.runtime
                l2.innerHTML = "Showtime: " + films.showtime

                let availableTickets = films.capacity - films.tickets_sold
                l3.innerHTML = "Available Tickets: " + availableTickets
                btn.innerHTML = "Buy Ticket"

                btn.addEventListener("click", (e)=>{
                    if(availableTickets > 0) {
                        --availableTickets
                        l3.innerHTML = "Available Tickets: " + availableTickets
                        btn.innerHTML = "Buy Ticket"
                    }
                    else{
                        btn.innerHTML = "Sold Out"
                        listItem1.classList.add("sold-out");
                        //l3.innerHTML = "Available Tickets: " + "Sold Out"
                        element.addEventListener("click", myFunction);

                        function myFunction() {
                          document.getElementById("demo").innerHTML = "Hello World";
                        }
                    }

                    
                })


            })

        });
    }
  fetch(allFilms).then(res=>res.json())
    .then(data=>{})
    menuApp = Backbone.View.extend({
        el: $('#header-status'),
        events: {
            'click .dd-menu li a': 'optionChange'
        },
        optionChange: function(e) {
            var selectedItemText = $(e.currentTarget).text();
            var selectedItemSrc = $(e.currentTarget).data("src"); 
            console.log($(e.currentTarget).data("src")); //Undefined
            $("#availability").text(selectedItemText);
            $("#availabilitySRC").attr("src").replace(selectedItemSrc); //Error
        }});
        element.addEventListener("click", myFunction);

        function myFunction() {
          document.getElementById("demo").innerHTML = "Hello World";
        }
        element.addEventListener("click", function() {
            document.getElementById("demo").innerHTML = "Hello World";
          });