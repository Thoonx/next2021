import { useState } from 'react'

const Modal = ({title, content}) => {

	const [isOpen, setIsOpen ] = useState(false)
	return ( 
		<>
			<button onClick={ ()=> setIsOpen(!isOpen)}>Open modal</button>

<div className={isOpen ? 'modal-wrapper show' : 'modal-wrapper'} >
	<div className="modal-overlay" onClick={ ()=> setIsOpen(!isOpen)}></div>
			<div className="modal">
				<div>
				<button onClick={ ()=> setIsOpen(!isOpen)} className="close-modal">X</button>
					<img src="https://unsplash.it/400" alt="" width="400" height="400"/>
					<h1>{title}</h1>
					<p>{content}</p>
				</div>

			</div>
			</div>

<style jsx>{`
.close-modal{
border-radius: 50%;
position: absolute;
right: 10px;
top: 10px;
padding: 10px 13px
}
	.modal-wrapper{
		width: 100%;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		visibility: hidden;
		transform: translateY(50px);
		transition: all .1s ease-in-out;
	}
	.modal-overlay{
		position: absolute;
		width: 100%;
		height: 100vh;
		background: #00000065;
		z-index: -1;
		cursor: pointer;
		backdrop-filter: blur(3px)
	}

	.modal-wrapper.show{
		opacity: 1;
		visibility: visible;
		transform: translateY(0px);
	}
.modal{
	background: white;
	padding: 30px;
	color: black;
	border-radius: 30px;
	width: 400px;
	position: relative;
	display: flex; 
	align-items: center;
	justify-content: center;
}	
button{
	cursor: pointer;
	background: black;
	color: white;
	border: 0;
	padding: 16px 20px;
	outline: none;
}
`}</style>
		</>
	);
}
 
export default Modal;