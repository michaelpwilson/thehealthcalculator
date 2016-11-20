import { Injectable } from '@angular/core';

import { HOUSE_ACTIVITIES } from './data';

@Injectable()
export class DataService {
  getHouseActivities(): Object {
    return HOUSE_ACTIVITIES;
  }
}