import  {Component} from 'react';

class MobileMenu extends Component {
    render() {
        return (
            <nav className="text-slate-700 hover:font-bold lg:hidden bg-slate-200 px-4 py-2 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
            </nav>
        );
    }
}

export default MobileMenu;