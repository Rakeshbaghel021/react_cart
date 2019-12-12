import React from 'react';




class Checkoutdata extends React.Component {
constructor(){
    super();
    this.state = {
        name:"",
        email:"",
        phone:""
        
    }
}

onCheckout = (event) => {
// this.setState({name:event.target.value});
this.setState({[event.target.name]:event.target.value})
}
submitdata = (event) => {
alert(this.state.name);
}

    render(){
        return(
            <form  className="forms"  onSubmit={this.submitdata}>
                    <input className="one" type="text" name="name" value={this.state.name} placeholder = "enter your name" onChange={this.onCheckout}></input><br/>
                    <input className="one" type="email" name="email" value={this.state.email} placeholder = "enter your email" onChange={this.onCheckout}></input><br/>
                    <input  className="one" type="phone" name="phone" value={this.state.phone} placeholder = "enter your phone" onChange={this.onCheckout}></input><br/>
                    <select className="one">
                    <option value="grapefruit">State</option>
                    <option value="lime">Delhi</option>
                    <option selected value="coconut">UP</option>
                    <option value="mango">Goa</option>
                    </select>
                    <input type="submit" value="submit"/>
                     

            </form>
        )
    }
}


export default Checkoutdata;