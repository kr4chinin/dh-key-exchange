import './details.css'
import React from 'react'

const HolesRow = React.memo(() => {
	return (
		<div className="holes-row">
			<div className="hole" />
			<div className="hole" />
			<div className="hole" />
			<div className="hole" />
			<div className="hole" />
			<div className="hole" />
			<div className="hole" />
		</div>
	)
})

const Speaker = () => {
	return (
		<div className="speaker">
			<HolesRow />
			<HolesRow />
			<HolesRow />
			<HolesRow />
			<HolesRow />
			<HolesRow />
			<div className="big-hole" />
		</div>
	)
}

export default React.memo(Speaker)
