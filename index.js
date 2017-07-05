let download = require('mu.js')
let deasync = require('deasync-promise')

const webhost = 'https://debatgemist.tweedekamer.nl/' 
const mp4host = 'http://debatgemistvod.download.kpnstreaming.nl/'

var DebatGemist = { }

DebatGemist.info = function(url) { 
	return deasync(
		new Promise((deliver, renege) => {
			try {
				download(url).then($ => {

					let videourl = $(`input[name='debate_file_options']`).val() 
					let meta = $('.meta')
					
					deliver({
						title: $('title').text().split('|')[0].trim(),
						url: url, 
						meta: {
							datetime: $('time', meta).text(), 
							description: $('.meta-name', meta).text(), 
							image: $("link[rel='image_src']").attr('href')
						}, 
						mp4: mp4host+videourl
					})
				})
			} catch (exception) {
				renege(exception.message)
			}
		})
	)
}

DebatGemist.recent = max => deasync(
	new Promise((deliver, renege) => {
		let data = []
		if(typeof max != 'number')
			max = 100
		try {
			download(webhost).then($ => {
				$('a', $('.stripped.videos_search-videos-list')).each(function() {
					if(data.length < max) 
						data.push(
							DebatGemist.info(webhost + $(this).attr('href'))
						)
					else 
						deliver(data)
				})
				deliver(data)
			})
		} catch (exception) {
			renege(exception.message)
		}
	})
)

module.exports = DebatGemist