import { getFormattedDatetime, isAfterDatetime } from '../time'

describe('getFormattedDatetime', () => {
  test('JP_SHORT', async () => {
    const input = 1523000000000
    expect(getFormattedDatetime(1523000000000, 'JP_SHORT')).toEqual('2018/04/06')
  })

  test('Default', async () => {
    const input = 1523000000000
    expect(getFormattedDatetime(1523000000000)).toEqual('2018-04-06T16:33:20+09:00')
  })
})
