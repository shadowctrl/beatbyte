export interface navItemsType {
  name: string;
  path: string;
}

export interface bannerDataType {
  imgUrl: string;
  title: string;
  smallText: string;
  bigText: string;
  buttonText: string;
  description: string;
}

export interface footerBannerDataType {
  imgUrl: string;
  title: string;
  smallText: string;
  bigText: string;
  buttonText: string;
  description: string;
  smallText1: string;
  bigText1: string;
  period: string;
}

export interface productDataType {
  quantity: number;
  id: string;
  imgUrl: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  discountText?: string;
  category?: string[];
}

export interface UseCartVisibilityProps {
  cartId?: string;
  scrollThreshold?: number;
}

export interface CartContextType {
  cart: productDataType[];
  addToCart: (item: productDataType) => void;
  clearCart: () => void;
  deleteFromCart: (item: productDataType) => void;
  deleteItem: (item: productDataType, e: React.MouseEvent<SVGElement>) => void;
}
