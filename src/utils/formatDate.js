import moment from 'moment';

export const formatDate = (date, formatString='MMMM DD, YYYY')=> {
    return moment(date)?.format(formatString);
}
