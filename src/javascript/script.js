$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    // box shadow no header
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        // "risquinho" do menu de localização
        let activeSectionIndex = 0;
   
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none')
        } else {
            header.css ('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();
        
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        $(navItems[activeSectionIndex]).addClass('active');
    });
})