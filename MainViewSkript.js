var hints=3;
var bbltxtindex=0;
var fails=0
var bbltxt = [
   ["Willkommen!","Dies ist ein SQL-Injection-Game. Mit SQL-Injections (dt. SQL-Einschleußung) kann man Websites hacken, indem man durch bestimmte SQL-Befehle auf eine Datenbank zugreift und Daten zweckentfremdet.","img/bee.png"],
   ["","Hier lernst du von Level zu Level wie Hacker dabei vorgehen. Vorkenntisse wie SQL wären empfehlenswert. In diesem Fall haben wir rechts ein Login-Formular, wie man es so von anderen Websiten kennt.","img/bee.png"],
   ["","In dem Login-Formular sollst du versuchen dich einzuhacken durch SQL-Injections. Oben wird die Anzahl deiner Tipps angezeigt, was zu Beginn 3 ist und in welchem Level du bist. Rechts unten bei 'Tipp einblenden' kannst du deinen Tipp einlösen.","img/bee.png"],
   ["","Unter dem Button 'Hintergrunddetails anzeigen', der bei 3 Fehlversuchen aktiviert ist, kannst du die die Live Erzeugte SQL-Query anschauen oder den Hintergrundcode.","img/bee.png"],
   ["Los gehts!","","img/happybee.png"]
];
TASKS=[
   {"question" : "Versuche mal als Erstes Informationen über den Benutzer „maxmustermann“ herauszufinden.",
    "answers"  : ["...",".."],
    "hints"    : ["Tipp1","Tipps2"]},
    {"question": "Nun kennst du keinen Nutzernamen. Versuche Informationen über einen oder mehreren Nutzer/n herauszufinden.",
    "answers"  : ["..."],
    "hints"    : ["Tipp1","Tipp2"]},
    {"question": "Nun kennst du keinen Nutzernamen. Versuche die Tabelle 'users' zu löschen. ",
    "answers"  : ["..."],
    "hints"    : ["Tipp1","Tipp2"]}
];
try {
   if (!window.openDatabase) {
      // https://caniuse.com/indexeddb https://caniuse.com/?search=web%20sql
       alert('not supported');
   } else {
       var shortName = 'db2hack';
       var version = '1.0';
       var displayName = 'user Database for hacking';
       var maxSize = 65536; // in bytes
       var db = openDatabase(shortName, version, displayName, maxSize);

       // You should have a database instance in db.
   }
} catch(e) {
   // Error handling code goes here.
   if (e == 2) {
       // Version number mismatch.
       alert("Invalid database version.");
   } else {
       alert("Unknown error "+e+".");
   }
   // return;
}

createTables(db);
db.transaction(
   function (transaction) {

       transaction.executeSql('INSERT INTO users VALUES (0,"maxmustermann","password123","maxmustermann@examplemail.com");', [], nullDataHandler, errorHandler);
       transaction.executeSql('INSERT INTO users VALUES (1,"alexamusterfrau","alexa12345","alexamustermann@example.de");', [], nullDataHandler, errorHandler);
       transaction.executeSql('INSERT INTO users VALUES (2,"kati1809","khatrin321","kati@examplemail.com");', [], dataHandler, dataHandler);
   }
);

// createTable(db2hack);
// insertRecords(db2hack);
// displayUsers(db2hack);
// DATA=[
//    {"_id":"1","username": "maxmustermann", "password":"password123","email":"maxmustermann@examplemail.com"},
//    {"_id":"2","username": "alexamusterfrau", "password":"alexa12345","email":"alexamustermann@example.de"},
//    {"_id":"3","username": "kati1809", "password":"khatrin321","email":"kati@examplemail.com"}
// ];
// var db2hack = openDatabase('userdbhack', '1.0', 'user Database for hacking', 2 * 1024 * 1024);
// db2hack.transaction(
//    function(transaction) {
//        transaction.executeSql(
//            'CREATE TABLE IF NOT EXISTS users ' +
//            '  (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
//            '   username TEXT NOT NULL, password TEXT NOT NULL, email TEXT NOT NULL );'
//        );
//    }
// );
// db2hack.transaction(
//    function(transaction) {
//        transaction.executeSql(
//            'INSERT INTO users VALUES ("maxmustermann","password123","maxmustermann@examplemail.com"); ' +
//            'INSERT INTO users VALUES ("alexamusterfrau","alexa12345","alexamustermann@example.de"); '+
//            'INSERT INTO users VALUES ("kati1809","khatrin321","kati@examplemail.com"); '
//        );
//    }
// );
function show_hints(){
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
function speakbubble_next(){
   bbltxtindex=bbltxtindex+1;
   document.getElementById("speakbubble_h2").innerHTML = bbltxt[bbltxtindex][0];
   document.getElementById("speakbubble_h3").innerHTML = bbltxt[bbltxtindex][1];
   document.getElementById("insect").src = bbltxt[bbltxtindex][2];
   if(bbltxtindex == bbltxt.length -1){
      show_lvl();
   }


}
function show_lvl(){
   document.getElementById("speakbubble_h2").innerHTML = TASKS[0].question;
   // document.getElementById("speakbubble_h3").innerHTML = TASKS[0][1];
   // document.getElementById("insect").src = TASKS[0][2];
   document.getElementById("next_btn").style.display = 'none';
}

function try_login(event){
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
                    document.getElementById("lvl").innerHTML="Level: 2";
                    fails=0;
                    document.getElementById('btnboxli').style.display = 'none';
                    console.log(fails);
                    console.log("iam in the if");
                 }else{
                    fails=fails+1;
                    document.getElementById('loginlabel').innerHTML= "Login fehlgeschlagen";
                    document.getElementById("speakbubble_h2").innerHTML="Schade, das hat nicht geklappt. Versuche es erneut.";
                    document.getElementById("speakbubble_h3").innerHTML="";
                    document.getElementById("insect").src = "img/surprisebee.png";
                    console.log(fails);
                    console.log("iam in the else");
                 }
              },function(transaction,results){
                 fails=fails+1;
                 document.getElementById('loginlabel').innerHTML= "Login fehlgeschlagen";
                 document.getElementById("speakbubble_h2").innerHTML="Schade, das hat nicht geklappt. Versuche es erneut.";
                 document.getElementById("insect").src = "img/surprisebee.png";
                 console.log(fails);
                 console.log("iam the error function");
               }
          );
      }
   );
   console.log("iam the end")
}
function nullDataHandler(transaction, results) { console.log("yeah"); }
 
function createTables(db)
{
    db.transaction(
        function (transaction) {
 
            /* The first query causes the transaction to (intentionally) fail if the table exists. */
            transaction.executeSql('create table users(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , username TEXT NOT NULL, password TEXT NOT NULL, email TEXT NOT NULL );', [], nullDataHandler, errorHandler);
            /* These insertions will be skipped if the table already exists. */
            transaction.executeSql('INSERT INTO users VALUES (0,"maxmustermann","password123","maxmustermann@examplemail.com");', [], nullDataHandler, errorHandler);
            transaction.executeSql('INSERT INTO users VALUES (1,"alexamusterfrau","alexa12345","alexamustermann@example.de");', [], nullDataHandler, errorHandler);
            transaction.executeSql('INSERT INTO users VALUES (2,"kati1809","khatrin321","kati@examplemail.com");', [], nullDataHandler, errorHandler);
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