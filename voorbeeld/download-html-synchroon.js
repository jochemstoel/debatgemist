/* Voorbeeld: download synchroon de HTML pagina van het debat */

let DebatGemist = require('../index') /* require('debatgemist') buiten deze map */
let request = require('request') /* http client abstractie */
var progress = require('request-progress') /* versimplificeert de notatie voor callbacks aan progress event */
let fs = require('fs') /* interne node module voor lezen/schrijven naar schijf */

/* fetch array met debat objecten, maximaal 1 resultaat */
let debat = DebatGemist.recent(1)[0] /* eerste en enige item in array */

/* HTTP request de url property van debat 
 * en pipe dat vervolgens naar een writeStream */
request(debat.url).pipe(fs.createWriteStream('debat.html'))

