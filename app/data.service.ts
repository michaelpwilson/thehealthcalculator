import { Injectable } from '@angular/core';

import { 
    WORK_ACTIVITIES,
    GYM_ACTIVITIES,
    SPORTS_ACTIVITIES,
    HOUSE_ACTIVITIES
} from './data';

@Injectable()
export class DataService {
  getWorkActivities(): Object {
    return WORK_ACTIVITIES;
  }
  getGymActivities(): Object {
    return GYM_ACTIVITIES;
  }
  getSportActivities(): Object {
    return SPORTS_ACTIVITIES;
  }
  getHouseActivities(): Object {
    return HOUSE_ACTIVITIES;
  }
}