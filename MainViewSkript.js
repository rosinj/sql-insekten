var hints=3;
var bbltxtindex=0;
var fails=0
var bbltxt = [
   ["Willkommen!","Dies ist ein SQL-Injection-Game. Mit SQL-Injections (dt. SQL-Einschleußung) kann man Websites hacken, indem man durch bestimmte SQL-Befehle auf eine Datenbank zugreift und Daten zweckentfremdet.","img/bee.jpg"],
   ["","Hier lernst du von Level zu Level wie Hacker dabei vorgehen. Vorkenntisse wie SQL wären empfehlenswert. In diesem Fall haben wir rechts ein Login-Formular, wie man es so von anderen Websiten kennt.","img/bee.jpg"],
   ["","In dem Login-Formular sollst du versuchen dich einzuhacken durch SQL-Injections. Oben wird die Anzahl deiner Tipps angezeigt, was zu Beginn 3 ist und in welchem Level du bist. Rechts unten bei 'Tipp einblenden' kannst du deinen Tipp einlösen.","img/bee.jpg"],
   ["","Unter dem Button 'Hintergrunddetails anzeigen', der bei 3 Fehlversuchen aktiviert ist, kannst du die die Live Erzeugte SQL-Query anschauen oder den Hintergrundcode.","img/bee.jpg"],
   ["Los gehts!","","img/happybee.jpg"]
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
   if(e.hidden == false){
      e.hidden = true;
   }
   else{
      if(hints>0){
         e.hidden == false;
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
   if (fails >=3){
      if(e.hidden == false){
         e.hidden == true;
      }
      else{
         //  sw.checked=true;
          e.hidden == false;
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
   document.getElementById("next_btn").hidden=true;
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
                    document.getElementById("username").hidden=true;
                    document.getElementById("password").hidden=true;
                    document.getElementById("login_btn").hidden=true;
                    document.getElementById("speakbubble_h2").innerHTML="Super! du hast die Herausforderung gemeistert!";
                    document.getElementById("next_btn").hidden=false;
                    document.getElementById("lvl").innerHTML="Level: 2";
                    fails=0;
                    console.log(fails);
                    console.log("iam in the if");
                 }else{
                    fails=fails+1;
                    document.getElementById('loginlabel').innerHTML= "Login fehlgeschlagen";
                    document.getElementById("speakbubble_h2").innerHTML="Schade, das hat nicht geklappt. Versuche es erneut.";
                    document.getElementById("insect").src = "img/surprisebee.jpg";
                    console.log(fails);
                    console.log("iam in the else");
                 }
              },function(transaction,results){
                 fails=fails+1;
                 document.getElementById('loginlabel').innerHTML= "Login fehlgeschlagen";
                 document.getElementById("speakbubble_h2").innerHTML="Schade, das hat nicht geklappt. Versuche es erneut.";
                 document.getElementById("insect").src = "img/surprisebee.jpg";
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
 
// db.transaction(
//     function (transaction) {
//         transaction.executeSql("SELECT * from users;",
//             [], // array of values for the ? placeholders
//             dataHandler, errorHandler);
//     }
// );
// function createDb() {
//    var db_name = 'db2hack';
//    var db_version = '1.0';
//    var db_describe = 'user Database for hacking';
//    var db_size = 2048;
//    var db = openDatabase(db_name, db_version, db_describe, db_size, function(db) {
//        console.log(db);
//        console.log("Database opened Successfully! Or created for the first time !");
//        createTable(db);
//    });
// }

// function createTable(db) {
//    db.transaction(function(tx) {
//        tx.executeSql('create table users(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , username TEXT NOT NULL, password TEXT NOT NULL, email TEXT NOT NULL )', [], function(transaction, result) {
//            console.log(result);
//            console.log('Table created Successfully!');
//            insertRecords(db);
//        }, function(transaction, error) {
//            console.log(error);
//        });
//    }, transError, transSuccess);
// }

// function transError(t, e) {
//    console.log(t);
//    console.log(e);
//    console.error("Error occured ! Code:" + e.code + " Message : " + e.message);
// }

// function transSuccess(t, r) {
//    console.info("Transaction completed Successfully!");
//    console.log(t);
//    console.log(r);
// }

// function insertRecords(db) {
//    if (db) {
//        db.transaction(function(tx) {
//            tx.executeSql('INSERT INTO users VALUES (0,"maxmustermann","password123","maxmustermann@examplemail.com"); ', [], function(transaction, result) {
//                console.log(result.insertId);
//            }, function(transaction, error) {
//                console.log(error);
//            });
//            tx.executeSql('INSERT INTO users VALUES (1,"alexamusterfrau","alexa12345","alexamustermann@example.de");', [], function(transaction, result) {
//                console.log(result.insertId);
//            }, function(transaction, error) {
//                console.log(error);
//            });
//            tx.executeSql('INSERT INTO users VALUES (2,"kati1809","khatrin321","kati@examplemail.com");', [], function(transaction, result) {
//                console.log(result.insertId);
//                console.log('Record inserted Successfully!');
//                displayUsers(db);
//            }, function(transaction, error) {
//                console.log(error);
//            });
//        }, transError, transSuccess);
//    } else {
//        console.log('No Database man! wait creating it for you!');
//        createDb();
//    }
// }

// function displayUsers(db) {
//    db.transaction(function(tx) {
//        tx.executeSql("SELECT * FROM users", [], function(sqlTransaction, sqlResultSet) {
//            var rows = sqlResultSet.rows;
//            var len = rows.length;
//            for (var i = 0; i < len; i++) {
//                var cur_item = rows[i]; // or u can use the item methid ---> var cur_item = rows.item(i);
//                console.log("the id is : " + cur_item.id + " the data is : " + cur_item.data);
//            }
//            console.log('Done!!!');
//          //   UpdateUser(db);
//        }, function(sqlTransaction, sqlError) {
//            switch (sqlError.code) {
//                case sqlError.SYNTAX_ERR:
//                    console.error("Syntax error has occurred. " + sqlError.message);
//                    break;
//                default:
//                    console.error("Other error");
//            }
//        });
//    }, transError, transSuccess);
// }

// function UpdateUsers(db) {
//    db.transaction(function(tx) {
//        tx.executeSql('update notes set data=? where id=?', ["rane", 1], function(transaction, result) {
//            console.log(result);
//            console.info('Record Updated Successfully!');
//            deleteNote(db);
//        }, function(transaction, error) {
//            console.log(error);
//        });
//    }, transError, transSuccess);
// }
// createDb();
// function deleteNote(db) {
//    db.transaction(function(tx) {
//        tx.executeSql('delete from notes where id=?', [1], function(transaction, result) {
//            console.log(result);
//            console.info('Record Deleted Successfully!');
//        }, function(transaction, error) {
//            console.log(error);
//        });
//    }, transError, transSuccess);
// }

// function errorHandler(transaction, error) {
//    console.log('Error: ' + error.message + ' code: ' + error.code);

// }

// // this is called when a successful transaction happens
// function successCallBack() {
//    console.log("DEBUGGING: success");
//    console.log(result);
// }

// function selectAll(){
//    db2hack.transaction(
//        function(transaction) {
//            transaction.executeSql("SELECT * FROM users", [], successCallback,errorCallback);
//    });
// }

// function retrieveData(transaction, results) {
//    for(var i = 0; i < results.rows.length; i++) {
//        var data = results.rows.item(i)['id']
//        alert(data.value);
//    }
// }