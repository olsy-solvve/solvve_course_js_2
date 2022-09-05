import Vue from 'vue'
import VModal from 'vue-js-modal'
import actions from './actions'
import App from './components/App'

Vue.config.productionTip = false

Vue.use(VModal)

const store = Vue.observable({
	grid: '',
	game: {
		hasBegun: false,
		results: undefined,
		difficulty: { name: undefined, value: undefined },
		mistakes: 0,
		maxMistakes: 3
	},
	startGame(difficulty) {
		store.game = {
			...store.game,
			hasBegun: true,
			results: undefined,
			mistakes: 0,
			difficulty
		}
		store.grid = actions.createGrid(store.game.difficulty.value)
	},
	selectCell(cell) {
		store.grid = actions.selectCell(store.grid, cell)
	},
	setCellValue(cell, newValue) {
		store.grid = actions.setCellValue(store.grid, cell, newValue)
		if (store.grid.every((cell) => cell.value !== '')) {
			store.game.results = 'won'
		}
	},
	addMistake() {
		store.game.mistakes++
		if (store.game.mistakes >= store.game.maxMistakes) {
			store.game.results = 'lost'
		}
	},
	clearHighlights() {
		store.grid = actions.clearHighlights(store.grid)
	},
	solvePuzzle() {
		store.grid = store.grid.map((cell) => ({
			...cell,
			value: cell.expectedValue
		}))
		store.game.results = 'won'
	},
	tryAgain() {
		store.grid = actions.startOver(store.grid)
		store.game.results = undefined
		store.game.mistakes = 0
	}
})

Vue.prototype.$store = store

new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
})
