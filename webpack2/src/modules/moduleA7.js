let x = [12, -34, 23],
y = [90, 0, -390],
z = [ 890, -0.98, 67889, 90001, 8],
q = [...z,...y,...x, 45, 120000],
 a1 = Math.max( ...q )

console.log("q  :" + q)
console.log('a1 = Math.max( ...q ):' + a1)
console.log("[x, y, z] : " + x, y, z)
console.log('Math.max( ...x,...y,...z) :' + Math.max( ...x,...y,...z))
export {a1}