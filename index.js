//// Image Slides
var imageTally = 1;
showSlides(imageTally);

function currentSlide( a )
{
    showSlides(imageTally = a);
}

function plusSlides( a ) 
{
    showSlides(imageTally = imageTally + a);
}

function showSlides( a ) 
{
    var b = 0;

    var images = document.getElementsByClassName("mySlides");

    var progress_dots = document.getElementsByClassName("dot");

    if (a < 1) 
    {
        imageTally = images.length
    }
    if (a > images.length)
    {
        imageTally = 1
    }
    for (b = 0; b < images.length; ++b) 
    {
        images[b].style.display = "none";
    }
    for (b = 0; b < progress_dots.length; b++) 
    {
        progress_dots[b].className = progress_dots[b].className.replace(" active", "");
    }
    images[imageTally-1].style.display = "block";
    progress_dots[imageTally-1].className += " active";
} 

