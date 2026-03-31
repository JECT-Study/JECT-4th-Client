import { PLANS_CARD_ITEM } from '@/entities/plansCard/config/plansCardItem'
import { PlansCard } from '@/entities/plansCard/PlansCard'

export function PlansSection() {
  return (
    <>
      <div className='text-center'>
          지금 무료로 시작하세요
        </h3>
          플랜은 언제든지 변경 가능합니다
        </p>
      </div>

        {PLANS_CARD_ITEM.map((item) => (
          <PlansCard
            key={item.planName}
            planName={item.planName}
            price={item.price}
            period={item.period}
            features={item.features}
            buttonLabel={item.buttonLabel}
          />
        ))}
      </div>
    </>
  )
}
