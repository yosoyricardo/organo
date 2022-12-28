import Person from '../Person';
import './Team.css';

const Team = (props) => {
    return (
        props.people.length > 0 && <section className='time' style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.title}</h3>
            <div className='people'>
                {props.people.map(person => <Person primaryColor={props.primaryColor} key={person.name} name={person.name} position={person.position} image={person.image}/>)}
            </div>
        </section>
    )
}

export default Team;