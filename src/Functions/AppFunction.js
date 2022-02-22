//Get Currency Symcol
export const getCurrencySymbol = (currency) => {
    if (currency === "USD") {
        return "$";
    } 
    else if (currency === "GBP") {
        return "£";
    }

    else if (currency === "AUD") {
        return "A$";
    }

    else if (currency === "JPY") {
        return "¥";
    }

    else if (currency === "RUB") {
        return "₽";
    }
}

export const  switchProductCategory = (category) => {
    this.setState({
        category
    });
}
 
