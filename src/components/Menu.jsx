import  {Component} from 'react';

class Menu extends Component {
    render() {
        return (
            <nav className="text-slate-700 hidden lg:block">
                <div className="px-4 py-2 hover:bg-slate-100 rounded">Home</div>
                <div className="px-4 py-2 hover:bg-slate-100 rounded">Klassen</div>
                <div className="px-4 py-2 hover:bg-slate-100 rounded">Schüler</div>
                <div className="px-4 py-2 hover:bg-slate-100 rounded">Lehrkräfte</div>
                <div className="px-4 py-2 hover:bg-slate-100 rounded">Administration</div>
            </nav>
        );
    }
}

export default Menu;