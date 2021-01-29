class PaginationData {
    constructor(paginationOption, numberOfItems) {
        this.paginationOption = paginationOption;
        this.numberOfItems = numberOfItems;
        this.items = [];
    }

    totalPages() {
        return Math.ceil(this.numberOfItems / this.paginationOption.limit());
    }

    addItem(item) {
        this.items.push(item)
    }

    hasNext() {
        return this.paginationOption.currentPage() < this.totalPages();
    }

    nextPage() {
        return this.paginationOption.currentPage() + 1;
    }

    hasPrev() {
        return this.paginationOption.currentPage() > 1;
    }

    prevPage() {
        return this.paginationOption.currentPage() - 1;
    }

    paginationItems() {
        const paginationInfo = {
            totalItems: this.numberOfItems,
            totalPage: this.totalPages(),
            currentPage: this.paginationOption.currentPage(),
            perPage: this.paginationOption.limit()
        }

        if(this.hasNext) {
            paginationInfo.nextPage = this.nextPage();
        }

        if(this.hasPrev) {
            paginationInfo.prevPage = this.prevPage();
        }

        return {
            paginationInfo,
            data: this.items
        }
    }
}

export default PaginationData;