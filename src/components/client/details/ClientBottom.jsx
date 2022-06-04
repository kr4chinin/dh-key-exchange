import './details.css'
import React from 'react'
import Speaker from './Speaker'
import CdSection from './CdSection'

const ClientBottom = () => {
	return (
		<div className="bottom-box">
			<div className="up-section">
				<div className="up-section__light-detail" />
				<div className="up-section__dark-detail" />
			</div>
			<div className="down-section">
				<Speaker />
				<CdSection />
			</div>
		</div>
	)
}

export default React.memo(ClientBottom)
