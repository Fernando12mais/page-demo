type UListItem = {
  content: {
    bold?: boolean;
    text: string;
  }[];
};

export type UListProps = {
  itens: UListItem[];
};
