import {h, state, compute, List, render} from './state'

const todo = new List([])

const processKey = (e) => {
    if (e.key === 'Enter'){
        todo.push(e.target.value)
        e.target.value = ''
    }
}

render(document.body,
    <div>
        <ul map={todo.render((item) => <li>{item}</li>)}></ul>
        <ul map={todo.render((item) => <li>{item}</li>)}></ul>
        <input onkeydown={processKey}></input>
    </div>
)