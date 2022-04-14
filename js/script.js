$(document).ready(function(){

    $('.nav-link').on("click", function(){

        $('.nav-link').removeClass('active');

        $(this).addClass('active');
    });

    $('.sort-button').on("click", function() {

        if(this.id == 'everything') {
            
            $('.sort-button').removeClass('active');
            $(this).addClass('active');

            $('.sort-container').addClass('active');
        } else {
            var sort = this.id + "-container";

            $('.sort-button').removeClass('active');
            $(this).addClass('active');
    
            $('.sort-container').removeClass('active');
            $('#' + sort).addClass('active');
        }

    });

    $('#proposal').on("click", function() {

        var element = document.getElementById('proposal-container');
        var headerOffset = 80;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

    });

    $('#midterm').on("click", function() {

        var element = document.getElementById('midterm-container');
        var headerOffset = 80;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

    });

    $('#final').on("click", function() {

        var element = document.getElementById('final-container');
        var headerOffset = 80;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

    });

});
