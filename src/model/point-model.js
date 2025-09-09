import { PointsMock } from '../mock/pointsMocks.js';

export default class PointModel {
  get points() {
    return [... PointsMock];
  }
}
