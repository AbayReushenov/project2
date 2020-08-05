
// JSX
const Btn = () => {
    const text = "Log in"
    const res = () => {
        return ' Log in, please'  
    }
    const p = <p>Log in</p>
  
    return <button>{text}</button>   
}

const Field = () => {
    const holder = 'Enter here'
    return <input type="text" placeholder={holder} />    
  }
  
const scr = '<script>alert("Error!")</script>'

{scr}

const logged = true
const logged = false

{logged ? null : text}
"Enter"

autoComplete=""
className="first"
htmlFor=""

const styledField = {
    width: "300px"
}
style={styledField}