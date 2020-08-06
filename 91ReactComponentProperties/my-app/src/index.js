import React, {Component}  from 'react';
import ReactDOM from 'react-dom';

//https://reactjs.org/docs/fragments.html
//Fragments
// render() {
//   return (
//     <React.Fragment>
//       <ChildA />
//       <ChildB />
//       <ChildC />
//     </React.Fragment>
//   );
// }

// There is a new, shorter syntax you can use for declaring fragments. It looks like empty tags:

class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
        <td>!   class Columns extends React.Component</td>
      </>
    );
  }
}

// Keyed Fragments
// Fragments declared with the explicit <React.Fragment> syntax may have keys. A use case for this is mapping a collection to an array of fragments — for example, to create a description list:

// function Glossary(props) {
//   return (
//     <dl>
//       {props.items.map(item => (
//         // Without the `key`, React will fire a key warning
//         <React.Fragment key={item.id}>
//           <dt>{item.term}</dt>
//           <dd>{item.description}</dd>
//         </React.Fragment>
//       ))}
//     </dl>
//   );
// }
// key is the only attribute that can be passed to Fragment. In the future, we may add support for additional attributes, such as event handlers.


// Простой компонент
// React-компоненты реализуют метод render(), который принимает входные данные и возвращает что-то для вывода. В этом примере используется XML-подобный синтаксис под названием JSX. Входные данные, передаваемые в компонент, доступны в render() через this.props.

// JSX необязателен для работы с React. Попробуйте Babel REPL, чтобы увидеть JavaScript-код, полученный на этапе компиляции JSX.
class HelloMessage extends React.Component {
  render() {
    return (

      <>
         <div>
        Привет, {this.props.name}
        :  My ID is {this.props.id}
        :  class HelloMessage extends React.Component
        </div>
       </>
    
    )
  }
}

// Компонент с состоянием
// Помимо входных данных (доступных через this.props), компонент поддерживает внутренние данные состояния (доступные через this.state). Когда данные состояния компонента изменятся, React ещё раз вызовет render() и обновит отрендеренную разметку.


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.intervalOfTime = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalOfTime);
  }

  render() {
    return (
      <>
        Секунды: {this.state.seconds}
        : class Timer extends React.Component
      </>
    );
  }
}




// Используя props и state, можно создать небольшое приложение списка дел. В этом примере используется state для отслеживания текущего списка элементов, а также текста, введённого пользователем. Хотя обработчики событий встроены в разметку, они собираются и реализуются с помощью делегирования событий.
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Список дел</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Что нужно сделать?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Добавить #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

// Ivan petrichenko
function WhoAmI(props) {
  return (
    <React.Fragment>
    <h4>My name is {props.name}, surname is {props.surname}</h4>
    <a href={props.link}>My profile</a>
    </React.Fragment>
  )
}
//новый sintaxis: <></>
function WhoAreYou({name, surname, link}) {
  return (
    <>
    <h6>You are {name}, your surname is {surname}, </h6>
    <a href={link}>Your profile</a>
    </>
  )
}
//----------------
function TheyAre() {
  return (
    <>
      <WhoAmI name="Assasa" surname="Ijkuh" link="facebook" />
      <WhoAreYou name="TIoohnug" surname="egrtrtevujhbv" link="Youtube"/>
      <WhoAmI name="Tuyighiv" surname="trertyertyetar" link="facebook" />
      <WhoAreYou name="Opphikug" surname="Urtuyjhbv" link="Youtube"/>

    </>
  )
}
//--------*--------------------


class WhoAmINew extends Component {
  constructor(props) {
    super(props);
    this.stateNew = {  // в оригинале this.state
      sallary: 100000,
      nacionality: "ru"
    }
    this.increaseSalary = this.increaseSalary.bind(this)
    // var #2
    this.decreaseSalary  = () => {
      this.setState(salary => ({
        salary: this.stateNew.sallary -= 5000
      }))
    }
  }

  // ES9 !!! without  constructor 
  state = {  // в оригинале this.state
    sallaryUsd: 150000,
    nacion: "USA"
  }

  // Var #3 ES9 (without bind!!!)
  javaScriptSalary  = () => {
    this.setState(salary => ({
      salary: this.stateNew.sallary += 50000
    }))
  }


  // function to increase sallary # var 1
  increaseSalary() {
    this.setState(sallary => ({
      sallary: this.stateNew.sallary += 5000
    }))
  }

  render() {
    const {name, surname, link} = this.props
    const {sallary, nacionality} = this.stateNew
    return (
      <>
        <button onClick={this.increaseSalary}>+ +</button>
        <button onClick={this.decreaseSalary}>- -</button>
        <button onClick={this.javaScriptSalary}>JavaScript ++</button>
    <h5>You are {name}, your surname is {surname}, your salary is {sallary} RUB a month, nationality is "{nacionality}</h5>
    <h3>What about to work in {this.state.nacion} and have about {this.state.sallaryUsd} USD a year</h3>
          <a href={link}>Your profile</a>
          <hr></hr>
      </>
    )
  }
}



function App() {
  return (
  <>
    <WhoAmINew name="Can" surname="Opaik" link="Youtube"/>
    <WhoAmINew name="Fayui" surname="Okmax" link="Jtube"/>
    <WhoAmINew name="Rasqodjklhr" surname="Baewh" link="Opatube"/>
    <TheyAre/>
    <Columns />
    <Timer />
    <HelloMessage name="Саша" id="320841"/>
    <TodoApp />
    <WhoAmI name="Era" surname="Kitar" link="facebook" />
    <WhoAreYou name="TYjkhgsdd" surname="UYgvujhbv" link="Youtube"/>
  </>
  )
}
 
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

