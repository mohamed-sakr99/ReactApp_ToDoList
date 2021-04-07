import React , {Component} from 'react';

class AddItem extends Component {

    state = {
        name : '',
        age : ''
    }

    handleChange =(e)=> {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit =(e)=> {
        e.preventDefault();
        if (e.target.name.value === '') {
            return false
        }else {
            this.props.addItem(this.state)
            this.setState({
            name :'',
            age:''
        })
        }
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter Name" onChange={this.handleChange} id="name" value={this.state.name}/>
                    <input type="Number" placeholder="Enter Age" onChange={this.handleChange} id="age" value={this.state.age}/>
                    <input type="submit" value="Add Todo" />
                </form>
            </div>
        )
    }
}
export default AddItem;