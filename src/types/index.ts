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
