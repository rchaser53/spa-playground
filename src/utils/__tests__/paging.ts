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
    });

    test('return [0] when totalRecord is below Limit', async () => {
      const currentPage = 0
      const totalRecord = 50
      const expected = [0]
      expect(pages.create(currentPage, totalRecord)).toEqual(expected)
    });

    test('return [0, 1, 2, 3] when totalRecord is below Limit * CountOfNumber(4)', async () => {
      const currentPage = 0
      const totalRecord = 200
      const expected = [0, 1, 2, 3]
      expect(pages.create(currentPage, totalRecord)).toEqual(expected)
    });

    test('return array element start 0 when currentPage is below offset', async () => {
      const currentPage = 1
      const totalRecord = 200
      const expected = [0, 1, 2, 3]
      expect(pages.create(currentPage, totalRecord)).toEqual(expected)
    });

    test('return array is shorter than CountOfNumber when remaining record is short', async () => {
      const currentPage = 3
      const totalRecord = 210
      const expected = [2, 3, 4]
      expect(pages.create(currentPage, totalRecord)).toEqual(expected)
    });

    test('return [1, 2, 3, 4]', async () => {
      const currentPage = 2
      const totalRecord = 300
      const expected = [1, 2, 3, 4]
      expect(pages.create(currentPage, totalRecord)).toEqual(expected)
    });

  })

})
