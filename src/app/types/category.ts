export interface CategoryMockdataProps {
  id: number;
  categoryTitle: string;
  categoryImageUrl: string;
}

export interface CategoryListProps {
  categoryData: CategoryMockdataProps[];
}

export interface CategoryCardProps {
  categoryTitle: string;
  categoryImageUrl: string;
}
