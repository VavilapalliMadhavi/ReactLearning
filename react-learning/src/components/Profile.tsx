function Profile({name,role}:{name:string,role:string}){

    return(
        <div>
            <h1>Profile Component</h1>
            <h5>Name : {name}</h5>
            <h5>Role : {role}</h5>
        </div>
    );
}
export default Profile;