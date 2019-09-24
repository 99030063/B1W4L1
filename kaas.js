// array vraag0="Is de kaas Geel?"
// array vraag1="Zitten er gaten in?"
// array vraag2="Heeft de kaas blauwe schimmels"
// array vraag3="Is de kaas belachelijk duur?"
// array vraag4="Is de kaas hard als steen?"
// array vraag5="Heeft de kaas een korst?"
// array vraag6="Heeft de kaas een korst?"


//na alle objecten binnen array moeten komma
//array van vragen
var vragen = [{
    vraag:"Is de kaas Geel?",
    nextIfYes: '1',
    nextIfNo: '2',
    cheesetype: null
},
{
    vraag:"Zitten er gaten in?",
    nextIfYes: '3',
    nextIfNo: '4',
    cheesetype:null,
},
{
    vraag:"Heeft de kaas blauwe schimmels?",
    nextIfYes: '5',
    nextIfNo: '6',
    cheesetype:null,
},
{
    vraag:"Is de kaas belachelijk duur?",
    nextIfYes:null,
    nextIfNo:null,
    cheesetype:null,
},
{
    vraag:"Is de kaas hard als steen?",
    nextIfYes:null,
    nextIfNo:null,
    cheesetype:null,
},
{
    vraag:"Heeft de kaas een korst?",
    nextIfYes:null,
    nextIfNo:null,
    cheesetype:null,
},
{
    vraag:"Heeft de kaas een korst?",
    nextIfYes:null,
    nextIfNo:null,
    cheesetype:null,
}
]

var vraag = document.getElementById("vraag")
vraag.innerHTML = (vragen[0][vraag]);
var neeKnop=document.getElementById('nee');
var jaKnop=document.getElementById('ja');

function answerQuestion(questionNo, answer){
    if(answer==true){
        vraag.innerHTML = vragen[vragen[questionNo]['nextIfYes']]['vraag'];
        jaKnop.setAttribute('onclick',[answerQuestion(questionNo, true)]);
        neeKnop.setAttribute('onclick',[answerQuestion(questionNo, false)]);
    }else{
        vraag.innerHTML = vragen[vragen[questionNo]['nextIfNo']]['vraag'];
        jaKnop.setAttribute('onclick',[answerQuestion(questionNo, true)]);
        neeKnop.setAttribute('onclick',[answerQuestion(questionNo, false)]);
    }
}









