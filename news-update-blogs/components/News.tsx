import Image from 'next/image';

export interface NewsProps {
    date: string;
    title: string;
    description: string;
    image: string;
}

const News = ({ date, title, description, image }: NewsProps) => {
    return (
        <div className="bg-white border border-gray-300 shadow rounded-4xl w-100">
            <Image
                src={image}
                alt={title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded"
            />
            <span className="text-sm text-gray-500 my-2 block px-4">{date}</span>
            <h2 className="text-xl font-bold mt-2 px-4">{title}</h2>
            <p className="text-gray-600 my-3 px-4">{description}</p>

        </div>
    )
}

export default News
