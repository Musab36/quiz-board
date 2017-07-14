import Ember from 'ember';

export default Ember.Component.extend({
    formIsShown: false,
    actions: {
        newAnswer() {
            this.set('formIsShown', true);
        },
        saveAnswer() {
            var params = {
                user: this.get('user'),
                content: this.get('content'),
                board: this.get('board')
            };
            this.set('formIsShown', false);
            this.sendAction('saveAnswer', params);
        }
    }
});
