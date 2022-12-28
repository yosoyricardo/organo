import { useState } from 'react';
import './GuestCard.css';
import InputText from '../InputText';
import DropdownList from '../DropdownList';
import Button from '../Button';

const GuestCard = (props) => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        props.onRegistred({
            name,
            position,
            image,
            team
        })
        setName('');
        setImage('');
        setPosition('');
        setTeam('');
    }

    return(
        <section className="guestCard">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputText 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    required={true}
                    value={name}
                    setValue={setName}
                />
                <InputText 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={position}
                    setValue={setPosition}
                />
                <InputText 
                    label="Imagem" 
                    placeholder="Informe um endereço da imagem" 
                    required={true}
                    value={image}
                    setValue={setImage}
                />
                <DropdownList 
                    items={props.teams} 
                    label="Times"
                    value={team}
                    setValue={valor => setTeam(valor)}
                />
                <Button>Create Card</Button>
            </form>
        </section>
    )
}

export default GuestCard;