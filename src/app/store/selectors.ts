import { createSelector } from '@ngrx/store';

import { moduleFeatureKey } from ".";
import { featureKey, PaymentState } from "./reducer";

export const selectCardState = (state): PaymentState => state[moduleFeatureKey][featureKey];
const getPaymentState = createSelector(selectCardState, state => state);
const getCardState = createSelector(selectCardState, state => state.creditCardData);

export const cardSelectorQuery = {
  selectCardState,
  getCardState,
  getPaymentState
};
