import  React from 'react';
import './login.css';

class Login extends React.Component{



	constructor(props)
	{
		super(props);
		this.state={
			isLogin:true,
			isRegister:false,
			errors:[],
			username:"",
			password:"",
			email:"",
			id:0,
			Uname_list:[],
			List:[]

		}
		this.LoginBox=this.LoginBox.bind(this);
     this.SignUpBox=this.SignUpBox.bind(this);
     this.onUnameChange=this.onUnameChange.bind(this);
     this.onEmailChange=this.onEmailChange.bind(this);
     this.onPwdChange=this.onPwdChange.bind(this);
	}

	showValidationErr(elm,msg)
	{
		this.setState((prevState)=>({errors:[...prevState.errors,{elm,msg}]}));
	}


	clearValidationErr(elm){

		this.setState(prevState=>{
			let newArray=[];
			for(let err of prevState.errors)
			{
				if(elm!==err.elm)
				{
					newArray.push(err);
				}
			}

		return {errors: newArray};
	});
}

onUnameChange(event)
{
	this.setState({username:event.target.value});
	this.clearValidationErr("username");
}

onPwdChange(event)
{
	this.setState({password:event.target.value});
	this.clearValidationErr("password");
}

onEmailChange(event)
{
	this.setState({email:event.target.value});
	this.clearValidationErr("email");
}

  
	showLoginBox=()=>{
		this.setState({isLogin:true,isRegister:false});
	}

	showRegisterBox=()=>{
		this.setState({isLogin:false,isRegister:true});
	}

	
	submitLogin(e)
	{



	}


	LoginBox=()=>
	{


		return(
		<div className="inner-container">
		<div className="header">
			Login
		</div>
			<div className="box">
				<div className="input-group">
					<label htmlFor="username">Username</label>
					<input type="text" name="username" className="login-input" placeholder="Enter Username here"/>
				</div>

				<div className="input-group">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" className="login-input" placeholder="Enter Password here"/>
				</div>

				<button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>
			</div>
		</div>);

	
    }


submitSignup(e)
	{
		if(this.state.username==="")
			 this.showValidationErr("username","Username cannot be empty");
		if(this.state.password==="")
	         this.showValidationErr("password","Password cannot be empty");
	    if(this.state.email==="")
	    	this.showValidationErr("email","Email cannot be empty");
	    if(this.state.password.length<8)
		  this.showValidationErr("password","Password should contain atleast 8 characters");

		  /*let Uname_List = this.state.Uname_List;
      if(this.state.Uname_List.length === null){
        Uname_List = this.state.Uname_List.concat({id:this.state.id,username:this.state.username});
      }
      else{
        Uname_List = this.state.Uname_List.filter(item => item.username !== this.state.username).concat({id:this.state.id,username:this.state.username});
      }
    this.setState(state =>{
      const List = state.List.concat({id: state.id, text: state.username, password: state.password ,isRegister: false,isLogin:true})
      return {
        Uname_List,
        List,
        val : "",
        id : state.id + 1,
        

      }
    })*/

	}


SignUpBox=()=>
{

	let usernameErr=null,passwordErr=null,emailErr=null,miscErr=null;
		for(let err of this.state.errors)
		{
			if(err.elm==="username")
			{
				usernameErr=err.msg;
			}
			if(err.elm==="password")
			{
				passwordErr=err.msg;
			}
			if(err.elm==="email")
			{
				emailErr=err.msg;
			}
			if(err.elm===" ")
			{
				miscErr=err.msg;
				
			}
		}
		
		return(
		<div className="inner-container">
		<div className="header">
			Sign Up
		</div>
			<div className="box">
				<div className="input-group">
					<label htmlFor="username">Username</label>
					<input type="text" name="username" className="login-input" placeholder="Enter Username here" onChange={this.onUnameChange}/>
				</div>
				<small className="danger-error">{usernameErr?usernameErr:miscErr}</small>
				<div className="input-group">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" className="login-input" placeholder="Enter Password here" onChange={this.onPwdChange}/>
				</div>
						<small className="danger-error">{passwordErr?passwordErr:miscErr}</small>
				<div className="input-group">
					<label htmlFor="email">Email</label>
					<input type="text" name="Email" className="login-input" placeholder="Enter Email here" onChange={this.onEmailChange}/>
				</div>
						<small className="danger-error">{emailErr?emailErr:miscErr}</small>
				<button type="button" className="login-btn" onClick={this.submitSignup.bind(this)}>Sign Up</button>
			</div>
		</div>);

	
}

render(){

		

		return(
		<div>
		<div className="root-container">

			<div className="box-controller" >
				<div className="controller" onClick={this.showLoginBox.bind(this)}>
					Login
				</div>
				<div className="controller"onClick={this.showRegisterBox.bind(this)}>
					Sign Up
				</div>
		    </div>
	   </div>

		<div className="box-container">
			{this.state.isLogin?this.LoginBox():null}
			{this.state.isRegister?this.SignUpBox():null}
		</div>
		</div>
		);

	}

}

export default Login;