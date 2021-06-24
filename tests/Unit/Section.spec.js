import { shallowMount } from '@vue/test-utils'
import BSection from '@/sections/BSection.vue'
import SectionControls from '@/sections/SectionControls.vue'

describe('Sections', () => {
    let wrapper;

    const mountWithProps = (props = {}) => {
        wrapper = shallowMount(BSection, {
            stubs: {
                'section-controls': SectionControls
            },
            propsData: {
                "section": {
                    "uuid": "d31e1f01-a8ef-401f-a639-2aa637b3c782",
                    "type": "section",
                    "rows": []
                },
                ...props,
            },
        });
    }

    // Displays section controls
    it('displays section controls', () => {
        mountWithProps()
        expect(wrapper.find('[data-testid="section-controls"]').exists()).toBe(true)
    })
})

