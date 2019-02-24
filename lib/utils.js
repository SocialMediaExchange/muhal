import { compose, not, isEmpty } from 'ramda'

export const notEmpty = compose(not, isEmpty)
