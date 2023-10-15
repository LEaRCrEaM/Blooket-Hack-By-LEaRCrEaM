// ==UserScript==
// @name         Blooket Hack
// @namespace    http://tampermonkey.net/
// @version      Alpha
// @description  Hack for Blooket
// @author       LEaRCrEaM
// @match        https://*.blooket.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=blooket.com
// @grant        unsafeWindow
// ==/UserScript==

(()=>{
    function getAnswerByQuestion(question) {
        var answers = Object.values(body)[1].children[1]._owner.stateNode.questions;
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].question === question) {
                return answers[i].correctAnswers;
            }
        }
        return null;
    }
    const getAnswer = () => {
        if (!document.querySelector('.styles__questionText___2MlSZ-camelCase')) {
            return;
        }
        var question = document.querySelector('.styles__questionText___2MlSZ-camelCase').textContent;
        var answer = getAnswerByQuestion(question);
        if (answer) {
            document.querySelectorAll('.styles__answerTextContainer___3YgCT-camelCase').forEach(e => {
                e.style.background = 'red';
                if (e.textContent === answer[0]) {
                    e.style.background = 'green';
                };
            })
        } else {
            console.log('Question not found.');
        }
    };

    function runGetAnswer() {
        getAnswer();
        requestAnimationFrame(runGetAnswer);
    }
    runGetAnswer();
})()
