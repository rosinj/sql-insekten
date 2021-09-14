
//////////////// GLOBAL

var hints=3;
var bbltxtindex=0;
var fails=0
// var lvl=1;
var task_index=0;
TASKS=[
   {"text": [{"h2": "",
              "h3":"Hier lernst du von Level zu Level wie Hacker dabei vorgehen. Vorkenntisse wie SQL wären empfehlenswert. In diesem Fall haben wir rechts ein Login-Formular, wie man es so von anderen Websiten kennt.",
              "img": "img/bee.png"},
              {"h2": "",
              "h3":"Unter dem Button 'Hintergrunddetails anzeigen', der bei 3 Fehlversuchen aktiviert wird, kannst du dir die live-erzeugte SQL-Query anschauen oder den Hintergrundcode. <br> Zu Beginn hast du 3 Tipps. Einen Tipp kannst du dann bei dem Button 'Tipp einblenden' anzeigen lassen.",
              "img": "img/bee.png"},
              {"h2": "",
              "h3":" Allgemein versucht man durch geschickten Input in den Eingabefeldern eine syntax-korrekte SQL-Query zu erzeugen, die die Aufgabe löst. Hierbei ist es wichtig rumzuprobieren oder sich die Hindergrunddetails anzuschauen um zu wissen, wie die Query mit den Eingabefeldern verknüpft wird, die dann schließlich in der Datenbank ausgeführt wird.",
              "img": "img/bee.png"},
              {"h2": "",
              "h3":"In den ersten Levels wirst du geschickt Apostrophe und den SQL-Befehl '--', der den Code dahinter auskommentiert, verwenden. ",
              "img": "img/bee.png"},
              {"h2": "Genug geredet, los gehts!",
              "h3":"",
              "img": "img/happybee.png"}],
    "challenge" : "Versuche als Erstes dich ganz normal als 'maxmustermann' mit einem Passwort einzuloggen, wie man es normalerweise kennt.",
    "validation"  : [{"validationquery": [""],
                      "validationerror":"",
                      "resultlength":1,
                      "correctanswer":["true","true","true","true"],
                      "speakbblanswer":["Super! Du hast verstanden wie das Login-Formular funktioniert.","Super! Du hast verstanden wie das Login-Formular funktioniert."],
                      "imganswer":["img/happybee.png","img/happybee.png"],
                      "whitelist": [""],
                      "blacklist": [""]}],
    "form":"login",
    "hints"    : ["hints deactivated"],
    "behindscene" : "",
    "lvl" : 1},
   {"text": [{"h2": "ok, jetzt geht's aber wirklich los!",
              "h3":"",
              "img": "img/happybee.png"}],
    "challenge" : "Versuche dich als 'alexamusterfrau' einzuloggen, ohne das Passwort zu kennen.",
    "validation"  : [{"validationquery": [""],
                      "validationerror":"",
                      "resultlength":1,
                      "correctanswer":["true","false","error","error"],
                      "speakbblanswer":["Super! du hast die Herausforderung gemeistert!","Schade, das hat leider nicht geklappt. Versuche es erneut dich als 'alexamusterfrau' einzuloggen."],
                      "imganswer":["img/happybee.png","img/surprisebee.png"],
                      "whitelist": ["alexamusterfrau"],
                      "blacklist": ["maxmustermann"]}],
    "form":"login",
    "hints"    : ["Wie du es in den Hintergrunddetails siehst, ist bevor der Input 'uname' kommt ein Apostroph zu finden. D.h. nachdem du den Benutzernamen in das Eingabefeld eingegeben hast brauchen wir noch ein Apostroph um den String zu beenden. Danach interessiert uns die restliche Query nicht, daher kommentieren wir sie aus."],
    "behindscene" : "",
    "lvl" : 1},
    {"text" : [{"h2": "Kommen wir zur nächsten Herausforderung",
    "h3":"",
    "img": "img/bee.png"}],
   "challenge": "Versuche die Tabelle 'users' zu löschen. ",
   "validation"  : [{"validationquery": ["SELECT * FROM users"],
                     "validationerror":"could not prepare statement (1 no such table: users)",
                     "resultlength":1,
                     "correctanswer":["false","false","true","error"],
                     "speakbblanswer":["Super! du hast die Herausforderung gemeistert!","Schade, das hat leider nicht geklappt. Versuche erneut die Tabelle 'users' zu löschen."],
                     "imganswer":["img/happybee.png","img/surprisebee.png"],
                     "whitelist": [""],
                     "blacklist": [""]}],
   "form":"login",
   "hints"    : ["Nehme die Lösung von Level 1 und quetsche dazwischen ein DROP-TABLE-Befehl. Mit Semikolon trennst du verschiedene Queries voneinander."],
   "behindscene" : "",
   "lvl": 2},
    {"text" :[{"h2": "Kommen wir zur nächsten Herausforderung",
    "h3":"",
    "img": "img/bee.png"},
    {"h2": "",
    "h3":"Nun haben wir statt ein Login-Formular eine typische Suchleiste. In diesem Fall von einem Schuhe Online-Shop. Versuche hier dich per SQL-Injection reinzuhacken! Viel Spaß!",
    "img": "img/bee.png"}],
   "challenge": "Versuche erstmal ganz normal nach 'Nicke' Schuhen zu suchen. ",
   "validation"  : [{"validationquery": [""],
                     "validationerror":"",
                     "resultlength":4,
                     "correctanswer":["true","true","true","true"],
                     "speakbblanswer":["Super! Du hast verstanden wie das Formular funktioniert.","Super! Du hast verstanden wie das Formular funktioniert."],
                     "imganswer":["img/happybee.png","img/happybee.png"],
                     "whitelist": [""],
                     "blacklist": [""]}],
   "form":"search",
   "hints"    : ["hints deactivated"],
   "behindscene" : "",
   "lvl": 3},
   {"text" :[{"h2": "Kommen wir zur nächsten Herausforderung",
      "h3":"",
      "img": "img/bee.png"}],
   "challenge": "Versuche die Tabelle 'shoes' zu löschen. ",
   "validation"  : [{"validationquery": ["SELECT * FROM shoes"],
                     "validationerror":"could not prepare statement (1 no such table: shoes)",
                     "resultlength":1,
                     "correctanswer":["false","false","true","error"],
                     "speakbblanswer":["Super! du hast die Herausforderung gemeistert!","Schade, das hat leider nicht geklappt. Versuche es erneut."],
                     "imganswer":["img/happybee.png","img/surprisebee.png"],
                     "whitelist": [""],
                     "blacklist": [""]}],
   "form":"search",
   "hints"    : ["Du machst das gleiche wie beim Level davor nur dass du eine andere Eingabe hast und ein anderer Tabellenname."],
   "behindscene" : "",
   "lvl": 3},
    {"text" : [{"h2": "Nun sind wir wieder zurück beim Login-Formular! Schauen wir uns mal die nächste Herausforderung an.",
                "h3":"",
                "img": "img/happybee.png"},
               ],
    "challenge": "Nun kennst du keinen Nutzernamen. Versuche dich trotzdem mit einem User einzuloggen.",
    "validation"  : [{"validationquery": [""],
                      "validationerror":"",
                      "resultlength":1,
                      "correctanswer":["true","false","error","error"],
                      "speakbblanswer":["Super! du hast die Herausforderung gemeistert!","Schade, das hat leider nicht geklappt. Versuche erneut dich einzuloggen ohne einen Nutzer zu kennen."],
                      "imganswer":["img/happybee.png","img/surprisebee.png"],
                      "whitelist": [""],
                      "blacklist": ["maxmustermann","alexamusterfrau"]}],
    "form":"login",
    "hints"    : ["Wir müssen die Query so geschickt erzeugen, dass sie EINE Zeile ausgibt. Wenn wir die erste WHERE Bedingung leer lassen und eine zweite mit OR hinzufügen die immer stimmt, können wir mit LIMIT beschließen wie viele Zeilen wir ausgeben wollen."],
    "behindscene" : "",
    "lvl" : 4},
];
var db= createdb();
createTableUsers(db);
createTableShoes(db);
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
   }
   else{
      document.getElementById("codetxt").style.display="none";
      switch (form){
         case "login":
            document.getElementById("behindcodelogin").style.display="block";
            break;
         case "search":
            document.getElementById("behindcodesearch").style.display="block";
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

function try_login(){
   validation();
   createTableUsers(db);
   createTableShoes(db);
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
   }
}

/////// VALIDATION FOR EACH LEVEL
function validation(){
   var ergebnis="";
   var lenminus=0;
   var correctanswer = new Array();
   var querysucessful = new Array();
   var form=TASKS[task_index].form;
   var query=genarate_query(form);

   queries=query.split(";");
   console.log("SQL Query: " + query);
   console.log(queries);

   var prom= new Promise((resolve,reject) =>{

      for (let j in queries){
         var prom2= new Promise((resolve,reject) =>{
         console.log("queryatm " + queries[j] + j +queries.length);
         if(!queries[j].trim().startsWith("--")){
            db.transaction(function(transaction) {

               console.log("iam in the transaction " + queries[j] + j);
               transaction.executeSql(queries[j],[],function (transaction, results) {

                  console.log("iam in the if 2 " + queries[j] + j);
                  console.log(results.rows);
                  console.log("vorgegeben " + TASKS[task_index].validation[0].resultlength +" result length: "+ results.rows.length);
                  if (results.rows.length == TASKS[task_index].validation[0].resultlength) {
                     querysucessful[j]="true";
                     if(is_query_vaild(form)){
                        correctanswer[j] = TASKS[task_index].validation[0].correctanswer[0];
                     }else{
                        correctanswer[j]="false";
                     }
                     console.log("iam in the true section " + queries[j] + correctanswer[j] + j);
                  } else {
                     querysucessful[j]="false";
                     correctanswer[j] = TASKS[task_index].validation[0].correctanswer[1];
                     console.log("iam in the false section" + queries[j] + correctanswer[j] + j);
                  }
                  console.log("iam after if 2" + queries[j] + correctanswer[j] + j);
                  ergebnis= results.rows;
                  resolve(correctanswer,ergebnis,querysucessful);

                  },function(transaction,error){
                     if(TASKS[task_index].validation[0].validationquery[0] !="" && error.message==TASKS[task_index].validation[0].validationerror){
                        correctanswer[j] = TASKS[task_index].validation[0].correctanswer[2];
                     }else{
                     correctanswer[j] = TASKS[task_index].validation[0].correctanswer[3];
                     console.log("iam in the error section" + queries[j] + correctanswer[j] + j);
                     console.log('Error:'+error.message+' (Code '+error.code+')');}
                     querysucessful[j]="error";
                     resolve(correctanswer,ergebnis,querysucessful);
                              }
                        );
                     }
                  );
          }else{lenminus=lenminus+1;}
         })
         prom2.then(response=>{
            console.log("iam in promise response 2" + queries[j] + correctanswer[j] + j);
            console.log(correctanswer);
            console.log(correctanswer.filter(String));
            if(queries.length-lenminus==correctanswer.filter(String).length){resolve(correctanswer,ergebnis,querysucessful);}

         });
      }
   })
   prom.then(response =>{
  
      console.log("iam the final answer "+ correctanswer)
      console.log("ergebnis: " + ergebnis)
      var correct=answer(correctanswer);
      if (querysucessful.includes("error")){
         form_success(form,ergebnis,false,correct);
      }else{
         if(querysucessful.includes("true")){
            form_success(form,ergebnis,true,correct);
         }else{
            form_success(form,ergebnis,false,correct);
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
      default:
         console.log("Error:.");
   }

   return valid;
}
function form_success(form,ergebnis,querysucessful,answer){
   if(querysucessful){

      switch (form){
         case "login":
            document.getElementById('loginlabel').innerHTML= "Login war erfolgreich.";
            document.getElementById("username").style.display = 'none';
            document.getElementById("password").style.display = 'none';
            document.getElementById("login_btn").style.display = 'none';
            document.getElementById("suchergebnisse").style.display = 'block';
            document.getElementById("suchergebnisse").innerHTML = "Willkommen " + ergebnis.item(0)['username'] +"!";
            if(!answer){
               document.getElementById("logout_btn").style.display = 'block';
            }
            
            
            break;
         case "search":
            document.getElementById('loginlabel').innerHTML= "Suchergebnisse";
            document.getElementById("suchleiste").style.display = 'none';
            document.getElementById("suche_btn").style.display = 'none';
            document.getElementById("suchergebnisse").style.display = 'block';
            var printableresult="";
            for (var i=0; i<ergebnis.length; i++) {
               var row = ergebnis.item(i);
               printableresult = printableresult + "Marke: " + row['label'] + " Größe: "+row['size']+ " Preis: " + row['price'] +"\n";
            }
            if(printableresult != ""){
               document.getElementById("suchergebnisse").innerHTML = printableresult;
              }else{
               document.getElementById("suchergebnisse").innerHTML = "keine Suchergebnisse";
              }
            break;
         default:
            console.log("Error in right answer");
            
      }
   }
   else{
      switch (form){
         case "login":
            document.getElementById('loginlabel').innerHTML= "Login fehlgeschlagen";

         break;
         case "search":
            document.getElementById("suchergebnisse").style.display = 'block';
            var printableresult="";
            for (var i=0; i<ergebnis.length; i++) {
               var row = ergebnis.item(i);
               printableresult = printableresult + "Marke: " + row['label'] + " Größe: "+row['size']+ " Preis: " + row['price'] +"\n";
           }
           if(printableresult != ""){
            document.getElementById("suchergebnisse").innerHTML = printableresult;
           }else{
            document.getElementById("suchergebnisse").innerHTML = "keine Suchergebnisse";
           }
            break;
         default:
            console.log("Error in right answer");
            
      }

   }
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
      document.querySelector("#modal > div >h5 ").innerHTML = "<a href='https://icons8.com/icon/ZiRwjHmdrgtj/info'>Info icon by Icons8</a><br><a target='_blank' href='https://icons8.com/icon/19209/light'>Light</a> icon by <a target='_blank' href='https://icons8.com'>Icons8</a> <br><a href='https://de.freepik.com/vektoren/blume'>Blume Vektor erstellt von terdpongvector - de.freepik.com</a>";
      e.style.display = 'block';
      
   }
}

function close_modal(){
   document.getElementById("modal").style.display='none';
   // document.getElementById("behindscene_modal").style.display='none';
   // document.getElementById("tipp_modal").style.display='none';
   // e.style.display = 'none';
}
