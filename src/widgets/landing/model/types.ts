import { StaticImageData } from 'next/image'

export interface FeatureCardItem {
  id: number
  title: string
  subTitle: string
  description: string
  imgSrc: StaticImageData
  url: string
}

export interface PlansCardItem {
  planName: string
  price: string
  period: string | null
  features: { label: string; active: boolean }[]
  buttonLabel: string
}
