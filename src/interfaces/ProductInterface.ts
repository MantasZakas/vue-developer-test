export interface IProduct {
  id: number
  title: string
  category: string
  brand: string
  price: string
  stock: number
  rating: number
  description: string
  discountPercentage: string
  tags: string
  sku: string
  weight: number
  dimensions: string
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: IProductResponseItemReview[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: IProductResponseItemMeta
  images: string[]
  thumbnail: string
}

export interface IProductResponse {
  limit: number
  products: IProductResponseItem[]
  skip: number
  total: number
}

export interface IProductResponseItem {
  id: number
  title: string
  category: string
  brand: string
  price: number
  stock: number
  rating: number
  description: string
  discountPercentage: number
  tags: string[]
  sku: string
  weight: number
  dimensions: IProductResponseItemDimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: IProductResponseItemReview[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: IProductResponseItemMeta
  images: string[]
  thumbnail: string
}

export interface IProductResponseItemDimensions {
  width: number
  height: number
  depth: number
}

export interface IProductResponseItemReview {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface IProductResponseItemMeta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}