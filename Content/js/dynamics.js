include('~/Content/js/forms.js');
function include(url){ 
  document.write('<script src="'+ url + '" type="text/javascript" ></script>'); 
}
	function showContextMenu(e)
{
    e.preventDefault();
    
   $('#context').html('<a href="http://www.NexGenPhotography.com" target="_blank">Design by sunmbal siddiqui></br>2016© NexGenPhotography.com');
    $('#context').css('left', e.pageX + 'px');
    $('#context').css('top', e.pageY + 'px');
    $('#context').css('display', 'block');
    $('#context').css('opacity', '1');
    
    $(document).bind('click', hideContextMenu);
}

// =================== 
// ! Hide context menu   
// ===================
$(document).bind('contextmenu', showContextMenu);
function hideContextMenu(e)
{
    $('#context').css('display', 'none');
    $('#context').html('');
    $(document).unbind('click', hideContextMenu);
}

	var numImg=0, slideshow, imgActive, largeur;
		
	$(document).ready(function () {
	    $(document).bind('contextmenu', showContextMenu);
	    var windowHeight;

	    $(window).resize(function () {
	        gestionResize();
	    });
	});
		
