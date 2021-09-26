
//////////////// GLOBAL

var hints=3;
var bbltxtindex=0;
var fails=0
var cheatactive=true;
// var lvl=1;
var task_index=0;
TASKS=[
   {"text": [{"h2": "",
              "h3":"Diese Sicherheitslücke ist oft in Anwendungen zu finden, in denen keine Prepared Statements verwendet werden. Da wir dies aus Lernzwecken nicht verwenden, ist hier fast alles möglich! <br> In SQL-Insekten lernst du von Level zu Level wie Hacker diese Sicherheitslücke ausnutzen, dabei wären Vorkenntisse in SQL empfehlenswert.",
              "img": "img/bee.png"},
              {"h2": "",
              "h3":"In diesem Fall haben wir rechts ein Login-Formular, wie man es so von anderen Websiten kennt. <br> <br>  Unter dem Button 'Hintergrunddetails anzeigen', der bei 3 Fehlversuchen aktiviert wird, kannst du dir die live-erzeugte SQL-Query anschauen und den Programmcode der Anwendung.",
              "img": "img/bee.png"},
              {"h2": "",
              "h3":"Einen Tipp kannst du dann bei dem Button 'Tipp einblenden' anzeigen lassen. Aber Vorsicht: Dir stehen insgesamt nur 3 Tipps zur Verfügung! <br> <br> Allgemein versucht man durch geschickten Input in den Eingabefeldern eine Syntax-korrekte SQL-Query zu erzeugen, die die Aufgabe löst.",
              "img": "img/bee.png"},
              {"h2": "",
              "h3":"Hierbei ist es wichtig rumzuprobieren oder sich die Hindergrunddetails anzuschauen, um zu wissen, wie die Query aus den Werten der Eingabefelder erzeugt wird, die dann schließlich in der Datenbank ausgeführt wird. <br> <br> <br> <br>",
              "img": "img/bee.png"},
              {"h2": "",
              "h3":"Kleiner Hinweis im Voraus: In den ersten Levels wirst du geschickt Apostrophe und SQL-Kommentare '--' verwenden. <br> <br> <br> <br> <br>",
              "img": "img/bee.png"},
              {"h2": "Genug geredet, los gehts! <br> <br> <br> <br> <br> ",
              "h3":"",
              "img": "img/happybee.png"}],
    "challenge" : "Versuche als Erstes dich ganz normal als 'alexamusterfrau' mit einem Passwort einzuloggen, wie man es normalerweise kennt. Da du ihr Passwort nicht kennst, gib einfach irgendwas ein.",
    "validation"  : [{"validationquery": [""],
                      "validationerror":"",
                      "truecondition":"results.rows.length > 0  && queries[j].includes('users')",
                      "correctanswer":["true","true","true","true"],
                      "speakbblanswer":["Super! Du hast verstanden wie das Login-Formular funktioniert. <br> <br> <br> <br>","Super! Du hast verstanden wie das Login-Formular funktioniert.<br> <br> <br> <br>"],
                      "imganswer":["img/happybee.png","img/happybee.png"],
                      "whitelist": [""],
                      "blacklist": [""]}],
    "form":"login",
    "hints"    : ["hints deactivated"],
    "behindscene" : "",
    "lvl" : 1},
   {"text": [{"h2": "Ok, jetzt geht's aber wirklich los! <br> <br> <br> <br> <br>",
              "h3":"",
              "img": "img/happybee.png"}],
    "challenge" : "Versuche dich als 'alexamusterfrau' einzuloggen, ohne ihr Passwort zu kennen. Vergiss nicht, wie am Anfang erwähnt, Apostrophe und SQL-Kommentare geschickt zu nutzen und dir die Hintergrunddetails anzuschauen!",
    "validation"  : [{"validationquery": [""],
                      "validationerror":"",
                      "truecondition":"results.rows.length > 0 && queries[j].includes('users')",
                      "correctanswer":["true","false","error","error"],
                      "speakbblanswer":["Super! du hast die Herausforderung gemeistert! <br> <br> <br> <br>","Schade, das hat leider nicht geklappt. Versuche es erneut dich als 'alexamusterfrau' einzuloggen."],
                      "imganswer":["img/happybee.png","img/surprisebee.png"],
                      "whitelist": ["alexamusterfrau"],
                      "blacklist": ["maxmustermann"]}],
    "form":"login",
    "hints"    : ["Wie du es in den Hintergrunddetails siehst, ist vor der Eingabevariable 'uname' ein Apostroph zu finden. D.h. nachdem du den Benutzernamen in das Eingabefeld eingegeben hast brauchen wir noch ein Apostroph um den String zu beenden. Danach interessiert uns die restliche Query nicht, daher kommentieren wir sie aus."],
    "behindscene" : "",
    "lvl" : 1},
    {"text" : [{"h2": "Kommen wir zur nächsten Herausforderung <br> <br> <br> <br> <br>",
    "h3":"",
    "img": "img/bee.png"}],
   "challenge": "Versuche die Tabelle 'users' zu droppen. Im Hintergrund wird zwar eigentlich nur eine Query ausgeführt, aber wenn du eine Query mit ';' beendest kannst du eine weitere Query einschleußen. Lass dich übrigens nicht davon irritieren, wenn der Login fehlschlägt oder eine Fehlermeldung auftaucht.",
   "validation"  : [{"validationquery": ["SELECT * FROM users"],
                     "validationerror":"could not prepare statement (1 no such table: users)",
                     "truecondition":"results.rows.length > 0",
                     "correctanswer":["false","false","true","error"],
                     "speakbblanswer":["Super! du hast die Herausforderung gemeistert! <br> <br> <br> <br>","Schade, das hat leider nicht geklappt. Versuche erneut die Tabelle 'users' zu droppen."],
                     "imganswer":["img/happybee.png","img/surprisebee.png"],
                     "whitelist": [""],
                     "blacklist": [""]}],
   "form":"login",
   "hints"    : ["Nehme die Lösung von Level 1 und quetsche dazwischen einen DROP-TABLE-Befehl. Mit Semikolon trennst du verschiedene Queries voneinander."],
   "behindscene" : "",
   "lvl": 2},
    {"text" :[{"h2": "Kommen wir zur nächsten Herausforderung <br> <br> <br> <br> <br>",
    "h3":"",
    "img": "img/bee.png"},
    {"h2": "",
    "h3":"Nun haben wir statt eines Login-Formulars eine typische Suchleiste. In diesem Fall von einem Online-Shop für Schuhe. Versuche hier dich per SQL-Injection reinzuhacken! Viel Spaß! <br> <br> <br> <br>",
    "img": "img/bee.png"}],
   "challenge": "Versuche erstmal ganz normal nach Schuhen der Marke 'Nicke' zu suchen. ",
   "validation"  : [{"validationquery": [""],
                     "validationerror":"",
                     "truecondition":"results.rows.length == 4 && queries[j].includes('shoes')",
                     "correctanswer":["true","true","true","true"],
                     "speakbblanswer":["Super! Du hast verstanden wie das Formular funktioniert. <br> <br> <br> <br>","Super! Du hast verstanden wie das Formular funktioniert."],
                     "imganswer":["img/happybee.png","img/happybee.png"],
                     "whitelist": [""],
                     "blacklist": [""]}],
   "form":"search",
   "hints"    : ["hints deactivated"],
   "behindscene" : "",
   "lvl": 3},
   {"text" :[{"h2": "Kommen wir zur nächsten Herausforderung <br> <br> <br> <br> <br>",
      "h3":"",
      "img": "img/bee.png"}],
   "challenge": "Versuche die Tabelle 'shoes' zu droppen. ",
   "validation"  : [{"validationquery": ["SELECT * FROM shoes"],
                     "validationerror":"could not prepare statement (1 no such table: shoes)",
                     "truecondition":"results.rows.length > 0 && queries[j].includes('shoes')",
                     "correctanswer":["false","false","true","error"],
                     "speakbblanswer":["Super! du hast die Herausforderung gemeistert! <br> <br> <br> <br>","Schade, das hat leider nicht geklappt. Versuche erneut die Tabelle 'shoes' zu droppen."],
                     "imganswer":["img/happybee.png","img/surprisebee.png"],
                     "whitelist": [""],
                     "blacklist": [""]}],
   "form":"search",
   "hints"    : ["Du machst das gleiche wie beim Level davor nur dass du eine andere Eingabe hast und einen anderen Tabellennamen."],
   "behindscene" : "",
   "lvl": 3},
    {"text" : [{"h2": "Nun sind wir wieder zurück beim Login-Formular! Schauen wir uns mal die nächste Herausforderung an. <br> <br> <br> ",
                "h3":"",
                "img": "img/happybee.png"},
               ],
    "challenge": "Nun kennst du keinen Nutzernamen. Versuche dich trotzdem mit einem User einzuloggen.",
    "validation"  : [{"validationquery": [""],
                      "validationerror":"",
                      "truecondition":"results.rows.length > 0 && queries[j].includes('users')",
                      "correctanswer":["true","false","error","error"],
                      "speakbblanswer":["Super! du hast die Herausforderung gemeistert! <br> <br> <br> <br>","Schade, das hat leider nicht geklappt. Versuche erneut dich einzuloggen ohne einen Nutzer zu kennen."],
                      "imganswer":["img/happybee.png","img/surprisebee.png"],
                      "whitelist": [""],
                      "blacklist": ["maxmustermann","alexamusterfrau"]}],
    "form":"login",
    "hints"    : ["Wir müssen die Query so geschickt erzeugen, dass sie mind. eine Zeile ausgibt. Wenn wir die erste WHERE Bedingung leer lassen und eine zweite mit OR hinzufügen die immer wahr ist, können wir wieder mit '--' den restlichen Code auskommentieren und haben somit eien Query erzeugt, die alle User ausgeben würde."],
    "behindscene" : "",
    "lvl" : 4},
    {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an.<br> <br> <br> <br>",
                "h3":"",
                "img": "img/happybee.png"},
                {"h2": "",
                "h3":"Die Softwareentwickler haben eine Lücke in ihrem Code entdeckt. Nun wird man erst eingeloggt, wenn es wirklich nur einen User mit dem Namen und Passwort gibt. Das heißt für dich: Du kannst nur noch Queries erzeugen, die eine Zeile/ein Ergebnis ausgeben. <br> <br> <br>",
                "img": "img/happybee.png"}
               ],
    "challenge": "Ohne einen Nutzernamen zu kennen versucht du wieder dich mit irgendeinem User einzuloggen.",
    "validation"  : [{"validationquery": [""],
                      "validationerror":"",
                      "truecondition":"results.rows.length == 1 && queries[j].includes('users')",
                      "correctanswer":["true","false","error","error"],
                      "speakbblanswer":["Super! du hast die Herausforderung gemeistert! <br> <br> <br> <br>","Schade, das hat leider nicht geklappt. Versuche erneut dich einzuloggen ohne einen Nutzer zu kennen. <br> <br> <br> <br>"],
                      "imganswer":["img/happybee.png","img/surprisebee.png"],
                      "whitelist": [""],
                      "blacklist": ["maxmustermann","alexamusterfrau"]}],
    "form":"login",
    "hints"    : ["Diese Aufgabe ist ähnlich wie die davor nur, dass du versuchen musst EINE Zeile auszugeben und nicht mehr. Vorher hätte die Query die ganze Tabelle ausgegeben, aber die Sicherheitsbedingungen waren so schwach, dass die Länge der Ergebnisse egal war. Mit LIMIT kannst du nun am Ende einer Query entscheiden, wie viele Zeilen die Query ausgeben soll."],
    "behindscene" : "",
    "lvl" : 5},
    {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an.<br> <br> <br> <br>",
               "h3":"",
               "img": "img/happybee.png"},
               {"h2": "Nun haben wir statt ein Login-Formular eine Url-Leiste. Sie funktioniert ähnlich wie die Suchleiste nur kommt nach dem letzten slash die WHERE Bedingung.",
               "h3":"",
               "img": "img/happybee.png"}
    ],
   "challenge": "Mal schauen, ob du es einigermaßen verstanden hast. Gib nach dem letzten Slash folgendes ein: '?id=0' ",
   "validation"  : [{"validationquery": [""],
            "validationerror":"",
            "truecondition":"results.rows.length == 1 && queries[j].includes('users')",
            "correctanswer":["true","false","error","error"],
            "speakbblanswer":["Super! Du hast verstanden wie das Formular funktioniert. <br> <br> <br> <br>","Schade, das hat leider nicht geklappt. Versuche erneut nach dem letzten Slash '?id=0' einzugeben. <br> <br> <br> <br>"],
            "imganswer":["img/happybee.png","img/surprisebee.png"],
            "whitelist": [""],
            "blacklist": ["maxmustermann","alexamusterfrau"]}],
   "form":"url",
   "hints"    : ["hints deactivated"],
   "behindscene" : "",
   "lvl" : 6},
   {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an.<br> <br> <br> <br>",
   "h3":"",
   "img": "img/happybee.png"}
   ],
   "challenge": "Ohne einen Nutzernamen zu kennen versuchst du alle Users auszugeben",
   "validation"  : [{"validationquery": [""],
            "validationerror":"",
            "truecondition":"results.rows.length == 3 && queries[j].includes('users')",
            "correctanswer":["true","false","error","error"],
            "speakbblanswer":["Super! du hast die Herausforderung gemeistert! <br> <br> <br> <br>","Schade, das hat leider nicht geklappt. Versuche erneut alle User auszugeben. <br> <br> <br> <br>"],
            "imganswer":["img/happybee.png","img/surprisebee.png"],
            "whitelist": [""],
            "blacklist": ["maxmustermann","alexamusterfrau"]}],
   "form":"url",
   "hints"    : ["Mit Semikolon nach der letzten Lösung kannst du eine neue Query anfangen."],
   "behindscene" : "",
   "lvl" : 6},
   
   {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an.<br> <br> <br> <br>",
               "h3":"",
               "img": "img/happybee.png"},
               {"h2": "",
               "h3":"Jede Datenbank hat eine vorgefertigte Tabelle mit Metadaten, diese wird erzeugt sobald man eine Datenbank erstellt. Bei Oracle heißt die Tabelle zum Beispiel 'sys.tables', sie beinhaltet alle Informationen über Tabellen und Views in einer Datenbank. In dieser Datenbank heißt die Tabelle 'tables'.",
               "img": "img/happybee.png"}
   ],
   "challenge": "Gebe die Metadaten von allen Tabellen der Datenbank aus.",
   "validation"  : [{"validationquery": [""],
            "validationerror":"",
            "truecondition":"results.rows.length == 3 && queries[j].includes('tables')",
            "correctanswer":["true","false","error","error"],
            "speakbblanswer":["Super! du hast die Herausforderung gemeistert! <br> <br> <br> <br>","Schade, das hat leider nicht geklappt. Versuche erneut alle Tabellen-Metadaten auszugeben. <br> <br> <br> <br>"],
            "imganswer":["img/happybee.png","img/surprisebee.png"],
            "whitelist": ["tables"],
            "blacklist": ["maxmustermann","alexamusterfrau"]}],
   "form":"url",
   "hints"    : ["Mit Semikolon nach der letzten Lösung kannst du eine neue Query anfangen."],
   "behindscene" : "",
   "lvl" : 7},
    {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an. Zurück zum Login-Formular.<br> <br> <br> <br>",
    "h3":"",
    "img": "img/happybee.png"},
    {"h2": "Den Softwareentwicklern ist aufgefallen, dass Hacker mit ';' neue Queries in Eingabefelder einschleußen können, daher haben sie ';' im Input verboten. <br> <br>",
    "h3":"",
    "img": "img/happybee.png"}
   ],
   "challenge": "Versuche ohne Semikolon alle Schuhe der Marke 'Weja' auszugeben.",
   "validation"  : [{"validationquery": [""],
            "validationerror":"",
            "truecondition":"results.rows.length == 2 && queries[j].includes('shoes')",
            "correctanswer":["true","false","error","error"],
            "speakbblanswer":["Super! du hast die Herausforderung gemeistert! <br> <br> <br> <br>","Schade, das hat leider nicht geklappt. Versuche erneut alle Schuhe der Marke 'Weja' auszugeben. <br> <br> <br> <br>"],
            "imganswer":["img/happybee.png","img/surprisebee.png"],
            "whitelist": ["Weja"],
            "blacklist": ["maxmustermann","alexamusterfrau",";"]}],
   "form":"url",
   "hints"    : ["Queryergebnisse kann man ähnlich wie Mengen behandeln. Wenn du also keine neue Query mit Semikolon anfangen kannst, versuche deine Query mit UNION zu erweitern. Mit UNION kannst du 2 Queries vereinigen. Nach dem UNION Befehl kannst du ganz normal eine neue Query anfangen. Achtung: Die Query darf nur eine Zeile ausgeben!"],
   "behindscene" : "",
   "lvl" : 8},
   {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an.<br> <br> <br> <br>",
   "h3":"",
   "img": "img/happybee.png"}
   ],
  "challenge": "Versuche...",
  "validation"  : [{"validationquery": [""],
           "validationerror":"",
           "truecondition":"results.rows.length == 1",
           "correctanswer":["true","false","error","error"],
           "speakbblanswer":["Super! du hast die Herausforderung gemeistert! <br> <br> <br> <br>","Schade, das hat leider nicht geklappt. Versuche erneut dich einzuloggen ohne einen Nutzer zu kennen. <br> <br> <br> <br>"],
           "imganswer":["img/happybee.png","img/surprisebee.png"],
           "whitelist": [""],
           "blacklist": ["maxmustermann","alexamusterfrau"]}],
  "form":"login",
  "hints"    : [""],
  "behindscene" : "",
  "lvl" : 9}
];
var db= createdb();
createTableUsers(db);
createTableShoes(db);
createTableMa(db);
createTableTables(db);
//////////////  HINTS

