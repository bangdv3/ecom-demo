import {createSelector} from 'reselect'

const selectDirector = state => state.directory

export const selectDirectorSections = createSelector(
  [selectDirector],
  directory => directory.sections 
)