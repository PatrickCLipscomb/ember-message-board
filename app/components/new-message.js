import Ember from 'ember';

export default Ember.Component.extend({
  showAnswerForm: false,
  actions: {
    showAnswerForm() {
      this.set('showAnswerForm', true);
    },
    newAnswer() {
      var params: {
        content: this.get('content'),
        author: this.get('author'),
        question: this.get('question'),
        timestamp: Date()
      };
      this.sendAction('newAnswer', params)
      this.set('content', '');
      this.set('author', '');
    }
  }
});
