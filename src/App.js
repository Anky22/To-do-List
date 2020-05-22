import React from 'react';
import './App.css';
import Calender from './Calender';
import './Todo.css';
import Labels from "./labels";
import "./Labels.css";
import Toolbar from './Toolbar';
import ReactSearchBox from 'react-search-box';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import history from './history';
import Routes from './routes';
//import {Link} from 'react-router-dom';
import Show from './Show';
import './Toolbar.css';
import Login from './Login';
//import './login.css';
//import Plusbutton from './Plusbutton';

class App extends React.Component {
 constructor(props)
  
  {
    super(props);
    this.state=
    {
         isClickedPlus:false,
         isClickedProgress:false,
         isClickedLogin:false,
          todos: [],
          Label_List: [],
          val: "",
          label: "",
          priority: "Low",
          id : 0,
          status:"incomplete",
          deadline: new Date(),
          searchfield:""
          
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleText = this.handleText.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
      this.toggle=this.toggle.bind(this);
      this.toggleNav=this.toggleNav.bind(this);
      this.toggleLogin=this.toggleLogin.bind(this);
      this.showLogin=this.showLogin.bind(this);
      this.onSearchChange=this.onSearchChange.bind(this);
  }
  
  handleDelete(id){
    this.setState(prevState =>{
      const todos = prevState.todos.filter(item => item.id!==id);
      return {todos,};
    })
  }

  handleChange(id) {
      this.setState(prevState => {
          const updatedTodos = prevState.todos.map(todo => {
              if (todo.id === id) {
                  todo.completed = !todo.completed
              }
              return todo
          })
          return {
              todos: updatedTodos
          }
      })
  }


  handleText(event){
    const {name, value} = event.target
        this.setState({
            [name]: value
        })
        //console.log(name+" "+value);
  }

  handleSubmit(event){
    let date = new Date(this.state.deadline);
    let Label_List = this.state.Label_List;
      if(this.state.Label_List.length === null){
        Label_List = this.state.Label_List.concat({id:this.state.id,label:this.state.label});
      }
      else{
        Label_List = this.state.Label_List.filter(item => item.label !== this.state.label).concat({id:this.state.id,label:this.state.label});
      }
    this.setState(state =>{
      const todos = state.todos.concat({id: state.id, text: state.val , priority : state.priority ,completed: false,deadline: date,label:this.state.label})
      return {
        todos,
        Label_List,
        val : "",
        id : state.id + 1,
        label: "",
        //isClicked:false
      }
    })
    event.preventDefault();
  }

onSearchChange=(event)=>{
    this.setState({searchfield: event.target.value})
  }

    //this.toggle=this.toggle.bind(this);

toggle(){
    //Clicked=this.state.isClicked;
    this.setState(prevState=>({
      isClicked: !prevState.isClicked,isClickedLogin:false,isClickedProgress:false}));
  }

  toggleNav(){
    //Clicked=this.state.isClicked;
    this.setState(prevState=>({
      isClickedProgress: !prevState.isClickedProgress, isClicked: false,isClickedLogin:false}));
  }

  toggleLogin(){
    //Clicked=this.state.isClicked;
    this.setState(prevState=>({
      isClickedLogin: !prevState.isClickedLogin, isClicked: false,isclickedProgress:false}));
  }


  showForm=()=>{
    return(

      <div className="form-1">
             <form onSubmit={this.handleSubmit}>
                <h2>TASK<input name="val" value={this.state.val} onChange={this.handleText} placeholder="ENTER YOUR TASK" style={{margin:"20px",padding:"10px"}}/><br/>
                 LABEL<input name="label" value={this.state.label} onChange={this.handleText} placeholder="ENTER TASK LABEL" style={{margin:"20px",padding:"10px"}}/><br/>
              <label>

                TASK PRIORITY:
               <select name ="priority" value={this.state.priority} onChange={this.handleText} style={{margin:"20px",padding:"10px"}}>
                 <option value="Low">Low</option>
                 <option value="Medium">Medium</option>
                <option value="Important">Important</option>
              </select>
            </label><br/>

            <label>
                    SET STATUS:
                 <select name="status" value={this.state.status} onChange={this.handleText} style={{margin:"20px",padding:"10px"}}>
                  <option value="Incomplete">Incomplete</option>
                  <option value="In progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  </select>
                  
             </label><br/>
            
            <label>
                 DEADLINE: 
                 <input type ="date" placeholder="yyyy/mm/dd" name="deadline" onChange={this.handleText} style={{margin:"20px",padding:"10px"}}/>
              </label><br/>
                 
                 <div className="sub-button"><input type="submit" value="Submit" style={{margin:"20px",padding:"20px"}}/></div>
           

              
              </h2>
              </form>
        </div>
        );
  }


  showLogin=()=>
  {
    
    return(<Login/>);
  
  }
  showCalender=()=>
{
  return( 
  <div>
  <Calender list={this.state.todos}/>
 
  </div>);
    
}

goBack=()=>
{
  this.setState({isClickedProgress:false,isClickedPlus:false,isClickedLogin:false});
  
}



onSearchChange=(event)=>{
    this.setState({searchfield: event.target.value})
  }



  

  showNav=()=>{
    return(

      

            <header className="toolbar">
              <nav className="toolbar_navigation"> 
              
    
                  <div className='toolbar_navigation_items'>
                    <ul>
                    <li>  <button onClick={this.toggleLogin}> Login </button></li>
                     <li> <button onClick={this.goBack}> Home</button></li>
                     <li> <button onClick={this.toggleNav}>Progress</button></li>
                     <li><ReactSearchBox placeholder="Search"/></li>
                    
                    </ul>
                  </div>
                 
      
              </nav>
           </header>);
          
  }

  render()
  {
  const LabelItems = this.state.Label_List.map(item => <Labels key={item.id} 
      label={item.label}  todos={this.state.todos} handleDelete={this.handleDelete} handleChange={this.handleChange}/>)
     
      return (
         <div>
            <div className="col col-center">
              <h1>TO-DO APP</h1>
            </div>
           

          
              {this.state.isClickedProgress?this.showCalender():this.showNav()}
           
             {this.state.isClicked?this.showForm():null}
             {this.state.isClickedLogin?this.showLogin():null}

            <Router history={history}>
               <Routes />
            </Router>

           <div>
            {LabelItems}
          </div>
          <div class='add'>
                <button align='center' className= "button button5" onClick={this.toggle} > + </button>
          </div>
          <div className="back">
           <button className="button" onClick={this.goBack}> Go Back </button>
        </div>
        </div>
        
      );
  }

}

export default App;
