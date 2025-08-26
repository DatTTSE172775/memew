// Common types used across all entities
export interface BaseEntity {
  id: number;
  createdBy: string;
  lastUpdatedBy: string;
  deletedBy?: string;
  createdTime: Date;
  lastUpdatedTime: Date;
  deletedTime?: Date;
}

// Status enums
export enum OrderStatus {
  PENDING = 1,
  PREPARING = 2,
  READY = 3,
  COMPLETED = 4,
  CANCELLED = 5
}

export enum PaymentMethod {
  CASH = 1,
  CARD = 2,
  BANK_TRANSFER = 3,
  DIGITAL_WALLET = 4
}

export enum PaymentStatus {
  PENDING = 1,
  PROCESSING = 2,
  COMPLETED = 3,
  FAILED = 4,
  REFUNDED = 5
}

export enum OrderItemStatus {
  PENDING = 1,
  PREPARING = 2,
  READY = 3,
  SERVED = 4,
  CANCELLED = 5
}
