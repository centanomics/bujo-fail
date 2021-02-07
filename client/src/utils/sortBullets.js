const getLocalDates = bullets => {
  for (let i = 0; i < bullets.length; i++) {
    const date = new Date(bullets[i].date);
    bullets[i].date = date.toISOString().substr(0, 10);
  }

  return bullets
  
}

//puts bullets with the same date into an array together
module.exports = (bullets) => {
  const localBullets = getLocalDates(bullets);
  let sortedBullets = []
  const uniqueDates = [...new Set(localBullets.map(bullet => bullet.date))]

  for (let i = 0; i < uniqueDates.length; i++) {
    sortedBullets.push({
      date: uniqueDates[i],
      bullets: localBullets.filter(bullet => bullet.date === uniqueDates[i])
    })
  }
  // console.log(sortedBullets)
  return sortedBullets
}