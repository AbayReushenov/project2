export const inc=()=>({type:"999"})
export const dec=()=>({type:"000"})
export const rnd=()=>{
  const rnd = Math.floor(Math.random() * 10);
  return {type: '***', step: rnd };
}
