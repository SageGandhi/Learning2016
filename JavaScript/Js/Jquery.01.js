/**Getting Started With Jquery:Start*/
window.onload=function(){console.log('Window Loaded.The Code Doesn\'t Run Until All Images Are Finished Downloading,Including Banner Ads.');}
$(document).ready(function(){
    console.log('Jquery Loaded Sucessfully');/**UnObstrusive Way Of Declaration*/
    $('#Div01 #Span01 a').click(function(event){console.log($(this).text());event.preventDefault();});/**Event Handling*/
    $('#Div01 #Span01 a').hover(function(event){$(this).removeClass('Normal').addClass('Bold');});/**Event Handling+Css*/
    $('#Div01 #Span01 a').mouseout(function(event){$(this).removeClass('Bold').addClass('Normal');});/**Event Handling+Css*/
    $('#Span02ButtonHide').click(function(event){$('#Div02').hide('slow');});/**Event Handling+Ux(User Experience)*/ 
    $('#Span02ButtonShow').click(function(event){$('#Div02').show('slow');});/**Event Handling+Ux(User Experience)*/ 
    $.get('/Data/01.json',function(data){console.log("/Data/01.json",data);});/**Ajax Get Json Data From File*/
});
/**Getting Started With Jquery:End*/