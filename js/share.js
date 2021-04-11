const url = 'https://caloric-test.xyz/';
const title = '[심리테스트] 나한테 어울리는 연예인 식단 테스트 ';
const hash = '%2310_연예인 식단 테스트 %233다이어트 %23다이어트 테스트 ';

function fb() {
    window.open('https://www.facebook.com/sharer/sharer.php?u='
        + url + '&t=' + title + '' + hash,
        'facebooksharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    return false;
}
function tw() {
    let name = document.querySelector('.result').innerHTML;
    switch (name) {
        case '표범': 
        case '유니콘':
            name += '이에요! ';
            break;
        default:
            name += '예요! ';
    }
    window.open('https://twitter.com/intent/tweet?text='
        + title + '%0A' + '저는 '+ name + '' + hash + '%0A' + url, 
        'twittersharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    return false;
}
function nv() {
    window.open('http://share.naver.com/web/shareView.nhn?url='
        + url + '&title=' + title, 
        'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    return false;
}
function band() {
    window.open('https://band.us/plugin/share?url='
        + url + '&title=' + title, 
        'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    return false;
}

function caloric() {
    window.open('https://www.caloric.xyz/');
    return false;
}
function abocado() {
    window.open('https://www.notion.so/987b29ff5e5d4df2a2e72b7df267a063');
    return false;

}