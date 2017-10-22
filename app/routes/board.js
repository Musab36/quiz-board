import Ember from 'ember';

export default Ember.Route.extend({
     model(params) {
    return this.store.findRecord('board', params.board_id);
  },
    actions: {
      update(board, params) { // Update action received all the way from the component update-question
      Object.keys(params).forEach(function(key) { // For each key in the params
        if(params[key]!==undefined) { // If it is NOT undefined
          board.set(key,params[key]); //Take the board and set the property that matches the current key, to the value of the current key
        }
      });
      board.save(); // Question edit saved
      this.transitionTo('board'); // Then we go back to the board route
    },
        saveAnswer(params) {
            var newAnswer = this.store.createRecord('answer', params); //We idnetify the answer object
            var board = params.board; // and board/question object it will belong to
            board.get('answers').addObject(newAnswer);//Then, we add the new answer to the answers attribute of our current board using the .addObject(); method.
            newAnswer.save().then(function() {//we save the new answer and specify to only save the board question after the answer has been successfully saved by using .then();
                return board.save();
            });
            this.transitionTo('board', board);
        }
    }
});
