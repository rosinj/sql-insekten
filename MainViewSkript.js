
//////////////// GLOBAL

var hints=3;
var bbltxtindex=0;
var fails=0
var lvl=1;
TASKS=[
   {"text": [{"h2": "",
              "h3":"Hier lernst du von Level zu Level wie Hacker dabei vorgehen. Vorkenntisse wie SQL wären empfehlenswert. In diesem Fall haben wir rechts ein Login-Formular, wie man es so von anderen Websiten kennt.",
              "img": "img/bee.png"},
              {"h2": "",
              "h3":"Unter dem Button 'Hintergrunddetails anzeigen', der bei 3 Fehlversuchen aktiviert ist, kannst du die die Live Erzeugte SQL-Query anschauen oder den Hintergrundcode.",
              "img": "img/bee.png"},
              {"h2": "Los gehts!",
              "h3":"",
              "img": "img/happybee.png"}],
    "challenge" : "Versuche als Erstes dich ganz normal als 'maxmustermann' mit dem Passwort 'password123' einzuloggen, wie man es normalerweise kennt. ",
    "validation"  : [{"param": [""],
                      "correctanswer":["true","false","error","error"],
                      "forbiddenstrings": [""]}],
    "form":"login",
    "hints"    : "hints deactivated",
    "behindscene" : "",
    "lvl" : 1},
   {"text": [{"h2": "ok, jetzt geht's aber wirklich los!",
              "h3":"",
              "img": "img/happybee.png"}],
    "challenge" : "Versuche dich als 'alexamusterfrau' einzuloggen, ohne das Passwort zu kennen.",
    "validation"  : [{"param": [""],
                      "correctanswer":["true","false","error","error"],
                      "forbiddenstrings": ["maxmustermann"]}],
    "form":"login",
    "hints"    : ["Tipp 1: '--' wird in SQL zum auskommentieren verwendet. Dies kannst du hier benutzen um den restlichen Code auszukommentieren bzw. um eine gültige  SQL Query zu erzeugen.","Tipps2"],
    "behindscene" : "",
    "lvl" : 2},
    {"text" : [{"h2": "Kommen wir zur nächsten Herausforderung",
                "h3":"",
                "img": "img/bee.png"}],
    "challenge": "Nun kennst du keinen Nutzernamen. Versuche Informationen über einen oder mehreren Nutzer/n herauszufinden.",
    "validation"  : [{"param": [""],
                      "correctanswer":["true","false","error","error"],
                      "forbiddenstrings": ["maxmustermann","alexamusterfrau"]}],
    "form":"login",
    "hints"    : ["Tipp1","Tipp2"],
    "behindscene" : "",
    "lvl" : 3},
    {"text" : [{"h2": "Kommen wir zur nächsten Herausforderung",
                "h3":"",
                "img": "img/bee.png"}],
    "challenge": "Nun kennst du keinen Nutzernamen. Versuche die Tabelle 'users' zu löschen. ",
    "validation"  : [{"param": ["SELECT * FROM users"],
                      "correctanswer":["false","false","true","error"],
                      "forbiddenstrings": ["maxmustermann","alexamusterfrau"]}],
    "form":"login",
    "hints"    : ["Tipp1","Tipp2"],
    "behindscene" : "",
    "lvl": 4},
    {"text" :[{"h2": "Kommen wir zur nächsten Herausforderung",
               "h3":"",
               "img": "img/bee.png"},
               {"h2": "",
               "h3":"Nun haben wir statt ein Login-Formular eine typische Suchleiste. In diesem Fall von einem Schuhe Online-Shop. Versuche hier dich per SQL-Injection reinzuhacken! Viel Spaß!",
               "img": "img/bee.png"}],
    "challenge": "Versuche erstmal ganz normal wie du es kennst nach 'Nike' Schuhen zu suchen. ",
    "validation"  : [{"param": [""],
                      "correctanswer":["true","false","error","error"],
                     "forbiddenstrings": ["maxmustermann","alexamusterfrau"]}],
    "form":"search",
    "hints"    : ["Tipp3","Tipp2"],
    "behindscene" : "",
    "lvl": 5},
    {"text" :[{"h2": "Kommen wir zur nächsten Herausforderung",
               "h3":"",
               "img": "img/bee.png"}],
    "challenge": "Versuche... ",
    "validation"  : [{"param": [""],
                     "correctanswer":[""],
                      "forbiddenstrings": ["maxmustermann","alexamusterfrau"]}],
    "form":"search",
    "hints"    : ["Tipp3","Tipp2"],
    "behindscene" : "",
    "lvl": 6}
];
var db= createdb();
createTableUsers(db);
createTableShoes(db);
//////////////  HINTS

