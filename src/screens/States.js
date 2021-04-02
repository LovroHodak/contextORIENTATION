import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../MyContexts";
import Student from "./Student";
import ViewScreen from "./ViewScreen";

export default function States() {
  const [
    students,
    setStudents,
    increaseYearGrade,
    decreaseYearGrade,
    increaseCategoryGrade,
    decreaseCategoryGrade,
    increaseHearPoints,
    decreaseHearPoints,
    increaseWritePoints,
    decreaseWritePoints
  ] = useContext(MyContext);
  return (
    <div>
      <Link to="./functions">Go To Functions</Link>

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          {students.map((student, i) => {
            return (
              <div key={i} style={{ border: "2px solid tomato" }}>
                <h1>States</h1>
                <p>{student.name}</p>
                <p>Year Average: {student.yearAverage}</p>
                <button onClick={() => increaseYearGrade(student.id)}>
                  + increase
                </button>
                <button onClick={() => decreaseYearGrade(student.id)}>
                  - decrease
                </button>
                <div style={{ marginTop: 10 }}>
                  GRADES:
                  {student.grades.map((grade, i) => {
                    return (
                      <div style={{ border: "2px solid green" }} key={i}>
                        <p>
                          grade CATEGORY: <b>{grade.category}</b>
                        </p>
                        <p>grade GRADE: {grade.grade}</p>
                        <button onClick={() => increaseCategoryGrade(student.id, grade.id)}>+</button>
                        <button onClick={() => decreaseCategoryGrade(student.id, grade.id)}>-</button>
                        <div>
                          {grade.points.map((point, i) => {
                            return (
                              <div key={i} style={{ border: "2px solid pink" }}>
                                <p>grade POINTS:</p>
                                <p>point HEAR: {point.hear}</p>
                                <button onClick={() => increaseHearPoints(student.id, grade.id, point.id)}>+ hear</button>
                                <button onClick={() => decreaseHearPoints(student.id, grade.id, point.id)}>- hear</button>
                                <p>point WRITE: {point.write}</p>
                                <button onClick={() => increaseWritePoints(student.id, grade.id, point.id)}>+ write</button>
                                <button onClick={() => decreaseWritePoints(student.id, grade.id, point.id)}>- write</button>
                                <p>point MOVE: {point.move}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex" }}>
          {students.map((student, i) => {
            return (
              <Student
                student={student}
                increaseYearGrade={increaseYearGrade}
                decreaseYearGrade={decreaseYearGrade}
                increaseCategoryGrade={increaseCategoryGrade}
                decreaseCategoryGrade={decreaseCategoryGrade}
                increaseHearPoints={increaseHearPoints}
                decreaseHearPoints={decreaseHearPoints}
                increaseWritePoints={increaseWritePoints}
                decreaseWritePoints={decreaseWritePoints}
                key={i}
              />
            );
          })}
        </div>
        <ViewScreen />
      </div>
    </div>
  );
}
