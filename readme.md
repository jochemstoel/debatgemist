![Tweede Kamer](https://debatgemist.tweedekamer.nl/profiles/debatgemist/modules/custom/debatgemist_custom/images/debatetype_images/commissievergaderingen/thorbeckezaal.jpg)

# DebatGemist
Node module *DebatGemist* doet HTTP verzoeken naar debatgemist.tweedekamer.nl en initialiseert een server side jQuery implementatie om de DOM uit te lezen. 

## Installeren met [NPM](https://www.npmjs.com/package/debatgemist)
```bash 
npm install debatgemist
```

Let op: deze module gebruikt deasync-promise voor het synchroniseren van Promise objecten en mijn mu.js voor het initialiseren van jQuery op een externe DOM. Indien je debatgemist downloadt van GitHub en niet via NPM installeert dan moet je zorgen dat die dependencies aanwezig zijn.  NPM geinstalleerd? Ga naar de map debatgemist en voer simpelweg *npm install*  uit.

## Initialiseren 
```js
var DebatGemist = require('debatgemist')
```

## Methoden
Deze module kent momenteel de volgende methoden. 

### DebatGemist.info(url)
Geeft informatie over een debat terug als Object. (titel, datum, beschrijving, afbeelding en mp4 url)

```js
var DebatGemist = require('debatgemist')
var debat = DebatGemist.info('https://debatgemist.tweedekamer.nl/debatten/data-analytics')
console.log(debat)
```

De uitvoer van *Debat.info* is bijvoorbeeld:

```json
{
   "title": "Data & analytics",
   "meta": {
      "datetime": "4 juli 2017",
      "description": "Vaste commissie voor Financiën",
      "image": "https://debatgemist.tweedekamer.nl/profiles/debatgemist/modules/custom/debatgemist_custom/images/debatetype_images/commissievergaderingen/thorbeckezaal.jpg"
   },
   "mp4": "https://debatgemist.tweedekamer.nl/Thorbeckezaal_20170704170424_720p.mp4"
}
```

### DebatGemist.recent(aantal)
Haalt meest recente debatten als URL string van de hoofdpagina, roept dan intern *DebatGemist.info* op elk item en geeft een lijst met debat objecten terug. Het argument *aantal* is nieuw en dat is het maximale aantal debatten dat wordt gefetcht. Misschien heb je namelijk aan de eerste of eerste twee genoeg. Standaardwaarde van *aantal* is 100 maar zo  veel staan er nooit op de website hoofdpagina.

```js 
var DebatGemist = require('debatgemist')
var recent = DebatGemist.recent() 
console.log(recent)

/* of met een aantal argument, in dit geval maximaal 3 */
var eersteDrieResultaten = DebatGemist.recent(3)
console.log(eersteDrieResultaten)
```

...
```json
[
   {
      "title": "Data & analytics",
      "meta": {
         "datetime": "4 juli 2017",
         "description": "Vaste commissie voor Financiën",
         "image": "https://debatgemist.tweedekamer.nl/profiles/debatgemist/modules/custom/debatgemist_custom/images/debatetype_images/commissievergaderingen/thorbeckezaal.jpg"
      },
      "mp4": "https://debatgemist.tweedekamer.nl/Thorbeckezaal_20170704170424_720p.mp4"
   },
   {
      "title": "Schadeafhandeling Groningen",
      "meta": {
         "datetime": "4 juli 2017",
         "description": "",
         "image": "https://debatgemist.tweedekamer.nl/sites/default/files/debate_type_images/Vergadering-14.jpg"
      },
      "mp4": "https://debatgemist.tweedekamer.nl/Plenaire_zaal_20170704164504_720p.mp4"
   },
   {
      "title": "Vervanging onderzeeboten",
      "meta": {
         "datetime": "4 juli 2017",
         "description": "Vaste commissie voor Defensie",
         "image": "https://debatgemist.tweedekamer.nl/profiles/debatgemist/modules/custom/debatgemist_custom/images/debatetype_images/commissievergaderingen/troelstrazaal.jpg"
      },
      "mp4": "https://debatgemist.tweedekamer.nl/Troelstrazaal_20170704163210_720p.mp4"
   },
   {
      "title": "Reactie petitie Justice for Johan",
      "meta": {
         "datetime": "4 juli 2017",
         "description": "",
         "image": "https://debatgemist.tweedekamer.nl/sites/default/files/debate_type_images/Vergadering-12.jpg"
      },
      "mp4": "https://debatgemist.tweedekamer.nl/Plenaire_zaal_20170704162423_720p.mp4"
   },
   {
      "title": "Tbs en forensische zorg",
      "meta": {
         "datetime": "4 juli 2017",
         "description": "",
         "image": "https://debatgemist.tweedekamer.nl/sites/default/files/debate_type_images/Vergadering-18.jpg"
      },
      "mp4": "https://debatgemist.tweedekamer.nl/Plenaire_zaal_20170704160359_720p.mp4"
   },
   ...
]
```

## Update 5 juli 2017
De functie recent() accepteert nu een argument met aantal. Zie hierboven.
In de map voorbeeld staan nu 2 voorbeelden. Het synchroon en asynchroon downloaden van de video of de HTML pagina van een debat.

## Todo
De volgende dingen was ik al mee bezig en zal ik afmaken als ik me een keer verveel.

* Query debatten in een bepaalde periode (tussen date & date)
* Query debatten op zoekterm
* Query debatten op spreker
* Voorbeeldje van een HTTP server die een debat URL pipet naar een HTML5 video element


<img src="http://33.media.tumblr.com/avatar_048a728a1488_128.png"><hr/>
# Jochem Stoel

Involuntary public figure.
<ul>
<li> https://www.npmjs.com/~jochemstoel</li>
<li> http://jochemstoel.github.io/</li>
<li> https://jochemstoel.tumblr.com/</li>
<li> https://jochemstoel.nl/</li>
<li> https://www.facebook.com/Jochem-Stoel-271292656217087/</li>
<li> https://www.quora.com/profile/Jochem-Stoel</li>
</ul>

