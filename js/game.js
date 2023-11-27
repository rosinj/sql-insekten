nix = null;
//////////////// GLOBAL
var hints=3;
var bbltxtindex=0;
var hintperlvl=1;
// var fails=0
var cheatactive=false;
var task_index=0;

TASKS=[
   {"text": [],
    "challenge" : "Versuche als Erstes dich ganz normal als 'alexamusterfrau' mit einem Passwort einzuloggen, wie man es normalerweise kennt. Da du ihr Passwort nicht kennst, gib einfach irgendwas ein.",
    "challenge_en": "First, try to log in as usual as 'jane' with a password. Since you don't know her password, just enter anything.",
    "validation"  : [{"validationquery": [""],
                      "validationerror":"",
                      "truecondition":"results.length > 0  && queries[j].includes(translate('benutzer'))",
                      "correctanswer":["true","true","true","true"],
                      "speakbblanswer":["Super! Du hast verstanden wie das Login-Formular funktioniert. ","Super! Du hast verstanden wie das Login-Formular funktioniert."],
                      "speakbblanswer_en":["Perfect! You now know how this login form works.","Perfect! You now know how this login form works."],
                      "imganswer":["img/happybee.png","img/happybee.png"],
                      "whitelist": [""],
                      "blacklist": [""]}],
    "category":"login",
    "hints"    : "hints deactivated",
    "lvl" : 1},
   {"text": [{"h2": "Ok, jetzt geht's aber wirklich los! ",
              "h3":"",
              "img": "img/happybee.png"}],
   "text_en": [{"h2": "Ok, now it's really starting!",
   "h3":"",
   "img": "img/happybee.png"}],
    "challenge" : "Versuche dich als 'alexamusterfrau' einzuloggen, ohne ihr Passwort zu kennen. Vergiss nicht, wie am Anfang erwähnt, Apostrophe und SQL-Kommentare geschickt zu nutzen und dir die Hintergrunddetails anzuschauen!",
    "challenge_en" : "Try to log in as 'jane' without knowing her password. As mentioned before, use apostrophes and SQL comments, and take a look in the background-details section.",
    "validation"  : [{"validationquery": [""],
                      "validationerror":"",
                      "truecondition":"results.length > 0 && queries[j].includes(translate('benutzer')) && results[0][translate('benutzername')]==translate('alexamusterfrau')",
                      "correctanswer":["true","false","false","false"],
                      "speakbblanswer":["Super! Du hast die Herausforderung gemeistert! ","Schade, das hat leider nicht geklappt. Versuche es erneut dich als 'alexamusterfrau' einzuloggen. <br> Also nicht als 'maxmustermann' einloggen!"],
                      "speakbblanswer_en":["Perfect! You solved this challenge!","Oh no, unfortunately that did not work out. Please try again to log in as 'jane'. <br> So, do not log in as 'maxmiller'!"],
                      "imganswer":["img/happybee.png","img/surprisebee.png"],
                      "whitelist": ["alexamusterfrau"],
                      "blacklist": ["maxmustermann"]}],
    "category":"login",
    "hints"    : "Wie du es in den Hintergrunddetails siehst, ist vor der Eingabevariable 'uname' ein Apostroph zu finden. D.h. nachdem du den Benutzernamen in das Eingabefeld eingegeben hast brauchen wir noch ein Apostroph um den String zu beenden. Danach interessiert uns die restliche Query nicht, daher kommentieren wir sie aus. '--' ist ein Kommentar in SQL.",
    "hints_en": "As you can see in the background details, there is an apostrophe before the input variable 'uname'. This means that you need to write another apostrophe behind your user name to terminate the string. Everything behind that is of no interest, so you can simply comment it. In SQL, comments start with --",
    "lvl" : 1},
    {"text" : [{"h2": "Kommen wir zur nächsten Herausforderung!",
    "h3":"",
    "img": "img/bee.png"}],
    "text_en" : [{"h2": "Let's take a look what the next challenge is about!",
    "h3":"",
    "img": "img/bee.png"}],
   "challenge": "Versuche die Tabelle 'benutzer' zu droppen. <br> <h3> Im Hintergrund wird zwar eigentlich nur eine Query ausgeführt, aber wenn du eine Query mit ';' beendest kannst du eine weitere Query einschleusen. Lass dich übrigens nicht davon irritieren, wenn der Login fehlschlägt oder eine Fehlermeldung auftaucht. </h3>",
   "challenge_en": "Try to drop the table 'users'; <br> <h3> Basically, only one single query should be executed when logging in, but when you terminate your query with a semicolon ';'  you can inject a second query. By the way, don't get irritated if the login fails or you get an error message.</h3>",
   "validation"  : [{"validationquery": ["'SELECT '+ translate('benutzername') +' FROM '+translate('benutzer')"],
                     "validationerror":"'Table does not exist: '+translate('benutzer')",
                     "truecondition":"results.length > 0",
                     "correctanswer":["false","false","true","false"],
                     "speakbblanswer":["Super! Du hast die Benutzertabelle gelöscht! ","Schade, das hat leider nicht geklappt. Versuche erneut die Tabelle 'benutzer' zu droppen bzw. zu löschen."],
                     "speakbblanswer_en":["Perfect! You dropped the users table! ","Oh no, unfortunately this did not work. Please try again to drop the table 'users'."],
                     "imganswer":["img/happybee.png","img/surprisebee.png"],
                     "whitelist": [""],
                     "blacklist": [""]}],
   "category":"login",
   "hints"    : "Nimm die Lösung von Level 1 (alexamusterfrau'--) und quetsche dazwischen einen DROP-TABLE-Befehl. Mit Semikolon trennst du verschiedene Queries voneinander.",
   "hints_en"    : "Take your solution from Level 1 (jane'--) und place a DROP TABLE command before the comment. You can separate multiple queries with a semicolon.",
   "lvl": 2},
    {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an. <br> <br> <br> ",
                "h3":"",
                "img": "img/happybee.png"},
               ],
      "text_en" : [{"h2": "Let's take a look what the next challenge is about! <br> <br> <br> ",
      "h3":"",
      "img": "img/happybee.png"},
      ],
    "challenge": "Nun kennst du keinen Nutzernamen. Versuche dich trotzdem mit einem User einzuloggen.",
    "challenge_en": "Let's say you do not know a user name. Anyway, try to log in with any user.",
    "validation"  : [{"validationquery": [""],
                      "validationerror":"",
                      "truecondition":"results.length > 0 && queries[j].includes(translate('benutzer')) && [translate('alexamusterfrau'),translate('maxmustermann'),translate('kati1809')].includes(results[0][translate('benutzername')])",
                      "correctanswer":["true","false","false","false"],
                      "speakbblanswer":["Super! Du hast die Herausforderung gemeistert! ","Schade, das hat leider nicht geklappt. Versuche erneut dich mit einem User einzuloggen ohne einen Namen zu kennen."],
                      "speakbblanswer_en":["Perfect! You solved this challenge!","Oh no, unfortunately that did not work out. Try again to log in with a user without knowing their user name."],
                      "imganswer":["img/happybee.png","img/surprisebee.png"],
                      "whitelist": [""],
                      "blacklist": ["maxmustermann","alexamusterfrau"]}],
    "category":"login",
    "hints"    : "Wir müssen die Query so geschickt erzeugen, dass sie mind. eine Zeile ausgibt. Wenn wir die erste WHERE Bedingung leer lassen und eine zweite mit OR hinzufügen, die immer wahr ist, können wir wieder mit '--' den restlichen Code auskommentieren und haben somit eine Query erzeugt, die alle User ausgeben würde.",
    "hints_en"    : "We need to generate a query in a way that it returns at least one row. Maybe we can somehow let the WHERE predicate match every row, for example by adding an OR and a second predicate that's always true. After that, you can again use a --comment to comment out the rest of the query to have a valid query that returns all users.",
    "lvl" : 3},
    {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an.",
                "h3":"",
                "img": "img/bee.png"},
                {"h2": "",
                "h3":"Die Softwareentwickler haben eine Lücke in ihrem Code entdeckt. Nun wird man erst eingeloggt, wenn es wirklich nur einen Benutzer mit dem Namen und Passwort gibt. Das heißt für dich: Du kannst nur noch Queries erzeugen, die eine Zeile im Ergebnis ausgeben. <br> <br> <br>",
                "img": "img/bee.png"}
               ],
      "text_en" : [{"h2": "Let's take a look at the next challenge!",
                     "h3":"",
                     "img": "img/bee.png"},
      {"h2": "",
      "h3":"Oh, the developers just fixed the bug right now. You now cannot log in anymore when our query returns more than one row.<br> <br> <br>",
      "img": "img/bee.png"}
      ],
    "challenge": "Ohne einen Nutzernamen zu kennen versuchst du dich wieder mit irgendeinem User einzuloggen.",
    "challenge_en": "Can you also solve this challenge? Please again log in as a user that you do not know.",
    "validation"  : [{"validationquery": [""],
                      "validationerror":"",
                      "truecondition":"results.length == 1 && queries[j].includes(translate('benutzer')) && [translate('alexamusterfrau'),translate('maxmustermann'),translate('kati1809')].includes(results[0][translate('benutzername')])",
                      "correctanswer":["true","false","false","false"],
                      "speakbblanswer":["Super! Du hast die Herausforderung gemeistert! ","Schade, das hat leider nicht geklappt. Versuche erneut dich einzuloggen ohne einen Nutzer zu kennen. <br> Vergiss nicht, dass deine Query nur eine Zeile im Ergebnis ausgeben darf."],
                      "speakbblanswer_en":["Perfect! You solved this challenge!","Oh no, unfortunately that did not work out. Try again to log in as a user without knowing their user name. <br> Beware that your query must only return one single row!"],
                      "imganswer":["img/happybee.png","img/surprisebee.png"],
                      "whitelist": [""],
                      "blacklist": ["maxmustermann","alexamusterfrau","kati1809"]}],
    "category":"login",
    "hints"    : "Diese Aufgabe ist ähnlich wie die davor nur, dass du versuchen musst EINE Zeile auszugeben und nicht mehr. Vorher hätte die Query die ganze Tabelle ausgegeben, aber die Sicherheitsbedingungen waren so schwach, dass die Länge der Ergebnisse egal war. Mit LIMIT kannst du nun am Ende einer Query entscheiden, wie viele Zeilen die Query ausgeben soll.",
    "hints_en"    : "This task is similar to the one before except that your query must return just one single row. In the previous level, the query could return all users. But now, this bug is fixed. The application will now only let you log in when the query-result length is one. Try to use a LIMIT clause in your query to limit the number of result rows.",
    "lvl" : 4},
    {"text" :[{"h2": "Kommen wir zur nächsten Herausforderung  <br>",
    "h3":"",
    "img": "img/bee.png"},
    {"h2": "",
    "h3":"Nun haben wir statt eines Login-Formulars eine typische Suchleiste. In diesem Fall von einem Online-Shop für Schuhe. Versuche hier dich per SQL-Injection reinzuhacken! Viel Spaß! ",
    "img": "img/bee.png"}],
    "text_en" :[{"h2": "Let's come to the next challenge!  <br>",
    "h3":"",
    "img": "img/bee.png"},
    {"h2": "",
    "h3":"In this challenge, we now have a search bar instead of a login form. It allows us to search for all shoes of a specific brand. We will now try to attack the web site using this search feature! Have fun! ",
    "img": "img/bee.png"}],
   "challenge": "Versuche erstmal ganz normal nach Schuhen der Marke 'Nicke' zu suchen. ",
   "challenge_en": "First of all, just use a normal search to find all shoes from the brand 'Nicke'.",
   "validation"  : [{"validationquery": [""],
                     "validationerror":"",
                     "truecondition":"results.length == 4 && queries[j].includes(translate('schuhe'))",
                     "correctanswer":["true","false","false","false"],
                     "speakbblanswer":["Super! Du hast verstanden wie die Produktsuche funktioniert. ","Schade, das hat leider nicht geklappt. Suche nach Schuhen der Marke 'Nicke'"],
                     "speakbblanswer_en":["Perfect! You now know how the product search works. ","Oh no, this did not work out. Try again to search for shoes of the brand 'Nicke'."],
                     "imganswer":["img/happybee.png","img/surprisebee.png"],
                     "whitelist": [""],
                     "blacklist": [""]}],
   "category":"search",
   "hints"    : "hints deactivated",
   "lvl": 5},
   {"text" :[{"h2": "Kommen wir zur nächsten Herausforderung!  <br>",
   "h3":"",
   "img": "img/bee.png"}],
   "text_en" :[{"h2": "Let's take a look at the next challenge!  <br>",
   "h3":"",
   "img": "img/bee.png"}],
   "challenge": "Gebe mir den Benutzernamen und das Passwort aller User aus.",
   "challenge_en": "Please output the usernames and passwords of all users!",
   "validation"  : [{"validationquery": [""],
                     "validationerror":"",
                     "truecondition":"results.length == 3 && queries[j].includes(translate('benutzer'))  && queries[j].includes(translate('benutzername')) && queries[j].includes(translate('passwort')) ",
                     "correctanswer":["true","false","false","false"],
                     "speakbblanswer":["Super! Du hast es geschafft! <br> <h3>Wenigstens speichert die Website die Passwörter nicht in Klartext, sondern als Hashwert, der aus dem Passwort generiert wird. Aber durch frei zugängliche sog. Rainbow-Tables konnte ich trotzdem herausfinden, dass das Passwort von maxmustermann 'password123' ist.</h3>","Schade, das hat leider nicht geklappt. Versuche erneut Benutzername und Passwort aller Benutzer auszugeben."],
                     "speakbblanswer_en":["Perfect! It worked! <br> <h3>As you can see, the website stores the passwords in an encrypted format using their MD5 hash. That's better than storing them in plain text. But, rainbow tables which are publicly available can help us to look up for the original password, for maxmiller that's 'password123'.</h3>","Oh no, this did not work out. Try again to output the usernames and passwords of all users."],
                     "imganswer":["img/happybee.png","img/surprisebee.png"],
                     "whitelist": [""],
                     "blacklist": [""]}],
   "category":"search",
   "hints"    : "Wie vorher kannst du mit ';' eine neue Query anfangen, nur dass die Tabelle 'benutzer' heißt und folgende Spalten hat: 'nutzer_id', 'benutzername', 'passwort','email'.",
   "hints_en"    : "You can again use a ';' to terminate a query and start a new one. And in your second query, you can use the table 'users' in the FROM clause. It has the columns 'user_id', 'username', 'password','email'.",
   "lvl": 5},
    {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an und zurück zum Login-Formular! <br> Irgendjemand arbeitet doch hinter dieser Website. Dann gibt es vielleicht auch eine Mitarbeiter-Tabelle in der Datenbank. ",
    "h3":"",
    "img": "img/bee.png"},
    {"h2": "",
    "h3":"Beim Login-Formular ist die einzige Informationsausgabe die wir bekommen, dass wir uns erfolgreich mit einem User eingeloggt haben (z.B. Willkommen maxmustermann!). D.h. um Informationen einer anderen Tabelle auszugeben musst du den 'benutzername' der Tabelle 'benutzer' manipulieren.",
    "img": "img/bee.png"}
   ],
   "text_en" : [{"h2": "Let's take a look at the next challenge and get back to the login form! <br> Somebody works behind this website. Then maybe there is also an staff table in the database.",
    "h3":"",
    "img": "img/bee.png"},
    {"h2": "",
    "h3":"With the login form, the only information output we get is that we have successfully logged in with a user (e.g., Welcome maxmiller!). I.e. to output information from another table you have to manipulate the column 'username' of the table 'users'.",
    "img": "img/bee.png"}
   ],
   "challenge": "Ich will wissen wie viel Lohn die Mitarbeiterin mit dem Vornamen 'Greta Maria' bekommt. <br> Damit das funktioniert, musst den Spalten der Tabelle 'mitarbeiter' mit AS Spalten-Aliase geben.",
   "challenge_en": "I want to know how much the staff member with the first name 'Greta Maria' earns. <br> For this, you have to introduce column aliases (AS ...) for the columns of the table 'staff'.",
   "validation"  : [{"validationquery": [""],
            "validationerror":"",
            "truecondition":"results.length == 1 && queries[j].includes(translate('mitarbeiter')) && results[0][translate('benutzername')]==4500",
            "correctanswer":["true","false","false","false"],
            "speakbblanswer":["Super! Du hast die Herausforderung gemeistert! <br> Die Greta bekommt ja ganz schön viel Geld.","Schade, das hat leider nicht geklappt. Versuche erneut herauszufinden wieviel Greta Maria verdient. <br> Zur Info: Du wirst die Spalte 'benutzername' von 'benutzer' benötigen und 'lohn','vorname' von der Tabelle 'mitarbeiter'."],
            "speakbblanswer_en":["Perfect! You solved this challenge! <br> Wow, Greta gets a lot of money.","Oh no, this did not work out. Try again to output Greta Maria's salary. <br> For your information: You will need the column 'username' from 'users' and 'salary', 'firstname' from the table 'staff'."],

            "imganswer":["img/happybee.png","img/surprisebee.png"],
            "whitelist": [""],
            "blacklist": ["maxmustermann","alexamusterfrau"]}],
   "category":"login",
   "hints"    : "Wie bei dem Level wo du eine Tabelle löschen solltest, fängst du mit Semikolon eine neue Query an und selektierst 'lohn' von Tabelle 'mitarbeiter' mit der Bedingung, dass der 'vorname' = 'Greta Maria' ist. Wichtig: Wenn man eingeloggt ist gibt er den 'benutzername' aus d.h. er sucht bei deiner Query nach der Spalte 'benutzername' und wird sie nicht finden, daher müssen wir die Spalte 'lohn' mit 'as' auf 'benutzername' umbenennen.",
   "hints_en"    : "As with the level where you should delete a table, you start a new query with a semicolon and select 'salary' from the table 'staff' with the condition that the 'firstname' = 'Greta Maria'. Important: When you are logged in, it outputs the 'username', i.e. it looks for the 'username' column in your query and will not find it, so we have to rename the 'salary' column to 'username' with 'as'.",

   "lvl" : 6},
   {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an. <br> In diesem Level sind wir wieder beim Schuhe-Onlineshop mit der Suchleiste.",
   "h3":"",
   "img": "img/bee.png"},
   {"h2": "Den Softwareentwicklern ist aufgefallen, dass Hacker mit ';' neue Queries in Eingabefelder einschleusen können, daher haben sie ';' im Input verboten.",
   "h3":"",
   "img": "img/bee.png"}
  ],
  "text_en" : [{"h2": "Let's take a look at the next challenge. <br> Now we're back to the search bar of that shoe shopping website.",
   "h3":"",
   "img": "img/bee.png"},
   {"h2": "The software developers have noticed that hackers can inject new queries into the input fields with ';', so semicolons are now prohibited in the input.",
   "h3":"",
   "img": "img/bee.png"}
  ],
  "challenge": "Ich will von allen Mitarbeitern folgendes wissen: Name, E-Mail Adresse, Verdienst und seit wann sie in diesem Unternehmen arbeiten. <br> <h3>Die Tabelle hat folgende Spaltennamen: 'ma_id', 'name','vorname','email','lohn' & 'angestellt_seit'. Achtung: Semikolons sind nicht mehr erlaubt. </h3>",
  "challenge_en": "I want to know the following from all staff members: name, email address, salary and since when they have been working for this company. <br> <h3> The table has the following column names: 'staff_id', 'name', 'firstname', 'email', 'salary' & 'employed_since'. Warning: semicolons are no longer allowed. </h3>",
  "validation"  : [{"validationquery": [""],
           "validationerror":"",
           "truecondition":"results.length == 6 && queries[j].includes(translate('mitarbeiter'))",
           "correctanswer":["true","false","false","false"],
           "speakbblanswer":["Super! Du hast die Herausforderung gemeistert! ","Schade, das hat leider nicht geklappt. Versuche erneut name, email, lohn und angestellt_seit der Mitarbeitertabelle durch Vereinigung zweier Queries auszugeben."],
           "speakbblanswer_en":["Perfect! You solved this challenge! <br>","Oh no, this did not work out. Try again to output name, email, salary and employed_since from the staff table by merging two queries."],
           "imganswer":["img/happybee.png","img/surprisebee.png"],
           "whitelist": [""],
           "blacklist": ["maxmustermann","alexamusterfrau",";"]}],
  "category":"search",
  "hints"    : "Queryergebnisse kann man ähnlich wie Mengen behandeln. Wenn du also keine neue Query mit Semikolon anfangen kannst, versuche deine Query mit UNION zu erweitern. Mit UNION kannst du 2 Queries vereinigen. Nach dem UNION Befehl kannst du ganz normal eine neue Query anfangen. Dabei muss nur darauf geachtet werden, dass die beiden Teilabfragen vereinigungsverträglich sind, also die gleiche Anzahl an Spalten mit jeweils zueinander kompatiblen Datentypen besitzen.",
  "hints_en"    : "Query results can be treated in a similar way to sets. So if you cannot start a new query with a semicolon, try expanding your query with UNION. With UNION you can combine 2 queries. After the UNION command you can start a new query as normal. You only have to make sure that the two partial queries are union compatible, i.e. have the same number of columns with mutually compatible data types.",
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
               "img": "img/bee.png"}],
   "text_en" : [{"h2": "Let's take a look at the next challenge!  <br>",
               "h3":"",
               "img": "img/bee.png"},
               {"h2": "In reality, you don't even know what the names of the tables in the database and their columns are. Let's find out! <br> <br> <br>",
               "h3":"",
               "img": "img/bee.png"},
               {"h2": "",
               "h3":"Most database management systems (DBMS) have an internal table with metadata. This contains all information about tables and views in a database. <br>",
               "img": "img/bee.png"},
               {"h2": "",
               "h3":"With Oracle it is called sys.user_tables(table_id, table_name, num_rows,...), with MySQL, SQL Server, PostgreSQL it is called information_schema.tables(table_name, table_type, table_rows,...) and with SQLLite you can use the table sqlite_master(type, name, tbl_name,...) to achieve the same.  <br>",
               "img": "img/bee.png"}],
   "challenge": "Finde durch rumprobieren heraus, mit welcher Datenbank wir es zu tun haben und gib die Metadaten aus. <br> <h4>Zur Erinnerung: Oracle: sys.user_tables(table_id, table_name, num_rows,...) <br> MySQL, SQL Server, PostgreSQL: information_schema.tables(table_name, table_type, table_rows,...) <br> SQLLite:  sqlite_master(type, name, tbl_name,...). </h4> ",
   "challenge_en": "Try to find out which database we are dealing with and output the metadata. <br> <h4> As a reminder: Oracle: sys.user_tables (table_id, table_name, num_rows, ...) <br> MySQL, SQL Server, PostgreSQL: information_schema.tables (table_name, table_type, table_rows, ...) <br> SQLLite: sqlite_master (type, name, tbl_name, ...). </h4>",
   "validation"  : [{"validationquery": [""],
            "validationerror":"",
            "truecondition":"results.length == 4 && queries[j].includes('information_schema')",
            "correctanswer":["true","false","false","false"],
            "speakbblanswer":["Super! Du hast die Herausforderung gemeistert! <br> Nun wissen wir, welche Tabellen die Datenbank besitzt!","Schade, das hat leider nicht geklappt. Versuche erneut alle Tabellen-Metadaten auszugeben. <br> <h4>Zur Erinnerung: <br> Oracle: sys.user_tables(table_id, table_name, num_rows,...) <br> MySQL, SQL Server, PostgreSQL: information_schema.tables(table_name, table_type, table_rows,...) <br> SQLLite:  sqlite_master(type, name, tbl_name,...). </h4>"],
            "speakbblanswer_en":["Perfect! You solved this challenge! <br> Now we know which tables the database has!","Oh no, this did not work out. Try to output all table metadata again. <br> <h4> As a reminder: <br> Oracle: sys.user_tables (table_id, table_name, num_rows, ...) <br> MySQL, SQL Server, PostgreSQL: information_schema.tables (table_name, table_type, table_rows, ...) <br> SQLLite : sqlite_master (type, name, tbl_name, ...). </h4>"],
            "imganswer":["img/happybee.png","img/surprisebee.png"],
            "whitelist": ["tables"],
            "blacklist": ["maxmustermann","alexamusterfrau",";","sqlite_master"]}],
   "category":"search",
   "hints"    : "Mit UNION fängst du eine neue Query an. Nun probierst du mit den erwähnten Tabellen eine 'SELECT * FROM' Query zu erzeugen, wobei die erwähnten Spaltennamen selektiert werden müssen, da aber bei UNION die Spaltendimensionen gleich sein müssen fehlt noch ein Schritt. Denn die Tabelle Schuhe hat 4 Spalten und die andere 3, d.h. du selektierst eine zusätzliche Scheinspalte: z. B. SELECT table_id, table_name, num_rows, 'test' FROM ... .",
   "hints_en"    : "With UNION you start a new query. Now you try to generate a 'SELECT * FROM' query with the tables and columns mentioned, but since the column dimensions must be the same with UNION, one step is still missing. Tthe shoes table has 4 columns and the other 3, i.e. you select an additional dummy column: e.g., SELECT table_id, table_name, num_rows, null FROM ... .",
   "lvl" : 8},
   {"text" : [{"h2": "Oh! Hast du das gesehen? Da war eine Tabelle aufgelistet, die wir ja noch gar nicht kennen. Wie interessant! ",
               "h3":"",
               "img": "img/happybee.png"},
               {"h2": "Es gibt auch eine Tabelle, wo alle Spalten jeder Tabelle in der Datenbank gespeichert sind. Beim googeln habe ich herausgefunden, dass sie in unserem Fall information_schema.columns (table_name, column_name, data_type) heißt. ",
               "h3":"",
               "img": "img/bee.png"}],
   "text_en" : [{"h2": "Oh! Did you see that? There was a table listed that we don't even know. Interesting!",
                 "h3":"",
                 "img": "img/happybee.png"},
                 {"h2": "There is also a table where all the columns of each table are stored in the database. While googling I found out that in our case it is called information_schema.columns (table_name, column_name, data_type). ",
                 "h3":"",
                 "img": "img/bee.png"}],
   "challenge": "Aus der vorherigen Ausgabe kam heraus, dass eine Kunden-Tabelle existiert. Ich will wissen, welche Spalten diese Tabelle hat. <br> <h3>Zur Erinnerung: die Tabelle mit Informationen zu den Spalten heißt information_schema.columns (table_name, column_name, data_type). </h3>",
   "challenge_en": "The previous output showed that there is another table called customers. I want to know which columns this table has. <br> <h3> As a reminder: the table with information on the columns is called information_schema.columns (table_name, column_name, data_type). </h3>",
   "validation"  : [{"validationquery": [""],
                     "validationerror":"",
                     // "truecondition":"results.length == 5 && queries[j].includes('information_schema') && Object.values(results[0]).includes(translate('adresse')) && Object.values(results[1]).includes(translate('bestellnr')) && Object.values(results[2]).includes(translate('email')) && Object.values(results[3]).includes(translate('kunden_id')) && Object.values(results[4]).includes(translate('name'))",
                     "truecondition":"results.length == 5 && queries[j].includes('information_schema') && " +
                                     "(Object.values(results[0]).includes(translate('adresse')) || Object.values(results[0]).includes(translate('bestellnr')) || Object.values(results[0]).includes(translate('email')) || Object.values(results[0]).includes(translate('kunden_id')) || Object.values(results[0]).includes(translate('name'))) && "+
                                     "(Object.values(results[1]).includes(translate('adresse')) || Object.values(results[1]).includes(translate('bestellnr')) || Object.values(results[1]).includes(translate('email')) || Object.values(results[1]).includes(translate('kunden_id')) || Object.values(results[1]).includes(translate('name'))) && "+
                                     "(Object.values(results[2]).includes(translate('adresse')) || Object.values(results[2]).includes(translate('bestellnr')) || Object.values(results[2]).includes(translate('email')) || Object.values(results[2]).includes(translate('kunden_id')) || Object.values(results[2]).includes(translate('name'))) && "+
                                     "(Object.values(results[3]).includes(translate('adresse')) || Object.values(results[3]).includes(translate('bestellnr')) || Object.values(results[3]).includes(translate('email')) || Object.values(results[3]).includes(translate('kunden_id')) || Object.values(results[3]).includes(translate('name'))) && "+
                                     "(Object.values(results[4]).includes(translate('adresse')) || Object.values(results[4]).includes(translate('bestellnr')) || Object.values(results[4]).includes(translate('email')) || Object.values(results[4]).includes(translate('kunden_id')) || Object.values(results[4]).includes(translate('name')))",
                     "correctanswer":["true","false","false","false"],
                     "speakbblanswer":["Super! Du hast die Herausforderung gemeistert! ","Schade, das hat leider nicht geklappt. Versuche erneut die Spalten der Tabelle 'kunden' auszugeben.  <br> <h3>Zur Erinnerung: die Tabelle mit Informationen zu den Spalten heißt information_schema.columns (table_name, column_name, data_type).</h3>"],
                     "speakbblanswer_en":["Perfect! You solved this challenge! ","Oh no, this did not work out. Try again to display the columns of the table 'customers'. <br> <h3> As a reminder: the table with information on the columns is called information_schema.columns (table_name, column_name, data_type). </h3>"],
                     "imganswer":["img/happybee.png","img/surprisebee.png"],
                     "whitelist": ["columns"],
                     "blacklist": ["maxmustermann","alexamusterfrau",";","sqlite_master"]}],
   "category":"search",
   "hints"    : "Mit UNION fängst du eine neue Query an. Als Tabelle nutzt du die vorgegebene 'information_schema.columns' und in der WHERE-Bedingung geben wir ein, dass wir nur die Spalten von der Tabelle 'kunden' wollen, also table_name='kunden'. Da aber die Tabelle Schuhe 4 Spalten besitzt und die, die wir nutzen wollen nur 3, müssen wir eine Scheinspalte nach der UNION Anweisung dranhängen, damit die Spaltendimensionen gleich groß sind. Zum Beispiel: SELECT table_name, column_name, data_type, null FROM ...",
   "hints_en" : "With UNION you start a new query. You use the predefined 'information_schema.columns' as the table and in the WHERE condition we enter that we only want the columns from the table 'customers', i.e. table_name = 'customers'. But since the shoes table has 4 columns and the one we want to use only 3, we have to add a dummy column after the UNION statement so that the column dimensions are the same. For example: SELECT table_name, column_name, data_type, null FROM ... .",
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
               "img": "img/bee.png"} ],
    "text_en" : [{"h2": "Let's take a look at the next challenge!  <br>",
               "h3":"",
               "img": "img/bee.png"},
               {"h2": "You don't always find a search bar or login form on a website. Therefore we now try to manipulate the URL of this shopping website. <br> <br>",
               "h3":"",
               "img": "img/bee.png"},
               {"h2": "So, now we have a URL bar from the online shop for shoes. It works similar to the search bar, except that the WHERE condition comes after the last slash. <br> <br>",
               "h3":"",
               "img": "img/bee.png"},
               {"h2": "The product page only outputs a unique result, so your output is limited to one single row. <br> <br>",
               "h3":"",
               "img": "img/bee.png"} ],
   "challenge": "Mal schauen, ob du es verstanden hast. Vordefiniert wird der Schuh mit der produkt_id=0 ausgewählt. Gib mal eine andere Id ein.  ",
   "challenge_en": "Let's see if you understand. The shoe with product_id = 0 is selected in advance. Enter a different id. ",
   "validation"  : [{"validationquery": [""],
            "validationerror":"",
            "truecondition":"results.length == 1 && queries[j].includes(translate('schuhe')) && !queries[j].includes(translate('produkt_id')+'=0')",
            "correctanswer":["true","false","false","false"],
            "speakbblanswer":["Super! Jetzt weißt du wie der URL-Aufruf funktioniert. ","Schade, das hat leider nicht geklappt. Versuche erneut nach dem letzten Slash, wenn nicht vorhanden, '?produkt_id=' und eine andere Zahl einzugeben. "],
            "speakbblanswer_en":["Perfect! Now you know how the URL call works. ","Oh no, this did not work out. Try again to enter after the last slash '?product_id =' and another number. "],
            "imganswer":["img/happybee.png","img/surprisebee.png"],
            "whitelist": [""],
            "blacklist": ["maxmustermann","alexamusterfrau",";"]}],
   "category":"url",
   "hints"    : "hints deactivated",
   "lvl" : 10},
   {"text" : [{"h2": "Schauen wir uns mal die nächste Herausforderung an.",
               "h3":"",
               "img": "img/bee.png"}],
    "text_en" : [{"h2": "Let's take a look at the next challenge! ",
               "h3":"",
               "img": "img/bee.png"}],
   "challenge": "Gib mir den Namen, die E-mail und die Adresse des Kunden mit der 'kunden_id' =3 aus. <br><h3> Zur Erinnerung: Die Tabelle hat folgende Spaltennamen: 'kunden_id', 'name','email','bestellnr' & 'adresse'. </h3>",
   "challenge_en": "Output the name, e-mail and address of the customer with the 'customer_id' = 3. <br> <h3> As a reminder: The table has the following column names: 'customer_id', 'name', 'email', 'order_id' & 'address'. </h3>",
   "validation"  : [{"validationquery": [""],
            "validationerror":"",
            "truecondition":"results.length == 1 && queries[j].includes(translate('kunden')) && Object.values(results[0]).includes('dietmar0123@exm.com') && Object.values(results[0]).includes('Seestr. 18') && Object.values(results[0]).includes('Dimitri Muster')",
            "correctanswer":["true","false","false","false"],
            "speakbblanswer":["Super! Du hast die Herausforderung gemeistert! ","Schade, das hat leider nicht geklappt. Versuche erneut die Adresse, den Namen und die E-Mail des Kunden mit der id 3 rauszukriegen. <br> <h3>Zur Erinnerung: Die Tabelle hat folgende Spaltennamen: 'kunden_id', 'name','email','bestellnr' & 'adresse'.</h3>"],
            "speakbblanswer_en":["Perfect! You solved this challenge!  ","Oh no, this did not work out. Try again to output the address, name and email of the customer with id 3. <br> <h3> As a reminder: The table has the following column names: 'customer_id', 'name', 'email', 'order_id' & 'address'. </h3>"],
            "imganswer":["img/happybee.png","img/surprisebee.png"],
            "whitelist": [""],
            "blacklist": ["maxmustermann","alexamusterfrau",";"]}],
   "category":"url",
   "hints"    : "Queryergebnisse kann man ähnlich wie Mengen behandeln. Wenn du also keine neue Query mit Semikolon anfangen kannst, versuche deine Query mit UNION zu erweitern. Mit UNION kannst du 2 Queries vereinigen. Nach dem UNION Befehl kannst du ganz normal eine neue Query anfangen. Nur muss die Spaltenanzahl beider Datenmengen gleichgroß sein. D.h. Deine Query darf nur 3 Spalten ausgeben.",
   "hints_en"    : "Query results can be treated in a similar way to sets. So if you cannot start a new query with a semicolon, try expanding your query with UNION. With UNION you can combine 2 queries. After the UNION command you can start a new query as normal. Only the number of columns in both data sets must be the same. I.e. your query can only output 3 columns.",
   "lvl" : 10},
   {"text" : [],
   "text_en" : [],
  "challenge": "Super! Du hast das Spiel durchgespielt! ",
  "challenge_en": "Excellent! You finished the game!",
  "validation"  : [{"validationquery": [""],
           "validationerror":"",
           "truecondition":"false",
           "correctanswer":["true","false","false","false"],
           "speakbblanswer":["Super! Du hast das Spiel durchgespielt! ","Super! Du hast das Spiel durchgespielt! "],
           "speakbblanswer_en":["Excellent! You finished the game!","Excellent! You finished the game! "],
           "imganswer":["img/happybee.png","img/surprisebee.png"],
           "whitelist": [""],
           "blacklist": ["maxmustermann","alexamusterfrau"]}],
  "category":"url",
  "hints"    : "hints deactivated",
  "lvl" : 10}
];
var db = null; //createdb();
createTableUsers(db);
createTableShoes(db);
createTableMa(db);
createTableTables(db);
createTableColumns(db);
createTableKunden(db);

