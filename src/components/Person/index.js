import './Person.css';

const Person = ({primaryColor ,name, position, image}) => {
    return (
        <div className='person'>
            <div className='person__header' style={{backgroundColor: primaryColor}}>
                <img src={image} alt={name}/>
            </div>
            <div className='person__footer'>
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Person;