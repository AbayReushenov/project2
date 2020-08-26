const f = function(a) {
    return b => {
        return (a + b)
    }
}

console.log(f(1)(2)) // 3

const f1 = a => {
    return b => {
        return (a + b)
    }
}

console.log(f1(3)(4)) // 7
// REACT HOC
function f() {
    return ItemList
}
export default f()
//--
const f = function() {
    return ItemList
}
export default f()
//--
const f = () => ItemList
export default f()
//--
const f = () => {
    return class extends Component {
        render() {
            return <h1>Hello world!</h1>
        }
    }
}
export default f()
//--
const f = () => {
    return class extends Component {
        componentDidMount() {
            console.log(this.props)
        }

        render() {
            return <ItemList {...this.props} />
        }
    }
}
export default f()
//--
