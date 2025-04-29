const url = 'https://fortune-cookie4.p.rapidapi.com/slack';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0b5a7203f7msh59a513908927fddp1fcf8cjsn2e9a778ab1b1',
		'x-rapidapi-host': 'fortune-cookie4.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}