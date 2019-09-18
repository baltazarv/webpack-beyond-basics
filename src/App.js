import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'
import { AppContainer } from 'react-hot-loader'

function render(Component) {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('react-root')
	)
}

render(Counter)

if (module.hot) {
	module.hot.accept('./Counter.js', () => {
		const NewCounter = require('./Counter.js').default
		render(NewCounter)
	})
}
