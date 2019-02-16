const compliments = [
  'Comp 1',
  'Comp 2',
  'Comp 3',
  'Comp 4',
  'Comp 5',
  'Comp 6',
  'Comp 7',
  'Comp 8',
  'Comp 9',
  'Comp 10'
]

const compliment = document.querySelector('p')

compliment.addEventListener('click', function () {
  let random = Math.floor(Math.random() * compliments.length)
  let randomComp = compliments[random]
  compliment.innerHTML = randomComp
})
