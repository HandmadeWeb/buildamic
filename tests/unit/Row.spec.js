import { shallowMount } from '@vue/test-utils'
import BRow from '@/rows/BRow.vue'
import RowControls from '@/rows/RowControls.vue'

describe('Sections', () => {
    let wrapper;

    const mountWithProps = (props = {}) => {
        wrapper = shallowMount(BRow, {
            stubs: {
                'row-controls': RowControls
            },
            propsData: {
                "row": {
                    "uuid": "d31e1f01-a8ef-401f-a639-2aa637b3c782",
                    "type": "row",
                    "columns": []
                },
                ...props,
            },
        });
    }

    // Displays section controls
    it('Displays row controls', () => {
        mountWithProps()
        expect(wrapper.find('[data-testid="row-controls"]').exists()).toBe(true)
    })
})