function show_hints(){
    var hinttxt=TASKS[task_index].hints;
    document.getElementsByClassName("btnboxtxt")[0].innerHTML=hinttxt[0];
    var e = document.getElementById('btnboxre');
    if(e.style.display == 'block'){
      e.style.display = 'none';
   }else if(TASKS[task_index].hints[0]=="hints deactivated"){
      document.querySelector("#modal > div >h5 ").innerHTML = 'In dieser Herausforderung gibt es keine Tipps.';
      document.getElementById("modal").style.display='block';
   }else{
      if(hints>0){
         e.style.display = 'block';
      }
      hints=hints-1;
      if(hints==2){
        document.getElementById('light1').src="img/light.png"
        document.getElementById('light2').src="img/light.png"
        document.getElementById('light3').src="img/lightoff.png"
       }
       else if(hints==1){
        document.getElementById('light1').src="img/light.png"
        document.getElementById('light2').src="img/lightoff.png"
        document.getElementById('light3').src="img/lightoff.png"
       }
       else if(hints==0){
        document.getElementById('light1').src="img/lightoff.png"
        document.getElementById('light2').src="img/lightoff.png"
        document.getElementById('light3').src="img/lightoff.png"
       }
       else if(hints<0){
         document.querySelector("#modal > div >h5 ").innerHTML = 'Deine Tipps sind aufgebraucht.';
         document.getElementById("modal").style.display='block';
       }
   }

}

