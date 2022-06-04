const Arrow = ({ from, isShown }) => {
	let values =
		from === 'client'
			? 'M0,100 L0,100; M0,100 L1150,100;'
			: 'M1250,100 L1250,100; M1250,100 L50,100;'

	return (
		<>
			{isShown && (
				<svg
					viewBox="0 0 1200 200"
					className={`arrow ${from}`}
				>
					<defs>
						<marker
							id="arrow"
							orient="auto"
							viewBox="0 0 10 10"
							markerWidth="3"
							markerHeight="4"
							markerUnits="strokeWidth"
							refX="1"
							refY="5"
						>
							<polyline
								points="0,0 10,5 0,10 1,5"
								fill="black"
							/>
						</marker>
					</defs>
					<path
						id="line"
						markerEnd="url(#arrow)"
						strokeWidth="25"
						fill="none"
						stroke="black"
					>
						<animate
							dur="1s"
							repeatCount="indefinite"
							attributeName="d"
							values={values}
						/>
					</path>
				</svg>
			)}
		</>
	)
}

export default Arrow
