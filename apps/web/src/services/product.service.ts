import { CarouselProduct } from "@/types/product.types";
import { mockCarouselProducts } from "@/mock/products";

// Product service interface
export interface ProductService {
  getCarouselProducts(): Promise<CarouselProduct[]>;
  getProductById(id: number): Promise<CarouselProduct | null>;
  searchProducts(query: string): Promise<CarouselProduct[]>;
}

// Mock implementation - sau này có thể thay bằng real API
export class MockProductService implements ProductService {
  async getCarouselProducts(): Promise<CarouselProduct[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100));
    return mockCarouselProducts;
  }

  async getProductById(id: number): Promise<CarouselProduct | null> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return mockCarouselProducts.find((product) => product.id === id) || null;
  }

  async searchProducts(query: string): Promise<CarouselProduct[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    const lowercaseQuery = query.toLowerCase();
    return mockCarouselProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery) ||
        product.category?.toLowerCase().includes(lowercaseQuery)
    );
  }
}

// Real API implementation (sau này sẽ thay thế mock)
export class ApiProductService implements ProductService {
  private baseUrl: string;

  constructor(baseUrl: string = process.env.NEXT_PUBLIC_API_URL || "/api") {
    this.baseUrl = baseUrl;
  }

  async getCarouselProducts(): Promise<CarouselProduct[]> {
    try {
      const response = await fetch(`${this.baseUrl}/products/carousel`);
      if (!response.ok) {
        throw new Error("Failed to fetch carousel products");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching carousel products:", error);
      throw error;
    }
  }

  async getProductById(id: number): Promise<CarouselProduct | null> {
    try {
      const response = await fetch(`${this.baseUrl}/products/${id}`);
      if (!response.ok) {
        return null;
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
  }

  async searchProducts(query: string): Promise<CarouselProduct[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/products/search?q=${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error("Failed to search products");
      }
      return await response.json();
    } catch (error) {
      console.error("Error searching products:", error);
      throw error;
    }
  }
}

// Export default service instance
export const productService: ProductService = new MockProductService();

// Helper function để switch giữa mock và real API
export const switchToRealApi = (baseUrl?: string) => {
  return new ApiProductService(baseUrl);
};
