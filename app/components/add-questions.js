import Ember from 'ember';

export default Ember.Component.extend({
    addForm: false,
    actions: {
        newQuestion(){
            this.set('addForm', true);
        },
        saveQuestion() {
            var params = {
                question: this.get('question'),
                author: this.get('author')
            };
            this.set('addForm', false);
            this.sendAction('saveQuestion', params);
        }
    }
});
