/* eslint-disable react/display-name */
import React from 'react'
import styles from './main.css'
// import styled from 'react-emotion'
import styled from '@emotion/styled'
import { css } from 'emotion'

const counterColor = 'salmon'
const counterStyles = css`
	color: ${counterColor};
	font-size: 2em;
`
const Fancy = styled.div`
	color: ${props => (props.wild ? 'hotpink' : 'gold')};
	font-size: 3em;
`

import riverImg from './images/river-phoenix.jpg'

export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	climb() {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		const isWild = this.state.count % 2 === 0
		return (
			<div className={styles.profile}>
				<img src={riverImg} alt="River Phoenix" />
				<h1 className={styles.h1}>Hello, River</h1>
				<div
				className={styles.counter}
				onClick={this.climb.bind(this)}>
					<Fancy wild={isWild}>Count: {this.state.count}</Fancy>
				</div>
			</div>
		)
	}
}
