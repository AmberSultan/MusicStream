/* eslint-disable @next/next/no-img-element */
import { notFound } from 'next/navigation';
import courseData from '@/data/music_courses.json';

interface CourseProps {
  params: { slug: string };
}

export default function CoursePage({ params }: CourseProps) {
  const { slug } = params;
  const course = courseData.courses.find((course) => course.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-black min-h-screen py-12 pt-36 px-4">
      <h1 className="text-4xl text-center text-white mt-6 font-sans font-bold">{course?.title}</h1>
      <div className="flex flex-col items-center mt-6">

<div className="grid grid-cols-2 gap-6">
  <div>
  <img src="{course?.image}" alt="{course?.title}" className="h-60 w-full object-cover rounded-xl" />

  </div>

  <div>
  <p className="text-white mt-4">{course?.description}</p>
        <p className="text-white mt-4">Price: ${course?.price}</p>
        <p className="text-white mt-4">Instructor: {course?.instructor}</p>
  </div>
</div>


      </div>
    </div>
  );
}
