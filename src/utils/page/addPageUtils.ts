import PageUtils from './PageUtils.vue';

export const addPageUtils = (decoratorObject) => {
  const mixins = decoratorObject.mixins || []
  return {
    ...decoratorObject,
    mixins: [ ...mixins, PageUtils],
  }
}