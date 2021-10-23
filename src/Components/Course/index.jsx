import React from 'react';
import "./course.css";

const Course = ({ num, name, color }) => {
    const style = {
        color: color
    }

    return (
        <div>
            <button>
                <div className="buttonCourse">
                    <p>
                    <span className="numCourse" style={style}>
                    {num}
                    </span>
                    <span className="nameCourse">{name}</span>
                    </p>
                </div>
            </button>
        </div>
    )
};

export default Course;