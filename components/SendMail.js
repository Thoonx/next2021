export default function SendMail(){

    const handleSubmit = e => {
		e.preventDefault();

		fetch('https://native.tportal.hr/planet-b/wp-json/contact-form-7/v1/contact-forms/236/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'multipart/form-data',
				//'accept': 'multipart/form-data',
				//'Authorization': `Bearer ${localStorage.getItem('token')}`,
				//'Access-Control-Allow-Origin': '*'
			},
				body: JSON.stringify({
					"your-email": "admin@gmail.com", 
					"your-name": "admin", 
					"your-subject": "test",
					"your-message": "This is test from react"
				}),
			})
			.then(response => response.json())
			.then(mail => console.error(mail))
			.catch(error => console.error('Error:', error));
			
	}
	return(
		<form onSubmit={handleSubmit}>
			<input name="your-email" value="admin@gmail.com" />
			<input name="your-name" value="admin" />
			<input name="your-subject" value="test" />
			<input name="your-message" value="this is message" />
			<input type="submit" value="Send Mail" />
			<br /><br />
		</form>
	)
}