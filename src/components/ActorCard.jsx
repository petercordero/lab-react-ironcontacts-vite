
function ActorCard( {contact, deleteActor} ) {
    return (
      <tr key={contact.id}>
        <td>{contact.name}</td>
        <td><img src={contact.pictureUrl} alt="" /></td>
        <td> {contact.popularity}</td>
        <td>{contact.wonOscar}{contact.wonOscar && <p>🏆</p>}</td>
        <td>{contact.wonEmmy} {contact.wonEmmy && <p>🏆</p>}</td>
        <td><button onClick={() => deleteActor(actor.id)} className="btn-delete">
          Delete 
        </button></td>
      </tr>
      
    );
  }
   
  export default ActorCard;