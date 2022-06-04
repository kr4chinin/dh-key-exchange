import { createContext, useContext, useState } from 'react'
import { calculatePartialKey, calculateFullKey } from '../helpers/calculateKey'
import { generateKey } from '../helpers/generateKey'

const ClientContext = createContext(null)
const ServerContext = createContext(null)

export const useClientKeys = () => {
	return useContext(ClientContext)
}

export const useServerKeys = () => {
	return useContext(ServerContext)
}

export function KeysContextProvider({ children }) {
	const initialState = {
		publicKey: '',
		privateKey: '',
		partialKey: '',
		fullKey: ''
	}

	const [serverState, setServerState] = useState(initialState)
	const [clientState, setClientState] = useState(initialState)

	function handleClientPublic() {
		setClientState({ ...clientState, publicKey: generateKey() })
	}

	function handleServerPublic() {
		setServerState({ ...serverState, publicKey: generateKey() })
	}

	function handleClientPrivate() {
		setClientState({ ...clientState, privateKey: generateKey() })
	}

	function handleServerPrivate() {
		setServerState({ ...serverState, privateKey: generateKey() })
	}

	const canCalculatePartialClient =
		clientState.publicKey && clientState.privateKey && serverState.publicKey
	const canCalculatePartialServer =
		clientState.publicKey && serverState.privateKey && serverState.publicKey

	function handleClientPartial() {
		setClientState({
			...clientState,
			partialKey: calculatePartialKey(
				clientState.publicKey,
				clientState.privateKey,
				serverState.publicKey
			)
		})
	}

	function handleServerPartial() {
		setServerState({
			...serverState,
			partialKey: calculatePartialKey(
				clientState.publicKey,
				serverState.privateKey,
				serverState.publicKey
			)
		})
	}

	const canCalculateFull =
		canCalculatePartialClient &&
		canCalculatePartialServer &&
		clientState.partialKey &&
		serverState.partialKey

	function handleClientFull() {
		setClientState({
			...clientState,
			fullKey: calculateFullKey(
				serverState.partialKey,
				clientState.privateKey,
				serverState.publicKey
			)
		})
	}

	function handleServerFull() {
		setServerState({
			...serverState,
			fullKey: calculateFullKey(
				clientState.partialKey,
				serverState.privateKey,
				serverState.publicKey
			)
		})
	}

	return (
		<ClientContext.Provider
			value={{
				keys: clientState,
				getPublicKey: handleClientPublic,
				getPrivateKey: handleClientPrivate,
				getPartialKey: handleClientPartial,
				getFullKey: handleClientFull,
				isPartialDisabled: !canCalculatePartialClient,
				isFullDisabled: !canCalculateFull
			}}
		>
			<ServerContext.Provider
				value={{
					keys: serverState,
					getPublicKey: handleServerPublic,
					getPrivateKey: handleServerPrivate,
					getPartialKey: handleServerPartial,
					getFullKey: handleServerFull,
					isPartialDisabled: !canCalculatePartialServer,
					isFullDisabled: !canCalculateFull
				}}
			>
				{children}
			</ServerContext.Provider>
		</ClientContext.Provider>
	)
}
