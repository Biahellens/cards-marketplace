export interface ModelCard {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
}

export interface BuyCards {
  cardIds: string[]
}