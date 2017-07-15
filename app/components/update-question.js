import Ember from 'ember';

export default Ember.Component.extend({
  updateQuizForm: false,
  actions: {
    updateQuizForm() {
      this.set('updateQuizForm', true);
    },
    update(board) {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
      };
      this.set('updateQuizForm', false);
      this.sendAction('update', board, params);
    }
  }
});