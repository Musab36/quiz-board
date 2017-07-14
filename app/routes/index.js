import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            boards: this.store.findAll('board'),
            answers: this.store.findAll('answer')
        });
    },
    actions: {
        saveQuestion(params) {
            var newQuiz = this.store.createRecord('question', params);
            newQuiz.save();
            this.transitionTo('index');
        }
    }
});
