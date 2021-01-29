class PaginationOption {
    constructor(page = 1, perPage = 4) {
        this.page = Number(page);
        this.perPage = Number(perPage);
    }

    limit() {
        return this.perPage;
    }

    currentPage() {
        return this.page;
    }

    offset() {
        return (this.page - 1) * this.limit();
    }
}

export default PaginationOption;