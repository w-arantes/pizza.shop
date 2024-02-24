import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      date: '01/01/2024',
      receipt: 2000,
    },
    {
      date: '01/02/2024',
      receipt: 1000,
    },
    {
      date: '01/03/2024',
      receipt: 1250,
    },
    {
      date: '01/04/2024',
      receipt: 3000,
    },
    {
      date: '01/05/2024',
      receipt: 3000,
    },
    {
      date: '01/06/2024',
      receipt: 3000,
    },
    {
      date: '01/07/2024',
      receipt: 3000,
    },
  ])
})
