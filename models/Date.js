const dayjs = require('dayjs');

formatDate = date => {
    date = dayjs();
    return date.format("MM DD YYYY h:mm A")
};

module.exports = formatDate;