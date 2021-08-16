
// GLOBAL

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
    "challenge" : "Versuche mal als Erstes Informationen über den Benutzer „maxmustermann“ herauszufinden.",
    "validation"  : validate_lvl1,
    "form":"login",
    "hints"    : ["Tipp 1: '--' wird in SQL zum auskommentieren verwendet. Dies kannst du hier benutzen um den restlichen Code auszukommentieren bzw. um eine gültige  SQL Query zu erzeugen.","Tipps2"],
    "behindscene" : "",
    "lvl" : 1},
    {"text" : [{"h2": "Kommen wir zur nächsten Herausforderung",
                "h3":"",
                "img": "img/bee.png"}],
    "challenge": "Nun kennst du keinen Nutzernamen. Versuche Informationen über einen oder mehreren Nutzer/n herauszufinden.",
    "Validation"  : validate_lvl1,
    "form":"login",
    "hints"    : ["Tipp1","Tipp2"],
    "behindscene" : "",
    "lvl" : 2},
    {"text" : [{"h2": "Kommen wir zur nächsten Herausforderung",
                "h3":"",
                "img": "img/bee.png"}],
    "challenge": "Nun kennst du keinen Nutzernamen. Versuche die Tabelle 'users' zu löschen. ",
    "Validation"  : validate_lvl1,
    "form":"login",
    "hints"    : ["Tipp1","Tipp2"],
    "behindscene" : "",
    "lvl": 3},
    {"text" :[{"h2": "Kommen wir zur nächsten Herausforderung",
               "h3":"",
               "img": "img/bee.png"},
               {"h2": "",
               "h3":"Nun haben wir statt ein Login-Formular eine typische Suchleiste. Versuche hier dich per SQL-Injection reinzuhacken! Viel Spaß!",
               "img": "img/bee.png"}],
    "challenge": "Versuche...",
    "Validation"  : validate_lvl1,
    "form":"search",
    "hints"    : ["Tipp3","Tipp2"],
    "behindscene" : "",
    "lvl": 4}
];
var db= createdb();
createTableUsers(db);

//  HINTS

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
          alert("Deine Tipps sind aufgebraucht.")
       }
   }

}

// BEHIND THE SCENE

function show_behindscene(){
    var e = document.getElementById('btnboxli');
   //  var sw=document.getElementById('switcher');
   if (fails >=3){
      if(e.style.display == 'block'){
         e.style.display = 'none';
      }
      else{
         //  sw.checked=true;
         e.style.display = 'block';
      }
   }
   else{
      alert('Der Button wird erst nach 3 Fehlversuchen aktiviert.')
   }
}

// SPEAKBUBBLE

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
      console.log(bbltxtindex);
   }
}
function show_lvl(){
   document.getElementById("speakbubble_h2").innerHTML = TASKS[lvl-1].challenge;
   document.getElementById("speakbubble_h3").innerHTML = "";
   document.getElementById("next_btn").style.display = 'none';
}

// FORMS & VALIDATION

