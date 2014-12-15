

function init() {

$('form').submit(function() {
  var name_field = $('#name').val();  
  var text = $('#message').val();
  var subject = $($('#dropdown-container option:selected')[0]).val();
  var email_ield = $('#email').val();
    
    
    //alphanumericsymbols@alphanumbericnumber.ext
    var regexp = /[A-Za-z0-9_]+@[A-Za-z0-9]+\.[a-z]{2,3}/
    

if(name_field === "") {
        alert('fill in name')
        return false;
}
    
regexp.test(email_field)){
    alert('invalid email format')
    return false;
    
if(name_field.length < 3) {
        alert('please put in full name');
        return false;
}
    if(text === "") {
        alert('message is empy!!!');
        return false;
}

    if(subject === "") {
        alert('Subject has not been selected');
        return false;
}

return true;
});

}

$(document).ready(init);