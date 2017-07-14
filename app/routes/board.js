import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        destroyQuestion(board) {
        var answer_deletion = board.get('answers').map(function(answer) {
            return answer.destroyRecord();
        });
        Ember.RSVP.all(answer_deletion).then(function() {
            return board.destroyRecord();
        });
        this.transitionTo('index');
    },
    destroyAnswer(answer) {
       answer.destroyRecord();
       this.transitionTo('index');
    },
        saveAnswer(params) {
            var newAnswer = this.store.createRecord('answer', params);
            var board = params.board;
            board.get('answers').addObject(newAnswer);
            newAnswer.save().then(function() {
                return board.save();
            });
            this.transitionTo('board', board);
        }
    }
});