//////////////// BEHIND THE SCENE

function show_behindscene(){
    var e = document.getElementById('btnboxli');
   if (fails >=3){
      if(e.style.display == 'block'){
         e.style.display = 'none';
      }
      else{
         e.style.display = 'block';
         change_codemode();
      }
   }
   else{
      document.querySelector("#modal > div >h5 ").innerHTML ='Der Button wird erst nach 3 Fehlversuchen aktiviert.';
      document.getElementById("modal").style.display='block';

   }
}
function update_codetxt(){
   var form=TASKS[task_index].form;
   switch (form){
      case "login":
         var uname=document.getElementById("username").value;
         var pw=document.getElementById("password").value;
         var query="SELECT * FROM users WHERE username ='" + uname + "' AND password ='"+ pw + "';";
         break;
      case "search":
         var search=document.getElementById("suchleiste").value;
         var query="SELECT * FROM shoes WHERE label='" + search + "';";
         break;
      case "url":
         var url=document.getElementById("url").value;
         var id=url.toString().split('?');
         var query="SELECT * FROM users WHERE " + id[id.length-1] +  ";";
         break;
      default:
         console.log("couldn't update codetext");

   }
   document.querySelector("#codetxt > code").innerHTML = query;
   document.querySelector("#codetxt > code").innerHTML.reload;
}
function change_codemode(){
   var checked= document.getElementById("switcher").checked;
   var form=TASKS[task_index].form;
   if(checked){
      document.getElementById("codetxt").style.display="block";
      document.getElementById("behindcodesearch").style.display="none";
      document.getElementById("behindcodelogin").style.display="none";
      document.getElementById("behindcodeurl").style.display="none";
   }
   else{
      document.getElementById("codetxt").style.display="none";
      switch (form){
         case "login":
            document.getElementById("behindcodelogin").style.display="block";
            document.getElementById("behindcodesearch").style.display="none";
            document.getElementById("behindcodeurl").style.display="none";
            break;
         case "search":
            document.getElementById("behindcodesearch").style.display="block";
            document.getElementById("behindcodelogin").style.display="none";
            document.getElementById("behindcodeurl").style.display="none";
            break;
         case "url":
            document.getElementById("behindcodeurl").style.display="block";
            document.getElementById("behindcodelogin").style.display="none";
            document.getElementById("behindcodesearch").style.display="none";
            break;
         default:
            console.log("couldn't update codetext");
   
      }
   }
}
//////////////// SPEAKBUBBLE

