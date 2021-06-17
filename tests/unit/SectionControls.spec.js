import { shallowMount } from '@vue/test-utils'
import SectionControls from '@/SectionControls.vue'


describe('SectionControls', () => {
    let wrapper
    const mountWithOptions = (sections = [], props = {}) => {
        wrapper = shallowMount(SectionControls, {
            propsData: {
                index: 0,
                ...props
            },
            provide: {
                sections
            }
        })
    }

    // Displays controls in the container if sections are empty
    it('adds section to array', () => {
        mountWithOptions()
        wrapper.find('[data-testid="section-add"]').trigger('click')
        expect(wrapper.vm.sections.length).toBe(1)
    })

    // Removes the last section from the array
    it('removes last section from array', () => {
        mountWithOptions([1])
        wrapper.find('[data-testid="section-remove"]').trigger('click')
        expect(wrapper.vm.sections.length).toBe(0)
    })

    // Removes a specific section from the array at a given index
    it('removes the correct section from array', () => {
        mountWithOptions([1, 2, 3, 4], { index: 2 })
        wrapper.find('[data-testid="section-remove"]').trigger('click')
        expect(wrapper.vm.sections).toEqual([1, 2, 4])
    })
})


