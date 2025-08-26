import { BaseEntity } from "./common.types";

// Forward declarations to avoid circular dependency
interface OrderItem {
  id: number;
  orderId: number;
  productId: number;
  productSizeId: number;
  status: number;
  note?: string;
  remarkNote?: string;
}

interface Category {
  id: number;
  name: string;
}

// Product entity
export interface Product extends BaseEntity {
  name: string;
  description: string;
  durationTime: number; // in minutes
  imageUrl: string;
  // Relationships
  productSizes?: ProductSize[];
  productCategories?: ProductCategory[];
  orderItems?: OrderItem[];
}

// ProductSize entity
export interface ProductSize extends BaseEntity {
  sizeName: string;
  price: number;
  productId: number;
  // Relationships
  product?: Product;
  orderItems?: OrderItem[];
}

// ProductCategory junction table
export interface ProductCategory extends BaseEntity {
  productId: number;
  categoryId: number;
  // Relationships
  product?: Product;
  category?: Category;
}

// Product creation/update DTOs
export interface CreateProductDto {
  name: string;
  description: string;
  durationTime: number;
  imageUrl: string;
  sizes: CreateProductSizeDto[];
  categoryIds: number[];
}

export interface UpdateProductDto {
  name?: string;
  description?: string;
  durationTime?: number;
  imageUrl?: string;
}

export interface CreateProductSizeDto {
  sizeName: string;
  price: number;
}

export interface UpdateProductSizeDto {
  sizeName?: string;
  price?: number;
}

// Carousel Product interface - chỉ lấy các field cần thiết cho hiển thị
export interface CarouselProduct {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category?: string;
  isNew?: boolean;
  price?: number; // Lấy từ productSizes nếu cần
}
