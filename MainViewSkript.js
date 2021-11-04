
//////////////// GLOBAL
//https://dbfiddle.uk/?rdbms=oracle_18&fiddle=10f4b401db4a17a7b16677a0acf40231

var hints=3;
var bbltxtindex=0;
var hintperlvl=1;
// var fails=0
var cheatactive=false;
var task_index=0;
TASKS=[
   {"text": [],
    "challenge" : "Versuche als Erstes dich ganz normal als 'alexamusterfrau' mit einem Passwort einzuloggen, wie man es normalerweise kennt. Da du ihr Passwort nicht kennst, gib einfach irgendwas ein.",
    "validation"  : [{"validationquery": [""],
                      "validationerror":"",
                      "truecondition":"results.rows.length > 0  && queries[j].includes('benutzer')",
                      "correctanswer":["true","true","true","true"],
                      "speakbblanswer":["Super! Du hast verstanden wie das Login-Formular funktioniert. ","Super! Du hast verstanden wie das Login-Formular funktioniert."],
                      "imganswer":["img/happybee.png","img/happybee.png"],
                      "whitelist": [""],
                      "blacklist": [""]}],
    "form":"login",
    "hints"    : ["hints deactivated"],
    "behindscene" : "",
    "lvl" : 1},
   {"text": [{"h2": "Ok, jetzt geht's aber wirklich los! ",
              "h3":"",
              "img": "img/happybee.png"}],
    "challenge" : "Versuche dich als 'alexamusterfrau' einzuloggen, ohne ihr Passwort zu kennen. Vergiss nicht, wie am Anfang erwähnt, Apostrophe und SQL-Kommentare geschickt zu nutzen und dir die Hintergrunddetails anzuschauen!",
    "validation"  : [{"validationquery": [""],
                      "validationerror":"",
                      "truecondition":"results.rows.length > 0 && queries[j].includes('benutzer') && results.rows.item(0)['benutzername']=='alexamusterfrau'",
                      "correctanswer":["true","false","error","error"],
                      "speakbblanswer":["Super! Du hast die Herausforderung gemeistert! ","Schade, das hat leider nicht geklappt. Versuche es erneut dich als 'alexamusterfrau' einzuloggen."],
                      "imganswer":["img/happybee.png","img/surprisebee.png"],
                      "whitelist": ["alexamusterfrau"],
                      "blacklist": ["maxmustermann"]}],
    "form":"login",
    "hints"    : ["Wie du es in den Hintergrunddetails siehst, ist vor der Eingabevariable 'uname' ein Apostroph zu finden. D.h. nachdem du den Benutzernamen in das Eingabefeld eingegeben hast brauchen wir noch ein Apostroph um den String zu beenden. Danach interessiert uns die restliche Query nicht, daher kommentieren wir sie aus."],
    "behindscene" : "",
    "lvl" : 1},
    {"text" : [{"h2": "Kommen wir zur nächsten Herausforderung!",
    "h3":"",
    "img": "img/bee.png"}],
   "challenge": "Versuche die Tabelle 'benutzer' zu droppen. <br> <h3> Im Hintergrund wird zwar eigentlich nur eine Query ausgeführt, aber wenn du eine Query mit ';' beendest kannst du eine weitere Query einschleußen. Lass dich übrigens nicht davon irritieren, wenn der Login fehlschlägt oder eine Fehlermeldung auftaucht. </h3>",
   "validation"  : [{"validationquery": ["SELECT benutzername FROM benutzer"],
                     "validationerror":"could not prepare statement (1 no such table: benutzer)",
                     "truecondition":"results.rows.length > 0",
                     "correctanswer":["false","false","true","error"],
                     "speakbblanswer":["Super! Du hast die Herausforderung gemeistert! ","Schade, das hat leider nicht geklappt. Versuche erneut die Tabelle 'benutzer' zu droppen."],
                     "imganswer":["img/happybee.png","img/surprisebee.png"],
                     "whitelist": [""],
                     "blacklist": [""]}],
   "form":"login",
   "hints"    : ["Nehme die Lösung von Level 1 und quetsche dazwischen einen DROP-TABLE-Befehl. Mit Semikolon trennst du verschiedene Queries voneinander."],
   "behindscene" : "",
   "lvl": 2},
    {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an. <br> <br> <br> ",
                "h3":"",
                "img": "img/happybee.png"},
               ],
    "challenge": "Nun kennst du keinen Nutzernamen. Versuche dich trotzdem mit einem User einzuloggen.",
    "validation"  : [{"validationquery": [""],
                      "validationerror":"",
                      "truecondition":"results.rows.length > 0 && queries[j].includes('benutzer') && ['alexamusterfrau','maxmustermann','kati1809'].includes(results.rows.item(0)['benutzername'])",
                      "correctanswer":["true","false","error","error"],
                      "speakbblanswer":["Super! Du hast die Herausforderung gemeistert! ","Schade, das hat leider nicht geklappt. Versuche erneut dich einzuloggen ohne einen Nutzer zu kennen."],
                      "imganswer":["img/happybee.png","img/surprisebee.png"],
                      "whitelist": [""],
                      "blacklist": ["maxmustermann","alexamusterfrau"]}],
    "form":"login",
    "hints"    : ["Wir müssen die Query so geschickt erzeugen, dass sie mind. eine Zeile ausgibt. Wenn wir die erste WHERE Bedingung leer lassen und eine zweite mit OR hinzufügen die immer wahr ist, können wir wieder mit '--' den restlichen Code auskommentieren und haben somit eien Query erzeugt, die alle User ausgeben würde."],
    "behindscene" : "",
    "lvl" : 3},
    {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an.",
                "h3":"",
                "img": "img/bee.png"},
                {"h2": "",
                "h3":"Die Softwareentwickler haben eine Lücke in ihrem Code entdeckt. Nun wird man erst eingeloggt, wenn es wirklich nur einen Benutzer mit dem Namen und Passwort gibt. Das heißt für dich: Du kannst nur noch Queries erzeugen, die eine Zeile im Ergebnis ausgeben. <br> <br> <br>",
                "img": "img/bee.png"}
               ],
    "challenge": "Ohne einen Nutzernamen zu kennen versuchst du dich wieder mit irgendeinem User einzuloggen.",
    "validation"  : [{"validationquery": [""],
                      "validationerror":"",
                      "truecondition":"results.rows.length == 1 && queries[j].includes('benutzer') && ['alexamusterfrau','maxmustermann','kati1809'].includes(results.rows.item(0)['benutzername'])",
                      "correctanswer":["true","false","error","error"],
                      "speakbblanswer":["Super! Du hast die Herausforderung gemeistert! ","Schade, das hat leider nicht geklappt. Versuche erneut dich einzuloggen ohne einen Nutzer zu kennen. <br> Vergiss nicht, dass deine Query nur eine Zeile im Ergebnis ausgeben darf."],
                      "imganswer":["img/happybee.png","img/surprisebee.png"],
                      "whitelist": [""],
                      "blacklist": ["maxmustermann","alexamusterfrau"]}],
    "form":"login",
    "hints"    : ["Diese Aufgabe ist ähnlich wie die davor nur, dass du versuchen musst EINE Zeile auszugeben und nicht mehr. Vorher hätte die Query die ganze Tabelle ausgegeben, aber die Sicherheitsbedingungen waren so schwach, dass die Länge der Ergebnisse egal war. Mit LIMIT kannst du nun am Ende einer Query entscheiden, wie viele Zeilen die Query ausgeben soll."],
    "behindscene" : "",
    "lvl" : 4},
    {"text" :[{"h2": "Kommen wir zur nächsten Herausforderung  <br>",
    "h3":"",
    "img": "img/bee.png"},
    {"h2": "",
    "h3":"Nun haben wir statt eines Login-Formulars eine typische Suchleiste. In diesem Fall von einem Online-Shop für Schuhe. Versuche hier dich per SQL-Injection reinzuhacken! Viel Spaß! ",
    "img": "img/bee.png"}],
   "challenge": "Versuche erstmal ganz normal nach Schuhen der Marke 'Nicke' zu suchen. ",
   "validation"  : [{"validationquery": [""],
                     "validationerror":"",
                     "truecondition":"results.rows.length == 4 && queries[j].includes('schuhe')",
                     "correctanswer":["true","false","error","error"],
                     "speakbblanswer":["Super! Du hast verstanden wie die Produktsuche funktioniert. ","Schade, das hat leider nicht geklappt. Suche nach den Schuhen 'Nicke'"],
                     "imganswer":["img/happybee.png","img/surprisebee.png"],
                     "whitelist": [""],
                     "blacklist": [""]}],
   "form":"search",
   "hints"    : ["hints deactivated"],
   "behindscene" : "",
   "lvl": 5},
   {"text" :[{"h2": "Kommen wir zur nächsten Herausforderung!  <br>",
   "h3":"",
   "img": "img/bee.png"}],
   "challenge": "Gebe mir den Benutzernamen und das Passwort aller User aus.",
   "validation"  : [{"validationquery": [""],
                     "validationerror":"",
                     "truecondition":"results.rows.length == 3 && queries[j].includes('benutzer')  && queries[j].includes('benutzername') && queries[j].includes('passwort') ",
                     "correctanswer":["true","false","error","error"],
                     "speakbblanswer":["Super! Du hast es geschafft! <br> <h3>Wenigstens speichert die Website die Passwörter nicht in Klartext, sondern als Hashwert, der aus dem Passwort generiert wird. Aber durch frei zugängliche sog. Rainbow-Tables konnte ich trotzdem herausfinden, dass das Passwort von maxmustermann 'password123' ist.</h3>","Schade, das hat leider nicht geklappt. Versuche erneut Benutzername und Passwort aller Benutzer auszugeben."],
                     "imganswer":["img/happybee.png","img/surprisebee.png"],
                     "whitelist": [""],
                     "blacklist": [""]}],
   "form":"search",
   "hints"    : ["Wie vorher kannst du mit ';' eine neue Query anfangen, nur dass die Tabelle 'benutzer' heißt und folgende Spalten hat: 'nutzer_id', 'benutzername', 'passwort','email'."],
   "behindscene" : "",
   "lvl": 5},
    {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an und zurück zum Login-Formular! <br> Irgendjemand arbeitet doch hinter dieser Website. Dann gibt es vielleicht auch eine Mitarbeiter-Tabelle in der Datenbank. ",
    "h3":"",
    "img": "img/bee.png"},
    {"h2": "",
    "h3":"Beim Login-Formular ist die einzige Informationsausgabe die wir bekommen, dass wir uns erfolgreich mit einem User eingeloggt haben (z.B. Willkommen maxmustermann!). D.h. um Informationen einer anderen Tabelle auszugeben musst du den 'benutzername' der Tabelle 'benutzer' manipulieren.",
    "img": "img/bee.png"}
   ],
   "challenge": "Ich will wissen wie viel Lohn die Mitarbeiterin mit dem Vornamen 'Greta Maria' bekommt. <br> Damit das funktioniert musst du den Spaltennamen der Tabelle 'mitarbeiter' umbenennen.",
   "validation"  : [{"validationquery": [""],
            "validationerror":"",
            "truecondition":"results.rows.length == 1 && queries[j].includes('mitarbeiter') && results.rows.item(0)['benutzername']==4500",
            "correctanswer":["true","false","error","error"],
            "speakbblanswer":["Super! Du hast die Herausforderung gemeistert! <br> Die Greta bekommt ja ganz schön viel Geld.","Schade, das hat leider nicht geklappt. Versuche erneut herauszufinden wieviel Greta Maria verdient. <br> Zur Info: Du wirst die Spalte 'benutzername' von 'benutzer' benötigen und 'lohn','vorname' von der Tabelle 'mitarbeiter'"],
            "imganswer":["img/happybee.png","img/surprisebee.png"],
            "whitelist": [""],
            "blacklist": ["maxmustermann","alexamusterfrau"]}],
   "form":"login",
   "hints"    : ["Wie bei dem Level wo du eine Tabelle löschen solltest, fängst du mit Semikolon eine neue Query an und selektierst 'lohn' von Tabelle 'mitarbeiter' mit der Bedingung, dass der 'vorname' = 'Greta Maria' ist. Wichtig: Wenn man eingeloggt ist gibt er den 'benutzername' aus d.h. er sucht bei deiner Query nach der Spalte 'benutzername' und wird sie nicht finden, daher müssen wir die Spalte 'lohn' mit 'as' auf 'benutzername' umbenennen."],
   "behindscene" : "",
   "lvl" : 6},
   {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an. <br> In diesem Level sind wir wieder beim Schuhe-Onlineshop mit der Suchleiste.",
   "h3":"",
   "img": "img/bee.png"},
   {"h2": "Den Softwareentwicklern ist aufgefallen, dass Hacker mit ';' neue Queries in Eingabefelder einschleußen können, daher haben sie ';' im Input verboten.",
   "h3":"",
   "img": "img/bee.png"}
  ],
  "challenge": "Ich will von allen Mitarbeitern folgendes wissen: Name, E-Mail Adresse, Verdienst und seit wann sie in diesem Unternehmen arbeiten. <br> <h3>Die Tabelle hat folgende Spaltennamen: 'ma_id', 'name','vorname','email','lohn' & 'angestellt_seit'. Achtung: Semikolons sind nicht mehr erlaubt. </h3>",
  "validation"  : [{"validationquery": [""],
           "validationerror":"",
           "truecondition":"results.rows.length == 6 && queries[j].includes('mitarbeiter')",
           "correctanswer":["true","false","error","error"],
           "speakbblanswer":["Super! Du hast die Herausforderung gemeistert! ","Schade, das hat leider nicht geklappt. Versuche erneut name, email, lohn und angestellt_seit der Mitarbeitertabelle durch Vereinigung zweier Queries auszugeben."],
           "imganswer":["img/happybee.png","img/surprisebee.png"],
           "whitelist": [""],
           "blacklist": ["maxmustermann","alexamusterfrau",";"]}],
  "form":"search",
  "hints"    : ["Queryergebnisse kann man ähnlich wie Mengen behandeln. Wenn du also keine neue Query mit Semikolon anfangen kannst, versuche deine Query mit UNION zu erweitern. Mit UNION kannst du 2 Queries vereinigen. Nach dem UNION Befehl kannst du ganz normal eine neue Query anfangen. Nur muss die Spaltenanzahl beider Datenmengen gleichgroß sein."],
  "behindscene" : "",
  "lvl" : 7},
   {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an.",
               "h3":"",
               "img": "img/bee.png"},
               {"h2": "In der Realität weiß man gar nicht, wie die Tabellen der Datenbank und deren Spalten heißen. Finden wir es heraus! <br> <br> <br>",
               "h3":"",
               "img": "img/bee.png"},
               {"h2": "",
               "h3":"Bei den meisten Datenbankmanagementsystemen (DBMS) gibt es eine interne Tabelle mit Metadaten. Diese beinhaltet alle Informationen über Tabellen und Views in einer Datenbank. <br>",
               "img": "img/bee.png"},
               {"h2": "",
               "h3":"Bei Oracle heißt sie sys.user_tables(table_id, table_name, num_rows,...), bei MySQL, SQL Server, PostgreSQL heißt sie information_schema.tables(table_name, table_type, table_rows,...) und bei SQLLite kann man mit der Tabelle sqlite_master(type, name, tbl_name,...) das gleiche erzielen.  <br>",
               "img": "img/bee.png"}
   ],
   "challenge": "Finde durch rumprobieren heraus, mit welcher Datenbank wir es zu tun haben und gib die Metadaten aus. <br> <h4>Zur Erinnerung: Oracle: sys.user_tables(table_id, table_name, num_rows,...) <br> MySQL, SQL Server, PostgreSQL: information_schema.tables(table_name, table_type, table_rows,...) <br> SQLLite:  sqlite_master(type, name, tbl_name,...). </h4> ",
   "validation"  : [{"validationquery": [""],
            "validationerror":"",
            "truecondition":"results.rows.length == 4 && queries[j].includes('information_schema')",
            "correctanswer":["true","false","error","error"],
            "speakbblanswer":["Super! Du hast die Herausforderung gemeistert! <br> Nun wissen wir, welche Tabelle die Datenbank besitzt!","Schade, das hat leider nicht geklappt. Versuche erneut alle Tabellen-Metadaten auszugeben. <br> <h4>Zur Erinnerung: <br> Oracle: sys.user_tables(table_id, table_name, num_rows,...) <br> MySQL, SQL Server, PostgreSQL: information_schema.tables(table_name, table_type, table_rows,...) <br> SQLLite:  sqlite_master(type, name, tbl_name,...). </h4>"],
            "imganswer":["img/happybee.png","img/surprisebee.png"],
            "whitelist": ["tables"],
            "blacklist": ["maxmustermann","alexamusterfrau",";","sqlite_master"]}],
   "form":"search",
   "hints"    : ["Mit UNION fängst du eine neue Query an. Nun probierst du mit den erwähnten Tabellen eine 'SELECT * FROM' Query zu erzeugen, wobei die erwähnten Tabellennamen selektiert werden müssen, da bei UNION die Spaltendimensionen gleich sein sollen. Die Tabelle Schuhe hat 4 Spalten und die andere 3, d.h. du selektierst eine zusätzliche Scheinspalte. Z.B: SELECT table_id, table_name, num_rows, 'test' FROM ..."],
   "behindscene" : "",
   "lvl" : 8},
   {"text" : [{"h2": "Oh! Hast du das gesehen? Da war eine Tabelle aufgelistet, die wir ja noch gar nicht kennen. Wie interessant! ",
   "h3":"",
   "img": "img/happybee.png"},
   {"h2": "Es gibt auch eine Tabelle, wo alle Spalten jeder Tabelle in der Datenbank gespeichert sind. Beim googeln habe ich herausgefunden, dass sie in unserem Fall information_schema.columns (table_name, column_name, data_type) heißt. ",
   "h3":"",
   "img": "img/bee.png"}
   ],
   "challenge": "Aus der vorherigen Ausgabe kam heraus, dass eine Kunden-Tabelle existiert. Ich will wissen, welche Spalten diese Tabelle hat. <br> <h3>Zur Erinnerung: die Tabelle mit Informationen zu den Spalten heißt information_schema.columns (table_name, column_name, data_type). </h3>",
   "validation"  : [{"validationquery": [""],
                     "validationerror":"",
                     "truecondition":"results.rows.length == 5 && queries[j].includes('information_schema') && Object.values(results.rows.item(0)).includes('adresse') && Object.values(results.rows.item(1)).includes('bestellnr') && Object.values(results.rows.item(2)).includes('email') && Object.values(results.rows.item(3)).includes('kunden_id') && Object.values(results.rows.item(4)).includes('name')",
                     "correctanswer":["true","false","error","error"],
                     "speakbblanswer":["Super! Du hast die Herausforderung gemeistert! ","Schade, das hat leider nicht geklappt. Versuche erneut die Spalten der Tabelle 'kunden' auszugeben.  <br> <h3>Zur Erinnerung: die Tabelle mit Informationen zu den Spalten heißt information_schema.columns (table_name, column_name, data_type).</h3>"],
                     "imganswer":["img/happybee.png","img/surprisebee.png"],
                     "whitelist": ["columns"],
                     "blacklist": ["maxmustermann","alexamusterfrau",";","sqlite_master"]}],
   "form":"search",
   "hints"    : ["Mit UNION fängst du eine neue Query an. Als Tabelle nutzt du die vorgegebene 'information_schema.columns' und in der WHERE-Bedingung geben wir ein, dass wir nur die Spalten von der Tabelle 'kunden' wollen, also table_name='kunden'. Da aber die Tabelle Schuhe 4 Spalten besitzt und die, die wir nutzen wollen nur 3, müssen wir eine Scheinspalte nach der UNION Anweisung dranhängen, damit die Spaltendimensionen gleich groß sind. Zum Beispiel: SELECT table_name, column_name, data_type, null FROM ..."],
   "behindscene" : "",
   "lvl" : 9},
   {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an.",
               "h3":"",
               "img": "img/bee.png"},
               {"h2": "Nicht immer findet man auf einer Website eine Suchleiste oder ein Login-Formular. Daher probieren wir es aus auch mal die URL zu manipulieren<br> <br>",
               "h3":"",
               "img": "img/bee.png"},
               {"h2": "Nun haben wir eine URL-Leiste von dem Schuhe-Onlineshop. Sie funktioniert ähnlich wie die Suchleiste, nur kommt nach dem letzten Slash die WHERE Bedingung. <br> <br>",
               "h3":"",
               "img": "img/bee.png"},
               {"h2": "Die Produktseite gibt nur ein eindeutiges Ergebnis aus, daher darf deine Query nicht mehr als eine Zeile ausgeben. <br> <br>",
               "h3":"",
               "img": "img/bee.png"}
    ],
   "challenge": "Mal schauen, ob du es einigermaßen verstanden hast. Vordefiniert wird der Schuh mit der produkt_id=0 ausgewählt. Gib mal eine andere Id ein.  ",
   "validation"  : [{"validationquery": [""],
            "validationerror":"",
            "truecondition":"results.rows.length == 1 && queries[j].includes('schuhe') && !queries[j].includes('produkt_id=0')",
            "correctanswer":["true","false","error","error"],
            "speakbblanswer":["Super! Jetzt weißt du wie der URL-Aufruf funktioniert. ","Schade, das hat leider nicht geklappt. Versuche erneut nach dem letzten Slash, wenn nicht vorhanden, '?produkt_id=' und eine andere Zahl einzugeben. "],
            "imganswer":["img/happybee.png","img/surprisebee.png"],
            "whitelist": [""],
            "blacklist": ["maxmustermann","alexamusterfrau",";"]}],
   "form":"url",
   "hints"    : ["hints deactivated"],
   "behindscene" : "",
   "lvl" : 10},
   {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an.",
               "h3":"",
               "img": "img/bee.png"}
               ],
   "challenge": "Gib mir den Namen, die E-mail und die Adresse des Kunden mit der 'kunden_id' =3 aus. <br><h3> Zur Erinnerung: Die Tabelle hat folgende Spaltennamen: 'kunden_id', 'name','email','bestellnr' & 'adresse'. </h3>",
   "validation"  : [{"validationquery": [""],
            "validationerror":"",
            "truecondition":"results.rows.length == 1 && queries[j].includes('kunden') && Object.values(results.rows.item(0)).includes('dietmar0123@exm.com') && Object.values(results.rows.item(0)).includes('Seestr. 18') && Object.values(results.rows.item(0)).includes('Dimitri Muster')",
            "correctanswer":["true","false","error","error"],
            "speakbblanswer":["Super! Du hast die Herausforderung gemeistert! ","Schade, das hat leider nicht geklappt. Versuche erneut die Adresse, den Namen und die E-Mail des Kunden mit der id 3 rauszukriegen. <br> <h3>Zur Erinnerung: Die Tabelle hat folgende Spaltennamen: 'kunden_id', 'name','email','bestellnr' & 'adresse'.</h3>"],
            "imganswer":["img/happybee.png","img/surprisebee.png"],
            "whitelist": [""],
            "blacklist": ["maxmustermann","alexamusterfrau",";"]}],
   "form":"url",
   "hints"    : ["Queryergebnisse kann man ähnlich wie Mengen behandeln. Wenn du also keine neue Query mit Semikolon anfangen kannst, versuche deine Query mit UNION zu erweitern. Mit UNION kannst du 2 Queries vereinigen. Nach dem UNION Befehl kannst du ganz normal eine neue Query anfangen. Nur muss die Spaltenanzahl beider Datenmengen gleichgroß sein. D.h. Deine Query darf nur 3 Spalten ausgeben."],
   "behindscene" : "",
   "lvl" : 10},
   {"text" : [],
  "challenge": "Super! Du hast das Spiel durchgespielt! ",
  "validation"  : [{"validationquery": [""],
           "validationerror":"",
           "truecondition":"false",
           "correctanswer":["true","false","error","error"],
           "speakbblanswer":["Super! Du hast das Spiel durchgespielt! ","Super! Du hast das Spiel durchgespielt! "],
           "imganswer":["img/happybee.png","img/surprisebee.png"],
           "whitelist": [""],
           "blacklist": ["maxmustermann","alexamusterfrau"]}],
  "form":"url",
  "hints"    : ["hints deactivated"],
  "behindscene" : "",
  "lvl" : 10}
];
var db= createdb();
createTableUsers(db);
createTableShoes(db);
createTableMa(db);
createTableTables(db);
createTableColumns(db);
createTableKunden(db);
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
   }else if(hintperlvl <= 0){
      document.querySelector("#modal > div >h5 ").innerHTML = 'Es gibt pro Level nur einen Tipp.';
      document.getElementById("modal").style.display='block';
   }else{
      if(hints>0){
         e.style.display = 'block';
      }
      hintperlvl=hintperlvl-1
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
   // if (fails >=3){
      if(e.style.display == 'block'){
         e.style.display = 'none';
      }
      else{
         e.style.display = 'block';
         change_codemode();
      }
   // }
   // else{
   //    document.querySelector("#modal > div >h5 ").innerHTML ='Der Button wird erst nach 3 Fehlversuchen aktiviert.';
   //    document.getElementById("modal").style.display='block';

   // }
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
            // console.log("couldn't update codetext");
   
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
   createTableColumns(db);
   createTableKunden(db);
   generate_query();
}

