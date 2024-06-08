export interface ModelCard {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
}

export interface BuyCards {
  cardIds: string[];
}

export interface SwapCard {
  cards: [
    {
      cardId: string;
      type: string;
    },
    {
      cardId: string;
      type: string;
    }
  ];
}