//////////////  HINTS

function show_hints(){
    var hint= TASKS[task_index]["hints_"+language_code]!=undefined ? TASKS[task_index]["hints_"+language_code] : TASKS[task_index].hints;
    document.getElementsByClassName("btnboxtxt")[0].innerHTML=hint;
    var e = document.getElementById('btnboxre');
    if(e.style.display == 'block'){
      e.style.display = 'none';
   }else if(hint=="hints deactivated"){
      document.querySelector("#modal > div >p ").innerHTML = "<h3>"+translate("Information")+"</h3><h5>"+translate("In dieser Herausforderung gibt es keine Tipps.")+"</h5> <br><button class='btn btn-lg btn-primary btn-block' id='btn_modal' type='submit' onclick='close_modal()'>"+translate("OK")+"</button>";
      document.getElementById("modal").style.display='block';
   }else if(hintperlvl <= 0){
      document.querySelector("#modal > div >p ").innerHTML = "<h3>"+translate("Information")+"</h3><h5>"+translate("Es gibt pro Level nur einen Tipp.")+"</h5> <br><button class='btn btn-lg btn-primary btn-block' id='btn_modal' type='submit' onclick='close_modal()'>"+translate("OK")+"</button>";
      document.getElementById("modal").style.display='block';
      e.style.display = 'block';
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
         document.querySelector("#modal > div >p ").innerHTML = "<h3>"+translate("Information")+"</h3><h5>"+translate("Deine Tipps sind aufgebraucht.")+"</h5><br><button class='btn btn-lg btn-primary btn-block' id='btn_modal' type='submit' onclick='close_modal()'>"+translate("OK")+"</button>";
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
   //    document.querySelector("#modal > div >p ").innerHTML ='Der Button wird erst nach 3 Fehlversuchen aktiviert.';
   //    document.getElementById("modal").style.display='block';

   // }
}

function change_codemode(){
   var checked= document.getElementById("switcher").checked;
   var category=TASKS[task_index].category;
   if(checked){
      document.getElementById("codetxt").style.display="block";
      document.getElementById("behindcodesearch").style.display="none";
      document.getElementById("behindcodelogin").style.display="none";
      document.getElementById("behindcodeurl").style.display="none";
   }
   else{
      document.getElementById("codetxt").style.display="none";
      switch (category){
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

   change_category();
   if(bbltxtindex >= TASKS[task_index].text.length){
      show_lvl();
      bbltxtindex=0;
   }else{
      document.getElementById("speakbubble_h2").innerHTML = TASKS[task_index]["text_"+language_code]!=undefined ? TASKS[task_index]["text_"+language_code][bbltxtindex].h2 : TASKS[task_index].text[bbltxtindex].h2;
      document.getElementById("speakbubble_h3").innerHTML = TASKS[task_index]["text_"+language_code]!=undefined ? TASKS[task_index]["text_"+language_code][bbltxtindex].h3 : TASKS[task_index].text[bbltxtindex].h3;
      document.getElementById("insect").src = TASKS[task_index].text[bbltxtindex].img;
      bbltxtindex=bbltxtindex+1;
   }
}
function show_lvl(){
   document.getElementById("speakbubble_h2").innerHTML = TASKS[task_index]["challenge_"+language_code]!=undefined ? TASKS[task_index]["challenge_"+language_code] : TASKS[task_index].challenge;
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

function change_category(){
   document.getElementsByClassName("form-signin")[0].style.height="auto";
   document.getElementById("sneaker_img").style.display='none';
   document.getElementById("url_output").style.display='none';
   document.getElementById("loginlabel").style.textAlign = 'left';
   document.getElementById("suchergebnisse").style.display = 'none';
   if(TASKS[task_index].category == "login"){
      document.getElementById('loginlabel').innerHTML= translate("Bitte einloggen");
      document.getElementById("username").style.display = 'block';
      document.getElementById("password").style.display = 'block';
      document.getElementById("login_btn").style.display = 'block';
      document.getElementById("suchleiste").style.display = 'none';
      document.getElementById("suche_btn").style.display = 'none';
      document.getElementById("logout_btn").style.display = 'none';
      document.getElementById("url").style.display = 'none';
      document.getElementsByClassName("form-signin")[0].style.maxWidth="28%";
   }else if(TASKS[task_index].category == "search"){
      document.getElementById('loginlabel').innerHTML= translate("Produktsuche");
      document.getElementById("username").style.display = 'none';
      document.getElementById("password").style.display = 'none';
      document.getElementById("login_btn").style.display = 'none';
      document.getElementById("suchleiste").style.display = 'block';
      document.getElementById("suche_btn").style.display = 'block';
      document.getElementById("logout_btn").style.display = 'none';
      document.getElementsByClassName("form-signin")[0].style.maxWidth="43%";
      document.getElementById("url").style.display = 'none';
   }else if(TASKS[task_index].category == "url"){
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
      document.getElementById('url').value = "https://sql-insekten.example.com/index.php?"+translate("produkt_id")+"=0";
      document.getElementById("marke").innerHTML= "<strong>"+translate("Marke")+":   </strong> Nicke"
      document.getElementById("groesse").innerHTML= "<strong>"+translate("Größe")+":   </strong> 40";
      document.getElementById("price").innerHTML= "<strong>"+translate("Preis")+":     </strong> 80"+translate("€");
   }
}

function validation(){
   var ergebnis=new Array();
   var lenminus=0;
   var qu = new Array();
   var correctanswer = new Array();
   var querysucessful = new Array();
   var category=TASKS[task_index].category;
   var query=generate_query();
   if(TASKS[task_index].validation[0].blacklist.includes(";")){
      queries=[query];
   }else{
      queries=query.split("--")[0];
      queries=queries.split(";");
   }
   if(TASKS[task_index].validation[0].validationquery[0] !="" && query!="notvalid"){
      queries.push(eval(TASKS[task_index].validation[0].validationquery[0]));
   }

   var prom= new Promise((resolve,reject) =>{
      for (let j in queries){
         var prom2= new Promise((resolve,reject) =>{
         if(!queries[j].trim().startsWith("--") && queries[j].trim()!=""){

            try {
               results = alasql(queries[j]);
               if (eval(TASKS[task_index].validation[0].truecondition)) {        
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
            } catch (error) {
               if(TASKS[task_index].validation[0].validationquery[0] !="" && error.message == eval(TASKS[task_index].validation[0].validationerror)){
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
      form_success(category,ergebnis, querysucessful,correct[0], correct[1],qu);
      
      
   });
   prom.catch(error => {
      false_answer(category);
      });
}

function generate_query(){
   var category=TASKS[task_index].category;
   switch (category){
      case "login":
         var uname=document.getElementById("username").value;
         var pw=document.getElementById("password").value;
         var select="SELECT "+translate("benutzername")+" ";
         var from="FROM "+translate("benutzer")+" ";
         var where="WHERE "+translate("benutzername")+" ='" + uname + "' AND "+translate("passwort")+" ='"+ md5(pw) + "';";
         document.querySelector("#codetxt > code").innerHTML = select + "\n" +
                                                               from   +"\n" +
                                                               where;
         var query="SELECT "+translate("benutzername")+" FROM "+translate("benutzer")+" WHERE "+translate("benutzername")+" ='" + uname + "' AND "+translate("passwort")+" ='"+ md5(pw) + "'";
      break;
      case "search":
         var search=document.getElementById("suchleiste").value;
         var query="SELECT "+translate("produkt_id")+", "+translate("marke")+", "+translate("groesse")+", "+translate("preis")+" FROM "+translate("schuhe")+" WHERE "+translate("marke")+"='" + search + "'";
         var select="SELECT "+translate("produkt_id")+", "+translate("marke")+", "+translate("groesse")+", "+translate("preis")+" ";
         var from="FROM "+translate("schuhe")+" ";
         var where="WHERE "+translate("marke")+"='" + search + "';";
         document.querySelector("#codetxt > code").innerHTML = select + "\n" +
                                                               from   +"\n" +
                                                               where;
         break;
      case "url":
         var url=document.getElementById("url").value;
         var id=url.toString().split('?'+translate("produkt_id")+"=");
         var query="SELECT "+translate("marke")+", "+translate("groesse")+", "+translate("preis")+" FROM "+translate("schuhe")+" WHERE "+translate("produkt_id")+"=" + id[id.length-1]+"";
         var select="SELECT "+translate("marke")+", "+translate("groesse")+", "+translate("preis")+" ";
         var from="FROM "+translate("schuhe")+" ";
         var where="WHERE " + translate("produkt_id")+" = "+ id[id.length-1]+";";
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
         if(query.includes(translate(blacklistarray[i]))){
            valid=false; 
         }
      }
   }
   for (let k in whitelistarray){
      if(whitelistarray[k]!=""){
         if(query.includes(translate(whitelistarray[k]))){
         }
         else{ 
            valid=false;
         }
      }
   }

   return valid;
}

function form_success(category,ergebnis,querysucessful,answer,answer_index,qu){
   // console.log(qu.trim());
   var success;
   // console.log(ergebnis);
   // console.log(qu);
   // console.log(querysucessful);
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
      if(querysucessful.includes("true")){
         success='true';
      }else{
         success='false';
      }
   }
   if(success=='true'){

      switch (category){
         case "login":
            document.getElementById('loginlabel').innerHTML= translate("Login war erfolgreich.")+" <br> <br> "+translate("Willkommen")+" " + ergebnis[index][0][translate('benutzername')] +"!";
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
            document.getElementById('loginlabel').innerHTML= translate("Suchergebnisse");
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
            document.getElementById('loginlabel').innerHTML= translate("Ergebnis");
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
      switch (category){
         case "login":
            if(eval(TASKS[task_index_temp].validation[0].truecondition.split('&&')[0].replace("results.length","ergebnis[index].length")) && typeof(ergebnis[index][0][translate('benutzername')])!="undefined"){
               document.getElementById('loginlabel').innerHTML= translate("Login war erfolgreich.")+" <br> <br>"+translate("Willkommen")+" " + ergebnis[index][0][translate('benutzername')] +"!";
               document.getElementById("username").style.display = 'none';
               document.getElementById("password").style.display = 'none';
               document.getElementById("login_btn").style.display = 'none';
               document.getElementById("suchergebnisse").style.display = 'none';
               document.getElementById("logout_btn").style.display = 'block';
            }else{
               document.getElementById('loginlabel').innerHTML= translate("Login fehlgeschlagen");
            }
            
            break;
         case "search":
            document.getElementById("loginlabel").style.textAlign = 'center';
            document.getElementById('loginlabel').innerHTML= translate("Suchergebnisse");
            document.getElementById("suchergebnisse").style.display = 'block';
            generate_resulttable(qu[index],ergebnis[index],task_index_temp); 
            break;
         case "url":
            document.getElementById("loginlabel").style.textAlign = 'center';
            document.getElementById("suchergebnisse").style.display = 'none';
            if(ergebnis[index].length==1){
               document.getElementById('loginlabel').innerHTML= translate("Ergebnis");
               document.getElementById("sneaker_img").style.display='block';
               document.getElementById("url_output").style.display='block';
               document.getElementById("url").style.display = 'block';
               
               generate_url_output(qu[index],ergebnis[index]); 

            }else{
               document.getElementById('loginlabel').innerHTML= translate("kein Suchergebnis");
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
      // if (correctanswer.includes("error")){
      //    // fails=fails+1;
      //    document.getElementById("speakbubble_h2").innerHTML=TASKS[task_index].validation[0]["speakbblanswer_"+language_code]!=undefined ? TASKS[task_index].validation[0]["speakbblanswer_"+language_code][0] : TASKS[task_index].validation[0].speakbblanswer[0];
      //    document.getElementById("speakbubble_h3").innerHTML="";
      //    document.getElementById("insect").src = TASKS[task_index].validation[0].imganswer[1];
      //    answer=false;
      // }else{
         if(correctanswer.includes("true")){
            document.getElementById("speakbubble_h2").innerHTML=TASKS[task_index].validation[0]["speakbblanswer_"+language_code]!=undefined ? TASKS[task_index].validation[0]["speakbblanswer_"+language_code][0] : TASKS[task_index].validation[0].speakbblanswer[0];
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
            document.getElementById('url').value = "https://sql-insekten.example.com/index.php?"+translate("produkt_id")+"=0";
            document.getElementById("marke").innerHTML= "<strong>"+translate("Marke")+":   </strong> Nicke"
            document.getElementById("groesse").innerHTML= "<strong>"+translate("Größe")+":   </strong> 40";
            document.getElementById("price").innerHTML= "<strong>"+translate("Preis")+":     </strong> 80"+translate("€")+"";
            answer=true;
         }else{
            // fails=fails+1;
            document.getElementById("speakbubble_h2").innerHTML= TASKS[task_index].validation[0]["speakbblanswer_"+language_code]!=undefined ? TASKS[task_index].validation[0]["speakbblanswer_"+language_code][1] : TASKS[task_index].validation[0].speakbblanswer[1];
            document.getElementById("speakbubble_h3").innerHTML="";
            document.getElementById("insect").src = TASKS[task_index].validation[0].imganswer[1];
            answer= false;
         }
      // }
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
      }else if(qu.includes(translate("benutzer"))){
         var columns=[translate("nutzer_id"),translate("benutzername"),translate("passwort"),translate("email")];
      }else if(qu.includes(translate("schuhe"))){
         var columns=[translate("produkt_id"),translate("marke"),translate("groesse"),translate("preis")];
      }else if(qu.includes(translate("mitarbeiter"))){
         var columns=[translate("ma_id"),translate("vorname"),translate("name"),translate("email"),translate("lohn"),translate("angestellt_seit")];
      }else if(qu.includes(translate("kunden"))){
         var columns=[translate("kunden_id"),translate("name"),translate("email"),translate("bestellnr"),translate("adresse")];
      }else{
         var columns=[translate("produkt_id"),translate("marke"),translate("groesse"),translate("preis")];
      }
   }else{
      var columns=[translate("produkt_id"),translate("marke"),translate("groesse"),translate("preis")];
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
   for (var i=0; i<ergebnis.length; i++)  {
      let row = table.insertRow();
      for (key in columns) {
        let cell = row.insertCell();
        let text = document.createTextNode(ergebnis[i][columns[key]]);
        cell.appendChild(text);
      }
    }
}

function generate_url_output(qu,ergebnis){
   document.getElementsByClassName("form-signin")[0].style.height="300px";
   document.getElementById("sneaker_img").style.marginLeft= "20%"
   if(typeof(ergebnis[0][translate('marke')])!="undefined"){
      if(ergebnis[0][translate('marke')].toString().length>17){
         var len=20-(ergebnis[0][translate('marke')].length-17);
         document.getElementById("sneaker_img").style.marginLeft= len+"%"

      }
   }
   if(typeof(ergebnis[0][translate('groesse')]) !="undefined"){
      if(ergebnis[0][translate('groesse')].toString().length>17 ){
         var len=20-(ergebnis[0][translate('groesse')].length-17);
         document.getElementById("sneaker_img").style.marginLeft= len+"%"

      }
   }
   if(typeof(ergebnis[0][translate('preis')]) !="undefined"){
      if(ergebnis[0][translate('preis')].toString().length>17){
         var len=20-(ergebnis[0][translate('preis')].length-17);
         document.getElementById("sneaker_img").style.marginLeft= len+"%"
      }
   }
   document.getElementById("marke").innerHTML= "<strong>"+translate("Marke")+":   </strong>" + ergebnis[0][translate('marke')];
   document.getElementById("groesse").innerHTML= "<strong>"+translate("Größe")+":   </strong>" + ergebnis[0][translate('groesse')];
   document.getElementById("price").innerHTML= "<strong>"+translate("Preis")+":     </strong>" + ergebnis[0][translate('preis')] + translate("€");
}

/////// DATABASE FUNCTIONS

function nullDataHandler(transaction, results) { }
 
function createTableUsers(db)
{
   /* The first query causes the transaction to (intentionally) fail if the table exists. */
   alasql("DROP TABLE IF EXISTS "+translate("benutzer")+";");
   alasql("create table "+translate("benutzer")+"("+translate("nutzer_id")+" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , "+translate("benutzername")+" TEXT NOT NULL, "+translate("passwort")+" TEXT NOT NULL, "+translate("email")+" TEXT NOT NULL );");
   /* These insertions will be skipped if the table already exists. */
   alasql("INSERT INTO "+translate("benutzer")+" VALUES (0,'"+translate("maxmustermann")+"','482c811da5d5b4bc6d497ffa98491e38','"+translate("maxmustermann@example.com")+"');");
   alasql("INSERT INTO "+translate("benutzer")+" VALUES (1,'"+translate("alexamusterfrau")+"','ccce608af11293cecc1c1c272a04d54d','"+translate("alexamusterfrau@example.com")+"');");
   alasql("INSERT INTO "+translate("benutzer")+" VALUES (2,'"+translate("kati1809")+"','5e446b734ae11b7f30c907e54d89a84e','"+translate("kati@example.com")+"');");
}
function createTableShoes(db){
   /* The first query causes the transaction to (intentionally) fail if the table exists. */
   alasql("DROP TABLE IF EXISTS "+translate("schuhe")+";");
   alasql("create table "+translate("schuhe")+"("+translate("produkt_id")+" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , "+translate("marke")+" TEXT NOT NULL, "+translate("groesse")+" INT NOT NULL, "+translate("preis")+" INT NOT NULL );");
   /* These insertions will be skipped if the table already exists. */
   alasql("INSERT INTO "+translate("schuhe")+" VALUES (0,'Nicke',40,80);");
   alasql("INSERT INTO "+translate("schuhe")+" VALUES (1,'Abidas',37,70);");
   alasql("INSERT INTO "+translate("schuhe")+" VALUES (2,'Nicke',42,80);");
   alasql("INSERT INTO "+translate("schuhe")+" VALUES (3,'Abidas',41,80);");
   alasql("INSERT INTO "+translate("schuhe")+" VALUES (4,'Nicke',38,100);");
   alasql("INSERT INTO "+translate("schuhe")+" VALUES (5,'Nicke',40,80);");
   alasql("INSERT INTO "+translate("schuhe")+" VALUES (6,'Abidas',40,70);");
   alasql("INSERT INTO "+translate("schuhe")+" VALUES (7,'Conwers',43,60);");
   alasql("INSERT INTO "+translate("schuhe")+" VALUES (8,'Weja',38,130);");
   alasql("INSERT INTO "+translate("schuhe")+" VALUES (9,'Reedok',45,70);");
   alasql("INSERT INTO "+translate("schuhe")+" VALUES (10,'Weja',36,120);");
   alasql("INSERT INTO "+translate("schuhe")+" VALUES (11,'Reedok',46,60);");
   alasql("INSERT INTO "+translate("schuhe")+" VALUES (12,'Trash Plant',39,190);");
   alasql("INSERT INTO "+translate("schuhe")+" VALUES (13,'Bifffalo',39,99);", [], nullDataHandler, dataHandler);
}
function createTableMa(db){
   /* The first query causes the transaction to (intentionally) fail if the table exists. */
   alasql("DROP TABLE IF EXISTS "+translate("mitarbeiter")+";");
   alasql("create table "+translate("mitarbeiter")+"("+translate("ma_id")+" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , "+translate("vorname")+" TEXT NOT NULL, "+translate("name")+" TEXT NOT NULL, "+translate("email")+" TEXT NOT NULL, "+ translate("lohn")+" INT NOT NULL, "+translate("angestellt_seit")+" INT NOT NULL );");
   /* These insertions will be skipped if the table already exists. */
   alasql("INSERT INTO "+translate("mitarbeiter")+" VALUES (0,'Franziska','die Große','examplemail.com',700,2020);");
   alasql("INSERT INTO "+translate("mitarbeiter")+" VALUES (1,'Mohammed','Schneider','schneider@webb.de',1700,2017);");
   alasql("INSERT INTO "+translate("mitarbeiter")+" VALUES (2,'Greta Maria','Reifenberger','gretamaria-reifenberger@email.com',4500,2000);");
   alasql("INSERT INTO "+translate("mitarbeiter")+" VALUES (3,'Dietmar','Kaslowski','dietmar0123@exm.com',2800,2005);");
   alasql("INSERT INTO "+translate("mitarbeiter")+" VALUES (4,'Jessica','Koch','Koch1009@mail.com',1200,2019);");
   alasql("INSERT INTO "+translate("mitarbeiter")+" VALUES (5,'Clarissa','Waismeier','waismeier.com',3500,2010);");
}
function createTableKunden(db){
   /* The first query causes the transaction to (intentionally) fail if the table exists. */
   alasql("DROP TABLE IF EXISTS "+translate("kunden")+";");
   alasql("create table " +translate("kunden")+"("+translate("kunden_id")+" INTEGER NOT NULL PRIMARY KEY, "+translate("name")+" TEXT NOT NULL, "+translate("email")+" TEXT NOT NULL, "+translate("bestellnr")+" INT NOT NULL, "+translate("adresse")+" TEXT NOT NULL );");
   /* These insertions will be skipped if the table already exists. */
   alasql("INSERT INTO "+translate("kunden")+" VALUES (0,'Franziska Baumgartner','examplemail.com',12345,'Studentenstr. 10');");
   alasql("INSERT INTO "+translate("kunden")+" VALUES (1,'Mohammed Weinzierl','weinzierlr@webb.de',54321, 'Merkelstr. 98');");
   alasql("INSERT INTO "+translate("kunden")+" VALUES (2,'Maria Königsberg','maria_königsweg@mail.com',28888,'Veilchenstr. 13');");
   alasql("INSERT INTO "+translate("kunden")+" VALUES (3,'Dimitri Muster','dietmar0123@exm.com',33445,'Seestr. 18');");
}
function createTableTables(db){
   alasql("DROP TABLE IF EXISTS information_schema_tables;");
      /* The first query causes the transaction to (intentionally) fail if the table exists. */
      alasql("create table information_schema_tables(table_name TEXT NOT NULL, table_type TEXT NOT NULL, table_rows INT NOT NULL);");
      /* These insertions will be skipped if the table already exists. */
      alasql("INSERT INTO information_schema_tables VALUES ('"+translate("benutzer")+"','BASE TABLE',3);");
      alasql("INSERT INTO information_schema_tables VALUES ('"+translate("schuhe")+"','BASE TABLE',14);");
      alasql("INSERT INTO information_schema_tables VALUES ('"+translate("mitarbeiter")+"','BASE TABLE',6);");
      alasql("INSERT INTO information_schema_tables VALUES ('"+translate("kunden")+"','BASE TABLE',4);");
}
function createTableColumns(db){
   /* The first query causes the transaction to (intentionally) fail if the table exists. */
   alasql("DROP TABLE IF EXISTS information_schema_columns;");
   alasql("create table information_schema_columns(table_name TEXT NOT NULL, column_name TEXT NOT NULL, data_type TEXT NOT NULL);");
   /* These insertions will be skipped if the table already exists. */
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("benutzer")+"','"+translate("nutzer_id")+"','NUMBER');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("benutzer")+"','"+translate("nutzername")+"','VARCHAR2');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("benutzer")+"','"+translate("passwort")+"','VARCHAR2');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("benutzer")+"','"+translate("email")+"','VARCHAR2');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("schuhe")+"','"+translate("produkt_id")+"','NUMBER');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("schuhe")+"','"+translate("marke")+"','VARCHAR2');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("schuhe")+"','"+translate("groesse")+"','NUMBER');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("schuhe")+"','"+translate("preis")+"','NUMBER');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("mitarbeiter")+"','"+translate("ma_id")+"','NUMBER');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("mitarbeiter")+"','"+translate("name")+"','VARCHAR2');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("mitarbeiter")+"','"+translate("vorname")+"','VARCHAR2');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("mitarbeiter")+"','"+translate("email")+"','VARCHAR2');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("mitarbeiter")+"','"+translate("lohn")+"','NUMBER');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("mitarbeiter")+"','"+translate("angestellt_seit")+"','NUMBER');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("kunden")+"','"+translate("kunden_id")+"','NUMBER');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("kunden")+"','"+translate("name")+"','VARCHAR2');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("kunden")+"','"+translate("email")+"','VARCHAR2');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("kunden")+"','"+translate("bestellnr")+"','NUMBER');");
   alasql("INSERT INTO information_schema_columns VALUES ('"+translate("kunden")+"','"+translate("adresse")+"','VARCHAR2');");
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
   //  console.log(results.length);
    for (var i=0; i<results.length; i++) {
        // Each row is a standard JavaScript array indexed by
        // column names.
        var row = results[i];
        string = string + row['username'] + " (ID "+row['id']+")\n";
    }
   //  console.log(string);
}
function createdb(){
   try {
      if (!window.openDatabase) {
          alert('Your browser does not support the database. Try another.');
          window.close();
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
function md5(str) {
   // https://www.joocom.de/blog/posts/md5-hash-mit-javascript-erzeugen/

   var xl;
 
   var rotateLeft = function(lValue, iShiftBits) {
     return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
   };
 
   var addUnsigned = function(lX, lY) {
     var lX4, lY4, lX8, lY8, lResult;
     lX8 = (lX & 0x80000000);
     lY8 = (lY & 0x80000000);
     lX4 = (lX & 0x40000000);
     lY4 = (lY & 0x40000000);
     lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
     if (lX4 & lY4) {
       return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
     }
     if (lX4 | lY4) {
       if (lResult & 0x40000000) {
         return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
       } else {
         return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
       }
     } else {
       return (lResult ^ lX8 ^ lY8);
     }
   };
 
   var _F = function(x, y, z) {
     return (x & y) | ((~x) & z);
   };
   var _G = function(x, y, z) {
     return (x & z) | (y & (~z));
   };
   var _H = function(x, y, z) {
     return (x ^ y ^ z);
   };
   var _I = function(x, y, z) {
     return (y ^ (x | (~z)));
   };
 
   var _FF = function(a, b, c, d, x, s, ac) {
     a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac));
     return addUnsigned(rotateLeft(a, s), b);
   };
 
   var _GG = function(a, b, c, d, x, s, ac) {
     a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac));
     return addUnsigned(rotateLeft(a, s), b);
   };
 
   var _HH = function(a, b, c, d, x, s, ac) {
     a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac));
     return addUnsigned(rotateLeft(a, s), b);
   };
 
   var _II = function(a, b, c, d, x, s, ac) {
     a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac));
     return addUnsigned(rotateLeft(a, s), b);
   };
 
   var convertToWordArray = function(str) {
     var lWordCount;
     var lMessageLength = str.length;
     var lNumberOfWords_temp1 = lMessageLength + 8;
     var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
     var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
     var lWordArray = new Array(lNumberOfWords - 1);
     var lBytePosition = 0;
     var lByteCount = 0;
     while (lByteCount < lMessageLength) {
       lWordCount = (lByteCount - (lByteCount % 4)) / 4;
       lBytePosition = (lByteCount % 4) * 8;
       lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount) << lBytePosition));
       lByteCount++;
     }
     lWordCount = (lByteCount - (lByteCount % 4)) / 4;
     lBytePosition = (lByteCount % 4) * 8;
     lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
     lWordArray[lNumberOfWords - 2] = lMessageLength << 3;     lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
     return lWordArray;
   };
 
   var wordToHex = function(lValue) {
     var wordToHexValue = '',
       wordToHexValue_temp = '',
       lByte, lCount;
     for (lCount = 0; lCount <= 3; lCount++) {       lByte = (lValue >>> (lCount * 8)) & 255;
       wordToHexValue_temp = '0' + lByte.toString(16);
       wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
     }
     return wordToHexValue;
   };
 
   var utf8_encode = function(string) {
       string = (string+'').replace(/\r\n/g, "\n").replace(/\r/g, "\n");
 
       var utftext = "";
       var start, end;
       var stringl = 0;
 
       start = end = 0;
       stringl = string.length;
       for (var n = 0; n < stringl; n++) {
           var c1 = string.charCodeAt(n);
           var enc = null;
 
           if (c1 < 128) {               end++;           } else if((c1 > 127) && (c1 < 2048)) {               enc = String.fromCharCode((c1 >> 6) | 192) + String.fromCharCode((c1 & 63) | 128);
           } else {
               enc = String.fromCharCode((c1 >> 12) | 224) + String.fromCharCode(((c1 >> 6) & 63) | 128) + String.fromCharCode((c1 & 63) | 128);
           }
           if (enc != null) {
               if (end > start) {
                   utftext += string.substring(start, end);
               }
               utftext += enc;
               start = end = n+1;
           }
       }
 
       if (end > start) {
           utftext += string.substring(start, string.length);
       }
 
       return utftext;
   }
 
   var x = [],
     k, AA, BB, CC, DD, a, b, c, d, S11 = 7,
     S12 = 12,
     S13 = 17,
     S14 = 22,
     S21 = 5,
     S22 = 9,
     S23 = 14,
     S24 = 20,
     S31 = 4,
     S32 = 11,
     S33 = 16,
     S34 = 23,
     S41 = 6,
     S42 = 10,
     S43 = 15,
     S44 = 21;
 
   str = utf8_encode(str);
   x = convertToWordArray(str);
   a = 0x67452301;
   b = 0xEFCDAB89;
   c = 0x98BADCFE;
   d = 0x10325476;
 
   xl = x.length;
   for (k = 0; k < xl; k += 16) {
     AA = a;
     BB = b;
     CC = c;
     DD = d;
     a = _FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
     d = _FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
     c = _FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
     b = _FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
     a = _FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
     d = _FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
     c = _FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
     b = _FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
     a = _FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
     d = _FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
     c = _FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
     b = _FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
     a = _FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
     d = _FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
     c = _FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
     b = _FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
     a = _GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
     d = _GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
     c = _GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
     b = _GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
     a = _GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
     d = _GG(d, a, b, c, x[k + 10], S22, 0x2441453);
     c = _GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
     b = _GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
     a = _GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
     d = _GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
     c = _GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
     b = _GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
     a = _GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
     d = _GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
     c = _GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
     b = _GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
     a = _HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
     d = _HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
     c = _HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
     b = _HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
     a = _HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
     d = _HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
     c = _HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
     b = _HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
     a = _HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
     d = _HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
     c = _HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
     b = _HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
     a = _HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
     d = _HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
     c = _HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
     b = _HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
     a = _II(a, b, c, d, x[k + 0], S41, 0xF4292244);
     d = _II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
     c = _II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
     b = _II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
     a = _II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
     d = _II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
     c = _II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
     b = _II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
     a = _II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
     d = _II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
     c = _II(c, d, a, b, x[k + 6], S43, 0xA3014314);
     b = _II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
     a = _II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
     d = _II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
     c = _II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
     b = _II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
     a = addUnsigned(a, AA);
     b = addUnsigned(b, BB);
     c = addUnsigned(c, CC);
     d = addUnsigned(d, DD);
   }
 
   var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
 
   return temp.toLowerCase();
 }
