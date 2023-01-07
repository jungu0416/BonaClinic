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

    var Y_point = 37.5225;        // Y 좌표
    var X_point = 127.0279;        // X 좌표
    var zoomLevel = 18;                // 지도의 확대 레벨 : 숫자가 클수록 확대정도가 큼
    var markerTitle = "보나성형외과";        // 현재 위치 마커에 마우스를 오버을때 나타나는 정보
    var markerMaxWidth = 300;                // 마커를 클릭했을때 나타나는 말풍선의 최대 크기

    // 말풍선 내용
    var contentString = '보나성형외과';

    var myLatlng = new google.maps.LatLng(Y_point, X_point);
    var mapOptions = {
        zoom: zoomLevel,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map_ma'), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: markerTitle
    });
    var infowindow = new google.maps.InfoWindow(
        {
            content: contentString,
            maxWizzzdth: markerMaxWidth
        }
    );
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
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