function change_form(){
   document.getElementsByClassName("form-signin")[0].style.height="auto";
   document.getElementById("sneaker_img").style.display='none';
   document.getElementById("url_output").style.display='none';
   document.getElementById("loginlabel").style.textAlign = 'left';
   document.getElementById("suchergebnisse").style.display = 'none';
   if(TASKS[task_index].form == "login"){
      document.getElementById('loginlabel').innerHTML= "Bitte einloggen";
      document.getElementById("username").style.display = 'block';
      document.getElementById("password").style.display = 'block';
      document.getElementById("login_btn").style.display = 'block';
      document.getElementById("suchleiste").style.display = 'none';
      document.getElementById("suche_btn").style.display = 'none';
      document.getElementById("logout_btn").style.display = 'none';
      document.getElementById("url").style.display = 'none';
      document.getElementsByClassName("form-signin")[0].style.maxWidth="28%";
   }else if(TASKS[task_index].form == "search"){
      document.getElementById('loginlabel').innerHTML= "Produktsuche";
      document.getElementById("username").style.display = 'none';
      document.getElementById("password").style.display = 'none';
      document.getElementById("login_btn").style.display = 'none';
      document.getElementById("suchleiste").style.display = 'block';
      document.getElementById("suche_btn").style.display = 'block';
      document.getElementById("logout_btn").style.display = 'none';
      document.getElementsByClassName("form-signin")[0].style.maxWidth="43%";
      document.getElementById("url").style.display = 'none';
   }else if(TASKS[task_index].form == "url"){
      document.getElementById('loginlabel').innerHTML= "URL";
      document.getElementById("loginlabel").style.textAlign = 'center';
      document.getElementById("username").style.display = 'none';
      document.getElementById("password").style.display = 'none';
      document.getElementById("login_btn").style.display = 'none';
      document.getElementById("suchleiste").style.display = 'none';
      document.getElementById("suche_btn").style.display = 'none';
      document.getElementById("logout_btn").style.display = 'none';
      document.getElementById("url").style.display = 'block';
      document.getElementById("url_output").style.display = 'block';
      document.getElementById("sneaker_img").style.display = 'block';
      document.getElementsByClassName("form-signin")[0].style.maxWidth="60%";
      document.getElementById('url').value = "https://sql-insekten.oth-rgb.de/index.php?produkt_id=0";
      document.getElementById("marke").innerHTML= "<strong>Marke:   </strong> Nicke"
      document.getElementById("groesse").innerHTML= "<strong>Größe:   </strong> 40";
      document.getElementById("price").innerHTML= "<strong>Preis:     </strong> 80€";
   }
}

