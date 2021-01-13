//puts bullets with the same date into an array together
module.exports = (bullets) => {
  let sortedBullets = []
  const uniqueDates = [...new Set(bullets.map(bullet => bullet.date))]

  for (let i = 0; i < uniqueDates.length; i++) {
    sortedBullets.push({
      date: uniqueDates[i],
      bullets: bullets.filter(bullet => bullet.date === uniqueDates[i])
    })
  }
  // console.log(sortedBullets)
  return sortedBullets
}