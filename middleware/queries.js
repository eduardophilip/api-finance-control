const requestQuery = (reqQuery) => {

    const hasName = reqQuery.hasOwnProperty('name');
    const hasAmount = reqQuery.hasOwnProperty('amount');
    const hasday = reqQuery.hasOwnProperty('day');
    const hasMonth = reqQuery.hasOwnProperty('month');
    const hasYear = reqQuery.hasOwnProperty('year');
    const hasCategory = reqQuery.hasOwnProperty('category');
    const hasTransactionType = reqQuery.hasOwnProperty('transactionType');

    let name;
    let amount;
    let day;
    let month;
    let year;
    let category;
    let transactionType;

    if(hasName) {
        name = {
            name: {
                $regex: `${reqQuery.name}`,
                $options: 'i' 
            }
        } 
    }
    if(hasAmount) {
        amount = {
            amount: reqQuery.amount
        }
    } 
    if(hasday) {
        day = {
            "date.day": {
                $regex: `${reqQuery.day}`,
                $options: 'i' 
            }
        }
    } 

    if(hasMonth) {
        month = {
            "date.month": {
                $regex: `${reqQuery.month}`,
                $options: 'i' 
            }
        }
    } 

    if(hasYear) {
        year = {
            "date.year": {
                $regex: `${reqQuery.year}`,
                $options: 'i' 
            }
        }
    } 

    if(hasCategory) {
        category = {
            category: {
                $regex: `${reqQuery.category}`,
                $options: 'i' 
            }
        }
    }

    if(hasTransactionType) {
        transactionType = {
            transactionType: {
                $regex: `${reqQuery.transactionType}`,
                $options: 'i' 
            }
        }
    }

    const query = Object.assign({}, name, amount, day, month, year, category, transactionType); 

    return query;

}

module.exports = requestQuery;