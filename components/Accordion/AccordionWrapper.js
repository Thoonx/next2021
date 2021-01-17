import Router from 'next/dist/next-server/lib/router/router';
import Link from 'next/link';
import { useState } from 'react'

const AccordionWrapper = ({children}) => {
	const [activeAccordion, setActiveAccordion ] = useState(null); 

	function toggle(index){
	   if(activeAccordion == `accordion-${index}`) {
		 setActiveAccordion(null)
	   }else{
		setActiveAccordion(`accordion-${index}`)
	   }
	}
	return( 
		<div className="accordion-wrapper">
			<>
			{children.map( (accordion, index) => (
				
				<div 
				key={index}
				  onClick={()=> toggle(index)} 
				  className={activeAccordion == `accordion-${index}` ? 'show-content' : 'hide'}>
					  {accordion}
				</div>
				
			))}
			</>
			<style global jsx>{`
				.accordion-wrapper{
				background: rgb(108, 58, 202);
				width: 300px;
				padding: 25px;
				}

				.accordion-header{
				user-select: none;
				cursor: pointer;
				}
				.accordion-content{
				max-height: 0;
				overflow: hidden;
				transition: all 0.3s cubic-bezier(0, 1, 0, 1)
				}

				.show-content .accordion-content{
				height: auto;
				max-height: 9999px;
				transition: all 0.3s cubic-bezier(1, 0, 1, 0)
				}
			`}</style>
		</div>
	 );
}
 
export default AccordionWrapper