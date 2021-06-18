import { shallowMount } from '@vue/test-utils'
import BContainer from '@/fieldtypes/Buildamic.vue'
import SectionControls from '@/sections/SectionControls.vue'


describe('Container', () => {
    let wrapper;

    const mountWithProps = (props = {}) => {
        wrapper = shallowMount(BContainer, {
            stubs: {
                'section-controls': SectionControls
            },
            propsData: {
                value: {
                    "sections": [
                        {
                            "uuid": "d31e1f01-a8ef-401f-a639-2aa637b3c782",
                            "type": "section",
                        }
                    ]
                },
                handle: 'string',
                ...props,
            },
        });
    }

    // Displays controls in the container if sections are empty
    it('displays controls when empty', () => {
        mountWithProps({
            value: {
                sections: []
            }
        })
        expect(wrapper.find('[data-testid="section-controls"]').exists()).toBe(true)
    })

    // Hides controls in the container when there are sections
    it('hides controls when not empty', () => {
        mountWithProps()
        expect(wrapper.find('[data-testid="section-controls"]').exists()).toBe(false)
    })
})
