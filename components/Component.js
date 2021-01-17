import { useRef } from 'react'
const Component = ({bg, bgColor, title, content}) => {

	const select = useRef();
	return ( 
		<div 
		  className="component" 
		  style={{backgroundImage: `url(${bg})`, 
		  backgroundColor: bgColor
		}}>
			<div>
				<h1 onClick={ ()=> select.current.classList.toggle('red')}>{title}</h1>
				<p ref={select}>{content}</p>
		    </div>
			<style jsx>{`
				.component{
					width: 100%;
					height: 500px;
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center;
					color: white;
					display: flex;
					align-items: center;
					justify-content: center;
					text-align: center;
					background-blend-mode: soft-light;
				}
				h1{
					font-size: 55px;
					margin: 1rem
				}
				p{
					max-width: 500px;
					margin: 0 auto;
					line-height: 1.5;
				}
				`}</style>
		</div>
	 )
}
 
export default Component;