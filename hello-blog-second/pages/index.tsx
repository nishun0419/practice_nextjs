import { client } from "../libs/client"
import type { News } from "../types/news"
import Link from "next/link"

type Props = {
  newses: Array<News>
}

export default function Home({ newses }: Props) {
  return (
    <>
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        記事一覧
      </h1>
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {newses.map(news =>(
          <div className="rouded overflow-hidden shadow-lg" key={news.id}>
            <img
              className="w-full"
              src={news.eye_catch.url}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <Link href={`/news/${news.id}`} passHref>
                {news.title}
              </Link>
              </div>
            <div className="px-6 pt-4 pb-2">
              {news.tag &&(
                <span className="inline-block bg-gray-200 rouded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{news.tag}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const data = await client.get ({ endpoint: "news"})

  return {
    props: {
      newses: data.contents,
    }
  }
}
