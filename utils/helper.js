const serialNumber = (value) => {
  const date = new Date().toLocaleDateString('en-ZA', { timeZone: 'Asia/Taipei'})
  const str = `${value || date.replace(/\//g, '')}-xxxxxxxx-xxxx`

  return str.replace(/[xy]/g, (c) => {
    const r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;
    return v.toString(16);});
}

module.exports = {
  serialNumber
}
