lang_de = {
  "%joyride_info1": "Dies ist ein SQL-Injection-Lernspiel. Mit SQL-Injections (dt. SQL-Einschleusung) kann man Websites hacken, indem man durch das Einschleusen von SQL-Code beliebige Daten in der Datenbank ändern, löschen oder auslesen kann.", 
  "%joyride_info2": "Diese Sicherheitslücke ist oft in Anwendungen zu finden, in denen keine Prepared Statements verwendet werden.Da wir dies aus Lernzwecken nicht verwenden, ist hier fast alles möglich!<br> <br> In SQL-Insekten lernst du von Level zu Level wie Hacker diese Sicherheitslücke ausnutzen, dabei wären Vorkenntisse in SQL empfehlenswert.",
  "%joyride_login": "In diesem ersten Level haben wir hier ein Login-Formular, wie man es so von anderen Websiten kennt.",
  "%joyride_details": "Unter dem Button 'Hintergrunddetails anzeigen' kannst du dir die live-erzeugte SQL-Query anschauen und den Programmcode der Anwendung.",
  "%joyride_hints1": "Einen Tipp kannst du dir hier bei dem Button anzeigen lassen.",
  "%joyride_hints2": "Aber Vorsicht: Dir stehen insgesamt nur 3 Tipps zur Verfügung!",
  "%joyride_menu": "In dem Menü kannst du Informationen einsehen und die Sprache ändern.",
  "%joyride_info3": "Allgemein versucht man durch geschickten Input in den Eingabefeldern eine Syntax-korrekte SQL-Query zu erzeugen, die die Aufgabe löst.",
  "%joyride_info4": "Hierbei ist es wichtig bewusst rumzuprobieren oder sich die Hindergrunddetails anzuschauen, um zu wissen, wie die Query aus den Werten der Eingabefelder erzeugt wird, die dann schließlich in der Datenbank ausgeführt wird.",
  "%joyride_info5": "Kleiner Hinweis im Voraus: In den ersten Levels wirst du geschickt Apostrophe und SQL-Kommentare -- verwenden.",
}

lang_en = {
  "%joyride_info1": "This is an SQL-injection learning game. SQL injections allow you to hack websites by changing, deleting or reading arbitrary data in the database by injecting SQL code.", 
  "%joyride_info2": "This vulnerability is often found in applications that do not use Prepared Statements. Since we do not use them in this game (for learning purposes ;-), almost anything is possible here!<br> <br> In SQL Insekten, you will learn from level to level how hackers exploit this vulnerability. Prior knowledge in SQL is recommended.",
  "%joyride_login": "In this first level, you see a login form, as you know it from other websites.",
  "%joyride_details": "When clicking the 'Show background details' button, it shows you the generated SQL query as well as the application's program code.",
  "%joyride_hints1": "You can see a hint here when clicking this button.",
  "%joyride_hints2": "But beware: You only have three 3 hints in total!",
  "%joyride_menu": "Behind this menu, there is more information about the game and you can change the language.",
  "%joyride_info3": "Basically, what you need to do is to build a syntax-correct SQL query by typing the right input in the input fields to solve the exercise.",
  "%joyride_info4": "It can be helpful for you to play around and look at the background details to understand how the query is generated from the input-field values, which is then finally executed within the database.",
  "%joyride_info5": "A small hint in advance: In the first levels, you need to use apostrophes and SQL comments --",
  "SQL-Insekten - Das SQL-Injection-Lernspiel": "SQL-Insekten - The SQL Injection Learning Game", 
  "Spiel neustarten": "Restart game", 
  "Über das Spiel": "About", 
  "Sprache ändern": "Change language", 
  "Information": "Info",
  "Informationen": "Information",
  "In dieser Herausforderung gibt es keine Tipps.": "There are no hints for this challenge.",
  "Es gibt pro Level nur einen Tipp.": "There is only one hint per level.",
  "Deine Tipps sind aufgebraucht.": "You do not have any hints left.", 
  "OK": "OK", 
  "Tipps": "Hints",
  "SQL-Insekten": "SQL-Insekten",
  "Willkommen bei SQL-Insekten!": "Welcome to SQL Insekten", 
  "Genug geredet, los gehts!": "Enough talking, let's go!",
  "Weiter": "Next",
  "Bitte einloggen": "Please log in", 
  "Einloggen": "Login", 
  "Suchen": "Search", 
  "Marke": "Brand", 
  "Größe": "Size", 
  "Preis": "Price", 
  "€": "$", 
  "Ausloggen": "Logout", 
  "Hintergrunddetails anzeigen": "Show background details", 
  "Tipp einblenden": "Show hint", 
  "Hintergrund-Code": "Program code",
  "Erzeugte SQL-Query": "Generated SQL query",
  "Benutzername": "Username", 
  "Passwort": "Password", 
  "benutzer": "users",
  "benutzername": "username",
  "nutzer_id": "user_id",
  "passwort": "password",
  "schuhe": "shoes",
  "produkt_id": "product_id",
  "marke": "brand",
  "groesse": "size",
  "preis": "price",
  "email": "email",
  "alexamusterfrau": "jane",
  "maxmustermann": "maxmiller",
  "kati1809": "kati1809",
  "alexamusterfrau@example.com": "jane@example.com",
  "maxmustermann@example.com": "maxmiller@example.com",
  "kati@example.com": "kati@example.com",
  "vorname": "firstname",
  "lohn": "salary",
  "kunden": "customers",
  "kunden_id": "customer_id",
  "mitarbeiter": "staff",
  "name": "name",
  "ma_id": "staff_id",
  "nutzer_id": "user_id",
  "bestellnr": "order_id",
  "adresse": "address",
  "angestellt_seit": "employed_since",
  "nutzername": "username",
  "Produktsuche": "Product Search",
  "Suchergebnisse": "Search results",
  "Ergebnis": "Result",
  "Login fehlgeschlagen": "Login failed",
  "kein Suchergebnis": "empty search result",
  "Login war erfolgreich.": "Login was successful!",
  "Willkommen": "Welcome",
  ";":";",
}

language_code = "de";
lang = lang_de;

function change_language(new_language_code) {
  if(new_language_code == "de") {
      language_code = "de";
      lang = lang_de;
  } else {
      language_code = "en";
      lang = lang_en;
  }

  $('.lang,.joyride-next-tip').each(function(e) {
      // translate <... placeholder="...">
      if($(this).attr("placeholder") != undefined) {
        if($(this).attr("data-lang") != undefined) {
          $(this).attr("placeholder", translate($(this).attr("data-lang")));
          return;
        }
        $(this).attr("data-lang", $(this).attr("placeholder"));
        $(this).attr("placeholder", translate($(this).attr("placeholder")));
      }

      // translate <...>innerHTML</...>
      if($(this).attr("data-lang") != undefined) {
          this.innerHTML = translate($(this).attr("data-lang"));
          return;
      }
      $(this).attr("data-lang", this.innerHTML);
      this.innerHTML = translate(this.innerHTML);
  });
  if(TASKS != undefined && TASKS[task_index] != undefined && TASKS[task_index][language_code] != undefined) {
      $('#exercise_text').text(TASKS[task_index][language_code]);
  }

  show_menu(false);
}


function translate(txt) {
  if(lang[txt] == undefined) {
      if(language_code != "de" || txt.slice(0,1) == "%") {
          console.log('"' + txt + '": "", ');
      }
      return txt;
  }
  return lang[txt];
}