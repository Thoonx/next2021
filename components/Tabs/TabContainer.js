import { useState } from 'react'

const TabContainer = ({children}) => {
	const [activeTab, setActiveTab] = useState('tab-0')

	return ( 
		
		<div className="tab-container">
			{children.map( (item, index) =>
			<div 
				key={index} 
				className={activeTab == `tab-${index}` ? 'active-tab' : ''} 
				onClick={ () => setActiveTab(`tab-${index}`) }>
				{item}
			</div>
			)}
			<style global jsx>{`
				.tab-container{
					display: flex;
					position: relative;
				}
				.active-tab .tab-content{
					opacity: 1 !important;
				}	
				.active-tab .title{
					color: red !important;
				}
			`}</style>
		</div>
	 );
}
 
export default TabContainer;