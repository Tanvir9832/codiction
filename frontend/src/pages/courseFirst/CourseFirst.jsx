import course from "../../../assets/imgs/course.png"
import "./CourseFirst.css"
const CourseFirst = () => {
  return (
    <div className="course_first">
          <div className="course_first_tag">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum nemo, iusto culpa asperiores a sequi dicta at obcaecati eveniet dignissimos?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi earum distinctio vero nesciunt. Quibusdam voluptas qui pariatur animi quasi. Repellat reprehenderit corrupti alias rerum harum consequatur veniam necessitatibus, voluptatem in praesentium! Recusandae nisi ex labore ut numquam ipsum sed aut placeat nam doloribus autem harum, necessitatibus expedita corporis accusantium omnis!
          </div>
          <div className="course_first_img">
            <img src={course} alt="" />
          </div>
      </div>
  )
}

export default CourseFirst