
function AddRandom({contact, addRandom}) {
    function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}
  return (
    <div>
<button onClick={() => addRandom(contact.id)} className="btn-add">
          Add Random Contact 
        </button>
    </div>
  )
}

export default AddRandom