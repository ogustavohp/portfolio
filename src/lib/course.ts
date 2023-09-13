export interface ICourseTopics {
  courseTopics: string
  id: string
}

export interface ICourse {
  courseTitle: string
  courseLicensed: string
  courseTopics: ICourseTopics[]
  id?: string
}