function try_login(){
   if(lvl==1){
      validate_lvl1();
   }else if(lvl==2){
      validate_lvl2();
   }else if(lvl==3){
      validate_lvl1();
   }else if(lvl==4){
      validate_lvl1();
   }else if(lvl==5){
      validate_lvl1();
   }
}
function change_form(){
   if(TASKS[lvl-1].form == "login"){
      document.getElementById('loginlabel').innerHTML= "Bitte einloggen";
      document.getElementById("username").style.display = 'block';
      document.getElementById("password").style.display = 'block';
      document.getElementById("login_btn").style.display = 'block';
      document.getElementById("suchleiste").style.display = 'none';
      document.getElementById("suche_btn").style.display = 'none';
   }else if(TASKS[lvl-1].form == "search"){
      document.getElementById('loginlabel').innerHTML= "Suche eingeben";
      document.getElementById("username").style.display = 'none';
      document.getElementById("password").style.display = 'none';
      document.getElementById("login_btn").style.display = 'none';
      document.getElementById("suchleiste").style.display = 'block';
      document.getElementById("suche_btn").style.display = 'block';
   }
}
function validate_lvl1(){
   uname=document.getElementById("username").value;
   pw=document.getElementById("password").value;
   db.transaction(
      function(transaction) {
          transaction.executeSql(
              "SELECT * FROM users WHERE username ='" + uname + "' AND password ='"+ pw + "';",[], function (transaction, results) { 
                 if(results.rows.length == 1){
                    document.getElementById('loginlabel').innerHTML= "Login war erfolgreich";
                    document.getElementById("username").style.display = 'none';
                    document.getElementById("password").style.display = 'none';
                    document.getElementById("login_btn").style.display = 'none';
                    document.getElementById("speakbubble_h2").innerHTML="Super! du hast die Herausforderung gemeistert!";
                    document.getElementById("speakbubble_h3").innerHTML="";
                    document.getElementById("next_btn").style.display = 'block';
                    document.getElementById("insect").src = "img/happybee.png";
                    fails=0;
                    lvl=lvl+1;
                    document.getElementById("lvl").innerHTML="Level: " + lvl;
                    document.getElementById('btnboxli').style.display = 'none';
                 }else{
                    fails=fails+1;
                    document.getElementById('loginlabel').innerHTML= "Login fehlgeschlagen";
                    document.getElementById("speakbubble_h2").innerHTML="Schade, das hat nicht geklappt. Versuche es erneut.";
                    document.getElementById("speakbubble_h3").innerHTML="";
                    document.getElementById("insect").src = "img/surprisebee.png";
                 }
              },function(transaction,results){
                 fails=fails+1;
                 document.getElementById('loginlabel').innerHTML= "Login fehlgeschlagen";
                 document.getElementById("speakbubble_h2").innerHTML="Schade, das hat nicht geklappt. Versuche es erneut.";
                 document.getElementById("insect").src = "img/surprisebee.png";
               }
          );
      }
   );
}
function validate_lvl2(){
   uname=document.getElementById("username").value;
   pw=document.getElementById("password").value;
   if(uname.indexOf("maxmustermann") >=0){
      console.log("hier bin ich");
      uname="";
   }
   db.transaction(
      function(transaction) {
          transaction.executeSql(
              "SELECT * FROM users WHERE username ='" + uname + "' AND password ='"+ pw + "';",[], function (transaction, results) { 
                 if(results.rows.length == 1){
                    document.getElementById('loginlabel').innerHTML= "Login war erfolgreich";
                    document.getElementById("username").style.display = 'none';
                    document.getElementById("password").style.display = 'none';
                    document.getElementById("login_btn").style.display = 'none';
                    document.getElementById("speakbubble_h2").innerHTML="Super! du hast die Herausforderung gemeistert!";
                    document.getElementById("speakbubble_h3").innerHTML="";
                    document.getElementById("next_btn").style.display = 'block';
                    document.getElementById("insect").src = "img/happybee.png";
                    fails=0;
                    lvl=lvl+1;
                    document.getElementById("lvl").innerHTML="Level: " + lvl;
                    document.getElementById('btnboxli').style.display = 'none';
                 }else{
                    fails=fails+1;
                    document.getElementById('loginlabel').innerHTML= "Login fehlgeschlagen";
                    document.getElementById("speakbubble_h2").innerHTML="Schade, das hat nicht geklappt. Versuche es erneut.";
                    document.getElementById("speakbubble_h3").innerHTML="";
                    document.getElementById("insect").src = "img/surprisebee.png";
                 }
              },function(transaction,results){
                 fails=fails+1;
                 document.getElementById('loginlabel').innerHTML= "Login fehlgeschlagen";
                 document.getElementById("speakbubble_h2").innerHTML="Schade, das hat nicht geklappt. Versuche es erneut.";
                 document.getElementById("insect").src = "img/surprisebee.png";
               }
          );
      }
   );
}
function nullDataHandler(transaction, results) { console.log("yeah"); }
 
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
// INFO MODAL 
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
   e.style.display = 'none';
}