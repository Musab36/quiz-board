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
      var newQuestion = this.store.createRecord('board', params);
      newQuestion.save(); 
      this.transitionTo('index');
    }
  }
});
