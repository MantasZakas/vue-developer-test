import type { IProductResponse } from "../interfaces/ProductInterface"
import axiosInstance from "../plugins/axios"

export default class ProductsService {
  static getProducts(params: object = {}): Promise<IProductResponse> {
    return axiosInstance.get('products', { params })
      .then(response => response.data)
  }
}