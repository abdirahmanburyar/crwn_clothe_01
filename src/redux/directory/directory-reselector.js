import { createSelector } from 'reselect'

const sectoinsSelector = state => state.directory

export const getItemSections = createSelector(
    [sectoinsSelector],
    (directory) => directory.sections
)