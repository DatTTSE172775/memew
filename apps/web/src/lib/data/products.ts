import "server-only";
import { CarouselProduct } from "@/types/product.types";
import { productService } from "@/services/product.service";

/**
 * Fetch carousel products from service
 * Có thể cache ở CDN level với revalidate
 */
export async function getCarouselProducts(): Promise<CarouselProduct[]> {
  try {
    return await productService.getCarouselProducts();
  } catch (error) {
    console.error("Error fetching carousel products:", error);
    throw new Error("Failed to load carousel products");
  }
}

/**
 * Fetch product by ID
 */
export async function getProductById(
  id: number
): Promise<CarouselProduct | null> {
  try {
    return await productService.getProductById(id);
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

/**
 * Search products
 */
export async function searchProducts(
  query: string
): Promise<CarouselProduct[]> {
  try {
    return await productService.searchProducts(query);
  } catch (error) {
    console.error("Error searching products:", error);
    throw new Error("Failed to search products");
  }
}
