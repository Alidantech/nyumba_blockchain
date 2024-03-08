// Define types
type NavigationItem = {
  route: string;
  icon: React.ReactNode;
  title: string;
  currentPage: string;
  nested?: NestedNavigationItem[];
  badge?: number;
};

type NestedNavigationItem = {
  route: string;
  title: string;
  currentPage: string;
};

export type NavigationData = NavigationItem[];