function speakbubble_next(){

   change_form();
   if(bbltxtindex >= TASKS[task_index].text.length){
      show_lvl();
      bbltxtindex=0;
   }else{
      document.getElementById("speakbubble_h2").innerHTML = TASKS[task_index].text[bbltxtindex].h2;
      document.getElementById("speakbubble_h3").innerHTML = TASKS[task_index].text[bbltxtindex].h3;
      document.getElementById("insect").src = TASKS[task_index].text[bbltxtindex].img;
      bbltxtindex=bbltxtindex+1;
   }
}
function show_lvl(){
   document.getElementById("speakbubble_h2").innerHTML = TASKS[task_index].challenge;
   document.getElementById("speakbubble_h3").innerHTML = "";
   document.getElementById("next_btn").style.display = 'none';
}

//////////////// FORMS & VALIDATION
function onEnter(event){
   if (event.keyCode==13){
         try_login();
    }

}
function try_login(){
   validation();
   createTableUsers(db);
   createTableShoes(db);
   createTableMa(db);
   createTableTables(db);
}

function change_form(){
   if(TASKS[task_index].form == "login"){
      document.getElementById('loginlabel').innerHTML= "Bitte einloggen";
      document.getElementById("username").style.display = 'block';
      document.getElementById("password").style.display = 'block';
      document.getElementById("login_btn").style.display = 'block';
      document.getElementById("suchleiste").style.display = 'none';
      document.getElementById("suche_btn").style.display = 'none';
      document.getElementById("suchergebnisse").style.display = 'none';
      document.getElementById("logout_btn").style.display = 'none';
      document.getElementById("url").style.display = 'none';
      document.getElementsByClassName("form-signin")[0].style.maxWidth="350px";
   }else if(TASKS[task_index].form == "search"){
      document.getElementById('loginlabel').innerHTML= "Produktsuche";
      document.getElementById("username").style.display = 'none';
      document.getElementById("password").style.display = 'none';
      document.getElementById("login_btn").style.display = 'none';
      document.getElementById("suchleiste").style.display = 'block';
      document.getElementById("suche_btn").style.display = 'block';
      document.getElementById("suchergebnisse").style.display = 'none';
      document.getElementById("logout_btn").style.display = 'none';
      document.getElementsByClassName("form-signin")[0].style.maxWidth="500px";
      document.getElementById("url").style.display = 'none';
   }else if(TASKS[task_index].form == "url"){
      document.getElementById('loginlabel').innerHTML= "Url";
      document.getElementById("username").style.display = 'none';
      document.getElementById("password").style.display = 'none';
      document.getElementById("login_btn").style.display = 'none';
      document.getElementById("suchleiste").style.display = 'none';
      document.getElementById("suche_btn").style.display = 'none';
      document.getElementById("suchergebnisse").style.display = 'none';
      document.getElementById("logout_btn").style.display = 'none';
      document.getElementById("url").style.display = 'block';
      document.getElementsByClassName("form-signin")[0].style.maxWidth="700px";
   }
}

