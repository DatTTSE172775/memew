import { BaseEntity } from "./common.types";

// Forward declaration to avoid circular dependency
interface ProductCategory {
  id: number;
  productId: number;
  categoryId: number;
}

// Category entity
export interface Category extends BaseEntity {
  name: string;
  // Relationships
  productCategories?: ProductCategory[];
}

// Category creation/update DTOs
export interface CreateCategoryDto {
  name: string;
}

export interface UpdateCategoryDto {
  name?: string;
}

// Category with product count for listing
export interface CategoryWithProductCount extends Category {
  productCount: number;
}
