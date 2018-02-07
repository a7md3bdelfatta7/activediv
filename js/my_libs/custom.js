setTimeout(function () {
    $("#container").hide();
    $("body").css("overflow-y", "scroll");
    $(document).ready(function () {
        var app = document.getElementById('siteIntro');
        var typewriter = new Typewriter(app, {
            loop: false, typingSpeed: 50, deleteSpeed: 25
        });
        
        if(typewriter.typeString('Do You Need Website?')
            .pauseFor(2000)
            .deleteChars(8)
            .typeString('Mobile App?')
            .pauseFor(2000)
            .deleteAll()
            .typeString('Here We Are ActiveDev')
            .start()){
        
                setTimeout(function () {
                    $("#siteIntro .typewriter-cursor").hide();
                    var app = document.getElementById('siteDescription');
                    var typewriter = new Typewriter(app, {
                        loop: false, typingSpeed: 60,
                    });
                    typewriter.typeString('We Presents Creative Web & mobile Solutions.')
                        .pauseFor(2500)
                        .start();
                    setTimeout(function () {
                        $(".typewriter-cursor").hide();
                    }, 2500);
                }, 8900);
                
            }
    });
}, 3000);