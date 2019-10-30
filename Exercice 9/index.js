function checkPalindrome() {
    var content = document.getElementById('content').value.normalize("NFD").replace(/[^\w]/gi, '').toLowerCase();
    var palindrome = content.split('').reverse().join('');

    var regex = new RegExp(/[^A-Za-z0-9]/g);

    var palindrome = content.toLowerCase().replace(regex,'');

    for(var i = 0; i < content.length/2; i++){

        if (content === palindrome) {
            if (palindrome[i] !== palindrome[content.length/2 - 1 - i]) {
                return false;
            }

            else{
                return true;
            }
        }
        else
            return false
    }
}