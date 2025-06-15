import React from 'react'
import News from '@/components/News'

const page = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold underline">
                    News & Updates
                </h1>
                <p className="mt-2 text-gray-600">
                    Stay updated with the latest news and updates from our blog.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-9 p-6 place-items-center">
                <News
                    title="Latest Tech Trends"
                    date="2023-10-01"
                    description="Explore the latest trends in technology and how they are shaping our future."
                    image="/assets/pexels-pixabay-373543.jpg"
                />
                <News
                    title="Health and Wellness Tips"
                    date="2023-10-02"
                    description="Discover tips and tricks to maintain a healthy lifestyle in today's fast-paced world."
                    image="/assets/pexels-pixabay-373543.jpg"
                />
                <News
                    title="Travel Destinations for 2023"
                    date="2023-10-03"
                    description="Uncover the best travel destinations to visit in 2023 and plan your next adventure."
                    image="/assets/pexels-pixabay-373543.jpg"
                />
                <News
                    title="Financial Planning for the Future"
                    date="2023-10-04"
                    description="Learn how to effectively plan your finances for a secure future."
                    image="/assets/pexels-pixabay-373543.jpg"
                />
                <News
                    title="Sustainable Living Practices"
                    date="2023-10-05"
                    description="Find out how to incorporate sustainable practices into your daily life."
                    image="/assets/pexels-pixabay-373543.jpg"
                />
            </div>

        </div>
    )
}

export default page
