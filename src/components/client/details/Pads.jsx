import './details.css'
import React from 'react'

const Pads = () => {
	return (
		<>
			<div className="pad--small">
				<div className="pad--small-btns-container">
					<div className="pad--small-btn" />
					<div className="pad--small-btn" />
				</div>
			</div>
			<div className="pad--large" />
		</>
	)
}

export default React.memo(Pads)
