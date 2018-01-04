import user from './user'
import point from './point'
import file from './file'
import order from './order'
import pay from './pay'
import library from './library'

export default {
  ...user,
  ...point,
  ...file,
  ...order,
  ...pay,
  ...library
}
