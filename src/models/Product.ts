import type { IProduct, IProductResponseItem } from "/src/interfaces/ProductInterface"

export class Product implements IProduct {
  id: number
  title: string
  category: string
  brand: string
  price: string
  stock: number
  rating: number

  constructor(data: IProductResponseItem, currency = '$') {
    this.id = data.id || 0
    this.title = data.title || '-'
    this.category = data.category || '-'
    this.brand = data.brand || '-'
    this.price = `${currency}${Number(data.price).toFixed(2)}`
    this.stock = data.stock || 0
    this.rating = data.rating || 0
  }
}