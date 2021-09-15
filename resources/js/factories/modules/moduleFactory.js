import { generateID } from '../../functions/idHelpers'

import { Section } from './section'
import { GlobalSection } from './global-section'
import { Row } from './row'
import { Column } from './column'
import { Field } from './field'
import { Set } from './set'

const module = { Section, GlobalSection, Row, Column, Field, Set };

const createModule = function (type, attributes) {
    const ModuleType = module[type];
    return new ModuleType({
        UUID: generateID(),
        ...attributes
    });
}

export { createModule }