function validation(){
   var ergebnis=new Array();
   var lenminus=0;
   var qu = new Array();
   var correctanswer = new Array();
   var querysucessful = new Array();
   var form=TASKS[task_index].form;
   var query=generate_query();
   if(TASKS[task_index].validation[0].blacklist.includes(";")){
      queries=[query];
   }else{
      queries=query.split("--")[0];
      queries=queries.split(";");
   }
   if(TASKS[task_index].validation[0].validationquery[0] !="" && query!="notvalid"){
      // query=query + ";" + TASKS[task_index].validation[0].validationquery[0];
      queries.push(TASKS[task_index].validation[0].validationquery[0]);
   }

   var prom= new Promise((resolve,reject) =>{

      for (let j in queries){
         var prom2= new Promise((resolve,reject) =>{
         if(!queries[j].trim().startsWith("--") && queries[j].trim()!=""){
            db.transaction(function(transaction) {
               transaction.executeSql(queries[j],[],function (transaction, results) {
                  if (eval(TASKS[task_index].validation[0].truecondition)) {
                     querysucessful[j]="true";
                     if(is_query_valid(queries[j])){
                        correctanswer[j] = TASKS[task_index].validation[0].correctanswer[0];
                     }else{
                        correctanswer[j]="false";
                        if(';' in TASKS[task_index].validation[0].blacklist){
                           querysucessful[j]="semi";
                     
                        }
                     }
                  } else {
                     querysucessful[j]="false";
                     correctanswer[j] = TASKS[task_index].validation[0].correctanswer[1];
                  }
                  ergebnis[j]= results;
                  if(queries[j].includes("sqlite_master")){
                     querysucessful[j]="error";
                  }
                  resolve(correctanswer,ergebnis,querysucessful);

                  },function(transaction,error){
                     if(TASKS[task_index].validation[0].validationquery[0] !="" && error.message==TASKS[task_index].validation[0].validationerror){
                        correctanswer[j] = TASKS[task_index].validation[0].correctanswer[2];
                     }else{
                        correctanswer[j] = TASKS[task_index].validation[0].correctanswer[3];
                     }
                     ergebnis[j]="error";
                     querysucessful[j]="error";
                     if(TASKS[task_index].validation[0].blacklist.includes(";") && queries[j].includes(";")){
                        querysucessful[j]="semi";
                     }
                     resolve(correctanswer,ergebnis,querysucessful);
                              }
                        );
                     }
                  );
          }else{lenminus=lenminus+1;}
         })
         prom2.then(response=>{
            qu[j]=queries[j];
            if(queries.length-lenminus==correctanswer.filter(String).length){resolve(correctanswer,ergebnis,querysucessful,qu);}

         });
      }
   })
   prom.then(response =>{
      var correct=answer(correctanswer);
      form_success(form,ergebnis, querysucessful,correct[0], correct[1],qu);
      
      
   });
   prom.catch(error => {
      false_answer(form);
      });
}
function generate_query(){
   var form=TASKS[task_index].form;
   switch (form){
      case "login":
         var uname=document.getElementById("username").value;
         var pw=document.getElementById("password").value;
         var select="SELECT benutzername ";
         var from="FROM benutzer ";
         var where="WHERE benutzername ='" + uname + "' AND passwort ='"+ pw + "';";
         document.querySelector("#codetxt > code").innerHTML = select + "\n" +
                                                               from   +"\n" +
                                                               where;
         var query="SELECT benutzername FROM benutzer WHERE benutzername ='" + uname + "' AND passwort ='"+ pw + "'";
      break;
      case "search":
         var search=document.getElementById("suchleiste").value;
         var query="SELECT produkt_id, marke, groesse, preis FROM schuhe WHERE marke='" + search + "'";
         var select="SELECT produkt_id, marke, groesse, preis ";
         var from="FROM schuhe ";
         var where="WHERE marke='" + search + "';";
         document.querySelector("#codetxt > code").innerHTML = select + "\n" +
                                                               from   +"\n" +
                                                               where;
         break;
      case "url":
         var url=document.getElementById("url").value;
         var id=url.toString().split('?');
         var query="SELECT marke, groesse, preis FROM schuhe WHERE " + id[id.length-1]+"";
         var select="SELECT produkt_id, marke, groesse, preis ";
         var from="FROM schuhe ";
         var where="WHERE " + id[id.length-1]+";";
         document.querySelector("#codetxt > code").innerHTML = select + "\n" +
                                                               from   +"\n" +
                                                               where;
         break;
      default:
         // console.log("Error:.");
   }
   // document.querySelector("#codetxt > code").innerHTML = query + ";";
   document.querySelector("#codetxt > code").innerHTML.reload;
   if(query.includes("information_schema.tables") ){
      query=query.replace(".","_");
   }else if(query.includes("information_schema.columns")){
      query=query.replace(".","_");
   }
   return query;
 
}
function is_query_valid(query){
   var blacklistarray=TASKS[task_index].validation[0].blacklist;
   var whitelistarray=TASKS[task_index].validation[0].whitelist;
   var valid=true;
   // var query= generate_query();
   for (let i in blacklistarray){
      if(blacklistarray[i]!=""){
         if(query.includes(blacklistarray[i])){
            valid=false;
         }
      }
   }
   for (let k in whitelistarray){
      if(whitelistarray[k]!=""){
         if(query.includes(whitelistarray[k])){
         }
         else{
            valid=false;
         }
      }
   }
   
   return valid;
}
function form_success(form,ergebnis,querysucessful,answer,answer_index,qu){
   // console.log(qu.trim());
   var success;
   // console.log(ergebnis.length);
   var index=ergebnis.length-1;
   var task_index_temp=task_index;
   if(answer){
      task_index_temp=task_index_temp-1;
      document.querySelector("table").style.maxHeight="270px";
   }else{
      document.querySelector("table").style.maxHeight="170px";
   }
   if(qu[index].trim() == TASKS[task_index_temp].validation[0].validationquery[0].trim()){
      index= index-1;
   }
   if(ergebnis[index] == null){
      index= index-1;
   }
   if (querysucessful.includes("error")){
         success='error';
   }else if(querysucessful.includes("semi")){
      success='semi';
   }else{
      if(querysucessful[index].includes("true")){
         success='true';
      }else{
         success='false';
      }
   }
   if(success=='true'){

      switch (form){
         case "login":
            document.getElementById('loginlabel').innerHTML= "Login war erfolgreich. <br> <br>Willkommen " + ergebnis[index].rows.item(0)['benutzername'] +"!";
            document.getElementById("username").style.display = 'none';
            document.getElementById("password").style.display = 'none';
            document.getElementById("login_btn").style.display = 'none';
            document.getElementById("suchergebnisse").style.display = 'none';
            if(!answer){
               document.getElementById("logout_btn").style.display = 'block';
            }       
            break;
         case "search":
            document.getElementById("loginlabel").style.textAlign = 'center';
            document.getElementById('loginlabel').innerHTML= "Suchergebnisse";
            document.getElementById("suchleiste").style.display = 'none';
            document.getElementById("suche_btn").style.display = 'none';
            document.getElementById("suchergebnisse").style.display = 'block';
            if(!answer){
               document.getElementById("suchleiste").style.display = 'block';
               document.getElementById("suche_btn").style.display = 'block';
            }
            generate_resulttable(qu[index],ergebnis[index],task_index_temp); 
 
            break;
         case "url":
            document.getElementById("loginlabel").style.textAlign = 'center';
            document.getElementById('loginlabel').innerHTML= "Ergebnis";
            document.getElementById("url").style.display = 'none';
            document.getElementById("suchergebnisse").style.display = 'none';
            document.getElementById("sneaker_img").style.display='block';
            document.getElementById("url_output").style.display='block';
            if(!answer){
               document.getElementById("url").style.display = 'block';
            } 
            generate_url_output(qu[index],ergebnis[index]); 
            break;
         default:
            // console.log("Error in right answer");
            
      }
   }else if (success=='false'){
      switch (form){
         case "login":
            if(eval(TASKS[task_index_temp].validation[0].truecondition.split('&&')[0].replace("results.rows.length","ergebnis[index].rows.length")) && typeof(ergebnis[index].rows.item(0)['benutzername'])!="undefined"){
               document.getElementById('loginlabel').innerHTML= "Login war erfolgreich. <br> <br>Willkommen " + ergebnis[index].rows.item(0)['benutzername'] +"!";
               document.getElementById("username").style.display = 'none';
               document.getElementById("password").style.display = 'none';
               document.getElementById("login_btn").style.display = 'none';
               document.getElementById("suchergebnisse").style.display = 'none';
               document.getElementById("logout_btn").style.display = 'block';
            }else{
               document.getElementById('loginlabel').innerHTML= "Login fehlgeschlagen";
            }
            
            break;
         case "search":
            document.getElementById("loginlabel").style.textAlign = 'center';
            document.getElementById('loginlabel').innerHTML= "Suchergebnisse";
            document.getElementById("suchergebnisse").style.display = 'block';
            generate_resulttable(qu[index],ergebnis[index],task_index_temp); 
            break;
         case "url":
            document.getElementById("loginlabel").style.textAlign = 'center';
            document.getElementById("suchergebnisse").style.display = 'none';
            if(ergebnis[index].rows.length==1){
               document.getElementById('loginlabel').innerHTML= "Ergebnis";
               document.getElementById("sneaker_img").style.display='block';
               document.getElementById("url_output").style.display='block';
               document.getElementById("url").style.display = 'block';
               
               generate_url_output(qu[index],ergebnis[index]); 

            }else{
               document.getElementById('loginlabel').innerHTML= "kein Suchergebnis";
               document.getElementById("suchergebnisse").style.display = 'none';
               document.getElementById("sneaker_img").style.display='none';
               document.getElementById("url_output").style.display='none';
            }
            break;
         default:
            // console.log("Error in right answer");
            
      }

   }else if(success=='semi'){
      document.getElementById('loginlabel').innerHTML= "Forbidden Request";
      document.getElementById("suchergebnisse").style.display = 'none';
      document.getElementById("sneaker_img").style.display='none';
      document.getElementById("url_output").style.display='none';

   }else{
      document.getElementById('loginlabel').innerHTML= "Internal Server Error";
      document.getElementById("suchergebnisse").style.display = 'none';
      document.getElementById("sneaker_img").style.display='none';
      document.getElementById("url_output").style.display='none';
   }
}

