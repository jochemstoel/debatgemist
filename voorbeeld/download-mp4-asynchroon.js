/* voorbeeld: download asynchroon de mp4 van een debat ietsje ingewikkelder 
 * het downloaden van mp4 wil je asynchroon doen met een progress callback
 * want als je dat synchroon doet zit je heel lang te wachten op een scherm
 * waarop niks gebeurt totdat ie eindelijk 1.6GB gedownload heeft. 

 * http request mp4 property van een debat en vang dat in de functie progress
 * schrijf elke 500ms de voortgang naar de console stdout
 */

let DebatGemist = require('../index') /* require('debatgemist') buiten deze map */
let request = require('request') /* http client abstractie */
var progress = require('request-progress') /* versimplificeert de notatie voor callbacks aan progress event */
let fs = require('fs') /* interne node module voor lezen/schrijven naar schijf */

let recent = DebatGemist.recent()

/* Pakken voor de verandering het derde debat in de lijst */
let debat = recent[2]

progress(request(debat.mp4), {
	throttle: 500 /* trigger elke 500ms een progress event (soort sleep) */
})

.on('progress', state => {
    console.log(`voortgang: ${state.percent} procent`) /* log alleen voortgang percentage */
})

.on('error', err => {
    throw err /* er ging iets mis, geen internet of schijf vol ofzo */
})

.on('end', () => {
    console.log('download compleet.') /* klaar. */
})

.pipe(fs.createWriteStream('debat.mp4')) /* schrijf het naar debat.mp4 */


/* het state object in de progress callback ziet er zo uit:
{ 
 	time: { 
 		elapsed: 23.497, 
 		remaining: 355.903 
 	},
	speed: 4409680.129378218,
	percent: 0.061932030248174,
	size: { 
		total: 1673031767, 
		transferred: 103614254 
} 
  */

