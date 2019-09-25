var vraag = document.getElementById("vraag");
vraag.innerHTML = (vragen[0]['vraag']);
var neeKnop=document.getElementById('nee');
var jaKnop=document.getElementById('ja');

function answerQuestion(questionNo, answer){
    if(answer==true){
        if(vragen[vragen[questionNo]['nextIfYes']]['cheesetype']==null){
            vraag.innerHTML = vragen[vragen[questionNo]['nextIfYes']]['vraag']
            jaKnop.setAttribute('onclick','answerQuestion('+ vragen[questionNo]['nextIfYes'] +', true)')
            neeKnop.setAttribute('onclick','answerQuestion('+ vragen[questionNo]['nextIfYes'] + ', false)')
        }else{
            document.getElementById("antwoord").innerHTML = "U bent waarschijnlijk op zoek naar " + vragen[vragen[questionNo]['nextIfYes']]['cheesetype']
        }
    }else{
        if(vragen[vragen[questionNo]['nextIfNo']]['cheesetype']==null){
            vraag.innerHTML = vragen[vragen[questionNo]['nextIfNo']]['vraag']
            jaKnop.setAttribute('onclick','answerQuestion('+ vragen[questionNo]['nextIfNo'] +', true)')
            neeKnop.setAttribute('onclick','answerQuestion('+ vragen[questionNo]['nextIfNo'] + ', false)')
        }else{
            document.getElementById("antwoord").innerHTML = "U bent waarschijnlijk op zoek naar " + vragen[vragen[questionNo]['nextIfNo']]['cheesetype']
        }
    }
}