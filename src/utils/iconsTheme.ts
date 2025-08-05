import { getAssetUrl } from '../api/utilis';

export const themeIconBasket = (theme: string) => {
  return theme === 'light'
    ? getAssetUrl('/public/icons/basket.svg')
    : getAssetUrl('/public/icons/basket_dark.svg');
};

export const themeIconFavourite = (theme: string) => {
  return theme === 'light'
    ? getAssetUrl('/public/icons/favourite_heart.svg')
    : getAssetUrl('/public/icons/favourite_dark.svg');
};

export const themeIconBurger = (theme: string) => {
  return theme === 'light'
    ? getAssetUrl('/public/icons/burger.svg')
    : getAssetUrl('/public/icons/burger_dark.svg');
};

export const themeIconClose = (theme: string) => {
  return theme === 'light'
    ? getAssetUrl('/public/icons/close.svg')
    : getAssetUrl('/public/icons/close_dark.svg');
};

export const themeIconLogo = (theme: string) => {
  return theme === 'light'
    ? getAssetUrl('/public/icons/logo.svg')
    : getAssetUrl('/public/icons/logo_dark.svg');
};

export const themeIconHome = (theme: string) => {
  return theme === 'light'
    ? getAssetUrl('/public/icons/home.svg')
    : getAssetUrl('/public/icons/home_dark.svg');
};

export const themeIconBack = (theme: string) => {
  return theme === 'light'
    ? getAssetUrl('/public/icons/arrow_left.svg')
    : getAssetUrl('/public/icons/back_arrow_dark.svg');
};

export const themeIconRemoveProduct = (theme: string) => {
  return theme === 'light'
    ? getAssetUrl('/public/icons/close.svg')
    : getAssetUrl('/public/icons/close_product_dark.svg');
};
