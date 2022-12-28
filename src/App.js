import { useState } from 'react';
import Banner from './components/Banner';
import GuestCard from './components/GuestCard';
import Team from './components/Team';

function App() {
  const teams = [
    {
      name: 'Promoção',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },{
      name: 'Front-end',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },{
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },{
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },{
      name: 'Ux e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5',
    },{
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9',
    },{
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    },
  ];

  const [registers, setRegisters] = useState([]);

  const onRegistred = (register) => {
    setRegisters([...registers, register]);
  }

  return (
    <div className="App">
      <Banner />
      <GuestCard 
        onRegistred={onRegistred} 
        teams={teams.map(team => team.name)}
      />
      {teams.map(team => <Team 
        key={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor} 
        title={team.name}
        people={registers.filter(person => person.team === team.name)}
      />)}
      
    </div>
  );
}

export default App;
