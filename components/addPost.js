export default function AddPost(){

    const handleSubmit = e => {
		e.preventDefault();

	

		fetch('https://antuncrnja.com/w/wp-json/wp/v2/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'accept': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('token')}`
			},
			
				body: JSON.stringify({
					title: 'jwt post', 
					content: 'this is post', 
					status: 'publish'
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
			<input type="submit" value="add Post" />
			<br /><br />
		</form>
	)
}