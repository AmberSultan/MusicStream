import { NextResponse } from 'next/server';
import courseData from '@/data/music_courses.json'; // Ensure this path is correct

export async function GET() {
    try {
        // Check if courseData and courses are available
        if (!courseData || !courseData.courses) {
            console.error('Course data or courses array not found');
            return NextResponse.json({ error: 'Course data not found' }, { status: 500 });
        }

        // Map through the courses to generate the URLs
        const courses = courseData.courses.map((course) => ({
            url: `https://melody-mentor.vercel.app/courses/${course.slug}`,
            lastModified: new Date().toISOString(),
        }));

        // Define the homepage URL
        const homepage = {
            url: 'https://melody-mentor.vercel.app',
            lastModified: new Date().toISOString(),
        };

        // Combine the homepage and courses into the sitemap
        const sitemap = [homepage, ...courses];

        // Generate XML for the sitemap
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${sitemap
            .map(
              (item) => `
            <url>
              <loc>${item.url}</loc>
              <lastmod>${item.lastModified}</lastmod>
            </url>
          `
            )
            .join('')}
        </urlset>`;

        // Return the sitemap as XML with appropriate headers
        return new NextResponse(xml, {
            status: 200,
            headers: {
                'Content-Type': 'application/xml',
            },
        });
    } catch (error) {
        console.error('Error generating sitemap:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
