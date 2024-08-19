import Image from 'next/image'

export const illustrationTypes = {
  programming: {
    src: '../images/programming.svg',
    alt: 'Programming image',
  },
}

export interface IllustrationProps {
  name: keyof typeof illustrationTypes
  height?: number
  width?: number
}

export const Illustration = ({
  name,
  height = 264,
  width = 264,
}: IllustrationProps) => {
  const illustration = illustrationTypes[name]
  return (
    <>
      <div className="hidden md:flex md:justify-end">
        <Image
          src={illustration.src}
          alt={illustration.alt}
          height={height}
          width={width + 100}
          priority={true}
        />
      </div>
    </>
  )
}
