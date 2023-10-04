export interface ICourseTopics {
  id: string
  courseTopics: string
}

export interface ICourse {
  id: string
  tags: string[]
  filter: string[]
  courseTitle: string
  courseLicensed: string
  licensedLink: string
  certificateLink: string
  courseLink: string
  courseTopics: ICourseTopics[]
}
