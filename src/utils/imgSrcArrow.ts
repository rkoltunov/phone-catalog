import { getAssetUrl } from '../api/utilis';

export const imgSrcArrow = {
  default: getAssetUrl('/public/icons/arrow_circle_default.svg'),
  hover: getAssetUrl('/public/icons/arrow_circle_hover.svg'),
  disabled: getAssetUrl('/public/icons/arrow_circle_disabled.svg'),
  active: getAssetUrl('/public/icons/arrow_circle_active.svg'),
};