function answer(correctanswer){
   var answer;
      if (correctanswer.includes("error")){
         // fails=fails+1;
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
            // fails=0;
            task_index=task_index+1;
            hintperlvl=1;
            document.getElementById("lvl").innerHTML="Level: " + TASKS[task_index].lvl;
            document.getElementById('btnboxli').style.display = 'none';
            document.getElementById('btnboxre').style.display = 'none';

            document.getElementById('username').value="";
            document.getElementById('password').value = "";
            document.getElementById('suchleiste').value = "";
            document.getElementById('url').value = "https://sql-insekten.oth-rgb.de/index.php?produkt_id=0";
            document.getElementById("marke").innerHTML= "<strong>Marke:   </strong> Nicke"
            document.getElementById("groesse").innerHTML= "<strong>Größe:   </strong> 40";
            document.getElementById("price").innerHTML= "<strong>Preis:     </strong> 80€";
            answer=true;
         }else{
            // fails=fails+1;
            document.getElementById("speakbubble_h2").innerHTML=TASKS[task_index].validation[0].speakbblanswer[1];
            document.getElementById("speakbubble_h3").innerHTML="";
            document.getElementById("insect").src = TASKS[task_index].validation[0].imganswer[1];
            answer= false;
         }
      }
      index=correctanswer.indexOf("true");
      return [answer,index];

}
function generate_resulttable(qu,ergebnis,task_index_temp){
   if(task_index_temp<11){
      if(!qu.includes("*")){
         var columns=qu.toLowerCase().split("select")[1].split("from")[0].split(",")
         for (let col in columns){
            columns[col]=columns[col].trim();
         }
         
      }else if(qu.includes("information_schema_tables")){
         var columns=["table_name", "table_type", "table_rows"];
      }else if(qu.includes("information_schema_columns")){
         var columns=["table_name","column_name","data_type"];
      }else if(qu.includes("FROM benutzer")){
         var columns=["nutzer_id","benutzername","passwort","email"];
      }else if(qu.includes("FROM schuhe")){
         var columns=["produkt_id","marke","groesse","preis"];
      }else if(qu.includes("mitarbeiter")){
         var columns=["ma_id","vorname","name","email","lohn","angestellt_seit"];
      }else if(qu.includes("kunden")){
         var columns=["kunden_id","name","email","bestellnr","adresse"];
      }
   }else{
      var columns=["produkt_id","marke","groesse","preis"];
   }
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
}
function generate_url_output(qu,ergebnis){
   document.getElementsByClassName("form-signin")[0].style.height="300px";
   document.getElementById("sneaker_img").style.marginLeft= "20%"
   if(typeof(ergebnis.rows.item(0)['marke'])!="undefined"){
      if(ergebnis.rows.item(0)['marke'].toString().length>17){
         var len=20-(ergebnis.rows.item(0)['marke'].length-17);
         document.getElementById("sneaker_img").style.marginLeft= len+"%"

      }
   }
   if(typeof(ergebnis.rows.item(0)['groesse']) !="undefined"){
      if(ergebnis.rows.item(0)['groesse'].toString().length>17 ){
         var len=20-(ergebnis.rows.item(0)['groesse'].length-17);
         document.getElementById("sneaker_img").style.marginLeft= len+"%"

      }
   }
   if(typeof(ergebnis.rows.item(0)['preis']) !="undefined"){
      if(ergebnis.rows.item(0)['preis'].toString().length>17){
         var len=20-(ergebnis.rows.item(0)['preis'].length-17);
         document.getElementById("sneaker_img").style.marginLeft= len+"%"
      }
   }
   document.getElementById("marke").innerHTML= "<strong>Marke:   </strong>" + ergebnis.rows.item(0)['marke'];
   document.getElementById("groesse").innerHTML= "<strong>Größe:   </strong>" + ergebnis.rows.item(0)['groesse'];
   document.getElementById("price").innerHTML= "<strong>Preis:     </strong>" + ergebnis.rows.item(0)['preis'] + "€";
}
/////// DATABASE FUNCTIONS

