import { FormatDate, RemoveZero } from './utils'
import moment from 'moment';

export default function getDate(date) {
    const dateAndTimeNow = moment().format("YYYY-MM-DD HH:mm:ss")
    const dateAndTimeApi = date
    const dateNow = dateAndTimeNow.match(/([12]\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/)
    const hoursNow = dateAndTimeNow.match(/([01]\d|2[0123]):([012345]\d):([012345]\d)/)
    const dateApi = dateAndTimeApi.match(/([12]\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/)
    const hoursApi = dateAndTimeApi.match(/([01]\d|2[0123]):([012345]\d):([012345]\d)/)

    var date = FormatDate(RemoveZero(dateApi), RemoveZero(dateNow), RemoveZero(hoursApi), RemoveZero(hoursNow))

    return date
}

