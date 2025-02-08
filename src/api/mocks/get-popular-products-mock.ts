import { http, HttpResponse } from 'msw'

import type { GetPopularProductsResponse } from '@/api/get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    {
      product: 'Product A',
      amount: 100,
    },
    {
      product: 'Product B',
      amount: 200,
    },
    {
      product: 'Product C',
      amount: 50,
    },
    {
      product: 'Product D',
      amount: 300,
    },
  ])
})
