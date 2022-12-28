import './DropdownList.css';

const DropdownList = (props) => {
    return(
        <div className='dropdownList'>
            <label>{props.label}</label>
            <select onChange={event => props.setValue(event.target.value)} value={props.value}>
                <option></option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList;