function StudentCard({name,course}:{name:string,course:string}){
 const handleEvent = ()=>{
alert(`Student Name: ${name}\nCourse: ${course}`);
 }
    return(
<div>
         <h1>Student card</h1>
        <p>Name : {name}</p>
        <p>Course : {course}</p>
        <button onClick={handleEvent}>Show Details</button>
</div>
   

    )
}
export default StudentCard;