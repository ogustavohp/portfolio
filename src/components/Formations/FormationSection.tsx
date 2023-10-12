'use client'
import React from 'react'
import Course from './Course'
import Courses from './Courses'
import { useFormations } from '@/context/formations'

export default function FormationSection() {
  const { formations } = useFormations()
  return (
    <section className="flex flex-col gap-7">
      <Courses>
        {formations.map((e) => (
          <Course
            key={e.id}
            tags={e.tags}
            usedIn={e.usedIn}
            courseTitle={e.courseTitle}
            courseLicensed={e.courseLicensed}
            licensedLink={e.licensedLink}
            certificateLink={e.certificateLink}
            courseLink={e.courseLink}
            courseTopics={e.courseTopics}
          />
        ))}
        {/* {courses.map((e) => (
          <Course
            key={e.id}
            courseLicensed={e.courseLicensed}
            courseTitle={e.courseTitle}
            courseTopics={e.courseTopics}
          />
        ))} */}
      </Courses>
    </section>
  )
}