function validation(){
   var ergebnis="";
   var lenminus=0;
   var correctanswer = new Array();
   var querysucessful = new Array();
   var form=TASKS[task_index].form;
   var query=genarate_query(form);
   console.log("blacklist  "+TASKS[task_index].validation[0].blacklist);
   if(TASKS[task_index].validation[0].blacklist.includes(";")){
      queries=[query];
   }else{
      queries=query.split(";");
   }
   var prom= new Promise((resolve,reject) =>{

      for (let j in queries){
         var prom2= new Promise((resolve,reject) =>{
         console.log("queryatm " + queries[j] + j +queries.length);
         if(!queries[j].trim().startsWith("--")){
            db.transaction(function(transaction) {

               console.log("iam in the transaction " + queries[j] + j);
               transaction.executeSql(queries[j],[],function (transaction, results) {
                  if (eval(TASKS[task_index].validation[0].truecondition)) {
                     querysucessful[j]="true";
                     if(is_query_vaild(form)){
                        correctanswer[j] = TASKS[task_index].validation[0].correctanswer[0];
                     }else{
                        correctanswer[j]="false";
                        if(';' in TASKS[task_index].validation[0].blacklist){
                           querysucessful[j]="error";
                     
                        }
                     }
                  } else {
                     querysucessful[j]="false";
                     correctanswer[j] = TASKS[task_index].validation[0].correctanswer[1];
                  }
                  ergebnis= results;
                  resolve(correctanswer,ergebnis,querysucessful);

                  },function(transaction,error){
                     if(TASKS[task_index].validation[0].validationquery[0] !="" && error.message==TASKS[task_index].validation[0].validationerror){
                        correctanswer[j] = TASKS[task_index].validation[0].correctanswer[2];
                     }else{
                        correctanswer[j] = TASKS[task_index].validation[0].correctanswer[3];
                     }
                     querysucessful[j]="error";
                     resolve(correctanswer,ergebnis,querysucessful);
                              }
                        );
                     }
                  );
          }else{lenminus=lenminus+1;}
         })
         prom2.then(response=>{
            qu=queries[j];
            if(queries.length-lenminus==correctanswer.filter(String).length){resolve(correctanswer,ergebnis,querysucessful,qu);}

         });
      }
   })
   prom.then(response =>{
      var correct=answer(correctanswer);
      if (querysucessful.includes("error")){
         form_success(form,ergebnis,'error',correct,qu);
      }else{
         if(querysucessful.includes("true")){
            form_success(form,ergebnis,'true',correct,qu);
         }else{
            form_success(form,ergebnis,'false',correct,qu);
         }
      }
      
      
   });
   prom.catch(error => {
      false_answer(form);
      });
}
function genarate_query(form){
   switch (form){
      case "login":
         var uname=document.getElementById("username").value;
         var pw=document.getElementById("password").value;
         var query="SELECT * FROM users WHERE username ='" + uname + "' AND password ='"+ pw + "'";
         console.log(query);
      break;
      case "search":
         var search=document.getElementById("suchleiste").value;
         var query="SELECT * FROM shoes WHERE label='" + search + "'";
         break;
      case "url":
         var url=document.getElementById("url").value;
         var id=url.toString().split('?');
         console.log("id:  " + id)
         var query="SELECT * FROM users WHERE " + id[id.length-1]+"";
         break;
      default:
         console.log("Error:.");
   }
   if(TASKS[task_index].validation[0].validationquery[0] !="" && query!="notvalid"){
      query=query + ";" + TASKS[task_index].validation[0].validationquery[0];
   }
   return query;
 
}
function is_query_vaild(form){
   var blacklistarray=TASKS[task_index].validation[0].blacklist;
   var whitelistarray=TASKS[task_index].validation[0].whitelist;
   var valid=true;
   switch (form){
      case "login":
         var uname=document.getElementById("username").value;
         var pw=document.getElementById("password").value;
         var query="SELECT * FROM users WHERE username ='" + uname + "' AND password ='"+ pw + "'";
         for (let i in blacklistarray){
            if(blacklistarray[i]!=""){
               if(uname.includes(blacklistarray[i]) || pw.includes(blacklistarray[i])){
                  valid=false;
               }
            }
         }
         console.log(query);
         for (let k in whitelistarray){
            if(whitelistarray[k]!=""){
               if(uname.includes(whitelistarray[k]) || pw.includes(whitelistarray[k])){
                  // donothing
               }
               else{
                  valid=false;
               }
            }
         }
         console.log(query);
      break;
      case "search":
         var search=document.getElementById("suchleiste").value;
         var query="SELECT * FROM shoes WHERE label='" + search + "'";
         for (let i in blacklistarray){
            if(search.includes(blacklistarray[i]) && blacklistarray[i]!=""){
                  valid=false;
            }
         }
         for (let k in whitelistarray){
            if(whitelistarray[k]!=""){
               if(search.includes(whitelistarray[k])){
                  // donothing
               }
               else{
                  valid=false;
               }
            }
         }
         
         break;
      case "url":
         var search=document.getElementById("url").value;
         var id=url.toString().split('?');
         var query="SELECT * FROM shoes WHERE " + id[id.length-1] + "";
         for (let i in blacklistarray){
            if(search.includes(blacklistarray[i]) && blacklistarray[i]!=""){
                  valid=false;
            }
         }
         for (let k in whitelistarray){
            if(whitelistarray[k]!=""){
               if(search.includes(whitelistarray[k])){
                  // donothing
               }
               else{
                  valid=false;
               }
            }
         }
            
         break;
      default:
         console.log("Error:.");
   }

   return valid;
}
function form_success(form,ergebnis,querysucessful,answer,qu){
   if(querysucessful=='true'){

      switch (form){
         case "login":
            document.getElementById('loginlabel').innerHTML= "Login war erfolgreich. <br> <br>Willkommen " + ergebnis.rows.item(0)['username'] +"!";
            document.getElementById("username").style.display = 'none';
            document.getElementById("password").style.display = 'none';
            document.getElementById("login_btn").style.display = 'none';
            document.getElementById("suchergebnisse").style.display = 'none';
            // document.getElementById("suchergebnisse").innerHTML = "Willkommen " + ergebnis.rows.item(0)['username'] +"!";
            if(!answer){
               document.getElementById("logout_btn").style.display = 'block';
            }       
            break;
         case "search":
            document.getElementById('loginlabel').innerHTML= "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Suchergebnisse";
            document.getElementById("suchleiste").style.display = 'none';
            document.getElementById("suche_btn").style.display = 'none';
            document.getElementById("suchergebnisse").style.display = 'block';
            if(!answer){
               document.getElementById("suchleiste").style.display = 'block';
               document.getElementById("suche_btn").style.display = 'block';
            }
            if(qu.trim() != TASKS[task_index].validation[0].validationquery[0].trim()){
               generate_resulttable(qu,ergebnis);  
            }  
            break;
         case "url":
            document.getElementById('loginlabel').innerHTML= "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ergebnisse";
            document.getElementById("url").style.display = 'none';
            document.getElementById("suchergebnisse").style.display = 'block';
            if(!answer){
               document.getElementById("url").style.display = 'block';
            } 
            if(qu.trim() != TASKS[task_index].validation[0].validationquery[0].trim()){
               generate_resulttable(qu,ergebnis);  
            }       
            break;
         default:
            console.log("Error in right answer");
            
      }
   }
   else if (querysucessful=='false'){
      switch (form){
         case "login":
            document.getElementById('loginlabel').innerHTML= "Login fehlgeschlagen";
            break;
         case "search":
            document.getElementById("suchergebnisse").style.display = 'block';
            if(qu.trim() != TASKS[task_index].validation[0].validationquery[0].trim()){
               generate_resulttable(qu,ergebnis);  
            }     
            break;
         case "url":
            document.getElementById("suchergebnisse").style.display = 'block';
            if(qu.trim() != TASKS[task_index].validation[0].validationquery[0].trim()){
               generate_resulttable(qu,ergebnis);  
            }   
            break;
         default:
            console.log("Error in right answer");
            
      }

   }else{document.getElementById('loginlabel').innerHTML= "Internal Server Error";document.getElementById("suchergebnisse").style.display = 'none';}
}