function nullDataHandler(transaction, results) { }
 
function createTableUsers(db)
{
    db.transaction(
        function (transaction) {
 
            /* The first query causes the transaction to (intentionally) fail if the table exists. */
            transaction.executeSql('DROP TABLE IF EXISTS benutzer;', [], nullDataHandler, errorHandler);
            transaction.executeSql('create table benutzer(nutzer_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , benutzername TEXT NOT NULL, passwort TEXT NOT NULL, email TEXT NOT NULL );', [], nullDataHandler, errorHandler);
            /* These insertions will be skipped if the table already exists. */
            transaction.executeSql('INSERT INTO benutzer VALUES (0,"maxmustermann","482c811da5d5b4bc6d497ffa98491e38","maxmustermann@examplemail.com");', [], nullDataHandler, errorHandler);
            transaction.executeSql('INSERT INTO benutzer VALUES (1,"alexamusterfrau","ccce608af11293cecc1c1c272a04d54d","alexamustermann@example.de");', [], nullDataHandler, errorHandler);
            transaction.executeSql('INSERT INTO benutzer VALUES (2,"kati1809","5e446b734ae11b7f30c907e54d89a84e","kati@examplemail.com");', [], nullDataHandler, dataHandler);
        }
    );
}
function createTableShoes(db){
   db.transaction(
      function (transaction) {

          /* The first query causes the transaction to (intentionally) fail if the table exists. */
          transaction.executeSql('DROP TABLE IF EXISTS schuhe;', [], nullDataHandler, errorHandler);
          transaction.executeSql('create table schuhe(produkt_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , marke TEXT NOT NULL, groesse INT NOT NULL, preis INT NOT NULL );', [], nullDataHandler, errorHandler);
          /* These insertions will be skipped if the table already exists. */
          transaction.executeSql('INSERT INTO schuhe VALUES (0,"Nicke",40,80);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO schuhe VALUES (1,"Abidas",37,70);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO schuhe VALUES (2,"Nicke",42,80);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO schuhe VALUES (3,"Abidas",41,80);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO schuhe VALUES (4,"Nicke",38,100);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO schuhe VALUES (5,"Nicke",40,80);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO schuhe VALUES (6,"Abidas",40,70);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO schuhe VALUES (7,"Conwers",43,60);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO schuhe VALUES (8,"Weja",38,130);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO schuhe VALUES (9,"Reedok",45,70);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO schuhe VALUES (10,"Weja",36,120);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO schuhe VALUES (11,"Reedok",46,60);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO schuhe VALUES (12,"Trash Plant",39,190);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO schuhe VALUES (13,"Bifffalo",39,99);', [], nullDataHandler, dataHandler);
      }
  );
}
function createTableMa(db){
   db.transaction(
      function (transaction) {

          /* The first query causes the transaction to (intentionally) fail if the table exists. */
          transaction.executeSql('DROP TABLE IF EXISTS mitarbeiter;', [], nullDataHandler, errorHandler);
          transaction.executeSql('create table mitarbeiter(ma_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , vorname TEXT NOT NULL, name TEXT NOT NULL, email TEXT NOT NULL, lohn INT NOT NULL, angestellt_seit INT NOT NULL );', [], nullDataHandler, errorHandler);
          /* These insertions will be skipped if the table already exists. */
          transaction.executeSql('INSERT INTO mitarbeiter VALUES (0,"Franziska","die Große","examplemail.com",700,2020);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO mitarbeiter VALUES (1,"Mohammed","Schneider","schneider@webb.de",1700,2017);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO mitarbeiter VALUES (2,"Greta Maria","Reifenberger","gretamaria-reifenberger@email.com",4500,2000);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO mitarbeiter VALUES (3,"Dietmar","Kaslowski","dietmar0123@exm.com",2800,2005);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO mitarbeiter VALUES (4,"Jessica","Koch","Koch1009@mail.com",1200,2019);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO mitarbeiter VALUES (5,"Clarissa","Waismeier","waismeier.com",3500,2010);', [], nullDataHandler, errorHandler);
      }
  );
}
function createTableKunden(db){
   db.transaction(
      function (transaction) {

          /* The first query causes the transaction to (intentionally) fail if the table exists. */
          transaction.executeSql('DROP TABLE IF EXISTS kunden;', [], nullDataHandler, errorHandler);
          transaction.executeSql('create table kunden(kunden_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , name TEXT NOT NULL, email TEXT NOT NULL, bestellnr INT NOT NULL, adresse TEXT NOT NULL );', [], nullDataHandler, errorHandler);
          /* These insertions will be skipped if the table already exists. */
          transaction.executeSql('INSERT INTO kunden VALUES (0,"Franziska Baumgartner","examplemail.com",12345,"Studentenstr. 10");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO kunden VALUES (1,"Mohammed Weinzierl","weinzierlr@webb.de",54321, "Merkelstr. 98");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO kunden VALUES (2,"Maria Königsberg","maria_königsweg@mail.com",28888,"Veilchenstr. 13");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO kunden VALUES (3,"Dimitri Muster","dietmar0123@exm.com",33445,"Seestr. 18");', [], nullDataHandler, errorHandler);
      }
  );
}
function createTableTables(db){
   db.transaction(
      function (transaction) {
         transaction.executeSql('DROP TABLE IF EXISTS information_schema_tables;', [], nullDataHandler, errorHandler);
          /* The first query causes the transaction to (intentionally) fail if the table exists. */
          transaction.executeSql('create table information_schema_tables(table_name TEXT NOT NULL, table_type TEXT NOT NULL, table_rows INT NOT NULL);', [], nullDataHandler, errorHandler);
          /* These insertions will be skipped if the table already exists. */
          transaction.executeSql('INSERT INTO information_schema_tables VALUES ("benutzer","BASE TABLE",3);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_tables VALUES ("schuhe","BASE TABLE",14);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_tables VALUES ("mitarbeiter","BASE TABLE",6);', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_tables VALUES ("kunden","BASE TABLE",4);', [], nullDataHandler, errorHandler);
      }
  );
}
function createTableColumns(db){
   db.transaction(
      function (transaction) {

          /* The first query causes the transaction to (intentionally) fail if the table exists. */
          transaction.executeSql('DROP TABLE IF EXISTS information_schema_columns;', [], nullDataHandler, errorHandler);
          transaction.executeSql('create table information_schema_columns(table_name TEXT NOT NULL, column_name TEXT NOT NULL, data_type TEXT NOT NULL);', [], nullDataHandler, errorHandler);
          /* These insertions will be skipped if the table already exists. */
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("benutzer","nutzer_id","NUMBER");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("benutzer","nutzername","VARCHAR2");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("benutzer","passwort","VARCHAR2");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("benutzer","email","VARCHAR2");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("schuhe","produkt_id","NUMBER");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("schuhe","marke","VARCHAR2");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("schuhe","groesse","NUMBER");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("schuhe","preis","NUMBER");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("mitarbeiter","ma_id","NUMBER");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("mitarbeiter","name","VARCHAR2");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("mitarbeiter","vorname","VARCHAR2");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("mitarbeiter","email","VARCHAR2");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("mitarbeiter","lohn","NUMBER");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("mitarbeiter","angestellt_seit","NUMBER");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("kunden","kunden_id","NUMBER");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("kunden","name","VARCHAR2");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("kunden","email","VARCHAR2");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("kunden","bestellnr","NUMBER");', [], nullDataHandler, errorHandler);
          transaction.executeSql('INSERT INTO information_schema_columns VALUES ("kunden","adresse","VARCHAR2");', [], nullDataHandler, errorHandler);
      }
  );
}
function errorHandler(transaction, error)
{
   //  console.log('Error:'+error.message+' (Code '+error.code+')');
 
    // Handle errors here
    var we_think_this_error_is_fatal = true;
    if (we_think_this_error_is_fatal) return true;
    return false;
}
 
function dataHandler(transaction, results)
{
    // Handle the results
    var string = "list contains the following people:\n\n";
   //  console.log(results.rows.length);
    for (var i=0; i<results.rows.length; i++) {
        // Each row is a standard JavaScript array indexed by
        // column names.
        var row = results.rows.item(i);
        string = string + row['username'] + " (ID "+row['id']+")\n";
    }
   //  console.log(string);
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
        document.querySelector("#modal > div >h5 ").innerHTML = "<a target='_blank' href='https://icons8.com/icon/19209/light'>Light</a> icon by <a target='_blank' href='https://icons8.com'>Icons8</a> <br><a href='https://de.freepik.com/vektoren/blume'>Blume Vektor erstellt von terdpongvector - de.freepik.com</a> <div>Icons made by <a href='https://www.flaticon.com/authors/itim2101' title='itim2101'>itim2101</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a></div> <br> <br> <input type='text' class='form-control' id='cheat_input'/>  <br> <button class='btn btn-lg btn-primary btn-block' id='cheat_btn' type='button' onclick='cheat()'>cheat</button> ";
      }else{
         document.querySelector("#modal > div >h5 ").innerHTML = "<a target='_blank' href='https://icons8.com/icon/19209/light'>Light</a> icon by <a target='_blank' href='https://icons8.com'>Icons8</a> <br><a href='https://de.freepik.com/vektoren/blume'>Blume Vektor erstellt von terdpongvector - de.freepik.com</a> <div>Icons made by <a href='https://www.flaticon.com/authors/itim2101' title='itim2101'>itim2101</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a></div><div>Icons erstellt von <a href='https://www.freepik.com' title='Freepik'>Freepik</a> from <a href='https://www.flaticon.com/de/' title='Flaticon'>www.flaticon.com</a></div>";
      }
      
        e.style.display = 'block';
      
   }
}

function close_modal(){
   document.getElementById("modal").style.display='none';
}
function cheat(){
   var lvl_input=document.getElementById("cheat_input").value - 1;
   for (let i in TASKS){
      if (TASKS[i].lvl.toString().trim()==lvl_input.toString().trim()){
         task_index=i;
         document.getElementById("speakbubble_h2").innerHTML=TASKS[task_index].validation[0].speakbblanswer[0];
         document.getElementById("speakbubble_h3").innerHTML="";
         document.getElementById("next_btn").style.display = 'block';
         document.getElementById("insect").src = TASKS[task_index].validation[0].imganswer[0];
         // fails=0;
         task_index=parseInt(task_index) + 1;
         document.getElementById("lvl").innerHTML="Level: " + TASKS[task_index].lvl;
         document.getElementById('btnboxli').style.display = 'none';
         document.getElementById('btnboxre').style.display = 'none';
      }else{
         // console.log('Level existiert nicht.')
      }
   }
   close_modal();

}
