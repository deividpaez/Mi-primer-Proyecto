$(document).ready(function () {

    //slider


    if(window.location.href.indexOf('index') > -1){
        $('.slider').bxSlider({
            mode: 'fade',
            
        });

    }
    

    
    //Post
    if(window.location.href.indexOf('index') > -1){
        var post = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galleyof type and scrambled it to make a type specimen boo"
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado  el ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galleyof type and scrambled it to make a type specimen boo"
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado  el ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galleyof type and scrambled it to make a type specimen boo"
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado  el ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galleyof type and scrambled it to make a type specimen boo"
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado  el ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galleyof type and scrambled it to make a type specimen boo"
            },
        ];
        post.forEach((item, i) => {
            var Post = `
           <article id class="Post">
           <h2>${item.title}</h2>
           <span class="date">${item.date}</span>
           <p>
              ${item.content}
           </p>
           <a href="#" class="button-more">Leer mas</a>
       </article>
    
           `;
            $("#posts").append(Post)
        })


    }
    


    

    var imagen_4 = $(".bx-pager-link")
    {/* <a href="" data-slide-index="3" class="bx-pager-link">4</a> */ }
    tema = $("#tema");
    verde = $("#verde");
    rojo = $("#rojo");
    azul = $("#azul");
    verde.click(function () {

        tema.attr("href", "css/verde.css")
    })
    rojo.click(function () {
        tema.attr("href", "css/rojo.css")

    })
    azul.click(function () {
        tema.attr("href", "css/azul.css")
        imagen_4.attr("href", 'data-slide-index="3"')
    })

    $(".up").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);

        return false;
    })
    //Login Falso
    $("#login").submit(function () {
        var form_nombre = $("#from_nombre").val();


        localStorage.setItem("form_name", form_nombre)
    });



    var forname = localStorage.getItem("form_name");
    
    if (forname != null && forname != 'undefined') {
        var about = $("#about p")
        about.html("<br><strong>" + "Bienvenido " + forname + "</strong>");
        about.append("<a href='#' id='logout'>Cerrar Sesion</a>")
        $("#login").hide();


        $("#logout").click(function () {

            localStorage.clear();
            location.reload();
        })




    } else {
        $("#login").show();
    }

    if(window.location.href.indexOf('about') > -1){
        $("#boox").accordion();

    }
     if(window.location.href.indexOf('reloj') > -1){
        
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss")
            $('#reloj').html(reloj);

        },1000)
       
     }
     if(window.location.href.indexOf('Contacto') > -1){
  
       
    $.validate({

           lang: 'es'
       });

     }
    
     
});