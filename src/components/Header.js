import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'; //this is a hook
import { Button } from './Button';

const Header = (props) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            {/* if(location.pathname==='/'{
                (<Button color={props.showAdd ? 'Blue' : 'Green'}
                text={props.showAdd ? 'Close' : 'Add'}
                onClick={props.onAdd} />)
            }) */}
            {location.pathname === '/' && (<Button color={props.showAdd ? 'Blue' : 'Green'}
                text={props.showAdd ? 'Close' : 'Add'}
                onClick={props.onAdd} />)}
        </header>
    )
}

Header.defaultProps = {
    title: "task tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired, //if not a string, it shows error in console
    nuber: PropTypes.number,
}

// const headeStyle = {
//     color: 'red',
//     backgroundColor:'green'
// }

export default Header