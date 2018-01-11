import * as _ from 'lodash';

import {IActor} from './models';

export const groupActors = (actors: Array<IActor>) => {
    return _.groupBy(actors, (actor: IActor) => actor.name);
};