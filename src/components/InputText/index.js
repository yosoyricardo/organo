import './InputText.css';

const InputText = (props) => {
    const customPlaceholder = `${props.placeholder}...`;

    const onChange = (event) => {
       props.setValue(event.target.value);
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}{props.required ? <span>*</span>: ''}</label>
            <input value={props.value} onChange={onChange} placeholder={customPlaceholder} required={props.required}></input>
        </div>
    )
}

export default InputText;