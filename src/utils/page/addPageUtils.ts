import PageUtils from './PageUtils.vue';

export const addPageUtils = (httpClient, decoratorObject) => {
  const { data, mixins } = decoratorObject;
  const mixinsArray = mixins || []
  const dataObject = convertDataToDataObject(data)

  return {
    ...decoratorObject,
    mixins: [ ...mixinsArray, PageUtils],
    data() {
      return {
        ...dataObject,
        httpClient
      }
    }
  }
}

const convertDataToDataObject = (data) => {
  if (data == null) {
    return {}
  } else if (typeof data === 'function') {
    return data()
  }
  return data
}