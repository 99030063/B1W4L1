
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
    nextIfYes:'7',
    nextIfNo:'8',
    cheesetype:null,
},
{
    vraag:"Is de kaas hard als steen?",
    nextIfYes:'9',
    nextIfNo:'10',
    cheesetype:null,
},
{
    vraag:"Heeft de kaas een korst?",
    nextIfYes:'11',
    nextIfNo:'12',
    cheesetype:null,
},
{
    vraag:"Heeft de kaas een korst?",
    nextIfYes:'13',
    nextIfNo:'14',
    cheesetype:null,
},
{
    vraag:null,
    nextIfYes:null,
    nextIfNo:null,
    cheesetype:'Emmenthaler'
},
{
    vraag:null,
    nextIfYes:null,
    nextIfNo:null,
    cheesetype:'Leerdammer'
},
{
    vraag:null,
    nextIfYes:null,
    nextIfNo:null,
    cheesetype:'Parmigianio Reggiano'
},
{
    vraag:null,
    nextIfYes:null,
    nextIfNo:null,
    cheesetype:'Goudse kaas'
},
{
    vraag:null,
    nextIfYes:null,
    nextIfNo:null,
    cheesetype:'Bleu de Rochbaron'
},
{
    vraag:null,
    nextIfYes:null,
    nextIfNo:null,
    cheesetype:"Foume d'Ambert"
},
{
    vraag:null,
    nextIfYes:null,
    nextIfNo:null,
    cheesetype:'Camembert'
},
{
    vraag:null,
    nextIfYes:null,
    nextIfNo:null,
    cheesetype:'Mozzarella'
},
]

var vraag = document.getElementById("vraag");
vraag.innerHTML = (vragen[0]['vraag']);
var neeKnop=document.getElementById('nee');
var jaKnop=document.getElementById('ja');


function answerQuestion(questionNo, answer){
    if(vragen[questionNo]['cheesetype']==null){
        if(answer==true){
            vraag.innerHTML = vragen[vragen[questionNo]['nextIfYes']]['vraag']
            jaKnop.setAttribute('onclick','answerQuestion('+ vragen[questionNo]['nextIfYes'] +', true)')
            neeKnop.setAttribute('onclick','answerQuestion('+ vragen[questionNo]['nextIfYes'] + ', false)')
        }else{
            vraag.innerHTML = vragen[vragen[questionNo]['nextIfNo']]['vraag']
            jaKnop.setAttribute('onclick','answerQuestion('+ vragen[questionNo]['nextIfNo'] + ', true)')
            neeKnop.setAttribute('onclick','answerQuestion(' + vragen[questionNo]['nextIfNo'] +', false)')
        }
    }else if(vragen[questionNo]['cheesetype']!=null){
        console.log(questionNo)
        document.getElementById("antwoord").innerHTML = "U bent waarschijnlijk op zoek naar " + vragen[questionNo]['cheesetype']
        
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




// = is wordt en == is is







