import {offersMock} from '../mock/offersMocks.js';

export default class OffersModel {
  get offers() {
    return [... offersMock];
  }

  getOffersByType(type) {
    const typeOffers = this.offers.find((offer) => offer.type === type);
    return typeOffers ? typeOffers.offers : [];
  }
}
