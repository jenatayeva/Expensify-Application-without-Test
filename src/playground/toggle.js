class VisibilityToggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visibility:false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility(){
   this.setState((prevState) => {
    return{
      visibility: !prevState.visibility
    }
   })
  }
  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide detailes' : 'Show detailes'}</button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some detailes you can now see!</p>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'))