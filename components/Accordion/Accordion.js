const Accordion = ({title, content}) => {

	return ( 
		<>
			<div className="accordion-header">
				<h3>{title}</h3>
				<hr/>
			</div>
			<div className="accordion-content">{content}</div>
		</>
	 );
}
 
export default Accordion