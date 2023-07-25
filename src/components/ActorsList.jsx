import ActorCard from "./ActorCard";
import { useState } from 'react';

const ActorsList = ({contacts}) => {
const [actors, setActors] = useState(contacts);
const deleteActor = actorId => {
    const filteredActors = actors.filter(actor => {
      return actor.id !== actorId;
    });
    setActors(filteredActors);
  };
  return (
    <div>
        <h2>ActorsList</h2>
        <table>
<tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Won Oscar</th>
    <th>Won Emmy</th>
</tr>
        {contacts.map(contact => {
        return (
         <ActorCard key={contact.id} contact={contact} />
        );
      })}  
        </table>
        {actors.map(actor => {
        return (
         <ActorCard key={actor.id} actor={actor} deleteActor={deleteActor}/>
        );
      })}
    </div>

  )
}
export default ActorsList