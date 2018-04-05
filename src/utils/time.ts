import * as moment from 'moment';
import 'moment/locale/ja';

export type IDateFormat = {
	ISO: 'YYYY-MM-DDTHH:mm:ssZ',
	JP_SHORT: 'YYYY/MM/DD',
	JP: 'YYYY/MM/DD HH:mm',	
}

const DATE_FORMAT: IDateFormat = {
	ISO: 'YYYY-MM-DDTHH:mm:ssZ',
	JP_SHORT: 'YYYY/MM/DD',
	JP: 'YYYY/MM/DD HH:mm',
};

export const getFormattedDatetime = (datetime: string | number, format: keyof IDateFormat = 'ISO', defaultTime: Date = new Date()): string => {
	const input = datetime as string
	const d = new Date(input);
	if (d.getFullYear() < 2000) {
		return moment(defaultTime).format(DATE_FORMAT[format]);
	}
	return moment(input).format(DATE_FORMAT[format]);
}

export const isAfterDatetime = (datetime: Date, target?: moment.Moment): boolean => {
	const targetMoment = (target == null) ? moment() : moment(target);
	return moment(datetime).isAfter(targetMoment);
}