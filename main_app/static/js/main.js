console.log('main.js loaded')
function handleReplyButton(responseId) {
    const replyFormContainer = document.getElementById(`reply-form-container-${responseId}`);
    if (replyFormContainer) {
      replyFormContainer.className = 'reply-form-container enabled'
    }
  }
  
  function handleCancelReply(responseId) {
    
    }
  
// document.querySelector('.reply-button').addEventListener('click', handleReplyButton)