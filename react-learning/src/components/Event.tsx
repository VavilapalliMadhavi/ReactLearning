function Event(){

    const handleEvent = ()=>{
        alert("Event triggered! Button clicked.");
    }
     
    return (
        <div>
            <h1>Events</h1>
            <button onClick={handleEvent}>Click Me!</button>
        </div>
    )
        
    

}

export default Event;