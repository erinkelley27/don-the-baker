const compliments = [
  'You always RISE to the occasion',
  'We have a confession: we love your confections',
  'We love the way your cookie crumbles',
  'We go nuts over crack nuts',
  'You are the brightest bite in our day',
  'You&apos;re America&apos;s Semisweetheart',
  'Canele we tell you how much we love caneles?',
  'We are aching for your baking'
]

const compliment = document.querySelector('p')

compliment.addEventListener('click', function () {
  let random = Math.floor(Math.random() * compliments.length)
  let randomComp = compliments[random]
  compliment.innerHTML = randomComp
})
