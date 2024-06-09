import './App.css'
import Button from "./components/Button.jsx";

function App() {

    return (
        <>
            <div
                className="p-4 bg-green-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-xs md:text-sm lg:text-base xl:text-xl">
                <Button/>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
            </div>
            <div className="p-4 hidden lg:block w-full bg-red-400">
                Nur zu sehen auf großen Displays
            </div>
        </>
    )
}

export default App