function answer(correctanswer){
   var answer;
      if (correctanswer.includes("error")){
         fails=fails+1;
         document.getElementById("speakbubble_h2").innerHTML=TASKS[task_index].validation[0].speakbblanswer[1];
         document.getElementById("speakbubble_h3").innerHTML="";
         document.getElementById("insect").src = TASKS[task_index].validation[0].imganswer[1];
         answer=false;
      }else{
         if(correctanswer.includes("true")){
            document.getElementById("speakbubble_h2").innerHTML=TASKS[task_index].validation[0].speakbblanswer[0];
            document.getElementById("speakbubble_h3").innerHTML="";
            document.getElementById("next_btn").style.display = 'block';
            document.getElementById("insect").src = TASKS[task_index].validation[0].imganswer[0];
            fails=0;
            task_index=task_index+1;
            // lvl=lvl+1;
            document.getElementById("lvl").innerHTML="Level: " + TASKS[task_index].lvl;
            document.getElementById('btnboxli').style.display = 'none';
            document.getElementById('btnboxre').style.display = 'none';
            answer=true;
         }else{
            fails=fails+1;
            document.getElementById("speakbubble_h2").innerHTML=TASKS[task_index].validation[0].speakbblanswer[1];
            document.getElementById("speakbubble_h3").innerHTML="";
            document.getElementById("insect").src = TASKS[task_index].validation[0].imganswer[1];
            answer= false;
         }
      }
      return answer;

}
function generate_resulttable(qu,ergebnis){
   if(qu.includes("users")){
      var columns=["id","username","password","email"];
   }else if(qu.includes("shoes")){
      var columns=["id","label","size","price"];
   }else if(qu.includes("mitarbeiter")){
      var columns=["id","Vorname","Vachname","Email","Lohn","seit"];
   }else if(qu.includes("tables")){
      var columns=["id","tablename","rowcount","columncount"];
   }
   console.log(qu);
   let table = document.querySelector("table");
   table.deleteTHead();
   table.innerHTML = "";
   let thead = table.createTHead();
   let row= thead.insertRow();
   for(let j in columns){
      let th = document.createElement("th");
      let text = document.createTextNode(columns[j]);
      th.appendChild(text);
      row.appendChild(th);
   }
   for (var i=0; i<ergebnis.rows.length; i++)  {
      let row = table.insertRow();
      for (key in columns) {
        let cell = row.insertCell();
        let text = document.createTextNode(ergebnis.rows.item(i)[columns[key]]);
        cell.appendChild(text);
      }
    }
                // for (var i=0; i<ergebnis.rows.length; i++) {
            //    var row = ergebnis.rows.item(i);
            //    printableresult = printableresult + row['id'] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+row['username']+ "&nbsp;&nbsp;&nbsp;&nbsp; " + row['password'] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ row['email']+ "<br>";
            // }
}
/////// DATABASE FUNCTIONS

