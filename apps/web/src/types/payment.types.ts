import { BaseEntity, PaymentMethod, PaymentStatus } from './common.types';

// Forward declaration to avoid circular dependency
interface Order {
  id: number;
  tableId: number;
  status: number;
  totalPrice: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
}

// Payment entity
export interface Payment extends BaseEntity {
  paymentTime: Date;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  orderId: number;
  // Relationships
  order?: Order;
}

// Payment creation/update DTOs
export interface CreatePaymentDto {
  paymentMethod: PaymentMethod;
  orderId: number;
}

export interface UpdatePaymentDto {
  paymentStatus?: PaymentStatus;
  paymentTime?: Date;
}

// Payment with order details
export interface PaymentWithOrderDetails extends Payment {
  order: Order;
}

// Payment summary for listing
export interface PaymentSummary {
  id: number;
  paymentTime: Date;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  orderId: number;
  orderTotalPrice: number;
  tableId: number;
}
