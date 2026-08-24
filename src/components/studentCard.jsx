 function studentCard({name, age, birthdate, studentnumber, course}) {
    return( 

        <div>
            <p> name: {name} </p>
            <p> age: {age} </p>
            <p> birthdate: {birthdate} </p>
            <p> studentnumber: {studentnumber} </p>
            <p> course: {course} </p>
        </div>

    )
 };

 export default studentCard;