
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
    nextIfYes:'Emmenthaler',
    nextIfNo:'Leerdammer',
    cheesetype:null,
},
{
    vraag:"Is de kaas hard als steen?",
    nextIfYes:'Parmigiano Reqqiano',
    nextIfNo:'Goudse kaas',
    cheesetype:null,
},
{
    vraag:"Heeft de kaas een korst?",
    nextIfYes:'Bleu de Rochbaron',
    nextIfNo:'Foume dAmbert',
    cheesetype:null,
},
{
    vraag:"Heeft de kaas een korst?",
    nextIfYes:null,
    nextIfNo:null,
    cheesetype:null,
}
]

var vraag = document.getElementById("vraag");
vraag.innerHTML = (vragen[0]['vraag']);
var neeKnop=document.getElementById('nee');
var jaKnop=document.getElementById('ja');


function answerQuestion(questionNo, answer){
    if(vragen[cheesetype=null]){
        if(answer==true){
            vraag.innerHTML = vragen[vragen[questionNo]['nextIfYes']]['vraag']
            jaKnop.setAttribute('onclick','answerQuestion('+ vragen[questionNo]['nextIfYes'] +', true)')
            neeKnop.setAttribute('onclick','answerQuestion('+ vragen[questionNo]['nextIfYes'] + ', false)')
        }else{
            vraag.innerHTML = vragen[vragen[questionNo]['nextIfNo']]['vraag']
            jaKnop.setAttribute('onclick','answerQuestion('+ vragen[questionNo]['nextIfNo'] + ', true)')
            neeKnop.setAttribute('onclick','answerQuestion(' + vragen[questionNo]['nextIfNo'] +', false)')
        }
    }else if(vragen[cheesetype!=null]){
        document.getElementById("antwoord").innerHTML = "U bent waarschijnlijk op zoek naar" + vragen[vragen[questionNo][cheesetype]]
        
    }
    
    // if(answer==true){
    //     vraag.innerHTML = vragen[vragen[questionNo]['nextIfYes']]['vraag']
    //     jaKnop.setAttribute('onclick','answerQuestion('+ vragen[questionNo]['nextIfYes'] +', true)')
    //     neeKnop.setAttribute('onclick','answerQuestion('+ vragen[questionNo]['nextIfYes'] + ', false)')
    // }else{
    //     vraag.innerHTML = vragen[vragen[questionNo]['nextIfNo']]['vraag']
    //     jaKnop.setAttribute('onclick','answerQuestion('+ vragen[questionNo]['nextIfNo'] + ', true)')
    //     neeKnop.setAttribute('onclick','answerQuestion(' + vragen[questionNo]['nextIfNo'] +', false)')
    // }
}









