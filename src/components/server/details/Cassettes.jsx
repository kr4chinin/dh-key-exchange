import './details.css'
import React from 'react'

const CassetteDetail = React.memo(() => {
	return (
		<div className="cassette__detail">
			<div className="cassette__detail-line" />
			<div className="cassette__detail-line" />
			<div className="cassette__detail-line" />
			<div className="cassette__detail-line" />
			<div className="cassette__detail-line" />
			<div className="cassette__detail-line" />
			<div className="cassette__detail-line" />
			<div className="cassette__detail-line" />
			<div className="cassette__detail-line" />
			<div className="cassette__detail-line" />
			<div className="cassette__detail-line" />
			<div className="cassette__detail-line" />
		</div>
	)
})

const Cassettes = () => {
	return (
		<div className="cassette-container">
			<div className="cassette">
				<CassetteDetail />
				<CassetteDetail />
			</div>
			<div className="cassette">
				<CassetteDetail />
				<CassetteDetail />
			</div>
			<div className="cassette">
				<CassetteDetail />
				<CassetteDetail />
			</div>
		</div>
	)
}

export default React.memo(Cassettes)
