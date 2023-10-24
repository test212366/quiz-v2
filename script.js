const questions = [
	question = {
		questionItem: 'key',
		a: 'no',
		b: 'yes',
		c: 'maybe',
		d: 'i dont know',
		currentQuestion: 'b',
		id: 0
	},
	question = {
		questionItem: 'num',
		a: 'no',
		b: 'yes',
		c: 'meow',
		d: 'i dont know',
		currentQuestion: 'c',
		id: 1
	},
	question = {
		questionItem: 'miri',
		a: 'no',
		b: 'yes',
		c: 'maybe',
		d: 'i dont know',
		currentQuestion: 'd',
		id: 2
	},
	question = {
		questionItem: 'lastChild',
		a: 'no',
		b: 'yes',
		c: 'maybe',
		d: 'i dont know',
		currentQuestion: 'c',
		id: 3
	}
]

const quiz = document.getElementById('quiz')
const items = [
	a = document.getElementById('a'),
	b = document.getElementById('b'),
	c = document.getElementById('c'),
	d = document.getElementById('d')
]

let aText = document.getElementById('a_text')

let bText = document.getElementById('b_text')

let cText = document.getElementById('c_text')

let dText = document.getElementById('d_text')
const buttonNext = document.getElementById('submit')
const title = document.getElementById('title')
const windowClose = document.getElementById('closed')
const body = document.body

let currentId = 0
let completeQuestions = 0




function currentIdItem() {
	console.log(questions)
	if (currentId === questions.length) {
		console.log('need something do it');
		console.log(currentId);
		windowClose.classList.remove('close')
		quiz.style.display = 'none'
	} else {

		for (const key in questions) {
			if (Object.hasOwnProperty.call(questions, key)) {
				const element = questions[key];
				checkOnId(element)
				delete element.currentQuestion[currentId]
				console.log(element[currentId]);
			}
		}



	}



}
currentIdItem()
function checkOnId(element) {
	if (element.id === currentId) {
		title.innerText = element.questionItem
		aText.innerText = element.a
		bText.innerText = element.b
		cText.innerText = element.c
		dText.innerText = element.d
		const current = element.currentQuestion
		console.log(element);
		for (const key in items) {
			if (Object.hasOwnProperty.call(items, key)) {
				const el = items[key];
				console.log(el.id);
				el.addEventListener('click', function () {
					if (this.id == current) {
						completeQuestions++
						console.log(completeQuestions);
					}
					// console.log(this)
					// console.log(element.currentQuestion);
				})
			}
		}

	}
}

function buttonNextItem() {
	currentId++
	currentIdItem()
}
buttonNext.addEventListener('click', buttonNextItem)