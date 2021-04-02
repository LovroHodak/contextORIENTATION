import React, { useState, createContext } from "react";

export const MyContext = createContext();

export const MyProvider = (props) => {
  const [students, setStudents] = useState([
    {
      id: 10,
      name: "Lovro",
      yearAverage: 6,
      grades: [
        {
          id: 11,
          category: "music",
          grade: 5,
          points: [
            {
              id: 12,
              hear: 5,
              write: 5,
              move: 5,
            },
            {
              id: 52,
              hear: 6,
              write: 6,
              move: 6,
            },
          ],
        },
        {
          id: 13,
          category: "sport",
          grade: 6,
          points: [
            {
              id: 14,
              hear: 7,
              write: 7,
              move: 7,
            },
            {
              id: 53,
              hear: 8,
              write: 8,
              move: 8,
            },
          ],
        },
        {
          id: 15,
          category: "english",
          grade: 7,
          points: [
            {
              id: 16,
              hear: 9,
              write: 9,
              move: 9,
            },
            {
              id: 54,
              hear: 10,
              write: 10,
              move: 10,
            },
          ],
        },
      ],
    },
    {
      id: 17,
      name: "Veronika",
      yearAverage: 9,
      grades: [
        {
          id: 18,
          category: "music",
          grade: 9,
          points: [
            {
              id: 19,
              hear: 9,
              write: 9,
              move: 9,
            },
            {
              id: 55,
              hear: 10,
              write: 10,
              move: 10,
            },
          ],
        },
        {
          id: 20,
          category: "sport",
          grade: 8,
          points: [
            {
              id: 21,
              hear: 8,
              write: 8,
              move: 8,
            },
            {
              id: 56,
              hear: 9,
              write: 9,
              move: 9,
            },
          ],
        },
        {
          id: 22,
          category: "english",
          grade: 10,
          points: [
            {
              id: 23,
              hear: 10,
              write: 10,
              move: 10,
            },
            {
              id: 57,
              hear: 10,
              write: 10,
              move: 10,
            },
          ],
        },
      ],
    },
  ]);

  const increaseYearGrade = (oneId) => {
    const newStudents = students.map((student) => {
      if (student.id === oneId) {
        const updatedStudent = {
          ...student,
          yearAverage: student.yearAverage + 1,
        };
        return updatedStudent;
      }
      return student;
    });
    setStudents(newStudents);
  };

  const decreaseYearGrade = (oneId) => {
    const newStudents = students.map((student) => {
      if (student.id === oneId) {
        const updatedStudent = {
          ...student,
          yearAverage: student.yearAverage - 1,
        };
        return updatedStudent;
      }
      return student;
    });
    setStudents(newStudents);
  };

  const increaseCategoryGrade = (myId, gradeID) => {
    const newStudents = students.map((student) => {
      if (student.id === myId) {
        const updateStudent = {
          ...student,
          grades: student.grades.map((oneGrade) => {
            if (oneGrade.id === gradeID) {
              const updateGrade = {
                ...oneGrade,
                grade: oneGrade.grade + 1,
              };
              return updateGrade;
            }
            return oneGrade;
          }),
        };
        return updateStudent;
      }
      return student;
    });
    setStudents(newStudents);
  };

  const decreaseCategoryGrade = (myId, gradeID) => {
    const newStudents = students.map((student) => {
      if (student.id === myId) {
        const updateStudent = {
          ...student,
          grades: student.grades.map((oneGrade) => {
            if (oneGrade.id === gradeID) {
              const updateGrade = {
                ...oneGrade,
                grade: oneGrade.grade - 1,
              };
              return updateGrade;
            }
            return oneGrade;
          }),
        };
        return updateStudent;
      }
      return student;
    });
    setStudents(newStudents);
  };

  const increaseHearPoints = (meId, gradeId, pointsId) => {
      const newStudents = students.map((student) => {
        if(student.id === meId) {
            const updateStudent = {
                ...student,
                grades: student.grades.map((myGrade) => {
                    if (myGrade.id === gradeId) {
                        const updateGrade = {
                            ...myGrade,
                            points: myGrade.points.map((point) => {
                                if (point.id === pointsId) {
                                    const updatePoint = {
                                        ...point,
                                        hear: point.hear + 1
                                    }
                                    return updatePoint
                                }
                                return point
                            })
                        }
                        return updateGrade
                    } 
                    return myGrade
                })
            }
            return updateStudent
        }
        return student
    })
    setStudents(newStudents)
  };

  const decreaseHearPoints = (meId, gradeId, pointsId) => {
      const newStudents = students.map((student) => {
        if(student.id === meId) {
            const updateStudent = {
                ...student,
                grades: student.grades.map((myGrade) => {
                    if (myGrade.id === gradeId) {
                        const updateGrade = {
                            ...myGrade,
                            points: myGrade.points.map((point) => {
                                if (point.id === pointsId) {
                                    const updatePoint = {
                                        ...point,
                                        hear: point.hear - 1
                                    }
                                    return updatePoint
                                }
                                return point
                            })
                        }
                        return updateGrade
                    } 
                    return myGrade
                })
            }
            return updateStudent
        }
        return student
    })
    setStudents(newStudents)
  };

  const increaseWritePoints = (meId, gradeId, pointsId) => {
    const newStudents = students.map((student) => {
      if(student.id === meId) {
          const updateStudent = {
              ...student,
              grades: student.grades.map((myGrade) => {
                  if (myGrade.id === gradeId) {
                      const updateGrade = {
                          ...myGrade,
                          points: myGrade.points.map((point) => {
                              if (point.id === pointsId) {
                                  const updatePoint = {
                                      ...point,
                                      write: point.write + 1
                                  }
                                  return updatePoint
                              }
                              return point
                          })
                      }
                      return updateGrade
                  } 
                  return myGrade
              })
          }
          return updateStudent
      }
      return student
  })
  setStudents(newStudents)
};

const decreaseWritePoints = (meId, gradeId, pointsId) => {
    const newStudents = students.map((student) => {
      if(student.id === meId) {
          const updateStudent = {
              ...student,
              grades: student.grades.map((myGrade) => {
                  if (myGrade.id === gradeId) {
                      const updateGrade = {
                          ...myGrade,
                          points: myGrade.points.map((point) => {
                              if (point.id === pointsId) {
                                  const updatePoint = {
                                      ...point,
                                      write: point.write - 1
                                  }
                                  return updatePoint
                              }
                              return point
                          })
                      }
                      return updateGrade
                  } 
                  return myGrade
              })
          }
          return updateStudent
      }
      return student
  })
  setStudents(newStudents)
};

  return (
    <MyContext.Provider
      value={[
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
      ]}
    >
      {props.children}
    </MyContext.Provider>
  );
};
