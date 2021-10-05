
const test = "12:00pm-12:30am"

const temp = test.match.match(/\d+|am|pm/g)



function CountingMinutes(str) {
  let [beforeTime, afterTime] = str.split('-')
  
  const formatToMin = (time) => {
    const temp = time.match(/\d+|am|pm/g)
    if (temp[2].includes('am') && temp[0] === '12')  temp[0] = 0
    return temp[0] * 60 + temp[1] * 1
  }

  let result = formatToMin(afterTime) - formatToMin(beforeTime)
  if (result < 0) result += 1440

  return result
}


function DashInsert(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 && str[i+1] % 2) {
      result += `${str[i]}-`
    } else {
      result += str[i]
    }
  }
  return result
}