function show_hints(){
    var hinttxt=TASKS[lvl-1].hints;
    document.getElementsByClassName("btnboxtxt")[0].innerHTML=hinttxt[0];
    var e = document.getElementById('btnboxre');
    if(e.style.display == 'block'){
      e.style.display = 'none';
   }
   else{
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
         document.getElementById("tipp_modal").style.display='block';
         //  alert("Deine Tipps sind aufgebraucht.")
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
      document.getElementById("behindscene_modal").style.display='block';
      // alert('Der Button wird erst nach 3 Fehlversuchen aktiviert.')
   }
}
function update_codetxt(){
   uname=document.getElementById("username").value;
   pw=document.getElementById("password").value;
   query="SELECT * FROM users WHERE username ='" + uname + "' AND password ='"+ pw + "';";
   document.querySelector("#codetxt > code").innerHTML = query;
   document.querySelector("#codetxt > code").innerHTML.reload;
}
function change_codemode(){
   var checked= document.getElementById("switcher").checked;
   if(checked){
      document.getElementById("codetxt").style.display="block";
      document.getElementById("behindcode").style.display="none";
   }
   else{
      document.getElementById("codetxt").style.display="none";
      document.getElementById("behindcode").style.display="block";
   }
}
//////////////// SPEAKBUBBLE

function speakbubble_next(){
   // console.log(TASKS[lvl-1].text[bbltxtindex].h2);
   // console.log(lvl);
   // console.log(bbltxtindex);
   // console.log(TASKS[lvl-1].text.length);
   change_form();
   if(bbltxtindex >= TASKS[lvl-1].text.length){
      show_lvl();
      bbltxtindex=0;
      // change_form();
   }else{
      document.getElementById("speakbubble_h2").innerHTML = TASKS[lvl-1].text[bbltxtindex].h2;
      document.getElementById("speakbubble_h3").innerHTML = TASKS[lvl-1].text[bbltxtindex].h3;
      document.getElementById("insect").src = TASKS[lvl-1].text[bbltxtindex].img;
      bbltxtindex=bbltxtindex+1;
   }
}
function show_lvl(){
   document.getElementById("speakbubble_h2").innerHTML = TASKS[lvl-1].challenge;
   document.getElementById("speakbubble_h3").innerHTML = "";
   document.getElementById("next_btn").style.display = 'none';
}

//////////////// FORMS & VALIDATION

function try_login(){
   validation();
}

function change_form(){
   if(TASKS[lvl-1].form == "login"){
      document.getElementById('loginlabel').innerHTML= "Bitte einloggen";
      document.getElementById("username").style.display = 'block';
      document.getElementById("password").style.display = 'block';
      document.getElementById("login_btn").style.display = 'block';
      document.getElementById("suchleiste").style.display = 'none';
      document.getElementById("suche_btn").style.display = 'none';
      document.getElementById("suchergebnisse").style.display = 'none';
   }else if(TASKS[lvl-1].form == "search"){
      document.getElementById('loginlabel').innerHTML= "Suche eingeben";
      document.getElementById("username").style.display = 'none';
      document.getElementById("password").style.display = 'none';
      document.getElementById("login_btn").style.display = 'none';
      document.getElementById("suchleiste").style.display = 'block';
      document.getElementById("suche_btn").style.display = 'block';
      document.getElementById("suchergebnisse").style.display = 'none';
   }
}