function nullDataHandler(transaction, results) { }
 
function createTableUsers(db)
{
    db.transaction(
        function (transaction) {
 
            /* The first query causes the transaction to (intentionally) fail if the table exists. */
            transaction.executeSql('create table users(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , username TEXT NOT NULL, password TEXT NOT NULL, email TEXT NOT NULL );', [], nullDataHandler, errorHandler);
            /* These insertions will be skipped if the table already exists. */
            transaction.executeSql('INSERT INTO users VALUES (0,"maxmustermann","password123","maxmustermann@examplemail.com");', [], nullDataHandler, errorHandler);
            transaction.executeSql('INSERT INTO users VALUES (1,"alexamusterfrau","alexa12345","alexamustermann@example.de");', [], nullDataHandler, errorHandler);
            transaction.executeSql('INSERT INTO users VALUES (2,"kati1809","khatrin321","kati@examplemail.com");', [], dataHandler, dataHandler);
        }
    );
}
function createTableShoes(db){
   db.transaction(
      function (transaction) {

          /* The first query causes the transaction to (intentionally) fail if the table exists. */
          transaction.executeSql('create table shoes(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , label TEXT NOT NULL, size TEXT NOT NULL, price TEXT NOT NULL );', [], nullDataHandler, errorHandler);
          /* These insertions will be skipped if the table already exists. */
          transaction.executeSql('INSERT INTO shoes VALUES (0,"Nicke","40","80€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (1,"Abidas","37","70€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (2,"Nicke","42","80€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (3,"Abidas","41","80€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (4,"Nicke","38","100€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (5,"Nicke","40","80€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (6,"Abidas","40","70€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (7,"Conwers","43","60€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (8,"Weja","38","130€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (9,"Reedok","45","70€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (10,"Weja","36","120€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (11,"Reedok","46","60€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (12,"Trash Plant","39","190€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (13,"Bifffalo","39","99€");', [], dataHandler, dataHandler);
      }
  );
}
function createTableMa(db){
   db.transaction(
      function (transaction) {

          /* The first query causes the transaction to (intentionally) fail if the table exists. */
          transaction.executeSql('create table mitarbeiter(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , Name TEXT NOT NULL, Vorname TEXT NOT NULL, Email TEXT NOT NULL, Lohn TEXT NOT NULL, seit TEXT NOT NULL );', [], nullDataHandler, errorHandler);
          /* These insertions will be skipped if the table already exists. */
          transaction.executeSql('INSERT INTO mitarbeiter VALUES (0,"Franziska","die Große","examplemail.com","700€","2020");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO mitarbeiter VALUES (1,"Mohammed","Schneider","schneider@webb.de","1700€","2017");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO mitarbeiter VALUES (2,"Greta Maria","Reifenberger","gretamaria-reifenberger@email.com","4500€","2000");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO mitarbeiter VALUES (3,"Dietmar","Kaslowski","dietmar0123@exm.com","2800€","2005");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO mitarbeiter VALUES (4,"Jessica","Koch","Koch1009@mail.com","1200€","2019");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO mitarbeiter VALUES (5,"Clarissa","Waismeier","waismeier.com","3500€","2010");', [], nullDataHandler, errorHandler);
      }
  );
}
function createTableTables(db){
   db.transaction(
      function (transaction) {

          /* The first query causes the transaction to (intentionally) fail if the table exists. */
          transaction.executeSql('create table tables(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , tablename TEXT NOT NULL, rowcount TEXT NOT NULL, columncount TEXT NOT NULL);', [], nullDataHandler, errorHandler);
          /* These insertions will be skipped if the table already exists. */
          transaction.executeSql('INSERT INTO tables VALUES (0,"users","3","4");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO tables VALUES (1,"shoes","14","4");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO tables VALUES (2,"mitarbeiter","6","6");', [], nullDataHandler, errorHandler);
      }
  );
}
function errorHandler(transaction, error)
{
    // error.message is a human-readable string.
    // error.code is a numeric error code
    console.log('Error:'+error.message+' (Code '+error.code+')');
 
    // Handle errors here
    var we_think_this_error_is_fatal = true;
    if (we_think_this_error_is_fatal) return true;
    return false;
}
 
