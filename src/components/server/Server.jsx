import './Server.css'
import ServerBottom from './details/ServerBottom'
import ServerSection from './key-section/ServerSection'
import { useState } from 'react'

const Server = () => {
	const [isDisabled, setIsDisabled] = useState(false)

	return (
		<div className="server-body">
			<div className="server__content">
				<div className="server__content--keys">
					<ServerSection
						keyType="Public key"
						isDisabled={isDisabled}
					/>
					<ServerSection
						keyType="Private key"
						isDisabled={isDisabled}
					/>
					<ServerSection
						keyType="Partial key"
						setIsDisabled={setIsDisabled}
					/>
					<ServerSection keyType="Full key" />
				</div>
				<ServerBottom />
			</div>
		</div>
	)
}

export default Server
