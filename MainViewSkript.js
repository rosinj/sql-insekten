var hints=3;
var bbltxtindex=0;
const m = 4;
const  n = 5;
var bbltxt = [
   ["Willkommen!","Dies ist ein SQL-Injection-Game. Mit SQL-Injections (dt. SQL-Einschleußung) kann man Websites hacken, indem man durch bestimmte SQL-Befehle auf eine Datenbank zugreift und Daten zweckentfremdet.","img/hellobiber.jpg"],
   ["","Hier lernst du von Level zu Level wie Hacker dabei vorgehen. Vorkenntisse wie SQL wären empfehlenswert. In diesem Fall haben wir rechts ein Login-Formular, wie man es so von anderen Websiten kennt.","img/hellobiber.jpg"],
   ["","In dem Login-Formular sollst du versuchen dich einzuhacken durch SQL-Injections. Oben wird die Anzahl deiner Tipps angezeigt, was zu Beginn 3 ist und in welchem Level du bist. Rechts unten bei 'Tipp einblenden' kannst du deinen Tipp einlösen.","img/hellobiber.jpg"],
   ["","Unter dem Button 'Hintergrunddetails anzeigen', der bei 3 Fehlversuchen aktiviert ist, kannst du die die Live Erzeugte SQL-Query anschauen oder den Hintergrundcode.","img/hellobiber.jpg"],
   ["Los gehts!","","img/happybiber.jpg"]
];

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
    var sw1=document.getElementById('sql_switcher');
    var sw2=document.getElementById('code_switcher');

   if(e.style.display == 'block'){
      e.style.display = 'none';
   }
   else{
       sw1.checked=true;
       sw2.checked=false;
      e.style.display = 'block';
   }

}
function speakbubble_next(){
   bbltxtindex=bbltxtindex+1;
   document.getElementById("speakbubble_h2").innerHTML = bbltxt[bbltxtindex][0];
   document.getElementById("speakbubble_h3").innerHTML = bbltxt[bbltxtindex][1];
   document.getElementById("biber").src = bbltxt[bbltxtindex][2];
   // console.log(bbltxt[0][bbltxtindex])
   // console.log(bbltxt[1][bbltxtindex])
   // console.log(bbltxt[2][bbltxtindex])


}