import React from 'react'
import Course from './Course'
import Courses from './Courses'
import { ICourse } from '@/lib/course'
import CourseTitleSection from './CourseTitleSection'

interface IFormationSection {
  titleSection: string
  courses: ICourse[]
}

export default function FormationSection({
  titleSection,
  courses,
}: IFormationSection) {
  return (
    <section className="flex flex-col gap-7">
      <CourseTitleSection title={titleSection} />
      <Courses>
        {courses.map((e) => (
          <Course
            key={e.id}
            courseLicensed={e.courseLicensed}
            courseTitle={e.courseTitle}
            courseTopics={e.courseTopics}
          />
        ))}
      </Courses>
    </section>
  )
}