function dataHandler(transaction, results)
{
    // Handle the results
    var string = "list contains the following people:\n\n";
    console.log(results.rows.length);
    for (var i=0; i<results.rows.length; i++) {
        // Each row is a standard JavaScript array indexed by
        // column names.
        var row = results.rows.item(i);
        string = string + row['username'] + " (ID "+row['id']+")\n";
    }
    console.log(string);
}
function createdb(){
   try {
      if (!window.openDatabase) {
          alert('not supported');
      } else {
          var shortName = 'db2hack';
          var version = '1.0';
          var displayName = 'user Database for hacking';
          var maxSize = 65536; // in bytes
          var db = openDatabase(shortName, version, displayName, maxSize);
   
          return db;
      }
   } catch(e) {
      // Error handling code goes here.
      if (e == 2) {
          // Version number mismatch.
          alert("Invalid database version.");
      } else {
          alert("Unknown error "+e+".");
      }
   }
}
//////////////// INFO MODAL 
function show_info(){
   e=document.getElementById("modal");
   if(e.style.display == 'block'){
      e.style.display = 'none';
   }
   else{
      if(cheatactive){
        document.querySelector("#modal > div >h5 ").innerHTML = "<a href='https://icons8.com/icon/ZiRwjHmdrgtj/info'>Info icon by Icons8</a><br><a target='_blank' href='https://icons8.com/icon/19209/light'>Light</a> icon by <a target='_blank' href='https://icons8.com'>Icons8</a> <br><a href='https://de.freepik.com/vektoren/blume'>Blume Vektor erstellt von terdpongvector - de.freepik.com</a> <br> <br> <input type='text' class='form-control' id='cheat_input'/>  <br> <button class='btn btn-lg btn-primary btn-block' id='cheat_btn' type='button' onclick='cheat()'>cheat</button> ";
      }else{
         document.querySelector("#modal > div >h5 ").innerHTML = "<a href='https://icons8.com/icon/ZiRwjHmdrgtj/info'>Info icon by Icons8</a><br><a target='_blank' href='https://icons8.com/icon/19209/light'>Light</a> icon by <a target='_blank' href='https://icons8.com'>Icons8</a> <br><a href='https://de.freepik.com/vektoren/blume'>Blume Vektor erstellt von terdpongvector - de.freepik.com</a> ";
      }
      
        e.style.display = 'block';
      
   }
}

function close_modal(){
   document.getElementById("modal").style.display='none';

   // document.getElementById("behindscene_modal").style.display='none';
   // document.getElementById("tipp_modal").style.display='none';
   // e.style.display = 'none';
}
function cheat(){
   var lvl_input=document.getElementById("cheat_input").value - 1;
   for (let i in TASKS){
      if (TASKS[i].lvl.toString().trim()==lvl_input.toString().trim()){
         task_index=i;
         console.log(i)
         console.log(task_index);
         console.log(TASKS[task_index].lvl +1 )
         document.getElementById("speakbubble_h2").innerHTML=TASKS[task_index].validation[0].speakbblanswer[0];
         document.getElementById("speakbubble_h3").innerHTML="";
         document.getElementById("next_btn").style.display = 'block';
         document.getElementById("insect").src = TASKS[task_index].validation[0].imganswer[0];
         fails=0;
         task_index=parseInt(task_index) + 1;
         console.log(task_index);
         console.log(TASKS[task_index].lvl);
         // lvl=lvl+1;
         document.getElementById("lvl").innerHTML="Level: " + TASKS[task_index].lvl;
         document.getElementById('btnboxli').style.display = 'none';
         document.getElementById('btnboxre').style.display = 'none';
      }else{
         console.log('Level existiert nicht.')
      }
   }
   close_modal();

}
