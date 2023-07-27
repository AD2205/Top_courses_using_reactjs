import React from "react"
import Card from "./Card"
import { useState } from "react";

const Cards = (props) => {


    let courses = props.courses;
    let category = props.category;
    const[likedCourses,setLikedCourses] = useState([])

    //returns a list of all the courses recieved from the api responses
    const getCourses = () => {
       
        if(category ==="All"){
            let allCourses = [];

            Object.values(courses).forEach(array => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
            else{
                //pass only specific category array
                return courses[category];
            }
    }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {!courses ? (
                <div> 
                    <p>No Data Found</p>
                </div>
            ) : (getCourses().map( (course) => {
                return <Card key={course.id} course = {course} 
                likedCourses ={likedCourses}
                setLikedCourses={setLikedCourses}/>
             })) }
            
        </div>
    )
}
export default Cards;