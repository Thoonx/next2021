export default function SendMail(){

    const handleSubmit = e => {
		e.preventDefault();

		fetch('https://antuncrnja.com/w/wp-json/contact-form-7/v1/contact-forms/142/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'multipart/form-data',
				mode: 'no-cors'
			},
				body: JSON.stringify({
					'your-name': 'admin', 
					'your-email': 'test@gmail.com', 
					'your-subject': 'test',
					'your-message': 'This is test'
				}),
			})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}
	return(
		<form onSubmit={handleSubmit}>
			<input type="submit" value="Send Mail" />
			<br /><br />
		</form>
	)
}