lang_de = {
  "%joyride_info1": "Dies ist ein SQL-Injection-Lernspiel. Mit SQL-Injections (dt. SQL-Einschleußung) kann man Websites hacken, indem man durch das Einschleusen von SQL-Code beliebige Daten in der Datenbank ändern, löschen oder auslesen kann.", 
  "%joyride_info2": "Diese Sicherheitslücke ist oft in Anwendungen zu finden, in denen keine Prepared Statements verwendet werden.Da wir dies aus Lernzwecken nicht verwenden, ist hier fast alles möglich!<br> <br> In SQL-Insekten lernst du von Level zu Level wie Hacker diese Sicherheitslücke ausnutzen, dabei wären Vorkenntisse in SQL empfehlenswert.",
  "%joyride_login": "In diesem ersten Level haben wir hier ein Login-Formular, wie man es so von anderen Websiten kennt.",
  "%joyride_details": "Unter dem Button 'Hintergrunddetails anzeigen' kannst du dir die live-erzeugte SQL-Query anschauen und den Programmcode der Anwendung.",
  "%joyride_hints1": "Einen Tipp kannst du dir hier bei dem Button anzeigen lassen.",
  "%joyride_hints2": "Aber Vorsicht: Dir stehen insgesamt nur 3 Tipps zur Verfügung!",
  "%joyride_menu": "In dem Menü kannst du Informationen einsehen und die Sprache ändern.",
  "%joyride_info3": "Allgemein versucht man durch geschickten Input in den Eingabefeldern eine Syntax-korrekte SQL-Query zu erzeugen, die die Aufgabe löst.",
  "%joyride_info4": "Hierbei ist es wichtig bewusst rumzuprobieren oder sich die Hindergrunddetails anzuschauen, um zu wissen, wie die Query aus den Werten der Eingabefelder erzeugt wird, die dann schließlich in der Datenbank ausgeführt wird.",
  "%joyride_info5": "Kleiner Hinweis im Voraus: In den ersten Levels wirst du geschickt Apostrophe und SQL-Kommentare '--' verwenden.",
}

lang_en = {
  "SQL-Insekten - Das SQL-Injection-Lernspiel": "SQL-Insekten - The SQL Injection Learning Game", 
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
  "passwort": "password",
  "schuhe": "schoes",
  "produkt_id": "product_id",
  "marke": "brand",
  "groesse": "size",
  "preis": "price",
}

language_code = "";

//change_language(window.navigator.language.slice(0, 2));
change_language("en");

function change_language(new_language_code) {
  if(new_language_code == "de") {
      language_code = "de";
      lang = lang_de;
  } else {
      language_code = "en";
      lang = lang_en;
  }

  $('.lang').each(function(e) {
      // translate <... placeholder="...">
      if($(this).prop("placeholder") != undefined) {
        if($(this).prop("data-lang") != undefined) {
          $(this).prop("placeholder", translate($(this).prop("data-lang")));
          return;
        }
        $(this).prop("data-lang", $(this).prop("placeholder"));
        $(this).prop("placeholder", translate($(this).prop("placeholder")));
      }

      // translate <...>innerHTML</...>
      if($(this).prop("data-lang") != undefined) {
          this.innerHTML = translate($(this).prop("data-lang"));
          return;
      }
      $(this).prop("data-lang", this.innerHTML);
      this.innerHTML = translate(this.innerHTML);
  });
  if(TASKS != undefined && TASKS[task_index] != undefined && TASKS[task_index][language_code] != undefined) {
      $('#exercise_text').text(TASKS[task_index][language_code]);
  }

  //$('#language-modal').foundation('reveal', 'close');
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