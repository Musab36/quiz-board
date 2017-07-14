import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
    update(board, params) {
     Object.keys(params).forEach(function(key) {
       if(params[key]!==undefined) { 
         rental.set(key, params[key]); 
       }
     });
     board.save();
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
