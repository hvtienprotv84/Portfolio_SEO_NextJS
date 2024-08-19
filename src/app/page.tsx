import { Illustration, Text } from '@/components'
import Link from 'next/link'

export const metadata = {
  title: 'Huỳnh Vĩnh Tiến - Portfolio - SEO',
  description: `Welcome to my Software Engineer portfolio website, 
    where I showcase my expertise and professional experience.`,
  referrer: 'origin-when-cross-origin',
  openGraph: {
    title: 'Huỳnh Vĩnh Tiến',
    description: `Tiến Portfolio - About`,
    url: 'https://github.com/hvtienprotv84',
    siteName: 'huynhvinhtien',
    images: [
      {
        url: 'https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-seo-promotion-icon-vector-png-image_12256675.png',
        width: 512,
        height: 512,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="flex md:justify-between">
      <div>
        <Text type="title">Xin chào, Tôi là Huỳnh Vĩnh Tiến</Text>
        <div className="mt-8 space-y-2">
          <Text type="paragraph">
            Tôi là Software Engineer đến từ Việt Nam.
          </Text>
          <Text type="paragraph">
            Lorem ipsum odor amet, consectetuer adipiscing elit.
          </Text>
          <Text type="paragraph">
            Lorem ipsum odor amet, consectetuer adipiscing elit.
          </Text>
          <Text type="paragraph">
            Lorem ipsum odor amet, consectetuer adipiscing elit.
          </Text>
          <Text type="paragraph">
            Lorem ipsum odor amet, consectetuer adipiscing elit.
          </Text>
          <Text type="paragraph">
            Lorem ipsum odor amet, consectetuer adipiscing elit.
          </Text>
          <Text type="paragraph">
            Lorem ipsum odor amet, consectetuer,
            <Link
              href="/resume"
              className="dark:bg-gray-00 text-white rounded-md p-1 font-bold transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              My Resume.
            </Link>
          </Text>
        </div>
      </div>
      <Illustration name="programming" />
    </main>
  )
}
