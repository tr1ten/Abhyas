export const getSubjectKey = (qid) => {
    const id_letter = qid.slice(0, 1)
    let key;
    if (id_letter === 'm') {
        key = 'Maths'
    }
    else if (id_letter === 'p') {
        key = 'Physics'
    }
    else {
        key = 'Chemistry'
    }
    return key;
}
export const getSummary = (userRecord, totalQuestion = 90) => {
    const summary = {
        markForReview: 0,
        answered: 0,
        unanswered: 0,
        answeredReview: 0,
    }
    console.log(userRecord)
    for (let record of userRecord) {
        if (record.markForReview) {
            if (!record.selectedAnswer) {
                summary.markForReview++;
            }
            else {

                summary.answeredReview++;
            }
        }

        else if (record.selectedAnswer) {
            summary.answered++;
        }
        else {
            summary.unanswered++;
        }
    }
    return { ...summary, notVisited: totalQuestion - userRecord.length }




}