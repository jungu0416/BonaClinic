/*bona javascript
*
*
*
*/

window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });

    cssChange();
});

let cssChange = () => {

    if(!isMobile()){
        let cssStyle = document.getElementsByClassName('bona-img-width');
        for(let i=0; i< cssStyle.length; i++){
            cssStyle[i].style.width="60%";
        }
    }

}

const isMobile = () => {
    const user = navigator.userAgent;
    let isCheck = false;

    if ( user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1 ) {
        isCheck = true;
    }

    return isCheck;
}



let submit = () => {
    
    if(validate()) {
        alert('정상처리 되었습니다. \n빠른 시일내에 답변 드리겠습니다.');
        location.href = "bona_main.html";
    }
}

let validate = () => {
    let name = document.getElementById('name');
    let subject = document.getElementById('subject');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    if(name.value == ''){
        alert('닉네임을 입력해주세요');
        return false;
    }
    if(subject.value == ''){
        alert('제목을 입력해주세요');
        return false;
    }
    if(email.value == ''){
        alert('이메일 입력해주세요');
        return false;
    }
    if(message.value == ''){
        alert('내용 입력해주세요');
        return false;
    }

    return true;
}


