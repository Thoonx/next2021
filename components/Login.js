export default function Login(){

    function handleSubmit(e){
			e.preventDefault();
		fetch('https://antuncrnja.com/w/wp-json/jwt-auth/v1/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
				body: JSON.stringify({username: 'admin', password: 'admin'}),
			})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				data.token && localStorage.setItem('token', data.token);
				
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}
	return(
		<form onSubmit={handleSubmit}>
			<input type="text" name="username" value="admin"/><br />
			<input type="password" name="password" value="admin"/><br />
			<input type="submit" value="Submit" />
			<br /><br />
		</form>
	)
}