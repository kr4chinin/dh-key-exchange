import './details.css'
import React from 'react'
import Cassettes from './Cassettes'
import FakeButtons from './FakeButtons'

const ServerBottom = () => {
	return (
		<div className="server--bottom">
			<FakeButtons />
			<Cassettes />
		</div>
	)
}

export default React.memo(ServerBottom)
