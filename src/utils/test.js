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
const generalMarkingScheme = {
    correct:4,
    incorrect:-1,
}
export const getResults = (userResponse,answerKey,markingScheme=generalMarkingScheme)=>{
    const totalMarks = answerKey.totalQues * markingScheme.correct;
    let userMarks = 0;
    const analytics = {}
    for (let eachResponse of userResponse) {
        if(eachResponse.selectedAnswer){
            const actualAnswer = answerKey[getSubjectKey(eachResponse.qid.slice(0,1))].find((item)=>item.id===eachResponse.qid).right
            if(actualAnswer===eachResponse.selectedAnswer){
                userMarks = userMarks + markingScheme.correct;
                analytics[eachResponse.qid] = {
                    comment:'CORRECT!',
                    selectedAnswer:eachResponse.selectedAnswer,
                    actualAnswer,

                }
            }
            else{
                userMarks = userMarks - markingScheme.correct;
                analytics[eachResponse.qid] = {
                    comment:'INCORRECT!',
                    selectedAnswer:eachResponse.selectedAnswer,
                    actualAnswer,

                }

            }

        }
        
        
    }
    return {analytics,userMarks,totalMarks}


}