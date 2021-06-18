import { createModule } from "../../factories/modules/moduleFactory";

export default {
    props: {
        value: Array,
        index: {
            type: Number,
            default: 0,
        },
    },
    methods: {
        addModule() {
            const newModule = createModule(this.type)

            this.value.splice(this.index + 1, 0, newModule);
        },
        // cloneModule() {
        //     const clone = JSON.parse(JSON.stringify(this.el))
        //     this.value.splice(this.index + 1, 0, clone);
        // },
        removeModule() {
            this.value.splice(this.index, 1);
        },
    },
};
