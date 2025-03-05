import type { IProduct, IProductResponseItem, IProductResponseItemReview, IProductResponseItemMeta } from "../interfaces/ProductInterface"

export class Product implements IProduct {
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

  constructor(data: IProductResponseItem, currency = '$') {
    this.id = data.id || 0
    this.title = data.title || '-'
    this.category = data.category || '-'
    this.brand = data.brand || '-'
    this.price = `${currency}${Number(data.price).toFixed(2)}`
    this.stock = data.stock || 0
    this.rating = data.rating || 0
    this.description = data.description || '-'
    this.tags = data.tags.join(', ')
    this.sku = data.sku || '-'
    this.description = data.description || '-'
    this.discountPercentage = `${data.discountPercentage || 0}%`
    this.weight = data.weight || 0
    this.dimensions = `${data.dimensions.width || 0} * ${data.dimensions.height || 0} * ${data.dimensions.depth || 0}`
    this.warrantyInformation = data.warrantyInformation || '-'
    this.shippingInformation = data.shippingInformation || '-'
    this.availabilityStatus = data.availabilityStatus || '-'
    this.reviews = data.reviews.map(review => ({
      ...review,
      date: new Date(review.date).toLocaleDateString()
    })) || []
    this.returnPolicy = data.returnPolicy || '-'
    this.minimumOrderQuantity = data.minimumOrderQuantity || 0
    this.meta = {
      createdAt: new Date(data.meta.createdAt).toLocaleDateString(),
      updatedAt: new Date(data.meta.updatedAt).toLocaleDateString(),
      barcode: data.meta.barcode || '-',
      qrCode: data.meta.qrCode || '',
    }
    this.images = data.images || []
    this.thumbnail = data.thumbnail || ''
  }
}