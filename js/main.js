
const qna = document.getElementById('qna');
const u_name = document.querySelector('input[type=text]');
const wrap = document.getElementById('wrap');
const tabletMQL = window.matchMedia("all and (min-width: 768px)");
const pcMQL = window.matchMedia("all and (min-width: 1024px)");
const ENDPOINT = 10;
let qIdx = -1;
let score = 0;
let select = [];
let number=0; // 1.극단형, 2.정석형, 3.습관형, 4.계량형 
let second=0; // 1.채식형, 2. 자율배식형, 3.

function copy() {
    var tmp = document.createElement('textarea');
    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
}

function calcScore() {//정석형
    let point = 0;
    let result=0;
    let first =0;
    let second =0;
    let third =0;
    let fourth=0;
    let temp;
    for (let i = 0; i < 6; i++) {
        temp = qnaList[i].a[select[i]].score;
        result += temp;
        console.log(result);
    }
    first=parseInt(result/1000)
    second=parseInt(result/100)-parseInt(first*10);
    third=parseInt(result/10)-parseInt(first*100)-parseInt(second*10);
    fourth=result-parseInt(first*1000)-parseInt(second*100)-parseInt(third*10);
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(fourth);    
    /*if(first>=second){ // 1~6번 필터링
        if(first>=third){
            if(first>=fourth){
                point=1;
            }
            else
            point=4;
        }
        else{
            if(third>=fourth){
                point=3;
            }
            else
            point=4;
        }
    }
    else{
        if(second>=third){
            if(second>=fourth){
                point=2;
            }
            else
            point=4;
        }
        else{
            if(third>=fourth){
                point=3;
            }
            else
            point=4;
        }
    }*/
    let max=Math.max(first,second,third, fourth);
    console.log(max);
    if(max==first){
        point=1;
    }
    if(max==second){
        point=2;
    }
    if(max==third){
        point=3;
    }
    if(max==fourth){
        point=4;
    }
    return point;
}

function calcScoreafter6(point) {//6번 이후로 계산하는 함수 및 결론 sort
    let pointafter = 0;
    let temp=0;
    if(point==1){
        temp= qnaList[6].a[select[6]].score5;       
    }
    if(point==2){
        temp= qnaList[7].a[select[7]].score5;       
    }
    if(point==3){
        temp= qnaList[8].a[select[8]].score5;    
    }
    if(point==4){
        temp= qnaList[9].a[select[9]].score5;  
    }
    console.log(temp);
    for (let i = 6; i < ENDPOINT; i++) 
    {
        
        if(point==1&&temp==1)
        {
            pointafter=1;
            break;            
        }
        if(point==1&&temp==2)
        {
            pointafter=2;
            break;                
        }
        if(point==1&&temp==3)
        {
            pointafter=3;
            break;                
        }
        if(point==1&&temp==4)
        {
            pointafter=4;
            break;                
        }
        if(point==2&&temp==5)
        {
            pointafter=5;
            break;            
        }
        if(point==2&&temp==6)
        {
            pointafter=6;
            break;                
        }
        if(point==2&&temp==7)
        {
            pointafter=7;
            break;                
        }
        if(point==2&&temp==8)
        {
            pointafter=8;
            break;                
        }
        if(point==3&&temp==9)
        {
            pointafter=9;
            break;            
        }
        if(point==3&&temp==10)
        {
            pointafter=10;
            break;                
        }
        if(point==3&&temp==11)
        {
            pointafter=11;
            break;                
        }
        if(point==3&&temp==12)
        {
            pointafter=12;
            break;                
        }
        if(point==4&&temp==13)
        {
            pointafter=13;
            break;            
        }
        if(point==4&&temp==14)
        {
            pointafter=14;
            break;                
        }
        if(point==4&&temp==15)
        {
            pointafter=15;
            break;                
        }
        if(point==4&&temp==16)
            pointafter=16;
            break;    
    }
    
    console.log(temp);
    console.log(pointafter);
    return pointafter;
}

function goResult() {
    if (pcMQL.matches) {
        console.log('PC'); //PC에서의 결과 화면 
        wrap.style.marginTop = '150px'; // wrap 위  margin 간격을 150px로 설정
    } else if (tabletMQL.matches) { 
        console.log('tablet'); //Tablet에서의 결과 화면 
        wrap.style.marginTop = '115px'; // wrap 위  margin 간격을 115px로 설정
    }
    const result = document.getElementById('result'); // result 구성요소 설정
    let point = calcScore(); // calcscore함수를 point에 입력
    console.log(point);
    let grade = calcScoreafter6(point)-1; // calcscore함수를 통해 구한 결과 값을 calcScore에 입력해서 grade에 저장

    let pTitle = document.querySelector('.title'); // point 점수를 말해주는 부분이지만 여기서는 필요 없음
    pTitle.innerHTML = u_name.value + ' 님의 식단은...';
    
    const picture = document.querySelector('.art'); 
    console.log(grade);
    picture.innerHTML="<img src='"+infoList[grade].image+"' width='360px', height='640px'>";
    /*const celeb = document.querySelector('.titlebelow'); // result css 클래스 호출해서 celev 변수에 저장
    celeb.innerHTML = infoList[grade].name; //  
    let subtitle = document.querySelector('.subtitle');
    subtitle.innerHTML=infoList[grade].subname;
    const line1 = document.querySelector('.line1');
    line1.innerHTML= infoList[grade].line1; // head1 호출
    const line2 = document.querySelector('.line2');
    line2.innerHTML= infoList[grade].line2; // head1 호출
    const line3 = document.querySelector('.line3');
    line3.innerHTML= infoList[grade].line3; // head1 호출
    const desc = document.querySelector('.res'); //결과 설명문
    desc.innerHTML = infoList[grade].desc; //data.*/

    //art 파트도 추가해야함 

    setTimeout(function() {
        result.style.display = 'block';
        result.style.animation = 
            'going-up 0.5s, '+
            'fade-in 0.5s forwards';
    }, 600);
    
}


