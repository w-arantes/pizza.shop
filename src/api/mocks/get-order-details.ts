import { http, HttpResponse } from 'msw'

import { GetOrderDetailsParams, GetOrderDetailsResponse } from '@/api/get-order-details'

export const getOrderDetailsMock = http.get<GetOrderDetailsParams, never, GetOrderDetailsResponse>(
  '/orders/:orderId',
  ({ params }) => {
    return HttpResponse.json({
      id: params.orderId,
      customer: {
        name: 'John Doe',
        email: 'john.doe@mail.com',
        phone: '+1234567890',
      },
      status: 'pending',
      createdAt: new Date().toISOString(),
      orderItems: [
        {
          id: 'order-item-1',
          priceInCents: 1200,
          product: {
            name: 'Product 1',
          },
          quantity: 2,
        },
      ],
      totalInCents: 2400,
    })
  },
)
