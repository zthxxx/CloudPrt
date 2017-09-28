import {Notification} from 'element-ui'

export default function statusIntercept(method) {
  return async(...args) => {
    let response = await method(...args);
    if (response.result.toUpperCase() != 'OK') {
      let message = response.message || 'Unknown Error';
      Notification.error({message});
      throw new Error(message);
    }
    // if (!response.info) throw new Error('Empty response info');
    return response.info;
  }
}