//////////////// INFO MODAL 
function show_info(){
   e=document.getElementById("modal");
   if(e.style.display == 'block'){
      e.style.display = 'none';
   }
   else{
      if(cheatactive){
        document.querySelector("#modal > div >p ").innerHTML = "<h3>"+translate("Informationen")+"</h3> <a target='_blank' href='https://icons8.com/icon/19209/light'>Light</a> icon by <a target='_blank' href='https://icons8.com'>Icons8</a> <br><a href='https://de.freepik.com/vektoren/blume'>Blume Vektor erstellt von terdpongvector - de.freepik.com</a> <div>Icons made by <a href='https://www.flaticon.com/authors/itim2101' title='itim2101'>itim2101</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a></div> <br> <br> <input type='text' class='form-control' id='cheat_input'/>  <br> <button class='btn btn-lg btn-primary btn-block' id='cheat_btn' type='button' onclick='cheat()'>cheat</button> </h5> <button class='btn btn-lg btn-primary btn-block' id='btn_modal' type='submit' onclick='close_modal()'>Ok</button>";
      }else{
         document.querySelector("#modal > div >p ").innerHTML = "<h3>"+translate("Informationen")+"</h3> <a target='_blank' href='https://icons8.com/icon/19209/light'>Light</a> icon by <a target='_blank' href='https://icons8.com'>Icons8</a> <br><a href='https://de.freepik.com/vektoren/blume'>Blume Vektor erstellt von terdpongvector - de.freepik.com</a> <div>Icons made by <a href='https://www.flaticon.com/authors/itim2101' title='itim2101'>itim2101</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a></div><div>Icons erstellt von <a href='https://www.freepik.com' title='Freepik'>Freepik</a> from <a href='https://www.flaticon.com/de/' title='Flaticon'>www.flaticon.com</a></div> </h5><br><button class='btn btn-lg btn-primary btn-block' id='btn_modal' type='submit' onclick='close_modal()'>Ok</button>";
      }
      
        e.style.display = 'block';
      
   }
}

function show_menu(show = null){
   e=document.evaluate("/html/body/div[1]/nav/ul/li/ul", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
   if(show != null && show) {
      e.style.display = 'block';
   } else if((show!=null && !show) || e.style.display == 'block'){
      document.evaluate("/html/body/div[1]/nav/ul/li/ul/li/ul", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.style.display='none';
      e.style.display = 'none';
   }else{
      e.style.display = 'block';
   }

}
function show_lan(){
   e=document.getElementById('change_language');
   if(e.style.display == 'block'){
      e.style.display = 'none';
   }else{
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
         document.getElementById("speakbubble_h2").innerHTML= TASKS[task_index].validation[0]["speakbblanswer_"+language_code]!=undefined ? TASKS[task_index].validation[0]["speakbblanswer_"+language_code][0] : TASKS[task_index].validation[0].speakbblanswer[0];
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
