export interface Swap {
  id: string;
  userId: string;
  createdAt: Date
  user: {
    name: string
  };
  tradeCards: Card[];
}

export interface Card {
  id: string;
  cardId: string
  tradeId: string;
  type: string
  card: {
    id: string
    name: string
    description: string
    imageUrl: string
    createdAt: Date
  };
}