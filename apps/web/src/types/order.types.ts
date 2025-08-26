import {
  BaseEntity,
  OrderStatus,
  PaymentMethod,
  PaymentStatus,
  OrderItemStatus,
} from "./common.types";

// Forward declarations to avoid circular dependency
interface Product {
  id: number;
  name: string;
  description: string;
  durationTime: number;
  imageUrl: string;
}

interface ProductSize {
  id: number;
  sizeName: string;
  price: number;
  productId: number;
}

interface Payment {
  id: number;
  paymentTime: Date;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  orderId: number;
}

// Order entity
export interface Order extends BaseEntity {
  tableId: number;
  status: OrderStatus;
  totalPrice: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  // Relationships
  orderItems?: OrderItem[];
  payments?: Payment[];
}

// OrderItem entity
export interface OrderItem extends BaseEntity {
  orderId: number;
  productId: number;
  productSizeId: number;
  status: OrderItemStatus;
  note?: string;
  remarkNote?: string;
  // Relationships
  order?: Order;
  product?: Product;
  productSize?: ProductSize;
}

// Order creation/update DTOs
export interface CreateOrderDto {
  tableId: number;
  orderItems: CreateOrderItemDto[];
  note?: string;
}

export interface UpdateOrderDto {
  status?: OrderStatus;
  totalPrice?: number;
  paymentMethod?: PaymentMethod;
  paymentStatus?: PaymentStatus;
}

export interface CreateOrderItemDto {
  productId: number;
  productSizeId: number;
  note?: string;
  remarkNote?: string;
}

export interface UpdateOrderItemDto {
  status?: OrderItemStatus;
  note?: string;
  remarkNote?: string;
}

// Order with full details for display
export interface OrderWithDetails extends Order {
  orderItems: (OrderItem & {
    product: Product;
    productSize: ProductSize;
  })[];
  payments: Payment[];
}

// Order summary for listing
export interface OrderSummary {
  id: number;
  tableId: number;
  status: OrderStatus;
  totalPrice: number;
  paymentStatus: PaymentStatus;
  createdTime: Date;
  itemCount: number;
}
