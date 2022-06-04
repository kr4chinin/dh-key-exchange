import './Client.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import ClientBottom from './details/ClientBottom'
import ClientSection from './key-section/ClientSection'
import Pads from './details/Pads'
import { useClientKeys } from '../../context/KeysContext'
import { useState } from 'react'

const Client = () => {
	const { keys } = useClientKeys()

	const isAllKeysSet =
		keys.publicKey && keys.privateKey && keys.partialKey && keys.fullKey

	const [isDisabled, setIsDisabled] = useState(false)

	return (
		<>
			<div className="client-head">
				<div className="client__content">
					<div className="client__content--keys">
						<ClientSection
							keyType="Public key"
							isDisabled={isDisabled}
						/>
						<ClientSection
							keyType="Private key"
							isDisabled={isDisabled}
						/>
						<ClientSection
							keyType="Partial key"
							setIsDisabled={setIsDisabled}
						/>
						<ClientSection keyType="Full key" />
					</div>
				</div>
				<div className="client-head-btns">
					<div
						className={
							!isAllKeysSet ? 'main-btn-indicator' : 'main-btn-indicator set'
						}
					/>
					<div className="main-btn">
						<FontAwesomeIcon
							icon={faPowerOff}
							className={
								!isAllKeysSet ? 'power-off-icon' : 'power-off-icon set'
							}
						/>
					</div>
				</div>
			</div>
			<Pads />
			<ClientBottom />
		</>
	)
}

export default Client
