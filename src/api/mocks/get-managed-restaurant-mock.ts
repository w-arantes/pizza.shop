import { http, HttpResponse } from 'msw'

import type { GetManagedRestaurantResponse } from '@/api/get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Pizza Shop',
    createdAt: new Date(),
    updatedAt: null,
    description: 'A mock restaurant',
    managerId: 'custom-manager-id',
  })
})
