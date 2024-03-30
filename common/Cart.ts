export type productType = {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedPrice: number
  thumbnail: string
}

export type cartType = {
  id: 1
  products: productType[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}
