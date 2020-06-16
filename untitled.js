// function fetchAlbums() {
// 	fetch('https://rallycoding.herokuapp.com/api/music_albums')
// 		.then((res) => res.json())
// 		.then((json) => console.log(json));
// }
// fetchAlbums();

const surveyRoutes = require('./routes/surveyRoutes');

const fetchAlbums = async () => {
	const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
	const json = await res.json();
	console.log(json);
};
fetchAlbums();

surveyRoutes.findOne(
	{
		id: surveyId,
		recipients: {
			$eleMatch: {
				email: email,
				responded: false
			}
		}
	},
	{
		$inc: { [choice]: 1 },
		$set: { 'recipients.$.responded': true }
	}
);