/////// VALIDATION FOR EACH LEVEL
function validation(){
   // var j = 0;
   var lenminus=0;
   var correctanswer = new Array();
   var form=TASKS[lvl-1].form;
   var forbiddenarray=TASKS[lvl-1].validation[0].forbiddenstrings;
   switch (form){
      case "login":
         var uname=document.getElementById("username").value;
         var pw=document.getElementById("password").value;
         for (let i in forbiddenarray){
            console.log(i);
               if(uname.includes(forbiddenarray[i]) && forbiddenarray[i]!=""){
                  uname="";
               }
            }
         var query="SELECT * FROM users WHERE username ='" + uname + "' AND password ='"+ pw + "'";
      break;
      case "search":
         var search=document.getElementById("suchleiste").value;
         for (let i in forbiddenarray){
            console.log(i);
               if(search.includes(forbiddenarray[i]) && forbiddenarray[i]!=""){
                  search="";
               }
            }
            var query="SELECT * FROM shoes WHERE label='" + search + "'";
         break;
      default:
         console.log("Error: validation from current form doesn't work.");
   }
   // uname=document.getElementById("username").value;
   // pw=document.getElementById("password").value;
   // forbiddenarray=TASKS[lvl-1].validation[0].forbiddenstrings;
   // for (let i in forbiddenarray){
   //    console.log(i);
   //       if(uname.includes(forbiddenarray[i]) && forbiddenarray[i]!=""){
   //          uname="";
   //       }
   //    }
   // query="SELECT * FROM users WHERE username ='" + uname + "' AND password ='"+ pw + "'";
   if(TASKS[lvl-1].validation[0].param[0] !=""){
      query=query + ";" + TASKS[lvl-1].validation[0].param[0];
      

   }
   queries=query.split(";");
   console.log("SQL Query: " + query);
   console.log(queries)

   var prom= new Promise((resolve,reject) =>{

      for (let j in queries){
         var prom2= new Promise((resolve,reject) =>{
         console.log("queryatm " + queries[j] + j +queries.length);
         if(!queries[j].trim().startsWith("--")){
            db.transaction(function(transaction) {

               console.log("iam in the transaction " + queries[j] + j);
               transaction.executeSql(queries[j],[],function (transaction, results) {

                  console.log("iam in the if 2 " + queries[j] + j);
                  if (results.rows.length == 1) {

                     correctanswer[j] = TASKS[lvl-1].validation[0].correctanswer[0];
                     console.log("iam in the true section " + queries[j] + correctanswer[j] + j);
                  } else {
                     correctanswer[j] = TASKS[lvl-1].validation[0].correctanswer[1];
                     console.log("iam in the false section" + queries[j] + correctanswer[j] + j);
                  }
                  console.log("iam after if 2" + queries[j] + correctanswer[j] + j);
                  resolve(correctanswer);

                  },function(transaction,error){
                     if(TASKS[lvl-1].validation[0].param[0] !="" && error.message=="could not prepare statement (1 no such table: users)"){
                        correctanswer[j] = TASKS[lvl-1].validation[0].correctanswer[2];
                        createTableUsers(db);
                     }else{
                     correctanswer[j] = TASKS[lvl-1].validation[0].correctanswer[3];;
                     console.log("iam in the error section" + queries[j] + correctanswer[j] + j);
                     console.log('Error:'+error.message+' (Code '+error.code+')');}
                     resolve(correctanswer);
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
            if(queries.length-lenminus==correctanswer.filter(String).length){resolve(correctanswer);}

         });
      }
   })
   prom.then(response =>{
  
      console.log("iam the final answer "+ correctanswer)
      if (correctanswer.includes("error")){
         false_answer(form);
      }else{
         if(correctanswer.includes("true")){
            right_answer(form);
         }else{
            false_answer(form);
         }
      }
   });
      // })
   
   prom.catch(error => {
      false_answer(form);
      });
}

function right_answer(form){
   switch (form){
      case "login":
         document.getElementById('loginlabel').innerHTML= "Login war erfolgreich";
         document.getElementById("username").style.display = 'none';
         document.getElementById("password").style.display = 'none';
         document.getElementById("login_btn").style.display = 'none';

      break;
      case "search":
         document.getElementById('loginlabel').innerHTML= "Suchergebnisse";
         document.getElementById("suchleiste").style.display = 'none';
         document.getElementById("suche_btn").style.display = 'none';
         document.getElementById("suchergebnisse").style.display = 'block';
         document.getElementById("suchergebnisse").innerHTML = 'Ergebnis1';
         break;
      default:
         console.log("Error in right answer");
         
   }
   document.getElementById("speakbubble_h2").innerHTML="Super! du hast die Herausforderung gemeistert!";
   document.getElementById("speakbubble_h3").innerHTML="";
   document.getElementById("next_btn").style.display = 'block';
   document.getElementById("insect").src = "img/happybee.png";
   fails=0;
   lvl=lvl+1;
   document.getElementById("lvl").innerHTML="Level: " + lvl;
   document.getElementById('btnboxli').style.display = 'none';
   // document.getElementById('loginlabel').innerHTML= "Login war erfolgreich";
   // document.getElementById("username").style.display = 'none';
   // document.getElementById("password").style.display = 'none';
   // document.getElementById("login_btn").style.display = 'none';
   // document.getElementById("speakbubble_h2").innerHTML="Super! du hast die Herausforderung gemeistert!";
   // document.getElementById("speakbubble_h3").innerHTML="";
   // document.getElementById("next_btn").style.display = 'block';
   // document.getElementById("insect").src = "img/happybee.png";
   // fails=0;
   // lvl=lvl+1;
   // document.getElementById("lvl").innerHTML="Level: " + lvl;
   // document.getElementById('btnboxli').style.display = 'none';

}
function false_answer(form){
   switch (form){
      case "login":
         document.getElementById('loginlabel').innerHTML= "Login fehlgeschlagen";
         document.getElementById("speakbubble_h2").innerHTML="Schade, das hat nicht geklappt. Versuche es erneut.";
         document.getElementById("insect").src = "img/surprisebee.png";
      break;
      case "search":
         document.getElementById('loginlabel').innerHTML= "Suchergebnisse";
         document.getElementById("suchleiste").style.display = 'none';
         document.getElementById("suche_btn").style.display = 'none';
         document.getElementById("suchergebnisse").style.display = 'block';
         document.getElementById("suchergebnisse").innerHTML = 'Ergebnis1';
         break;
      default:
         console.log("Error in right answer");
         
   }
   fails=fails+1;
   // document.getElementById('loginlabel').innerHTML= "Login fehlgeschlagen";
   document.getElementById("speakbubble_h2").innerHTML="Schade, das hat nicht geklappt. Versuche es erneut.";
   document.getElementById("insect").src = "img/surprisebee.png";
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
          transaction.executeSql('INSERT INTO shoes VALUES (0,"Nike","40","80€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (1,"Adidas","37","70€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (2,"Converse","43","60€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (3,"Veja","38","130€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (4,"Reebok","45","70€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (5,"Trash Planet","39","190€");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO shoes VALUES (6,"Buffalo","39","99€");', [], dataHandler, dataHandler);
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
   e=document.getElementById("info_modal");
   if(e.style.display == 'block'){
      e.style.display = 'none';
   }
   else{
      if(hints>0){
         e.style.display = 'block';
      }
   }
}

function close_modal(){
   e=document.getElementById("info_modal");
   document.getElementById("behindscene_modal").style.display='none';
   document.getElementById("tipp_modal").style.display='none';
   e.style.display = 'none';
}
