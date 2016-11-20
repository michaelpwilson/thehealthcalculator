import { Injectable } from '@angular/core';

import { HOUSE_ACTIVITIES, SPORTS_ACTIVITIES } from './data';

@Injectable()
export class DataService {
  getHouseActivities(): Object {
    return HOUSE_ACTIVITIES;
  }
  getSportActivities(): Object {
    return SPORTS_ACTIVITIES;
  }
}