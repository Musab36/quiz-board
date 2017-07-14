import Ember from 'ember';

export default Ember.Component.extend({
    updateQuiz: false,
    actions: {
        editQuiz() {
            this.set('updateQuiz', true);
        },
        update(board) {
            var params = {
                question: this.get('question'),
                author: this.get('author'),
            };
            this.set('updateQuiz', false);
            this.sendAction('update', board, params);
        }
    }
});
