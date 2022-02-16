import Topbar from './topbar/Topbar';
import Searchpanel from './search-panel/Searchpanel';
import { useSelector } from 'react-redux';

export default function App() {

    const word = useSelector((state) => state.search.search_text);
    let Panel;
    if(word !== '')
        Panel = <Searchpanel></Searchpanel>;

    return (
        <div>
            <Topbar></Topbar>
            {Panel}
        </div>
    );
}