const ContactForm = () => {

	const test = {
		"your-name": "test name",
		"your-email": "test@react.com",
		"your-subject": "test subject",
		"your-message": "test message"
	}
	function handleContact(){

fetch('https://www.antuncrnja.com/w/wp-json/contact-form-7/v1/contact-forms/142/feedback',{
	mode: 'no-cors',
	method: 'POST',
	headers: {"content-type": "multipart/form-data"},
	body: test
}).then( (res)=> {
	console.log(res)
})

}
	return ( 
<div onClick={handleContact}>
	Contact
</div>
	 )
}
 
export default ContactForm;