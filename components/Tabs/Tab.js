const Tab = ({title, content}) => {

	return ( 
		<>
			<h3 className="title">{title}</h3>
			<div className="tab-content">{content}</div>

			<style jsx>{`
				
				.tab-content{
					transition: all .2s ease;
					opacity: 0;
					position: absolute;
					left: 0;
				}
				.title{
					cursor: pointer;
					padding-right: 20px;
				}				
			`}</style>
		</>
	 );
}
 
export default Tab;