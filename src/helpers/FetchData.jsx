
const loaderRegisters = async() => {
    const data = await fetch("https://639c781616d1763ab14ae929.mockapi.io/test/front-end/lista")
    const registers = await data.json();
  return {
    registers
  }
}
export default loaderRegisters
