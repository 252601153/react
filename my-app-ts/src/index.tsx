import React, {ChangeEventHandler} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class TodoApp extends React.Component<Todos, Todos> {
    constructor(props: Todos) {
        super(props);
        this.state = {items: [], text: ''};
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} text={""}/>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({text: event.target.value})
    }


    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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

interface Item {
    id: number;
    text: string;
}

interface Todos {
    items: Item[];
    text: string
}

class TodoList extends React.Component<Todos, any> {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.id+item.text}</li>
                ))}
            </ul>
        );
    }
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <TodoApp items={[]} text={''}/>
    </React.StrictMode>
);