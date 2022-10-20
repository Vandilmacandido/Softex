// Acesse pelo menos dois sites de sua preferência e os inspecione com o botão direito do mouse na página web.
//Com o código fonte aberto você deve: 
//Verificar no código algum elemento que utilize JavaScript; 
//Marcar alguns elementos do site; 
//Explicar como ele se comporta. Exemplo: entrar no site do Google, inspecionar o botão de pesquisa, verificar o código e explicar qual a finalidade do botão. 

//Site 1 
https://maisumtalvez.tumblr.com/
// o Java Script, foi utilizado para reprodução de vidieo nos posts


<script>
      $(document).ready(function(){
        // Target your .container, .wrapper, .post, etc.
        $(".videopost").fitVids();
      });
      
    // vine responsive http://codepen.io/chrisdrogaris/pen/KIBvJ
      
      //Use fitvids.js to make it responsive
    $('body').fitVids({
      customSelector: "iframe[src*='vine']"
    });

    //Keep track of of window resizing
    var h = $(window).height(), w = $(window).width();

    //Check when window is resizing
    $( window ).resize(function() {
      var window_growing = false;
      var nh = $(window).height(), nw = $(window).width();
      
      //Check if window is growing when resized
      if(nw > w){
        window_growing = true;
      }
      h = nh; w = nw; // update h and w;
      
      //If window grows then reload iframe
      if(window_growing){
        $( '.vine-embed' ).attr( 'src', function ( i, val ) { return val;});
      }

    });

    // for native tumblr video http://stackoverflow.com/questions/24084703/responsive-tumblr-videos-not-working
    $('.videopost').fitVids({ customSelector: "iframe[src*='tumblr.com'], iframe[src='about:blank']" });
</script>

// Site 2
https://www.letras.mus.br/

// Nesse caso o java script vooi utilizado para a buscar a lista de musica do saite.

<script type="text/javascript">
  if(window.document.cookie.match(new RegExp("lasub=([^;][A-Za-z0-9]{2,5})"))){document.body.classList.add("has-subscription");}</script>
