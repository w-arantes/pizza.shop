import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getMonthOrdersAmount } from '@/api/get-month-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'

export function MonthOrdersAmountCard() {
  const { data: monthOrdersAmount } = useQuery({
    queryKey: ['metrics', 'month-orders-amount'],
    queryFn: getMonthOrdersAmount,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Orders (month)
        </CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            {monthOrdersAmount.diffFromLastMonth >= 0 ? (
              <p className="text-sm text-muted-foreground">
                <span className="text-emerald-500 dark:text-emerald-400">
                  +{monthOrdersAmount.diffFromLastMonth}%
                </span>{' '}
                compared to last month
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                <span className="text-rose-500 dark:text-rose-400">
                  {monthOrdersAmount.diffFromLastMonth}%
                </span>{' '}
                compared to last month
              </p>
            )}
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