function end() { // 로딩 함수를 호출하고 result 화면으로 가는 goresult 함수를 호출
    qna.style.animation =''; 
    const interval = setInterval(function() {
        qna.style.opacity -= 0.1;
        qna.style.transform = 'translateY(-1px)'; 
    }, 50);
    setTimeout(function() {
        clearTimeout(interval);
    }, 500);
    setTimeout(function() {
        qna.style.display = 'none';  // 화면 정리
    }, 500);
    
    setTimeout(function() {
        const calc = document.getElementById('calc');
        calc.style.display = 'block';
        calc.style.animation =
            'going-up 0.5s forwards, '+
            'fade-in 0.5s forwards';
    }, 700);
    setTimeout(function() {
        calc.style.animation ='';
        calc.style.animation = 
            'going-left 0.4s forwards, '+
            'fade-out 0.4s forwards';
        setTimeout(function() {
            calc.style.display = 'none';
            goResult();
        }, 400);
    }, 9000);
}

function addAnswer(answerTxt, idx) { // Addanswer 함수
    let answer = document.createElement('button'); // ansewer하는 변수에 대답을 하는 파트에 버튼을 생성
    const a = document.querySelector('.answer'); // css에서 100%로 설정한 .ansewer를 a 변수에 설정
    answer.className += 'a box'; //  classname+ 'a box' 구조체로 묶음
    answer.innerHTML = answerTxt; // 
    answer.addEventListener('click', function() { // anser 버튼 클릭 이벤트 설정
        let parent = answer.parentNode; //parent 변수= answer.parentNode
        let children = parent.childNodes; // Childe 변수= answer.childNode;
        for (let i = 0; i < children.length; i++) { // 
            children[i].disabled = true;
        }
        parent.classList.add('fade-out-5-4');
        setTimeout(function() { //click function이 일어나면
            select[qIdx] = idx; //질문지의 번호와 대답의 번호를 일치
            a.innerHTML = ''; //a css에 대답 txt를 입력
            parent.classList.remove('fade-out-5-4'); // 사라지는 효과
            goNext(); //gon next 함수 호출
        }, 800);
    });

    setTimeout(function() {
        answer.style.animation = 
            'going-down 0.25s forwards, fade-in 0.25s forwards';
    }, 50); //50 delay
    a.appendChild(answer); // 대답한 답을 a 부모 노드의 자식 노드로 추가
}


function goNext() {
    if (qIdx++ === qnaList.length - 1) { //11반 문항 후의 go Next는 종결
        end();
        return;
    }
    
    let status = document.querySelector('.status'); //main.css에서 .status 클래스 홀출
    status.style.width = (ENDPOINT * (qIdx+1))+'%'; // status의 길이에 퍼센티지를 부여
    
    const qNum = qnaList[qIdx]; //qnum을 data.js에 있는 질문지를 저장
    const q = document.querySelector('.q'); //main.css에서 .q 클래스를 호출
    q.innerHTML = qNum.q; //q.innerhtml에 qnum에 main.css에서 저장한 q 스타일로 저장
    qna.style.animation = 
        'fade-in 0.3s ease-in-out 1s forwards, '+
        'going-down 0.3s ease-in-out 0.4s forwards';
        
    setTimeout(function() {
        const endIdx = qNum.a.length-1; //idx의 개수를 설정하는 endidx
        for (let i in qNum.a) {
            addAnswer(qNum.a[i].answer, i); //질문지에 설정된 answer의 갯수만큼 문항지를 추가
        }
        qna.style.opacity = 1; // qna. style opacity 를 1로 설정
    }, 700);
}

function begin() { //begin 함수
    const welcome = document.getElementById('welcome');
    setTimeout(function() {
        welcome.style.animation = 
        'going-up 0.4s ease-in-out forwards, '+
        'fade-out 0.4s ease-in-out forwards';
    }, 500);
    setTimeout(function() {
        welcome.style.display = 'none'; // 첫 화면 none 화면
        qna.style.display = 'block'; // 블록 형태로 디스플레이 세팅을 설정
        if (pcMQL.matches) {
            console.log('PC'); //PC 화면에서의 화면 비율
            wrap.style.marginTop = '50px';
        } else if (tabletMQL.matches) {
            console.log('tablet');  //Tablet 화면에서의 화면 비율
            wrap.style.marginTop = '30px'; // wrap style을 30px 로 설정
        } 
        goNext();
    }, 1000);
}

function load() {
    const msg = document.querySelector('.check-name'); // 첫 화면 .checkname 클래스로 체크
    const start_btn = document.querySelector('.start'); // .start css 화면 세팅

    u_name.addEventListener('blur', function() {
        if (u_name.value.length < 1) { //이름을 value 변수에 저장
            msg.innerHTML = '이름을 입력하고 시작해 주세요.';
        } else {
            msg.innerHTML = '';
        }
    });
    
    start_btn.addEventListener('click', function() { // 시작을 클릭했을 때의 이벤트 설정
        if (u_name.value.length < 1) { // sting의 입력길이가 1 이하일 경우 에러 메시지 송출
            msg.innerHTML = '이름을 입력하고 시작해 주세요.';
        } else {
            msg.innerHTML = ''; // 정상적으로 결과를 송출 입력문 안의 결과를 innerhtml 가상 변수에 저장
            start_btn.disabled = true; // 첫 시작 화면에서는 링크 복사를 disable
            begin(); //begin 함수 호출
        }
    });
    
}

load();
