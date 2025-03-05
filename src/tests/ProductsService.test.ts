import { vi, describe, it, expect, beforeEach } from 'vitest'
import ProductsService from "../services/products.api"
import axiosInstance from '../plugins/axios'

vi.mock('../plugins/axios', () => ({
  default: {
    get: vi.fn(),
  },
}))

describe('ProductsService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch products with proper interface', async () => {
    const mockData = {
      limit: 10,
      skip: 0,
      total: 1,
      products: [{
        id: 1,
        title: 'Test Product',
        category: 'Test Category',
        brand: 'Test Brand',
        price: 99.99,
        stock: 100,
        rating: 4.5
      }]
    }

    axiosInstance.get.mockResolvedValue({ data: mockData })

    const result = await ProductsService.getProducts()

    expect(result.limit).toBe(10)
    expect(result.skip).toBe(0)
    expect(result.total).toBe(1)
    expect(result.products).toHaveLength(1)

    const product = result.products[0]
    expect(product.id).toBe(1)
    expect(product.title).toBe('Test Product')
    expect(product.category).toBe('Test Category')
    expect(product.brand).toBe('Test Brand')
    expect(product.price).toBe(99.99)
    expect(product.stock).toBe(100)
    expect(product.rating).toBe(4.5)
  })

  it('should search products with correct structure', async () => {
    const mockData = {
      limit: 10,
      skip: 0,
      total: 1,
      products: [{
        id: 2,
        title: 'Search Product',
        category: 'Search Category',
        brand: 'Search Brand',
        price: 49.99,
        stock: 50,
        rating: 4.0
      }]
    }

    axiosInstance.get.mockResolvedValue({ data: mockData })

    const query = 'search'
    const result = await ProductsService.searchProducts(query)

    expect(result.products).toHaveLength(1)
    const product = result.products[0]
    expect(product.id).toBe(2)
    expect(product.title).toBe('Search Product')
    expect(product.category).toBe('Search Category')
    expect(product.brand).toBe('Search Brand')
    expect(product.price).toBe(49.99)
    expect(product.stock).toBe(50)
    expect(product.rating).toBe(4.0)
  })

  it('should fetch a single product by id with all fields', async () => {
    const mockProduct = {
      id: 1,
      title: 'Product 1',
      category: 'Category 1',
      brand: 'Brand 1',
      price: 100,
      stock: 20,
      rating: 5.0
    }

    axiosInstance.get.mockResolvedValue({ data: mockProduct })

    const result = await ProductsService.getProduct(1)

    expect(result.id).toBe(1)
    expect(result.title).toBe('Product 1')
    expect(result.category).toBe('Category 1')
    expect(result.brand).toBe('Brand 1')
    expect(result.price).toBe(100)
    expect(result.stock).toBe(20)
    expect(result.rating).toBe(5.0)
  })
})
