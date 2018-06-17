import Pages from '../paging'

describe('Pages', () => {
  describe('countOfNumber is even', () => {
    const Limit = 50
    const CountOfNumber = 4

    const pages = new Pages(Limit, CountOfNumber)
    test('return [] when totalRecord is 0', async () => {
      const currentPage = 0
      const totalRecord = 0
      const expected = []
      expect(pages.create(currentPage, totalRecord)).toEqual(expected)
    })

    test('return array depends on totalRecord when totalRecord is below Limit * CountOfNumber(4)', async () => {
      expect(pages.create(0, 50)).toEqual([0])
      expect(pages.create(0, 51)).toEqual([0, 1])
      expect(pages.create(0, 200)).toEqual([0, 1, 2, 3])
    })

    test('return array element start 0 when currentPage is below offset', async () => {
      const currentPage = 1
      const totalRecord = 300
      const expected = [0, 1, 2, 3]
      expect(pages.create(currentPage, totalRecord)).toEqual(expected)
    })

    test('return array is shorter than CountOfNumber when remaining record is short', async () => {
      expect(pages.create(3, 200)).toEqual([2, 3])
      expect(pages.create(3, 210)).toEqual([2, 3, 4])
      expect(pages.create(3, 250)).toEqual([2, 3, 4])
    })

    test('return array length is same as countOfNumber', async () => {
      const currentPage = 2
      const totalRecord = 300
      const expected = [1, 2, 3, 4]
      expect(pages.create(currentPage, totalRecord)).toEqual(expected)
    })
  })

  describe('countOfNumber is odd', () => {
    const Limit = 50
    const CountOfNumber = 5
    const pages = new Pages(Limit, CountOfNumber)

    test('return [] when totalRecord is 0', async () => {
      const currentPage = 0
      const totalRecord = 0
      const expected = []
      expect(pages.create(currentPage, totalRecord)).toEqual(expected)
    })

    test('return array depends on totalRecord when totalRecord is below Limit * CountOfNumber(5)', async () => {
      expect(pages.create(0, 50)).toEqual([0])
      expect(pages.create(0, 51)).toEqual([0, 1])
      expect(pages.create(0, 250)).toEqual([0, 1, 2, 3, 4])
    })

    test('return array element start 0 when currentPage is below offset', async () => {
      expect(pages.create(1, 300)).toEqual([0, 1, 2, 3, 4])
      expect(pages.create(2, 300)).toEqual([0, 1, 2, 3, 4])
    })

    test('return array is shorter than CountOfNumber when remaining record is short', async () => {
      expect(pages.create(5, 300)).toEqual([3, 4, 5])
      expect(pages.create(5, 301)).toEqual([3, 4, 5, 6])
      expect(pages.create(5, 350)).toEqual([3, 4, 5, 6])
    })

    test('return array length is same as countOfNumber', async () => {
      const currentPage = 3
      const totalRecord = 300
      const expected = [1, 2, 3, 4, 5]
      expect(pages.create(currentPage, totalRecord)).toEqual(expected)
    })
  })
})
