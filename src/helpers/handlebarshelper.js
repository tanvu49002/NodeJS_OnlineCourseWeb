const Handlebars = require('handlebars');
const moment = require('moment');
const HandlebarsHelper = {
    formatDate: (date) => {
        return moment(date).format('DD-MM-YYYY');
    },
    sumhelper: function (a, b) {
        return a + b
    },
    range: (start, end) => {
        return Array.from({ length: end - start + 1 }, (_, index) => start + index);
    },
    sorthelper: (column, sort) => {
        let currentType = 'default'
        let currentPage = 1
        if (column === sort.column) {
            currentType = sort.type
        }
        // if (currentPage !== sort.page) {
        //     currentPage = sort.page
        // }
        const icons = {
            default: 'fa-solid fa-sort',
            asc: 'fa-solid fa-sort-up',
            desc: 'fa-solid fa-sort-down'
        }
        const types = {
            default: 'asc',
            asc: 'desc',
            desc: 'asc'
        }
        const icon = icons[currentType]
        const type = types[currentType]
        const href = Handlebars.escapeExpression(`?sort&column=${column}&type=${type}&page=${currentPage}`)
        const result = `<a href="${href}"><i class="${icon}"></i></a>`

        return new Handlebars.SafeString(result)
    },
    times: (n, block) => {
        var accum = '';
        for (var i = 0; i < n; ++i)
            accum += block.fn(i);
        return accum;
    },
    isSelected: (id1, id2) => {
        const id1String = id1.toString();
        const id2String = id2.toString();
        return id1String == id2String;
    }
}
module.exports = HandlebarsHelper