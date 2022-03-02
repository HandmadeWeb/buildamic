import { createModule } from "../factories/modules/moduleFactory";

export default {
    data: function () {
        return {
            customSettings: {
                globals: {
                    icon: "globe",
                    title: "Add Global Module",
                    action: () => this.addGlobal(),
                    order: 30,
                },
            },
        }
    },
    methods: {
        addRow() {
            const newModule = createModule("Row");
            this.rows.push(newModule);
        },
        addGlobal() {
            const newModule = createModule("GlobalSection");
            this.sections.splice(this.sectionIndex + 1, 0, newModule);
        },
    },
}
