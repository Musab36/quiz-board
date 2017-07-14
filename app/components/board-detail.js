import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
    delete(board) {
      if (confirm('Are sure you want to delete the question?'));
      this.sendAction('destroyQuestion', board);
    },
    destroyAnswer(answer) {
        this.sendAction('destroyAnswer', answer);
    }
  }
});
