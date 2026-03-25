import { Button } from '@/widgets/button'
import { PLANS_CARD_ITEM } from '@/widgets/landing/model/plansCardItem'
import IconCheck from '@/shared/assets/check-bold.svg'
export function PlansCard() {
  return (
    <>
      {PLANS_CARD_ITEM.map((item) => (
        <div
          key={item.planName}
          className='bd-[var(--color-stroke-border-primary)] flex min-h-[480px] flex-col rounded-[var(--radius-12)] border bg-[var(--color-background-gray-default)] p-[var(--spacing-xl)] text-[var(--color-text-and-icon-default)] md:last:col-span-2 lg:last:col-span-1'>
          <span className='text-[length:var(--text-title-lg)] leading-[var(--leading-title-lg)] font-semibold'>
            {item.planName}
          </span>
          <h5 className='mt-[var(--spacing-2xs)] flex items-center gap-[var(--spacing-4)] text-[length:var(--text-heading-md)] leading-[var(--leading-heading-lg)] font-semibold'>
            {item.price}
            {item.period && (
              <span className='text-[length:var(--text-body-xs)] font-semibold text-[var(--color-text-and-icon-secondary)]'>
                {item.period}
              </span>
            )}
          </h5>
          <ul className='mt-[var(--spacing-xl)] flex flex-col gap-[var(--spacing-8)]'>
            {item.features.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center gap-[var(--spacing-6)] text-[length:var(--text-body-md)] font-normal ${item.active ? 'text-[var(--color-brand-primary)] [&_path]:fill-[var(--color-brand-primary)]' : ''}`}>
                <IconCheck className='size-[15px]' /> {item.label}
              </li>
            ))}
          </ul>

          <Button
            className='mt-auto'
            color={`${item.planName == 'Growth' ? 'primary' : 'secondary'}`}
            style={'filled'}>
            {item.buttonLabel}
          </Button>
        </div>
      ))}
    </>
  )
}
