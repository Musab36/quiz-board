import Ember from 'ember';

export default Ember.Component.extend({
    formIsShown: false, // The answer form is set to false
    actions: {
        newAnswer() {
            this.set('formIsShown', true);// When the answer button is clicked, it sets the form to true
        },
        saveAnswer() { // Answe submit button
            var params = { // A var with the objects to be collected from the user corresponding to the thier inputs
                user: this.get('user'), // Author
                content: this.get('content'), // Answer
                board: this.get('board') // The board route provided with an acess to the answers
            };
            this.set('formIsShown', false); // Form is set to false again
            this.sendAction('saveAnswer', params); // Save action sent
        }
    }
});
