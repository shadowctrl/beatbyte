import { useEffect, useCallback, ReactNode } from "react";

interface UseCartVisibilityProps {
  cartId?: string;
  scrollThreshold?: number;
}

export const useCartVisibility = ({
  cartId = "cart",
  scrollThreshold = 10,
}: UseCartVisibilityProps = {}) => {
  const getCartElement = useCallback(
    () => document.getElementById(cartId),
    [cartId]
  );

  const toggleCart = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      const element = getCartElement();
      element?.classList.toggle("cartVisible");
      element?.classList.toggle("cartInvisible");
    },
    [getCartElement]
  );

  const closeCart = useCallback(() => {
    const element = getCartElement();
    element?.classList.remove("cartVisible");
    element?.classList.add("cartInvisible");
  }, [getCartElement]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        closeCart();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const element = getCartElement();
      if (element && !element.contains(e.target as Node)) {
        closeCart();
      }
    };

    window.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [closeCart, getCartElement, scrollThreshold]);

  return {
    toggleCart,
    closeCart,
  };
};
