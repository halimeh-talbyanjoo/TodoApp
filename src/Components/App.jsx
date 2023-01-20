import './App.css';
import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import FormAddTodo from './FormAddTodo';
import Todo from './Todo';

class App extends Component {


  state ={
    todos:[],
    statusDone:false
  }



  addTodo=(text)=>{
    this.setState(prevState =>{
      return{
        todos:[
          ... prevState.todos,
          {key: Date.now() , done:false , text }
        ]
        }
    })
    }
  


    deleteTodo= (key)=>{

      this.setState(prevState =>{
        return{
          todos: prevState.todos.filter(item => item.key != key)
        }

      })
    }

    editTodo(key, text){
      const {todos}=this.state 
      let item= todos.find(item=> item.key == key );
      item.text= text;

      const newTodos=todos.filter(item=> item.key != key)
      this.setState({
        todos: [
          ...newTodos , 
          item
        ]
      })
    }


    togleTodo(key){
      const {todos}=this.state 
      let item= todos.find(item=> item.key == key );
      item.done= !item.done;

      const newTodos=todos.filter(item=> item.key != key)
      this.setState({
        todos: [
          ...newTodos , 
          item
        ]
      })
      

    }




  render(){

    const {todos, statusDone}=this.state
    const filterTodos =todos.filter(item => item.done == statusDone)
    console.log(filterTodos)




    return (
      <div className="App">
       <Header />
       <section className='jumbotron border mb-4 p-4 bg-light'>
        <div className='container d-flex flex-column align-items-center'>
          <h1 className='jumbotron-heading'>Welcome!</h1>
          <p className='lead text-muted'>To get started, add some items to your list:</p>
          <FormAddTodo  add={this.addTodo} />
        </div>
       </section>
       <div className='todosList'>
        <div className='container'>
        <div className=' d-flex flex-column align-items-center'>
          <nav className='col-6 mb-3'>
            <div className='nav nav-tabs' id='nav-tabs' role='tablist'>
              <a className={`nav-item nav-link font-weight-bold ${ !statusDone ? 'active' : ''}`} id='nav-home-tab' onClick={() => this.setState({ statusDone:false})}>undone <span className='badge  bg-secondary'>{todos.filter(item => item.done == false).length}</span></a>
              <a className={`nav-item nav-link font-weight-bold ${ statusDone ? 'active' : ''}`} id='nav-profile-tab' onClick={() => this.setState({ statusDone:true})}>done <span className='badge  bg-success'>{todos.filter(item => item.done == true).length}</span></a>
            </div>
          </nav>
          {
            todos.length == 0
            ? <p>there isn't any todos </p>
            : filterTodos.map(item => <Todo 
                                      key={item.key} item={item}
                                       delete={this.deleteTodo.bind(this)}
                                       done={this.togleTodo.bind(this)}
                                       edit={this.editTodo.bind(this)}
                                       />
                                       )
          }
        </div>
        </div>
          
       </div>
      
      </div>
    );
  } 
  
}

export default App;
