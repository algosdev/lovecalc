import axios from 'axios'
const ShowResult = (name1, name2, percentage,
    txt) => {
    return {
        type: "SHOW",
        name1,
        name2,
        percentage,
        txt
    }
}
const Calculating = () => {
    return {
        type: "CALCULATING",
    }
}
export const Reset = () => {
    return {
        type: "RESET",
    }
}
export const fetchData = (name1, name2) => {
    return (dispatch) => {
        dispatch(Calculating());
        axios({
            'url': `https://love-calculator.p.rapidapi.com/getPercentage?fname=${name1}&sname=${name2}`,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                "x-rapidapi-key": "a8e2a8492fmsh8bcac5361f1b3eap1872a6jsn2b795f6b2274"
            }
        }).then(res => {
            setTimeout(() => {
                dispatch(ShowResult(name1, name2, res.data.percentage, res.data.result))
            }, 1500)
        }).catch(err => {
            console.log(err)
        })
    }
}