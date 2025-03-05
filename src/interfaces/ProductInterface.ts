export interface IProduct {
  id: number
  title: string
  category: string
  brand: string
  price: string
  stock: number
  rating: number
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
}