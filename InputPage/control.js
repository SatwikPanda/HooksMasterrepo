const user = document.querySelector( ".user" );
const menu = document.querySelector( ".menu" );

user.addEventListener( "click", function () {
    if ( menu.style.display === "block" ) {
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
} );
