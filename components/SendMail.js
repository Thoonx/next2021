import { useState } from 'react';

export default function SendMail(){

	const [name, setName] = useState('');
	const [mail, setMail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [mailMessage, setMailMessage] = useState('');

    const handleSubmit = e => {
		e.preventDefault();
		setMailMessage('Loading...')

		let formData = new FormData();
		formData.append('your-name', name);
		formData.append('your-email', mail);
		formData.append('your-subject', subject);
		formData.append('your-message', message);


		fetch('https://native.tportal.hr/planet-b/wp-json/contact-form-7/v1/contact-forms/236/feedback', {
			method: 'POST',
			body: formData,
			})
			.then(response => response.json())
			.then(mailData => {
				console.error(mailData)
				setMailMessage(mailData.message);
				setTimeout( ()=> {
					setMailMessage('')
				}, 2000)
			})
			.catch(error => console.error('Error:', error));
			
			
	}
	return(
		<div className="form">
		<form onSubmit={handleSubmit}>

			
			<input type="text" placeholder="Name" value={name} onChange={ e => setName(e.target.value) }/>
		
			<input type="text" placeholder="Email" value={mail} onChange={ e => setMail(e.target.value) } />
		
			<input type="text" placeholder="Subject" value={subject} onChange={ e => setSubject(e.target.value) }/>
		
			<input type="text" placeholder="Message" value={message} onChange={ e => setMessage(e.target.value) }/>
			<small style={{color: 'red'}}>{mailMessage}</small>
			<input type="submit" value="Send Mail" />
			
			
		</form>
		</div>
	)
}