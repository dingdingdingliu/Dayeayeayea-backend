const serialNumber = (date) => {
  const d = new Date().toLocaleDateString().replace(/\//g, '')
  const str = `${date || d}-xxxxxxxx-xxxx`

  return str.replace(/[xy]/g, (c) => {
    const r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;
    return v.toString(16);});
}

module.exports = {
  serialNumber
}