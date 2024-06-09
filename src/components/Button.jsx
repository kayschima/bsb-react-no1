import  {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                <button className="m-4 border-2 border-slate-800 bg-slate-200 text-slate-800 hover:bg-slate-800 hover:text-slate-200 hover:font-bold rounded px-4 py-2">Kay Markschies</button>
            </div>
        );
    }
}

export default Button;