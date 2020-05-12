import { createSelector } from 'reselect'

const sectoinsSelector = state => state.sections
console.log(sectoinsSelector)
export const getItemSections = createSelector(
    [sectoinsSelector],
    (sections) => sections.sections
)