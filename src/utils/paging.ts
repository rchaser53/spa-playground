export default class Pages {
  limit: number = 50
  countOfPage: number = 4

  constructor(limit: number, countOfPage: number) {
    this.limit = limit || this.limit
    this.countOfPage = countOfPage || this.countOfPage
  }

  create(currentPage: number, totalRecord: number): number[] {
    if (totalRecord < this.limit) return []
    if (this.isCreatePagesFromStart(currentPage, totalRecord)) return this.createFromZero(currentPage, totalRecord)

    return this.createPages(currentPage, totalRecord)
  }

  createOffset(): number {
    return this.countOfPage % 2 === 0 ? Math.floor(this.countOfPage / 2) - 1 : Math.floor(this.countOfPage / 2)
  }

  isCreatePagesFromStart(currentPage: number, totalRecord: number): boolean {
    const offset = this.createOffset()
    if (totalRecord < this.limit * this.countOfPage) return true
    if (currentPage < offset) return true

    return false
  }

  createFromZero(currentPage: number, totalRecord: number): number[] {
    const pages: number[] = []
    const pagesLength = Math.ceil(totalRecord / this.limit)
    const limit = pagesLength < this.countOfPage ? pagesLength : this.countOfPage
    for (let i = 0; i < limit; i++) {
      pages.push(i)
    }
    return pages
  }

  createPages(currentPage: number, totalRecord: number): number[] {
    const pages: number[] = []
    const offset = this.createOffset()
    const limitPageNumber = this.getLimitPageNumber(currentPage, totalRecord)

    for (let i = currentPage - offset; i < limitPageNumber; i++) {
      pages.push(i)
    }
    return pages
  }

  getLimitPageNumber(currentPage: number, totalRecord: number): number {
    const pagesLength = Math.ceil(totalRecord / this.limit)
    const offset = this.createOffset()
    const fromStart = currentPage - offset + this.countOfPage

    return pagesLength < fromStart ? pagesLength : fromStart
  }
}
