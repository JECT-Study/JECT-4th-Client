'use client'

import { FeatureCard } from './ui/FeatureCard'
import { HeroSwiper } from './ui/HeroSwiper'
import { PlansCard } from './ui/PlansCard'

export function Landing() {
  return (
    <>
      <HeroSwiper />
      <div className='snap-start'>
        <section className='grid grid-cols-1 gap-(--spacing-md) px-[var(--spacing-md)] py-[var(--spacing-56)] md:grid-cols-2 lg:grid-cols-3'>
          <FeatureCard />
        </section>
        <section className='px-[var(--spacing-md)] py-[var(--spacing-56)]'>
          <div className='text-center'>
            <h3 className='text-[length:var(--text-heading-sm)] leading-[var(--leading-heading-sm)] font-semibold text-[var(--color-text-and-icon-default)]'>
              지금 무료로 시작하세요
            </h3>
            <p className='text-[length:var(--text-body-sm)] leading-[var(--leading-body-xs)] font-normal text-[var(--color-text-and-icon-tertiary)]'>
              플랜은 언제든지 변경 가능합니다
            </p>
          </div>
          <div className='mt-[var(--spacing-xl)] grid grid-cols-1 gap-[var(--spacing-md)] md:grid-cols-2 lg:grid-cols-3'>
            <PlansCard />
          </div>
        </section>
      </div>
    </>
  )
}
