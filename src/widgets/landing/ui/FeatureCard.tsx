import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FEATURE_CARD_ITEM } from '@/widgets/landing/model/featureCardItem'
import { Button } from '@/widgets/button'
import IconRightArrow from '@/shared/assets/rightwards-arrow-bold.svg'
import IconZap from '@/shared/assets/zap-bold.svg'

export function FeatureCard() {
  const router = useRouter()
  return (
    <>
      {FEATURE_CARD_ITEM.map((item) => (
        <div
          key={item.id}
          className='bd-[var(--color-stroke-border-primary)] rounded-[var(--radius-12)] border bg-[var(--color-background-gray-default)] px-[var(--spacing-xl)] py-[var(--spacing-2xl)]'>
          <h4 className='flex items-center gap-[var(--spacing-8)] text-[length:var(--text-title-lg)] font-semibold text-[var(--color-brand-primary)] [&_path]:fill-[var(--color-brand-primary)]'>
            <IconZap className='size-26' />
            {item.title}
          </h4>
          <h5 className='mt-[var(--spacing-2xl)] text-[length:var(--text-title-sm)] font-medium'>
            {item.subTitle}
          </h5>
          <p className='mt-[var(--spacing-xs)] text-[length:var(--text-body-sm)] font-normal'>
            {item.description}
          </p>
          <div className='mt-[var(--spacing-xl)] h-[232px] w-full overflow-hidden rounded-[var(--radius-8)]'>
            <Image
              src={item.imgSrc}
              alt={item.title}
              className='h-auto w-full max-w-full object-cover'
            />
          </div>
          <Button
            className='float-right mt-[var(--spacing-xl)] cursor-pointer'
            color='secondary'
            size={'sm'}
            style={'filled'}
            rightIcon={<IconRightArrow />}
            onClick={() => router.push(item.url)}>
            바로가기
          </Button>
        </div>
      ))}
    </>
  )
}
