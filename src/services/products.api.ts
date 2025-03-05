import type { IProductResponse, IProductResponseItem } from "../interfaces/ProductInterface"
import axiosInstance from "../plugins/axios"

export default class ProductsService {
  static getProducts(params: object = {}): Promise<IProductResponse> {
    return axiosInstance.get('products', { params })
      .then(response => response.data)
  }

  static getProduct(id: number): Promise<IProductResponseItem> {
    return axiosInstance.get(`products/${id}` )
      .then(response => response.data)
  }
}