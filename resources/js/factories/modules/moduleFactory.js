import { generateID } from '../../functions/idHelpers'

import { Section } from './section'
import { Row } from './row'
import { Column } from './column'

const module = { Section, Row, Column };

const createModule = function (type, attributes) {
    const ModuleType = module[type];
    return new ModuleType({
        UUID: generateID(),
        ...attributes
    });
}

export { createModule }
