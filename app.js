const heroes = [
  {
    name: 'Wiz',
    type: 'dwarf',
    damage: 5,
    health: 100,
    isAlive: true
  },
  {
    name: 'Super',
    type: 'elf',
    damage: 10,
    health: 50,
    isAlive: true
  }
]


const boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1
}


function attackClown() {
  heroes.forEach(hero => {
    if (boss.health > 0 && hero.health > 0) {
      boss.health -= hero.damage
      console.log('This is the bosses health', boss.health)
      console.log('this is the hero damage: ', hero.damage);
    }
  })
  drawBoss()


}

function drawHeroes() {
  heroes.forEach(hero => {
    let heroesElem = document.getElementById(hero.name)

    let heroSpan = heroesElem.querySelector('p > span')

    heroSpan.innerText = `${hero.health}`
  })
}
drawHeroes()

function decreaseHeroHealth() {
  heroes.forEach(hero => {
    if (hero.health > 0) {
      hero.health -= 5
    } else {
      hero.damage = 0
    }
    return
  })
  drawHeroes()
}

// // function decreaseBossHealth() {
// heroes.forEach(hero => {
//   if (boss.health > 0) {
//     boss.health -= hero.damage
//   }
//   console.log('This is the bosses health', boss.health)
// })
// }
function drawBoss() {
  if (boss.health <= 0) {
    console.log('Boss is Dead')
  }
  let bossElem = document.getElementById('boss')
  let bossSpan = bossElem.querySelector('p > span')

  bossSpan.innerText = `${boss.health}`
}

drawBoss()



setInterval(decreaseHeroHealth, 2000)


