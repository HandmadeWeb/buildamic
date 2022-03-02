import { OPERATORS, ALIASES } from './Constants.js';

export default class {

    fromBlueprint(conditions, prefix = null) {
        return Object.entries(conditions).map(([field, condition]) => this.splitRhs(field, condition, prefix));
    }

    toBlueprint(conditions) {
        let converted = {};

        conditions.forEach(condition => {
            converted[condition.field] = this.combineRhs(condition);
        });

        return converted;
    }

    splitRhs(field, condition, prefix = null) {
        return {
            'field': this.getScopedFieldHandle(field, prefix),
            'operator': this.getOperatorFromRhs(condition),
            'value': this.getValueFromRhs(condition)
        };
    }

    getScopedFieldHandle(field, prefix) {
        if (field.startsWith('root.') || !prefix) {
            return field;
        }

        return prefix + field;
    }

    getOperatorFromRhs(condition) {
        let operator = '==';

        this.getOperatorsAndAliases()
            .filter(value => new RegExp(`^${value} [^=]`).test(condition.toString()))
            .forEach(value => {
                operator = value
            })

        return this.normalizeOperator(operator);
    }

    normalizeOperator(operator) {
        return ALIASES[operator]
            ? ALIASES[operator]
            : operator;
    }

    getValueFromRhs(condition) {
        let rhs = condition.toString();

        this.getOperatorsAndAliases()
            .filter(value => new RegExp(`^${value} [^=]`).test(rhs))
            .forEach(value => rhs = rhs.replace(new RegExp(`^${value}[ ]*`), ''))

        return rhs;
    }

    combineRhs(condition) {
        let operator = condition.operator ? condition.operator.trim() : '';
        let value = condition.value.trim();

        return `${operator} ${value}`.trim();
    }

    getOperatorsAndAliases() {
        return OPERATORS.concat(Object.keys(ALIASES));
    }
}
