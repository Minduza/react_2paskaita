const Button = (props) => {


    return <div>
        <button onClick={props.onClick} className={props.variant === 'text' ? "text" : (props.variant === 'contained' ? "contained" : (props.variant === "outlined" && 'outlined'))}>{props.title}</button>
    </div>
}

export default Button;