import PropType from 'prop-types'

export const Button = ({ color, text, onClick }) => {

    return (
        <button
            onClick={onClick}
            className='btn'
            style={{ backgroundColor: color }}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.protoType = {
    text: PropType.string,
    color: PropType.string,
    onClick: PropType.func
}