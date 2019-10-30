function checkPhoneNumber(){

    var getPhoneNumber= document.getElementById("phoneNumber").value;
    var Regex =  "^(06|07|01)[0-9]{8}$";

    if (getPhoneNumber.match(Regex)) {
        alert("true");
        return true;
    } else {
        alert("false");
        return false;
    }
}

var submit = document.getElementById("submit");
submit.addEventListener('click', function() {
    checkPhoneNumber();
});

