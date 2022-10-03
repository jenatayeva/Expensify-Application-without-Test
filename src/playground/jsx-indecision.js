console.log('hello');

const app ={
  title: 'Something Perfect',
  subtitle: 'What did you mean exact about Perfect thing?',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
  renderTemplate()

  }
}

const removeBtn = () =>{
  app.options = [];
  renderTemplate()
}

const onMakeDecision = () => {
  const random = Math.floor(Math.random() * app.options.length)
  const option = app.options[random];
  alert(option)
}

const renderTemplate = () => {
  const template =(
    <div>
      <h1>{app.title}</h1>
      {(app.subtitle) && app.subtitle}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeBtn}>Remove option</button>

      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>
        })}
      </ol>
    
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add option</button>
      </form>
    </div>);
  ReactDOM.render(template, appRoot)
}


let appRoot = document.getElementById('app');
renderTemplate()











