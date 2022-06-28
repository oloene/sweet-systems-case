import { isBefore } from "date-fns";

export const sort_types = {
    _number: "number",
    _text: "text",
    _date: "date",
};

/**
 * Sort array of objects by their sortProperty and type
 * @param {array} array
 * @param {object: { inverse: bool, type: string, sortProperty: string }} sortedBy
 * @returns sorted array
 */
export function sortByProperty(array, sortedBy) {
    const { inverse, sortType, sortProperty } = sortedBy;

    switch (sortType) {
        case sort_types._date: {
            return [...array].sort((a, b) => {
                if (isBefore(a[sortProperty], b[sortProperty])) {
                    return inverse ? 1 : -1;
                }
                if (isBefore(b[sortProperty], a[sortProperty])) {
                    return inverse ? -1 : 1;
                }

                return 0;
            });
        }

        case sort_types._text: {
            return [...array].sort((a, b) =>
                inverse
                    ? b[sortProperty].localeCompare(a[sortProperty])
                    : a[sortProperty].localeCompare(b[sortProperty])
            );
        }

        case sort_types._number: {
            return [...array].sort((a, b) =>
                inverse
                    ? b[sortProperty] - a[sortProperty]
                    : a[sortProperty] - b[sortProperty]
            );
        }

        default:
            return array;
    }
}
